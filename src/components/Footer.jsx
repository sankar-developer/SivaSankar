import { FaLinkedin, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/siva-ka/", icon: <FaLinkedin /> },
  { href: "https://x.com/Shivkraa", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©2024.
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p
          className="text-center text-sm font-light md:text-right"
        >
          Zentry
        </p>
      </div>
    </footer>
  );
};

export default Footer;