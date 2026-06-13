from pathlib import Path

base_style = """*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#09090f;--bg2:#13101f;--panel:rgba(255,255,255,.06);--panel-strong:rgba(255,255,255,.12);--border:rgba(255,255,255,.10);--text:#f7f5ff;--muted:#c7c2e0;--accent:#a855f7;--accent2:#7c3aed;--radius:28px;--max:1200px;}
html{scroll-behavior:smooth}
body{min-height:100vh;font-family:'Inter',sans-serif;background:radial-gradient(circle at top, rgba(168,85,247,.16), transparent 30%),radial-gradient(circle at 80% 10%, rgba(124,58,237,.11), transparent 30%),linear-gradient(180deg,#09090f 0%,#070708 100%);color:var(--text);}
a{color:inherit;text-decoration:none;}
.page{min-height:100vh;padding:28px 20px 48px;}
.page-inner{max-width:var(--max);margin:0 auto;}
.nav{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:18px 24px;margin-bottom:36px;border-radius:999px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);backdrop-filter:blur(18px);}
.logo{font-size:22px;font-weight:900;color:var(--accent);}
.nav-links{display:flex;flex-wrap:wrap;gap:16px;}
.nav-links a{font-weight:700;color:rgba(247,245,255,.84);transition:.2s;}
.nav-links a:hover{color:#fff;}
.hero{display:grid;gap:24px;padding:40px;border-radius:32px;background:rgba(255,255,255,.05);border:1px solid var(--border);box-shadow:0 28px 90px rgba(0,0,0,.35);backdrop-filter:blur(20px);}
.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;align-items:center;}
.hero-copy{max-width:680px;}
.eyebrow{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.24em;color:rgba(168,85,247,.9);margin-bottom:12px;}
.hero h1{font-size:clamp(3rem,4vw,4.4rem);line-height:1.02;max-width:11ch;}
.hero-text{font-size:1.05rem;line-height:1.8;color:var(--muted);max-width:720px;}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:22px;}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 22px;font-weight:900;border-radius:18px;transition:.25s;}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;box-shadow:0 18px 40px rgba(124,58,237,.35);}
.btn.primary:hover{transform:translateY(-2px);}
.btn.secondary{border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:var(--text);}
.btn.secondary:hover{background:rgba(255,255,255,.08);}
.section{margin-top:50px;}
.section-header{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:26px;}
.section-header h2{font-size:2.05rem;line-height:1.1;}
.section-copy{max-width:760px;color:var(--muted);line-height:1.8;}
.grid{display:grid;gap:20px;}
.cards{grid-template-columns:repeat(3,minmax(0,1fr));}
.card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:26px;padding:30px;backdrop-filter:blur(16px);transition:.25s;}
.card:hover{transform:translateY(-4px);border-color:rgba(168,85,247,.35);}
.card h3{font-size:1.15rem;margin-bottom:10px;}
.card p{color:var(--muted);line-height:1.75;}
.panel{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:28px;padding:32px;backdrop-filter:blur(16px);}
.panel h3{font-size:1.2rem;margin-bottom:16px;}
.panel ul{list-style:none;padding:0;margin:0;}
.panel li{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.08);color:var(--muted);font-weight:700;}
.panel li:last-child{border-bottom:0;}
.table{overflow-x:auto;border-radius:28px;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.04);}
.table table{width:100%;border-collapse:collapse;}
.table th,.table td{padding:16px 18px;text-align:left;border-bottom:1px solid rgba(255,255,255,.08);}
.table th{font-weight:900;color:#fff;background:rgba(255,255,255,.05);}
.highlight{color:var(--accent);font-weight:900;}
.stats{grid-template-columns:repeat(3,minmax(0,1fr));}
.stat{padding:30px;border-radius:26px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);transition:.25s;}
.stat:hover{transform:translateY(-4px);border-color:rgba(168,85,247,.35);}
.stat-number{font-size:2.75rem;font-weight:900;color:var(--accent);}
.stat-label{margin-top:12px;color:var(--muted);font-weight:700;line-height:1.6;}
.testimonials{grid-template-columns:repeat(2,minmax(0,1fr));}
.testimonial{padding:28px;border-radius:28px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);}
.testimonial p{line-height:1.8;color:rgba(247,245,255,.92);}
.author{margin-top:18px;font-weight:900;color:var(--accent);}
@media(max-width:1024px){.hero-grid{grid-template-columns:1fr}.stats,.testimonials,.cards{grid-template-columns:1fr}.nav{flex-wrap:wrap;justify-content:center;}.nav-links{justify-content:center;}.section-header{align-items:flex-start;}}
@media(max-width:640px){.hero{padding:28px;}.hero h1{font-size:2.6rem;}.nav{padding:16px;}.page{padding:20px 16px 40px;}}
"""

pages = {
    'index.html': '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YZY Tweaks</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>{style}</style>
</head>
<body>
<div class="page">
  <div class="page-inner">
    <div class="nav">
      <a href="index.html" class="logo">YZY Tweaks</a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="docs.html">Docs</a>
        <a href="features.html">Features</a>
        <a href="benchmarks.html">Benchmarks</a>
        <a href="credibility.html">Credibility</a>
        <a href="download.html">Download</a>
      </div>
    </div>

    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">YZY TWEAKS</div>
          <h1>Premium Windows performance, stability, and reliability in one polished toolkit.</h1>
          <p class="hero-text">YZY Tweaks brings system-level optimizations, cleanups, and performance profiles together in a modern interface. Every page feels consistent, and every step is designed to keep updates, downloads, and support easy.</p>
          <div class="hero-actions">
            <a href="download.html" class="btn primary">Download Now</a>
            <a href="docs.html" class="btn secondary">Read the Docs</a>
          </div>
        </div>
        <div class="panel">
          <h3>Why users choose YZY Tweaks</h3>
          <ul>
            <li>Fast setup with safe system profiles</li>
            <li>Optimized for gaming, streaming, and daily work</li>
            <li>Reversible changes with restore points built in</li>
            <li>One unified UI across every site page</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>What’s included</h2>
        <p class="section-copy">A consistent interface across docs, downloads, benchmarks, and support. Each page now shares the same header, layout, and visual experience.</p>
      </div>
      <div class="grid cards">
        <div class="card">
          <h3>Performance Tuning</h3>
          <p>System tweaks for CPU, GPU, memory, and responsiveness that work together without noise.</p>
        </div>
        <div class="card">
          <h3>Detailed Docs</h3>
          <p>Clear installation steps, activation guidance, and troubleshooting in one place.</p>
        </div>
        <div class="card">
          <h3>Trusted Results</h3>
          <p>Benchmarks and credibility content that reinforce the product value and safety.</p>
        </div>
        <div class="card">
          <h3>Smooth Navigation</h3>
          <p>All pages now preserve the same header, button styles, and spacing for an app-like flow.</p>
        </div>
        <div class="card">
          <h3>Download Flow</h3>
          <p>Download page, success page, and activation flow have been updated to match the homepage.</p>
        </div>
        <div class="card">
          <h3>Modern Brand</h3>
          <p>Updated wording and consistent page styling give the whole site a clean, premium look.</p>
        </div>
      </div>
    </section>

    <section class="section" id="pricing">
      <div class="section-header">
        <h2>Plans and access</h2>
        <p class="section-copy">Choose a plan for advanced tweak access, priority downloads, and future updates. The same polished UI is preserved throughout the site.</p>
      </div>
      <div class="grid" style="grid-template-columns:repeat(2,minmax(0,1fr));">
        <div class="panel">
          <h3>Pro</h3>
          <ul>
            <li>+20 advanced tweaks</li>
            <li>Priority download access</li>
            <li>Performance profiles</li>
          </ul>
        </div>
        <div class="panel">
          <h3>Lifetime</h3>
          <ul>
            <li>Full tweak library</li>
            <li>Future updates included</li>
            <li>All unlocked profiles</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</div>
</body>
</html>'''.format(style=base_style),
    'docs.html': '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Docs — YZY Tweaks</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>{style}</style>
</head>
<body>
<div class="page">
  <div class="page-inner">
    <div class="nav">
      <a href="index.html" class="logo">YZY Tweaks</a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="docs.html">Docs</a>
        <a href="features.html">Features</a>
        <a href="benchmarks.html">Benchmarks</a>
        <a href="credibility.html">Credibility</a>
        <a href="download.html">Download</a>
      </div>
    </div>

    <section class="hero">
      <div class="eyebrow">Documentation</div>
      <h1>Setup, activation, and support guidance for YZY Tweaks.</h1>
      <p class="hero-text">This page keeps the same header, look, and structure as the rest of the site while delivering clear installation steps and usage information.</p>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>Getting started</h2>
        <p class="section-copy">Follow these steps to install YZY Tweaks and unlock your premium access quickly.</p>
      </div>
      <div class="grid cards">
        <div class="card">
          <h3>Download the toolkit</h3>
          <p>Click the download page to retrieve the latest installer and follow the browser prompt.</p>
        </div>
        <div class="card">
          <h3>Install safely</h3>
          <p>Run the executable as administrator, then allow the app to apply recommended changes.</p>
        </div>
        <div class="card">
          <h3>Activate</h3>
          <p>Use your license key in the Activate tab. For Pro and Lifetime plans, access is unlocked immediately.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="panel">
        <h3>Activation FAQ</h3>
        <ul>
          <li>Why is activation required? It verifies your plan and unlocks premium features.</li>
          <li>What if the key does not work? Refresh the page or contact support via Discord.</li>
          <li>Can I reinstall? Yes. Your license remains valid for the selected plan.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="panel">
        <h3>Need help?</h3>
        <p>Open a ticket in Discord with your purchase details, or use the support links from the download and success pages.</p>
        <div class="hero-actions" style="margin-top:24px;">
          <a class="btn primary" href="download.html">Go to Download</a>
          <a class="btn secondary" href="https://discord.gg/84rMHMeKYp" target="_blank">Open Discord</a>
        </div>
      </div>
    </section>
  </div>
</div>
</body>
</html>'''.format(style=base_style),
    'features.html': '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Features — YZY Tweaks</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>{style}</style>
</head>
<body>
<div class="page">
  <div class="page-inner">
    <div class="nav">
      <a href="index.html" class="logo">YZY Tweaks</a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="docs.html">Docs</a>
        <a href="features.html">Features</a>
        <a href="benchmarks.html">Benchmarks</a>
        <a href="credibility.html">Credibility</a>
        <a href="download.html">Download</a>
      </div>
    </div>

    <section class="hero">
      <div class="eyebrow">Features</div>
      <h1>Powerful system optimization tools built for modern Windows users.</h1>
      <p class="hero-text">Every page now shares the same header and overall appearance while the feature descriptions stay focused and easy to read.</p>
    </section>

    <section class="section">
      <div class="grid cards">
        <div class="card"><h3>Windows Tweaks</h3><p>Compact toggle-based system optimizations designed for responsiveness and clean performance.</p></div>
        <div class="card"><h3>CPU / GPU / RAM</h3><p>Hardware-focused tuning modules built to improve frame stability and multitasking.</p></div>
        <div class="card"><h3>Network Optimization</h3><p>Latency-focused configurations aimed at smoother real-time performance.</p></div>
        <div class="card"><h3>Debloat</h3><p>Remove unnecessary background services and reduce CPU/memory overhead.</p></div>
        <div class="card"><h3>Cleaner</h3><p>Maintenance utilities that keep Windows fast over time with safer cleanup routines.</p></div>
        <div class="card"><h3>Restore Points</h3><p>Create restore checkpoints before advanced tweaks for added safety and peace of mind.</p></div>
      </div>
    </section>

    <section class="section">
      <div class="panel">
        <h3>Pro & Lifetime Unlock</h3>
        <ul>
          <li>+20 Advanced Tweaks (Pro)</li>
          <li>Full library access (Lifetime)</li>
          <li>Max performance and stability profiles</li>
          <li>Priority support and future updates</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="hero-actions">
        <a class="btn primary" href="download.html">Download the Toolkit</a>
        <a class="btn secondary" href="docs.html">View Setup Guide</a>
      </div>
    </section>
  </div>
</div>
</body>
</html>'''.format(style=base_style),
    'benchmarks.html': '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Benchmarks — YZY Tweaks</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>{style}</style>
</head>
<body>
<div class="page">
  <div class="page-inner">
    <div class="nav">
      <a href="index.html" class="logo">YZY Tweaks</a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="docs.html">Docs</a>
        <a href="features.html">Features</a>
        <a href="benchmarks.html">Benchmarks</a>
        <a href="credibility.html">Credibility</a>
        <a href="download.html">Download</a>
      </div>
    </div>

    <section class="hero">
      <div class="eyebrow">Benchmarks</div>
      <h1>See the measurable gains from YZY Tweaks.</h1>
      <p class="hero-text">A unified layout across the site helps the benchmarks page feel like part of the same polished product experience.</p>
    </section>

    <section class="section">
      <div class="grid stats">
        <div class="stat"><div class="stat-number" data-target="22">0</div><div class="stat-label">% FPS Stability Increase</div></div>
        <div class="stat"><div class="stat-number" data-target="18">0</div><div class="stat-label">% Latency Reduction</div></div>
        <div class="stat"><div class="stat-number" data-target="35">0</div><div class="stat-label">% Faster Boot Time</div></div>
      </div>
    </section>

    <section class="section">
      <div class="grid" style="grid-template-columns:1fr 1fr;">
        <div class="panel"><h3>Before Optimization</h3><ul><li>Inconsistent FPS</li><li>Background bloat</li><li>Slower boot times</li><li>Higher input delay</li><li>Resource spikes</li></ul></div>
        <div class="panel"><h3>After YZY Tweaks</h3><ul><li class="highlight">Stable frame delivery</li><li class="highlight">Lower background load</li><li class="highlight">Faster startup</li><li class="highlight">Reduced lag</li><li class="highlight">Smoother experience</li></ul></div>
      </div>
    </section>

    <section class="section">
      <div class="table">
        <table>
          <tr><th>Metric</th><th>Before</th><th>After</th></tr>
          <tr><td>Average FPS</td><td>142</td><td class="highlight">173</td></tr>
          <tr><td>Boot Time</td><td>28s</td><td class="highlight">18s</td></tr>
          <tr><td>Idle RAM Usage</td><td>3.2GB</td><td class="highlight">2.4GB</td></tr>
          <tr><td>Ping Stability</td><td>Moderate</td><td class="highlight">High stability</td></tr>
        </table>
      </div>
    </section>
  </div>
</div>
<script>
const counters = document.querySelectorAll('.stat-number');
counters.forEach(counter=>{counter.innerText='0';const update=()=>{const target=+counter.dataset.target;const current=+counter.innerText;const inc=Math.max(1,Math.round(target/55));if(current<target){counter.innerText=`${Math.min(target,current+inc)}`;setTimeout(update,18);}else counter.innerText=target;};update();});
</script>
</body>
</html>'''.format(style=base_style),
    'credibility.html': '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Credibility — YZY Tweaks</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>{style}</style>
</head>
<body>
<div class="page">
  <div class="page-inner">
    <div class="nav">
      <a href="index.html" class="logo">YZY Tweaks</a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="docs.html">Docs</a>
        <a href="features.html">Features</a>
        <a href="benchmarks.html">Benchmarks</a>
        <a href="credibility.html">Credibility</a>
        <a href="download.html">Download</a>
      </div>
    </div>

    <section class="hero">
      <div class="eyebrow">Credibility</div>
      <h1>A trusted optimization toolkit with clear practices and user-focused design.</h1>
      <p class="hero-text">This page now matches the same header, layout, and visual styling as the rest of the site while describing safety, trust, and performance.</p>
    </section>

    <section class="section">
      <div class="grid cards">
        <div class="card"><h3>Transparent Optimization</h3><p>Every tweak is structured around measurable system improvement and safety.</p></div>
        <div class="card"><h3>Reversible Settings</h3><p>Restore points and safe rollback options keep changes under control.</p></div>
        <div class="card"><h3>Performance First</h3><p>Built to improve responsiveness, reduce latency, and deliver consistent results.</p></div>
      </div>
    </section>

    <section class="section testimonials">
      <div class="testimonial"><p>“The UI looks premium and the tweaks actually make a noticeable difference. Easily worth it.”</p><div class="author">— Jordan M.</div></div>
      <div class="testimonial"><p>“Clean, professional, and feels way more legit than random tweak packs online.”</p><div class="author">— Vanessa K.</div></div>
      <div class="testimonial"><p>“Boot times improved and gaming feels smoother. No weird side effects.”</p><div class="author">— Chris L.</div></div>
      <div class="testimonial"><p>“Finally a tweak tool that doesn’t feel sketchy.”</p><div class="author">— Aaron D.</div></div>
    </section>

    <section class="section">
      <div class="panel">
        <h3>Security & stability</h3>
        <p>YZY Tweaks focuses on performance improvements while maintaining system integrity. Restore points and safer implementation practices are recommended before deeper changes.</p>
      </div>
    </section>

    <section class="section">
      <div class="panel">
        <h3>Built for serious users</h3>
        <p>Whether you're a competitive gamer, creator, or power user, YZY Tweaks is designed to deliver consistent, measurable results without compromising stability.</p>
      </div>
    </section>
  </div>
</div>
</body>
</html>'''.format(style=base_style),
    'download.html': '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Download — YZY Tweaks</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>{style}
#loader{position:fixed;inset:0;display:flex;justify-content:center;align-items:center;background:radial-gradient(circle at top, rgba(24,16,46,.95), rgba(7,7,10,.95));z-index:999;transition:opacity .5s ease,visibility .5s ease;}
#loader.hidden{opacity:0;visibility:hidden;}
.loader-card{width:380px;padding:34px;border-radius:28px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(16px);text-align:center;}
.spinner{width:58px;height:58px;border-radius:50%;border:5px solid rgba(255,255,255,.12);border-top-color:var(--accent);animation:spin .9s linear infinite;margin:0 auto;}
@keyframes spin{to{transform:rotate(360deg)}}
.loader-label{margin-top:20px;font-weight:800;letter-spacing:.02em;color:var(--text);}
.loader-sub{margin-top:8px;color:var(--muted);font-size:.95rem;}
</style>
</head>
<body>
<div class="page">
  <div class="page-inner">
    <div class="nav">
      <a href="index.html" class="logo">YZY Tweaks</a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="docs.html">Docs</a>
        <a href="features.html">Features</a>
        <a href="benchmarks.html">Benchmarks</a>
        <a href="credibility.html">Credibility</a>
      </div>
    </div>

    <section class="hero">
      <div class="eyebrow">Download</div>
      <h1>Download your YZY Tweaks installer.</h1>
      <p class="hero-text">If you purchased Pro or Lifetime, use the toolkit to activate your premium unlock after download.</p>
      <div class="hero-actions">
        <a class="btn primary" href="YZYToolkit.exe" download>Download YZYToolkit.exe</a>
        <a class="btn secondary" href="index.html#pricing">View Plans</a>
      </div>
    </section>

    <section class="section">
      <div class="grid" style="grid-template-columns:repeat(2,minmax(0,1fr));">
        <div class="panel"><h3>What to do next</h3><ul><li>Open the downloaded installer.</li><li>Run as administrator.</li><li>Activate your plan with the license key.</li></ul></div>
        <div class="panel"><h3>Need help?</h3><ul><li>Read the setup guide in Docs.</li><li>Use the success page after purchase.</li><li>Contact support on Discord if needed.</li></ul></div>
      </div>
    </section>

    <section class="section">
      <div class="btn-group" style="display:flex;gap:14px;flex-wrap:wrap;"><a class="btn secondary" href="docs.html">Open Docs</a><a class="btn secondary" href="success.html">Go to Success</a></div>
    </section>
  </div>
</div>
<div id="loader"><div class="loader-card"><div class="spinner"></div><div class="loader-label">Preparing your download...</div><div class="loader-sub">This page uses the same clean site header and layout as the homepage.</div></div></div>
<script>window.addEventListener('load',()=>{const loader=document.getElementById('loader');setTimeout(()=>loader.classList.add('hidden'),850);});</script>
</body>
</html>'''.format(style=base_style),
    'success.html': '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Purchase Successful — YZY Tweaks</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>{style}
.blob{position:fixed;width:680px;height:680px;border-radius:50%;filter:blur(74px);opacity:.18;z-index:-1;pointer-events:none;}
.blob.one{top:-180px;left:-220px;background:var(--accent);}
.blob.two{top:-200px;right:-220px;background:var(--accent2);}
.confetti{position:fixed;inset:0;pointer-events:none;z-index:9;overflow:hidden;}
.piece{position:absolute;width:10px;height:14px;border-radius:4px;opacity:.9;animation:fall 1.6s ease-out forwards;}
@keyframes fall{0%{transform:translateY(-20px) rotate(0deg);opacity:0}10%{opacity:1}100%{transform:translateY(110vh) rotate(360deg);opacity:0}}
</style>
</head>
<body>
<div class="blob one"></div>
<div class="blob two"></div>
<div class="confetti" id="confetti"></div>
<div class="page">
  <div class="page-inner">
    <div class="nav">
      <a href="index.html" class="logo">YZY Tweaks</a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="docs.html">Docs</a>
        <a href="features.html">Features</a>
        <a href="benchmarks.html">Benchmarks</a>
        <a href="credibility.html">Credibility</a>
        <a href="download.html">Download</a>
      </div>
    </div>

    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">Purchase Complete</div>
          <h1 id="title">Purchase Successful</h1>
          <p class="hero-text" id="subtitle">Your upgrade is active. Continue to download and finish setup.</p>
          <div class="hero-actions">
            <a id="goDownload" class="btn primary" href="download.html">Continue to Download</a>
            <a class="btn secondary" href="docs.html">Open Docs</a>
          </div>
        </div>
        <div class="panel">
          <h3>Order summary</h3>
          <div class="panel">
            <p><strong>Plan:</strong> <span id="planName">—</span></p>
            <p><strong>Status:</strong> <span style="color:var(--accent);font-weight:800">Paid</span></p>
            <p><strong>Access:</strong> <span id="accessLine">—</span></p>
            <ul>
              <li id="unlockOne">Premium access enabled</li>
              <li id="unlockTwo">Download access</li>
              <li id="unlockThree">Support access</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
<script>
const params=new URLSearchParams(window.location.search);
const plan=(params.get('plan')||'pro').toLowerCase();
const planName=document.getElementById('planName');
const accessLine=document.getElementById('accessLine');
const goDownload=document.getElementById('goDownload');
const title=document.getElementById('title');
const subtitle=document.getElementById('subtitle');
const unlockOne=document.getElementById('unlockOne');
const unlockTwo=document.getElementById('unlockTwo');
const unlockThree=document.getElementById('unlockThree');
function setPlanUI(){
  if(plan==='lifetime'){
    planName.textContent='Lifetime ($15)';
    accessLine.textContent='All features + future updates';
    title.textContent='Lifetime Activated';
    subtitle.textContent='You now have full access. Continue to download and start optimizing.';
    unlockOne.textContent='+50 tweaks unlocked';
    unlockTwo.textContent='Max mode profiles enabled';
    unlockThree.textContent='Priority future updates';
  } else {
    planName.textContent='Pro ($7)';
    accessLine.textContent='Advanced tweaks + profiles';
    title.textContent='Pro Activated';
    subtitle.textContent='You now have Pro access. Continue to download and finish setup.';
    unlockOne.textContent='+20 advanced tweaks';
    unlockTwo.textContent='Profile support enabled';
    unlockThree.textContent='Priority support access';
  }
  goDownload.href=`download.html?plan=${encodeURIComponent(plan)}`;
}
setPlanUI();
const confetti=document.getElementById('confetti');
for(let i=0;i<35;i++){const piece=document.createElement('div');piece.className='piece';piece.style.left=`${Math.random()*100}vw`;piece.style.top=`${-20-Math.random()*30}px`;const size=8+Math.random()*8;piece.style.width=`${size}px`;piece.style.height=`${size+4}px`;const colors=['rgba(168,85,247,.95)','rgba(124,58,237,.95)','rgba(255,255,255,.92)'];piece.style.background=colors[Math.floor(Math.random()*colors.length)];piece.style.animationDelay=`${Math.random()*0.3}s`;confetti.appendChild(piece);setTimeout(()=>piece.remove(),2200);}
</script>
</body>
</html>'''.format(style=base_style),
}

base_path = Path(__file__).parent
for name, content in pages.items():
    destination = base_path / name
    destination.write_text(content, encoding='utf-8')
print('wrote', len(pages), 'pages')
