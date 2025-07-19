// src/components/Footer.jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: 'Home', links: ['About Us', 'Get Involved', 'Our Events', 'Join Us'] },
    { title: 'Contact Us', links: [ 'Team', 'Careers', 'Contact', 'Send us an Email',] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
              <span className="ml-3 text-xl font-bold">Harvest House</span>
            </div>
            <p className="text-gray-400 mb-6">
              Coming Together In One Accord For The Audience Of One
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a 
                  key={social}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Harvest House. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a  href="/privacy-policy"
            className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service"
            className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookie-policy"
            className="text-gray-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;