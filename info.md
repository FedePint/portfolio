# Specifiche di Contesto per Portfolio Personale — Federico Pintabona

> **Istruzioni per l'AI / Site Generator (Antigravity):** 
> Utilizza le informazioni contenute in questo documento per progettare, strutturare e popolare il sito web portfolio (GitHub Pages) di Federico Pintabona. Il tono deve essere professionale, tecnico e moderno, mettendo in risalto l'unione unica tra competenze di **High-Performance Computing / Architetture Low-Level** e **Computer Graphics / 3D Visual Computing**.

---

## 1. Profilo & Bio (About Me)

* **Nome:** Federico Pintabona
* **Ruolo / Posizionamento:** Computer Engineering Student | High-Performance Computing, Computer Graphics & Software Engineering
* **Località:** Torino, Italia
* **Profilo Sintetico (Hero Section):** 
  Ingegnere informatico con un background trasversale che unisce il calcolo ad alte prestazioni (C++, CUDA, architetture low-level) e il mondo della computer grafica 3D (OpenGL, GLSL, Unreal Engine 5, Blender). Appassionato di ottimizzazione dell'hardware, programmazione parallela su GPU e sviluppo di pipeline di rendering in tempo reale.
* **Bio Estesa (Sezione About):**
  Dopo aver conseguito la Laurea Triennale in Ingegneria del Cinema e dei Mezzi di Comunicazione al Politecnico di Torino, ho proseguito il mio percorso con la Laurea Magistrale in Ingegneria Informatica presso lo stesso ateneo. Questa doppia anima accademica mi permette di padroneggiare sia gli aspetti visivi e matematici della grafica 3D e dei motori di rendering, sia l'ingegneria del software, le architetture dei calcolatori e la programmazione parallela a basso livello su CPU e GPU.

---

## 2. Percorso Accademico (Education)

* **Laurea Magistrale in Ingegneria Informatica (Computer Engineering)**
  * **Istituto:** Politecnico di Torino
  * **Focus:** High-Performance Computing (HPC), programmazione parallela su GPU (CUDA) e CPU (OpenMP), architetture dei calcolatori (ARM, RISC-V), ingegneria del software e testing automatizzato.
* **Laurea Triennale in Ingegneria del Cinema e dei Mezzi di Comunicazione**
  * **Istituto:** Politecnico di Torino
  * **Focus:** Computer Graphics, pipeline di rendering, modellazione e animazione 3D, tecnologie dei media digitali e produzione virtuale.

---

## 3. Competenze Tecniche (Tech Stack)

### Linguaggi di Programmazione
* **Core & Systems:** C++, C, CUDA, Assembly (RISC-V, ARM)
* **Shading & Graphics:** GLSL, OpenGL
* **Scripting & Web/Testing:** Python

### High-Performance Computing & Architetture Low-Level
* **GPU Computing:** Programmazione parallela in CUDA, ottimizzazione del *memory coalescing*, gestione della gerarchia di cache e memoria condivisa.
* **CPU Parallelism & Profiling:** Multi-threading con OpenMP, profiling e analisi dei colli di bottiglia tramite **NVIDIA Nsight**.
* **Computer Architecture:** Ottimizzazione della pipeline, risoluzione di *pipeline hazards*, *Instruction-Level Parallelism* (ILP) e scheduling su architetture RISC-V e ARM.

### Computer Graphics, 3D & Game Engines
* **Graphics Programming:** Sviluppo di motori grafici in C++ con OpenGL e GLFW; programmazione di shader GLSL; modelli di illuminazione e shading (Gouraud, Phong); algoritmi di *ray casting*, *ray tracing*, *photon mapping*, *texture mapping* e *depth testing*.
* **Unreal Engine 5:** Creazione di ambienti 3D complessi, *Landscape sculpting*, sistemi di simulazione fluidi (*Water plugin*), gestione procedurale della vegetazione (*Foliage*), integrazione di personaggi fotorealistici (*MetaHumans*) e regia cinematografica tramite *Sequencer*.
* **Blender:** Modellazione 3D poligonale e basata su curve NURBS, *Proportional Editing*, modificatori booleani, texturing, lighting design e illuminazione volumetrica (*Volume lighting*).

### Software Engineering, Testing & Tools
* **Testing & QA:** Progettazione di unit test *white-box* con `pytest` e test di accettazione end-to-end su browser/UI con `Selenium`.
* **Version Control & DevOps:** Git, GitHub, GitLab, configurazione e gestione di autenticazione SSH.

---

## 4. Progetti Principali (Featured Projects)

### 1. High-Performance GNN Inference Engine (`Q1-PROJECT`)
* **Categoria:** High-Performance Computing / GPU Programming / AI Infrastructure
* **Tech Stack:** C++, CUDA, OpenMP, NVIDIA Nsight
* **Descrizione:** 
  Progettazione e implementazione da zero di un motore di inferenza ad alte prestazioni per **Graph Neural Networks (GNN)** capace di elaborare grafi su larga scala (fino a **1,5 milioni di nodi** con **128 feature** per nodo).
* **Dettagli Tecnici Chiave:**
  * Sviluppo e confronto di implementazioni parallele su CPU (tramite OpenMP) e accelerazione hardware su GPU (tramite kernel CUDA custom).
  * Implementazione di uno schema di parallelizzazione **thread-per-feature** su GPU per massimizzare il throughput computazionale.
  * Ottimizzazione avanzata degli accessi in memoria (*memory coalescing*) e dell'utilizzo della cache, validata tramite sessioni di profiling approfondite con **NVIDIA Nsight**.

### 2. Custom 3D OpenGL Rendering Engine
* **Categoria:** Computer Graphics / Graphics Programming
* **Tech Stack:** C++, OpenGL, GLSL, GLFW
* **Descrizione:** 
  Applicazione grafica 3D interattiva sviluppata da zero per il rendering in tempo reale di un ambiente interno (*3D room rendering*).
* **Dettagli Tecnici Chiave:**
  * Scrittura di vertex e fragment shader personalizzati in **GLSL** per la gestione della proiezione prospettica 3D, delle camere e dei materiali.
  * Implementazione di calcoli di illuminazione dinamica, gestione delle texture e *depth testing*.
  * Integrazione di un sistema di rendering del testo 2D su schermo e di elementi **HUD** sovrapposti alla scena 3D.

### 3. Participium — Web Application Development & Automated QA
* **Categoria:** Software Engineering / Quality Assurance
* **Tech Stack:** Python, pytest, Selenium, Git
* **Descrizione:** 
  Contributo allo sviluppo e al processo di verifica e validazione per il progetto software *Participium*, con focus sull'affidabilità del codice e sull'automazione dei test.
* **Dettagli Tecnici Chiave:**
  * Progettazione e stesura di suite di unit test **white-box** tramite il framework `pytest` per garantire la copertura logica dei moduli backend.
  * Sviluppo di test di accettazione automatizzati lato interfaccia utente (UI) tramite **Selenium**, simulando le interazioni reali dell'utente sul browser per prevenire regressioni.

### 4. 3D Environments, Modeling & Virtual Cinematics
* **Categoria:** 3D Art / Technical Art / Real-Time Rendering
* **Tech Stack:** Unreal Engine 5, Blender
* **Descrizione:** 
  Progetti di modellazione 3D, costruzione di scenari fotorealistici e realizzazione di sequenze cinematografiche in tempo reale.
* **Dettagli Tecnici Chiave:**
  * **In Unreal Engine 5:** Creazione di paesaggi naturali su larga scala con *Landscape sculpting*, integrazione di specchi d'acqua e fiumi tramite il *Water system*, distribuzione di vegetazione con i *Foliage tools*, animazione di *MetaHumans* e montaggio delle inquadrature con *Sequencer*.
  * **In Blender:** Modellazione di asset 3D tramite mesh editing avanzato, curve NURBS e operazioni booleane, accompagnata dallo studio di *volume lighting* e composizione fotografica della scena.

### 5. Low-Level Assembly & Pipeline Optimization
* **Categoria:** Computer Architecture / Embedded & Low-Level
* **Tech Stack:** RISC-V Assembly, ARM Assembly
* **Descrizione:** 
  Studio, analisi e ottimizzazione di routine a basso livello per processori basati su architetture RISC-V e ARM.
* **Dettagli Tecnici Chiave:**
  * Analisi del flusso di esecuzione nella pipeline del processore per identificare e mitigare *data hazards*, *control hazards* e *structural hazards*.
  * Riorganizzazione e scheduling delle istruzioni Assembly per massimizzare l'*Instruction-Level Parallelism* (ILP) e ridurre i cicli di stallo (CPI).

---

## 5. Interessi Personali (Opzionale — per dare personalità al footer o alla pagina About)

* **Videogiochi & Game Design:** Appassionato dell'analisi delle meccaniche di gioco, del world-building e della direzione tecnica in titoli d'autore e RPG (es. *Death Stranding*, *Kingdom Hearts*, *Undertale / Deltarune*).
* **Cucina:** Sperimentazione di tecniche di cottura (come cotture a bassa temperatura, marinature e preparazioni tradizionali rivisitate).
* **Viaggi & Esplorazione:** Interesse per itinerari culturali, parchi naturali ed enogastronomia locale.

---

