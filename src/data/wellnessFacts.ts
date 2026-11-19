export interface WellnessFact {
  id: number;
  title: string;
  fact: string;
  highlight?: string;
  sourceOrContext: string;
}

export const WELLNESS_FACTS: WellnessFact[] = [
  {
    id: 1,
    title: 'Built-In Vagal Brake',
    fact: 'Your heart speeds up slightly on each inhale and slows down on each exhale (respiratory sinus arrhythmia). Making your exhale longer than your inhale activates your parasympathetic calming reflex.',
    highlight: 'Longer exhales slow heart rate via the vagus nerve.',
    sourceOrContext: 'Autonomic Neuroscience & Polyvagal Theory',
  },
  {
    id: 2,
    title: 'The 4-4-4-4 Focus Pattern',
    fact: 'Box breathing is used by first responders and high-stress teams to steady heart rate variability and keep executive decision-making online under pressure.',
    highlight: 'Equal ratios dissipate acute adrenaline within 2 minutes.',
    sourceOrContext: 'Clinical Physiology & Stress Inoculation Protocols',
  },
  {
    id: 3,
    title: 'Purring Frequency Calm',
    fact: 'Domestic cats typically purr between 25 and 150 Hz—a gentle, rhythmic low-frequency vibration widely experienced as soothing to the human nervous system.',
    highlight: '25–150 Hz vibrations promote muscle and somatic relaxation.',
    sourceOrContext: 'Bioacoustics & Somatic Resonance Studies',
  },
  {
    id: 4,
    title: 'Walking Sparks Creativity',
    fact: 'Stanford University researchers found that walking—whether outdoors or indoors—significantly increases creative divergent thinking compared to sitting still.',
    highlight: 'Walking boosts creative output by up to 60%.',
    sourceOrContext: 'Stanford University Experimental Psychology (Oppezzo & Schwartz)',
  },
  {
    id: 5,
    title: '1–2% Dehydration Affects Mood',
    fact: 'Even mild dehydration can measurably increase perceived fatigue, tension, and difficulty concentrating before you feel noticeably thirsty.',
    highlight: 'Mild fluid deficits trigger subtle cognitive fog.',
    sourceOrContext: 'Journal of Nutrition & Cognitive Neuroscience',
  },
  {
    id: 6,
    title: 'Naming Feelings Calms the Brain',
    fact: 'Neuroscience research on affect labeling shows that simply putting an emotion into words helps reduce amygdala reactivity and engages prefrontal regulation.',
    highlight: 'Affect labeling dampens amygdala distress signals.',
    sourceOrContext: 'UCLA Social Cognitive Neuroscience Laboratory (Lieberman et al.)',
  },
  {
    id: 7,
    title: 'Soft Gaze, Calm Mind',
    fact: 'Narrow tunnel vision is linked to sympathetic alertness; softening your gaze to notice peripheral movement (like slow living-canvas waves) helps signal safety to the nervous system.',
    highlight: 'Panoramic vision reduces sympathetic autonomic arousal.',
    sourceOrContext: 'Neurobiology of Visual Processing & Stress Physiology',
  },
  {
    id: 8,
    title: 'Gentle Gongs Beat Harsh Alarms',
    fact: 'Soft, resonant acoustic cues interrupt autopilot doomscrolling more effectively than jarring lockouts because they shift attention without triggering stress resistance.',
    highlight: 'Harmonic singing bowl tones bypass cortisol spikes.',
    sourceOrContext: 'Psychoacoustics & Attentional Reset Research',
  },
  {
    id: 9,
    title: 'Bilateral Grounding Rhythms',
    fact: 'Alternating left-right auditory or tactile rhythms help anchor attention in the present moment and are a core component of clinical EMDR therapy protocols.',
    highlight: 'Alternating left-right panning keeps cognition grounded.',
    sourceOrContext: 'EMDR International Association & Somatic Psychotherapy',
  },
  {
    id: 10,
    title: 'Micro-Pauses Compound',
    fact: 'Brief 60-to-90-second nervous system resets scattered throughout the day prevent chronic cortisol buildup far better than waiting for the weekend to recover.',
    highlight: 'Frequent micro-pauses sustain cognitive endurance.',
    sourceOrContext: 'Occupational Health & Circadian Ultradian Rhythms',
  },
];
