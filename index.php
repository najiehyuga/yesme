<?php
/**
 * Personal Portfolio - Cyberpunk Edition
 * Automatically serves the React + Tailwind + Framer Motion production build
 */
$distHtml = __DIR__ . '/dist/index.html';
if (file_exists($distHtml)) {
    $content = file_get_contents($distHtml);
    // Adjust relative asset paths for Apache root folder access
    $content = str_replace('href="./assets/', 'href="./dist/assets/', $content);
    $content = str_replace('src="./assets/', 'src="./dist/assets/', $content);
    $content = str_replace('href="assets/', 'href="dist/assets/', $content);
    $content = str_replace('src="assets/', 'src="dist/assets/', $content);
    echo $content;
} else {
    echo "<div style='font-family:monospace;background:#050608;color:#00f0ff;padding:40px;text-align:center;'>";
    echo "<h1>[PORTFOLIO INITIALIZING]</h1><p>Please run <code>npm run build</code> in the project directory to generate the production bundle.</p>";
    echo "</div>";
}
