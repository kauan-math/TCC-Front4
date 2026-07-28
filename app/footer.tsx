const footerLinks = {
  Empresa: ["Sobre nós", "Franquias", "Trabalhe conosco", "Imprensa"],
  Suporte: [
    "Central de ajuda",
    "Fale conosco",
    "Política de privacidade",
    "Termos de uso",
  ],
  Serviços: ["Planos", "App", "Personal virtual", "Nutricionista"],
};

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="text-yellow-400 font-bold text-xl mb-4">
              TCC
            </p>

            <p className="text-zinc-500 text-sm leading-relaxed">
              A academia que transforma vidas. Venha fazer parte dessa história.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-white text-sm font-semibold mb-4">
                {group}
              </p>

              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-500 hover:text-yellow-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-yellow-400 text-xs transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}