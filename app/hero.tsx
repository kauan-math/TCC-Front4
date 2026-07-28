export default function Hero() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <span className="inline-block bg-yellow-400 text-black text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded mb-5">
              Melhor preço da região
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5">
              Transforme seu{" "}
              <span className="text-yellow-400">corpo e sua vida</span>
            </h1>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
              Mais de 100 unidades, equipamentos de ponta e aulas inclusas.
              Tudo por um preço que cabe no seu bolso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#planos"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors text-center"
              >
                Ver planos
              </a>
              <a
                href="#unidades"
                className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors text-center"
              >
                Conhecer unidades
              </a>
            </div>
          </div>

          {/* Image / visual */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              {/* Replace src with your actual hero image */}
              <img
                src="pessoas.png"
                className="w-full h-full object-cover opacity-80"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-zinc-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-zinc-800">
            {[
              { value: "100+", label: "Unidades" },
              { value: "500k+", label: "Alunos" },
              { value: "24h", label: "Funcionamento" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 text-center">
                <p className="text-3xl font-bold text-yellow-400">{stat.value}</p>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}