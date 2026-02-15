'use client';

import { useState } from 'react';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

type FireType = 'traditional' | 'coast' | 'barista' | 'lean' | 'fat';

export default function Home() {
  const [fireType, setFireType] = useState<FireType>('traditional');
  const [activeCalculator, setActiveCalculator] = useState<'fire-number' | 'coast' | 'projection' | 'withdrawal' | 'limits'>('fire-number');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/40 to-pink-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Professional Header with Glassmorphism */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-teal-500/30">
                🔥
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  FIRE Calculator
                </h1>
                <p className="text-sm text-gray-600">Financial Independence, Retire Early</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#calculator" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Calculator</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">How It Works</a>
              <a href="#resources" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Resources</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 border-b border-white/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Free • No Signup Required • Privacy First
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Plan Your Path to<br/>
              <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Financial Independence
              </span>
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Calculate your FIRE number, project your timeline, and explore different early retirement strategies 
              with our comprehensive suite of calculators. Based on the Trinity Study research.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-all">
                ✓ Coast FIRE Calculator
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-all">
                ✓ Safe Withdrawal Rates
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-all">
                ✓ 401k/IRA Limits 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative" id="calculator">
        {/* FIRE Type Selector - Enhanced Card Design */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 mb-8 shadow-xl shadow-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
              🎯
            </span>
            Choose Your FIRE Strategy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { type: 'traditional' as FireType, label: 'Traditional FIRE', desc: '25x expenses', icon: '🎯', gradient: 'from-teal-500 to-blue-600' },
              { type: 'coast' as FireType, label: 'Coast FIRE', desc: 'Stop contributing', icon: '🌊', gradient: 'from-blue-500 to-cyan-600' },
              { type: 'barista' as FireType, label: 'Barista FIRE', desc: 'Part-time work', icon: '☕', gradient: 'from-amber-500 to-orange-600' },
              { type: 'lean' as FireType, label: 'Lean FIRE', desc: 'Minimal lifestyle', icon: '🥗', gradient: 'from-green-500 to-emerald-600' },
              { type: 'fat' as FireType, label: 'Fat FIRE', desc: 'Luxury retirement', icon: '💰', gradient: 'from-purple-500 to-pink-600' },
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => setFireType(item.type)}
                className={`group relative p-5 rounded-xl transition-all duration-300 text-left overflow-hidden ${
                  fireType === item.type
                    ? 'bg-gradient-to-br ' + item.gradient + ' text-white shadow-2xl shadow-teal-500/30 scale-105'
                    : 'bg-white border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg'
                }`}
              >
                <div className="relative z-10">
                  <div className={`text-3xl mb-2 transition-transform duration-300 ${fireType === item.type ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {item.icon}
                  </div>
                  <div className={`font-semibold text-sm mb-1 ${fireType === item.type ? 'text-white' : 'text-gray-900'}`}>
                    {item.label}
                  </div>
                  <div className={`text-xs ${fireType === item.type ? 'text-white/80' : 'text-gray-600'}`}>
                    {item.desc}
                  </div>
                </div>
                {fireType === item.type && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Tabs - Glassmorphism Design */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50">
          <div className="border-b border-gray-200/50 bg-gradient-to-r from-gray-50/50 to-blue-50/50">
            <div className="flex overflow-x-auto scrollbar-hide">
              {[
                { id: 'fire-number' as const, label: 'FIRE Number', icon: '🔢' },
                { id: 'coast' as const, label: 'Coast FIRE', icon: '🌊' },
                { id: 'projection' as const, label: 'Time to FIRE', icon: '⏰' },
                { id: 'withdrawal' as const, label: 'Withdrawal Rate', icon: '💵' },
                { id: 'limits' as const, label: '401k/IRA Limits', icon: '📊' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCalculator(tab.id)}
                  className={`relative px-6 py-4 font-medium whitespace-nowrap text-sm transition-all duration-300 ${
                    activeCalculator === tab.id
                      ? 'text-teal-600 bg-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{tab.icon}</span>
                    {tab.label}
                  </span>
                  {activeCalculator === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-10">
            {activeCalculator === 'fire-number' && <FireNumberCalculator fireType={fireType} />}
            {activeCalculator === 'coast' && <CoastFireCalculator />}
            {activeCalculator === 'projection' && <ProjectionCalculator />}
            {activeCalculator === 'withdrawal' && <WithdrawalCalculator />}
            {activeCalculator === 'limits' && <ContributionLimits />}
          </div>
        </div>

        {/* Educational Content - Enhanced Card Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8" id="how-it-works">
          <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
              📚
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How This Calculator Works</h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div className="pl-4 border-l-4 border-teal-500">
                <p className="font-semibold text-gray-900 mb-1">The 4% Rule</p>
                <p>Based on the Trinity Study, withdrawing 4% of your portfolio annually (adjusted for inflation) has historically had a 95%+ success rate over 30-year periods.</p>
              </div>
              <div className="pl-4 border-l-4 border-blue-500">
                <p className="font-semibold text-gray-900 mb-1">The 25x Rule</p>
                <p>To retire, you need 25 times your annual expenses invested. Formula: Annual Expenses × 25 = FIRE Number.</p>
              </div>
              <div className="pl-4 border-l-4 border-purple-500">
                <p className="font-semibold text-gray-900 mb-1">Coast FIRE</p>
                <p>The point where your current investments will grow to your FIRE number by traditional retirement age, even without additional contributions.</p>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
              ⚠️
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Considerations</h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div className="pl-4 border-l-4 border-red-500">
                <p className="font-semibold text-gray-900 mb-1">Market Volatility</p>
                <p>Historical returns don't guarantee future results. Plan for market downturns and have a withdrawal strategy for bear markets.</p>
              </div>
              <div className="pl-4 border-l-4 border-orange-500">
                <p className="font-semibold text-gray-900 mb-1">Healthcare Costs</p>
                <p>Before Medicare eligibility (age 65), healthcare can be expensive. Factor in health insurance premiums and out-of-pocket costs.</p>
              </div>
              <div className="pl-4 border-l-4 border-yellow-500">
                <p className="font-semibold text-gray-900 mb-1">Inflation</p>
                <p>All projections assume you'll adjust your withdrawals for inflation. A $40,000 annual budget today might need to be $50,000+ in 10 years.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tools - Enhanced Card Design */}
        <div className="mt-16 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 border border-gray-200/50 rounded-2xl p-10 shadow-xl" id="resources">
          <h3 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
            <span className="text-4xl">🔗</span>
            Related FIRE Resources
          </h3>
          <p className="text-gray-600 mb-8">Explore more tools to optimize your early retirement journey</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📊', title: 'Portfolio Analyzer', desc: 'Analyze your asset allocation and risk', color: 'from-blue-500 to-cyan-600' },
              { icon: '💳', title: 'Tax Strategy', desc: 'Optimize Roth vs Traditional accounts', color: 'from-purple-500 to-pink-600' },
              { icon: '🏠', title: 'Housing Calculator', desc: 'Rent vs buy for early retirement', color: 'from-green-500 to-emerald-600' },
            ].map((tool, i) => (
              <a
                key={i}
                href="#calculator"
                className="group relative bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200/50 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <div className="font-bold text-lg text-gray-900 mb-2">{tool.title}</div>
                <div className="text-sm text-gray-600">{tool.desc}</div>
                <div className="mt-4 text-teal-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Coming Soon <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Trust Signals - Enhanced */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 pb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <span className="text-lg">📅</span>
            <span>Updated February 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <span className="text-lg">✓</span>
            <span>Based on Trinity Study</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <span className="text-lg">🔒</span>
            <span>No data collected</span>
          </div>
        </div>

        {/* Disclaimer - Enhanced */}
        <div className="border-t border-gray-200/50 pt-8 pb-12">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-6 shadow-lg">
            <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              Disclaimer
            </h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              This calculator is for educational and informational purposes only. It does not constitute financial advice. 
              All calculations are estimates based on historical data and assumptions. Past performance does not guarantee 
              future results. Please consult with a qualified financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </main>
  );
}

// Enhanced FIRE Number Calculator
function FireNumberCalculator({ fireType }: { fireType: FireType }) {
  const [annualExpenses, setAnnualExpenses] = useState<string>('40000');
  const [currentSavings, setCurrentSavings] = useState<string>('100000');
  const [monthlyContribution, setMonthlyContribution] = useState<string>('2000');
  const [returnRate, setReturnRate] = useState<string>('7');

  const expenses = parseFloat(annualExpenses) || 0;
  const savings = parseFloat(currentSavings) || 0;
  const monthly = parseFloat(monthlyContribution) || 0;
  const rate = parseFloat(returnRate) / 100 || 0;

  const getMultiplier = () => {
    switch (fireType) {
      case 'lean': return 20;
      case 'fat': return 30;
      default: return 25;
    }
  };

  const multiplier = getMultiplier();
  const fireNumber = expenses * multiplier;
  const progress = (savings / fireNumber) * 100;

  const generateProjectionData = () => {
    const data = [];
    const monthlyRate = rate / 12;
    let currentValue = savings;
    
    for (let year = 0; year <= 30; year++) {
      data.push({
        year,
        portfolio: Math.round(currentValue),
        fireTarget: fireNumber,
      });
      
      for (let month = 0; month < 12; month++) {
        currentValue = currentValue * (1 + monthlyRate) + monthly;
      }
      
      if (currentValue >= fireNumber && data.length > 1) break;
    }
    
    return data;
  };

  const chartData = generateProjectionData();
  const yearsToFire = chartData.length - 1;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
          FIRE Number Calculator
        </h3>
        <p className="text-gray-600">Calculate how much you need to retire based on the {multiplier}x rule for {fireType} FIRE</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Inputs with enhanced styling */}
        <div className="space-y-6">
          <div className="space-y-5">
            {[
              { label: 'Annual Expenses', value: annualExpenses, setter: setAnnualExpenses, prefix: '$', icon: '💰' },
              { label: 'Current Savings', value: currentSavings, setter: setCurrentSavings, prefix: '$', icon: '🏦' },
              { label: 'Monthly Contribution', value: monthlyContribution, setter: setMonthlyContribution, prefix: '$', icon: '📈' },
            ].map((field, i) => (
              <div key={i} className="group">
                <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-lg">{field.icon}</span>
                  {field.label}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">
                    {field.prefix}
                  </span>
                  <input
                    type="number"
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-lg font-medium transition-all group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>
            ))}

            <div className="group">
              <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-lg">📊</span>
                Expected Annual Return
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.5"
                  value={returnRate}
                  onChange={(e) => setReturnRate(e.target.value)}
                  className="w-full pl-4 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-lg font-medium transition-all group-hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">%</span>
              </div>
            </div>
          </div>

          {/* Progress Bar - Enhanced */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200/50 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-lg">🎯</span>
                Progress to FIRE
              </span>
              <span className="text-lg font-bold text-teal-600">{progress.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden shadow-inner">
              <div 
                className="h-5 rounded-full transition-all duration-500 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 shadow-lg"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-3 flex items-center gap-1">
              <span>💵</span>
              ${(fireNumber - savings).toLocaleString('en-US', { maximumFractionDigits: 0 })} remaining
            </p>
          </div>
        </div>

        {/* Right Column - Results & Chart */}
        <div className="space-y-6">
          {/* Big Result Box - Enhanced Gradient */}
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 rounded-2xl p-8 text-white shadow-2xl shadow-teal-500/30">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10 text-center">
              <div className="text-sm font-medium opacity-90 mb-2">Your {fireType.charAt(0).toUpperCase() + fireType.slice(1)} FIRE Number</div>
              <div className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                ${fireNumber.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
              <div className="space-y-2">
                <div className="text-lg opacity-95">
                  Withdraw ${(fireNumber * (1/multiplier)).toLocaleString('en-US', { maximumFractionDigits: 0 })}/year
                </div>
                <div className="text-sm opacity-80 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 inline-block">
                  {((1/multiplier) * 100).toFixed(2)}% safe withdrawal rate
                </div>
              </div>
            </div>
          </div>

          {/* Timeline - Enhanced */}
          {yearsToFire > 0 && yearsToFire < 50 && (
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-700 mb-2 flex items-center justify-center gap-2">
                  <span className="text-lg">⏰</span>
                  Estimated Time to FIRE
                </div>
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {yearsToFire} <span className="text-2xl">years</span>
                </div>
                <div className="text-sm text-gray-600">
                  With ${monthly.toLocaleString()}/month at {returnRate}% return
                </div>
              </div>
            </div>
          )}

          {/* Growth Chart - Enhanced */}
          <div className="bg-white border border-gray-200/50 rounded-xl p-6 shadow-lg">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-lg">📈</span>
              Wealth Growth Projection
            </h4>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="year" 
                  stroke="#6b7280"
                  tick={{ fontSize: 12 }}
                  label={{ value: 'Years', position: 'insideBottom', offset: -5, style: { fontSize: 12 } }}
                />
                <YAxis 
                  stroke="#6b7280"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  formatter={(value: number | undefined) => value ? `$${value.toLocaleString()}` : 'N/A'}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="portfolio" 
                  stroke="#14b8a6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorPortfolio)" 
                  name="Portfolio Value"
                />
                <Line 
                  type="monotone" 
                  dataKey="fireTarget" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5" 
                  dot={false}
                  name="FIRE Target"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Key Metrics - Enhanced */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-5 border border-teal-200/50 shadow-md">
              <div className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                <span>💵</span>
                Monthly Income
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ${((fireNumber * (1/multiplier)) / 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200/50 shadow-md">
              <div className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                <span>🎯</span>
                Total Needed
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ${fireNumber.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Section - Enhanced */}
      <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 border border-gray-200/50 rounded-xl p-6 shadow-lg">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span>
          Understanding {fireType.charAt(0).toUpperCase() + fireType.slice(1)} FIRE
        </h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          {fireType === 'traditional' && 'Save 25x your annual expenses and withdraw 4% per year to maintain your lifestyle indefinitely. This is the most researched and proven FIRE strategy, backed by the Trinity Study.'}
          {fireType === 'lean' && 'Minimize expenses and save 20x to retire early with a frugal lifestyle. Uses a 5% withdrawal rate which carries more risk but requires less capital upfront.'}
          {fireType === 'fat' && 'Save 30x your annual expenses for a more comfortable retirement with extra cushion. The 3.33% withdrawal rate provides greater security and lifestyle flexibility.'}
          {fireType === 'coast' && 'Once you hit Coast FIRE, your investments grow to full FIRE without additional contributions. Perfect for career changes, sabbaticals, or transitioning to passion projects.'}
          {fireType === 'barista' && 'Save enough to cover most expenses, then work part-time to cover healthcare and extras. Offers flexibility and social engagement while reducing financial stress significantly.'}
        </p>
      </div>
    </div>
  );
}

// Keep existing Coast FIRE, Projection, Withdrawal, and Limits calculators with similar enhancements
// (Implementations remain the same as previous version for brevity - they work fine)

function CoastFireCalculator() {
  const [currentAge, setCurrentAge] = useState<string>('30');
  const [retirementAge, setRetirementAge] = useState<string>('65');
  const [currentSavings, setCurrentSavings] = useState<string>('50000');
  const [targetFireNumber, setTargetFireNumber] = useState<string>('1000000');
  const [returnRate, setReturnRate] = useState<string>('7');

  const age = parseFloat(currentAge) || 0;
  const retAge = parseFloat(retirementAge) || 0;
  const savings = parseFloat(currentSavings) || 0;
  const target = parseFloat(targetFireNumber) || 0;
  const rate = parseFloat(returnRate) / 100 || 0;
  const years = retAge - age;

  const futureValue = savings * Math.pow(1 + rate, years);
  const coastFireNumber = target / Math.pow(1 + rate, years);
  const hasReachedCoastFire = savings >= coastFireNumber;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
          Coast FIRE Calculator
        </h3>
        <p className="text-gray-600">When can you stop contributing and let compound interest do the work?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { label: 'Current Age', value: currentAge, setter: setCurrentAge },
          { label: 'Retirement Age', value: retirementAge, setter: setRetirementAge },
          { label: 'Current Savings ($)', value: currentSavings, setter: setCurrentSavings },
          { label: 'Target FIRE Number ($)', value: targetFireNumber, setter: setTargetFireNumber },
        ].map((field, i) => (
          <div key={i}>
            <label className="block text-sm font-semibold text-gray-900 mb-2">{field.label}</label>
            <input
              type="number"
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white/50 backdrop-blur-sm"
            />
          </div>
        ))}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-900 mb-2">Expected Return Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={returnRate}
            onChange={(e) => setReturnRate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white/50 backdrop-blur-sm"
          />
        </div>
      </div>

      {hasReachedCoastFire ? (
        <div className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-2xl p-10 text-white shadow-2xl shadow-green-500/30">
          <div className="text-center relative">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <div className="text-4xl font-bold mb-4 drop-shadow-lg">You've Reached Coast FIRE!</div>
            <p className="text-lg opacity-95 mb-6">You can stop contributing and your current savings will grow to:</p>
            <div className="text-6xl font-bold mb-3 drop-shadow-lg">
              ${futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <p className="text-xl opacity-90 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
              by age {retirementAge}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 rounded-2xl p-10 text-white shadow-2xl shadow-teal-500/30">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 text-center">
            <div className="text-sm font-medium opacity-90 mb-2">Your Coast FIRE Number</div>
            <div className="text-6xl font-bold mb-6 drop-shadow-lg">
              ${coastFireNumber.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <p className="text-lg opacity-95 mb-6">Save this much to coast to your FIRE number</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-sm opacity-80 mb-2">Current Progress</div>
              <div className="text-5xl font-bold mb-2">
                {((savings / coastFireNumber) * 100).toFixed(1)}%
              </div>
              <div className="text-sm opacity-80">
                ${(coastFireNumber - savings).toLocaleString('en-US', { maximumFractionDigits: 0 })} remaining
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-gray-200/50 rounded-xl p-6 shadow-lg">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-xl">📊</span>
          Projection
        </h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          Your current <strong>${savings.toLocaleString('en-US', { maximumFractionDigits: 0 })}</strong> will grow to{' '}
          <strong>${futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</strong> in {years} years at {returnRate}% annual return, 
          assuming no additional contributions. That's the power of compound interest!
        </p>
      </div>
    </div>
  );
}

function ProjectionCalculator() {
  const [currentSavings, setCurrentSavings] = useState<string>('100000');
  const [monthlyContribution, setMonthlyContribution] = useState<string>('3000');
  const [targetFireNumber, setTargetFireNumber] = useState<string>('1000000');
  const [returnRate, setReturnRate] = useState<string>('7');

  const savings = parseFloat(currentSavings) || 0;
  const monthly = parseFloat(monthlyContribution) || 0;
  const target = parseFloat(targetFireNumber) || 0;
  const rate = parseFloat(returnRate) / 100 || 0;

  const monthlyRate = rate / 12;
  const yearsToFire = monthly > 0
    ? Math.log((target * monthlyRate + monthly) / (savings * monthlyRate + monthly)) / Math.log(1 + monthlyRate) / 12
    : Math.log(target / savings) / Math.log(1 + rate);

  const totalContributed = (monthly * 12 * yearsToFire) + savings;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
          Time to FIRE Projection
        </h3>
        <p className="text-gray-600">How long until you reach financial independence?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { label: 'Current Savings ($)', value: currentSavings, setter: setCurrentSavings },
          { label: 'Monthly Contribution ($)', value: monthlyContribution, setter: setMonthlyContribution },
          { label: 'Target FIRE Number ($)', value: targetFireNumber, setter: setTargetFireNumber },
          { label: 'Expected Return Rate (%)', value: returnRate, setter: setReturnRate },
        ].map((field, i) => (
          <div key={i}>
            <label className="block text-sm font-semibold text-gray-900 mb-2">{field.label}</label>
            <input
              type="number"
              step={field.label.includes('%') ? '0.1' : '1'}
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white/50 backdrop-blur-sm"
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 rounded-2xl p-10 text-white shadow-2xl shadow-teal-500/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 text-center">
          <div className="text-sm font-medium opacity-90 mb-2">Time Until FIRE</div>
          <div className="text-7xl font-bold mb-3 drop-shadow-lg">
            {yearsToFire > 0 && isFinite(yearsToFire)
              ? yearsToFire.toFixed(1)
              : 'N/A'}
          </div>
          <div className="text-3xl opacity-95 mb-3">years</div>
          {yearsToFire > 0 && isFinite(yearsToFire) && (
            <div className="text-sm opacity-80 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
              Approximately {Math.ceil(yearsToFire * 12)} months
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200/50 rounded-xl p-6 shadow-lg">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span className="text-xl">📈</span>
            Annual Contribution
          </h4>
          <div className="text-4xl font-bold text-teal-600">
            ${(monthly * 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50 rounded-xl p-6 shadow-lg">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span className="text-xl">💰</span>
            Total Investment
          </h4>
          <div className="text-4xl font-bold text-purple-600">
            ${totalContributed.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 rounded-xl p-6 shadow-lg">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span>
          Speed Up Your Timeline
        </h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          Your <strong>savings rate</strong> is the #1 factor in reaching FIRE. A 50% savings rate means you can retire in ~17 years, 
          while a 70% savings rate gets you there in ~8.5 years. Focus on increasing income and reducing expenses to accelerate your journey!
        </p>
      </div>
    </div>
  );
}

function WithdrawalCalculator() {
  const [portfolioValue, setPortfolioValue] = useState<string>('1000000');
  const [withdrawalRate, setWithdrawalRate] = useState<string>('4');

  const portfolio = parseFloat(portfolioValue) || 0;
  const rate = parseFloat(withdrawalRate) / 100 || 0;

  const annualWithdrawal = portfolio * rate;
  const monthlyWithdrawal = annualWithdrawal / 12;

  const scenarios = [
    { rate: 3.0, description: 'Very Conservative', risk: 'Very Low', success: '99%+', color: 'from-green-500 to-emerald-600', icon: '🟢' },
    { rate: 3.5, description: 'Conservative', risk: 'Low', success: '97%+', color: 'from-green-400 to-teal-500', icon: '🟢' },
    { rate: 4.0, description: 'Standard (Trinity Study)', risk: 'Low-Medium', success: '95%+', color: 'from-teal-500 to-blue-500', icon: '🔵' },
    { rate: 4.5, description: 'Moderate', risk: 'Medium', success: '90%+', color: 'from-yellow-400 to-orange-500', icon: '🟡' },
    { rate: 5.0, description: 'Aggressive', risk: 'High', success: '80%+', color: 'from-orange-500 to-red-500', icon: '🔴' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
          Safe Withdrawal Rate Calculator
        </h3>
        <p className="text-gray-600">How much can you safely withdraw each year in retirement?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Portfolio Value ($)</label>
          <input
            type="number"
            value={portfolioValue}
            onChange={(e) => setPortfolioValue(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white/50 backdrop-blur-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Withdrawal Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={withdrawalRate}
            onChange={(e) => setWithdrawalRate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white/50 backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 rounded-2xl p-10 text-white shadow-2xl shadow-teal-500/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 text-center">
          <div className="text-sm font-medium opacity-90 mb-2">Annual Withdrawal</div>
          <div className="text-7xl font-bold mb-5 drop-shadow-lg">
            ${annualWithdrawal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
          <div className="text-3xl opacity-95">
            ${monthlyWithdrawal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            <span className="text-lg opacity-80">/month</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
          <span className="text-xl">📊</span>
          Withdrawal Rate Scenarios
        </h4>
        <div className="space-y-4">
          {scenarios.map((scenario) => {
            const amount = portfolio * (scenario.rate / 100);
            const isSelected = Math.abs(scenario.rate - parseFloat(withdrawalRate)) < 0.1;
            return (
              <div 
                key={scenario.rate} 
                className={`relative bg-white border-2 rounded-2xl p-6 transition-all duration-300 shadow-lg overflow-hidden group ${
                  isSelected ? 'border-teal-500 shadow-2xl shadow-teal-500/20 scale-[1.02]' : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${scenario.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="relative flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${scenario.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {scenario.rate}%
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900 flex items-center gap-2">
                        {scenario.icon} {scenario.description}
                      </div>
                      <div className="text-sm text-gray-600">Risk: {scenario.risk}</div>
                      <div className="text-xs text-gray-500 mt-1 bg-gray-100 px-2 py-1 rounded-full inline-block">
                        Historical Success: {scenario.success}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-3xl text-gray-900">
                      ${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-sm text-gray-600">per year</div>
                    <div className="text-xs text-gray-500 mt-1">
                      ${(amount / 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}/month
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-gray-200/50 rounded-xl p-6 shadow-lg">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-xl">📚</span>
          Understanding the 4% Rule
        </h4>
        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
          The <strong>Trinity Study</strong> (1998) analyzed historical market data and found that a 4% initial withdrawal rate, 
          adjusted annually for inflation, had a 95%+ success rate over 30-year retirement periods with a 60/40 stock/bond portfolio.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Key factors:</strong> Lower withdrawal rates provide greater security but require more savings. 
          Higher rates increase risk of depleting your portfolio during market downturns. Consider your time horizon, 
          risk tolerance, and flexibility to adjust spending.
        </p>
      </div>
    </div>
  );
}

function ContributionLimits() {
  const limits2026 = {
    '401(k)': { limit: 23500, catchup: 7500, catchupAge: 50, icon: '🏢', color: 'from-blue-500 to-cyan-600' },
    '403(b)': { limit: 23500, catchup: 7500, catchupAge: 50, icon: '🎓', color: 'from-purple-500 to-pink-600' },
    'Traditional IRA': { limit: 7000, catchup: 1000, catchupAge: 50, icon: '🏦', color: 'from-teal-500 to-green-600' },
    'Roth IRA': { limit: 7000, catchup: 1000, catchupAge: 50, icon: '💎', color: 'from-indigo-500 to-purple-600' },
    'HSA (Individual)': { limit: 4300, catchup: 1000, catchupAge: 55, icon: '🏥', color: 'from-red-500 to-pink-600' },
    'HSA (Family)': { limit: 8550, catchup: 1000, catchupAge: 55, icon: '👨‍👩‍👧‍👦', color: 'from-orange-500 to-red-600' },
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
          401(k)/IRA Contribution Limits
        </h3>
        <p className="text-gray-600">2026 IRS contribution limits for retirement accounts</p>
      </div>

      <div className="space-y-5">
        {Object.entries(limits2026).map(([account, data]) => (
          <div key={account} className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-teal-300 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {data.icon}
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900">{account}</div>
                  <div className="text-sm text-gray-600 mt-1">Tax-advantaged retirement account</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 mb-1">Standard</div>
                  <div className="font-bold text-xl text-gray-900">
                    ${data.limit.toLocaleString()}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 mb-1">Catch-up {data.catchupAge}+</div>
                  <div className="font-bold text-xl text-gray-900">
                    ${data.catchup.toLocaleString()}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-3 border border-teal-200">
                  <div className="text-xs text-gray-700 mb-1 font-semibold">Total Max</div>
                  <div className="font-bold text-xl text-teal-600">
                    ${(data.limit + data.catchup).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 rounded-xl p-6 shadow-lg">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">💡</span>
            Pro Tips
          </h4>
          <ul className="text-sm text-gray-700 space-y-3 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">→</span>
              <span><strong>Stack them:</strong> You can contribute to 401(k) AND IRA in the same year for maximum tax benefits</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">→</span>
              <span><strong>Roth vs Traditional:</strong> Roth = tax-free growth, Traditional = tax deduction now</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">→</span>
              <span><strong>HSA advantage:</strong> Triple tax benefit - deductible, grows tax-free, withdraws tax-free for medical</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">→</span>
              <span><strong>Employer match:</strong> Always contribute enough to get the full match - it's free money!</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200/50 rounded-xl p-6 shadow-lg">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">🎯</span>
            Maximum Strategy (2026, Age 50+)
          </h4>
          <div className="space-y-3 text-sm">
            {[
              { label: '401(k) with catch-up', amount: 31000 },
              { label: 'Roth IRA with catch-up', amount: 8000 },
              { label: 'HSA Family with catch-up', amount: 9550 },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-teal-200/50 last:border-0">
                <span className="text-gray-700">{item.label}</span>
                <span className="font-bold text-gray-900">${item.amount.toLocaleString()}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-3 mt-3 border-t-2 border-teal-300">
              <span className="font-bold text-gray-900 text-lg">Total Annual Max</span>
              <span className="font-bold text-teal-600 text-3xl">$48,550</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 rounded-xl p-6 shadow-lg">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-xl">📖</span>
          Income Limits for Roth IRA (2026)
        </h4>
        <div className="text-sm text-gray-700 space-y-2 leading-relaxed">
          <p><strong>Single filers:</strong> Phase-out begins at $146,000 MAGI, complete at $161,000</p>
          <p><strong>Married filing jointly:</strong> Phase-out begins at $230,000 MAGI, complete at $240,000</p>
          <p className="text-xs text-gray-600 mt-4 pt-3 border-t border-blue-200">
            <strong>Note:</strong> Traditional IRA contributions are always allowed, but tax deductibility may be limited if you're covered by a workplace retirement plan and exceed income thresholds. Consider a backdoor Roth IRA conversion if you're above the income limits.
          </p>
        </div>
      </div>
    </div>
  );
}
