import React from 'react';
import { Github, Mail, Linkedin, ExternalLink, Code, Terminal, Cpu, Bot } from 'lucide-react';

const RetroPortfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[length:30px_30px]" />
      
      {/* Glow Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-pink-400/20 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 border-b border-purple-200/30 backdrop-blur-md bg-white/70">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 text-transparent bg-clip-text">
                KIM.DEV
              </div>
              <div className="flex space-x-8">
                {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
                  <button
                    key={item}
                    className="text-sm tracking-wider text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div>
                  <h1 className="text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                      안녕하세요,<br />
                      웹 개발자<br />
                      유예지 입니다.
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 mt-6">
                    사용자 경험과 디자인을 중요시하는 개발자로서,<br />
                    혁신적인 웹 솔루션을 만들어냅니다.
                  </p>
                </div>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com' },
                    { icon: Linkedin, href: 'https://linkedin.com' },
                    { icon: Mail, href: 'mailto:contact@example.com' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 border border-purple-200 rounded-xl bg-white/50
                               hover:bg-purple-50 transition-colors"
                    >
                      <social.icon className="w-6 h-6 text-purple-600" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl" />
                <div className="relative border-2 border-purple-200/50 rounded-full overflow-hidden">
                  <img src="/api/placeholder/500/500" alt="Profile" className="w-full rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-transparent bg-clip-text">
                Technical Skills
              </span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Code,
                  title: 'Frontend',
                  skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
                  color: 'from-cyan-400 to-blue-500'
                },
                {
                  icon: Terminal,
                  title: 'Backend',
                  skills: ['Node.js', 'Express', 'Python', 'PostgreSQL'],
                  color: 'from-purple-400 to-pink-500'
                },
                {
                  icon: Cpu,
                  title: 'DevOps',
                  skills: ['Docker', 'AWS', 'CI/CD', 'Linux'],
                  color: 'from-pink-500 to-purple-600'
                },
                {
                  icon: Bot,
                  title: 'AI/ML',
                  skills: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
                  color: 'from-cyan-400 to-purple-500'
                }
              ].map((category) => (
                <div
                  key={category.title}
                  className="p-6 rounded-xl border border-purple-200/50 bg-white/50
                           hover:bg-purple-50/50 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-gray-600">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-transparent bg-clip-text">
                Featured Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'AI 챗봇 플랫폼',
                  description: 'OpenAI API를 활용한 맞춤형 챗봇 서비스',
                  tech: ['React', 'Node.js', 'OpenAI'],
                  image: '/api/placeholder/600/400'
                },
                {
                  title: '실시간 협업 툴',
                  description: 'WebSocket 기반의 실시간 문서 공유 플랫폼',
                  tech: ['Next.js', 'Socket.io', 'MongoDB'],
                  image: '/api/placeholder/600/400'
                }
              ].map((project) => (
                <div
                  key={project.title}
                  className="group rounded-xl border border-purple-200/50 bg-white/50
                           overflow-hidden hover:bg-purple-50/50 transition-all duration-300"
                >
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full border border-purple-200 
                                   bg-white/50 text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-transparent bg-clip-text">
                  Let's Connect
                </span>
              </h2>
              <p className="text-gray-600 mb-8">
                새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 연락주세요.
              </p>
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600
                               text-white font-bold hover:opacity-90 transition-opacity">
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-purple-200/30">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="text-gray-600">© 2024</div>
              <div className="flex space-x-6">
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RetroPortfolio;