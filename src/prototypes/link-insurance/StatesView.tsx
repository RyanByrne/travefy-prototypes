import { InsuranceCardFigma } from './InsuranceCardFigma'
import { MOCK_PROVIDERS, MOCK_PLANS } from './data'

export function StatesView() {
  const allianzProvider = MOCK_PROVIDERS.find((p) => p.id === 'allianz')!

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-gray-900 mb-6">Insurance Card States (v1)</h1>
        <p className="text-sm text-blue-gray-600 mb-8">
          All states of the insurance offer card, side by side for review.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-blue-gray-700 uppercase tracking-wide mb-3">Pre-quote</h3>
            <InsuranceCardFigma
              state="pre-quote"
              providerName={allianzProvider.name}
              providerTagline={allianzProvider.tagline}
              travelerName="Elisa Denton"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-gray-700 uppercase tracking-wide mb-3">Pre-quote condensed</h3>
            <InsuranceCardFigma
              state="pre-quote-condensed"
              providerName={allianzProvider.name}
              providerTagline={allianzProvider.tagline}
              travelerName="Elisa Denton"
            />
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-blue-gray-700 uppercase tracking-wide mb-3">Quotes shown</h3>
            <InsuranceCardFigma
              state="quotes"
              providerName={allianzProvider.name}
              providerTagline={allianzProvider.tagline}
              plans={MOCK_PLANS.allianz.map(p => ({
                id: p.id,
                name: p.name,
                cancellation: `Cancellation up to $${p.cancellationLimit.toLocaleString()}`,
                medical: `Medical $${p.medicalLimit.toLocaleString()}`,
                baggage: p.baggageLimit ? `Baggage $${p.baggageLimit.toLocaleString()}` : undefined,
                price: p.price
              }))}
              selectedPlanId="onetrip-prime"
              onSelectPlan={() => {}}
              travelerName="Elisa Denton"
              travelerDetails="Mar 3, 1986 | Colorado | Trip cost $8,400"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-gray-700 uppercase tracking-wide mb-3">Accepted collapsed</h3>
            <InsuranceCardFigma
              state="accepted-collapsed"
              providerName={allianzProvider.name}
              providerTagline={allianzProvider.tagline}
              travelerName="Elisa Denton"
              acceptedPlan="OneTrip Prime"
              acceptedPrice={72}
              acceptedDate="May 11"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-gray-700 uppercase tracking-wide mb-3">Declined collapsed</h3>
            <InsuranceCardFigma
              state="declined-collapsed"
              providerName={allianzProvider.name}
              providerTagline={allianzProvider.tagline}
              travelerName="Elisa Denton"
              acceptedDate="May 11, 14:02"
            />
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-blue-gray-700 uppercase tracking-wide mb-3">Purchased collapsed</h3>
            <InsuranceCardFigma
              state="purchased-collapsed"
              providerName={allianzProvider.name}
              providerTagline={allianzProvider.tagline}
              travelerName="Elisa Denton"
              acceptedPlan="OneTrip Prime"
              acceptedPrice={72}
              policyNumber="ALZ-48213"
              coverageStart="Jun 2"
              coverageEnd="Jun 14"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
