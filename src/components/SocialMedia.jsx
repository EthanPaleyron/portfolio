export default function SocialMedia() {
  const socialMedia = [
    {
      title: "Github",
      link: "https://github.com/EthanPaleyron",
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/ethan-paleyron-4456092b2/",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/ethanp._05/",
    },
  ];
  return (
    <ul className="social-media">
      {socialMedia.map((social, index) => (
        <li key={index}>
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {social.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
