<?php
/**
 * Cyberpunk Portfolio - Contact Form API Handler
 * Handles message transmission, logs to local inbox, and sends email to developer.
 */

// Allow CORS for local dev server (Vite on port 5173) and Apache
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Hanya metode POST yang diizinkan.'
    ]);
    exit();
}

// Read JSON input or fallback to POST form data
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$category = trim($data['category'] ?? 'Kolaborasi Proyek');
$message = trim($data['message'] ?? '');

// Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Semua kolom bertanda bintang (*) wajib diisi.'
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Format alamat email tidak valid.'
    ]);
    exit();
}

// 1. Simpan pesan ke folder data/messages.json lokal (agar tidak pernah hilang di XAMPP)
$storageDir = __DIR__ . '/../data';
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0777, true);
}

$inboxFile = $storageDir . '/messages.json';
$messages = [];
if (file_exists($inboxFile)) {
    $content = file_get_contents($inboxFile);
    $decoded = json_decode($content, true);
    if (is_array($decoded)) {
        $messages = $decoded;
    }
}

$newId = 'CYBER_' . strtoupper(substr(uniqid(), -6));
$entry = [
    'id' => $newId,
    'timestamp' => date('Y-m-d H:i:s'),
    'name' => htmlspecialchars($name, ENT_QUOTES, 'UTF-8'),
    'email' => htmlspecialchars($email, ENT_QUOTES, 'UTF-8'),
    'category' => htmlspecialchars($category, ENT_QUOTES, 'UTF-8'),
    'message' => htmlspecialchars($message, ENT_QUOTES, 'UTF-8'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1',
    'status' => 'UNREAD'
];

array_unshift($messages, $entry);
file_put_contents($inboxFile, json_encode($messages, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// 2. Kirim pesan via fungsi mail() PHP ke email pengembang
$to = 'najiexd2020@gmail.com';
$subject = "=?UTF-8?B?" . base64_encode("[CYBER TRANSMISSION] {$category} dari {$name}") . "?=";

$emailBody = "=================================================\n";
$emailBody .= "   CYBER TRANSMISSION // NEW INCOMING MESSAGE\n";
$emailBody .= "=================================================\n\n";
$emailBody .= "TRANSMISSION ID : {$newId}\n";
$emailBody .= "WAKTU           : " . date('d F Y, H:i:s') . " WIB\n";
$emailBody .= "PENGIRIM        : {$name}\n";
$emailBody .= "EMAIL           : {$email}\n";
$emailBody .= "KATEGORI        : {$category}\n\n";
$emailBody .= "ISI PESAN:\n";
$emailBody .= "-------------------------------------------------\n";
$emailBody .= $message . "\n";
$emailBody .= "-------------------------------------------------\n\n";
$emailBody .= "Dikirim melalui formulir kontak portofolio cyberpunk: http://" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=utf-8';
$headers[] = 'From: Cyber Portfolio <noreply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost') . '>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = @mail($to, $subject, $emailBody, implode("\r\n", $headers));

// Format mailto link sebagai fallback instan untuk client
$mailtoSubject = rawurlencode("[Portfolio Inquiry] {$category} dari {$name}");
$mailtoBody = rawurlencode("Halo As'ad Najiy,\n\nNama: {$name}\nEmail: {$email}\nKategori: {$category}\n\nPesan:\n{$message}");
$mailtoUrl = "mailto:{$to}?subject={$mailtoSubject}&body={$mailtoBody}";

echo json_encode([
    'status' => 'success',
    'message' => 'Transmisi pesan berhasil diterima dan disimpan di terminal inbox!',
    'id' => $newId,
    'mail_dispatched' => (bool)$mailSent,
    'recipient' => $to,
    'mailto_url' => $mailtoUrl
]);
