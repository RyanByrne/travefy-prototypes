import { InsuranceCard } from './InsuranceCard'
import { MOCK_PROVIDERS, MOCK_PLANS } from './data'

export function StatesView() {
  const allianzProvider = MOCK_PROVIDERS.find((p) => p.id === 'allianz')!

  return (
    <div className="min-h-screen bg-travefy-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-travefy-navy mb-6">Insurance Card States</h1>
        <p className="text-sm text-travefy-gray-600 mb-8">
          All states of the insurance offer card, side by side for review.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Pre-quote</h3>
            <InsuranceCard
              provider={allianzProvider}
              state="pre-quote"
              travelerName="Elisa Denton"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Pre-quote condensed</h3>
            <InsuranceCard
              provider={allianzProvider}
              state="pre-quote-condensed"
              travelerName="Elisa Denton"
            />
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Quotes shown</h3>
            <InsuranceCard
              provider={allianzProvider}
              plans={MOCK_PLANS.allianz}
              state="quotes"
              selectedPlanId="onetrip-prime"
              onSelectPlan={() => {}}
              travelerName="Elisa Denton"
              travelerDetails="Mar 3, 1986 | Colorado | Trip cost $8,400"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Accepted collapsed</h3>
            <InsuranceCard
              provider={allianzProvider}
              state="accepted-collapsed"
              travelerName="Elisa Denton"
              acceptedPlan="OneTrip Prime"
              acceptedPrice={72}
              acceptedDate="May 11"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Declined collapsed</h3>
            <InsuranceCard
              provider={allianzProvider}
              state="declined-collapsed"
              travelerName="Elisa Denton"
              acceptedDate="May 11"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Purchased collapsed</h3>
            <InsuranceCard
              provider={allianzProvider}
              state="purchased-collapsed"
              policyNumber="ALZ-48213"
              acceptedPlan="OneTrip Prime"
              coverageStart="Jun 2, 2026"
              coverageEnd="Jun 14, 2026"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Logged out (CTA only)</h3>
            <InsuranceCard
              provider={allianzProvider}
              state="logged-out"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Locked (one accepted)</h3>
            <InsuranceCard
              provider={allianzProvider}
              state="pre-quote-condensed"
              locked={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
