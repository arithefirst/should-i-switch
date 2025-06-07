const questions = [
  {
    id: 1,
    question: "Gaming Compatibility",
    description: "Do you regularly play the latest AAA games or titles with aggressive anti-cheat systems (like Valorant, Call of Duty, Fortnite)?",
    options: [
      { value: "never", label: "I don't game at all", score: 2 },
      { value: "casual", label: "I play older/indie games occasionally", score: 1 },
      { value: "moderate", label: "I play some modern games but not competitively", score: 0 },
      { value: "heavy", label: "I regularly play latest AAA/competitive games", score: -2 }
    ]
  },
  {
    id: 2,
    question: "Specific Software Reliance",
    description: "Are there one or two critical, niche applications (e.g., specialized engineering software, Adobe Creative Suite, particular accounting software) that you absolutely cannot do your work without, and they are only available on Windows/macOS?",
    options: [
      { value: "none", label: "No critical Windows/macOS-only software", score: 2 },
      { value: "alternatives", label: "I use some but open-source alternatives exist", score: 1 },
      { value: "few", label: "I have 1-2 critical proprietary applications", score: -1 },
      { value: "many", label: "My workflow depends on multiple proprietary apps", score: -2 }
    ]
  },
  {
    id: 3,
    question: "Hardware Compatibility",
    description: "Do you have very new or very old/obscure hardware components (e.g., specific Wi-Fi adapters, printers, graphics cards) that you know can sometimes have limited driver support outside of Windows?",
    options: [
      { value: "standard", label: "Standard, well-supported hardware", score: 2 },
      { value: "mostly", label: "Mostly standard with one or two newer components", score: 1 },
      { value: "some", label: "Some newer or specialized hardware", score: 0 },
      { value: "lots", label: "Lots of new/obscure hardware", score: -2 }
    ]
  },
  {
    id: 4,
    question: "Learning Curve Tolerance",
    description: "Are you prepared for a potential learning curve, especially if you're used to Windows or macOS, and possibly need to learn some new ways of doing things or use the command line for certain tasks?",
    options: [
      { value: "excited", label: "I'm excited to learn new things", score: 2 },
      { value: "willing", label: "I'm willing to learn if needed", score: 1 },
      { value: "minimal", label: "I prefer minimal learning required", score: 0 },
      { value: "avoid", label: "I want to avoid learning new systems", score: -2 }
    ]
  },
  {
    id: 5,
    question: "Technical Troubleshooting Comfort",
    description: "How comfortable are you with searching online forums, reading documentation, and potentially performing some troubleshooting steps yourself when issues arise?",
    options: [
      { value: "expert", label: "Very comfortable, I enjoy troubleshooting", score: 2 },
      { value: "comfortable", label: "Comfortable with basic troubleshooting", score: 1 },
      { value: "limited", label: "Limited comfort, prefer simple solutions", score: 0 },
      { value: "avoid", label: "I avoid technical troubleshooting", score: -2 }
    ]
  },
  {
    id: 6,
    question: "\"Just Works\" Expectation",
    description: "Do you expect everything to \"just work\" out of the box with minimal configuration, or are you okay with a bit of tinkering to get things exactly how you want them?",
    options: [
      { value: "tinker", label: "I enjoy tinkering and customizing", score: 2 },
      { value: "some", label: "Some tinkering is fine", score: 1 },
      { value: "minimal", label: "Prefer minimal configuration needed", score: 0 },
      { value: "justworks", label: "Everything must just work immediately", score: -2 }
    ]
  },
  {
    id: 7,
    question: "Proprietary Peripheral Use",
    description: "Do you rely heavily on proprietary peripherals with complex drivers or companion software that might not have Linux equivalents (e.g., high-end gaming mice with custom macro software, specific external sound cards)?",
    options: [
      { value: "basic", label: "Basic peripherals only", score: 2 },
      { value: "few", label: "A few specialized peripherals", score: 1 },
      { value: "several", label: "Several proprietary peripherals", score: -1 },
      { value: "many", label: "Many complex proprietary devices", score: -2 }
    ]
  },
  {
    id: 8,
    question: "Professional Software Requirements",
    description: "Is your profession heavily reliant on a specific, industry-standard software suite that is exclusively designed for Windows or macOS and has no viable Linux alternative?",
    options: [
      { value: "flexible", label: "My work is platform-flexible", score: 2 },
      { value: "alternatives", label: "Viable alternatives exist", score: 1 },
      { value: "some", label: "Some dependency on proprietary software", score: -1 },
      { value: "critical", label: "Critical dependency on Windows/macOS software", score: -2 }
    ]
  },
  {
    id: 9,
    question: "Time Commitment for Setup",
    description: "Are you willing to invest some time upfront into researching distributions, installing the OS, and potentially setting up your preferred applications and environment?",
    options: [
      { value: "lots", label: "I have plenty of time and interest", score: 2 },
      { value: "some", label: "I can dedicate some time to setup", score: 1 },
      { value: "limited", label: "I have limited time for setup", score: 0 },
      { value: "none", label: "I have no time for complex setup", score: -2 }
    ]
  },
  {
    id: 10,
    question: "Dual-Booting Complexity",
    description: "If you plan to dual-boot, are you aware of the potential complexities and risks involved with partitioning your drive and managing multiple operating systems?",
    options: [
      { value: "linux-only", label: "Planning to go Linux-only", score: 2 },
      { value: "experienced", label: "Experienced with dual-booting", score: 1 },
      { value: "aware", label: "Aware but haven't done it", score: 0 },
      { value: "unaware", label: "Not aware of the complexities", score: -1 }
    ]
  },
  {
    id: 11,
    question: "Software Availability",
    description: "Are you comfortable with potentially needing to find open-source alternatives for some of your current Windows/macOS applications, or using compatibility layers like WINE, which don't always work perfectly?",
    options: [
      { value: "prefer", label: "I prefer open-source alternatives", score: 2 },
      { value: "comfortable", label: "Comfortable finding alternatives", score: 1 },
      { value: "hesitant", label: "Hesitant but willing to try", score: 0 },
      { value: "unwilling", label: "I need my exact current applications", score: -2 }
    ]
  },
  {
    id: 12,
    question: "Support Expectations",
    description: "Do you expect direct, official customer support for your operating system, or are you comfortable relying on community forums and online documentation for help?",
    options: [
      { value: "community", label: "I prefer community support", score: 2 },
      { value: "comfortable", label: "Comfortable with community support", score: 1 },
      { value: "prefer-official", label: "I prefer official support but can adapt", score: 0 },
      { value: "need-official", label: "I need official customer support", score: -2 }
    ]
  }
]

export default questions