const questions = [
  {
    id: 1,
    question: "Modern Gaming Requirements",
    description: "How often do you play AAA titles that use kernel level anti-cheat systems (e.g. Valorant, Fortnite)?",
    options: [
      { value: "never",      label: "I don't game",                        score: 2 },
      { value: "casual",     label: "Occasional older/indie gaming",      score: 1 },
      { value: "regular",    label: "Regular modern gaming (non-competitive)", score: 0 },
      { value: "competitive",label: "Competitive AAA gaming",            score: -2 }
    ]
  },
  {
    id: 2,
    question: "Proprietary Software Dependence",
    description: "Do you rely on critical Windows/macOS-only apps with no Linux equivalent?",
    options: [
      { value: "none",        label: "No critical proprietary apps",       score: 2 },
      { value: "alternatives",label: "Use apps with viable open-source alternatives", score: 1 },
      { value: "few",         label: "1–2 critical proprietary apps",       score: -1 },
      { value: "many",        label: "Multiple proprietary apps",           score: -2 }
    ]
  },
  {
    id: 3,
    question: "Hardware Support",
    description: "Do you use very new, very old or obscure hardware that may lack Linux drivers?",
    options: [
      { value: "standard", label: "All standard, well-supported hardware", score: 2 },
      { value: "minor",    label: "One or two newer/odd components",      score: 1 },
      { value: "some",     label: "Some specialized/new hardware",        score: 0 },
      { value: "many",     label: "Lots of exotic hardware",              score: -2 }
    ]
  },
  {
    id: 4,
    question: "Willingness to Learn",
    description: "Are you open to learning new workflows or using the command line?",
    options: [
      { value: "excited",  label: "Excited to learn",      score: 2 },
      { value: "willing",  label: "Willing if needed",      score: 1 },
      { value: "minimal",  label: "Prefer minimal learning",score: 0 },
      { value: "avoid",    label: "Prefer to avoid learning",score: -2 }
    ]
  },
  {
    id: 5,
    question: "Technical Confidence",
    description: "How comfortable are you troubleshooting issues with online docs or forums?",
    options: [
      { value: "expert",      label: "Very comfortable",             score: 2 },
      { value: "comfortable", label: "Comfortable with basics",      score: 1 },
      { value: "hesitant",    label: "Somewhat hesitant",            score: 0 },
      { value: "avoid",       label: "Prefer no troubleshooting",     score: -2 }
    ]
  },
  {
    id: 6,
    question: "Configuration Expectation",
    description: "Do you expect things to work out-of-the-box or enjoy tweaking?",
    options: [
      { value: "tinker",   label: "Enjoy customizing",      score: 2 },
      { value: "some",     label: "Some tweaking is fine",  score: 1 },
      { value: "minimal",  label: "Prefer a more Out-Of-The-Box setup",   score: 0 },
      { value: "justworks",label: "Must just work",         score: -2 }
    ]
  },
  {
    id: 7,
    question: "Peripheral Compatibility",
    description: "Do you rely on proprietary peripherals (e.g. gaming mice or audio gear) with complex drivers?",
    options: [
      { value: "basic",   label: "Only basic devices",         score: 2 },
      { value: "few",     label: "A few specialized devices",   score: 1 },
      { value: "several", label: "Several proprietary devices", score: -1 },
      { value: "many",    label: "Many complex devices",        score: -2 }
    ]
  },
  {
    id: 8,
    question: "Professional Software Flexibility",
    description: "Does your job require industry-standard Windows/macOS software with no Linux alternative?",
    options: [
      { value: "flexible",    label: "Platform-flexible",           score: 2 },
      { value: "alternatives",label: "Viable alternatives exist",   score: 1 },
      { value: "some",        label: "Some dependency",             score: -1 },
      { value: "critical",    label: "Critical dependency",         score: -2 }
    ]
  },
  {
    id: 9,
    question: "Time for Setup",
    description: "Can you invest time upfront to research distros, install and configure your environment?",
    options: [
      { value: "lots",    label: "Plenty of time",        score: 2 },
      { value: "some",    label: "Some time available",    score: 1 },
      { value: "limited", label: "Limited time",          score: 0 },
      { value: "none",    label: "No time for setup",      score: -2 }
    ]
  },
  {
    id: 10,
    question: "Dual-Boot Experience",
    description: "Are you comfortable partitioning your drive and managing multiple OS installs?",
    options: [
      { value: "linux_only", label: "Going Linux-only",     score: 2 },
      { value: "experienced",label: "Experienced with dual-boot", score: 1 },
      { value: "aware",      label: "Aware but never tried",    score: 0 },
      { value: "unaware",    label: "Not aware of complexities", score: -1 }
    ]
  },
  {
    id: 11,
    question: "Alternative Software Use",
    description: "Are you okay using open-source replacements or compatibility layers (e.g. WINE)?",
    options: [
      { value: "prefer",     label: "Prefer open-source",     score: 2 },
      { value: "comfortable",label: "Comfortable exploring",  score: 1 },
      { value: "hesitant",   label: "Hesitant but willing",    score: 0 },
      { value: "unwilling",  label: "Need exact same apps",   score: -2 }
    ]
  },
  {
    id: 12,
    question: "Support Expectations",
    description: "Do you need official vendor support or are you OK with community-based help?",
    options: [
      { value: "community",    label: "Prefer community support",score: 2 },
      { value: "comfortable",  label: "Comfortable with both",  score: 1 },
      { value: "official_ok",  label: "Prefer official but flexible", score: 0 },
      { value: "need_official",label: "Need official support",   score: -2 }
    ]
  }
]

export default questions