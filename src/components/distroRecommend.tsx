interface Distro {
  name: string;
  logo: string;
  href: string;
  description: string;
}

const distros: Distro[] = [
  {
    name: 'Linux Mint',
    logo: '/mint.png',
    href: 'https://linuxmint.com/',
    description: 'Linux Mint is a user-friendly, Ubuntu-based Linux distribution designed for a comfortable and simple desktop experience.'
  },
  {
    name: 'Pop!_OS',
    logo: '/pop.png',
    href: 'https://system76.com/pop/',
    description: 'Pop!_OS is an Ubuntu-based Linux distribution from System76, offering a polished user experience, strong hardware support, and focus on productivity.'
  },
  {
    name: 'Zorin OS',
    logo: '/zorin.png',
    href:'https://zorin.com/',
    description: 'Zorin OS is an Ubuntu-based Linux distribution specifically designed to be extremely familiar and easy for Windows and macOS users to transition to.'
  }
]

export function RecommendDistros() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold text-center mb-2">Recommended Distributions</h1>
      <hr className="w-2/3 mx-auto text-white/20 mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {distros.map(({ name, logo, href, description }) => (
          <a 
            key={name} 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-600 hover:border-blue-400 
                       rounded-lg p-6 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl 
                       hover:shadow-blue-500/10 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4 mx-auto">
              <img 
                className="w-12 h-12 object-contain flex-shrink-0" 
                src={logo} 
                alt={`${name} logo`}
              />
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                {name}
              </h2>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed flex-grow">
              {description}
            </p>
            
            <div className="mt-4 pt-4 border-t border-white/20">
              <span className="text-sm text-blue-400 group-hover:text-blue-300 font-medium">
                Learn more →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}