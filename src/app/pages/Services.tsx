import { Card } from "../components/ui/card";
import { Shield, Coins, Swords } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Security / Protective Service",
      description: "Elite protection services for high-value clients and assets. Comprehensive security solutions including personal protection, facility security, and convoy escort services throughout the galaxy.",
      features: [
        "Personal bodyguard assignments",
        "Facility and asset protection",
        "Convoy escort through dangerous territories",
        "Threat assessment and risk management",
        "24/7 emergency response teams"
      ],
      color: "from-red-600 to-red-700"
    },
    {
      icon: Coins,
      title: "Loans",
      description: "Financial lending services with flexible terms for businesses and individuals. The Pyke Syndicate offers competitive rates with various repayment options tailored to your specific needs and circumstances.",
      features: [
        "Business expansion capital",
        "Equipment and asset financing",
        "Emergency operational funding",
        "Flexible repayment schedules",
        "Discreet transaction handling"
      ],
      color: "from-yellow-600 to-orange-600"
    },
    {
      icon: Swords,
      title: "Mercenaries",
      description: "Contract-based mercenary forces available for specialized operations. The Syndicate maintains connections with elite mercenary groups and can arrange skilled operatives for various tactical requirements.",
      features: [
        "Combat specialists and tactical teams",
        "Bounty hunting and retrieval operations",
        "Infiltration and extraction missions",
        "Custom operation planning",
        "Vetted and experienced contractors"
      ],
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          External Services
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          The Pyke Syndicate offers premium services to select clients throughout the galaxy.
          All arrangements are handled with complete discretion and professionalism.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="bg-slate-900/50 border-amber-900/30 p-8 hover:shadow-lg hover:shadow-amber-900/20 transition-all"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg shadow-red-900/50`}>
                  <Icon className="w-9 h-9 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
                  Services Include:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-amber-500 mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Contact Information */}
      <Card className="bg-gradient-to-r from-red-950/50 to-orange-950/50 border-red-900/50 p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Interested in Our Services?</h2>
        <p className="text-slate-300 mb-4 max-w-2xl mx-auto">
          For inquiries regarding external services, contact your nearest Syndicate representative
          or send encrypted communications to our operations center on Oba Diah.
        </p>
        <p className="text-slate-400 text-sm italic">
          "Professional. Discreet. Effective." - Pyke Syndicate External Services Division
        </p>
      </Card>
    </div>
  );
}
