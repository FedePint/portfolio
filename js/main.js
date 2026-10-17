/**
 * Portfolio — Main JavaScript
 * Handles: Navigation, Typing effect, Interactive Canvas Mesh, Gallery + Lightbox, 
 * Platform Filters, Code Copying, Card Spotlight, GitHub API, Scroll animations
 */

/* ============================================
   CONFIGURATION
   ============================================ */

// GitHub configuration
const GITHUB_USERNAME = 'FedePint';

// Gallery images configuration — La Bastille Saloon (Blender)
// Categorized for smart filtering: panoramic, details, lighting
const GALLERY_IMAGES = [
    { 
        src: 'media/saloon/Inquadratura01.jpg', 
        alt: 'La Bastille Saloon (Blender) — Poker Table Detailed Close-Up', 
        caption: 'La Bastille Saloon — Poker Table Detailed Close-Up (Blender Cycles)',
        category: 'details'
    },
    { 
        src: 'media/saloon/Inquadratura01.01.jpg', 
        alt: 'La Bastille Saloon (Blender) — Poker Table Angle & Playing Cards', 
        caption: 'La Bastille Saloon — Poker Table Angle & Playing Cards (Blender Cycles)',
        category: 'details'
    },
    { 
        src: 'media/saloon/Inquadratura02.jpg', 
        alt: 'La Bastille Saloon (Blender) — Panoramic Interior Overview', 
        caption: 'La Bastille Saloon — Panoramic Interior Overview (Blender Cycles)',
        category: 'panoramic'
    },
    { 
        src: 'media/saloon/Inquadratura03.jpg', 
        alt: 'La Bastille Saloon (Blender) — Atmospheric Chiaroscuro Lighting', 
        caption: 'La Bastille Saloon — Atmospheric Chiaroscuro Lighting (Blender Cycles)',
        category: 'lighting'
    },
    { 
        src: 'media/saloon/Inquadratura04.jpg', 
        alt: 'La Bastille Saloon (Blender) — Hardwood Bar Counter & Brass Rail', 
        caption: 'La Bastille Saloon — Hardwood Bar Counter & Brass Rail (Blender Cycles)',
        category: 'details'
    },
    { 
        src: 'media/saloon/Inquadratura05.02.jpg', 
        alt: 'La Bastille Saloon (Blender) — Main Hall & Balcony View', 
        caption: 'La Bastille Saloon — Main Hall & Balcony View (Blender Cycles)',
        category: 'panoramic'
    },
    { 
        src: 'media/saloon/Inquadratura06.02.jpg', 
        alt: 'La Bastille Saloon (Blender) — Seating Area & Side Hall Perspective', 
        caption: 'La Bastille Saloon — Seating Area & Side Hall Perspective (Blender Cycles)',
        category: 'panoramic'
    },
    { 
        src: 'media/saloon/Inquadratura08.jpg', 
        alt: 'La Bastille Saloon (Blender) — Saloon Entrance & Sunlit Windows', 
        caption: 'La Bastille Saloon — Saloon Entrance & Sunlit Windows (Blender Cycles)',
        category: 'panoramic'
    },
    { 
        src: 'media/saloon/Inquadratura09.jpg', 
        alt: 'La Bastille Saloon (Blender) — Second Floor Balustrade & Architecture', 
        caption: 'La Bastille Saloon — Second Floor Balustrade & Architecture (Blender Cycles)',
        category: 'panoramic'
    },
    { 
        src: 'media/saloon/Inquadratura10.jpg', 
        alt: 'La Bastille Saloon (Blender) — Wooden Staircase & Timber Framing', 
        caption: 'La Bastille Saloon — Wooden Staircase & Timber Framing (Blender Cycles)',
        category: 'details'
    },
    { 
        src: 'media/saloon/Inquadratura11.jpg', 
        alt: 'La Bastille Saloon (Blender) — Mezzanine Floor Elevated Perspective', 
        caption: 'La Bastille Saloon — Mezzanine Floor Elevated Perspective (Blender Cycles)',
        category: 'panoramic'
    },
    { 
        src: 'media/saloon/Inquadratura12.jpg', 
        alt: 'La Bastille Saloon (Blender) — Glass Bottles & Bar Shelves LookDev', 
        caption: 'La Bastille Saloon — Glass Bottles & Bar Shelves LookDev (Blender Cycles)',
        category: 'details'
    },
    { 
        src: 'media/saloon/Inquadratura14.jpg', 
        alt: 'La Bastille Saloon (Blender) — Volumetric Dust & Sunlight Shafts', 
        caption: 'La Bastille Saloon — Volumetric Dust & Sunlight Shafts (Blender Cycles)',
        category: 'lighting'
    },
    { 
        src: 'media/saloon/Inquadratura15.jpg', 
        alt: 'La Bastille Saloon (Blender) — Period Brass Chandelier & Props', 
        caption: 'La Bastille Saloon — Period Brass Chandelier & Props (Blender Cycles)',
        category: 'details'
    },
    { 
        src: 'media/saloon/Inquadratura16.jpg', 
        alt: 'La Bastille Saloon (Blender) — Warm Shadows & Mood Lighting', 
        caption: 'La Bastille Saloon — Warm Shadows & Mood Lighting (Blender Cycles)',
        category: 'lighting'
    },
    { 
        src: 'media/saloon/Inquadratura18.jpg', 
        alt: 'La Bastille Saloon (Blender) — Master Architectural Composition', 
        caption: 'La Bastille Saloon — Master Architectural Composition (Blender Cycles)',
        category: 'panoramic'
    },
];

// MetaHuman Pipeline & LookDev Showcase (Unreal Engine 5)
// Real photogrammetry, mesh sculpting, identity conversion & iPhone TrueDepth facial capture
const METAHUMAN_GALLERY = [
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (8).png',
        alt: 'Federico Pintabona — Real Actor Photographic Reference (Ground Truth)',
        caption: 'Step 01: Ground Truth Reference — Studio photographic reference of Federico Pintabona used for anatomical fisionomy, proportions, and skin calibration.',
        category: 'sculpt'
    },
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (5).png',
        alt: '3D Photogrammetry Scan — 160 Cameras @ 360° Point Cloud',
        caption: 'Step 02: 3D Photogrammetry Acquisition — Single-camera 360° scan reconstruction calculated from 160 high-resolution photos with 3D head bounding box.',
        category: 'sculpt'
    },
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (6).png',
        alt: 'Blender Mesh Cleanup & Sculpting — Beard Removal with Clay Strips, Smooth, Flatten',
        caption: 'Step 03: Mesh Cleanup & Sculpting — Removing scanned beard geometry and surface noise in Blender using Clay Strips, Smooth, and Flatten brushes to produce a clean base mesh.',
        category: 'sculpt'
    },
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (4).png',
        alt: 'MetaHuman Identity & LookDev — Digital Double Final Portrait',
        caption: 'Step 04: MetaHuman Identity Fitting — Converted into Unreal Engine MetaHuman Identity with refined facial sculpt, procedural SSS skin shading, and physics-driven strand grooms.',
        category: 'identity'
    },
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (7).png',
        alt: 'In-Engine Real-Time Scene — Subway Car Environment',
        caption: 'Step 05: In-Engine Integration — Digital double seated in an Unreal Engine 5 cinematic subway car illuminated by Lumen dynamic global illumination.',
        category: 'identity'
    },
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (9).png',
        alt: 'Facial Performance Capture — Phase 1: Neutral Emotional Baseline',
        caption: 'Step 06: Facial Mocap Phase 1 — Starting neutral state streamed live via iPhone TrueDepth camera (LiveLink Face app) driving 60+ ARKit blendshape channels.',
        category: 'animation'
    },
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (10).png',
        alt: 'Facial Performance Capture — Phase 2: Lateral Glances & Building Anxiety',
        caption: 'Step 07: Facial Mocap Phase 2 — Lateral eye saccades, brow twitches, and emerging physiological tension recorded directly into UE5 via Take Recorder.',
        category: 'animation'
    },
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (11).png',
        alt: 'Facial Performance Capture — Phase 3: Rising Panic & Brow Contraction',
        caption: 'Step 08: Facial Mocap Phase 3 — Frontalis muscle activation, rising anxiety dynamics, and jaw tension deformation across the MetaHuman skeletal rig.',
        category: 'animation'
    },
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (12).png',
        alt: 'Facial Performance Capture — Phase 4: Acute Emotional Tension Climax',
        caption: 'Step 09: Facial Mocap Phase 4 — Climax of acute anxiety and tension with eyes clamped shut and pronounced facial strain, fully captured without keyframing.',
        category: 'animation'
    },
    {
        src: 'media/metahuman/TA-G08-Finale-Presentazione (13).png',
        alt: 'Cinematic Close-Up — Subsurface Scattering, Micro-Wrinkles & Depth-of-Field',
        caption: 'Step 10: Cinematic LookDev Close-Up — Light diffusion through cartilage and skin layers, strand-based beard dynamics, and micro-displacement under dramatic lighting.',
        category: 'identity'
    }
];

// Unreal Engine 5 Environment Showcase Images
const ENVIRONMENT_GALLERY = [
    {
        src: 'media/envirorment/TA-G08-Finale-Presentazione-overview.png',
        alt: 'Sanctuary Island & Mountain Gorge Overview — Unreal Engine 5',
        caption: 'Sanctuary Island Basin — Master aerial wide composition showing the solitary cherry blossom island, azure pool with lily pads and bamboo stalks, and surrounding gorge cliffs in UE5.',
        category: 'overview'
    },
    {
        src: 'media/envirorment/TA-G08-Finale-Presentazione (1).png',
        alt: 'Pagoda Overlook & Mountain Ridge — Unreal Engine 5 Nanite Geometry',
        caption: 'Pagoda Overlook — Traditional East Asian tile roofs and stone pagoda architecture built with micro-polygon Nanite geometry along rocky mountain ridges.',
        category: 'architecture'
    },
    {
        src: 'media/envirorment/TA-G08-Finale-Presentazione (2).png',
        alt: 'Temple Courtyard & Zen Garden — Lumen Dynamic Global Illumination',
        caption: 'Temple Courtyard & Zen Garden — Real-time indirect sunlight bounce via Lumen GI, illuminating cherry blossom foliage, gazebo, and stone stairs.',
        category: 'courtyard'
    },
    {
        src: 'media/envirorment/TA-G08-Finale-Presentazione (3).png',
        alt: 'Lakeside Lotus Pond & Volumetric God Rays — Real-Time 44+ FPS in UE5',
        caption: 'Lakeside Pond & God Rays — Water surface shaders with Screen-Space Reflections (SSR) and caustics, floating lotus lilies, and volumetric light shafts running at 44+ FPS.',
        category: 'water'
    }
];

// Gallery Collections Configuration
const COLLECTIONS = {
    saloon: {
        title: 'La Bastille Saloon',
        badge: 'Blender LookDev • Cycles',
        theme: 'blender',
        images: GALLERY_IMAGES,
        filters: [
            { id: 'all', label: 'All (16)' },
            { id: 'panoramic', label: 'Panoramas (7)' },
            { id: 'details', label: 'Props & Details (6)' },
            { id: 'lighting', label: 'Lighting (3)' }
        ]
    },
    metahuman: {
        title: 'MetaHuman 1 — Main Actor (Federico)',
        badge: 'Unreal Engine 5 • MetaHuman Pipeline',
        theme: 'unreal',
        images: METAHUMAN_GALLERY,
        filters: [
            { id: 'all', label: 'All Pipeline (10)' },
            { id: 'sculpt', label: '3D Scan & Sculpt (3)' },
            { id: 'identity', label: 'Identity & LookDev (3)' },
            { id: 'animation', label: 'Facial Mocap (4)' }
        ]
    },
    environment: {
        title: 'Cinematic Environment Showcase',
        badge: 'Unreal Engine 5 • Lumen & Nanite',
        theme: 'unreal',
        images: ENVIRONMENT_GALLERY,
        filters: [
            { id: 'all', label: 'All Views (4)' },
            { id: 'overview', label: 'Overview (1)' },
            { id: 'architecture', label: 'Architecture (1)' },
            { id: 'courtyard', label: 'Courtyard (1)' },
            { id: 'water', label: 'Water & VFX (1)' }
        ]
    }
};

// Typed text rotation
const TYPED_STRINGS = [
    'Computer Engineering Student',
    'High-Performance Computing (CUDA & OpenMP)',
    'Computer Graphics & GLSL Shaders',
    'Unreal Engine 5 & MetaHuman',
    '3D LookDev & Modeling (Blender)',
    'Low-Level Systems (ARM & RISC-V)',
    'Automated QA & Testing (pytest & Selenium)',
];

// Fallback data for FedePint in case of GitHub API rate limits
const GITHUB_FALLBACK_USER = {
    login: 'FedePint',
    name: 'Federico Pintabona',
    bio: 'Computer Engineering Master\'s Student @ Politecnico di Torino | HPC, GPU Acceleration, Computer Graphics & Software Engineering',
    html_url: 'https://github.com/FedePint',
    avatar_url: 'https://avatars.githubusercontent.com/u/241323046?v=4',
    public_repos: 3,
    followers: 0,
};

const GITHUB_FALLBACK_REPOS = [
    {
        name: 'parallel-gnn-inference',
        description: 'High-Performance GNN inference engine evaluating CPU (OpenMP) vs GPU (CUDA) acceleration with thread-per-feature parallelism and memory coalescing on graphs up to 1.5M nodes and 128 features/node.',
        html_url: 'https://github.com/FedePint/parallel-gnn-inference',
        language: 'C++',
        stargazers_count: 1,
        forks_count: 0,
        updated_at: '2026-10-15T18:00:00Z'
    },
    {
        name: 'Droid-attack',
        description: '3D top-down action shooter in C++ & OpenGL 3.3. Custom GLSL shaders (Phong lighting), mouse raycasting aiming, room portal transitions, enemy chase AI, 2D radar, and 3D spatial audio.',
        html_url: 'https://github.com/FedePint/Droid-attack',
        language: 'C++',
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2026-10-15T10:00:00Z'
    },
    {
        name: 'Tetris-LandTiger',
        description: 'Interrupt-driven classic Tetris game written in bare-metal C for ARM Cortex-M3 (NXP LPC1768) on LandTiger board, featuring GLCD differential rendering, DAC audio synthesis, and ADC dynamic speed control.',
        html_url: 'https://github.com/FedePint/Tetris-LandTiger',
        language: 'C',
        stargazers_count: 1,
        forks_count: 0,
        updated_at: '2026-09-20T15:30:00Z'
    }
];

const REPO_TOPICS_MAP = {
    'parallel-gnn-inference': ['NVIDIA CUDA', 'C++ HPC', 'Memory Coalescing', '1.5M Nodes', '128 Features', 'OpenMP', 'Nsight'],
    'Droid-attack': ['OpenGL 3.3', 'GLSL Shaders', 'C++', 'Raycasting Aiming', 'Phong Model', 'Enemy AI'],
    'Tetris-LandTiger': ['ARM Cortex-M3', 'Bare-Metal C', 'NXP LPC1768', 'GLCD Differential', 'DAC Audio', 'ILP Scheduling']
};

const LANG_COLORS = {
    'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'Python': '#3572A5',
    'C++': '#f34b7d', 'C': '#555555', 'C#': '#178600', 'Java': '#b07219',
    'HTML': '#e34c26', 'CSS': '#563d7c', 'GLSL': '#00e5a3', 'HLSL': '#aace60',
    'CUDA': '#76b900', 'ARM': '#ff4757', 'Blender': '#f5792a', 'Unreal': '#00a8ff'
};

const PLATFORM_AURAS = {
    'all': 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.15) 0%, rgba(10, 10, 15, 0) 70%)',
    'blender': 'radial-gradient(circle at 50% 30%, rgba(245, 121, 42, 0.18) 0%, rgba(10, 10, 15, 0) 70%)',
    'unreal': 'radial-gradient(circle at 50% 30%, rgba(0, 168, 255, 0.18) 0%, rgba(10, 10, 15, 0) 70%)',
    'opengl': 'radial-gradient(circle at 50% 30%, rgba(0, 229, 163, 0.18) 0%, rgba(10, 10, 15, 0) 70%)',
    'cuda': 'radial-gradient(circle at 50% 30%, rgba(118, 185, 0, 0.18) 0%, rgba(10, 10, 15, 0) 70%)',
    'embedded': 'radial-gradient(circle at 50% 30%, rgba(255, 71, 87, 0.18) 0%, rgba(10, 10, 15, 0) 70%)'
};

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollProgressBar();
    initHeroInteractiveCanvas();
    initTypingEffect();
    initLightbox();
    initPlatformFilters();
    initRepoLanguageFilter();
    initScrollAnimations();
    initCounterAnimations();
    initVideoEmbeds();
    initCodeCopyButtons();
    initCardSpotlights();
    initBackToTop();
    initRepoSyncButton();
    
    if (GITHUB_USERNAME) {
        fetchGitHubData(GITHUB_USERNAME);
    }
});

/* ============================================
   READING SCROLL PROGRESS BAR
   ============================================ */
function initScrollProgressBar() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    }, { passive: true });
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');
    
    // Create overlay for mobile
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        navbar.classList.toggle('scrolled', currentScroll > 40);
        updateActiveLink();
    }, { passive: true });
    
    // Mobile toggle
    navToggle.addEventListener('click', () => {
        const isActive = navToggle.classList.toggle('active');
        navLinks.classList.toggle('active', isActive);
        overlay.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    });
    
    // Close mobile nav on link click or overlay click
    const closeNav = () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    links.forEach(link => link.addEventListener('click', closeNav));
    overlay.addEventListener('click', closeNav);
}

function updateActiveLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/* ============================================
   HERO INTERACTIVE CANVAS (3D GRAPHICS NODES)
   ============================================ */
function initHeroInteractiveCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let dpr = 1;
    let particles = [];
    let mouse = { x: null, y: null, radius: 140 };

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        const displayWidth = canvas.offsetWidth;
        const displayHeight = canvas.offsetHeight;
        
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        width = displayWidth;
        height = displayHeight;
        
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        createParticles();
    }

    function createParticles() {
        particles = [];
        const count = Math.min(Math.floor((width * height) / 16000), 65);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                radius: Math.random() * 1.6 + 1,
                color: Math.random() > 0.4 ? 'rgba(167, 139, 250, ' : 'rgba(0, 168, 255, ',
                alpha: Math.random() * 0.45 + 0.2
            });
        }
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        } else {
            mouse.x = null;
            mouse.y = null;
        }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    let animationFrameId;
    let isRunning = true;

    // Invisible tab pausing (Sonner principle - zero CPU waste)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isRunning = false;
            cancelAnimationFrame(animationFrameId);
        } else if (!isRunning) {
            isRunning = true;
            animationFrameId = requestAnimationFrame(animate);
        }
    });

    function animate() {
        if (!isRunning) return;
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            // Move
            p.x += p.vx;
            p.y += p.vy;

            // Bounce on canvas edges
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Mouse proximity interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    p.x -= (dx / dist) * force * 1.1;
                    p.y -= (dy / dist) * force * 1.1;
                }
            }

            // Draw point
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${p.alpha})`;
            ctx.fill();

            // Connect nearby particles (Geometric wireframe mesh)
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 105) {
                    const lineAlpha = (1 - dist / 105) * 0.20;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

/* ============================================
   TYPING EFFECT
   ============================================ */
function initTypingEffect() {
    const element = document.getElementById('title-typed');
    if (!element) return;
    
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 70;
    const deleteSpeed = 35;
    const pauseEnd = 2200;
    const pauseStart = 450;
    
    function type() {
        const currentString = TYPED_STRINGS[stringIndex];
        
        if (isDeleting) {
            element.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let delay = isDeleting ? deleteSpeed : typeSpeed;
        
        if (!isDeleting && charIndex === currentString.length) {
            delay = pauseEnd;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % TYPED_STRINGS.length;
            delay = pauseStart;
        }
        
        setTimeout(type, delay);
    }
    
    setTimeout(type, 1500);
}

/* ============================================
   3D LOOKDEV VIEWER & PROJECT GALLERY MODAL
   ============================================ */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxBadge = document.getElementById('lightbox-badge');
    const filterContainer = document.getElementById('lightbox-filters');
    const btnClose = document.getElementById('lightbox-close');
    const btnPrev = document.getElementById('lightbox-prev');
    const btnNext = document.getElementById('lightbox-next');
    const backdrop = document.getElementById('lightbox-backdrop');
    const filmstrip = document.getElementById('lightbox-filmstrip');
    
    if (!lightbox) return;

    let activeCollectionKey = 'saloon';
    let activeCategory = 'all';
    let currentFilteredList = [...GALLERY_IMAGES];
    let currentIndex = 0; // index in currentFilteredList

    // Build category filters for current collection
    function buildFilters(col) {
        if (!filterContainer) return;
        filterContainer.innerHTML = '';
        col.filters.forEach(f => {
            const btn = document.createElement('button');
            btn.className = `lightbox-filter-btn ${f.id === activeCategory ? 'active' : ''}`;
            btn.setAttribute('data-category', f.id);
            btn.textContent = f.label;
            btn.addEventListener('click', () => {
                filterContainer.querySelectorAll('.lightbox-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeCategory = f.id;
                
                currentFilteredList = activeCategory === 'all'
                    ? [...col.images]
                    : col.images.filter(img => img.category === activeCategory);
                
                currentIndex = 0;
                buildFilmstrip();
                updateLightboxView();
            });
            filterContainer.appendChild(btn);
        });
    }

    // Build the bottom filmstrip thumbnails
    function buildFilmstrip() {
        if (!filmstrip) return;
        filmstrip.innerHTML = '';
        currentFilteredList.forEach((image, idx) => {
            const thumbBtn = document.createElement('button');
            thumbBtn.className = `filmstrip-item ${idx === currentIndex ? 'active' : ''}`;
            thumbBtn.type = 'button';
            thumbBtn.setAttribute('data-index', idx);
            thumbBtn.setAttribute('title', image.caption);
            thumbBtn.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
            thumbBtn.addEventListener('click', () => {
                currentIndex = idx;
                updateLightboxView();
            });
            filmstrip.appendChild(thumbBtn);
        });
    }

    function updateLightboxView() {
        if (currentFilteredList.length === 0) return;
        const image = currentFilteredList[currentIndex];
        
        lightboxImg.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
            lightboxCaption.textContent = image.caption;
            lightboxCounter.textContent = `${currentIndex + 1} / ${currentFilteredList.length}`;
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        }, 80);

        // Update active class on filmstrip thumbnails
        if (filmstrip) {
            const thumbs = filmstrip.querySelectorAll('.filmstrip-item');
            thumbs.forEach((th, i) => {
                th.classList.toggle('active', i === currentIndex);
            });
            // Scroll active thumb into view smoothly
            const activeThumb = thumbs[currentIndex];
            if (activeThumb) {
                activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    }

    function openLightbox(initialIndex = 0, category = 'all', collectionKey = 'saloon') {
        activeCollectionKey = collectionKey;
        activeCategory = category;
        const col = COLLECTIONS[collectionKey] || COLLECTIONS.saloon;

        // Update modal title, badge & platform theme modifier
        if (lightboxTitle) lightboxTitle.textContent = col.title;
        if (lightboxBadge) lightboxBadge.textContent = col.badge;
        
        lightbox.classList.remove('lightbox--blender', 'lightbox--unreal');
        lightbox.classList.add(`lightbox--${col.theme}`);

        // Build dynamic category filters
        buildFilters(col);

        // Filter images
        currentFilteredList = activeCategory === 'all' 
            ? [...col.images] 
            : col.images.filter(img => img.category === activeCategory);

        currentIndex = (initialIndex >= 0 && initialIndex < currentFilteredList.length) ? initialIndex : 0;
        buildFilmstrip();
        updateLightboxView();
        
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function navigate(direction) {
        if (currentFilteredList.length <= 1) return;
        currentIndex = (currentIndex + direction + currentFilteredList.length) % currentFilteredList.length;
        updateLightboxView();
    }

    // Saloon triggers
    const saloonBtn = document.getElementById('open-saloon-gallery');
    if (saloonBtn) {
        saloonBtn.addEventListener('click', () => openLightbox(0, 'all', 'saloon'));
    }

    const saloonMediaTrigger = document.getElementById('saloon-media-trigger');
    if (saloonMediaTrigger) {
        saloonMediaTrigger.addEventListener('click', () => openLightbox(0, 'all', 'saloon'));
        saloonMediaTrigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(0, 'all', 'saloon');
            }
        });
    }

    // Saloon mini preview thumbnails
    document.querySelectorAll('.thumb-preview-item[data-render-index]').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const rawIndex = parseInt(thumb.getAttribute('data-render-index') || '0', 10);
            openLightbox(rawIndex, 'all', 'saloon');
        });
    });

    // MetaHuman triggers
    const metahumanBtn = document.getElementById('open-metahuman-gallery');
    if (metahumanBtn) {
        metahumanBtn.addEventListener('click', () => openLightbox(0, 'all', 'metahuman'));
    }

    const metahumanMediaTrigger = document.getElementById('metahuman-media-trigger');
    if (metahumanMediaTrigger) {
        metahumanMediaTrigger.addEventListener('click', () => openLightbox(3, 'all', 'metahuman'));
        metahumanMediaTrigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(3, 'all', 'metahuman');
            }
        });
    }

    // MetaHuman interactive preview thumbnails & pipeline step shot cards
    document.querySelectorAll('[data-metahuman-index]').forEach(thumb => {
        const handleTrigger = () => {
            const rawIndex = parseInt(thumb.getAttribute('data-metahuman-index') || '0', 10);
            openLightbox(rawIndex, 'all', 'metahuman');
        };
        thumb.addEventListener('click', handleTrigger);
        thumb.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTrigger();
            }
        });
    });

    // Environment gallery trigger
    const envBtn = document.getElementById('open-environment-gallery');
    if (envBtn) {
        envBtn.addEventListener('click', () => openLightbox(0, 'all', 'environment'));
    }

    // Environment interactive preview thumbnails & pipeline step shot cards
    document.querySelectorAll('[data-environment-index]').forEach(thumb => {
        const handleTrigger = () => {
            const rawIndex = parseInt(thumb.getAttribute('data-environment-index') || '0', 10);
            openLightbox(rawIndex, 'all', 'environment');
        };
        thumb.addEventListener('click', handleTrigger);
        thumb.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTrigger();
            }
        });
    });

    // Close & Navigation controls
    if (btnClose) btnClose.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    if (btnPrev) btnPrev.addEventListener('click', () => navigate(-1));
    if (btnNext) btnNext.addEventListener('click', () => navigate(1));

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        switch (e.key) {
            case 'Escape': closeLightbox(); break;
            case 'ArrowLeft': navigate(-1); break;
            case 'ArrowRight': navigate(1); break;
        }
    });

    // Touch swipe support
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 50) {
            navigate(diff > 0 ? -1 : 1);
        }
    }, { passive: true });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay || '0');
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });
    
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   COUNTER ANIMATIONS
   ============================================ */
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const duration = 1600;
    const start = performance.now();
    
    function update(timestamp) {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

/* ============================================
   PLATFORM FILTERS & DYNAMIC AMBIENT GLOW
   ============================================ */
function initPlatformFilters() {
    const filterBtns = document.querySelectorAll('.platform-filter-btn');
    const platformSections = document.querySelectorAll('.platform-section');
    const ambientGlow = document.getElementById('ambient-glow');
    
    if (!filterBtns.length || !platformSections.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active state on buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Morph ambient background glow according to platform color
            if (ambientGlow && PLATFORM_AURAS[filter]) {
                ambientGlow.style.background = PLATFORM_AURAS[filter];
            }

            // Filter platform sections with smooth transition
            platformSections.forEach(section => {
                const platform = section.dataset.platform;
                
                if (filter === 'all' || platform === filter) {
                    section.classList.remove('is-hidden');
                    section.style.display = '';
                    void section.offsetWidth;
                    section.classList.add('is-visible');
                } else {
                    section.classList.add('is-hidden');
                    setTimeout(() => {
                        if (section.classList.contains('is-hidden')) {
                            section.style.display = 'none';
                        }
                    }, 280);
                }
            });
        });
    });
}

/* ============================================
   VIDEO EMBEDS
   ============================================ */
function initVideoEmbeds() {
    document.querySelectorAll('.video-embed').forEach(embed => {
        const startPlayback = () => {
            const videoId = embed.dataset.videoId;
            if (!videoId || embed.querySelector('iframe')) return;
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            iframe.title = 'Unreal Engine Cinematic Showcase Video';
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.style.position = 'absolute';
            iframe.style.inset = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.borderRadius = 'inherit';
            embed.innerHTML = '';
            embed.appendChild(iframe);
            embed.style.cursor = 'default';
        };

        embed.addEventListener('click', startPlayback);
        embed.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                startPlayback();
            }
        });
    });
}

/* ============================================
   CODE COPY BUTTONS
   ============================================ */
function initCodeCopyButtons() {
    const copyBtns = document.querySelectorAll('.code-copy-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const targetId = btn.dataset.copyTarget;
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            const textToCopy = targetEl.innerText || targetEl.textContent;
            try {
                await navigator.clipboard.writeText(textToCopy);
                const copySpan = btn.querySelector('.copy-text');
                const origText = copySpan ? copySpan.textContent : 'Copia';
                btn.classList.add('copied');
                if (copySpan) copySpan.textContent = 'Copiato! ✓';

                setTimeout(() => {
                    btn.classList.remove('copied');
                    if (copySpan) copySpan.textContent = origText;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code snippet:', err);
            }
        });
    });
}

/* ============================================
   CARD SPOTLIGHTS & 3D PERSPECTIVE GLOW
   ============================================ */
function initCardSpotlights() {
    const cards = document.querySelectorAll('.project-card, .skill-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }, { passive: true });
    });
}

/* ============================================
   BACK TO TOP WITH CIRCULAR PROGRESS
   ============================================ */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    const circle = btn.querySelector('.progress-ring__circle');
    const radius = circle ? circle.r.baseVal.value : 20;
    const circumference = 2 * Math.PI * radius;

    if (circle) {
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
    }

    function setProgress(percent) {
        if (!circle) return;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        
        btn.classList.toggle('visible', window.scrollY > 400);
        setProgress(scrollPercent);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ============================================
   GITHUB REPOSITORIES FILTERING
   ============================================ */
function initRepoLanguageFilter() {
    const langBtns = document.querySelectorAll('.repo-lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedLang = btn.getAttribute('data-lang');
            const cards = document.querySelectorAll('.github-repo-card');

            cards.forEach(card => {
                const cardLang = card.getAttribute('data-lang');
                if (selectedLang === 'all' || cardLang === selectedLang) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Get or generate consistent language dot colors
function getLanguageColor(language) {
    if (!language) return '#8b5cf6';
    if (LANG_COLORS[language]) return LANG_COLORS[language];
    // Deterministic HSL color for any newly added programming language
    let hash = 0;
    for (let i = 0; i < language.length; i++) {
        hash = language.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 60%)`;
}

function updateRepoLanguageFilters(repos) {
    const filterContainer = document.querySelector('.repo-filter-bar');
    if (!filterContainer) return;

    const languages = [...new Set(repos.map(r => r.language).filter(Boolean))];
    
    filterContainer.innerHTML = `
        <span class="repo-filter-title">Filter by Language:</span>
        <button class="repo-lang-btn active" data-lang="all">All (${repos.length})</button>
        ${languages.map(lang => {
            const count = repos.filter(r => r.language === lang).length;
            return `<button class="repo-lang-btn" data-lang="${lang}">${lang} (${count})</button>`;
        }).join('')}
    `;

    initRepoLanguageFilter();
}

/* ============================================
   LIVE REPOSITORY SYNC BUTTON
   ============================================ */
function initRepoSyncButton() {
    const syncBtn = document.getElementById('repo-sync-btn');
    if (!syncBtn) return;

    syncBtn.addEventListener('click', () => {
        fetchGitHubData(GITHUB_USERNAME, true);
    });
}

/* ============================================
   GITHUB API & DYNAMIC REPOSITORY RENDERING
   ============================================ */
async function fetchGitHubData(username, force = false) {
    const syncBtn = document.getElementById('repo-sync-btn');
    const syncText = document.getElementById('repo-sync-text');
    
    if (syncBtn) {
        syncBtn.classList.add('spinning');
        if (syncText) syncText.textContent = 'Syncing...';
    }

    // Check localStorage cache first for instant initial display
    if (!force) {
        try {
            const cachedReposStr = localStorage.getItem('gh_repos_' + username);
            const cachedUserStr = localStorage.getItem('gh_user_' + username);
            if (cachedReposStr && cachedUserStr) {
                const cachedRepos = JSON.parse(cachedReposStr);
                const cachedUser = JSON.parse(cachedUserStr);
                if (Array.isArray(cachedRepos) && cachedRepos.length > 0) {
                    renderGitHubContent(cachedUser, cachedRepos);
                }
            }
        } catch (e) {
            console.warn('Could not read cached GitHub repos:', e);
        }
    }

    try {
        const cacheBuster = force ? `&_t=${Date.now()}` : '';
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`, {
                headers: { 'Accept': 'application/vnd.github+json' }
            }),
            fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner${cacheBuster}`, {
                headers: { 'Accept': 'application/vnd.github+json' }
            })
        ]);
        
        if (!userRes.ok || !reposRes.ok) {
            console.warn(`GitHub API status: user ${userRes.status}, repos ${reposRes.status}`);
            
            // If rate limited or error, try localStorage cache before falling back
            const cachedReposStr = localStorage.getItem('gh_repos_' + username);
            const cachedUserStr = localStorage.getItem('gh_user_' + username);
            if (cachedReposStr && cachedUserStr) {
                const cachedRepos = JSON.parse(cachedReposStr);
                const cachedUser = JSON.parse(cachedUserStr);
                renderGitHubContent(cachedUser, cachedRepos);
            } else {
                renderGitHubContent(GITHUB_FALLBACK_USER, GITHUB_FALLBACK_REPOS);
            }
            return;
        }
        
        const user = await userRes.json();
        const repos = await reposRes.json();
        
        // Filter out forks so only user-created repositories appear
        const relevantRepos = repos.filter(r => !r.fork);

        // Update localStorage cache with fresh live data
        try {
            localStorage.setItem('gh_user_' + username, JSON.stringify(user));
            localStorage.setItem('gh_repos_' + username, JSON.stringify(relevantRepos));
            localStorage.setItem('gh_sync_time_' + username, Date.now().toString());
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
        
        renderGitHubContent(user, relevantRepos);
        
        if (syncBtn && syncText) {
            syncText.textContent = 'Synced ✓';
            setTimeout(() => {
                if (syncText) syncText.textContent = 'Live Sync';
            }, 2000);
        }
        
    } catch (error) {
        console.warn('Network issue fetching GitHub API:', error);
        const cachedReposStr = localStorage.getItem('gh_repos_' + username);
        const cachedUserStr = localStorage.getItem('gh_user_' + username);
        if (cachedReposStr && cachedUserStr) {
            renderGitHubContent(JSON.parse(cachedUserStr), JSON.parse(cachedReposStr));
        } else {
            renderGitHubContent(GITHUB_FALLBACK_USER, GITHUB_FALLBACK_REPOS);
        }
    } finally {
        if (syncBtn) {
            syncBtn.classList.remove('spinning');
        }
    }
}

function renderGitHubContent(user, repos) {
    const reposEl = document.getElementById('github-repos-grid');
    const repoCounterEl = document.getElementById('view-switch-repo-count');
    const statCountEl = document.getElementById('repo-stat-count');
    const statStarsEl = document.getElementById('repo-stat-stars');
    const statForksEl = document.getElementById('repo-stat-forks');
    const statFollowersEl = document.getElementById('repo-stat-followers');
    
    // Non-fork repos
    const relevantRepos = repos.filter(r => !r.fork);

    const totalStars = relevantRepos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
    const totalForks = relevantRepos.reduce((acc, r) => acc + (r.forks_count || 0), 0);
    
    // Update live telemetry metrics
    if (repoCounterEl) repoCounterEl.textContent = `${relevantRepos.length} Repos`;
    if (statCountEl) statCountEl.textContent = relevantRepos.length;
    if (statStarsEl) statStarsEl.textContent = totalStars;
    if (statForksEl) statForksEl.textContent = totalForks;
    if (statFollowersEl) statFollowersEl.textContent = user.followers || 0;
    
    if (reposEl) {
        reposEl.innerHTML = '';

        if (relevantRepos.length === 0) {
            reposEl.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted); font-family: var(--font-mono);">
                    No public repositories found. When you create a new repository on GitHub, it will appear here automatically.
                </div>
            `;
            return;
        }

        relevantRepos.forEach(repo => {
            const langColor = getLanguageColor(repo.language);
            
            // Topics: check API topics first, then local map, then language fallback
            const topics = (repo.topics && repo.topics.length > 0) 
                ? repo.topics 
                : (REPO_TOPICS_MAP[repo.name] || (repo.language ? [repo.language] : ['GitHub Repository']));
            
            const card = document.createElement('div');
            card.className = 'github-repo-card';
            card.setAttribute('data-lang', repo.language || 'Other');
            card.innerHTML = `
                <div>
                    <div class="repo-header">
                        <div class="repo-header-left">
                            <span class="repo-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </span>
                            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name" title="${repo.name}">${repo.name}</a>
                        </div>
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-external-icon" aria-label="Open repository on GitHub">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                    <p class="repo-desc">${repo.description || 'Open-source software and engineering project on GitHub.'}</p>
                    ${topics.length > 0 ? `
                        <div class="repo-topics">
                            ${topics.map(t => `<span class="repo-topic-tag">${t}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="repo-footer">
                    <div class="repo-meta">
                        ${repo.language ? `
                            <span class="repo-meta-item">
                                <span class="repo-lang-dot" style="background-color: ${langColor}"></span>
                                ${repo.language}
                            </span>
                        ` : ''}
                        <span class="repo-meta-item" title="Stars">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            ${repo.stargazers_count || 0}
                        </span>
                        <span class="repo-meta-item" title="Forks">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                            ${repo.forks_count || 0}
                        </span>
                    </div>
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-action-link">
                        Code &rarr;
                    </a>
                </div>
            `;
            reposEl.appendChild(card);
        });

        // Initialize language filter buttons dynamically based on actual repositories
        updateRepoLanguageFilters(relevantRepos);
    }
}

// Global debug/test helpers for user to preview adding new repos immediately
window.syncGitHubRepos = () => fetchGitHubData(GITHUB_USERNAME, true);
window.addDevRepo = function(repo) {
    const defaultRepo = {
        name: repo.name || 'new-engine-project',
        description: repo.description || 'Newly added project to test dynamic rendering',
        language: repo.language || 'C++',
        html_url: repo.html_url || `https://github.com/${GITHUB_USERNAME}/${repo.name || 'new-engine-project'}`,
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0,
        topics: repo.topics || ['Dynamic Repo', repo.language || 'C++'],
        fork: false
    };
    
    let currentRepos = [...GITHUB_FALLBACK_REPOS];
    try {
        const stored = localStorage.getItem('gh_repos_' + GITHUB_USERNAME);
        if (stored) currentRepos = JSON.parse(stored);
    } catch(e) {}

    currentRepos.unshift(defaultRepo);
    localStorage.setItem('gh_repos_' + GITHUB_USERNAME, JSON.stringify(currentRepos));
    renderGitHubContent(GITHUB_FALLBACK_USER, currentRepos);
    console.log('✅ Added dynamic repo! Total repos now:', currentRepos.length);
};
