// Compact Marc Lou-inspired project directory.
// Add each real website URL to liveUrl when it is deployed.
// Leave liveUrl empty until the correct public URL is available.

const projects = [
  {
    id: 1,
    name: 'MoodFlix',
    description: 'Discover movies based on your mood, language, and year.',
    category: 'Web App',
    icon: '🎬',
    iconBackground: '#252238',
    technologies: ['React', 'JavaScript', 'CSS', 'TMDB API'],
    liveUrl: 'https://moodflix.in',
    githubUrl: '',
  },
  {
    id: 2,
    name: 'AI Project Navigator',
    description: 'A browser extension to organize projects and AI-assisted development work.',
    category: 'Browser Extension',
    icon: '🧩',
    iconBackground: '#e8f0fe',
    technologies: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 3,
    name: 'ER Studio',
    description: 'Turn video and audio content into structured, searchable knowledge.',
    category: 'AI Productivity Tool',
    icon: '📚',
    iconBackground: '#e7eef8',
    technologies: ['.NET', 'Python', 'AI Transcription', 'Excel'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 4,
    name: 'Research Lab',
    description: 'Explore niches, discover audience problems, and evaluate product opportunities.',
    category: 'Research Platform',
    icon: '🔬',
    iconBackground: '#e6f4ec',
    technologies: [],
    liveUrl: '',
    githubUrl: '',
  },
]

export default projects
