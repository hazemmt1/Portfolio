import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { personal, social } = portfolioData;

  return (
    <div className="relative w-full">
      {/* Cover Image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${personal.coverImage}')`,
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white dark:bg-gray-900 relative px-4 md:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Card */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-20 relative z-10 mb-8">
            {/* Profile Image */}
            <div className="shrink-0">
              <img
                src={personal.image}
                alt={personal.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {personal.name}
              </h1>
              <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {personal.title}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {personal.subtitle}
              </p>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {personal.location}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full md:w-auto">
              <a
                href={`mailto:${personal.email}`}
                className="flex-1 md:flex-none px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
              >
                Contact
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">241</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Connections</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Skills</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
