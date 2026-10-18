# ⚡ High-End Portfolio: Design & Engineering Blueprint

Un sito portfolio d'eccellenza non è un archivio statico, ma un **prodotto esperienziale** in cui il contenitore stesso dimostra le tue capacità progettuali e tecniche. Questa guida raccoglie tutte le regole auree, gli strumenti concreti, le palette e i riferimenti tipografici per realizzare un portfolio all'avanguardia.

---

## 1. Architettura e Cura dei Contenuti (Content Curation)

### 📌 Regola 1.1: Selezione Spietata (3–5 Progetti)
La qualità del tuo portfolio è percepita in base al progetto più debole che mostri. Limita la selezione a **3–5 lavori di punta** che rappresentano il tipo di ruolo o progetti a cui ambisci nel futuro, non tutto ciò che hai fatto in passato.
* **Esempio pratico:** Hai fatto 15 progetti? Scegline 4 principali per la Home Page (in formato *Case Study* approfondito) e, se proprio vuoi mostrare il resto, crea una sezione secondaria chiamata `/archive` o `/playground` con una semplice tabella minimale o una griglia di brevi clip visive senza testo.

### 📌 Regola 1.2: Struttura Narrativa dei Case Study (STAR Modificato)
Un recruiter o Art Director impiega in media **meno di 45 secondi** sul primo screening. Struttura ogni progetto per essere sia scansionabile velocemente (tramite titoli, metriche e video) sia approfondibile:

1. **L'Hook e il Ruolo (Above the fold del progetto):**
   * Titolo chiaro, metriche chiave in evidenza, il tuo ruolo specifico, anno e stack tecnologico/strumenti usati.
   * *Esempio concreto di Metric-Hook:* `"Riduzione del tempo di rendering del 40%"`, `"Incremento conversioni checkout del +25%"`, `"Sistema modulare adottato da 12 team"`.
2. **Il Problema e i Vincoli:**
   * Qual era la sfida reale? Quali limiti tecnici, di budget, di motore grafico o di tempo avevi?
3. **Il Processo (Il "Dietro le Quinte"):**
   * È qui che si distingue un professionista senior da uno junior. Mostra wireframe a bassa fedeltà, iterazioni scartate, schemi architetturali, test di usabilità falliti, nodi di shader o scelte di compromesso. **Non mostrare solo l'output finale levigato.**
4. **L'Impatto Finale:**
   * Risultati misurabili, clip video ad alto framerate del prodotto in azione o link a demo/prototipi interattivi.

### 📌 Regola 1.3: Proposta di Valore nei primi 3 secondi (Hero Section)
Evita frasi generiche come *"Appassionato di design e tecnologia"*. Usa una formula chiara sopra la piega (*above the fold*):
> **`[Chi sei / Specializzazione]` + `[Che tipo di problemi risolvi]` + `[Credenziale o tocco distintivo]`**

* ❌ **Da evitare:** *"Ciao, sono Marco e amo creare esperienze digitali belle e funzionali."*
* ✅ **Esempio Concreto (Product Designer):** *"Senior Product Designer specializzato in interfacce SaaS complesse e Design System scalabili. Attualmente guido il design in @Azienda."*
* ✅ **Esempio Concreto (Creative Developer / 3D):** *"Interactive Developer & Technical Artist. Unisco WebGL, shader in tempo reale e design ingegneristico per creare esperienze web a 60 FPS."*

---

## 2. Direzione Artistica, Tipografia e Palette (UI Contemporanea)

### 📌 Regola 2.1: Bento Grid e Layout Asimmetrici Bilanciati
Le griglie modulari (stile Apple / Linear) permettono di combinare asset eterogenei (brevi loop video, snippet interattivi, tipografia bold, metriche) mantenendo un ordine rigoroso e un'ottima resa responsive.
* **Specifica Tecnica Concrete:**
  * Desktop: Griglia CSS a `12 colonne`, `gap: 24px` (o `1.5rem`), `max-width: 1440px`.
  * Card Bento: `border-radius: 16px` o `24px`, bordo sottile semitrasparente `border: 1px solid rgba(255, 255, 255, 0.08)` per dare definizione su sfondi scuri.

### 📌 Regola 2.2: Tipografia Espressiva, Gerarchia e Variable Fonts
La tipografia costituisce l'80% dell'interfaccia. L'accoppiata standard di alto livello prevede:
1. **Display Font** di forte personalità per gli Header (serif editoriali o grotteschi geometrici estremi).
2. **Sans-Serif** neutrale per il corpo del testo (massima leggibilità).
3. **Monospace** per tag tecnici, date, metriche e snippet.
*Usa i **Variable Fonts** per animare il `font-weight` al passaggio del mouse o in base alla velocità di scroll.*

#### 🅰️ Abbinamenti Tipografici Concreti (Pronti all'uso):

| Stile / Vibe | Display (Titoli / Hero) | Body (Testo lungo / UI) | Monospace (Metadati / Tech Stack) | Dove trovarli |
| :--- | :--- | :--- | :--- | :--- |
| **1. Tech / Avant-Garde** | *Syne* oppure *Clash Display* | *Plus Jakarta Sans* o *Inter* | *JetBrains Mono* | Fontshare / Google Fonts |
| **2. Editoriale / Luxury** | *Instrument Serif* o *PP Editorial New* | *Geist Sans* o *Satoshi* | *Geist Mono* | Pangram Pangram / Vercel / Fontshare |
| **3. Neo-Brutal / Swiss** | *Cabinet Grotesk* o *Neue Montreal* | *General Sans* | *Space Mono* | Fontshare / Pangram Pangram |

### 📌 Regola 2.3: Spazio Negativo (Whitespace) Intenzionale
Il lusso e l'alto livello nel web design si comunicano attraverso il respiro visivo. Non riempire ogni pixel: lascia margini generosi attorno agli asset visivi per guidare l'occhio senza sovraccarico cognitivo.
* **Regola aurea CSS:** Usa spazature verticali tra le sezioni di almeno `120px–180px` su desktop (`clamp(5rem, 12vw, 11rem)`).

### 📌 Regola 2.4: Dark Mode Nativa o High-Contrast UI (Palette Concrete)
Se lavori con visual 3D, video, shader o interfacce complesse, una base scura fa risaltare la luminosità e i colori dei tuoi progetti senza affaticare la vista. **Non usare mai il nero assoluto (`#000000`)** come sfondo primario, ma grigi antracite/ossidiana profondi.

#### 🎨 Palette 1: "Obsidian Tech" (Consigliata per 3D, Video, Dev & UI)
```css
:root {
  --bg-primary: #0A0A0C;       /* Sfondo principale (Quasi nero, tono freddo) */
  --bg-elevated: #121216;      /* Sfondo Card / Bento Box */
  --bg-glass: rgba(18, 18, 22, 0.65); /* Per Navbar con backdrop-filter: blur(12px) */
  --border-subtle: rgba(255, 255, 255, 0.08); /* Bordi Bento 1px */
  --border-hover: rgba(255, 255, 255, 0.22);  /* Bordo acceso all'hover */
  --text-primary: #F4F4F6;     /* Bianco sporco (Evita il riverbero di #FFFFFF) */
  --text-secondary: #8E8E93;   /* Grigio medio per descrizioni e paragrafi */
  --accent-primary: #E2FF32;   /* Acid Lime (o #FF3366 Cyber Red / #38BDF8 Sky) */
}
```

#### 🎨 Palette 2: "Editorial Warm Paper" (Consigliata per Product/UX, Brand & Art Direction)
```css
:root {
  --bg-primary: #F7F5F0;       /* Carta calda / Alabastro */
  --bg-elevated: #EFECE6;      /* Card secondarie */
  --border-subtle: rgba(20, 20, 19, 0.10);
  --text-primary: #141413;     /* Inchiostro carbone profondo */
  --text-secondary: #575653;   /* Grigio caldo per body copy */
  --accent-primary: #FF3B00;   /* International Orange (Swiss Style) */
}
```

---

## 3. Interazione, Motion e Tecnica (Il Fattore "Avanguardia")

| Elemento | ❌ Approccio Standard (Da Evitare) | ✅ Approccio All'Avanguardia (Alto Livello) | 🛠️ Tool Concreti per Realizzarlo |
| :--- | :--- | :--- | :--- |
| **Presentazione Asset** | Caroselli di immagini statiche o screenshot piatti. | **Video loop brevi (3-6s)** in formato WebM/MP4 ad alto framerate, prototipi incapsulati o canvas interattivi in tempo reale. | **FFmpeg** (compressione video), **Screen Studio** (registrazione UI fluida), **Rive** / **Lottie** (animazioni vettoriali interattive). |
| **Esperienza di Scroll** | Scroll nativo a scatti o *scroll-jacking* invasivo che blocca l'utente. | **Smooth scrolling calibrato** abbinato a transizioni fluide tra pagine senza ricaricamenti bruschi. | **Lenis** (`@studio-freight/lenis`), **GSAP ScrollTrigger**, **View Transitions API**, **Barba.js**. |
| **Micro-interazioni** | Effetti `:hover` base (cambio colore o sottolineatura lineare). | **Fisica basata su molle (Spring physics)**, bottoni magnetici sottili, feedback contestuali del cursore (senza nascondere il cursore di sistema!). | **Framer Motion** (React), **GSAP**, CSS `linear()` easing curves. |
| **3D e Grafica Real-Time** | Template pesanti che bloccano la GPU su mobile e fanno partire le ventole. | **WebGL / Three.js / Shaders GLSL mirati:** usati come accento nell'Hero o per ispezionare modelli/ambienti, con **fallback statico** o ridotto su mobile. | **Three.js**, **React Three Fiber (R3F)** + `@react-three/drei`, **Spline**, **OGL** (leggero). |

---

## 4. Regole Ingegneristiche e di Usabilità (Non Negoziabili)

### 📌 Regola 4.1: Performance come Feature di Design (60+ FPS)
Un sito pieno di animazioni che scatta a 20 FPS o impiega 6 secondi a caricare comunica scarsa cura tecnica.
* **Checklist Tecnica Obbligatoria:**
  1. **Immagini:** Converti tutto in **AVIF** o **WebP** (usa `Squoosh.app` o `sharp`).
  2. **Video (Sostituti delle GIF):** Non usare mai le `.gif` (pesano decine di MB). Usa tag `<video autoplay loop muted playsinline>` con file `.webm` e `.mp4` compressi con FFmpeg:
     ```bash
     # Comando FFmpeg per comprimere un video a 60fps senza audio per il web (peso < 1.5MB)
     ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 0 -crf 30 -pass 1 -an -f null /dev/null && \
     ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 0 -crf 30 -pass 2 -an output.webm
     ```
  3. **Modelli 3D:** Comprimi sempre le mesh `.glb`/`.gltf` con **Draco Compression** o `gltf-transform` (`npx @gltf-transform/cli optimize input.glb output.glb`).
  4. **Animazioni CSS/JS:** Anima solo proprietà *compositor-friendly* (`transform: translate3d()`, `scale()`, `opacity`) per non innescare *layout thrashing* sulla CPU.

### 📌 Regola 4.2: Zero "Mystery Meat Navigation"
La creatività non deve mai ostacolare l'orientamento. L'utente deve capire istantaneamente:
* Dove si trova.
* Dove cliccare (usa stati `:hover` e `:focus-visible` inequivocabili).
* Come tornare alla Home e come contattarti in qualsiasi momento (es. una *Floating Pill Navbar* in basso o in alto sempre accessibile).

### 📌 Regola 4.3: Elimina le Barre di Competenza in Percentuale
* ❌ **VIETATO:** Grafici o progress bar come *"UI Design 90%, C++ 85%, Blender 80%"*. Sono metriche arbitrarie, prive di significato oggettivo e percepite come amatoriali.
* ✅ **ALTERNATIVA D'ECCELLENZA:** Inserisci le competenze come **Tag filtrabili** o **Badge contestuali** direttamente dentro i progetti in cui le hai applicate concretamente, oppure raggruppale in una matrice pulita: `Core Stack`, `Design & Prototyping`, `3D & Motion`.

### 📌 Regola 4.4: Attrito Zero nei Contatti (Zero-Friction Contact)
Non costringere mai un recruiter o un potenziale cliente a compilare un form di 6 campi o ad aprire forzatamente `mailto:` (che spesso apre client email non configurati come Outlook o Apple Mail di default).
* **Implementazione Obbligatoria:**
  1. **Pulsante "Copia Email con un clic"** accompagnato da un micro-toast di conferma (*"Email copiata negli appunti!"*).
  2. Link diretti (con apertura in `target="_blank" rel="noopener"`) a **LinkedIn**, **GitHub / ArtStation / Behance**.
  3. Link diretto al tuo **CV in PDF** aggiornato, leggero e selezionabile (non rasterizzato).

#### 💻 Snippet Concreto: Bottone "Copy Email" Zero-Friction
```javascript
const copyEmail = async () => {
  await navigator.clipboard.writeText("tuonome@dominio.com");
  // Mostra il micro-toast di conferma (es. stato "Copiato! ✓" per 2 secondi)
};
```

---

## 5. Stack Tecnologico Consigliato (2026 Ready)

Scegli il tuo percorso in base al tuo profilo:

### Percorso A: Custom Code (Per Developer, Creative Technologist, UX Engineer)
* **Framework:** **Astro** (velocità estrema, zero JS di default, View Transitions native) oppure **Next.js / Nuxt**.
* **Styling:** **Tailwind CSS** (perfetto per gestire Bento Grid e Design Token) o **Vanilla CSS moderno** (CSS Grid, Subgrid, Container Queries).
* **Motion & 3D:** **GSAP** + **Lenis** + **Three.js / React Three Fiber**.
* **Hosting:** **Vercel** o **Cloudflare Pages** (deploy istantanei da GitHub e CDN globale).

### Percorso B: Visual Development / No-Code Avanzato (Per Product Designer, 3D Artist, Art Director)
* **Piattaforma Primaria:** **Framer** (attualmente lo standard d'oro per designer: supporta fisica a molle, Bento Grid, video performanti, componenti custom in React e shader embeds senza scrivere backend).
* **Alternativa Enterprise:** **Webflow** abbinato a **GSAP** per animazioni custom avanzate.

---

## ✅ Checklist Finale Pre-Lancio
- [ ] Ci sono **solo tra i 3 e i 5 progetti** principali in Home Page?
- [ ] La **Hero Section** spiega chi sono e che problemi risolvo in meno di 3 secondi?
- [ ] Ogni Case Study mostra il **processo (errori, wireframe, architettura)** e non solo gli screenshot finali?
- [ ] Ho rimosso tutte le barre di competenza in percentuale (es. *"Photoshop 85%"*)?
- [ ] Tutte le GIF sono state sostituite da video `.webm`/`.mp4` muti in loop e le immagini sono in `.avif`/`.webp`?
- [ ] Il sito mantiene **60 FPS costanti** durante lo scroll e disattiva il WebGL pesante sui dispositivi mobile?
- [ ] Il pulsante per **copiare l'email in 1 clic** funziona e il **CV in PDF** si apre istantaneamente?