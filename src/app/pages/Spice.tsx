import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Package, 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  Users, 
  AlertTriangle,
  Clock,
  Database,
  ArrowRight,
  Download,
  Upload,
  Factory,
  Shield
} from "lucide-react";

export function Spice() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-900/50">
            <Package className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Spice Operations Guide
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Complete overview of spice generation, management, and territory maintenance
          for all Syndicate operations.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <Card className="bg-slate-900/50 border-amber-900/30 p-4 text-center">
          <TrendingUp className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">30</p>
          <p className="text-xs text-slate-400">Spice per 2 Minutes</p>
        </Card>
        <Card className="bg-slate-900/50 border-amber-900/30 p-4 text-center">
          <Database className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">1,200</p>
          <p className="text-xs text-slate-400">Max Storage (Imperial)</p>
        </Card>
        <Card className="bg-slate-900/50 border-amber-900/30 p-4 text-center">
          <Database className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">12,000</p>
          <p className="text-xs text-slate-400">Max Storage (CSA)</p>
        </Card>
        <Card className="bg-slate-900/50 border-amber-900/30 p-4 text-center">
          <Clock className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">320</p>
          <p className="text-xs text-slate-400">Spice for 24 Hours</p>
        </Card>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8">
        {/* Spice Generation */}
        <Card className="bg-slate-900/50 border-amber-900/30 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Spice Generation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Generation Rates</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▸</span>
                    <span><span className="font-semibold text-white">30 spice</span> generated every <span className="font-semibold text-white">2 minutes</span> while server is active</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▸</span>
                    <span>Spice is automatically placed into spawn storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▸</span>
                    <span>Generation only occurs when the server is running</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Storage Capacity</h3>
                <div className="space-y-3">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Imperial Worlds</span>
                      <Badge variant="outline" className="border-red-600/50 text-red-400">
                        Limited
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold text-amber-500">1,200 Spice Maximum</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">CSA Worlds</span>
                      <Badge variant="outline" className="border-green-600/50 text-green-400">
                        Expanded
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold text-amber-500">12,000 Spice Maximum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Withdrawal & Transport */}
        <Card className="bg-slate-900/50 border-amber-900/30 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Withdrawal & Transport</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Withdrawal Process</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Spice can be withdrawn from spawn storage with <span className="font-semibold text-white">required permissions</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Withdrawn spice must be transported to a territory for deposit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Transport operations should be planned with security escorts</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-950/30 to-purple-950/30 p-6 rounded-lg border border-purple-900/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Player Requirements for Deposit</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold">CSA Worlds</p>
                    <p className="text-slate-300">Minimum <span className="text-blue-400 font-bold">4 CSA members</span> required</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-red-400" />
                  <div>
                    <p className="text-white font-semibold">Imperial Worlds</p>
                    <p className="text-slate-300">Minimum <span className="text-red-400 font-bold">6 Imperial members</span> required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Territory Deposits */}
        <Card className="bg-slate-900/50 border-amber-900/30 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Territory Deposits</h2>
          </div>

          <div className="space-y-4">
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">▸</span>
                <span>Deposit spice at territory terminals to refill territory supplies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">▸</span>
                <span>Terminal displays current spice amount when inserting a crate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">▸</span>
                <span>With required permissions, view spice levels at any time (requires underworld control)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">▸</span>
                <span className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="font-semibold text-red-400">Cannot deposit spice in faction spawns</span>
                </span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Consumption Rates */}
        <Card className="bg-slate-900/50 border-amber-900/30 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Consumption & Depletion</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">Consumption Rates</h3>
              <div className="space-y-3">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-slate-400 text-sm mb-1">Per Tick (5 seconds)</p>
                  <p className="text-2xl font-bold text-white">0.018 Spice</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-slate-400 text-sm mb-1">Per Second</p>
                  <p className="text-2xl font-bold text-white">0.0036 Spice</p>
                </div>
                <div className="bg-gradient-to-r from-amber-950/50 to-orange-950/50 p-4 rounded-lg border border-amber-900/50">
                  <p className="text-amber-400 text-sm mb-1 font-semibold">24 Hour Requirement</p>
                  <p className="text-2xl font-bold text-white">320 Spice</p>
                  <p className="text-xs text-slate-400 mt-1">Per territory, without outside influence</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">Critical Information</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><span className="font-semibold text-red-400">Spice is consumed even when the server is offline</span> - always fill territories before logging off</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Outside influences can increase depletion rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Other underworld factions depositing spice affects consumption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Official faction members on territory for extended periods impacts rates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-950/50 to-orange-950/50 p-6 rounded-lg border border-red-900/50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Consequences of Depletion</h3>
                <p className="text-slate-300 mb-3">
                  If a territory runs out of spice, severe financial consequences occur:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>Faction <span className="font-semibold text-white">still pays upkeep</span> for the territory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">▸</span>
                    <span><span className="font-semibold text-white">No income is generated</span> from the territory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>Results in <span className="font-semibold text-red-400">massive income losses</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Production Mechanics */}
        <Card className="bg-slate-900/50 border-amber-900/30 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Production & Resource Acquisition</h2>
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="border-yellow-600/50 text-yellow-400 mb-4">
                CSA Worlds Only
              </Badge>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Certain territories can have production facilities built on them</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Establishing <span className="font-semibold text-white">underworld control</span> allows resource theft</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className="font-semibold text-green-400">10% of all production</span> is stolen and placed in underworld storage</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Storage Limit</h3>
                <p className="text-2xl font-bold text-white mb-1">1,200 Weight</p>
                <p className="text-xs text-slate-400">Maximum underworld storage capacity</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Revenue Stream</h3>
                <p className="text-white mb-1">Materials → Spawn → <span className="text-green-400 font-bold">Credits</span></p>
                <p className="text-xs text-slate-400">Transport stolen goods to spawn for sale</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-950/30 to-orange-950/30 p-4 rounded-lg border border-yellow-900/30">
              <div className="flex items-center gap-2 text-yellow-400">
                <AlertTriangle className="w-5 h-5" />
                <p className="font-semibold">Server Dependency</p>
              </div>
              <p className="text-slate-300 text-sm mt-2">
                Production is disabled when the server is not active. Plan resource collection accordingly.
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Reference */}
        <Card className="bg-gradient-to-r from-amber-950/50 to-orange-950/50 border-amber-900/50 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Reference Chart</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 text-center">
              <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-sm text-slate-400 mb-1">Generation</p>
              <p className="text-lg font-bold text-white">30 / 2min</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 text-center">
              <TrendingDown className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-slate-400 mb-1">Consumption</p>
              <p className="text-lg font-bold text-white">0.018 / 5sec</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 text-center">
              <Package className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-slate-400 mb-1">Daily Need</p>
              <p className="text-lg font-bold text-white">320 Spice</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}