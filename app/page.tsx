'use client';

import { useState } from 'react';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

type FireType = 'traditional' | 'coast' | 'barista' | 'lean' | 'fat';

export default function Home() {
  const [fireType, setFireType] = useState<FireType>('traditional');
  const [activeCalculator, setActiveCalculator] = useState<'fire-number' | 'coast' | 'projection' | 'withdrawal' | 'limits'>('fire-number');

  return (
    <main className="min-h-screen bg-white">
      {/* Professional Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🔥</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">FIRE Calculator</h1>
                <p className="text-sm text-gray-600">Financial Independence, Retire Early</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#calculator" className="text-gray-700 hover:text-teal-600 font-medium">Calculator</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium">How It Works</a>
              <a href="#resources" className="text-gray-700 hover:text-teal-600 font-medium">Resources</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plan Your Path to Financial Independence
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Calculate your FIRE number, project your timeline, and explore different early retirement strategies 
              with our comprehensive suite of calculators.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 border border-gray-200">
                ✓ Coast FIRE Calculator
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 border border-gray-200">
                ✓ Safe Withdrawal Rates
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 border border-gray-200">
                ✓ 401k/IRA Limits
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="calculator">
        {/* FIRE Type Selector */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your FIRE Strategy</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { type: 'traditional' as FireType, label: 'Traditional FIRE', desc: '25x expenses', icon: '🎯' },
              { type: 'coast' as FireType, label: 'Coast FIRE', desc: 'Stop contributing', icon: '🌊' },
              { type: 'barista' as FireType, label: 'Barista FIRE', desc: 'Part-time work', icon: '☕' },
              { type: 'lean' as FireType, label: 'Lean FIRE', desc: 'Minimal lifestyle', icon: '🥗' },
              { type: 'fat' as FireType, label: 'Fat FIRE', desc: 'Luxury retirement', icon: '💰' },
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => setFireType(item.type)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  fireType === item.type
                    ? 'border-teal-600 bg-teal-50 shadow-md'
                    : 'border-gray-200 hover:border-teal-300 hover:shadow-sm'
                }`}
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="font-semibold text-sm text-gray-900">{item.label}</div>
                <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Tabs */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex overflow-x-auto">
              {[
                { id: 'fire-number' as const, label: '🔢 FIRE Number' },
                { id: 'coast' as const, label: '🌊 Coast FIRE' },
                { id: 'projection' as const, label: '⏰ Time to FIRE' },
                { id: 'withdrawal' as const, label: '💵 Withdrawal Rate' },
                { id: 'limits' as const, label: '📊 401k/IRA Limits' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCalculator(tab.id)}
                  className={`px-6 py-4 font-medium whitespace-nowrap text-sm ${
                    activeCalculator === tab.id
                      ? 'border-b-2 border-teal-600 text-teal-600 bg-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8">
            {activeCalculator === 'fire-number' && <FireNumberCalculator fireType={fireType} />}
            {activeCalculator === 'coast' && <CoastFireCalculator />}
            {activeCalculator === 'projection' && <ProjectionCalculator />}
            {activeCalculator === 'withdrawal' && <WithdrawalCalculator />}
            {activeCalculator === 'limits' && <ContributionLimits />}
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8" id="how-it-works">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📚 How This Calculator Works</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>The 4% Rule:</strong> Our FIRE calculations are based on the Trinity Study, which found that 
                withdrawing 4% of your portfolio annually (adjusted for inflation) has historically had a 95%+ success 
                rate over 30-year periods.
              </p>
              <p>
                <strong>The 25x Rule:</strong> To retire, you need 25 times your annual expenses invested. This is 
                calculated as: Annual Expenses × 25 = FIRE Number.
              </p>
              <p>
                <strong>Coast FIRE:</strong> The point where your current investments will grow to your FIRE number 
                by traditional retirement age, even without additional contributions.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Important Considerations</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Market Volatility:</strong> Historical returns don't guarantee future results. Plan for 
                market downturns and have a withdrawal strategy for bear markets.
              </p>
              <p>
                <strong>Healthcare Costs:</strong> Before Medicare eligibility (age 65), healthcare can be expensive. 
                Factor in health insurance premiums and out-of-pocket costs.
              </p>
              <p>
                <strong>Inflation:</strong> All projections assume you'll adjust your withdrawals for inflation. 
                A $40,000 annual budget today might need to be $50,000+ in 10 years.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 border border-gray-200 rounded-xl p-8" id="resources">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🔗 Related FIRE Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="#calculator" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-gray-900 mb-1">Portfolio Analyzer</div>
              <div className="text-sm text-gray-600">Analyze your asset allocation and risk</div>
            </a>
            <a href="#calculator" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-2xl mb-2">💳</div>
              <div className="font-semibold text-gray-900 mb-1">Tax Strategy</div>
              <div className="text-sm text-gray-600">Optimize Roth vs Traditional accounts</div>
            </a>
            <a href="#calculator" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-2xl mb-2">🏠</div>
              <div className="font-semibold text-gray-900 mb-1">Housing Calculator</div>
              <div className="text-sm text-gray-600">Rent vs buy for early retirement</div>
            </a>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 pb-8">
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>Calculator last updated: February 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Based on Trinity Study research</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>No data collected or stored</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-200 pt-6 pb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h4 className="font-semibold text-amber-900 mb-2">⚠️ Disclaimer</h4>
            <p className="text-sm text-amber-800">
              This calculator is for educational and informational purposes only. It does not constitute financial advice. 
              All calculations are estimates based on historical data and assumptions. Past performance does not guarantee 
              future results. Please consult with a qualified financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

// FIRE Number Calculator with Chart
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

  // Generate projection data
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
      
      // Add monthly contributions and growth for the year
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
        <h3 className="text-3xl font-bold text-gray-900 mb-2">FIRE Number Calculator</h3>
        <p className="text-gray-600">Calculate how much you need to retire based on the {multiplier}x rule for {fireType} FIRE</p>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Annual Expenses
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  value={annualExpenses}
                  onChange={(e) => setAnnualExpenses(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-lg"
                  placeholder="40000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Current Savings
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-lg"
                  placeholder="100000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Monthly Contribution
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-lg"
                  placeholder="2000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Expected Annual Return
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.5"
                  value={returnRate}
                  onChange={(e) => setReturnRate(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-lg"
                  placeholder="7"
                />
                <span className="absolute right-4 top-3.5 text-gray-500 text-lg">%</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Progress to FIRE</span>
              <span className="text-sm font-bold text-teal-600">{progress.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-teal-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              ${(fireNumber - savings).toLocaleString('en-US', { maximumFractionDigits: 0 })} to go
            </p>
          </div>
        </div>

        {/* Right Column - Results & Chart */}
        <div className="space-y-6">
          {/* Big Result Box */}
          <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center">
              <div className="text-sm font-medium opacity-90 mb-2">Your {fireType.charAt(0).toUpperCase() + fireType.slice(1)} FIRE Number</div>
              <div className="text-5xl md:text-6xl font-bold mb-3">
                ${fireNumber.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-lg opacity-90 mb-1">
                Withdraw ${(fireNumber * (1/multiplier)).toLocaleString('en-US', { maximumFractionDigits: 0 })}/year
              </div>
              <div className="text-sm opacity-75">
                At {((1/multiplier) * 100).toFixed(2)}% safe withdrawal rate
              </div>
            </div>
          </div>

          {/* Timeline */}
          {yearsToFire > 0 && yearsToFire < 50 && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-700 mb-1">Estimated Time to FIRE</div>
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  {yearsToFire} years
                </div>
                <div className="text-sm text-gray-600">
                  With ${monthly.toLocaleString()}/month at {returnRate}% annual return
                </div>
              </div>
            </div>
          )}

          {/* Growth Chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Wealth Growth Projection</h4>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
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
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
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

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-xs text-gray-600 mb-1">Monthly Income</div>
              <div className="text-xl font-bold text-gray-900">
                ${((fireNumber * (1/multiplier)) / 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-xs text-gray-600 mb-1">Total Needed</div>
              <div className="text-xl font-bold text-gray-900">
                ${fireNumber.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Section */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-gray-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Understanding {fireType.charAt(0).toUpperCase() + fireType.slice(1)} FIRE</span>
        </h4>
        <p className="text-sm text-gray-700">
          {fireType === 'traditional' && 'Save 25x your annual expenses and withdraw 4% per year to maintain your lifestyle indefinitely. This is the most researched and proven FIRE strategy.'}
          {fireType === 'lean' && 'Minimize expenses and save 20x to retire early with a frugal lifestyle. Uses a 5% withdrawal rate which carries more risk but requires less capital.'}
          {fireType === 'fat' && 'Save 30x your annual expenses for a more comfortable retirement with extra cushion. The 3.33% withdrawal rate provides greater security and lifestyle flexibility.'}
          {fireType === 'coast' && 'Once you hit Coast FIRE, your investments grow to full FIRE without additional contributions. Perfect for career changes or sabbaticals.'}
          {fireType === 'barista' && 'Save enough to cover most expenses, then work part-time to cover healthcare and extras. Offers flexibility and social engagement while reducing financial stress.'}
        </p>
      </div>
    </div>
  );
}

// Keep the existing Coast FIRE, Projection, Withdrawal, and Limits calculators
// (They work fine, just update styling to match)

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
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Coast FIRE Calculator</h3>
        <p className="text-gray-600">When can you stop contributing and let compound interest do the work?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Current Age</label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Retirement Age</label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Current Savings ($)</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Target FIRE Number ($)</label>
          <input
            type="number"
            value={targetFireNumber}
            onChange={(e) => setTargetFireNumber(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-900 mb-2">Expected Return Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={returnRate}
            onChange={(e) => setReturnRate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      {hasReachedCoastFire ? (
        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 shadow-sm">
          <div className="text-center">
            <div className="text-5xl mb-3">🎉</div>
            <div className="text-3xl font-bold text-green-800 mb-3">You've Reached Coast FIRE!</div>
            <p className="text-green-700 mb-4">You can stop contributing and your current savings will grow to:</p>
            <div className="text-5xl font-bold text-green-800 mb-2">
              ${futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <p className="text-lg text-green-600">by age {retirementAge}</p>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl p-8 text-white shadow-lg">
          <div className="text-center">
            <div className="text-sm font-medium opacity-90 mb-2">Your Coast FIRE Number</div>
            <div className="text-5xl font-bold mb-4">
              ${coastFireNumber.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <p className="text-lg opacity-90 mb-6">Save this much to coast to your FIRE number</p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="text-sm opacity-75 mb-2">Current Progress</div>
              <div className="text-4xl font-bold mb-2">
                {((savings / coastFireNumber) * 100).toFixed(1)}%
              </div>
              <div className="text-sm opacity-75">
                ${(coastFireNumber - savings).toLocaleString('en-US', { maximumFractionDigits: 0 })} remaining
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-gray-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">📊 Projection</h4>
        <p className="text-sm text-gray-700">
          Your current <strong>${savings.toLocaleString('en-US', { maximumFractionDigits: 0 })}</strong> will grow to{' '}
          <strong>${futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</strong> in {years} years at {returnRate}% annual return, 
          assuming no additional contributions.
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
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Time to FIRE Projection</h3>
        <p className="text-gray-600">How long until you reach financial independence?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Current Savings ($)</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Monthly Contribution ($)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Target FIRE Number ($)</label>
          <input
            type="number"
            value={targetFireNumber}
            onChange={(e) => setTargetFireNumber(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Expected Return Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={returnRate}
            onChange={(e) => setReturnRate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl p-8 text-white shadow-lg">
        <div className="text-center">
          <div className="text-sm font-medium opacity-90 mb-2">Time Until FIRE</div>
          <div className="text-6xl font-bold mb-3">
            {yearsToFire > 0 && isFinite(yearsToFire)
              ? `${yearsToFire.toFixed(1)}`
              : 'N/A'}
          </div>
          <div className="text-2xl opacity-90 mb-2">years</div>
          {yearsToFire > 0 && isFinite(yearsToFire) && (
            <div className="text-sm opacity-75">
              That's approximately {Math.ceil(yearsToFire * 12)} months
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2">📈 Annual Contribution</h4>
          <div className="text-3xl font-bold text-teal-600">
            ${(monthly * 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
        </div>
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2">💰 Total Investment</h4>
          <div className="text-3xl font-bold text-blue-600">
            ${totalContributed.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">💡 Speed Up Your Timeline</h4>
        <p className="text-sm text-gray-700">
          Your savings rate is the #1 factor in reaching FIRE. A 50% savings rate means you can retire in ~17 years, 
          while a 70% savings rate gets you there in ~8.5 years. Focus on increasing income and reducing expenses!
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
    { rate: 3.0, description: 'Very Conservative', risk: 'Very Low', success: '99%+', color: 'from-green-500 to-green-600' },
    { rate: 3.5, description: 'Conservative', risk: 'Low', success: '97%+', color: 'from-green-400 to-green-500' },
    { rate: 4.0, description: 'Standard (Trinity Study)', risk: 'Low-Medium', success: '95%+', color: 'from-teal-500 to-blue-500' },
    { rate: 4.5, description: 'Moderate', risk: 'Medium', success: '90%+', color: 'from-yellow-400 to-yellow-500' },
    { rate: 5.0, description: 'Aggressive', risk: 'High', success: '80%+', color: 'from-orange-400 to-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Safe Withdrawal Rate Calculator</h3>
        <p className="text-gray-600">How much can you safely withdraw each year in retirement?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Portfolio Value ($)</label>
          <input
            type="number"
            value={portfolioValue}
            onChange={(e) => setPortfolioValue(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Withdrawal Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={withdrawalRate}
            onChange={(e) => setWithdrawalRate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl p-8 text-white shadow-lg">
        <div className="text-center">
          <div className="text-sm font-medium opacity-90 mb-2">Annual Withdrawal</div>
          <div className="text-6xl font-bold mb-4">
            ${annualWithdrawal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
          <div className="text-2xl opacity-90">
            ${monthlyWithdrawal.toLocaleString('en-US', { maximumFractionDigits: 0 })}<span className="text-lg">/month</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">📊 Withdrawal Rate Scenarios</h4>
        <div className="space-y-4">
          {scenarios.map((scenario) => {
            const amount = portfolio * (scenario.rate / 100);
            const isSelected = Math.abs(scenario.rate - parseFloat(withdrawalRate)) < 0.1;
            return (
              <div 
                key={scenario.rate} 
                className={`bg-white border-2 rounded-xl p-6 transition-all ${
                  isSelected ? 'border-teal-500 shadow-lg' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${scenario.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {scenario.rate}%
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">{scenario.description}</div>
                      <div className="text-sm text-gray-600">Risk: {scenario.risk}</div>
                      <div className="text-xs text-gray-500 mt-1">Historical Success Rate: {scenario.success}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-2xl text-gray-900">
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

      <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-gray-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">📚 Understanding the 4% Rule</h4>
        <p className="text-sm text-gray-700 mb-3">
          The <strong>Trinity Study</strong> (1998) analyzed historical market data and found that a 4% initial withdrawal rate, 
          adjusted annually for inflation, had a 95%+ success rate over 30-year retirement periods with a 60/40 stock/bond portfolio.
        </p>
        <p className="text-sm text-gray-700">
          <strong>Key factors:</strong> Lower withdrawal rates provide greater security but require more savings. 
          Higher rates increase risk of depleting your portfolio during market downturns. Consider your time horizon, 
          risk tolerance, and flexibility to adjust spending.
        </p>
      </div>
    </div>
  );
}

function ContributionLimits() {
  const limits2025 = {
    '401(k)': { limit: 23000, catchup: 7500, catchupAge: 50, icon: '🏢' },
    '403(b)': { limit: 23000, catchup: 7500, catchupAge: 50, icon: '🎓' },
    'Traditional IRA': { limit: 7000, catchup: 1000, catchupAge: 50, icon: '🏦' },
    'Roth IRA': { limit: 7000, catchup: 1000, catchupAge: 50, icon: '💎' },
    'HSA (Individual)': { limit: 4150, catchup: 1000, catchupAge: 55, icon: '🏥' },
    'HSA (Family)': { limit: 8300, catchup: 1000, catchupAge: 55, icon: '👨‍👩‍👧‍👦' },
  };

  const limits2026 = {
    '401(k)': { limit: 23500, catchup: 7500, catchupAge: 50, icon: '🏢' },
    '403(b)': { limit: 23500, catchup: 7500, catchupAge: 50, icon: '🎓' },
    'Traditional IRA': { limit: 7000, catchup: 1000, catchupAge: 50, icon: '🏦' },
    'Roth IRA': { limit: 7000, catchup: 1000, catchupAge: 50, icon: '💎' },
    'HSA (Individual)': { limit: 4300, catchup: 1000, catchupAge: 55, icon: '🏥' },
    'HSA (Family)': { limit: 8550, catchup: 1000, catchupAge: 55, icon: '👨‍👩‍👧‍👦' },
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">401(k)/IRA Contribution Limits</h3>
        <p className="text-gray-600">2025 & 2026 IRS contribution limits for retirement accounts</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 2025 Limits */}
        <div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>2025 Limits</span>
          </h4>
          <div className="space-y-4">
            {Object.entries(limits2025).map(([account, data]) => (
              <div key={account} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{data.icon}</div>
                  <div className="font-bold text-lg text-gray-900">{account}</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-600 text-xs mb-1">Standard Limit</div>
                    <div className="font-bold text-xl text-gray-900">
                      ${data.limit.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-600 text-xs mb-1">Catch-up ({data.catchupAge}+)</div>
                    <div className="font-bold text-xl text-gray-900">
                      ${data.catchup.toLocaleString()}
                    </div>
                  </div>
                  <div className="col-span-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-3">
                    <div className="text-gray-700 text-xs mb-1">Total with Catch-up</div>
                    <div className="font-bold text-2xl text-teal-600">
                      ${(data.limit + data.catchup).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2026 Limits */}
        <div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>2026 Limits</span>
            <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Current</span>
          </h4>
          <div className="space-y-4">
            {Object.entries(limits2026).map(([account, data]) => (
              <div key={account} className="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-400 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{data.icon}</div>
                  <div className="font-bold text-lg text-gray-900">{account}</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-gray-600 text-xs mb-1">Standard Limit</div>
                    <div className="font-bold text-xl text-gray-900">
                      ${data.limit.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-gray-600 text-xs mb-1">Catch-up ({data.catchupAge}+)</div>
                    <div className="font-bold text-xl text-gray-900">
                      ${data.catchup.toLocaleString()}
                    </div>
                  </div>
                  <div className="col-span-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-3">
                    <div className="text-gray-700 text-xs mb-1">Total with Catch-up</div>
                    <div className="font-bold text-2xl text-green-600">
                      ${(data.limit + data.catchup).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">💡 Pro Tips</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Stack them:</strong> You can contribute to 401(k) AND IRA in the same year</li>
            <li>• <strong>Roth vs Traditional:</strong> Roth = tax-free growth, Traditional = tax deduction now</li>
            <li>• <strong>HSA advantage:</strong> Triple tax benefit - deductible, grows tax-free, withdraws tax-free for medical</li>
            <li>• <strong>Employer match:</strong> Always contribute enough to get the full match - it's free money!</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">🎯 Maximum Strategy (2026, Age 50+)</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-teal-200">
              <span className="text-gray-700">401(k) with catch-up</span>
              <span className="font-bold text-gray-900">$31,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-teal-200">
              <span className="text-gray-700">Roth IRA with catch-up</span>
              <span className="font-bold text-gray-900">$8,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-teal-200">
              <span className="text-gray-700">HSA Family with catch-up</span>
              <span className="font-bold text-gray-900">$9,550</span>
            </div>
            <div className="flex justify-between pt-3 mt-2 border-t-2 border-teal-300">
              <span className="font-bold text-gray-900 text-lg">Total Annual Max</span>
              <span className="font-bold text-teal-600 text-2xl">$48,550</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">📖 Income Limits for Roth IRA (2026)</h4>
        <div className="text-sm text-gray-700 space-y-2">
          <p><strong>Single filers:</strong> Phase-out begins at $146,000 MAGI, complete at $161,000</p>
          <p><strong>Married filing jointly:</strong> Phase-out begins at $230,000 MAGI, complete at $240,000</p>
          <p className="text-xs text-gray-600 mt-3">
            Note: Traditional IRA contributions are always allowed, but tax deductibility may be limited if you're covered by a workplace retirement plan and exceed income thresholds.
          </p>
        </div>
      </div>
    </div>
  );
}
