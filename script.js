/* =========================================================
   For My Love — script
   ========================================================= */

/* ---------- EASILY EDITABLE CONTENT ---------- */
const CONFIG = {
  sinceDate: "2025-11-17T00:00:00", // change me
  photoCount: 15,                    // images/photo1.jpg ... photoN.jpg
  captions: [
    "Mine💖", "MyPreciousOne🤍", "😏MySassyGirl", "🍜MyNoodleLover", "👑MyLittleDiva",
    "MySpoiledPrincess👸", "MyBby🥺", "Home🏡❤️", "Always✨", "Burmese dress<3🎀", "Queen👑✨", "MyForever💍",
    "You🌸", "MyWorld🌙", "Everything💫"
  ],
  letter: [
    "My dearest love,",
    "",
    "From the very first moment our eyes met, my whole world quietly rearranged itself around you. Every ordinary day became softer, brighter, warmer.",
    "",
    "You are the song I hum without thinking, the warmth I look for in every room, the reason my heart still believes in something beautiful.",
    "",
    "Thank you for choosing me. For staying. For loving me on the days I forget how.",
    "",
    "Forever yours,",
    "❤"
  ],
  envelopeLetter: [
    "More Than \"I Love You\"...",
    "",
    "The truth is...",
    "",
    "Sometimes, whenever I try to put into words how much I love you, I realize that my heart holds feelings far greater than any words could ever express.",
    "",
    "That's why every time I tell you, \"I love you,\" there's always a quiet voice inside me whispering, \"It still isn't enough.\"",
    "",
    "The words \"I love you\" that I say to you could never fully express even a fraction of everything I carry in my heart for you.",
    "",
    "People often say that when you love someone, you want to be with them and call them yours. But what I feel for you goes far beyond simply wanting to possess you.",
    "",
    "To me, you're not someone I want to own.\nYou're someone I want to cherish, protect, and treasure for the rest of my life.",
    "",
    "Every time I see you smiling, it's as if my entire world lights up.\nJust hearing your laughter is enough to wash away all the exhaustion I've carried throughout the day.",
    "",
    "But whenever you're hurting, I find myself wishing I could carry your pain instead, because you mean that much to me.",
    "",
    "Your smile isn't just beautiful—it gives me strength.\nYour laughter brings peace to my heart.\nThat's when I realized...\nMy happiness has become inseparable from yours.",
    "",
    "What I feel is more than love...",
    "",
    "Because it's filled with understanding.",
    "",
    "I never see your imperfections as flaws.\nInstead, I see them as the little pieces that make you wonderfully, uniquely you.",
    "",
    "No one in this world is perfect.\nBut somehow, every little imperfection you have only gives me another reason to love you even more.",
    "",
    "No matter what happens...\nNo matter what life brings...\nYou will always be my choice.",
    "",
    "To me, love isn't only about loving someone's best qualities.\nReal love is embracing their weaknesses just as gently as their strengths.",
    "",
    "That's why, no matter who you are or what you're going through, you'll always be someone precious in my eyes.",
    "",
    "What I feel is more than love...",
    "",
    "Because it's built on trust, respect, loyalty, and unwavering commitment.",
    "",
    "Every dream I have for the future already includes you.\nWhenever life becomes overwhelming, you're the place my heart longs to rest.",
    "",
    "Whenever I imagine my future...\nYou're always there.",
    "",
    "When I succeed, you're the first person I want to tell.\nWhen life becomes difficult, you're the shoulder I want to lean on.\nAnd with every passing day, I find myself wanting to spend every tomorrow with you even more.",
    "",
    "When it comes to you, patience comes naturally.\nI want to be the first person to celebrate your victories...\nand the one who quietly stands beside you when you stumble.",
    "",
    "When you're weak, I want to be your strength.\nWhen you lose faith in yourself, I want to believe in you.\nEven if the whole world fails to understand you...\nI'll still stand beside you and understand you.",
    "",
    "Because to me, love isn't about beautiful words.",
    "",
    "It's about understanding each other.\nRespecting each other.\nTrusting each other.\nAnd never letting go, no matter what life throws our way.",
    "",
    "People may define love in countless different ways...",
    "",
    "But to me...",
    "",
    "Love isn't measured by expensive gifts or special occasions.",
    "",
    "It's asking,\n\"Have you eaten today?\"\n\"Are you tired?\"\n\"I'm here for you.\"",
    "",
    "It's making sure you never have to wonder whether you're loved.",
    "",
    "Your happiness will always be my priority.\nYour safety will always matter the most to me.\nSeeing your smile every day is something I quietly pray for.",
    "",
    "I pray that every night you go to bed with peace in your heart.\nThat every morning you wake up with hope.\nThat the reasons for your tears become fewer and fewer with each passing day.",
    "",
    "Even when time changes us...\nEven when you someday think you've lost your beauty...",
    "",
    "To me, you'll always be the same girl I first fell in love with.",
    "",
    "So the next time I tell you,\n\"I love you,\"",
    "",
    "Please know that behind those three simple words are all my care, warmth, understanding, trust, respect, loyalty, and my promise to walk beside you for the rest of our lives.",
    "",
    "If one day you ask me,\n\"Why do you love me this much?\"",
    "",
    "I don't think I'll ever have just one answer.",
    "",
    "Because every single day, I find new reasons to love you.",
    "",
    "Your smile.\nYour kindness.\nYour caring heart.\nSimply because you're you.",
    "",
    "That's why my love for you grows deeper with every passing day.",
    "",
    "I don't love you only for today.\nOr only for tomorrow.",
    "",
    "Even after many years have passed...\nEven when everything else changes...",
    "",
    "The place you hold in my heart never will.",
    "",
    "Because what I feel for you is far greater than simply saying,\n\"I love you.\"",
    "",
    "I cherish you beyond words.",
    "",
    "My little strawberry.\n🍓❤️"
  ],
  timeline: [
    { icon: "❤", title: "We Met", text: "The day the universe finally got it right." },
    { icon: "🌸", title: "First Date", text: "Coffee, nerves, and a heart that wouldn't calm down." },
    { icon: "🎂", title: "First Birthday Together", text: "Candles, cake, and a wish I'm still living." },
    { icon: "✈️", title: "Our First Trip Be", text: "New cities, same hand to hold." },
    { icon: "💍", title: "Future Dreams", text: "A whole life — and I want every page of it with you." },
  ],
};
/* --------------------------------------------- */


/* ===== Particles canvas ===== */
(function particles() {
  const c = document.getElementById('particles');
  const ctx = c.getContext('2d');
  let w, h, parts;
  function resize() { w = c.width = innerWidth; h = c.height = innerHeight }
  function init() {
    parts = [];
    const n = Math.min(110, Math.floor((w * h) / 16000));
    for (let i = 0; i < n; i++) {
      parts.push({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.6 + .4,
        vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
        a: Math.random() * .6 + .2,
        hue: Math.random() < .5 ? 345 : 38, // pink / gold
      });
    }
  }
  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
      grd.addColorStop(0, `hsla(${p.hue},90%,70%,${p.a})`);
      grd.addColorStop(1, `hsla(${p.hue},90%,70%,0)`);
      ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  addEventListener('resize', () => { resize(); init() });
  resize(); init(); tick();
})();


/* ===== Floating hearts on landing ===== */
(function floatHearts() {
  const wrap = document.getElementById('heartsFloating');
  const symbols = ['❤', '♥', '❥'];
  for (let i = 0; i < 22; i++) {
    const s = document.createElement('span');
    s.textContent = symbols[i % symbols.length];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.fontSize = (12 + Math.random() * 22) + 'px';
    s.style.animationDuration = (10 + Math.random() * 18) + 's';
    s.style.animationDelay = (-Math.random() * 20) + 's';
    s.style.opacity = (.25 + Math.random() * .55).toFixed(2);
    wrap.appendChild(s);
  }
})();


/* ===== Parallax scroll for bg glows ===== */
(function parallax() {
  const layers = document.querySelectorAll('.bg-glow');
  addEventListener('scroll', () => {
    const y = scrollY;
    layers.forEach((el, i) => {
      el.style.transform = `translate3d(0, ${y * (0.05 + i * 0.04)}px, 0)`;
    });
  }, { passive: true });
})();


/* ===== Heart Lock Passcode ===== */
const PASSCODE = ['1','1','1','7'];
let entered = [];
const hlOverlay = document.getElementById('hlOverlay');
const hlDigits = document.querySelectorAll('.hld');
const hlError = document.getElementById('hlError');
const hlHeart = document.getElementById('hlHeart');
const hlUnlock = document.getElementById('hlUnlock');

function updateHLDigits() {
  hlDigits.forEach((d, i) => {
    d.textContent = entered[i] !== undefined ? '•' : '';
    d.className = 'hld' + (entered[i] !== undefined ? ' filled' : '');
  });
}

function shakeHL() {
  hlDigits.forEach(d => d.classList.add('wrong'));
  hlUnsolve();
  setTimeout(() => hlDigits.forEach(d => d.classList.remove('wrong')), 500);
}

/* Floating hearts background */
(function hlParticles() {
  const wrap = document.getElementById('hlParticles');
  if (!wrap) return;
  const icons = ['❤','💖','✨','🌸'];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('span');
    el.textContent = icons[i % 4];
    el.style.cssText = `position:absolute;pointer-events:none;
      left:${Math.random()*100}%;top:${100+Math.random()*20}%;
      font-size:${8+Math.random()*16}px;opacity:${.15+Math.random()*.3};
      animation:hlRise ${8+Math.random()*12}s linear infinite;
      animation-delay:${Math.random()*8}s;`;
    wrap.appendChild(el);
  }
})();

// Inject keyframes for floating particles
const hlStyle = document.createElement('style');
hlStyle.textContent = `@keyframes hlRise{0%{transform:translateY(0) rotate(0);opacity:0}10%{opacity:.4}90%{opacity:.3}100%{transform:translateY(-110vh) rotate(360deg);opacity:0}}`;
document.head.appendChild(hlStyle);

function hlUnsolve() {
  hlHeart.style.animation = 'hlShake .4s ease';
  setTimeout(() => { hlHeart.style.animation = ''; }, 500);
}

function hlSolve() {
  const heart = document.getElementById('hlHeart');
  const cracks = document.getElementById('hlCracks');
  const flash = document.getElementById('hlFlash');
  const burst = document.getElementById('hlBurst');
  const unlock = document.getElementById('hlUnlock');

  // Phase 1: Heart heats up and glows
  heart.classList.add('hl-heat-up');

  setTimeout(() => {
    // Phase 2: Crack lines appear
    cracks.classList.add('show');
  }, 500);

  setTimeout(() => {
    // Phase 3: Heart shatters - fade everything
    heart.closest('.hl-center').classList.add('hl-fade');
    // Hide cracks
    cracks.classList.remove('show');
    // Particle burst
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('span');
      const icons = ['❤','💖','✨','💥','🌸'];
      p.textContent = icons[Math.floor(Math.random()*icons.length)];
      const size = 6 + Math.random() * 20;
      p.style.cssText = `position:fixed;pointer-events:none;z-index:201;
        font-size:${size}px;left:50vw;top:50vh;opacity:1;
        transition:all 1.2s cubic-bezier(.25,.46,.45,.94);`;
      document.body.appendChild(p);
      requestAnimationFrame(() => {
        const angle = Math.random() * 360;
        const dist = 60 + Math.random() * 350;
        p.style.left = `calc(50vw + ${Math.cos(angle)*dist}px)`;
        p.style.top = `calc(50vh + ${Math.sin(angle)*dist}px)`;
        p.style.opacity = '0';
        p.style.transform = `scale(0) rotate(${Math.random()*720}deg)`;
      });
      setTimeout(() => p.remove(), 2000);
    }
  }, 900);

  setTimeout(() => {
    // Phase 4: Bright flash
    flash.classList.add('show');
  }, 1100);

  setTimeout(() => {
    // Phase 5: Transition to story
    unlock.classList.add('show');
    const overlay = document.getElementById('hlOverlay');
    overlay.classList.remove('show');
    setTimeout(() => { overlay.style.display = 'none'; }, 600);
    const landing = document.getElementById('landing');
    const story = document.getElementById('story');
    landing.style.transition = 'opacity 1s ease, transform 1s ease';
    landing.style.opacity = '0';
    landing.style.transform = 'scale(1.05)';
    setTimeout(() => {
      landing.style.display = 'none';
      story.classList.remove('hidden');
      initStory();
      tryPlayMusic();
      startHeartRain();
    }, 950);
  }, 1800);
}

document.getElementById('hlKeypad').addEventListener('click', e => {
  const btn = e.target.closest('.hlk');
  if (!btn) return;
  const v = btn.dataset.v;
  if (v === 'clear') { entered = []; hlError.textContent = ''; updateHLDigits(); return; }
  if (v === 'back') { entered.pop(); hlError.textContent = ''; updateHLDigits(); return; }
  if (entered.length >= 4) return;
  entered.push(v);
  updateHLDigits();
  if (entered.length === 4) {
    if (entered.every((d, i) => d === PASSCODE[i])) {
      hlError.textContent = '';
      hlSolve();
    } else {
      hlError.textContent = 'Oops... Try Again ❤️';
      shakeHL();
      setTimeout(() => { entered = []; updateHLDigits(); }, 700);
    }
  }
});

/* ===== Open landing -> story ===== */

/* ===== Open landing -> story ===== */
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
let userInteracted = false;

function tryPlayMusic() {
  if (!audio.src) return;
  audio.volume = parseFloat(document.getElementById('vol').value || .6);
  audio.play().then(() => {
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }).catch(() => { /* user gesture needed */ });
}

document.addEventListener('click', () => {
  if (!userInteracted) {
    userInteracted = true;
    tryPlayMusic();
  }
}, { once: false });

document.getElementById('openBtn').addEventListener('click', () => {
  hlOverlay.style.display = 'grid';
  requestAnimationFrame(() => hlOverlay.classList.add('show'));
  entered = [];
  updateHLDigits();
  hlError.textContent = '';
});


/* ===== Build story content ===== */
function initStory() {
  buildGallery();
  buildEnvelopeLetter();
  buildTimeline();
  buildStars();
  typeLetter();
  startCountdown();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      observeReveal();
    });
  });
  startRisingHearts();
}

/* ===== Gallery ===== */
function buildGallery() {
  const g = document.getElementById('gallery');
  for (let i = 1; i <= CONFIG.photoCount; i++) {
    const rot = (Math.random() * 10 - 5).toFixed(2);
    const delay = (Math.random() * 4).toFixed(2);
    const p = document.createElement('div');
    p.className = 'polaroid';
    p.style.setProperty('--r', rot + 'deg');
    p.style.transform = `rotate(${rot}deg)`;
    p.style.animationDelay = '-' + delay + 's';
    p.dataset.caption = CONFIG.captions[(i - 1) % CONFIG.captions.length];
    const img = document.createElement('img');
    img.src = `images/photo${i}.jpg`;
    img.alt = `memory ${i}`;
    img.loading = 'lazy';
    img.onerror = () => {
      // graceful placeholder: gradient + heart
      img.replaceWith(Object.assign(document.createElement('div'), {
        className: 'ph',
        style: `width:100%;aspect-ratio:1/1;border-radius:2px;
               background:linear-gradient(135deg,#7a0d22,#ff3b6b);
               display:grid;place-items:center;color:#fff;font-size:42px;`,
        innerHTML: '<i class="fa-solid fa-heart"></i>'
      }));
    };
    p.appendChild(img);
    p.addEventListener('click', () => openLightbox(img.src));
    g.appendChild(p);
  }
}

/* ===== Envelope letter ===== */
let envelopeTypingTimer = null;

function buildEnvelopeLetter() {
  const inner = document.getElementById('envPaperInner');
  inner.textContent = '';
}

function typeEnvelopeLetter() {
  const target = document.getElementById('envPaperInner');
  const lines = CONFIG.envelopeLetter;
  target.textContent = '';
  let li = 0, ci = 0;
  function step() {
    if (li >= lines.length) return;
    const line = lines[li];
    if (ci < line.length) {
      target.append(line[ci]);
      ci++;
      envelopeTypingTimer = setTimeout(step, 3 + Math.random() * 7);
    } else {
      target.append('\n');
      li++; ci = 0;
      envelopeTypingTimer = setTimeout(step, line.length === 0 ? 20 : 50);
    }
  }
  step();
}

function openEnvelope() {
  const env = document.getElementById('envEnvelope');
  if (env.classList.contains('open')) return;
  env.classList.add('open');
  document.querySelector('.env-container').classList.add('expanded');
  burstHearts(env);
  setTimeout(typeEnvelopeLetter, 700);
  setTimeout(watchEnvelopeClose, 1500);
}

function watchEnvelopeClose() {
  const nextSection = document.querySelector('.letter-section');
  const env = document.getElementById('envEnvelope');
  if (!nextSection || !env.classList.contains('open')) return;
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      closeEnvelope();
      observer.disconnect();
    }
  }, { threshold: 0.1 });
  observer.observe(nextSection);
}

function closeEnvelope() {
  const env = document.getElementById('envEnvelope');
  if (!env.classList.contains('open')) return;
  env.classList.remove('open');
  document.querySelector('.env-container').classList.remove('expanded');
  clearTimeout(envelopeTypingTimer);
}

function burstHearts(parent) {
  const symbols = ['❤', '♥', '❥', '💕', '💗'];
  for (let i = 0; i < 36; i++) {
    const el = document.createElement('span');
    el.textContent = symbols[i % symbols.length];
    el.style.position = 'absolute';
    el.style.fontSize = (10 + Math.random() * 28) + 'px';
    el.style.color = '#ff3b6b';
    el.style.pointerEvents = 'none';
    el.style.zIndex = 10;
    el.style.left = (10 + Math.random() * 80) + '%';
    el.style.top = (10 + Math.random() * 80) + '%';
    el.style.setProperty('--tx', (-200 + Math.random() * 400) + 'px');
    el.style.setProperty('--ty', (-300 - Math.random() * 300) + 'px');
    const dur = 1.4 + Math.random() * 1.4;
    el.style.animation = `envBurst ${dur}s ease-out forwards`;
    el.style.filter = 'drop-shadow(0 0 8px rgba(255,59,107,.9))';
    parent.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 200);
  }
}

document.getElementById('envEnvelope').addEventListener('click', openEnvelope);

/* ===== Lightbox ===== */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
function openLightbox(src) {
  lbImg.src = src;
  lb.classList.add('open');
}
document.getElementById('lbClose').addEventListener('click', () => lb.classList.remove('open'));
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });


/* ===== Typewriter letter ===== */
function typeLetter() {
  const target = document.getElementById('letter');
  const lines = CONFIG.letter;
  let li = 0, ci = 0;
  function step() {
    if (li >= lines.length) return;
    const line = lines[li];
    if (ci < line.length) {
      target.append(line[ci]);
      ci++;
      setTimeout(step, 40 + Math.random() * 55);
    } else {
      target.append('\n');
      li++; ci = 0;
      setTimeout(step, line.length === 0 ? 500 : 1000);
    }
  }
  step();
}


/* ===== Heart rain ===== */
function startHeartRain() {
  const wrap = document.getElementById('heartRain');
  setInterval(() => {
    if (document.hidden) return;
    const i = document.createElement('i');
    i.className = 'fa-solid fa-heart';
    const size = 8 + Math.random() * 18;
    i.style.left = Math.random() * 100 + 'vw';
    i.style.fontSize = size + 'px';
    i.style.opacity = (.25 + Math.random() * .6).toFixed(2);
    const dur = 6 + Math.random() * 8;
    i.style.animationDuration = dur + 's';
    wrap.appendChild(i);
    setTimeout(() => i.remove(), dur * 1000 + 500);
  }, 320);
}


/* ===== Timeline ===== */
function buildTimeline() {
  const t = document.getElementById('timeline');
  CONFIG.timeline.forEach(item => {
    const el = document.createElement('div');
    el.className = 't-item reveal';
    el.innerHTML = `
      <span class="dot"></span>
      <div class="t-card">
        <h3>${item.icon} ${item.title}</h3>
        <p>${item.text}</p>
      </div>`;
    t.appendChild(el);
  });
}


/* ===== Countdown ===== */
function startCountdown() {
  const since = new Date(CONFIG.sinceDate).getTime();
  const els = {
    d: document.getElementById('d'),
    h: document.getElementById('h'),
    m: document.getElementById('m'),
    s: document.getElementById('s'),
  };
  document.getElementById('sinceLabel').textContent =
    new Date(since).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  function tick() {
    const diff = Math.max(0, Date.now() - since);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff / 3600000) % 24;
    const m = Math.floor(diff / 60000) % 60;
    const s = Math.floor(diff / 1000) % 60;
    els.d.textContent = d; els.h.textContent = String(h).padStart(2, '0');
    els.m.textContent = String(m).padStart(2, '0'); els.s.textContent = String(s).padStart(2, '0');
  }
  tick(); setInterval(tick, 1000);
}


/* ===== Reveal on scroll ===== */
function observeReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}


/* ===== Final scene — stars + rising hearts ===== */
function buildStars() {
  const s = document.getElementById('stars');
  for (let i = 0; i < 140; i++) {
    const star = document.createElement('span');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = (Math.random() * 3) + 's';
    star.style.opacity = (.3 + Math.random() * .7).toFixed(2);
    s.appendChild(star);
  }
}

function startRisingHearts() {
  const wrap = document.getElementById('risingHearts');
  const finalScene = document.getElementById('finalScene');
  let active = false;
  new IntersectionObserver(entries => {
    active = entries[0].isIntersecting;
  }, { threshold: .25 }).observe(finalScene);

  setInterval(() => {
    if (!active || document.hidden) return;
    const i = document.createElement('i');
    i.className = 'fa-solid fa-heart';
    const size = 10 + Math.random() * 22;
    i.style.left = Math.random() * 100 + '%';
    i.style.fontSize = size + 'px';
    i.style.opacity = (.4 + Math.random() * .6).toFixed(2);
    const dur = 5 + Math.random() * 7;
    i.style.animationDuration = dur + 's';
    wrap.appendChild(i);
    setTimeout(() => i.remove(), dur * 1000 + 500);
  }, 140);
}

document.getElementById('replayBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ===== Music player ===== */
const vol = document.getElementById('vol');
const progress = document.getElementById('progress');
const progressFill = document.getElementById('progressFill');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});
vol.addEventListener('input', e => { audio.volume = parseFloat(e.target.value); });
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    progressFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
  }
});
progress.addEventListener('click', e => {
  const rect = progress.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  if (audio.duration) audio.currentTime = pct * audio.duration;
});
audio.addEventListener('play', () => playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>');
audio.addEventListener('pause', () => playBtn.innerHTML = '<i class="fa-solid fa-play"></i>');

/* ===== Heart cursor ===== */
(function heartCursor() {
  const cursor = document.createElement('span');
  cursor.className = 'heart-cursor';
  cursor.textContent = '❤';
  document.body.appendChild(cursor);
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }, { passive: true });
})();

/* ===== Video stars ===== */
function buildVideoStars() {
  const wrap = document.getElementById('videoStars');
  if (!wrap) return;
  for (let i = 0; i < 100; i++) {
    const s = document.createElement('span');
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
    s.style.width = (1.5 + Math.random() * 2.5) + 'px';
    s.style.height = s.style.width;
    s.style.opacity = (.2 + Math.random() * .8).toFixed(2);
    wrap.appendChild(s);
  }
}
buildVideoStars();

/* ===== Video player ===== */
(function videoPlayer() {
  const box = document.getElementById('videoBox');
  const video = document.getElementById('loveVideo');
  const overlay = document.getElementById('videoOverlay');
  const bgAudio = document.getElementById('audio');
  if (!box || !video || !overlay) return;

  let expanded = false;
  let originRect = null;

  function expand() {
    originRect = box.getBoundingClientRect();
    document.body.style.overflow = 'hidden';
    box.classList.add('playing');
    box.style.top = originRect.top + 'px';
    box.style.left = originRect.left + 'px';
    box.style.width = originRect.width + 'px';
    box.style.height = originRect.height + 'px';
    box.offsetHeight;
    requestAnimationFrame(() => {
      box.style.transition = 'all .55s cubic-bezier(.4,0,.2,1)';
      box.style.top = '5vh';
      box.style.left = '5vw';
      box.style.width = '90vw';
      box.style.height = '90vh';
    });
    expanded = true;
  }

  function shrink() {
    box.style.transition = 'all .45s cubic-bezier(.4,0,.2,1)';
    box.style.top = originRect.top + 'px';
    box.style.left = originRect.left + 'px';
    box.style.width = originRect.width + 'px';
    box.style.height = originRect.height + 'px';
    setTimeout(() => {
      box.classList.remove('playing');
      box.style.cssText = '';
      document.body.style.overflow = '';
    }, 450);
    expanded = false;
  }

  function pauseBgAudio() {
    if (bgAudio && !bgAudio.paused) {
      bgAudio.pause();
      bgAudio._wasPlaying = true;
    }
  }

  function resumeBgAudio() {
    if (bgAudio && bgAudio._wasPlaying) {
      bgAudio.play();
      bgAudio._wasPlaying = false;
    }
  }

  box.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      pauseBgAudio();
      overlay.classList.add('hidden');
      expand();
    } else {
      video.pause();
      resumeBgAudio();
      overlay.classList.remove('hidden');
      shrink();
    }
  });
  video.addEventListener('ended', () => {
    overlay.classList.remove('hidden');
    resumeBgAudio();
    shrink();
  });
})();

/* ===== Heart cursor trail ===== */
(function heartTrail() {
  let last = 0;
  document.addEventListener('mousemove', e => {
    const now = Date.now();
    if (now - last < 50) return;
    last = now;
    const el = document.createElement('span');
    el.className = 'heart-trail';
    el.textContent = '❤';
    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';
    el.style.fontSize = (8 + Math.random() * 14) + 'px';
    el.style.setProperty('--dx', ((Math.random() - .5) * 50) + 'px');
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }, { passive: true });
})();
