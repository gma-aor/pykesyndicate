import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Building2, MapPin, Users, TrendingUp } from "lucide-react";

export function Families() {
  const families = [
    {
      name: "House Pyke Prime",
      region: "Oba Diah",
      specialty: "Central Operations & Governance",
      members: 8,
      status: "Founding House",
      description: "The original Pyke family that established the Syndicate. Maintains supreme authority and oversees all major strategic decisions.",
      operations: ["High Table Chambers", "Central Treasury", "Main Spice Refineries", "Strategic Planning Division"]
    },
    {
      name: "Kessel Coalition",
      region: "Kessel System",
      specialty: "Spice Mining & Production",
      members: 9,
      status: "Core Family",
      description: "Controls the primary spice mining operations on Kessel. Responsible for the majority of raw spice production and quality control.",
      operations: ["Spice Mines Administration", "Worker Management", "Extraction Technology", "Production Quotas"]
    },
    {
      name: "Crimson Trade Cartel",
      region: "Outer Rim Routes",
      specialty: "Smuggling & Distribution",
      members: 10,
      status: "Core Family",
      description: "Manages the extensive smuggling network throughout the Outer Rim. Experts in avoiding Imperial patrols.",
      operations: ["Route Planning", "Ship Fleet Management", "Pilot Recruitment", "Cargo Operations"]
    },
    {
      name: "Veyn Minerals",
      region: "Multiple Systems",
      specialty: "Mining & Production",
      members: 5,
      status: "Core Family",
      description: "Controls the primary mineral mining operations on systems. Responsible for the majority of raw mineral production and quality control.",
      operations: ["Mines Administration", "Worker Management", "Extraction Technology", "Production Quotas"]
    },
    {
      name: "Obsidian Enforcers",
      region: "Oba Diah & Forward Bases",
      specialty: "Security & Combat Operations",
      members: 10,
      status: "Core Family",
      description: "The military arm of the Syndicate. Handles all security, enforcement, and combat operations across Pyke territories.",
      operations: ["Armed Response Teams", "Security Details", "Combat Training", "Weapons Procurement"]
    },
    {
      name: "Golden Vault Collective",
      region: "Financial Hub - Oba Diah",
      specialty: "Finance & Investment",
      members: 5,
      status: "Core Family",
      description: "Manages the Syndicate's vast financial empire. Handles money laundering, investments, and financial strategy.",
      operations: ["Treasury Management", "Investment Portfolio", "Financial Planning", "Asset Protection"]
    },
    {
      name: "Hutt Liaison Delegation",
      region: "Hutt Space Border",
      specialty: "Diplomatic Relations",
      members: 4,
      status: "Specialized Unit",
      description: "Maintains strategic partnerships with the Hutt Cartel and other criminal organizations. Negotiates territorial agreements.",
      operations: ["Alliance Management", "Treaty Negotiations", "Inter-Cartel Communication", "Dispute Resolution"]
    },
    {
      name: "Techno-Acquisition Corps",
      region: "Industrial Sectors",
      specialty: "Technology & Equipment",
      members: 4,
      status: "Support Family",
      description: "Acquires and maintains advanced technology for Syndicate operations. Handles ship modifications and equipment upgrades.",
      operations: ["Tech Procurement", "Ship Modifications", "Equipment Maintenance", "R&D Division"]
    },
    {
      name: "Viper's Reach Collective",
      region: "Mid Rim Territories",
      specialty: "Expansion & Acquisition",
      members: 5,
      status: "Core Family",
      description: "Focuses on territorial expansion and acquisition of new business opportunities. Scouts new markets and establishes footholds.",
      operations: ["Territory Scouting", "Market Analysis", "New Route Development", "Local Partnerships"]
    },
    {
      name: "Crimson Moon Syndicate",
      region: "Coruscant Underworld",
      specialty: "Urban Operations",
      members: 5,
      status: "Specialized Unit",
      description: "Operates in major urban centers, particularly Coruscant. Manages street-level distribution and urban intelligence.",
      operations: ["Urban Distribution", "Street Operations", "Local Enforcement", "City Intelligence"]
    },
    {
      name: "Star Freighter Guild",
      region: "Hyperspace Routes",
      specialty: "Transportation Logistics",
      members: 5,
      status: "Support Family",
      description: "Manages the fleet of transport vessels and coordinates all shipping logistics. Ensures timely delivery of products.",
      operations: ["Fleet Coordination", "Route Optimization", "Cargo Scheduling", "Ship Maintenance"]
    },
    {
      name: "Red Sand Protectorate",
      region: "Desert Worlds Network",
      specialty: "Resource Acquisition",
      members: 5,
      status: "Support Family",
      description: "Specializes in operations on desert and arid worlds. Manages resource acquisition and local population control.",
      operations: ["Desert Operations", "Resource Mining", "Water Rights Control", "Local Government Influence"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Syndicate Families
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto mb-6">
          The Pyke Syndicate operates through a network of specialized families and sub-groups,
          each contributing their unique expertise to our collective success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-slate-900/50 px-6 py-3 rounded-lg border border-amber-900/30">
            <p className="text-purple-400 text-sm font-semibold">TOTAL FAMILIES</p>
            <p className="text-white text-2xl font-bold">{families.length}</p>
          </div>
          <div className="bg-slate-900/50 px-6 py-3 rounded-lg border border-amber-900/30">
            <p className="text-purple-400 text-sm font-semibold">TOTAL MEMBERS</p>
            <p className="text-white text-2xl font-bold">
              {families.reduce((sum, family) => sum + family.members, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Families Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {families.map((family, index) => (
          <Card
            key={index}
            className="bg-slate-900/50 border-amber-900/30 overflow-hidden hover:shadow-lg hover:shadow-amber-900/20 transition-all"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{family.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        family.status === "Founding House" 
                          ? "border-yellow-600/50 text-yellow-400"
                          : family.status === "Core Family"
                          ? "border-red-600/50 text-red-400"
                          : family.status === "Specialized Unit"
                          ? "border-orange-600/50 text-orange-400"
                          : "border-slate-600 text-slate-400"
                      }`}
                    >
                      {family.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <span className="text-slate-400">{family.region}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span className="text-slate-400">{family.members} Members</span>
                </div>
              </div>

              {/* Specialty */}
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-amber-400 font-semibold text-sm">{family.specialty}</span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {family.description}
              </p>

              {/* Operations */}
              <div>
                <h4 className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wide flex items-center gap-2">
                  <Building2 className="w-3 h-3" />
                  Key Operations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {family.operations.map((operation, opIndex) => (
                    <span
                      key={opIndex}
                      className="text-xs bg-slate-800/50 text-slate-300 px-3 py-1 rounded-full border border-slate-700/50"
                    >
                      {operation}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <Card className="bg-gradient-to-r from-red-950/50 to-orange-950/50 border-red-900/50 p-8 mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Family Structure & Cooperation</h2>
        <div className="space-y-3 text-slate-300">
          <p>
            Each family operates with significant autonomy within their area of expertise, but all answer
            to the High Table and Illustrious Imperator. Inter-family cooperation is not just encouraged—it's
            mandatory for the success of Syndicate operations.
          </p>
          <p>
            Families share resources, intelligence, and profits according to contribution and need.
            Regular councils ensure alignment with Syndicate goals and resolve any conflicts between families.
          </p>
          <p className="text-slate-400 text-sm">
            The majority of families are chosen by individual members preference or by allocation.
          </p>
          <p className="text-slate-400 text-sm italic">
            "Divided we are vulnerable. United under the Pyke banner, we are unstoppable."
          </p>
        </div>
      </Card>
    </div>
  );
}
