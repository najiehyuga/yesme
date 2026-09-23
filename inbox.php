<?php
/**
 * Cyberpunk Portfolio - Terminal Inbox Manager
 * View and manage incoming transmissions from the contact form.
 */
$dataFile = __DIR__ . '/data/messages.json';
$messages = [];
if (file_exists($dataFile)) {
    $content = file_get_contents($dataFile);
    $messages = json_decode($content, true) ?: [];
}

// Handle delete action
if (isset($_GET['delete'])) {
    $delId = $_GET['delete'];
    $messages = array_filter($messages, function($m) use ($delId) {
        return $m['id'] !== $delId;
    });
    file_put_contents($dataFile, json_encode(array_values($messages), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    header('Location: inbox.php?deleted=1');
    exit();
}
?>
<!DOCTYPE html>
<html lang="id" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CYBER_INBOX // Terminal Transmisi Pesan</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@600;700;800&family=Rajdhani:wght@500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background-color: #050608;
      color: #f1f5f9;
      font-family: 'Rajdhani', sans-serif;
    }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-heading { font-family: 'Orbitron', sans-serif; }
    .glow-blue { box-shadow: 0 0 25px rgba(44, 103, 237, 0.4); }
    .glow-cyan { text-shadow: 0 0 10px rgba(0, 240, 255, 0.7); }
    .cyber-grid {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(44, 103, 237, 0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(44, 103, 237, 0.08) 1px, transparent 1px);
    }
  </style>
</head>
<body class="cyber-grid min-h-screen p-4 sm:p-8">
  <div class="max-w-6xl mx-auto">
    
    <!-- Top HUD Header -->
    <header class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-[#2c67ed]/40 gap-4">
      <div>
        <div class="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-1">
          <span class="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse"></span>
          <span>SYS_COMM // INCOMING_DATA_TERMINAL</span>
        </div>
        <h1 class="font-heading text-2xl sm:text-3xl font-black tracking-wider text-white">
          KOTAK PESAN <span class="text-[#2c67ed] glow-cyan">CYBER</span>
        </h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
          Semua pesan yang dikirimkan pengunjung melalui formulir kontak portofolio.
        </p>
      </div>

      <div class="flex items-center gap-3">
        <a href="./" class="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#0a0e1c] border border-slate-700 hover:border-[#00f0ff] text-slate-300 hover:text-white transition-all">
          &larr; BUKA WEBSITE
        </a>
        <div class="px-3 py-2 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 text-xs font-mono text-[#00f0ff]">
          TOTAL PESAN: <span class="font-bold text-white"><?= count($messages) ?></span>
        </div>
      </div>
    </header>

    <?php if (isset($_GET['deleted'])): ?>
      <div class="mb-6 p-4 rounded-xl bg-[#ff007f]/15 border border-[#ff007f] text-[#ff007f] font-mono text-xs flex items-center gap-2">
        <span>[STATUS]: Pesan berhasil dihapus dari terminal data.</span>
      </div>
    <?php endif; ?>

    <!-- Message List -->
    <?php if (empty($messages)): ?>
      <div class="p-12 text-center rounded-3xl border border-slate-800 bg-[#090d1c]/80 backdrop-blur-xl">
        <div class="text-[#2c67ed] text-4xl mb-3 font-mono">&gt; //</div>
        <h3 class="font-heading text-lg text-white">Belum Ada Transmisi Pesan</h3>
        <p class="text-slate-400 font-mono text-xs mt-2">
          Saat pengunjung mengirim pesan dari website, data akan otomatis muncul di sini.
        </p>
      </div>
    <?php else: ?>
      <div class="space-y-4">
        <?php foreach ($messages as $msg): ?>
          <div class="p-6 rounded-2xl border border-[#2c67ed]/40 bg-[#090d1c]/90 backdrop-blur-xl hover:border-[#00f0ff] transition-all glow-blue">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#2c67ed]/25 text-[#00f0ff] border border-[#2c67ed]/40">
                  <?= htmlspecialchars($msg['id']) ?>
                </span>
                <span class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  <?= htmlspecialchars($msg['category']) ?>
                </span>
                <span class="text-xs font-mono text-slate-400">
                  <?= htmlspecialchars($msg['timestamp']) ?>
                </span>
              </div>

              <div class="flex items-center gap-2">
                <a href="mailto:<?= htmlspecialchars($msg['email']) ?>?subject=Re:%20<?= urlencode($msg['category']) ?>" class="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40 hover:bg-[#00ff66]/30 transition-all">
                  BALAS VIA EMAIL &rarr;
                </a>
                <a href="?delete=<?= urlencode($msg['id']) ?>" onclick="return confirm('Hapus pesan ini?')" class="px-3 py-1 rounded-lg text-xs font-mono text-slate-400 hover:text-[#ff007f] hover:bg-[#ff007f]/10 transition-all">
                  HAPUS
                </a>
              </div>
            </div>

            <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span class="text-slate-500">PENGIRIM:</span>
                <span class="text-white font-bold ml-1"><?= htmlspecialchars($msg['name']) ?></span>
              </div>
              <div>
                <span class="text-slate-500">EMAIL:</span>
                <a href="mailto:<?= htmlspecialchars($msg['email']) ?>" class="text-[#00f0ff] hover:underline ml-1">
                  <?= htmlspecialchars($msg['email']) ?>
                </a>
              </div>
            </div>

            <div class="mt-4 p-4 rounded-xl bg-[#04060d] border border-slate-800/80 text-sm font-sans text-slate-200 leading-relaxed whitespace-pre-wrap">
              <?= nl2br(htmlspecialchars($msg['message'])) ?>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>

  </div>
</body>
</html>
