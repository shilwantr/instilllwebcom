import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

const pages = [
  {
    slug: 'today',
    title: 'Today Dashboard — Mindful Presence & Daily Balance | instilll (inStill)',
    desc: 'Explore the instilll Today Dashboard with daily reflection quotes, 5-state bio-expressive mood picker, guided breathwork, and hydration telemetry.',
    keywords: 'instilll today dashboard, mindful presence, daily reflection, mood tracker, hydration counter, breathwork launcher, mental wellbeing',
    icon: '🌸',
    headline: 'Today Dashboard',
    tagline: 'Mindful Presence & Daily Balance',
    content: `
      <p>The <strong>Today Dashboard</strong> serves as your daily nervous system anchor. Each morning, receive a non-repeating contemplation quote, log your internal emotional weather with our 5-state bio-expressive mood chips, and monitor physical grounding telemetry with hardware pedometer and hydration logs.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Daily Reflection</strong>
          <span>Curated stoic and mindfulness wisdom quotes with instant rotation and favorite bookmarking.</span>
        </div>
        <div class="feature-item">
          <strong>5-State Mood Bar</strong>
          <span>Bio-expressive face chips (Happy, Okay, Low, Anxious, Tired) with micro-bounce haptic feedback.</span>
        </div>
        <div class="feature-item">
          <strong>Guided Breathwork Activity</strong>
          <span>Instant launcher into 5-minute Box Breathing and 4-7-8 relaxing protocols with progress dial.</span>
        </div>
        <div class="feature-item">
          <strong>Hydration Telemetry</strong>
          <span>Calibrated daily 2.5L water tracker with quick single-tap +250ml logging.</span>
        </div>
      </div>
    `,
    ctaHref: '/#today',
    ctaText: 'Open Today Dashboard in instilll'
  },
  {
    slug: 'practice',
    title: 'Mindful Practice Suite: Breathe, Heal & Sleep | instilll (inStill)',
    desc: 'Evidence-based mental wellness routines: Guided Box Breathing, acoustic bilateral sound therapy, and restorative sleep scenes.',
    keywords: 'mindful practice, mental wellness routines, breathe heal sleep, vagus nerve stimulation, sleep ambient scenes, relaxation routines',
    icon: '🧘',
    headline: 'Mindful Practice Suite',
    tagline: 'Evidence-Based Mental Wellness Routines',
    content: `
      <p>The <strong>Practice Suite</strong> integrates three scientifically validated modalities for autonomic regulation: bio-responsive <em>Breathe</em> protocols, neuro-acoustic <em>Heal</em> music with bilateral stimulation, and restorative <em>Sleep</em> nature art installations.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>60 FPS Liquid Orb Breathwork</strong>
          <span>Dynamic visual meniscus synchronizing inhalation, retention, and exhalation cycles.</span>
        </div>
        <div class="feature-item">
          <strong>Neuro-Acoustic Heal Audio</strong>
          <span>Alternating bilateral audio panning designed to soothe acute limbic distress and balance brainwaves.</span>
        </div>
        <div class="feature-item">
          <strong>Sleep Art & Soundscapes</strong>
          <span>Moonlit rain on window, lotus pond bridge, and summer meadow breezes with Tibetan singing bowls.</span>
        </div>
      </div>
    `,
    ctaHref: '/#practice',
    ctaText: 'Explore Mindful Practice'
  },
  {
    slug: 'breathe',
    title: 'Bio-Responsive Breathwork & Box Breathing | instilll (inStill)',
    desc: 'Practice Box Breathing (4-4-4), 4-7-8 deep sleep routines, and resonant coherence with instilll\'s 60 FPS harmonic liquid bubble orb.',
    keywords: 'box breathing, 4-7-8 breathing, resonant breathing, vagus nerve exercises, liquid bubble orb, hrv biofeedback, breathwork app',
    icon: '🫧',
    headline: 'Bio-Responsive Breathwork',
    tagline: 'Harmonic 60 FPS Liquid Bubble Orb',
    content: `
      <p>Breathing is the only autonomic nervous system function under voluntary conscious control. instilll's <strong>Liquid Bubble Orb</strong> expands and contracts with fluid harmonic oscillations, guiding your diaphragm into deep parasympathetic tone.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Box Breathing (4-4-4-4)</strong>
          <span>Used by elite performers and clinicians to rapidly dissipate acute adrenaline and restore focus.</span>
        </div>
        <div class="feature-item">
          <strong>4-7-8 Deep Sleep</strong>
          <span>Prolonged exhalation triggers immediate vagal brake activation to accelerate sleep onset.</span>
        </div>
        <div class="feature-item">
          <strong>Resonant Coherence (5.5s)</strong>
          <span>Balances sympathetic and parasympathetic branches for optimal Heart Rate Variability (HRV).</span>
        </div>
      </div>
    `,
    ctaHref: '/#practice',
    ctaText: 'Start Box Breathing Session'
  },
  {
    slug: 'heal',
    title: 'Bilateral EMDR Acoustic Sound Therapy | instilll (inStill)',
    desc: 'Alternating bilateral acoustic stimulation and somatic soundscapes engineered to soothe acute anxiety, balance brainwaves, and calm the autonomic nervous system.',
    keywords: 'bilateral audio, emdr sound therapy, acoustic stimulation, somatic healing, anxiety relief, binaural beats, brainwave entrainment',
    icon: '🎧',
    headline: 'Bilateral Acoustic Sound Therapy',
    tagline: 'Alternating Stereo Panning for Limbic Calming',
    content: `
      <p>Inspired by somatic psychotherapy and bilateral eye movement desensitization (EMDR), instilll streams <strong>pure acoustic instruments</strong>—harps, flutes, and singing bowls—gently panning between left and right auditory channels to dissipate emotional charge.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Bilateral Tranquility</strong>
          <span>10-minute continuous soothing acoustic movement designed to quiet rumination.</span>
        </div>
        <div class="feature-item">
          <strong>Bilateral Harp & Chimes</strong>
          <span>Gentle plucks tuned to 432 Hz Pythagorean temperament for deep cellular relaxation.</span>
        </div>
        <div class="feature-item">
          <strong>Multi-Channel Nature Mixer</strong>
          <span>Layer rain cascades, wind chimes, and Tibetan bells with real-time stereo depth controls.</span>
        </div>
      </div>
    `,
    ctaHref: '/#practice',
    ctaText: 'Listen to Bilateral Therapy'
  },
  {
    slug: 'sleep',
    title: 'Restorative Sleep Art & Ambient Soundscapes | instilll (inStill)',
    desc: 'Immerse in moonlit rain on glass, lotus pond waters, and summer hillside breezes with gentle Tibetan wind-down chimes.',
    keywords: 'sleep soundscapes, moonlit rain, ambient sleep art, sleep meditation, deep rest, insomnia relief, evening wind down',
    icon: '🌙',
    headline: 'Restorative Sleep Art',
    tagline: 'Ambient Illustrations & Nocturnal Soundscapes',
    content: `
      <p>Transition effortlessly into deep delta-wave sleep. instilll pairs original hand-crafted nocturnal art with acoustic environmental recordings to quiet racing evening thoughts.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Rain on Cold Glass</strong>
          <span>Streaking raindrops with distant rhythmic thunder rolling across dark city rooftops.</span>
        </div>
        <div class="feature-item">
          <strong>Lotus Pond Bridge</strong>
          <span>Moonlit waters reflecting weeping willow boughs with twinkling fireflies and water ripples.</span>
        </div>
        <div class="feature-item">
          <strong>Summer Meadow Breeze</strong>
          <span>Gentle hillside gusts rustling leaves under radiant sunlight and rolling clouds.</span>
        </div>
      </div>
    `,
    ctaHref: '/#practice',
    ctaText: 'Experience Sleep Art'
  },
  {
    slug: 'journal',
    title: 'Mindful Journal & Biometric Telemetry | instilll (inStill)',
    desc: 'Reflective journaling paired with direct hardware pedometer telemetry, hydration tracking, and 3D page-curling flip book diary.',
    keywords: 'mindful journal, biometric telemetry, pedometer tracking, hydration log, 3D flip book diary, private diary, encrypted journal',
    icon: '📖',
    headline: 'Mindful Journal & Telemetry',
    tagline: 'Encrypted Reflections & Hermite Cubic Splines',
    content: `
      <p>The instilll <strong>Journal</strong> bridges introspective thought with biological reality. Write freely with typewriter or pencil sketching tools in our 3D page-curling book, while local sensors calculate continuous Hermite cubic spline trajectories of your emotional states, steps, and water intake.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>3D Interactive Flip Diary</strong>
          <span>Fluid swipe-to-turn 3D book physics with typewriter, pencil sketching, and 6 pastel inks.</span>
        </div>
        <div class="feature-item">
          <strong>Zero-GPS Pedometer Sensor</strong>
          <span>Direct hardware accelerometer step counter calculating distance without battery-draining GPS.</span>
        </div>
        <div class="feature-item">
          <strong>Hermite Cubic Spline Trends</strong>
          <span>Continuous mathematical curve fitting revealing multi-day emotional balance trajectories.</span>
        </div>
      </div>
    `,
    ctaHref: '/#journal',
    ctaText: 'Open Mindful Journal'
  },
  {
    slug: 'telehealth',
    title: 'Clinical Somatic Telehealth & Agora RTC Video | instilll (inStill)',
    desc: 'Encrypted HD video consultations with certified neuro-psychologists and somatic therapists, synchronized with real-time breathing telemetry.',
    keywords: 'telehealth therapy, agora rtc video, somatic therapy, licensed psychologist, online therapy, emdr telehealth, secure clinical video',
    icon: '🩺',
    headline: 'Clinical Telehealth Suite',
    tagline: 'Encrypted Agora RTC Consultations',
    content: `
      <p>Connect securely with licensed mental health practitioners directly inside instilll. Consultations feature sub-100ms latency video via Agora RTC, combined with in-session bilateral acoustic panning and synchronous breathing cues.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Certified Clinical Directory</strong>
          <span>Browse accredited neuro-psychologists and somatic therapists specializing in trauma and autonomic regulation.</span>
        </div>
        <div class="feature-item">
          <strong>Dual-Role Architecture</strong>
          <span>Seamlessly switch between Client support portal and Therapist clinical practice management.</span>
        </div>
        <div class="feature-item">
          <strong>End-to-End Encryption</strong>
          <span>Zero-knowledge WebRTC streams complying with HIPAA and SOC2 clinical privacy standards.</span>
        </div>
      </div>
    `,
    ctaHref: '/#telehealth',
    ctaText: 'View Clinical Directory'
  },
  {
    slug: 'therapy',
    title: 'Licensed Somatic Therapy & Vagal Regulation | instilll (inStill)',
    desc: 'Connect with certified somatic clinicians specializing in trauma healing, autonomic nervous system stabilization, and burnout recovery.',
    keywords: 'somatic therapy, vagal regulation, polyvagal therapy, trauma informed clinician, nervous system healing, clinical psychologist',
    icon: '🌿',
    headline: 'Somatic Therapy Care',
    tagline: 'Autonomic Stabilization & Trauma-Informed Healing',
    content: `
      <p>Somatic psychotherapy treats mental tension through the body's nervous system. instilll partners with top clinicians to bring evidence-based polyvagal exercises, sensory grounding, and bilateral stimulation into regular clinical practice.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Autonomic Re-Patterning</strong>
          <span>Learn to identify dorsal vagal shutdown, sympathetic hyperarousal, and ventral vagal safety.</span>
        </div>
        <div class="feature-item">
          <strong>Synchronized In-Session Biofeedback</strong>
          <span>Clinicians can initiate guided breathwork directly on the patient's screen during video calls.</span>
        </div>
      </div>
    `,
    ctaHref: '/#telehealth',
    ctaText: 'Connect with a Clinician'
  },
  {
    slug: 'companions',
    title: 'Mew Mew & EMO Interactive Mindful Companions | instilll (inStill)',
    desc: 'Meet Mew Mew the hoverboard robot companion and EMO the desktop pet, providing playful calming routines, joyful reactions, and mindful pauses.',
    keywords: 'mew mew companion, emo robot pet, mindful companions, sensory pets, interactive wellness companions, digital pet meditation',
    icon: '🤖',
    headline: 'Mindful Wellness Companions',
    tagline: 'Mew Mew Robot & EMO Desktop Pet',
    content: `
      <p>Play is a primary biological route to nervous system safety. instilll features <strong>Mew Mew</strong> (our state-driven hoverboard robot) and <strong>EMO</strong> (our expressive desktop pet) who react to your touch, device gestures, and breathwork milestones.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Mew Mew on Hoverboard</strong>
          <span>Explore responsive actions: Walk, Jump 🚀, Spin 🌀, Juggle 🔮, and Peekaboo with audio-reactive glowing chest orb.</span>
        </div>
        <div class="feature-item">
          <strong>EMO Expressive Companion</strong>
          <span>Expressive OLED facial animations (happy, wink, sleepy, curious, love) mirroring your emotional state.</span>
        </div>
        <div class="feature-item">
          <strong>Cuddling Cats Mascot</strong>
          <span>Pet the yin-yang feline mascot to trigger soothing purrs and micro-haptic warmth.</span>
        </div>
      </div>
    `,
    ctaHref: '/#companions',
    ctaText: 'Play with Companions'
  },
  {
    slug: 'games',
    title: 'Sensory Focus Games: Tile Shift 2048 & Reflex Core | instilll (inStill)',
    desc: 'Play soothing sensory micro-games: Frosted glass Tile Shift 2048, sub-millisecond Reflex Core Frost, and tactile pop bubble sheets.',
    keywords: 'sensory games, mindful gaming, tile shift 2048, reflex core game, bubble pop sensory, stress relief games, focus micro games',
    icon: '🎮',
    headline: 'Sensory Focus Micro-Games',
    tagline: 'Tactile Play Without Dopamine Depletion',
    content: `
      <p>Traditional mobile games exploit dopamine loops and flashy ads. instilll games are sensory sandboxes designed to restore presence, test motor acuity, and deliver tactile satisfaction without adrenaline spikes.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Tile Shift 2048</strong>
          <span>Frosted glass numbers sliding across refractive surfaces with subtle acoustic ticks.</span>
        </div>
        <div class="feature-item">
          <strong>Reflex Core Frost</strong>
          <span>Hardware timestamp timer measuring reaction acuity down to 1 millisecond.</span>
        </div>
        <div class="feature-item">
          <strong>Tactile Bubble Sheet</strong>
          <span>Endless tactile bubble popping with custom FM-synthesized acoustic pops.</span>
        </div>
      </div>
    `,
    ctaHref: '/#companions',
    ctaText: 'Launch Sensory Games'
  },
  {
    slug: 'desk-clock',
    title: 'MagSafe StandBy Landscape Desk Clock | instilll (inStill)',
    desc: 'Turn your device into a luxury bedside or desk clock with 152sp fluid pastel numerals, 270-degree battery gauge, charging wattage, thermals, and strict DND.',
    keywords: 'standby desk clock, magsafe landscape clock, bedside clock app, oled nightstand clock, pastel clock typography, battery wattage monitor, strict dnd',
    icon: '⏰',
    headline: 'StandBy Landscape Desk Clock',
    tagline: '152sp Pastel Numerals & Precision Telemetry',
    content: `
      <p>Dock your phone in landscape on any MagSafe stand or bedside charger to transform it into a calming timepiece. Featuring fluid overlapping pastel numerals, real-time decimal battery percentage, live charging wattage flow, thermals, and automatic Strict Do-Not-Disturb.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Overlapping Pastel Digits</strong>
          <span>152sp typography rendered in 4 serene palettes: Olive & Lavender, Mist, Matcha, and Moonlit Rose.</span>
        </div>
        <div class="feature-item">
          <strong>270° Telemetry Battery Ring</strong>
          <span>Precision decimal battery percentage (e.g. 61.20%), live charging wattage, and battery thermals in Celsius.</span>
        </div>
        <div class="feature-item">
          <strong>Automated Focus DND Pill</strong>
          <span>Silences app notifications, calls, and haptics to maintain zero-distraction presence while docking.</span>
        </div>
      </div>
    `,
    ctaHref: '/#desk-clock',
    ctaText: 'Customize Desk Clock'
  },
  {
    slug: 'standby',
    title: 'Fullscreen StandBy Mode Clock Simulator | instilll (inStill)',
    desc: 'Interactive OLED desk clock simulation with soft pastel duotone palettes, decimal battery telemetry, and zero-distraction focus.',
    keywords: 'fullscreen clock, standby mode simulator, oled nightstand clock, desk dock clock, aesthetic clock widget, minimal digital clock',
    icon: '🕰️',
    headline: 'Fullscreen StandBy Clock',
    tagline: 'OLED Nightstand & Desk Docking Experience',
    content: `
      <p>Launch instilll's <strong>Fullscreen StandBy Mode</strong> right in your browser. Whether working at your desk or resting on your nightstand, enjoy full-screen distraction-free time display with custom colorway switches and zero blue-light strain.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>True OLED Black Backdrop</strong>
          <span>Conserves battery power and eliminates nocturnal ambient light bleed.</span>
        </div>
        <div class="feature-item">
          <strong>Keyboard Shortcut Support</strong>
          <span>Press Escape or tap anywhere to seamlessly exit or cycle through colorways.</span>
        </div>
      </div>
    `,
    ctaHref: '/#desk-clock',
    ctaText: 'Launch Fullscreen StandBy'
  },
  {
    slug: 'doombreaker',
    title: 'Doom-Scroll Breaker: Digital Wellbeing Intervention | instilll (inStill)',
    desc: 'Android Accessibility Service monitor that interrupts chronic social media feeds with full-screen vagal rest cues and gentle Tibetan gongs.',
    keywords: 'doomscroll breaker, screen time intervention, social media limiter, digital wellbeing app, accessibility service rest, eye rest reminder',
    icon: '⚡',
    headline: 'Doom-Scroll Breaker',
    tagline: 'Proactive Digital Wellbeing & Eye Rest',
    content: `
      <p>Algorithmic feeds are engineered to induce hypnotic scrolling trances. instilll's <strong>Doom-Scroll Breaker</strong> monitors continuous scroll velocity across YouTube, Instagram, X (Twitter), Facebook, and Reddit on-device, softly intervening with a calming full-screen pause when your limit is reached.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>On-Device Accessibility Service</strong>
          <span>Measures scrolling duration and touch cadence locally with zero keylogging or telemetry extraction.</span>
        </div>
        <div class="feature-item">
          <strong>Configurable Thresholds</strong>
          <span>Set continuous scroll limits from 1 to 60 minutes with gentle 5-minute pre-warnings.</span>
        </div>
        <div class="feature-item">
          <strong>Full-Screen Vagal Intervention</strong>
          <span>A soothing breathing prompt accompanied by a deep Tibetan gong, helping you regain cognitive agency.</span>
        </div>
      </div>
    `,
    ctaHref: '/#doombreaker',
    ctaText: 'Configure Doom-Scroll Breaker'
  },
  {
    slug: 'soundboard',
    title: 'Interactive Sensory Soundboard & Acoustics | instilll (inStill)',
    desc: 'Synthesized pure acoustic sound generator: 1568 Hz Tibetan Tingsha bells, 174 Hz singing bowls, frequency-modulated rain cascades, and kalimba arpeggios.',
    keywords: 'sensory soundboard, tibetan bells sound, singing bowl frequency, kalimba meditation, water pour audio, web audio synthesizer, relaxation sounds',
    icon: '🔔',
    headline: 'Sensory Acoustics Soundboard',
    tagline: 'Synthesized Resonances via Web Audio API',
    content: `
      <p>Every sound in instilll is synthesized dynamically or streamed in uncompressed HD. Experience pure acoustic frequencies designed to entrain brainwaves and stimulate the auricular branch of the vagus nerve.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>1568 Hz Tibetan Tingsha Bell</strong>
          <span>High-frequency crystal chime for mindful transitions and inhalation cues.</span>
        </div>
        <div class="feature-item">
          <strong>174 Hz Solfeggio Singing Bowl</strong>
          <span>Deep sub-bass acoustic resonance for grounding somatic tension.</span>
        </div>
        <div class="feature-item">
          <strong>Spring Water Hydro-Acoustics</strong>
          <span>Dynamic frequency-modulated fluid trickle for autonomic parasympathetic activation.</span>
        </div>
        <div class="feature-item">
          <strong>Pentatonic Kalimba Arpeggio</strong>
          <span>Delightful acoustic plucks responding to interactive touch and cursor movement.</span>
        </div>
      </div>
    `,
    ctaHref: '/#soundboard',
    ctaText: 'Play Soundboard Frequencies'
  },
  {
    slug: 'safety',
    title: 'Privacy Vault & 24/7 988 Crisis Lifeline | instilll (inStill)',
    desc: 'Your sanctuary is protected with zero ad tracking, local device encryption, and one-tap 24/7 access to the free, confidential 988 Suicide & Crisis Lifeline.',
    keywords: '988 lifeline, crisis support, mental health emergency, privacy vault, encrypted health data, zero tracking app, confidential crisis call',
    icon: '🛡️',
    headline: 'Privacy, Identity & 24/7 Lifeline',
    tagline: 'Local-First Encryption & Immediate Crisis Support',
    content: `
      <p>Your mental health sanctuary must be safe beyond compromise. instilll stores all personal logs exclusively in an on-device encrypted vault, while providing instant, confidential connection to trained emergency care.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>988 Suicide & Crisis Lifeline</strong>
          <span>Single-tap direct dial to the nationwide 24/7/365 free, confidential crisis hotline via phone or text.</span>
        </div>
        <div class="feature-item">
          <strong>Zero Cloud Telemetry</strong>
          <span>No third-party trackers, no behavioral advertising SDKs, and zero harvesting of personal entries.</span>
        </div>
        <div class="feature-item">
          <strong>On-Device Push Micro-Reminders</strong>
          <span>Hydration chimes, evening wind-down cues, and vagal recharge alarms scheduled purely on-device.</span>
        </div>
      </div>
    `,
    ctaHref: '/#safety',
    ctaText: 'Access Safety & Crisis Resources'
  },
  {
    slug: 'themes',
    title: '11 Living Canvas Ambient Shaders Matrix | instilll (inStill)',
    desc: 'Explore 11 dynamic 60 FPS GLSL canvas shaders: Clean White, Ferris Wheel, Midnight Sage, Cosmic Dusk, Oasis Aurora, Twilight Prairie, and more.',
    keywords: 'living canvas themes, glsl shaders wellness, 60fps canvas animation, ferris wheel theme, clean white theme, cosmic dusk theme, generative background',
    icon: '🎨',
    headline: 'Living Canvas Themes Matrix',
    tagline: '11 Dynamic 60 FPS GLSL Visual Ecosystems',
    content: `
      <p>Colors have an immediate neurochemical effect on arousal and mood. instilll features 11 bespoke GLSL liquid shaders that react to your mouse movement, touch velocity, and time of day.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Clean White (CW) & Ferris Wheel (FW)</strong>
          <span>Crisp daylight porcelain clarity and playful Ferris wheel pastel hues.</span>
        </div>
        <div class="feature-item">
          <strong>Midnight Sage (MS) & Cosmic Dusk (CD)</strong>
          <span>Deep restorative greens and star-dusted nocturnal indigo gradients.</span>
        </div>
        <div class="feature-item">
          <strong>Oasis Aurora (OA) & Zen River (ZR)</strong>
          <span>Bioluminescent northern lights and flowing pebbles under cool mountain water.</span>
        </div>
      </div>
    `,
    ctaHref: '/#themes',
    ctaText: 'Explore All 11 Living Themes'
  },
  {
    slug: 'science',
    title: 'The Neuroscience of Presence & Vagal Biofeedback | instilll (inStill)',
    desc: 'The clinical and mathematical foundation of instilll: Polyvagal autonomic stabilization, respiratory sinus arrhythmia (RSA), and 60 FPS visual entrainment.',
    keywords: 'neuroscience of presence, polyvagal theory, vagus nerve stimulation, respiratory sinus arrhythmia, rsa biofeedback, mental wellness science',
    icon: '🔬',
    headline: 'The Science of Presence',
    tagline: 'Neurobiology, Vagal Tone & Generative Mathematics',
    content: `
      <p>Digital wellness should not be vague mysticism. instilll is built on peer-reviewed principles of <strong>Stephen Porges' Polyvagal Theory</strong>, Respiratory Sinus Arrhythmia (RSA), and neuro-aesthetic visual entrainment.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Vagal Brake Activation</strong>
          <span>Prolonged exhalation ratios during box breathing stimulate the tenth cranial nerve, lowering heart rate and cortisol.</span>
        </div>
        <div class="feature-item">
          <strong>60 FPS Harmonic Visual Entrainment</strong>
          <span>Continuous organic shader curves provide non-abrupt visual stimuli that gently reduce saccadic eye agitation.</span>
        </div>
        <div class="feature-item">
          <strong>Hermite Cubic Spline Telemetry</strong>
          <span>Second-order continuous biometric interpolation ensures trend curves represent genuine physiological stabilization.</span>
        </div>
      </div>
    `,
    ctaHref: '/#today',
    ctaText: 'Experience the Science in Action'
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions — instilll (inStill)',
    desc: 'Common questions about instilll\'s zero-cloud privacy architecture, offline support, MagSafe desk clock, and clinical telehealth integrations.',
    keywords: 'instilll faq, mental health app questions, offline meditation, privacy first wellness app, desk clock magsafe compatibility',
    icon: '❓',
    headline: 'Frequently Asked Questions',
    tagline: 'Everything You Need to Know About instilll',
    content: `
      <div class="faq-list">
        <div class="faq-item">
          <h3>Is my journaling or step data ever sent to cloud servers?</h3>
          <p>No. instilll adheres to a strict local-first architecture. All journaling entries, mood records, step counters, and hydration logs are stored in your device's encrypted storage vault.</p>
        </div>
        <div class="faq-item">
          <h3>Does instilll require an internet connection?</h3>
          <p>The core suite—Breathe orb, MagSafe StandBy clock, Journal, offline soundboard, and DoomScroll Breaker—functions 100% offline. An internet connection is only needed for live Agora RTC telehealth video sessions.</p>
        </div>
        <div class="faq-item">
          <h3>How does the MagSafe StandBy Desk Clock activate?</h3>
          <p>Rotate your phone into landscape while connected to a wireless MagSafe charger or bedside dock. instilll automatically engages StandBy mode, displaying our 152sp pastel numerals and strict DND.</p>
        </div>
        <div class="faq-item">
          <h3>How is Doom-Scroll Breaker configured?</h3>
          <p>On Android, Doom-Scroll Breaker utilizes the native Accessibility Service to measure continuous feed duration in selected apps. It runs on-device with zero keystroke logging.</p>
        </div>
      </div>
    `,
    ctaHref: '/#today',
    ctaText: 'Explore instilll Experience'
  },
  {
    slug: 'about',
    title: 'About instilll — Mindful Engineering & Human Sanctuary | instilll (inStill)',
    desc: 'Learn about the vision behind instilll: Designing digital products that soothe rather than addict, restoring autonomic nervous system serenity.',
    keywords: 'about instilll, mindful technology, digital sanctuary, humane design, calm technology, non addictive apps, mental health founders',
    icon: '✨',
    headline: 'About instilll',
    tagline: 'Mindful Engineering for Human Nervous Systems',
    content: `
      <p>Modern consumer technology was largely designed to colonize human attention through infinite feeds, red notification badges, and cortisol-inducing alerts. <strong>instilll</strong> was founded on the opposite premise: what if software was engineered specifically to return you to yourself?</p>
      <p>We blend luxury aesthetics, mathematical physics shaders, and trauma-informed clinical psychology into an unhurried digital sanctuary.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Humane Technology Principles</strong>
          <span>No unread badges, no streaks designed to induce guilt, no algorithmic engagement traps.</span>
        </div>
        <div class="feature-item">
          <strong>Open Web & Native Fidelity</strong>
          <span>Built with modern web standards, WebGL shaders, Web Audio API, and native Android accessibility bridges.</span>
        </div>
      </div>
    `,
    ctaHref: '/#today',
    ctaText: 'Join the instilll Movement'
  },
  {
    slug: 'contact',
    title: 'Contact & Clinical Inquiries — instilll (inStill)',
    desc: 'Get in touch with the instilll team for clinician directory onboarding, enterprise wellness partnerships, press inquiries, or support.',
    keywords: 'contact instilll, clinician onboarding, mental health partnerships, press inquiries, wellness app support, instilll.com contact',
    icon: '📬',
    headline: 'Contact & Partnerships',
    tagline: 'Clinicians, Collaborators & Inquiries',
    content: `
      <p>We welcome licensed clinicians, neuro-scientists, and healthcare organizations passionate about human-first digital wellness.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Clinician Directory Onboarding</strong>
          <span>Apply to join our vetted Agora RTC telehealth practitioner roster: <code>clinical@instilll.com</code></span>
        </div>
        <div class="feature-item">
          <strong>General Inquiries & Press</strong>
          <span>Media kits, interviews, and institutional questions: <code>hello@instilll.com</code></span>
        </div>
        <div class="feature-item">
          <strong>Immediate Crisis Help</strong>
          <span>If in distress, call or text <strong>988</strong> anytime for free, confidential, 24/7 care.</span>
        </div>
      </div>
    `,
    ctaHref: '/#safety',
    ctaText: 'Access 24/7 Crisis Support'
  },
  {
    slug: 'downloads',
    title: 'Downloads & App Installation — instilll (inStill)',
    desc: 'Install instilll as an Android application, iOS Progressive Web App (PWA), or run directly in any modern desktop or mobile browser.',
    keywords: 'download instilll, instilll app download, install pwa, android apk mental health, offline mindfulness app install',
    icon: '📲',
    headline: 'Downloads & Installation',
    tagline: 'Cross-Platform Mindful Presence',
    content: `
      <p>Enjoy instilll on every screen. Install our Progressive Web App (PWA) with full offline support, or dock on your desk with native landscape StandBy support.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Web App (Browser PWA)</strong>
          <span>Tap 'Share' -> 'Add to Home Screen' in Safari or Chrome to install instant offline launch.</span>
        </div>
        <div class="feature-item">
          <strong>Android Application</strong>
          <span>Native APK integration featuring Accessibility Service Doom-Scroll Breaker and hardware pedometer.</span>
        </div>
        <div class="feature-item">
          <strong>Desktop StandBy Dock</strong>
          <span>Pin to full-screen mode on any monitor or bedside tablet for zero-distraction timekeeping.</span>
        </div>
      </div>
    `,
    ctaHref: '/#today',
    ctaText: 'Launch Web App Now'
  },
  {
    slug: 'lab',
    title: 'instilll Research Lab — Sensory Telemetry & Neural Shaders | instilll (inStill)',
    desc: 'Exploring 60 FPS liquid canvas shaders, polyvagal nerve stabilization, and clinical telehealth algorithms for digital wellness.',
    keywords: 'instilll research lab, sensory telemetry, glsl shaders research, polyvagal nerve experiments, digital wellness lab',
    icon: '🔬',
    headline: 'instilll Research Lab',
    tagline: 'Sensory Shaders & Polyvagal Telemetry Innovations',
    content: `
      <p>The <strong>instilll Research Lab</strong> prototypes next-generation sensory computing interfaces. We investigate how real-time generative computer graphics, bio-acoustic synthesis, and on-device machine learning can promote deep autonomic relaxation.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>WebGL Liquid Simulators</strong>
          <span>Real-time fluid dynamics computing Navier-Stokes approximations directly on mobile GPUs at 60 FPS.</span>
        </div>
        <div class="feature-item">
          <strong>Polyvagal Stabilization</strong>
          <span>Acoustic and visual rhythm experiments aimed at shortening sympathetic recovery latencies.</span>
        </div>
        <div class="feature-item">
          <strong>Non-Invasive Sensor Bridges</strong>
          <span>Evaluating local pedometer, ambient light, and accelerometer data for passive presence detection.</span>
        </div>
      </div>
    `,
    ctaHref: '/#today',
    ctaText: 'Return to instilll Home'
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy — instilll (inStill) | Zero Tracking & Local Encryption',
    desc: 'instilll is engineered with zero invasive tracking, local-first biometric storage, and strict HIPAA compliance for clinical consultations.',
    keywords: 'instilll privacy policy, zero tracking, local encrypted vault, hipaa compliance, private mental health app, no cloud storage',
    icon: '🛡️',
    headline: 'Privacy Policy',
    tagline: 'Your Mindful Sanctuary Belongs Exclusively to You',
    content: `
      <p>At instilll, privacy is not a compliance checkbox—it is the foundational architecture of psychological safety. We believe that your intimate reflections, emotional states, and physiological telemetry must never be commercialized, profiled, or sold.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Zero Ad Networks or Trackers</strong>
          <span>No Google Analytics, Meta Pixel, or third-party behavioral trackers installed anywhere on the platform.</span>
        </div>
        <div class="feature-item">
          <strong>Local-First Encryption</strong>
          <span>Diary reflections and biometric logs reside exclusively in your device's sandboxed hardware storage.</span>
        </div>
        <div class="feature-item">
          <strong>HIPAA Compliant Telehealth</strong>
          <span>Agora RTC video consultations are end-to-end encrypted with zero server recording or eavesdropping.</span>
        </div>
        <div class="feature-item">
          <strong>Right to Deletion</strong>
          <span>Clear your local app cache anytime with one tap to permanently purge all on-device records.</span>
        </div>
      </div>
    `,
    ctaHref: '/#safety',
    ctaText: 'View Privacy & Safety Controls'
  },
  {
    slug: 'privacy-policy',
    title: 'Full Privacy Policy — instilll Systems Inc. | instilll (inStill)',
    desc: 'Comprehensive data privacy disclosures, local encryption standards, Agora RTC telehealth safeguards, and user rights under GDPR and CCPA.',
    keywords: 'privacy policy, data protection, gdpr compliance, ccpa rights, hipaa telehealth, local first encryption, instilll legal',
    icon: '📜',
    headline: 'Data Privacy & Protection Policy',
    tagline: 'Comprehensive Disclosures & Ethical Data Safeguards',
    content: `
      <p>This privacy policy outlines how instilll Systems protects your personal autonomy. We strictly minimize data collection to what is technically necessary to operate on-device features.</p>
      <div class="faq-list">
        <div class="faq-item">
          <h3>1. Data We Do NOT Collect</h3>
          <p>We do not collect names, phone numbers, GPS coordinates, device advertising IDs (GAID/IDFA), or the contents of your journal entries.</p>
        </div>
        <div class="faq-item">
          <h3>2. On-Device Sensor Telemetry</h3>
          <p>The step counter and doom-scroll accessibility monitor execute 100% locally on your device CPU. No sensor logs are transmitted to external servers.</p>
        </div>
        <div class="faq-item">
          <h3>3. Telehealth Consultations</h3>
          <p>Peer-to-peer WebRTC video streams with licensed clinicians are encrypted with DTLS/SRTP. Recordings are prohibited by default unless explicitly documented.</p>
        </div>
      </div>
    `,
    ctaHref: '/#safety',
    ctaText: 'Return to instilll App'
  },
  {
    slug: 'privacy-policy/spycam-pro',
    title: 'Spycam Pro Privacy Policy — instilll (inStill) Sensor Safety',
    desc: 'Privacy disclosures for camera telemetry safety, optical sensor permissions, and local video feed isolation.',
    keywords: 'spycam pro privacy policy, camera permissions, optical sensor safety, local video isolation, instilll sensor privacy',
    icon: '🔒',
    headline: 'Spycam Pro Privacy Policy',
    tagline: 'Optical Sensor Isolation & Camera Telemetry Safety',
    content: `
      <p>This policy details the strict operational limitations placed on optical camera sensors utilized within instilll diagnostic utilities (including historical Spycam Pro tools).</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Zero Remote Streaming</strong>
          <span>Camera feeds are processed strictly in ephemeral RAM on your local device with zero outbound cloud transmission.</span>
        </div>
        <div class="feature-item">
          <strong>Explicit Permission Architecture</strong>
          <span>Camera access is strictly gated behind Android and iOS runtime permissions and can be revoked anytime.</span>
        </div>
      </div>
    `,
    ctaHref: '/#safety',
    ctaText: 'Return to Safety Suite'
  },
  {
    slug: 'terms',
    title: 'Terms of Service — instilll Systems Inc. | instilll (inStill)',
    desc: 'Terms of service, medical disclaimer, telehealth consultation agreements, and intellectual property terms for instilll.',
    keywords: 'terms of service, instilll terms, medical disclaimer, telehealth terms, user agreement, software terms',
    icon: '⚖️',
    headline: 'Terms of Service',
    tagline: 'Mutual Agreements, Medical Disclaimers & Usage Rights',
    content: `
      <p>Welcome to instilll. By accessing our web application, mobile applications, or telehealth portals, you agree to these transparent terms.</p>
      <div class="features-grid">
        <div class="feature-item">
          <strong>Wellness, Not Medical Advice</strong>
          <span>instilll breathwork, soundscapes, and games are digital wellness tools intended to promote relaxation, not diagnostic medical treatments.</span>
        </div>
        <div class="feature-item">
          <strong>Emergency Care Protocol</strong>
          <span>If you are experiencing acute medical or psychiatric distress, immediately call <strong>911</strong> or the <strong>988 Suicide & Crisis Lifeline</strong>.</span>
        </div>
        <div class="feature-item">
          <strong>Intellectual Property</strong>
          <span>All 60 FPS shaders, original acoustic compositions, mascot illustrations, and software architectures are copyrighted property of instilll Systems.</span>
        </div>
      </div>
    `,
    ctaHref: '/#today',
    ctaText: 'Accept & Launch instilll'
  }
];

function generateHtml(page) {
  const canonicalUrl = `https://instilll.com/${page.slug}`;
  const brandKeywords = "instilll, inStill, inSTILLL, instill, inSTILL, inStilll, instilll.com, instill.com, instill app, instilll app, inStill app, inStill wellness, instill wellness, instilll wellness, mindful presence, daily balance, mental wellness, mental wellbeing, digital wellbeing, digital wellness, emotional wellness, somatic relaxation, nervous system regulation, autonomic nervous system, vagus nerve stimulation, polyvagal theory, stress relief, anxiety relief, box breathing, 4-7-8 breathing, bilateral sound therapy, emdr acoustic stimulation, binaural beats, restorative sleep, sleep soundscapes, sensory grounding, doom scroll breaker, screen time balance, local first privacy, zero cloud storage";
  const allKeywords = `${page.keywords}, ${brandKeywords}`;
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    
    <!-- Primary SEO Meta Tags -->
    <title>${page.title}</title>
    <meta name="title" content="${page.title}" />
    <meta name="description" content="${page.desc}" />
    <meta name="keywords" content="${allKeywords}" />
    <meta name="news_keywords" content="${allKeywords}" />
    <meta name="author" content="instilll Systems" />
    <meta name="publisher" content="instilll (inStill)" />
    <meta name="category" content="Health &amp; Fitness, Mental Wellness, Digital Wellbeing" />
    <meta name="subject" content="${page.headline} — instilll (inStill) Mindful Presence &amp; Daily Balance" />
    <meta name="topic" content="Mental Wellness, Digital Wellbeing, Somatic Care, Mindfulness, ${page.headline}" />
    <meta name="abstract" content="${page.desc}" />
    <meta name="summary" content="${page.desc}" />

    <!-- Crawlers & Indexing -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="en" href="${canonicalUrl}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:site_name" content="instilll (inStill)" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.desc}" />
    <meta property="og:image" content="https://instilll.com/assets/logo.png" />
    <meta property="og:image:width" content="1024" />
    <meta property="og:image:height" content="1024" />
    <meta property="og:image:alt" content="instilll (inStill) Mindfulness Feline Mascot" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@instilllapp" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.desc}" />
    <meta name="twitter:image" content="https://instilll.com/assets/logo.png" />

    <!-- Theming & Favicon -->
    <meta name="theme-color" content="#FAFAF7" />
    <link rel="icon" type="image/png" href="../assets/logo.png" />
    <link rel="apple-touch-icon" href="../assets/logo.png" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />

    <!-- Schema.org JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "${canonicalUrl}#webpage",
      "url": "${canonicalUrl}",
      "name": "${page.title}",
      "description": "${page.desc}",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://instilll.com/#website",
        "url": "https://instilll.com/",
        "name": "instilll",
        "alternateName": [
          "inStill",
          "instill",
          "inSTILLL",
          "instilll",
          "inSTILL",
          "inStilll",
          "inStill Wellness",
          "instilll app",
          "instill app",
          "inStill.com",
          "instilll.com"
        ]
      },
      "keywords": "${allKeywords}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://instilll.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "${page.headline}",
            "item": "${canonicalUrl}"
          }
        ]
      }
    }
    </script>

    <style>
      :root {
        --bg-cream: #FAFBF8;
        --text-slate: #0F172A;
        --pop-lime: #D2F56C;
        --pop-forest: #0A4839;
        --pop-yellow: #FED668;
        --pop-lavender: #CBB4F5;
        --border-slate: rgba(15, 23, 42, 0.12);
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background-color: var(--bg-cream);
        color: var(--text-slate);
        line-height: 1.6;
        padding: 32px 16px 64px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .page-card {
        max-width: 760px;
        width: 100%;
        background: #FFFFFF;
        border-radius: 36px;
        border: 2px solid var(--border-slate);
        padding: 40px 32px;
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
        margin-top: 24px;
      }
      .brand-header {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        color: inherit;
        margin-bottom: 24px;
      }
      .brand-logo {
        width: 44px;
        height: 44px;
        border-radius: 9999px;
        border: 2px solid var(--pop-forest);
        overflow: hidden;
      }
      .brand-logo img { width: 100%; height: 100%; object-fit: cover; }
      /* Distinct 3-L wordmark typography */
      .brand-name { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; display: inline-flex; align-items: baseline; color: var(--text-slate); }
      .brand-name .l1 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 900; color: var(--text-slate); }
      .brand-name .l2 { font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-weight: 700; color: var(--pop-forest); padding: 0 1px; transform: skewX(-6deg); display: inline-block; }
      .brand-name .l3 { font-family: 'JetBrains Mono', monospace; font-weight: 900; color: #f59e0b; padding-left: 1px; display: inline-block; }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 9999px;
        background: var(--pop-lime);
        color: var(--pop-forest);
        font-size: 11px;
        font-weight: 700;
        font-family: 'JetBrains Mono', monospace;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 16px;
      }
      h1 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; line-height: 1.15; margin-bottom: 10px; }
      .tagline { color: #64748B; font-size: 16px; font-weight: 600; margin-bottom: 24px; }
      .content-body p { font-size: 15px; color: #334155; margin-bottom: 20px; leading: 1.7; }
      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin: 28px 0;
      }
      .feature-item {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 20px;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .feature-item strong { font-size: 14px; color: var(--text-slate); }
      .feature-item span { font-size: 12px; color: #64748B; line-height: 1.5; }
      .faq-list { display: flex; flex-direction: column; gap: 16px; margin: 24px 0; }
      .faq-item {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 20px;
        padding: 20px;
      }
      .faq-item h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: var(--text-slate); }
      .faq-item p { font-size: 13px; color: #475569; line-height: 1.6; }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        margin-top: 32px;
        padding-top: 24px;
        border-top: 1px solid #F1F5F9;
      }
      .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 28px;
        border-radius: 9999px;
        background: #0F172A;
        color: #FFFFFF;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s ease;
        box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
      }
      .btn-primary:hover { background: #1E293B; transform: translateY(-1px); }
      .btn-secondary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 24px;
        border-radius: 9999px;
        background: #F1F5F9;
        color: #334155;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      .btn-secondary:hover { background: #E2E8F0; }
      footer.card-footer {
        margin-top: 24px;
        font-size: 11px;
        font-family: 'JetBrains Mono', monospace;
        color: #94A3B8;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="page-card">
      <a href="../" class="brand-header">
        <div class="brand-logo">
          <img src="../assets/logo.png" alt="instilll Logo" />
        </div>
        <div class="brand-name">inSTI<span class="l1">L</span><span class="l2">L</span><span class="l3">L</span></div>
      </a>

      <div class="badge">${page.icon} ${page.slug}</div>
      <h1>${page.headline}</h1>
      <div class="tagline">${page.tagline}</div>

      <div class="content-body">
        ${page.content}
      </div>

      <div class="actions">
        <a href="${page.ctaHref}" class="btn-primary">
          <span>${page.ctaText}</span>
          <span>&rarr;</span>
        </a>
        <a href="../" class="btn-secondary">Return to Home</a>
      </div>
    </div>

    <footer class="card-footer">
      &copy; 2026 instilll. Mindful Presence &amp; Daily Balance. Zero Cloud Telemetry.
    </footer>
  </body>
</html>`;
}

for (const page of pages) {
  const targetDir = path.join(publicDir, page.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const filePath = path.join(targetDir, 'index.html');
  fs.writeFileSync(filePath, generateHtml(page), 'utf-8');
  console.log(`Generated: ${page.slug}/index.html`);
}

console.log('Successfully generated all static SEO landing paths!');
