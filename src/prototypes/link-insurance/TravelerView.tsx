import { useState } from 'react'
import { InsuranceCard } from './InsuranceCard'
import { MOCK_PROVIDERS, MOCK_PLANS, MOCK_TRIP } from './data'
import type { CardState } from './InsuranceCard'

export function TravelerView() {
  const [allianzState, setAllianzState] = useState<CardState>('pre-quote')
  const [medjetState, setMedjetState] = useState<CardState>('pre-quote-condensed')
  const [allianzSelectedPlan, setAllianzSelectedPlan] = useState('')
  const [medjetSelectedPlan, setMedjetSelectedPlan] = useState('')
  const [acceptedProvider, setAcceptedProvider] = useState<string | null>(null)

  const allianzProvider = MOCK_PROVIDERS.find((p) => p.id === 'allianz')!
  const medjetProvider = MOCK_PROVIDERS.find((p) => p.id === 'medjet')!

  const handleAllianzGetQuote = () => {
    setAllianzState('quotes')
  }

  const handleAllianzContinue = () => {
    setAllianzState('accepted-collapsed')
    setAcceptedProvider('allianz')
    setMedjetState('pre-quote-condensed')
  }

  const handleMedjetGetQuote = () => {
    setMedjetState('quotes')
  }

  const handleMedjetContinue = () => {
    setMedjetState('accepted-collapsed')
    setAcceptedProvider('medjet')
    setAllianzState('pre-quote-condensed')
  }

  const handleAllianzChangeDecision = () => {
    setAllianzState('quotes')
    setAcceptedProvider(null)
    setMedjetState('pre-quote-condensed')
  }

  const handleMedjetChangeDecision = () => {
    setMedjetState('quotes')
    setAcceptedProvider(null)
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
    <div className="min-h-screen bg-travefy-gray-50">
      <div className="bg-white border-b border-travefy-gray-200 px-6 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-travefy-gray-500">
            <span>Viewing as:</span>
            <select className="border border-travefy-gray-200 rounded px-2 py-1 text-travefy-gray-900">
              <option>Elisa Denton</option>
              <option>Jack Hawthorne</option>
              <option>Tom Rivera</option>
            </select>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-6">
          <div className="relative h-48 bg-gradient-to-br from-travefy-blue to-travefy-blue-dark overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=400&fit=crop"
              alt="Trip"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-90">{MOCK_TRIP.dates}</p>
              <h1 className="text-2xl font-bold mt-1">{MOCK_TRIP.name}</h1>
            </div>
          </div>

          <div className="p-6 border-b border-travefy-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-travefy-blue-light flex items-center justify-center text-travefy-blue font-semibold">
                AN
              </div>
              <div>
                <h2 className="font-semibold text-travefy-navy">{MOCK_TRIP.advisor.name}</h2>
                <p className="text-sm text-travefy-gray-600">{MOCK_TRIP.advisor.title}</p>
                <p className="text-sm text-travefy-gray-600">{MOCK_TRIP.advisor.agency}</p>
              </div>
              <div className="ml-auto">
                <a
                  href={`mailto:${MOCK_TRIP.advisor.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-travefy-gray-200 rounded hover:bg-travefy-gray-50 text-travefy-gray-700 font-semibold"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-travefy-navy mb-4">Travel insurance options for this trip</h3>
            
            <div className="space-y-4">
              <InsuranceCard
                provider={allianzProvider}
                plans={MOCK_PLANS.allianz}
                state={allianzState}
                onGetQuote={handleAllianzGetQuote}
                onDecline={() => handleDecline('allianz')}
                onContinue={handleAllianzContinue}
                onChangeDecision={handleAllianzChangeDecision}
                selectedPlanId={allianzSelectedPlan}
                onSelectPlan={setAllianzSelectedPlan}
                travelerName="Elisa Denton"
                travelerDetails="Mar 3, 1986 | Colorado | Trip cost $8,400"
                acceptedPlan="OneTrip Prime"
                acceptedPrice={72}
                acceptedDate="May 11"
                locked={acceptedProvider === 'medjet'}
              />

              <InsuranceCard
                provider={medjetProvider}
                plans={MOCK_PLANS.medjet}
                state={medjetState}
                onGetQuote={handleMedjetGetQuote}
                onDecline={() => handleDecline('medjet')}
                onContinue={handleMedjetContinue}
                onChangeDecision={handleMedjetChangeDecision}
                selectedPlanId={medjetSelectedPlan}
                onSelectPlan={setMedjetSelectedPlan}
                travelerName="Elisa Denton"
                travelerDetails="Mar 3, 1986 | Colorado | Trip cost $8,400"
                acceptedPlan="Medjet Horizon"
                acceptedPrice={52}
                acceptedDate="May 11"
                locked={acceptedProvider === 'allianz'}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-travefy-gray-200">
          <h3 className="text-lg font-semibold text-travefy-navy mb-2">INFORMATION & DOCUMENTS</h3>
          <p className="text-sm text-travefy-gray-700 leading-relaxed">
            Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
          </p>
          <div className="mt-4 pt-4 border-t border-travefy-gray-100">
            <h4 className="font-semibold text-travefy-navy mb-2">ARRIVAL IN PARIS · Aug 9</h4>
          </div>
        </div>
      </main>
    </div>
  )
}
