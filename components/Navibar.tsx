"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Unidades", href: "/unit" },
  { label: "App", href: "/app" },
  { label: "Benefícios", href: "/beneficios" },
];

export default function Navibar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="logo.png" className="font-bold text-xl tracking-tight text-white">
            TCC<span className="text-yellow-400">2</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
           {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-yellow-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
          </div>

          {/* Botão */}
          <div className="hidden md:block">
            <a
              href="#planos"
              className="bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Matricule-se
            </a>
          </div>

          {/* Botão menu mobile */}
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 pt-4 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-yellow-400 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          <a
            href="#planos"
            className="bg-yellow-400 text-black text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Matricule-se
          </a>
        </div>
      )}
    </nav>
  );
}