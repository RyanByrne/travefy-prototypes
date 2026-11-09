import { clsx } from 'clsx'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Badge, RadioOption } from '../../shared/components'
import type { InsurancePlan, Provider } from './data'

export type CardState = 'pre-quote' | 'pre-quote-condensed' | 'quotes' | 'accepted-collapsed' | 'declined-collapsed' | 'purchased-collapsed' | 'logged-out'

interface InsuranceCardProps {
  provider: Provider
  plans?: InsurancePlan[]
  state: CardState
  onGetQuote?: () => void
  onDecline?: () => void
  onContinue?: (planId: string) => void
  onChangeDecision?: () => void
  onViewPolicy?: () => void
  onExpand?: () => void
  selectedPlanId?: string
  onSelectPlan?: (planId: string) => void
  travelerName?: string
  travelerDetails?: string
  acceptedPlan?: string
  acceptedPrice?: number
  acceptedDate?: string
  policyNumber?: string
  coverageStart?: string
  coverageEnd?: string
  locked?: boolean
  className?: string
}

export function InsuranceCard({
  provider,
  plans,
  state,
  onGetQuote,
  onDecline,
  onContinue,
  onChangeDecision,
  onViewPolicy,
  onExpand,
  selectedPlanId,
  onSelectPlan,
  travelerName,
  travelerDetails,
  acceptedPlan,
  acceptedPrice,
  acceptedDate,
  policyNumber,
  coverageStart,
  coverageEnd,
  locked,
  className,
}: InsuranceCardProps) {
  const [expanded, setExpanded] = useState(state === 'quotes')

  const handleToggle = () => {
    setExpanded(!expanded)
    onExpand?.()
  }

  const isCollapsed = state.includes('collapsed')
  const showChevron = isCollapsed || state === 'pre-quote-condensed'

  return (
    <div
      className={clsx(
        'border rounded-lg bg-white',
        locked ? 'opacity-50' : '',
        className
      )}
    >
      <div className="flex items-start gap-4 p-4 border-b border-travefy-gray-100">
        <div className="flex items-center justify-center w-20 h-14 border-2 border-dashed border-travefy-gray-300 rounded text-xs text-travefy-gray-400 font-semibold">
          PROVIDER LOGO
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-travefy-navy">{provider.name}</h3>
              {provider.tagline && (
                <p className="text-sm text-travefy-gray-600 mt-0.5">{provider.tagline}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              {state === 'purchased-collapsed' && (
                <Badge variant="success" size="sm">Purchased</Badge>
              )}
              {state === 'accepted-collapsed' && (
                <Badge className="bg-travefy-indigo-bg border-travefy-indigo-border text-travefy-indigo-dark" size="sm">Accepted</Badge>
              )}
              {state === 'declined-collapsed' && (
                <Badge variant="danger" size="sm">Declined</Badge>
              )}
              {showChevron && (
                <button
                  onClick={handleToggle}
                  className="p-1 text-travefy-gray-400 hover:text-travefy-gray-600"
                  aria-label={expanded ? 'Collapse' : 'Expand'}
                  disabled={locked}
                >
                  {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {!isCollapsed && !expanded && state === 'pre-quote-condensed' && (
        <div className="p-4 flex items-center justify-between">
          <p className="text-sm text-travefy-gray-600">Choose one option, or decline</p>
          <div className="flex gap-2">
            <button onClick={onDecline} className="px-4 py-2 text-sm border border-travefy-gray-200 rounded hover:bg-travefy-gray-50 text-travefy-gray-700 font-semibold">
              Decline
            </button>
            <button onClick={handleToggle} className="px-4 py-2 text-sm bg-travefy-blue text-white rounded hover:bg-travefy-blue-dark font-semibold">
              See plans
            </button>
          </div>
        </div>
      )}

      {isCollapsed && !expanded && (
        <div className="p-4">
          {state === 'purchased-collapsed' && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-travefy-gray-600">Policy {policyNumber}</span>
                <span className="text-travefy-gray-900 font-medium">{acceptedPlan}</span>
              </div>
              <div className="text-sm text-travefy-gray-600">
                Coverage: {coverageStart} to {coverageEnd}
              </div>
              <button onClick={onViewPolicy} className="text-sm text-travefy-blue hover:underline font-semibold">
                View policy
              </button>
            </div>
          )}
          {state === 'accepted-collapsed' && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-travefy-gray-900 font-medium">{acceptedPlan}</span>
                <span className="text-travefy-gray-900 font-semibold">${acceptedPrice}</span>
              </div>
              <div className="text-sm text-travefy-gray-600">
                Accepted {acceptedDate} by {travelerName}. Not covered until purchased
              </div>
              <button onClick={onChangeDecision} className="text-sm text-travefy-blue hover:underline font-semibold">
                Change decision
              </button>
            </div>
          )}
          {state === 'declined-collapsed' && (
            <div className="space-y-2">
              <div className="text-sm text-travefy-gray-600">
                Declined {acceptedDate} by {travelerName}
              </div>
              <button onClick={onChangeDecision} className="text-sm text-travefy-blue hover:underline font-semibold">
                Change your mind?
              </button>
            </div>
          )}
        </div>
      )}

      {(state === 'pre-quote' || (state === 'pre-quote-condensed' && expanded)) && (
        <div className="p-4">
          <h4 className="font-semibold text-travefy-navy mb-2">Add travel protection?</h4>
          <p className="text-sm text-travefy-gray-700 mb-3">
            Your advisor shared a travel protection offer for this trip. Get a quote to see plans and prices for your details, or decline.
          </p>
          <p className="text-xs text-travefy-gray-500 mb-4">
            Plans can include trip cancellation, medical and baggage cover.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-travefy-gray-600">Your decision is saved with your name and the time.</p>
            <div className="flex gap-2">
              <button onClick={onDecline} className="px-4 py-2 text-sm border border-travefy-gray-200 rounded hover:bg-travefy-gray-50 text-travefy-gray-700 font-semibold">
                Decline
              </button>
              <button onClick={onGetQuote} className="px-4 py-2 text-sm bg-travefy-blue text-white rounded hover:bg-travefy-blue-dark font-semibold">
                Get a quote
              </button>
            </div>
          </div>
        </div>
      )}

      {state === 'logged-out' && (
        <div className="p-4">
          <h4 className="font-semibold text-travefy-navy mb-2">Add travel protection?</h4>
          <p className="text-sm text-travefy-gray-700 mb-4">
            Your advisor shared a travel protection offer for this trip.
          </p>
          <button className="px-5 py-2.5 text-sm bg-travefy-blue text-white rounded hover:bg-travefy-blue-dark font-semibold">
            Log in to get a quote
          </button>
        </div>
      )}

      {(state === 'quotes' || (state === 'pre-quote-condensed' && expanded)) && plans && (
        <div className="p-4 border-t border-travefy-gray-100">
          <h4 className="font-semibold text-travefy-navy mb-2">Add travel protection?</h4>
          <div className="text-sm text-travefy-gray-700 mb-4">
            <p className="mb-1">
              Your details: <span className="font-medium">{travelerName}</span> | DOB {travelerDetails}
            </p>
            <button className="text-travefy-blue hover:underline font-semibold">Edit details</button>
          </div>

          <div className="space-y-3 mb-4">
            {plans.map((plan) => (
              <RadioOption
                key={plan.id}
                value={plan.id}
                checked={selectedPlanId === plan.id}
                onChange={onSelectPlan || (() => {})}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-travefy-navy">{plan.name}</span>
                      {plan.isAdvisorPick && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-orange-100 text-orange-700 rounded">★ Advisor pick</span>
                      )}
                    </div>
                    <p className="text-sm text-travefy-gray-600">
                      Cancellation up to ${plan.cancellationLimit.toLocaleString()} · Medical ${plan.medicalLimit.toLocaleString()}
                      {plan.baggageLimit && ` · Baggage $${plan.baggageLimit.toLocaleString()}`}
                    </p>
                  </div>
                  <span className="text-lg font-bold text-travefy-navy">${plan.price}</span>
                </div>
              </RadioOption>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-travefy-gray-100">
            <div>
              <button className="text-sm text-travefy-blue hover:underline font-semibold">Compare coverage</button>
              <p className="text-xs text-travefy-gray-500 mt-1">Prices may change slightly before purchase.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={onDecline} className="px-4 py-2 text-sm border border-travefy-gray-200 rounded hover:bg-travefy-gray-50 text-travefy-gray-700 font-semibold">
                Decline
              </button>
              <button
                onClick={() => selectedPlanId && onContinue?.(selectedPlanId)}
                disabled={!selectedPlanId || locked}
                className="px-4 py-2 text-sm bg-travefy-blue text-white rounded hover:bg-travefy-blue-dark font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue with {selectedPlanId ? plans.find(p => p.id === selectedPlanId)?.name.replace('OneTrip ', '') : 'plan'}, ${selectedPlanId ? plans.find(p => p.id === selectedPlanId)?.price : ''}
              </button>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-travefy-gray-100">
            <p className="text-xs text-travefy-gray-600">
              Editing your details gets new quotes. Your decision is saved with your name and the time.
            </p>
          </div>
        </div>
      )}

      {locked && (
        <div className="p-4 bg-travefy-gray-50 border-t border-travefy-gray-100">
          <p className="text-sm text-travefy-gray-600">
            Not covered until purchased. You can accept one option. Change your decision to choose another.
          </p>
        </div>
      )}
    </div>
  )
}
