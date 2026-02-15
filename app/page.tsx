'use client';

import { useState } from 'react';

type FireType = 'traditional' | 'coast' | 'barista' | 'lean' | 'fat';

export default function Home() {
  const [fireType, setFireType] = useState<FireType>('traditional');
  const [activeCalculator, setActiveCalculator] = useState<'fire-number' | 'coast' | 'projection' | 'withdrawal' | 'limits'>('fire-number');

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">🔥 FIRE Calculator</h1>
          <p className="text-gray-600 mt-1">Financial Independence, Retire Early - Plan Your Journey</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* FIRE Type Selector */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Choose Your FIRE Path</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { type: 'traditional' as FireType, label: 'Traditional FIRE', desc: '25x expenses' },
              { type: 'coast' as FireType, label: 'Coast FIRE', desc: 'Stop contributing' },
              { type: 'barista' as FireType, label: 'Barista FIRE', desc: 'Part-time work' },
              { type: 'lean' as FireType, label: 'Lean FIRE', desc: 'Minimal lifestyle' },
              { type: 'fat' as FireType, label: 'Fat FIRE', desc: 'Luxury retirement' },
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => setFireType(item.type)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  fireType === item.type
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="font-semibold text-sm">{item.label}</div>
                <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Tabs */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                { id: 'fire-number' as const, label: 'FIRE Number' },
                { id: 'coast' as const, label: 'Coast FIRE' },
                { id: 'projection' as const, label: 'Time to FIRE' },
                { id: 'withdrawal' as const, label: 'Withdrawal Rate' },
                { id: 'limits' as const, label: '401k/IRA Limits' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCalculator(tab.id)}
                  className={`px-6 py-4 font-medium whitespace-nowrap ${
                    activeCalculator === tab.id
                      ? 'border-b-2 border-indigo-600 text-indigo-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeCalculator === 'fire-number' && <FireNumberCalculator fireType={fireType} />}
            {activeCalculator === 'coast' && <CoastFireCalculator />}
            {activeCalculator === 'projection' && <ProjectionCalculator />}
            {activeCalculator === 'withdrawal' && <WithdrawalCalculator />}
            {activeCalculator === 'limits' && <ContributionLimits />}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 text-sm mt-8">
          <p>🔥 Built for the FIRE community. All calculations are estimates. Consult a financial advisor for personalized advice.</p>
        </footer>
      </div>
    </main>
  );
}

// FIRE Number Calculator
function FireNumberCalculator({ fireType }: { fireType: FireType }) {
  const [annualExpenses, setAnnualExpenses] = useState<string>('40000');
  const [multiplier, setMultiplier] = useState<number>(25);

  const expenses = parseFloat(annualExpenses) || 0;
  const fireNumber = expenses * multiplier;

  const getMultiplier = () => {
    switch (fireType) {
      case 'lean': return 20;
      case 'fat': return 30;
      default: return 25;
    }
  };

  const currentMultiplier = getMultiplier();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">FIRE Number Calculator</h3>
        <p className="text-gray-600">Calculate how much you need to retire based on the {currentMultiplier}x rule</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Expenses
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">$</span>
            <input
              type="number"
              value={annualExpenses}
              onChange={(e) => setAnnualExpenses(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="40000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Withdrawal Rate
          </label>
          <select
            value={multiplier}
            onChange={(e) => setMultiplier(parseFloat(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="20">5% (20x) - Aggressive</option>
            <option value="25">4% (25x) - Standard</option>
            <option value="30">3.33% (30x) - Conservative</option>
            <option value="33">3% (33x) - Very Conservative</option>
          </select>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">
            ${fireNumber.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
          <div className="text-lg opacity-90">Your {fireType.toUpperCase()} FIRE Number</div>
          <div className="text-sm opacity-75 mt-2">
            At {((1/multiplier) * 100).toFixed(2)}% withdrawal rate
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">💡 Understanding {fireType.toUpperCase()} FIRE</h4>
        <p className="text-sm text-gray-700">
          {fireType === 'traditional' && 'Save 25x your annual expenses and withdraw 4% per year to maintain your lifestyle indefinitely.'}
          {fireType === 'lean' && 'Minimize expenses and save 20x to retire early with a frugal lifestyle (higher withdrawal rate = more risk).'}
          {fireType === 'fat' && 'Save 30x your annual expenses for a more comfortable retirement with extra cushion.'}
          {fireType === 'coast' && 'Once you hit Coast FIRE, your investments grow to full FIRE without additional contributions.'}
          {fireType === 'barista' && 'Save enough to cover most expenses, then work part-time to cover healthcare and extras.'}
        </p>
      </div>
    </div>
  );
}

// Coast FIRE Calculator
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
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Coast FIRE Calculator</h3>
        <p className="text-gray-600">When can you stop contributing and let compound interest do the work?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Age</label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Retirement Age</label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings ($)</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Target FIRE Number ($)</label>
          <input
            type="number"
            value={targetFireNumber}
            onChange={(e) => setTargetFireNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={returnRate}
            onChange={(e) => setReturnRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {hasReachedCoastFire ? (
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🎉</div>
            <div className="text-2xl font-bold text-green-800 mb-2">You've Reached Coast FIRE!</div>
            <p className="text-green-700">You can stop contributing and your current savings will grow to:</p>
            <div className="text-3xl font-bold text-green-800 mt-3">
              ${futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <p className="text-sm text-green-600 mt-2">by age {retirementAge}</p>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
          <div className="text-center">
            <div className="text-xl font-semibold text-gray-800 mb-3">Coast FIRE Number</div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              ${coastFireNumber.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <p className="text-gray-700 mb-4">You need to save this much to coast to your FIRE number</p>
            <div className="bg-white rounded-lg p-4">
              <div className="text-sm text-gray-600">You're currently at:</div>
              <div className="text-2xl font-bold text-gray-800">
                {((savings / coastFireNumber) * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600 mt-1">
                ${(coastFireNumber - savings).toLocaleString('en-US', { maximumFractionDigits: 0 })} to go
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-yellow-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">📊 Projection</h4>
        <p className="text-sm text-gray-700">
          Your current ${savings.toLocaleString('en-US', { maximumFractionDigits: 0 })} will grow to <strong>${futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</strong> in {years} years at {returnRate}% annual return.
        </p>
      </div>
    </div>
  );
}

// Time to FIRE Projection Calculator
function ProjectionCalculator() {
  const [currentSavings, setCurrentSavings] = useState<string>('100000');
  const [monthlyContribution, setMonthlyContribution] = useState<string>('3000');
  const [targetFireNumber, setTargetFireNumber] = useState<string>('1000000');
  const [returnRate, setReturnRate] = useState<string>('7');

  const savings = parseFloat(currentSavings) || 0;
  const monthly = parseFloat(monthlyContribution) || 0;
  const target = parseFloat(targetFireNumber) || 0;
  const rate = parseFloat(returnRate) / 100 || 0;

  // Calculate years to FIRE using compound interest formula
  const monthlyRate = rate / 12;
  const yearsToFire = monthly > 0
    ? Math.log((target * monthlyRate + monthly) / (savings * monthlyRate + monthly)) / Math.log(1 + monthlyRate) / 12
    : Math.log(target / savings) / Math.log(1 + rate);

  const savingsRate = monthly > 0 ? (monthly / (monthly + 3000)) * 100 : 0; // Rough estimate

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Time to FIRE Projection</h3>
        <p className="text-gray-600">How long until you reach financial independence?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings ($)</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Contribution ($)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Target FIRE Number ($)</label>
          <input
            type="number"
            value={targetFireNumber}
            onChange={(e) => setTargetFireNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={returnRate}
            onChange={(e) => setReturnRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-8 text-white">
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">
            {yearsToFire > 0 && isFinite(yearsToFire)
              ? `${yearsToFire.toFixed(1)} years`
              : 'N/A'}
          </div>
          <div className="text-lg opacity-90">Until You Reach FIRE</div>
          {yearsToFire > 0 && isFinite(yearsToFire) && (
            <div className="text-sm opacity-75 mt-2">
              That's {Math.ceil(yearsToFire * 12)} months
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">📈 Annual Contribution</h4>
          <div className="text-2xl font-bold text-indigo-600">
            ${(monthly * 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">💰 Total Contributions</h4>
          <div className="text-2xl font-bold text-green-600">
            ${((monthly * 12 * yearsToFire) + savings).toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">💡 Pro Tip</h4>
        <p className="text-sm text-gray-700">
          Your savings rate is the #1 factor in reaching FIRE. A 50% savings rate means you can retire in ~17 years. 
          Increase your monthly contributions to speed up your timeline!
        </p>
      </div>
    </div>
  );
}

// Safe Withdrawal Rate Calculator
function WithdrawalCalculator() {
  const [portfolioValue, setPortfolioValue] = useState<string>('1000000');
  const [withdrawalRate, setWithdrawalRate] = useState<string>('4');

  const portfolio = parseFloat(portfolioValue) || 0;
  const rate = parseFloat(withdrawalRate) / 100 || 0;

  const annualWithdrawal = portfolio * rate;
  const monthlyWithdrawal = annualWithdrawal / 12;

  const scenarios = [
    { rate: 3.0, description: 'Very Conservative', risk: 'Low', color: 'bg-green-500' },
    { rate: 3.5, description: 'Conservative', risk: 'Low-Medium', color: 'bg-green-400' },
    { rate: 4.0, description: 'Standard (Trinity Study)', risk: 'Medium', color: 'bg-blue-500' },
    { rate: 4.5, description: 'Moderate', risk: 'Medium-High', color: 'bg-yellow-500' },
    { rate: 5.0, description: 'Aggressive', risk: 'High', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Safe Withdrawal Rate Calculator</h3>
        <p className="text-gray-600">How much can you safely withdraw each year?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Value ($)</label>
          <input
            type="number"
            value={portfolioValue}
            onChange={(e) => setPortfolioValue(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Withdrawal Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={withdrawalRate}
            onChange={(e) => setWithdrawalRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
        <div className="text-center">
          <div className="text-lg opacity-90 mb-2">Annual Withdrawal</div>
          <div className="text-5xl font-bold mb-4">
            ${annualWithdrawal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
          <div className="text-xl opacity-90">
            ${monthlyWithdrawal.toLocaleString('en-US', { maximumFractionDigits: 0 })}/month
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">📊 Withdrawal Rate Scenarios</h4>
        <div className="space-y-3">
          {scenarios.map((scenario) => {
            const amount = portfolio * (scenario.rate / 100);
            return (
              <div key={scenario.rate} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${scenario.color}`}></div>
                    <div>
                      <div className="font-semibold">{scenario.rate}% - {scenario.description}</div>
                      <div className="text-xs text-gray-600">Risk Level: {scenario.risk}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">
                      ${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}/year
                    </div>
                    <div className="text-sm text-gray-600">
                      ${(amount / 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}/month
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">📚 The 4% Rule (Trinity Study)</h4>
        <p className="text-sm text-gray-700">
          The Trinity Study found that a 4% withdrawal rate has historically had a 95%+ success rate over 30-year periods 
          (60/40 stock/bond portfolio). Lower rates = safer, higher rates = more risk of running out of money.
        </p>
      </div>
    </div>
  );
}

// Contribution Limits Reference
function ContributionLimits() {
  const limits2025 = {
    '401k': { limit: 23000, catchup: 7500, catchupAge: 50 },
    '403b': { limit: 23000, catchup: 7500, catchupAge: 50 },
    'Traditional IRA': { limit: 7000, catchup: 1000, catchupAge: 50 },
    'Roth IRA': { limit: 7000, catchup: 1000, catchupAge: 50 },
    'HSA (Individual)': { limit: 4150, catchup: 1000, catchupAge: 55 },
    'HSA (Family)': { limit: 8300, catchup: 1000, catchupAge: 55 },
  };

  const limits2026 = {
    '401k': { limit: 23500, catchup: 7500, catchupAge: 50 },
    '403b': { limit: 23500, catchup: 7500, catchupAge: 50 },
    'Traditional IRA': { limit: 7000, catchup: 1000, catchupAge: 50 },
    'Roth IRA': { limit: 7000, catchup: 1000, catchupAge: 50 },
    'HSA (Individual)': { limit: 4300, catchup: 1000, catchupAge: 55 },
    'HSA (Family)': { limit: 8550, catchup: 1000, catchupAge: 55 },
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">401k/IRA Contribution Limits</h3>
        <p className="text-gray-600">2025 & 2026 contribution limits for retirement accounts</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 2025 Limits */}
        <div>
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>2025 Limits</span>
          </h4>
          <div className="space-y-3">
            {Object.entries(limits2025).map(([account, data]) => (
              <div key={account} className="bg-blue-50 rounded-lg p-4">
                <div className="font-semibold text-lg mb-2">{account}</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-gray-600">Standard Limit</div>
                    <div className="font-bold text-indigo-600">
                      ${data.limit.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600">Catch-up (age {data.catchupAge}+)</div>
                    <div className="font-bold text-purple-600">
                      ${data.catchup.toLocaleString()}
                    </div>
                  </div>
                  <div className="col-span-2 mt-1 pt-2 border-t border-blue-200">
                    <div className="text-gray-600">Total with Catch-up</div>
                    <div className="font-bold text-xl text-indigo-700">
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
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>2026 Limits</span>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Updated</span>
          </h4>
          <div className="space-y-3">
            {Object.entries(limits2026).map(([account, data]) => (
              <div key={account} className="bg-green-50 rounded-lg p-4">
                <div className="font-semibold text-lg mb-2">{account}</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-gray-600">Standard Limit</div>
                    <div className="font-bold text-green-600">
                      ${data.limit.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600">Catch-up (age {data.catchupAge}+)</div>
                    <div className="font-bold text-purple-600">
                      ${data.catchup.toLocaleString()}
                    </div>
                  </div>
                  <div className="col-span-2 mt-1 pt-2 border-t border-green-200">
                    <div className="text-gray-600">Total with Catch-up</div>
                    <div className="font-bold text-xl text-green-700">
                      ${(data.limit + data.catchup).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">💡 Pro Tips</h4>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>• <strong>401k + IRA:</strong> You can contribute to BOTH in the same year</li>
          <li>• <strong>Roth vs Traditional:</strong> Roth = tax-free growth, Traditional = tax deduction now</li>
          <li>• <strong>HSA Triple Tax Advantage:</strong> Tax-deductible, tax-free growth, tax-free withdrawals for medical expenses</li>
          <li>• <strong>Maximize employer match first:</strong> That's free money!</li>
        </ul>
      </div>

      <div className="bg-indigo-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">🎯 Max Contribution Strategy (2026)</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>401k (with catch-up)</span>
            <span className="font-bold">$31,000</span>
          </div>
          <div className="flex justify-between">
            <span>Roth IRA (with catch-up)</span>
            <span className="font-bold">$8,000</span>
          </div>
          <div className="flex justify-between">
            <span>HSA Family (with catch-up)</span>
            <span className="font-bold">$9,550</span>
          </div>
          <div className="border-t-2 border-indigo-200 pt-2 mt-2 flex justify-between text-lg">
            <span className="font-semibold">Total Annual Max</span>
            <span className="font-bold text-indigo-600">$48,550</span>
          </div>
        </div>
      </div>
    </div>
  );
}
