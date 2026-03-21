import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Package, 
  Trophy, 
  Swords, 
  Target, 
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  Skull,
  Coins
} from "lucide-react";

export function Events() {
  const spiceRuns = [
    {
      name: "Kessel Express Route 7",
      date: "March 24, 2026",
      time: "0400 Standard Time",
      route: "Kessel → Nar Shaddaa → Tatooine",
      cargo: "Grade-A Refined Spice",
      value: "850,000 Credits",
      status: "Scheduled",
      riskLevel: "High",
      pilots: 3,
      escorts: 5
    },
    {
      name: "Midnight Shadow Run",
      date: "March 26, 2026",
      time: "2300 Standard Time",
      route: "Oba Diah → Coruscant Underworld",
      cargo: "Premium Spice Shipment",
      value: "1,200,000 Credits",
      status: "In Progress",
      riskLevel: "Extreme",
      pilots: 5,
      escorts: 8
    },
    {
      name: "Outer Rim Circuit Alpha",
      date: "March 28, 2026",
      time: "1200 Standard Time",
      route: "Multiple Outer Rim Stations",
      cargo: "Standard Distribution",
      value: "450,000 Credits",
      status: "Scheduled",
      riskLevel: "Medium",
      pilots: 2,
      escorts: 3
    },
    {
      name: "Deep Space Cache Drop",
      date: "March 30, 2026",
      time: "0600 Standard Time",
      route: "Hidden Cache Points",
      cargo: "Strategic Reserve Stockpile",
      value: "2,100,000 Credits",
      status: "Planning",
      riskLevel: "High",
      pilots: 4,
      escorts: 10
    }
  ];

  const tournaments = [
    {
      name: "Annual Enforcer Combat Championship",
      date: "April 5-7, 2026",
      location: "Oba Diah Central Arena",
      type: "Combat Tournament",
      participants: 64,
      prize: "50,000 Credits + Promotion Consideration",
      description: "Elite hand-to-hand and weapons combat tournament for Syndicate enforcers. Winner earns prestigious recognition and advancement opportunities."
    },
    {
      name: "Pilot's Gauntlet - Kessel Run Edition",
      date: "April 15, 2026",
      location: "Kessel System",
      type: "Racing/Skill Challenge",
      participants: 32,
      prize: "75,000 Credits + Custom Ship Upgrades",
      description: "Treacherous navigation course through the Kessel asteroid field. Tests piloting skill, courage, and ship handling under pressure."
    },
    {
      name: "Strategic Minds Summit",
      date: "May 1-2, 2026",
      location: "Oba Diah Council Chambers",
      type: "Strategy Competition",
      participants: 16,
      prize: "Operations Director Mentorship",
      description: "Complex tactical scenarios testing leadership, strategy, and decision-making. Open to all ranks seeking advancement in operations."
    }
  ];

  const heists = [
    {
      name: "Operation Golden Vault",
      target: "Republic Treasury Transport",
      date: "April 10, 2026",
      location: "Mid Rim Hyperspace Lane",
      objective: "Acquisition of Republic Credit Reserves",
      reward: "3,500,000 Credits (Estimated)",
      difficulty: "Extreme",
      teamSize: 12,
      status: "In Planning"
    },
    {
      name: "Rival Cartel Disruption",
      target: "Hutt Spice Warehouse",
      date: "April 12, 2026",
      location: "Nal Hutta District 7",
      objective: "Liberate Competitor's Spice Stockpile",
      reward: "Market Advantage + Product Acquisition",
      difficulty: "High",
      teamSize: 15,
      status: "Recon Phase"
    },
    {
      name: "Imperial Weapons Cache Raid",
      target: "Imperial Supply Depot",
      date: "April 20, 2026",
      location: "Classified Outer Rim Location",
      objective: "Secure Advanced Weaponry",
      reward: "Military Equipment + 500,000 Credits",
      difficulty: "Extreme",
      teamSize: 20,
      status: "Approved"
    }
  ];

  const bounties = [
    {
      target: "Captain Ryx Vander",
      crime: "Theft of Syndicate Spice Shipment",
      reward: "125,000 Credits",
      status: "Active",
      lastSeen: "Tatooine Spaceport",
      difficulty: "Medium",
      preferredOutcome: "Alive for Interrogation"
    },
    {
      target: "Information Broker 'Whisper'",
      crime: "Selling Syndicate Secrets to Rivals",
      reward: "200,000 Credits",
      status: "Active",
      lastSeen: "Coruscant Level 1313",
      difficulty: "High",
      preferredOutcome: "Either (Information Priority)"
    },
    {
      target: "Deserter Squad 'Red Dawn'",
      crime: "Abandonment of Duty & Asset Theft",
      reward: "75,000 Credits (Per Member)",
      status: "Active",
      lastSeen: "Unknown - Outer Rim",
      difficulty: "Medium",
      preferredOutcome: "Dead or Alive"
    },
    {
      target: "Crime Lord Zex Marlo",
      crime: "Territorial Encroachment",
      reward: "500,000 Credits",
      status: "High Priority",
      lastSeen: "Nar Shaddaa",
      difficulty: "Extreme",
      preferredOutcome: "Alive for Public Trial"
    }
  ];

  const generalEvents = [
    {
      name: "Quarterly Family Summit",
      date: "April 1, 2026",
      location: "Oba Diah Grand Hall",
      type: "Administrative",
      description: "All family leaders convene to report on operations, share intelligence, and coordinate future activities.",
      attendance: "Family Lieutenants and Above"
    },
    {
      name: "New Recruit Induction Ceremony",
      date: "April 3, 2026",
      location: "Multiple Locations",
      type: "Ceremonial",
      description: "Formal induction of new members into the Syndicate. Oath-taking and assignment to families.",
      attendance: "New Recruits + Sponsoring Members"
    },
    {
      name: "Technology Expo & Acquisition Fair",
      date: "April 25-26, 2026",
      location: "Oba Diah Industrial Sector",
      type: "Business",
      description: "Showcase of new technology, weapons, and equipment available for Syndicate operations. Vendors present cutting-edge solutions.",
      attendance: "Open to All Members"
    },
    {
      name: "Annual Profit Distribution",
      date: "May 15, 2026",
      location: "Financial Hub",
      type: "Financial",
      description: "Annual distribution of profits to families and members based on contribution and rank.",
      attendance: "All Active Members"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
      case "in progress":
      case "scheduled":
        return "border-green-600/50 text-green-400";
      case "planning":
      case "recon phase":
        return "border-yellow-600/50 text-yellow-400";
      case "high priority":
      case "approved":
        return "border-red-600/50 text-red-400";
      default:
        return "border-slate-600 text-slate-400";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "extreme":
        return "border-red-600/50 text-red-400";
      case "high":
        return "border-orange-600/50 text-orange-400";
      case "medium":
        return "border-yellow-600/50 text-yellow-400";
      default:
        return "border-green-600/50 text-green-400";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Operations & Events
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Current and upcoming Syndicate activities including spice runs, tournaments,
          strategic operations, bounties, and organizational events.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="spice-runs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-slate-900/50 border border-red-900/30 mb-8">
          <TabsTrigger value="spice-runs" className="data-[state=active]:bg-red-600">
            <Package className="w-4 h-4 mr-2" />
            Spice Runs
          </TabsTrigger>
          <TabsTrigger value="tournaments" className="data-[state=active]:bg-red-600">
            <Trophy className="w-4 h-4 mr-2" />
            Tournaments
          </TabsTrigger>
          <TabsTrigger value="heists" className="data-[state=active]:bg-red-600">
            <Swords className="w-4 h-4 mr-2" />
            Heists
          </TabsTrigger>
          <TabsTrigger value="bounties" className="data-[state=active]:bg-red-600">
            <Target className="w-4 h-4 mr-2" />
            Bounties
          </TabsTrigger>
          <TabsTrigger value="events" className="data-[state=active]:bg-red-600">
            <Calendar className="w-4 h-4 mr-2" />
            Events
          </TabsTrigger>
        </TabsList>

        {/* Spice Runs */}
        <TabsContent value="spice-runs" className="space-y-6">
          <div className="grid gap-6">
            {spiceRuns.map((run, index) => (
              <Card key={index} className="bg-slate-900/50 border-red-900/30 p-6 hover:shadow-lg hover:shadow-red-900/20 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{run.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className={getStatusColor(run.status)}>
                        {run.status}
                      </Badge>
                      <Badge variant="outline" className={getRiskColor(run.riskLevel)}>
                        {run.riskLevel} Risk
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-500">{run.value}</div>
                    <div className="text-sm text-slate-400">Estimated Value</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{run.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{run.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{run.pilots} Pilots / {run.escorts} Escorts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Package className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{run.cargo}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{run.route}</span>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tournaments */}
        <TabsContent value="tournaments" className="space-y-6">
          <div className="grid gap-6">
            {tournaments.map((tournament, index) => (
              <Card key={index} className="bg-slate-900/50 border-red-900/30 p-6 hover:shadow-lg hover:shadow-red-900/20 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
                    <Badge variant="outline" className="border-yellow-600/50 text-yellow-400">
                      {tournament.type}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{tournament.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{tournament.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{tournament.participants} Participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{tournament.prize}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Heists */}
        <TabsContent value="heists" className="space-y-6">
          <div className="grid gap-6">
            {heists.map((heist, index) => (
              <Card key={index} className="bg-slate-900/50 border-red-900/30 p-6 hover:shadow-lg hover:shadow-red-900/20 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{heist.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className={getStatusColor(heist.status)}>
                        {heist.status}
                      </Badge>
                      <Badge variant="outline" className={getRiskColor(heist.difficulty)}>
                        {heist.difficulty} Difficulty
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-500">{heist.reward}</div>
                    <div className="text-sm text-slate-400">Expected Reward</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-red-400 font-semibold mb-1">Target</p>
                    <p className="text-slate-300">{heist.target}</p>
                  </div>
                  <div>
                    <p className="text-sm text-red-400 font-semibold mb-1">Objective</p>
                    <p className="text-slate-300">{heist.objective}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{heist.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{heist.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{heist.teamSize} Operatives</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Bounties */}
        <TabsContent value="bounties" className="space-y-6">
          <div className="grid gap-6">
            {bounties.map((bounty, index) => (
              <Card key={index} className="bg-slate-900/50 border-red-900/30 p-6 hover:shadow-lg hover:shadow-red-900/20 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Skull className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{bounty.target}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className={getStatusColor(bounty.status)}>
                          {bounty.status}
                        </Badge>
                        <Badge variant="outline" className={getRiskColor(bounty.difficulty)}>
                          {bounty.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <Coins className="w-5 h-5 text-yellow-500" />
                      <span className="text-2xl font-bold text-yellow-500">{bounty.reward}</span>
                    </div>
                    <div className="text-sm text-slate-400">Bounty</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-red-400 font-semibold mb-1">Crime</p>
                    <p className="text-slate-300">{bounty.crime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-red-400 font-semibold mb-1">Last Known Location</p>
                    <p className="text-slate-300">{bounty.lastSeen}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-red-400 font-semibold mb-1">Preferred Outcome</p>
                    <p className="text-slate-300">{bounty.preferredOutcome}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* General Events */}
        <TabsContent value="events" className="space-y-6">
          <div className="grid gap-6">
            {generalEvents.map((event, index) => (
              <Card key={index} className="bg-slate-900/50 border-red-900/30 p-6 hover:shadow-lg hover:shadow-red-900/20 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
                    <Badge variant="outline" className="border-orange-600/50 text-orange-400">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{event.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-red-500" />
                    <span className="text-slate-300">{event.attendance}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Note */}
      <Card className="bg-gradient-to-r from-red-950/50 to-orange-950/50 border-red-900/50 p-6 mt-12">
        <p className="text-slate-300 text-sm text-center">
          <span className="text-red-400 font-semibold">Security Notice:</span> All operations are classified.
          Information is distributed on a need-to-know basis. Unauthorized disclosure will result in severe consequences.
        </p>
      </Card>
    </div>
  );
}
