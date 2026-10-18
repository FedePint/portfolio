# Portfolio - Contesto di Progetto

> Questo file viene caricato automaticamente dall'agente ad ogni conversazione.
> Aggiornalo ad ogni milestone o decisione importante.

---

## 🎯 Obiettivo

Creare un **portfolio personale** da pubblicare su **GitHub Pages**.
Il sito deve essere visivamente impressionante, moderno e performante.
Sono un ingegnere informatico specializzato in computer grafica , porgrammazione in  parallelo. ho fatto dei priogatti acnhe come 3d modeling eho cvatto progetti da technical artist . 

---

## 👤 Informazioni Utente

| Campo             | Valore                |
|-------------------|-----------------------|
| GitHub Username   | FedePint              |
| Nome visualizzato | Federico Pintabona    |
| Ruolo / Titolo    | Computer Engineering Student \| High-Performance Computing, Computer Graphics & Software Engineering |
| Formazione        | Politecnico di Torino (B.Sc. Ingegneria del Cinema e dei Mezzi di Comunicazione; M.Sc. Ingegneria Informatica) |
| Località          | Torino, Italia        |
| Bio               | Ingegnere informatico con un background trasversale che unisce il calcolo ad alte prestazioni (C++, CUDA, architetture low-level) e il mondo della computer grafica 3D (OpenGL, GLSL, Unreal Engine 5, Blender). Appassionato di ottimizzazione hardware, programmazione parallela su GPU e sviluppo di pipeline di rendering in tempo reale. |
| Email contatto    | federicopintabona12@gmail.com |
| Social links      | [GitHub](https://github.com/FedePint), ~~LinkedIn~~ (Disattivato) |

---

## 🛠️ Stack Tecnologico

| Tecnologia     | Scelta              | Note                              |
|----------------|---------------------|-----------------------------------|
| Struttura      | HTML5 semantico     | SEO-friendly, GitHub Pages compat |
| Stile          | Vanilla CSS         | No framework CSS                  |
| Logica         | Vanilla JavaScript  | No dipendenze esterne             |
| Font           | Google Fonts        | Outfit (heading) + Inter (body)   |
| Hosting        | GitHub Pages        | Deploy da branch `main`           |
| Design skill   | uiux-designer       | Integrata in `.agents/skills/`    |

---

## 🎨 Design

| Aspetto          | Decisione          |
|------------------|--------------------|
| Tema             | Dark mode elegante e minimal |
| Palette colori   | Accent violet (`#8b5cf6`), Blender (`#f5792a`), UE (`#00a8ff`), OpenGL (`#00e5a3`), CUDA (`#76b900`), ARM (`#ff4757`), QA (`#00b4d8`) |
| Font heading     | Outfit             |
| Font body        | Inter              |
| Stile animazioni | Transizioni micro-interattive, spotlight coordinate, canvas 3D dinamico |

---

## 📐 Struttura del Sito

### Sezioni previste

1. **Hero** — Nome (Federico Pintabona), headline e value proposition tecnica ad alto impatto, CTA (Copy Email in 1 clic, Projects, Download CV), telemetria tecnologica live
2. **About** — Chi sono, doppia laurea PoliTo (B.Sc. & M.Sc.)
3. **Education** — Percorso accademico (M.Sc. Computer Engineering & B.Sc. Cinema and Media Engineering @ Politecnico di Torino)
4. **Skills** — Competenze tecniche suddivise in 6 schede con focus lines architetturali (HPC & CUDA, OpenGL & Shaders, UE5 & Real-time, Blender LookDev, Low-Level & ARM, QA & Testing)
5. **Projects** — Featured Projects visivi 3D & Real-time (Blender Saloon con galleria LookDev interattiva integrata e filmstrip modale, UE5 Japanese Sanctuary Cinematic Environment, MetaHuman Showcase)
6. **Repositories** — Sezione GitHub dedicata con telemetria live API (parallel-gnn-inference, Droid-attack, Tetris-LandTiger), filtri per linguaggio e topic tags
7. **Contact** — Canali di contatto (Email federicopintabona12@gmail.com, GitHub, LinkedIn disattivato, Location Torino) e box di download diretto del CV (PDF)
8. **Footer** — Credits, copyright Federico Pintabona, navigazione rapida

### Struttura file

```
portfolio/
├── .agents/
│   └── skills/
│       └── uiux-designer/
│           └── SKILL.md
├── assets/
│   └── images/
├── css/
│   └── style.css
├── js/
│   └── main.js
├── index.html
└── GEMINI.md              ← questo file
```

---

## 🎬 Contenuti Portfolio & Piattaforme
 
| # | Piattaforma | Tipo | Descrizione | Link / Rif |
|---|-------------|------|-------------|------------|
| 1 | Blender | 3D Environment | La Bastille Saloon — Modellazione, texturing e rendering Cycles | media/saloon/ |
| 2 | Unreal Engine | Video & 4 Renders | Cinematic Environment Showcase (UE5, Lumen, Nanite) | media/envirorment/ & [Video](https://youtu.be/W_AC5caENeg) |
| 3 | Unreal Engine | Digital Double (10 Shots) & Video | MetaHuman 1 — Main Actor (Federico) Photogrammetry & Facial Mocap Pipeline | media/metahuman/ & [Video](https://youtu.be/jd8oNUgPNFU) |
| 4 | OpenGL / C++ | GitHub Repo | Droid-attack (3D Shooter, GLSL Shaders, Raycasting) | [GitHub: Droid-attack](https://github.com/FedePint/Droid-attack) |
| 5 | CUDA / HPC | GitHub Repo | parallel-gnn-inference (GNN GPU/Multi-core engine) | [GitHub: parallel-gnn-inference](https://github.com/FedePint/parallel-gnn-inference) |
| 6 | Embedded / ARM | GitHub Repo | Tetris-LandTiger (Bare-metal C su LPC1768, GLCD, DAC) | [GitHub: Tetris-LandTiger](https://github.com/FedePint/Tetris-LandTiger) |
 
---
 
## 📊 Stato di Avanzamento
 
| Fase                        | Stato        | Data       |
|-----------------------------|--------------|------------|
| Struttura cartelle          | ✅ Completata | 2026-10-14 |
| Skill uiux-designer        | ✅ Integrata  | 2026-10-14 |
| File di contesto (GEMINI)   | ✅ Creato     | 2026-10-14 |
| Scelta stile e colori       | ✅ Dark mode elegante | 2026-10-15 |
| Contenuti portfolio         | ✅ 7 progetti suddivisi per piattaforma | 2026-10-15 |
| Info utente                 | ✅ Completata (FedePint) | 2026-10-15 |
| Suddivisione piattaforme   | ✅ Completata (Blender, UE, OpenGL, CUDA, ARM) | 2026-10-15 |
| Personalizzazione grafica  | ✅ Completata (temi colore per piattaforma) | 2026-10-15 |
| Implementazione HTML        | ✅ Completata | 2026-10-15 |
| Implementazione CSS         | ✅ Completata | 2026-10-15 |
| Implementazione JS          | ✅ Completata | 2026-10-15 |
| Asset e immagini            | ✅ Ottimizzate (media/saloon, media/metahuman, media/envirorment) | 2026-10-16 |
| Responsive design           | ✅ Completato | 2026-10-15 |
| Test e polish               | ✅ Completato | 2026-10-18 |
| Repository Git locale       | ✅ Inizializzata (branch main) | 2026-10-18 |
| Deploy su GitHub Pages      | ✅ Pushed su main (in attivazione Settings) | 2026-10-18 |
 
---
 
## 📝 Decisioni e Note
 
### 2026-10-14 — Setup iniziale
- Creata struttura cartelle del progetto
- Skill `uiux-designer` spostata nel percorso corretto (`.agents/skills/uiux-designer/SKILL.md`)
- Corretti i path degli script nella skill (`.agent/` → `.agents/`)
- L'utente preferisce decidere lo stile in un secondo momento
 
### 2026-10-15 — Contenuti, Piattaforme e Grafica Personalizzata
- GitHub username impostato: **FedePint**
- Il saloon "La Bastille" è specificato e valorizzato come realizzato al 100% in **Blender** (3D modeling, texturing, Cycles render)
- Suddivisione dei progetti per piattaforma tecnica:
  1. **Blender**: La Bastille Saloon (Galleria 16 render + scheda showcase) - Palette arancione Blender (`#f5792a`)
  2. **Unreal Engine**: Environment showcase, MetaHuman showcase, Presentazione Canva - Palette blu elettrico UE (`#00a8ff`)
  3. **OpenGL / C++**: Droid-attack (3D action shooter, GLSL shaders, raycasting, AI) - Palette teal/cyan GLSL (`#00e5a3`)
  4. **CUDA & HPC**: parallel-gnn-inference (GNN GPU acceleration engine) - Palette verde neon NVIDIA (`#76b900`)
  5. **Embedded / ARM**: Tetris-LandTiger (Cortex-M3 LPC1768 bare-metal C, GLCD, DAC) - Palette rosso/crimson ARM (`#ff4757`)
### 2026-10-16 — UI/UX Design System Elevation & Modern Polish
- Applicata la skill `uiux-designer` con standard estetici di livello premium per ingegneri di Computer Graphics & Technical Artist:
  1. **Hero con Canvas 3D Interattivo**: Reticolo geometrico di nodi e linee wireframe reattivo al movimento del mouse.
  2. **Live Status Badge & Telemetry**: Indicatore radar pulsante di disponibilità e ribbon con le tecnologie chiave in Hero.
  3. **Scroll Reading Progress Bar**: Linea neon in cima alla viewport che traccia in tempo reale la percentuale di lettura.
  4. **Skill Cards con Livelli & Platform Glow**: Fluency meters per ciascun dominio (Blender, UE5, OpenGL, CUDA, ARM) e bagliori al passaggio del mouse.
  5. **Smart Filtering Galleria 3D**: Suddivisione dei 16 render in categorie (Panoramiche, Dettagli Props, Illuminazione) e lightbox con scorciatoie tastiera.
  6. **Interactive Code Showcases**: Pulsante "Copia codice" con feedback visivo istantaneo per GLSL, CUDA e ARM Cortex-M3 C.
  7. **Card Spotlight Dinamico & Aura Ambient**: Calcolo delle coordinate cursore per speculari radiali e transizione del colore d'atmosfera in base alla piattaforma selezionata.
  8. **Back to Top Flottante**: Pulsante con anello circolare SVG animato che traccia lo scroll progressivo.
  9. **About Me Profile Showcase**: Sostituita l'immagine generica con la foto profilo reale di GitHub scaricata e ottimizzata in locale (`assets/images/profile.jpg`), racchiusa in una cornice squircle con alone radiale al neon, badge interattivo glassmorphism collegato a `@FedePint` e tag di specializzazione.
  10. **Internazionalizzazione (Inglese 100%)**: Tutti i testi dell'interfaccia, i titoli, i badge, i filtri della galleria e i widget GitHub sono stati unificati in inglese tecnico di livello professionale.
  11. **Separazione Featured Projects e Sezione GitHub Dedicata**: Rimossi i progetti repository GitHub dalla sezione Featured Projects (dove rimangono esclusivamente i flagship 3D e real-time di Blender e Unreal Engine 5) e creata una sezione dedicata "GitHub Repositories" (#repositories) con telemetria GitHub live, badge per linguaggio di programmazione, topic tag tecnici per ciascuna repository e link diretti al codice.
  12. **Integrazione Completa delle Specifiche da `info.md`**: Nome impostato su Federico Pintabona, percorso accademico Politecnico di Torino (M.Sc. Computer Engineering & B.Sc. Cinema and Media Engineering), sezione dedicata "Academic Journey" (#education), 6ª skill "Software Engineering & QA" (Python, pytest, Selenium), interessi personali (Game Design, Culinary Arts, Cultural Travel), metriche quantitative reali (1.5M nodi / 128 feature per nodo sul motore GNN, 16 render Cycles), integrazione del progetto Participium e download del CV PDF.
  13. **Sezione GitHub Repositories 100% Dinamica**: Rimosso Participium dall'elenco repository. Implementata sincronizzazione live client-side via GitHub API (`/users/FedePint/repos?sort=updated&per_page=100`), caching locale resiliente (Stale-While-Revalidate via `localStorage`), generazione completamente dinamica dei bottoni filtro lingua con conteggi in tempo reale, pulsante "Live Sync" per aggiornamento forzato su richiesta e supporto automatico all'apparizione istantanea di qualsiasi nuova repository creata su GitHub.
  14. **Riorganizzazione Strutturale Galleria & Presentazione Progetti**: Eliminata la sezione Galleria standalone isolata. I progetti vengono presentati per primi (Featured Projects `#projects`). Nella card flagship Blender "La Bastille Saloon" è stata integrata una visual preview interattiva (hero cliccabile + strip con 5 miniature/angolazioni + CTA button). Al click, si apre il visualizzatore modale LookDev ad alta fedeltà con filtri per categoria (All, Panoramas, Details, Lighting), filmstrip interattivo di tutte le 16 inquadrature con sincronizzazione scroll e navigazione da tastiera.
  15. **Integrazione Nuova Struttura Cartella `media/` & Showcase Flagship MetaHuman da `PROJECTS.md`**:
      - Riadattati tutti i percorsi asset alle nuove cartelle dedicate: `media/saloon/` (16 render Cycles), `media/metahuman/` (10 scatti pipeline photogrammetry, sculpting e animazione), `media/envirorment/` (4 viste ambiente real-time UE5).
      - Elevato il progetto MetaHuman a **Featured Flagship Showcase** con scheda panoramica, anteprima hero interattiva, filmstrip di anteprima rapida (Reference, Scan 160 foto, Sculpting, Subway in-engine, Climax ansia), 3 schede pipeline strutturate (`01`, `02`, `03`) e badge tecnici.
      - Descrizione tecnica fedele al 100% a [PROJECTS.md](file:///c:/Users/Utente/Desktop/portfolio/PROJECTS.md): fotogrammetria single-camera 160 foto a 360°, pulizia mesh e rimozione barba con pennelli di sculpt (`Clay Strips`, `Smooth`, `Flatten`) in Blender, conversione Scan to MetaHuman Identity in UE5, LookDev avanzato con skin SSS, occhi procedurali e groom strand-based, cattura performance facciale su iPhone TrueDepth con LiveLink Face e registrazione diretta con Take Recorder del climax ascendente di ansia e tensione.
      - Lightbox modal multi-collezione: il visualizzatore modale gestisce dinamicamente sia il Saloon Blender (16 render, tema arancione), sia il MetaHuman Pipeline (10 scatti, filtri All, 3D Scan & Sculpt, Identity & LookDev, Facial Mocap, tema blu elettrico), sia le 4 viste panoramiche di Cinematic Environment.
  16. **Riorganizzazione Flagship MetaHuman Card & Integrazione Visuale Step-by-Step**:
      - Eliminato lo spazio vuoto asimmetrico riorganizzando il layout della card:
        - **Sezione Superiore (Overview)**: Griglia a 2 colonne perfettamente bilanciate in altezza (Hero portrait UE5 interattivo a sinistra con badge e zoom; tag, titolo, bio tecnica, pillole hardware/software e bottoni CTA a destra).
        - **Sezione Inferiore (Pipeline Breakdown a tutta larghezza)**: Contenitore di workflow completo in cui **ciascun singolo step è associato direttamente alle proprie immagini dedicate**:
          - `Step 01: 3D Scan & Mesh Sculpting` → 3 immagini: Ground Truth Actor Reference, 160-Photo 360° Point Cloud Scan, Blender Sculpting (rimozione barba).
          - `Step 02: Scan to MetaHuman Identity` → 3 immagini: MetaHuman Identity Fitting Portrait, In-Engine Subway Car Scene (Lumen), LookDev Close-Up Macro (SSS skin e micro-groom).
          - `Step 03: Facial Animation & Take Recorder` → 4 immagini della progressione emotiva: Phase 01 Neutral Baseline, Phase 02 Lateral Glances & Anxiety, Phase 03 Rising Panic, Phase 04 Acute Tension Climax.
      - Ciascuna miniatura include tag di processo, sottotitolo, zoom al passaggio del mouse e apertura istantanea nel lightbox LookDev ad alta risoluzione con navigazione a tastiera.
      - **Bugfix CSS Layout & Miniature**: Risolto il conflitto di cascata CSS che forzava l'intera scheda in 2 colonne asimmetriche ed eliminati gli SVG ingigantiti non vincolati; implementate card pulite `.pipeline-thumb-card` proporzionate a griglia responsive e layout verticale solido con overview superiore a 2 colonne perfettamente bilanciata.
  17. **Perfezionamento Architetturale Card MetaHuman (3-Stage Horizontal Production Workflow)**:
      - Riorganizzata la card per risolvere il sovradimensionamento verticale e lo squilibrio visivo:
        - **Overview Superiore Compatta & Telemetria**: Hero media 16:9 con badge 10 scatti UE5 affiancato da una micro-telemetria di produzione (160 Scan Photos, Dual Pipeline Cycles/UE5, 60 FPS TrueDepth Mocap), titolo, bio tecnica, pillole tecnologiche e CTA dirette (YouTube + LookDev Viewer).
        - **Workflow Pipeline Orizzontale a 3 Colonne (`metahuman-workflow-grid`)**:
          - `Stage 01: 3D Scan & Mesh Sculpting`: Blender Sculpting mesh (featured) + Actor Reference e 160-Photo 360° Point Cloud.
          - `Stage 02: Scan to MetaHuman Identity`: MetaHuman Identity Fitting (featured) + Subway Car Scene (Lumen) e SSS Skin Macro LookDev.
          - `Stage 03: Facial Mocap & Take Recorder`: Griglia 2x2 delle 4 fasi emotive catturate live con TrueDepth (Neutral, Glances, Strain, Climax).
        - **Bilanciamento Altezze & Zero Spazio Vuoto**: Layout compatto con altezze delle gallerie uniformate su tutte e 3 le colonne; responsive fluido che su tablet/mobile passa a colonna singola pulita.
  18. **Elevazione Flagship della Card Cinematic Environment (Stessa "Classe" e Architettura di MetaHuman)**:
      - Riprogettata la card di Cinematic Environment per adottare la medesima classe, struttura e prestigio visivo della card MetaHuman:
        - **Overview Superiore Bilanciata a 2 Colonne (`.environment-overview`)**:
          - Colonna Sinistra: Hero media 16:9 con video player in **autoplay continuo** (`.project-media--autoplay`), integrato direttamente via YouTube iframe (`autoplay=1&mute=1&loop=1&playlist=W_AC5caENeg`), copertina fallback master aerial render (`TA-G08-Finale-Presentazione-overview.png`), badge `Live Showcase • UE5` con indicatore verde pulsante, e strip telemetrica di produzione in tempo reale (`Lumen GI / Dynamic Lighting`, `Nanite Mesh / Micro-Polygons`, `44.4 FPS / Real-Time In-Engine`). Il video parte in automatico in loop continuo appena la card viene visualizzata, con controlli nativi per regolare volume, qualità e schermo intero.
          - Colonna Destra: Tag Unreal Engine 5, titolo `Cinematic Environment — Japanese Sanctuary`, descrizione tecnica approfondita (Lumen indirect bounce, Nanite sub-pixel geometry, volumetric god rays, water shader con SSR e caustiche, foliage animato dal vento), pillole tecnologiche e doppi pulsanti CTA (Explore LookDev Gallery + Watch Cinematic on YouTube).
        - **Production Workflow a 3 Colonne (`.environment-workflow-section`)**:
          - `Stage 01: Pagoda Overlook & Ridge` (Nanite Geometry & Asian Architecture) → Immagine `TA-G08-Finale-Presentazione (1).png`.
          - `Stage 02: Temple Courtyard & Zen Garden` (Lumen Dynamic Global Illumination) → Immagine `TA-G08-Finale-Presentazione (2).png`.
          - `Stage 03: Lakeside Pond & God Rays` (Water Caustics & Volumetric Fog, 44+ FPS) → Immagine `TA-G08-Finale-Presentazione (3).png`.
      - **Interattività e Sincronizzazione LookDev**: Ciascuna delle miniature di produzione apre istantaneamente il visualizzatore modale 4K con filtri dedicati (`All`, `Overview`, `Architecture`, `Courtyard`, `Water & VFX`), navigazione da tastiera e sincronizzazione del filmstrip, lasciando l'hero principale dedicato alla riproduzione video fluida.
      - **Layout Pulito UE5 Works**: Riposizionata la card Canva Presentation (`Unreal Engine Works Presentation`) in un contenitore coerente immediatamente sotto la card Environment, mantenendo il conteggio dei filtri Unreal Engine a 3 e garantendo piena reattività su desktop, tablet e mobile.
  19. **Raffinamento Contenuti e Canali di Contatto (2026-10-18)**:
      - **About Me**: Rimosse le metriche di dettaglio GNN (1.5M nodi e 128 feature/nodo) focalizzando i badge salienti sui render 3D Cycles e sulla doppia laurea PoliTo; rimossa la sezione interessi personali ("Beyond Engineering").
      - **Featured Projects**: Rimossa la scheda Canva Slide Deck per mantenere la sezione Projects dedicata esclusivamente ai tre flagship 3D e real-time (Blender Saloon, MetaHuman 1, UE5 Japanese Sanctuary); ricalibrati i contatori filtri (All Works: 3, Unreal Engine: 2).
      - **Contatti**: Aggiunta la mail personale reale `federicopintabona12@gmail.com` (con `mailto:` attivo) e disattivato il link LinkedIn (reso non cliccabile con feedback visivo dedicato `contact-card--disabled`).
  20. **Redesign Architetturale & Visivo da `portfolio_design_engineering_blueprint.md` (2026-10-18)**:
      - **Palette Obsidian Tech**: Applicati i design tokens d'avanguardia (`#0A0A0C` canvas profondo, `#121216` bento elevation, `#E2FF32` Acid Lime high-contrast accent, `#F4F4F6` off-white anti-glare).
      - **Floating Glass Pill Navbar**: Convertita la navigazione in una barra pillola fluttuante con `backdrop-filter: blur(16px)`, raggio `9999px`, bordo `1px solid var(--border-subtle)` e reattività mobile.
      - **Zero-Friction "Copy Email" + Micro-Toast**: Implementato il pulsante con copia in 1 clic negli appunti di `federicopintabona12@gmail.com`, feedback immediato `Copied! ✓` per 2.2s e micro-toast fluttuante hardware-accelerato con checkmark verde (Hero CTA + Contact Card).
      - **Bento Grid Skills Matrix (12 Colonne)**: Riorganizzate le 6 competenze tecniche in una griglia modulare bento (CUDA span 7 + UE5 span 5; OpenGL span 4 + Blender span 4 + ARM span 4; QA & Testing span 12) con focus lines e zero barre percentuali.
      - **Allineamento Case Studies con le Slide `TA-G08`**: Rafforzata la narrazione tecnica STAR (metriche hook, vincoli, dietro le quinte fotogrammetria 160 foto, sculpt Blender con Clay Strips/Smooth/Flatten, LiveLink TrueDepth mocap in 4 fasi emotive, telemetria Lumen/Nanite a 44.4 FPS).
  21. **Sincronizzazione Dinamica Avatar GitHub & Aggiornamento Asset Locale (2026-10-18)**:
      - **Download Nuova Foto Profilo**: Scaricata la nuova immagine del profilo GitHub di Federico Pintabona da `https://avatars.githubusercontent.com/u/241323046?v=4` e sovrascritta la copia statica locale in `assets/images/profile.jpg`.
      - **Cache-Busting Immediato**: Aggiunto parametro di versioning `?v=20261018` al tag `<img>` in `index.html` per evitare che la cache locale del browser mostri il vecchio render MetaHuman.
      - **Sincronizzazione Live Client-Side**: Integrato in `renderGitHubContent` in `js/main.js` l'aggiornamento automatico dell'attributo `src` di `.profile-avatar-img` con `user.avatar_url`, garantendo che qualunque futuro cambio di immagine su GitHub venga recepito in tempo reale dal sito.
      - **Server Locale Attivo**: Avviato il server di sviluppo su `http://localhost:8000` e aperta la pagina nel browser predefinito.
  22. **Mobile Responsive Design Elevation & Architecture Polish (2026-10-18)**:
      - **Breakpoints Decrescenti Unificati**: Riorganizzata la cascata CSS in una gerarchia rigorosa (992px -> 768px -> 480px -> 360px), eliminando i conflitti di precedenza e le media queries isolate.
      - **Floating Glass Pill Navbar su Mobile**: Sostituito il layout fisso asimmetrico con una pillola perfettamente adattata (`left: 0.75rem; right: 0.75rem; transform: none; width: auto`), menu a tendina drawer ancorato con glassmorphism satinato (`backdrop-filter: blur(24px)`), target tattili > 44px e chiusura automatica con overlay, tasto ESC o resize del viewport.
      - **Risoluzione Overflow Orizzontale**: Convertiti tutti i `minmax(px, 1fr)` rigidi in fluidi `minmax(min(100%, ...), 1fr)` per Education, Skills, Repositories e Contact, garantendo zero barre di scorrimento orizzontale su schermi da 320px a 390px.
      - **Hero & Telemetry Micro-Grid**: Typography scalabile con clamp protetti da wrap anomali, pulsanti CTA full-width verticali e telemetria live riorganizzata in micro-griglia 2x3 ordinata e leggibile.
      - **Featured Projects Mobile-Ready**: Barra filtri orizzontale con touch-scrolling nativo inerziale, card flagship con overview a colonna singola pulita, micro-griglie compatte per statistiche di produzione (160 Photos, Lumen, Nanite, 44+ FPS) e layout 2x2 conservato per il climax emotivo MetaHuman (neutral, glances, strain, climax) per evitare scrolling chilometrici.
      - **3D LookDev Lightbox Touch-Optimized**: Modal 100vw x 100vh a schermo intero, pulsanti freccia flottanti direttamente sull'immagine per navigazione a 1 tocco, swipe gestuale touch (sinistra/destra) e rimozione suggerimenti tastiera su mobile.
  23. **Native Mobile Architecture & App-Grade Ergonomics (2026-10-18)**:
      - **Ergonomic Thumb-Zone Navigation Dock (`.mobile-bottom-dock`)**: Dock inferiore fluttuante ancorato all'area ergonomica del pollice con `backdrop-filter: blur(24px)`, supporto `env(safe-area-inset-bottom)`, 6 icone SVG e tracking live della sezione attiva durante lo scroll.
      - **Quick-Action Email in Top Navbar**: Pulsante pillola compatto `Email` integrato nella navbar mobile fluttuante accanto al logo e al toggle hamburger, con copia a 1 tocco negli appunti, stato "Copied! ✓" e micro-toast animato.
      - **Connected Academic Journey Timeline**: Riorganizzata la sezione Education su mobile trasformando le card in una linea temporale verticale continua, con asse al neon `var(--accent-primary)` e nodi circolari luminosi che collegano Master's e Bachelor's degree.
      - **Segmented Domain Selector for Skills**: Aggiunta barra di chip filtranti a scorrimento orizzontale (`All`, `HPC & CUDA`, `OpenGL / Shaders`, `UE5 & 3D`, `ARM & QA`) con isolamento istantaneo delle card per dominio per evitare scroll prolungati.
      - **Production Horizontal Snap Carousels con Stage Steppers**: Convertiti i breakdown di produzione di MetaHuman e Cinematic Environment da colonne verticali infinite in caroselli orizzontali nativi con scorrimento inerziale (`scroll-snap-type: x mandatory`) e pulsanti stepper di progressione (`01`, `02`, `03`), sincronizzati bidirezionalmente (tap su pillola scivola alla card, swipe sulla griglia aggiorna la pillola attiva).
      - **Safe Spacing & Elevation**: Elevati il pulsante Back-to-Top circolare e il micro-toast fluttuante con offset dinamico `calc(65px/75px + env(safe-area-inset-bottom))` per garantire zero sovrapposizioni visive con la dock bar.

---

## ⚙️ Convenzioni di Sviluppo

- **Lingua del codice**: commenti e variabili in inglese
- **Lingua dell'interfaccia**: inglese (standard internazionale per portfolio tech/CGI)
- **CSS**: usare custom properties (`--var`) per il design system
- **JS**: vanilla, nessuna dipendenza npm
- **Accessibilità**: attributi ARIA, contrasto sufficiente, navigazione da tastiera
- **Performance**: nessun framework pesante, immagini ottimizzate, lazy loading
- **SEO**: meta tags, heading hierarchy (`h1` unico), semantic HTML
