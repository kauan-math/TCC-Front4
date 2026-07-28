import Navbar from "../../components/Navibar";

type Plan = {
  name: string;
  price: number;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Basic",
    price: 69,
    features: [
      "Acesso a 1 unidade",
      "Musculação completa",
      "Aulas coletivas",
    ],
  },
  {
    name: "Premium",
    price: 129,
    features: [
      "Acesso ilimitado",
      "Musculação + Aulas",
      "App exclusivo",
      "Personal virtual",
    ],
    featured: true,
  },
  {
    name: "Black",
    price: 149,
    features: [
      "Tudo do Premium",
      "Consultas com nutricionista",
      "Suporte prioritário",
      "Toalha inclusa",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planos" className="bg-zinc-950 py-20 md:py-28">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Escolha seu <span className="text-yellow-400">plano</span>
          </h2>
          <p className="text-zinc-500 text-sm">
            Sem taxa de matrícula · Cancele quando quiser
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col border transition-all ${
                plan.featured
                  ? "border-yellow-400 bg-zinc-900"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Mais popular
                </span>
              )}

              {/* Plan name */}
              <p className="text-white font-semibold text-lg">
                {plan.name}
              </p>

              {/* Price */}
              <div className="mt-4 mb-6">
                <span className="text-yellow-400 text-4xl font-bold">
                  R$ {plan.price}
                </span>
                <span className="text-zinc-500 text-sm ml-1">/mês</span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li
                    key={`${plan.name}-${index}`}
                    className="flex items-start gap-2.5 text-sm text-zinc-400"
                  >
                    <svg
                      className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#matricula"
                className={`block text-center text-sm font-semibold py-3 rounded-lg transition-colors ${
                  plan.featured
                    ? "bg-yellow-400 hover:bg-yellow-300 text-black"
                    : "border border-zinc-600 hover:border-zinc-400 text-white"
                }`}
              >
                Assinar agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}