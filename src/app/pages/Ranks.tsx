import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Crown, 
  Globe, 
  Flame,
  Telescope,
  Shield, 
  Coins, 
  ScrollText,
  ShieldAlert,
  Crosshair,
  Dna,
  ShieldCheck,
  Zap,
  Grip,
  Bomb,
  Cpu,
  User
} from "lucide-react";

export function Ranks() {
  const ranks = [
    {
      icon: Crown,
      title: "Illustrious Imperator",
      level: "High Table",
      color: "from-purple-600 to-black-600",
      duties: [
        "Supreme authority over all Syndicate operations",
        "Final decision-making on strategic alliances",
        "Oversight of all spice trade agreements",
        "Management of inter-faction disputes",
        "Representation in criminal organization summits"
      ],
      members: 1
    },
    {
      icon: ScrollText,
      title: "Majordomo",
      level: "High Table",
      color: "from-red-600 to-red-700",
      duties: [
        "Advisory role to the Illustrious Imperator",
        "Governance of operations",
        "Authorization of major business ventures",
        "Enforcement of Syndicate laws and customs",
        "Recruitment and vetting of new families"
      ],
      members: 1
    },
    {
      icon: Globe,
      title: "Underboss",
      level: "High Table",
      color: "from-orange-600 to-red-600",
      duties: [
        "Planetary-level Management of daily spice operations",
        "Coordination of smuggling routes",
        "Management of the Syndicate’s bounty hunter contracts",
        "Logistics and supply chain oversight",
        "Territory expansion planning"
      ],
      members: 2
    },
    {
      icon: Coins,
      title: "Capo",
      level: "Officer",
      color: "from-orange-600 to-red-600",
      duties: [
        "Territory-level Management of daily spice operations",
        "Allocation of resources across sector hideouts",
        "Liaison between High Table and local field officers",
        "Money laundering and profit skimming oversight",
        "Sanctioning of localized hits and enforcements"
      ],
      members: 4
    },
    {
      icon: Crosshair,
      title: "Lieutenant",
      level: "Officer",
      color: "from-red-700 to-slate-700",
      duties: [
        "Tactical command of strike teams during raids",
        "On-site protection of high-value spice caravans",
        "Direct enforcement of debt collection and penalties",
        "Field training for lower ranks",
        "Operational reporting to the Capo"
      ],
      members: 2
    },
    {
      icon: ShieldAlert,
      title: "Guard Captain",
      level: "Officer",
      color: "from-red-700 to-slate-700",
      duties: [
        "Strategic oversight of the entire Guard division",
        "Allocation of security personnel across Syndicate sectors",
        "Authorization of high-stakes escort missions",
        "Implementation of defense protocols for spice refineries",
        "Strategic security planning for High Table summits",
      ],
      members: 2
    },
    {
      icon: Dna,
      title: "Sentinel Captain",
      level: "Officer",
      color: "from-slate-600 to-slate-700",
      duties: [
        "Strategic oversight of the entire Sentinel division",
        "Deployment of Sentinel units to high-tension zones",
        "Coordination of prisoner transport and containment",
        "Local territory control",
        "Strategic enforcement of Syndicate discipline"
      ],
      members: 2
    },
    {
      icon: ShieldCheck,
      title: "Elite Guard",
      level: "Middle Rank",
      color: "from-slate-700 to-slate-800",
      duties: [
        "Personal security detail for High Table members",
        "Defense of high-priority spice refineries",
        "Execution of high-risk extraction missions",
        "Advanced weaponry and shield maintenance",
        "Authorized to use lethal force without warning"
      ],
      members: 6
    },
    {
      icon: Shield,
      title: "Guard",
      level: "Middle Rank",
      color: "from-slate-700 to-slate-800",
      duties: [
        "General security for Syndicate facilities",
        "Escort duty for standard commercial shipments",
        "Asset protection and crowd control",
        "Monitoring of prisoner transfers",
        "Reporting suspicious activity to Guard Captains"
      ],
      members: 10
    },
    {
      icon: Zap,
      title: "Sentinel",
      level: "Middle Rank",
      color: "from-slate-700 to-slate-800",
      duties: [
        "Armed protection of spice mining facilities",
        "Subjugation of labor forces using electrostaves",
        "Direct combat and suppressive fire with A-300 rifles",
        "Execution of corporal punishment and torture protocols",
        "Ensuring zero-leakage security on production floors"
      ],
      members: 6
    },
    {
      icon: Grip,
      title: "Enforcer",
      level: "Middle Rank",
      color: "from-slate-700 to-slate-800",
      duties: [
        "Physical intimidation of local business owners",
        "Execution of mid-level muscle work",
        "Securing payment for spice distribution",
        "Suppression of local law enforcement interference",
        "Raid support for Lieutenant-led operations"
      ],
      members: 4
    },
    {
      icon: Bomb,
      title: "Grenadier",
      level: "Low Rank",
      color: "from-slate-700 to-slate-800",
      duties: [
        "Demolitions and breaching of rival fortifications",
        "Suppressive fire during tactical retreats",
        "Handling and storage of thermal detonators",
        "Destruction of evidence during planetary raids",
        "Area-of-effect combat support"
      ],
      members: 5
    },
    {
      icon: Cpu,
      title: "Specialist",
      level: "Low Rank",
      color: "from-slate-700 to-slate-800",
      duties: [
        "Technical support for slicer and comms equipment",
        "Maintenance of Syndicate transport vessels",
        "Field repairs on droids and weaponry",
        "Chemical analysis of raw spice precursors",
        "Electronic lockpicking and security bypass"
      ],
      members: 5
    },
    {
      icon: Telescope,
      title: "Vanguard",
      level: "Low Rank",
      color: "from-slate-700 to-slate-800",
      duties: [
        "Lead scout for spice caravan routes",
        "Point-man for urban combat engagements",
        "Reconnaissance of enemy positions",
        "High-mobility skirmishing",
        "First-response during facility breaches"
      ],
      members: 5
    },
    {
      icon: Flame,
      title: "Saboteur",
      level: "Low Rank",
      color: "from-slate-700 to-slate-800",
      duties: [
        "Infiltration of rival manufacturing plants",
        "Disruption of local planetary power grids",
        "Planting trackers on high-value targets",
        "Spreading misinformation in local cantinas",
        "Disabling security systems prior to raids"
      ],
      members: 5
    },
    {
      icon: User,
      title: "Footsoldier",
      level: "Low Rank",
      color: "from-slate-700 to-slate-800",
      duties: [
        "General labor and spice transportation",
        "Basic perimeter patrol and sentry duty",
        "Following direct orders from Lieutenants",
        "Assisting in mass-scale cargo loading",
        "Entry-level combat and suppressive fire"
      ],
      members: 15
    },
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
