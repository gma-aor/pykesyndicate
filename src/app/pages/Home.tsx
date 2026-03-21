import { Shield, TrendingUp, Users, Zap } from "lucide-react";
import { Card } from "../components/ui/card";

export function Home() {
  const features = [
    {
      icon: Shield,
      title: "Strategic Operations",
      description: "Controlling major spice trade routes across the galaxy with precision and authority."
    },
    {
      icon: TrendingUp,
      title: "Economic Dominance",
      description: "Unmatched financial power through spice mining operations on Kessel and beyond."
    },
    {
      icon: Users,
      title: "Organized Structure",
      description: "A sophisticated hierarchy ensuring loyalty, efficiency, and unwavering discipline."
    },
    {
      icon: Zap,
      title: "Swift Enforcement",
      description: "Maintaining order through calculated precision and strategic partnerships."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-black-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-900/50">
            <div className="w-16 h-16 bg-[url(src/app/assets/logo.png)] bg-cover bg-center"></div>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          The Pyke Syndicate
        </h1>
        <p className="text-xl text-purple-400 mb-6 tracking-wide">
          Galaxy's Premier Spice Trade Organization
        </p>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
          For generations, the Pyke Syndicate has maintained control over the lucrative spice trade,
          operating from our stronghold on Oba Diah and extending our influence across the Outer Rim territories.
          Through strategic alliances, calculated operations, and an unwavering commitment to profit,
          we stand as the undisputed authority in galactic commerce.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="bg-slate-900/50 border-purple-900/30 p-6 hover:bg-slate-900/70 transition-all hover:shadow-lg hover:shadow-amber-900/20"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </Card>
          );
        })}
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-slate-900/50 border-purple-900/30 p-8">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Our Legacy</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              The Pyke Syndicate emerged from the harsh world of Oba Diah, where our ancestors
              developed the sophisticated infrastructure necessary to dominate the spice trade.
              Our distinctive headgear and unwavering business acumen have become synonymous
              with power and influence across the galaxy.
            </p>
            <p>
              Through partnerships with various criminal organizations and strategic investments
              in spice mining operations on Kessel, we have built an empire that spans
              multiple star systems. Our reach extends from the Kessel Run to the deepest
              corners of the Outer Rim.
            </p>
          </div>
        </Card>

        <Card className="bg-slate-900/50 border-purple-900/30 p-8">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Our Operations</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              The Syndicate's operations encompass more than just spice trade. We provide
              comprehensive services including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Spice mining and refinement operations</li>
              <li>Secure transportation and distribution networks</li>
              <li>Strategic enforcement and security services</li>
              <li>Financial management and investment opportunities</li>
              <li>Intelligence gathering and information brokering</li>
              <li>Protection services for allied organizations</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-purple-950/50 to-amber-950/50 border-purple-900/50 p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Network</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          The Pyke Syndicate values loyalty, efficiency, and discretion. For those who demonstrate
          these qualities, opportunities for advancement and profit are limitless.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-slate-900/50 px-6 py-3 rounded-lg border border-red-900/30">
            <p className="text-purple-400 text-sm font-semibold">ACTIVE OPERATIONS</p>
            <p className="text-white text-2xl font-bold">247</p>
          </div>
          <div className="bg-slate-900/50 px-6 py-3 rounded-lg border border-red-900/30">
            <p className="text-purple-400 text-sm font-semibold">MEMBER FAMILIES</p>
            <p className="text-white text-2xl font-bold">12</p>
          </div>
          <div className="bg-slate-900/50 px-6 py-3 rounded-lg border border-red-900/30">
            <p className="text-purple-400 text-sm font-semibold">TERRITORIES</p>
            <p className="text-white text-2xl font-bold">38</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.roblox.com/communities/14906798/The-Pyke-Syndicate#!/about" className="group">
              <div className="bg-slate-900/50 px-6 py-3 rounded-lg border border-red-900/30 group-hover:scale-[1.05] transition-all duration-300 ease-in-out">
                <p className="text-purple-400 text-sm font-semibold transition-all duration-300 ease-in-out group-hover:text-amber-500">Group</p>
              </div>
            </a>
            <a href="https://discord.gg/KjTe3v9gWW" className="group">
              <div className="bg-slate-900/50 px-6 py-3 rounded-lg border border-red-900/30 group-hover:scale-[1.05] transition-all duration-300 ease-in-out">
                <p className="text-purple-400 text-sm font-semibold transition-all duration-300 ease-in-out group-hover:text-amber-500">Discord</p>
              </div>
            </a>
        </div>
      </Card>
    </div>
  );
}
