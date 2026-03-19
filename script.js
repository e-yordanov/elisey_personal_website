/**
 * Elisey Yordanov — Personal Portfolio
 * script.js — Main JavaScript
 */

'use strict';

// ═══════════════════════════════════════
// THEME MANAGER
// ═══════════════════════════════════════
class ThemeManager {
    constructor() {
        this.key     = 'ey-theme';
        this.current = localStorage.getItem(this.key) ||
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        this.btns    = document.querySelectorAll('[data-theme-toggle]');
        this.apply(this.current);
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => this.toggle());
        });
    }

    toggle() {
        this.current = this.current === 'dark' ? 'light' : 'dark';
        this.apply(this.current);
        localStorage.setItem(this.key, this.current);
    }

    apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.btns.forEach(btn => {
            const icon = btn.querySelector('i');
            if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
    }
}

// ═══════════════════════════════════════
// LANGUAGE MANAGER
// ═══════════════════════════════════════
class LanguageManager {
    constructor() {
        this.key     = 'ey-lang';
        this.current = localStorage.getItem(this.key) || 'en';
        this.btns    = document.querySelectorAll('[data-lang-btn]');

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang-btn');
                if (lang !== this.current) this.setLanguage(lang);
            });
        });

        this.setLanguage(this.current);
    }

    setLanguage(lang) {
        if (!translations[lang]) return;
        this.current = lang;
        localStorage.setItem(this.key, lang);

        // Update active state on all lang buttons
        this.btns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
        });

        // Render all dynamic sections
        this.applyStaticTranslations(lang);
        this.renderHeroStats(lang);
        this.renderAbout(lang);
        this.renderSkills(lang);
        this.renderTimeline(lang);
        this.renderProjects(lang);
        this.renderCerts(lang);
        this.renderPublicPresence(lang);
        this.renderContact(lang);
        this.renderFooter(lang);

        // Update typed animation
        if (window.typedInstance) window.typedInstance.setStrings(translations[lang].hero.typed);

        // Re-init counters if hero is visible
        initCounters();
    }

    applyStaticTranslations(lang) {
        const t = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = this.resolve(t, key);
            if (val !== undefined) el.textContent = val;
        });
    }

    resolve(obj, path) {
        return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
    }

    renderHeroStats(lang) {
        const t = translations[lang].hero;
        const el = document.getElementById('hero-stats');
        if (!el) return;
        el.innerHTML = `
            <div class="stat-item">
                <div class="stat-value" data-count="${t.stat1Value.replace('+','')}" data-suffix="${t.stat1Value.includes('+') ? '+' : ''}">0</div>
                <div class="stat-label">${t.stat1Label}</div>
            </div>
            <div class="stat-item">
                <div class="stat-value" data-count="${t.stat2Value.replace('+','')}" data-suffix="${t.stat2Value.includes('+') ? '+' : ''}">0</div>
                <div class="stat-label">${t.stat2Label}</div>
            </div>
            <div class="stat-item">
                <div class="stat-value" data-count="${t.stat3Value}" data-suffix="">0</div>
                <div class="stat-label">${t.stat3Label}</div>
            </div>
        `;
    }

    renderAbout(lang) {
        const t = translations[lang].about;
        const el = document.getElementById('about-content');
        if (!el) return;

        el.innerHTML = `
            <div class="about-text" data-aos="fade-right">
                <p>${t.p1}</p>
                <p>${t.p2}</p>
                <p>${t.p3}</p>
            </div>
            <div class="about-extras" data-aos="fade-left">
                <div class="about-card">
                    <div class="about-card-title">
                        <i class="fas fa-graduation-cap"></i> ${t.educationTitle}
                    </div>
                    ${t.edu.map(e => `
                        <div class="edu-item">
                            <span class="edu-period">${e.period}</span>
                            <span class="edu-degree">${e.degree}</span>
                            <span class="edu-major">${e.major}</span>
                            <span class="edu-note">${e.note}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="about-card">
                    <div class="about-card-title">
                        <i class="fas fa-trophy"></i> ${t.awardsTitle}
                    </div>
                    <div class="award-list">
                        ${t.awards.map(a => `
                            <div class="award-item">
                                <i class="fas fa-star"></i>
                                <span>${a}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        if (window.AOS) AOS.refresh();
    }

    renderSkills(lang) {
        const cats = translations[lang].skills.categories;
        const el = document.getElementById('skills-grid');
        if (!el) return;

        el.innerHTML = cats.map((cat, i) => `
            <div class="skill-card" data-color="${cat.color}" data-aos="fade-up" data-aos-delay="${i * 80}">
                <div class="skill-card-head">
                    <div class="skill-icon"><i class="${cat.icon}"></i></div>
                    <div class="skill-name">${cat.name}</div>
                </div>
                <div class="skill-pills">
                    ${cat.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}
                </div>
            </div>
        `).join('');
        if (window.AOS) AOS.refresh();
    }

    renderTimeline(lang) {
        const items = translations[lang].timeline.items;
        const el = document.getElementById('timeline-wrap');
        if (!el) return;

        el.innerHTML = items.map((item, i) => `
            <div class="timeline-item ${item.current ? 'current' : ''}" data-aos="${i % 2 === 0 ? 'fade-right' : 'fade-left'}" data-aos-delay="${i * 100}">
                <div class="timeline-card">
                    <div class="timeline-period">
                        ${item.period}
                        ${item.current ? `<span class="current-badge">Now</span>` : ''}
                    </div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-company">${item.company}</div>
                    <div class="timeline-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</div>
                    <p class="timeline-desc">${item.description}</p>
                    <div class="timeline-highlights">
                        ${item.highlights.map(h => `
                            <div class="highlight-item">
                                <i class="fas fa-circle"></i>
                                <span>${h}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="timeline-tags">
                        ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="timeline-dot"><div class="dot-inner"></div></div>
                <div class="timeline-empty"></div>
            </div>
        `).join('');
        if (window.AOS) AOS.refresh();
    }

    renderProjects(lang) {
        const items = translations[lang].projects.items;
        const el = document.getElementById('projects-grid');
        if (!el) return;

        el.innerHTML = items.map((p, i) => `
            <div class="project-card" data-grad="${p.gradient}" data-aos="fade-up" data-aos-delay="${i * 80}">
                <div class="project-icon"><i class="${p.icon}"></i></div>
                <div class="project-title">${p.title}</div>
                <p class="project-desc">${p.description}</p>
                <div class="project-tags">
                    ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
            </div>
        `).join('');
        if (window.AOS) AOS.refresh();
    }

    renderCerts(lang) {
        const t    = translations[lang].certs;
        const el   = document.getElementById('certs-grid');
        const hint = document.getElementById('certs-hint');
        if (hint) {
            hint.innerHTML = `<i class="fas fa-external-link-alt"></i> ${t.clickHint}`;
        }
        if (!el) return;

        el.innerHTML = t.items.map((c, i) => `
            <a class="cert-card ${c.type === 'badge' ? 'cert-badge-type' : 'cert-pro-type'}"
               href="${c.link}" target="_blank" rel="noopener noreferrer"
               data-aos="zoom-in" data-aos-delay="${i * 80}">
                ${c.type === 'professional'
                    ? `<div class="cert-pro-badge"><i class="fas fa-award"></i> Professional</div>`
                    : `<div class="cert-skill-badge"><i class="fas fa-star"></i> ${t.badgeLabel}</div>`
                }
                <div class="cert-img-wrap">
                    <img src="${c.image}" alt="${c.name}" loading="lazy">
                </div>
                <div class="cert-name">${c.name}</div>
            </a>
        `).join('');

        // Credly profile link below the grid
        let credlyLink = document.getElementById('credly-profile-link');
        if (!credlyLink) {
            credlyLink = document.createElement('div');
            credlyLink.id = 'credly-profile-link';
            credlyLink.style.cssText = 'text-align:center;margin-top:1.75rem;';
            el.parentNode.insertBefore(credlyLink, el.nextSibling);
        }
        credlyLink.innerHTML = `
            <a href="${t.credlyUrl}" target="_blank" rel="noopener noreferrer"
               style="display:inline-flex;align-items:center;gap:0.5rem;font-size:0.85rem;
                      font-weight:600;color:var(--clr-primary);border:1.5px solid var(--clr-primary);
                      padding:0.55rem 1.4rem;border-radius:999px;transition:all 0.25s;
                      text-decoration:none;"
               onmouseover="this.style.background='var(--clr-primary)';this.style.color='#fff';"
               onmouseout="this.style.background='';this.style.color='var(--clr-primary)';">
                <i class="fas fa-external-link-alt"></i> ${t.credlyProfile}
            </a>
        `;

        if (window.AOS) AOS.refresh();
    }

    renderPublicPresence(lang) {
        const t  = translations[lang].publicPresence;
        const el = document.getElementById('presence-grid');
        if (!el) return;

        el.innerHTML = t.events.map((ev, i) => `
            <div class="presence-card" data-color="${ev.color}" data-aos="fade-up" data-aos-delay="${i * 80}">
                <div class="presence-card-inner">
                    <div class="presence-card-top">
                        <div>
                            ${ev.conferenceUrl
                                ? `<a href="${ev.conferenceUrl}" target="_blank" rel="noopener" class="presence-conf-name">${ev.conference} <i class="fas fa-external-link-alt" style="font-size:0.55rem;opacity:0.55;"></i></a>`
                                : `<span class="presence-conf-name">${ev.conference}</span>`}
                            <div class="presence-organizer">${ev.organizer}</div>
                        </div>
                        <span class="presence-year">${ev.year}</span>
                    </div>
                    ${ev.talk ? `
                    <div class="presence-talk-row">
                        <i class="fas fa-microphone"></i>
                        <span>${ev.talk}</span>
                    </div>` : ''}
                    <div class="presence-actions">
                        ${ev.talkUrl ? `<a href="${ev.talkUrl}" target="_blank" rel="noopener" class="presence-action-btn pab-youtube"><i class="fab fa-youtube"></i> ${t.watchTalk}</a>` : ''}
                        ${ev.lightningTalkUrl ? `<a href="${ev.lightningTalkUrl}" target="_blank" rel="noopener" class="presence-action-btn pab-lightning"><i class="fas fa-bolt"></i> ${t.lightningTalk}</a>` : ''}
                        ${ev.presentationUrl ? `<a href="${ev.presentationUrl}" target="_blank" rel="noopener" class="presence-action-btn pab-slides"><i class="fas fa-desktop"></i> ${t.viewSlides}</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');

        if (window.AOS) AOS.refresh();
    }

    renderContact(lang) {
        const t  = translations[lang].contact;
        const el = document.getElementById('contact-inner');
        if (!el) return;

        el.innerHTML = `
            <p class="contact-desc">${t.description}</p>

            <!-- Visible email + phone as plain text -->
            <div class="contact-direct">
                <a href="mailto:elisei.elisei4@gmail.com" class="contact-direct-item">
                    <i class="fas fa-envelope"></i>
                    <span>elisei.elisei4@gmail.com</span>
                </a>
                <a href="tel:+359888575501" class="contact-direct-item">
                    <i class="fas fa-phone"></i>
                    <span>+359 888 575 501</span>
                </a>
            </div>

            <div class="contact-actions">
                <a href="https://www.linkedin.com/in/elisey-yordanov-19625a1a0" target="_blank" rel="noopener" class="contact-btn contact-btn-secondary">
                    <i class="fab fa-linkedin"></i> ${t.linkedinLabel}
                </a>
            </div>
            <p class="contact-or">${t.orText}</p>
            <div class="contact-socials">
                <a href="https://github.com/e-yordanov" target="_blank" rel="noopener" class="social-link" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        `;
    }

    renderFooter(lang) {
        const t  = translations[lang].footer;
        const el = document.getElementById('footer-copy');
        if (!el) return;
        el.innerHTML = `${t.built} <span class="heart">♥</span> ${t.by}`;
    }
}

// ═══════════════════════════════════════
// PARTICLE SYSTEM
// ═══════════════════════════════════════
class ParticleSystem {
    constructor(canvasId) {
        this.canvas  = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx     = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse   = { x: null, y: null, radius: 120 };
        this.count   = 70;
        this.colors  = ['#8b5cf6', '#a78bfa', '#6366f1', '#ec4899', '#c4b5fd', '#f0abfc'];
        this.resize();
        this.initParticles();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.count; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        return {
            x:       Math.random() * this.canvas.width,
            y:       Math.random() * this.canvas.height,
            vx:      (Math.random() - 0.5) * 0.5,
            vy:      (Math.random() - 0.5) * 0.5,
            size:    Math.random() * 2.5 + 0.8,
            color:   this.colors[Math.floor(Math.random() * this.colors.length)],
            opacity: Math.random() * 0.6 + 0.2,
            pulse:   Math.random() * Math.PI * 2,
        };
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.initParticles();
        });
        window.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    drawConnections(p) {
        const maxDist = 130;
        for (let j = this.particles.indexOf(p) + 1; j < this.particles.length; j++) {
            const p2   = this.particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < maxDist) {
                const alpha = (1 - dist / maxDist) * 0.18;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(p2.x, p2.y);
                this.ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
                this.ctx.lineWidth   = 0.8;
                this.ctx.stroke();
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            // Mouse repulsion
            if (this.mouse.x !== null) {
                const dx   = p.x - this.mouse.x;
                const dy   = p.y - this.mouse.y;
                const dist = Math.hypot(dx, dy);
                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    p.vx += (dx / dist) * force * 0.08;
                    p.vy += (dy / dist) * force * 0.08;
                }
            }

            // Velocity damping
            p.vx *= 0.99;
            p.vy *= 0.99;

            // Cap speed
            const speed = Math.hypot(p.vx, p.vy);
            if (speed > 1.2) { p.vx = p.vx / speed * 1.2; p.vy = p.vy / speed * 1.2; }

            // Move
            p.x += p.vx;
            p.y += p.vy;

            // Pulse opacity
            p.pulse += 0.018;
            const op = p.opacity + Math.sin(p.pulse) * 0.15;

            // Wrap edges
            if (p.x < -10)  p.x = this.canvas.width  + 10;
            if (p.x > this.canvas.width  + 10) p.x = -10;
            if (p.y < -10)  p.y = this.canvas.height + 10;
            if (p.y > this.canvas.height + 10) p.y = -10;

            // Draw connections
            this.drawConnections(p);

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = Math.max(0, Math.min(1, op));
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ═══════════════════════════════════════
// TYPED TEXT
// ═══════════════════════════════════════
class TypedText {
    constructor(el) {
        this.el      = el;
        this.strings = [];
        this.idx     = 0;
        this.charIdx = 0;
        this.deleting = false;
        this.pause   = false;
        this.loop();
    }

    setStrings(arr) {
        this.strings  = arr;
        this.idx      = 0;
        this.charIdx  = 0;
        this.deleting = false;
        this.el.textContent = '';
    }

    loop() {
        if (!this.strings.length) { requestAnimationFrame(() => this.loop()); return; }
        const word = this.strings[this.idx % this.strings.length];

        if (!this.deleting) {
            this.charIdx++;
            this.el.textContent = word.slice(0, this.charIdx);
            if (this.charIdx >= word.length) {
                this.deleting = true;
                setTimeout(() => this.loop(), 1800);
                return;
            }
            setTimeout(() => this.loop(), 80);
        } else {
            this.charIdx--;
            this.el.textContent = word.slice(0, this.charIdx);
            if (this.charIdx === 0) {
                this.deleting = false;
                this.idx++;
                setTimeout(() => this.loop(), 400);
                return;
            }
            setTimeout(() => this.loop(), 45);
        }
    }
}

// ═══════════════════════════════════════
// COUNTER ANIMATION
// ═══════════════════════════════════════
function initCounters() {
    document.querySelectorAll('.stat-value[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        el.textContent = '0' + suffix;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                const start = performance.now();
                const duration = 1400;

                function step(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    current = Math.round(eased * target);
                    el.textContent = current + suffix;
                    if (progress < 1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
            });
        }, { threshold: 0.5 });

        observer.observe(el);
    });
}

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
class Navigation {
    constructor() {
        this.navbar   = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.sections = document.querySelectorAll('section[id]');
        this.links    = document.querySelectorAll('.nav-link[href^="#"]');
        this.isOpen   = false;

        this.bindScroll();
        this.bindHamburger();
        this.bindLinks();
    }

    bindScroll() {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.onScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    onScroll() {
        const y = window.scrollY;

        // Sticky nav
        this.navbar.classList.toggle('scrolled', y > 50);

        // Back to top
        const btt = document.getElementById('back-to-top');
        if (btt) btt.classList.toggle('visible', y > 400);

        // Active nav link
        let current = '';
        this.sections.forEach(s => {
            if (y >= s.offsetTop - 100) current = s.id;
        });
        this.links.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
    }

    bindHamburger() {
        if (!this.hamburger) return;
        this.hamburger.addEventListener('click', () => {
            this.isOpen = !this.isOpen;
            this.hamburger.classList.toggle('open', this.isOpen);
            this.mobileMenu.classList.toggle('open', this.isOpen);
            document.body.style.overflow = this.isOpen ? 'hidden' : '';
        });
    }

    bindLinks() {
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                const target = document.querySelector(a.getAttribute('href'));
                if (!target) return;
                e.preventDefault();
                this.closeMobile();
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    closeMobile() {
        this.isOpen = false;
        if (this.hamburger) this.hamburger.classList.remove('open');
        if (this.mobileMenu) this.mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ═══════════════════════════════════════
// LIGHTBOX / MODAL
// ═══════════════════════════════════════
function openModal(name, imgSrc) {
    const overlay = document.getElementById('modal-overlay');
    const img     = document.getElementById('modal-img');
    const title   = document.getElementById('modal-title');
    if (!overlay) return;
    img.src       = imgSrc;
    title.textContent = name;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

    // Theme
    new ThemeManager();

    // Language (also renders all content)
    const langMgr = new LanguageManager();
    window.langMgr = langMgr;

    // Hero typed text
    const typedEl = document.getElementById('typed-text');
    if (typedEl) {
        const typed = new TypedText(typedEl);
        typed.setStrings(translations[langMgr.current].hero.typed);
        window.typedInstance = typed;
    }

    // Particles
    new ParticleSystem('particle-canvas');

    // Navigation
    new Navigation();

    // Counters
    initCounters();

    // AOS (scroll animations)
    if (window.AOS) {
        AOS.init({
            duration:  700,
            easing:    'ease-out-cubic',
            once:      true,
            offset:    60,
        });
    }

    // Modal
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', e => {
            if (e.target === overlay) closeModal();
        });
    }
    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Escape key to close modal
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });

    // Back to top
    const btt = document.getElementById('back-to-top');
    if (btt) {
        btt.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Hero section scroll indicator fade on scroll
    const scrollInd = document.querySelector('.scroll-indicator');
    if (scrollInd) {
        window.addEventListener('scroll', () => {
            scrollInd.style.opacity = window.scrollY > 80 ? '0' : '1';
        }, { passive: true });
    }
});
