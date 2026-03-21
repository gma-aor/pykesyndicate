import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Crown, ShieldCheck, Users, Briefcase, Package, Sword, Eye, Coins } from "lucide-react";

export function Ranks() {
  const ranks = [
    {
      icon: Crown,
      title: "Supreme Magistrate",
      level: "Tier 1",
      color: "from-yellow-600 to-orange-600",
      duties: [
        "Supreme authority over all Syndicate operations",
        "Final decision-making on strategic alliances",
        "Oversight of all spice trade agreements",
        "Management of inter-family disputes",
        "Representation in criminal organization summits"
      ],
      members: 1
    },
    {
      icon: ShieldCheck,
      title: "Elder Council",
      level: "Tier 2",
      color: "from-red-600 to-red-700",
      duties: [
        "Advisory role to the Supreme Magistrate",
        "Governance of individual family operations",
        "Authorization of major business ventures",
        "Enforcement of Syndicate laws and customs",
        "Recruitment and vetting of new families"
      ],
      members: 5
    },
    {
      icon: Briefcase,
      title: "Operations Director",
      level: "Tier 3",
      color: "from-orange-600 to-red-600",
      duties: [
        "Management of daily spice operations",
        "Coordination of smuggling routes",
        "Quality control of spice products",
        "Logistics and supply chain oversight",
        "Territory expansion planning"
      ],
      members: 12
    },
    {
      icon: Coins,
      title: "Financial Overseer",
      level: "Tier 3",
      color: "from-orange-600 to-red-600",
      duties: [
        "Management of Syndicate treasury",
        "Financial analysis and profit optimization",
        "Investment strategy development",
        "Money laundering operations",
        "Tax collection from subordinate operations"
      ],
      members: 8
    },
    {
      icon: Eye,
      title: "Intelligence Master",
      level: "Tier 4",
      color: "from-red-700 to-slate-700",
      duties: [
        "Gathering intelligence on rival organizations",
        "Monitoring Republic and Imperial activities",
        "Surveillance of potential threats",
        "Counter-intelligence operations",
        "Information brokering to allies"
      ],
      members: 15
    },
    {
      icon: Sword,
      title: "Enforcer Captain",
      level: "Tier 4",
      color: "from-red-700 to-slate-700",
      duties: [
        "Leading security operations",
        "Protection of spice shipments",
        "Elimination of threats to the Syndicate",
        "Training of combat personnel",
        "Enforcement of payment collections"
      ],
      members: 20
    },
    {
      icon: Users,
      title: "Family Lieutenant",
      level: "Tier 5",
      color: "from-slate-600 to-slate-700",
      duties: [
        "Management of individual family operations",
        "Coordination with other family units",
        "Recruitment and training of soldiers",
        "Local territory control",
        "Reporting to Operations Directors"
      ],
      members: 45
    },
    {
      icon: Package,
      title: "Spice Handler",
      level: "Tier 6",
      color: "from-slate-700 to-slate-800",
      duties: [
        "Direct handling of spice products",
        "Transportation and delivery operations",
        "Warehouse and storage management",
        "Quality testing and verification",
        "Maintenance of distribution equipment"
      ],
      members: 150
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Syndicate Hierarchy
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          The Pyke Syndicate operates under a structured hierarchy that ensures efficiency,
          loyalty, and clear chains of command throughout all operations.
        </p>
      </div>

      {/* Ranks List */}
      <div className="space-y-6">
        {ranks.map((rank, index) => {
          const Icon = rank.icon;
          return (
            <Card
              key={index}
              className="bg-slate-900/50 border-red-900/30 overflow-hidden hover:shadow-lg hover:shadow-red-900/20 transition-all"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 md:w-1/3">
                    <div className={`w-14 h-14 bg-gradient-to-br ${rank.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{rank.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-red-600/50 text-red-400 text-xs">
                          {rank.level}
                        </Badge>
                        <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                          {rank.members} {rank.members === 1 ? 'Member' : 'Members'}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Duties */}
                  <div className="md:w-2/3">
                    <h4 className="text-sm font-semibold text-red-400 mb-3 uppercase tracking-wide">
                      Responsibilities & Duties
                    </h4>
                    <ul className="space-y-2">
                      {rank.duties.map((duty, dutyIndex) => (
                        <li key={dutyIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-red-500 mt-1">▸</span>
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Promotion Information */}
      <Card className="bg-gradient-to-r from-red-950/50 to-orange-950/50 border-red-900/50 p-8 mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Advancement Within the Syndicate</h2>
        <div className="space-y-3 text-slate-300">
          <p>
            Advancement through the ranks is earned through demonstrated loyalty, successful operations,
            and contributions to the Syndicate's prosperity. Promotions are granted by the Elder Council
            upon recommendation from superior officers.
          </p>
          <p className="text-slate-400 text-sm italic">
            "Loyalty is rewarded. Failure is not forgotten. Success is the only currency that matters."
            - Pyke Syndicate Code
          </p>
        </div>
      </Card>
    </div>
  );
}
