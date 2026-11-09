// Pixel-perfect Insurance Card from Figma 34160:3830
// Reference: High-Fidelity h6nksbINce9t4Cg0xVFczu

import { clsx } from 'clsx'

const ASSETS = {
  radioSelected: '/figma-assets/34160-3830/370c6fda-587c-4fe4-8fce-f661cd8e66b2.svg',
  radioUnselected: '/figma-assets/34160-3830/a20f4fcb-057c-4a66-850b-7ecee5400d05.svg',
  chevronCollapse: '/figma-assets/34160-3830/10dc0c15-1e6e-4398-9d1c-ef58e7c53bcf.svg',
  chevronExpand: '/figma-assets/34160-3830/5d1398e8-d832-4271-ae29-436368500b3d.svg',
  chevronExpandAlt: '/figma-assets/34160-3830/635f7b6f-e171-4c41-a3e1-68b30b534748.svg',
}

export type CardState = 'pre-quote' | 'pre-quote-condensed' | 'quotes' | 'accepted-collapsed' | 'declined-collapsed' | 'purchased-collapsed'

interface InsuranceCardFigmaProps {
  state: CardState
  providerName?: string
  providerTagline?: string
  travelerName?: string
  travelerDetails?: string
  plans?: Array<{
    id: string
    name: string
    cancellation: string
    medical: string
    baggage?: string
    price: number
  }>
  selectedPlanId?: string
  onSelectPlan?: (planId: string) => void
  onGetQuote?: () => void
  onDecline?: () => void
  onContinue?: () => void
  onChangeDecision?: () => void
  onViewPolicy?: () => void
  onExpand?: () => void
  // Collapsed state props
  acceptedPlan?: string
  acceptedPrice?: number
  acceptedDate?: string
  policyNumber?: string
  coverageStart?: string
  coverageEnd?: string
  showChevron?: boolean
  className?: string
}

function RadioButton({ selected }: { selected: boolean }) {
  return (
    <div className="relative w-[18px] h-[18px] shrink-0">
      <img 
        src={selected ? ASSETS.radioSelected : ASSETS.radioUnselected} 
        alt="" 
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

function PlanRow({ 
  plan, 
  selected, 
  onSelect 
}: { 
  plan: { id: string; name: string; cancellation: string; medical: string; baggage?: string; price: number }
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className={clsx(
        'relative w-full flex items-center gap-3 px-4 py-3 border-t border-gray-100',
        selected ? 'bg-primary-50' : 'bg-white hover:bg-gray-50'
      )}
    >
      <RadioButton selected={selected} />
      <div className="flex-1 flex flex-col gap-1 items-start text-left overflow-hidden">
        <p className="text-sm font-bold text-blue-gray-900 leading-tight whitespace-nowrap">
          {plan.name}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-blue-gray-600 leading-relaxed">
          <span>{plan.cancellation}</span>
          <span>{plan.medical}</span>
          {plan.baggage && <span>{plan.baggage}</span>}
        </div>
      </div>
      <p className="text-xl font-bold text-blue-gray-900 text-right whitespace-nowrap">
        ${plan.price}
      </p>
      {selected && (
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-600" />
      )}
    </button>
  )
}

export function InsuranceCardFigma({
  state,
  providerName = 'Allianz Travel',
  providerTagline = 'Travel with confidence, wherever you go.',
  travelerName = 'Elisa Denton',
  travelerDetails = 'Mar 3, 1986 | Colorado | Trip cost $8,400',
  plans,
  selectedPlanId,
  onSelectPlan,
  onGetQuote,
  onDecline,
  onContinue,
  onChangeDecision,
  onViewPolicy,
  onExpand,
  acceptedPlan,
  acceptedPrice,
  acceptedDate,
  policyNumber,
  coverageStart,
  coverageEnd,
  showChevron = true,
  className,
}: InsuranceCardFigmaProps) {
  const isCollapsed = state.includes('collapsed') || state === 'pre-quote-condensed'

  // Collapsed states
  if (isCollapsed) {
    return (
      <div className={clsx('bg-white border border-gray-200 rounded-lg overflow-hidden flex items-center h-[60px]', className)}>
        {/* Provider accent */}
        <div className="w-1 h-full bg-[#003781] shrink-0" />
        
        {/* Summary content */}
        <div className="flex-1 flex items-center gap-3 px-4 py-3 min-w-0">
          {/* Logo placeholder */}
          <div className="border-[1.5px] border-dashed border-[#003781] rounded-md h-[26px] w-[46px] flex items-center justify-center shrink-0">
            <span className="text-xs font-semibold text-[#003781] tracking-wider">LOGO</span>
          </div>
          
          {/* Text */}
          <div className="flex-1 flex flex-col gap-0.5 min-w-0">
            {state === 'pre-quote-condensed' && (
              <>
                <p className="text-sm font-bold text-blue-gray-900 leading-tight truncate">
                  {providerName} (example)  ·  Travel protection
                </p>
                <p className="text-xs text-blue-gray-600 leading-relaxed truncate">
                  Your advisor shared an offer for this trip.
                </p>
              </>
            )}
            
            {(state === 'accepted-collapsed' || state === 'purchased-collapsed' || state === 'declined-collapsed') && (
              <>
                <p className="text-sm font-bold text-blue-gray-900 leading-tight truncate">
                  {providerName} (example)  ·  {state === 'declined-collapsed' ? 'Travel protection' : acceptedPlan}
                </p>
                <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-xs leading-relaxed">
                  {state === 'declined-collapsed' && (
                    <>
                      <span className="text-blue-gray-600">
                        Declined {acceptedDate} by {travelerName}
                      </span>
                      <button onClick={onChangeDecision} className="font-semibold text-primary-600 hover:underline">
                        ·  Change your mind?
                      </button>
                    </>
                  )}
                  {state === 'accepted-collapsed' && (
                    <>
                      <span className="font-semibold text-blue-gray-900">${acceptedPrice}</span>
                      <span className="text-blue-gray-600">
                        ·  Accepted {acceptedDate} by {travelerName}. Not covered until purchased
                      </span>
                    </>
                  )}
                  {state === 'purchased-collapsed' && (
                    <>
                      <span className="font-semibold text-blue-gray-900">${acceptedPrice}</span>
                      <span className="text-blue-gray-600">
                        ·  Policy {policyNumber}, covered {coverageStart} to {coverageEnd}
                      </span>
                      <button onClick={onViewPolicy} className="font-semibold text-primary-600 hover:underline">
                        ·  View policy
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
          
          {/* Status badge */}
          {(state === 'accepted-collapsed' || state === 'purchased-collapsed' || state === 'declined-collapsed') && (
            <div className={clsx(
              'px-2.5 py-0.5 rounded-full h-5 flex items-center justify-center shrink-0',
              state === 'declined-collapsed' && 'bg-gray-100',
              state === 'accepted-collapsed' && 'bg-indigo-100',
              state === 'purchased-collapsed' && 'bg-green-100'
            )}>
              <span className={clsx(
                'text-xs font-semibold leading-relaxed whitespace-nowrap',
                state === 'declined-collapsed' && 'text-blue-gray-900',
                state === 'accepted-collapsed' && 'text-indigo-800',
                state === 'purchased-collapsed' && 'text-green-800'
              )}>
                {state === 'declined-collapsed' && 'Declined'}
                {state === 'accepted-collapsed' && 'Accepted'}
                {state === 'purchased-collapsed' && '✓ Purchased'}
              </span>
            </div>
          )}
          
          {/* Buttons (pre-quote-condensed only) */}
          {state === 'pre-quote-condensed' && (
            <>
              <button 
                onClick={onDecline}
                className="px-0 py-1 text-xs font-semibold text-primary-600 hover:underline whitespace-nowrap"
              >
                Decline
              </button>
              <button 
                onClick={onGetQuote}
                className="px-3 py-2 bg-primary-600 text-white text-xs font-semibold rounded hover:bg-primary-700 whitespace-nowrap"
              >
                Log in to get a quote
              </button>
            </>
          )}
          
          {/* Chevron */}
          {showChevron && (
            <button onClick={onExpand} className="w-4 h-4 shrink-0">
              <img src={state === 'pre-quote-condensed' ? ASSETS.chevronExpandAlt : ASSETS.chevronExpand} alt="" className="w-full h-full" />
            </button>
          )}
        </div>
      </div>
    )
  }

  // Expanded states (pre-quote, quotes)
  return (
    <div className={clsx('bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col', className)}>
      {/* Provider header */}
      <div className="border-b border-gray-100 flex items-center gap-3 px-5 py-4">
        {/* Provider accent */}
        <div className="w-1 h-[34px] bg-[#003781] rounded-sm shrink-0" />
        
        {/* Logo placeholder */}
        <div className="border-[1.5px] border-dashed border-[#003781] rounded-md h-8 w-[110px] flex items-center justify-center shrink-0">
          <span className="text-xs font-semibold text-[#003781] tracking-wider">PROVIDER LOGO</span>
        </div>
        
        {/* Provider info */}
        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-bold text-blue-gray-900 leading-relaxed">{providerName}</span>
            <span className="text-xs text-blue-gray-500 leading-relaxed">(example)</span>
          </div>
          <p className="text-xs text-blue-gray-600 leading-relaxed">{providerTagline}</p>
        </div>
        
        {/* Header actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="text-sm font-semibold text-primary-600 hover:underline leading-tight">
            Sample policy
          </button>
          {state === 'quotes' && (
            <div className="px-2.5 py-0.5 bg-primary-100 rounded-full h-5 flex items-center justify-center">
              <span className="text-xs font-semibold text-primary-800 leading-relaxed">Choose a plan</span>
            </div>
          )}
          {showChevron && (
            <button onClick={onExpand} className="w-4 h-4 shrink-0">
              <img src={ASSETS.chevronCollapse} alt="" className="w-full h-full" />
            </button>
          )}
        </div>
      </div>
      
      {/* Body */}
      <div className="px-5 py-3.5 flex flex-col gap-3">
        <h3 className="text-base font-bold text-blue-gray-900 leading-relaxed">
          Add travel protection?
        </h3>
        
        {/* Your details (quotes state only) */}
        {state === 'quotes' && (
          <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-xs leading-relaxed">
            <span className="text-blue-gray-500">Your details:</span>
            <span className="font-semibold text-blue-gray-900">{travelerName}</span>
            <span className="text-blue-gray-600">|  DOB {travelerDetails}</span>
            <button className="font-semibold text-primary-600 hover:underline">Edit</button>
          </div>
        )}
        
        {/* Plans (quotes state only) */}
        {state === 'quotes' && plans && (
          <>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {plans.map((plan) => (
                <PlanRow
                  key={plan.id}
                  plan={plan}
                  selected={selectedPlanId === plan.id}
                  onSelect={() => onSelectPlan?.(plan.id)}
                />
              ))}
            </div>
            
            <div className="flex items-center justify-between text-xs leading-relaxed">
              <button className="font-semibold text-primary-600 hover:underline">
                Compare coverage ▾
              </button>
              <span className="text-blue-gray-500">
                Prices may change slightly before purchase.
              </span>
            </div>
          </>
        )}
        
        {/* Pre-quote description */}
        {state === 'pre-quote' && (
          <>
            <p className="text-sm text-blue-gray-600 leading-tight">
              Your advisor shared a travel protection offer for this trip. Get a quote to see plans and prices for your details, or decline.
            </p>
            <p className="text-xs text-blue-gray-500 leading-relaxed">
              Plans can include trip cancellation, medical and baggage cover.
            </p>
          </>
        )}
      </div>
      
      {/* Decision bar */}
      <div className="border-t border-gray-100 flex items-center gap-3 px-5 py-3">
        <p className="flex-1 text-xs text-blue-gray-500 leading-relaxed">
          {state === 'pre-quote' 
            ? 'Your decision is saved with your name and the time.'
            : 'Editing your details gets new quotes. Your decision is saved with your name and the time.'}
        </p>
        <button 
          onClick={onDecline}
          className="px-4 py-2 border border-gray-200 text-sm font-semibold text-primary-600 rounded hover:bg-gray-50 leading-tight"
        >
          Decline
        </button>
        <button 
          onClick={state === 'pre-quote' ? onGetQuote : onContinue}
          disabled={state === 'quotes' && !selectedPlanId}
          className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed leading-tight whitespace-nowrap"
        >
          {state === 'pre-quote' ? 'Get a quote' : `Continue with ${plans?.find(p => p.id === selectedPlanId)?.name.replace('OneTrip ', '') || 'plan'}, $${plans?.find(p => p.id === selectedPlanId)?.price || ''}`}
        </button>
      </div>
    </div>
  )
}
