import { useState } from 'react'
import { InsuranceCardFigma, type CardState } from './InsuranceCardFigma'
import { MOCK_PROVIDERS, MOCK_PLANS, MOCK_TRIP } from './data'

export function TravelerView() {
  const [allianzState, setAllianzState] = useState<CardState>('pre-quote')
  const [medjetState, setMedjetState] = useState<CardState>('pre-quote-condensed')
  const [allianzSelectedPlan, setAllianzSelectedPlan] = useState('')
  const [medjetSelectedPlan, setMedjetSelectedPlan] = useState('')

  const allianzProvider = MOCK_PROVIDERS.find((p) => p.id === 'allianz')!
  const medjetProvider = MOCK_PROVIDERS.find((p) => p.id === 'medjet')!
  const travelerDetails = 'Mar 3, 1986 | Colorado | Trip cost $8,400'

  const handleAllianzGetQuote = () => {
    setAllianzState('quotes')
  }

  const handleAllianzContinue = () => {
    setAllianzState('accepted-collapsed')
    setMedjetState('pre-quote-condensed')
  }

  const handleMedjetGetQuote = () => {
    setMedjetState('quotes')
  }

  const handleMedjetContinue = () => {
    setMedjetState('accepted-collapsed')
    setAllianzState('pre-quote-condensed')
  }

  const handleAllianzChangeDecision = () => {
    setAllianzState('quotes')
    setMedjetState('pre-quote-condensed')
  }

  const handleMedjetChangeDecision = () => {
    setMedjetState('quotes')
    setAllianzState('pre-quote-condensed')
  }

  const handleDecline = (provider: 'allianz' | 'medjet') => {
    if (provider === 'allianz') {
      setAllianzState('declined-collapsed')
    } else {
      setMedjetState('declined-collapsed')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-1.5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-1.5 text-base text-blue-gray-600 px-4">
            <span>Viewing as</span>
            <select className="border-0 bg-transparent font-semibold text-blue-gray-900 py-3 pr-8 cursor-pointer">
              <option>Elisa Denton</option>
              <option>Jack Hawthorne</option>
              <option>Tom Rivera</option>
            </select>
          </div>
        </div>
      </div>

      <main className="max-w-[1376px] mx-auto px-32 py-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          {/* Hero image */}
          <div className="relative h-[240px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&h=500&fit=crop"
              alt="Trip"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-normal leading-relaxed mb-1">{MOCK_TRIP.dates}</p>
              <h1 className="text-3xl font-normal leading-tight">{MOCK_TRIP.name}</h1>
            </div>
          </div>

          {/* Advisor card */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-primary-100 flex items-center justify-center text-primary-600 font-semibold shrink-0">
                AN
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-blue-gray-900 text-base leading-relaxed">{MOCK_TRIP.advisor.name}</h2>
                <p className="text-sm text-blue-gray-600 leading-tight">{MOCK_TRIP.advisor.title}</p>
                <p className="text-sm text-blue-gray-600 leading-tight">{MOCK_TRIP.advisor.agency}</p>
              </div>
              <a
                href={`mailto:${MOCK_TRIP.advisor.email}`}
                className="px-4 py-2 text-sm font-semibold text-primary-600 border border-gray-200 rounded hover:bg-gray-50 leading-tight"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Insurance section */}
          <div className="px-6 py-5">
            <h3 className="text-lg font-semibold text-blue-gray-900 mb-4 leading-relaxed">Travel insurance options for this trip</h3>
            
            <div className="space-y-4 max-w-[632px]">
              <InsuranceCardFigma
                state={allianzState as CardState}
                providerName={allianzProvider.name}
                providerTagline={allianzProvider.tagline}
                travelerName="Elisa Denton"
                travelerDetails={travelerDetails}
                plans={MOCK_PLANS.allianz.map(p => ({
                  id: p.id,
                  name: p.name,
                  cancellation: `Cancellation up to $${p.cancellationLimit.toLocaleString()}`,
                  medical: `Medical $${p.medicalLimit.toLocaleString()}`,
                  baggage: p.baggageLimit ? `Baggage $${p.baggageLimit.toLocaleString()}` : undefined,
                  price: p.price
                }))}
                selectedPlanId={allianzSelectedPlan}
                onSelectPlan={setAllianzSelectedPlan}
                onGetQuote={handleAllianzGetQuote}
                onDecline={() => handleDecline('allianz')}
                onContinue={handleAllianzContinue}
                onChangeDecision={handleAllianzChangeDecision}
                acceptedPlan="OneTrip Prime"
                acceptedPrice={72}
                acceptedDate="May 11"
              />

              <InsuranceCardFigma
                state={medjetState as CardState}
                providerName={medjetProvider.name}
                providerTagline={medjetProvider.tagline}
                travelerName="Elisa Denton"
                travelerDetails={travelerDetails}
                plans={MOCK_PLANS.medjet.map(p => ({
                  id: p.id,
                  name: p.name,
                  cancellation: `Cancellation up to $${p.cancellationLimit.toLocaleString()}`,
                  medical: `Medical $${p.medicalLimit.toLocaleString()}`,
                  price: p.price
                }))}
                selectedPlanId={medjetSelectedPlan}
                onSelectPlan={setMedjetSelectedPlan}
                onGetQuote={handleMedjetGetQuote}
                onDecline={() => handleDecline('medjet')}
                onContinue={handleMedjetContinue}
                onChangeDecision={handleMedjetChangeDecision}
                acceptedPlan="Medjet Horizon"
                acceptedPrice={52}
                acceptedDate="May 11"
              />
            </div>
          </div>
        </div>

        {/* Itinerary content */}
        <div className="bg-white rounded-lg p-6 mt-4 shadow-md">
          <h3 className="text-lg font-semibold text-blue-gray-900 mb-3 leading-relaxed uppercase text-sm">INFORMATION & DOCUMENTS</h3>
          <p className="text-sm text-blue-gray-700 leading-relaxed">
            Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-bold text-blue-gray-900 uppercase leading-tight">ARRIVAL IN PARIS · Aug 9</h4>
          </div>
        </div>
      </main>
    </div>
  )
}
