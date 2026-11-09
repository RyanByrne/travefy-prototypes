import { X } from 'lucide-react'
import { useState } from 'react'
import { Combobox, Input, Modal } from '../../shared/components'
import { ALL_PROVIDERS_FOR_COMBOBOX } from './data'

interface AddPolicyModalProps {
  open: boolean
  onClose: () => void
  travelerName: string
  acceptedQuote?: {
    provider: string
    plan: string
    price: number
    date: string
  }
  onSave: (data: PolicyData) => void
}

interface PolicyData {
  provider: string
  newProviderName?: string
  newProviderContact?: string
  planName: string
  policyNumber: string
  coverageStart: string
  coverageEnd: string
  premiumPaid: string
  purchaseDate: string
  assistancePhone: string
  policyDocument: string
}

export function AddPolicyModal({ open, onClose, travelerName, acceptedQuote, onSave }: AddPolicyModalProps) {
  const [provider, setProvider] = useState(acceptedQuote?.provider || '')
  const [showNewProvider, setShowNewProvider] = useState(false)
  const [newProviderName, setNewProviderName] = useState('')
  const [newProviderContact, setNewProviderContact] = useState('')
  const [planName, setPlanName] = useState(acceptedQuote?.plan || '')
  const [policyNumber, setPolicyNumber] = useState('')
  const [coverageStart, setCoverageStart] = useState('')
  const [coverageEnd, setCoverageEnd] = useState('')
  const [premiumPaid, setPremiumPaid] = useState(acceptedQuote?.price.toString() || '')
  const [purchaseDate, setPurchaseDate] = useState('')
  const [assistancePhone, setAssistancePhone] = useState('')
  const [policyDocument, setPolicyDocument] = useState('')

  const handleProviderChange = (value: string) => {
    if (value === 'add-new') {
      setShowNewProvider(true)
      setProvider('')
    } else {
      setShowNewProvider(false)
      setProvider(value)
    }
  }

  const handleSave = () => {
    onSave({
      provider: showNewProvider ? newProviderName : provider,
      newProviderName: showNewProvider ? newProviderName : undefined,
      newProviderContact: showNewProvider ? newProviderContact : undefined,
      planName,
      policyNumber,
      coverageStart,
      coverageEnd,
      premiumPaid,
      purchaseDate,
      assistancePhone,
      policyDocument,
    })
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} size="lg">
      <div className="flex items-start justify-between pb-4 border-b border-travefy-gray-200">
        <div>
          <h2 className="text-xl font-semibold text-travefy-navy">Add policy for {travelerName}</h2>
          {acceptedQuote && (
            <div className="mt-3 p-3 bg-travefy-gray-50 rounded text-sm">
              <p className="font-medium text-travefy-gray-900 mb-1">
                Accepted quote: {acceptedQuote.provider} {acceptedQuote.plan}, ${acceptedQuote.price}, on {acceptedQuote.date}
              </p>
              <p className="text-travefy-gray-600">
                Quotes are regenerated at purchase, so enter the premium you actually paid.
              </p>
            </div>
          )}
          <div className="mt-3 p-3 bg-travefy-blue-light border border-travefy-blue/20 rounded text-sm text-travefy-navy">
            <p className="font-medium mb-1">
              {acceptedQuote?.provider.includes('Allianz') 
                ? `${travelerName} accepted this offer and chose "My advisor will buy on my behalf."`
                : `${travelerName} accepted this offer.`
              } Buy the policy with the provider, then add it here for {travelerName} only. Each traveler gets their own policy record.
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-travefy-gray-400 hover:text-travefy-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto">
        <div>
          <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Provider</label>
          {showNewProvider ? (
            <div className="space-y-3">
              <Input
                value={newProviderName}
                onChange={(e) => setNewProviderName(e.target.value)}
                placeholder="Provider name"
              />
              <Input
                value={newProviderContact}
                onChange={(e) => setNewProviderContact(e.target.value)}
                placeholder="Provider phone or website (optional)"
              />
              <button
                onClick={() => {
                  setShowNewProvider(false)
                  setNewProviderName('')
                  setNewProviderContact('')
                }}
                className="text-sm text-travefy-blue hover:underline"
              >
                Back to provider list
              </button>
            </div>
          ) : (
            <Combobox
              value={provider}
              onChange={handleProviderChange}
              options={[
                ...ALL_PROVIDERS_FOR_COMBOBOX.map((p) => ({ value: p, label: p })),
                { value: 'add-new', label: '+ Add new', separator: true },
              ]}
              placeholder="Select provider"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Plan or package name</label>
          <Input value={planName} onChange={(e) => setPlanName(e.target.value)} placeholder="e.g. OneTrip Prime" />
        </div>

        <div>
          <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Policy number</label>
          <Input value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} placeholder="ALZ-48213" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Coverage start</label>
            <Input type="date" value={coverageStart} onChange={(e) => setCoverageStart(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Coverage end</label>
            <Input type="date" value={coverageEnd} onChange={(e) => setCoverageEnd(e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Premium paid</label>
            <Input type="number" value={premiumPaid} onChange={(e) => setPremiumPaid(e.target.value)} placeholder="72.00" />
          </div>
          <div>
            <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Purchase date</label>
            <Input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Travelers covered</label>
          <Input value={travelerName} disabled className="bg-travefy-gray-50" />
        </div>

        <div>
          <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">24/7 assistance phone (optional)</label>
          <Input value={assistancePhone} onChange={(e) => setAssistancePhone(e.target.value)} placeholder="Provider emergency number" />
        </div>

        <div>
          <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Policy document (optional)</label>
          <div className="flex gap-2">
            <Input
              value={policyDocument}
              onChange={(e) => setPolicyDocument(e.target.value)}
              placeholder="Paste a link or upload the policy PDF"
              className="flex-1"
            />
            <button className="px-4 py-2 text-sm border border-travefy-blue bg-white text-travefy-blue rounded hover:bg-travefy-blue-light font-semibold">
              Upload PDF
            </button>
          </div>
        </div>

        <div className="pt-3 border-t border-travefy-gray-100 text-sm text-travefy-gray-600">
          <p>
            Saving marks {travelerName} Purchased on Responses and shows the policy on his itinerary. The trip's advisor can add or edit a policy. Policies bought through the Allianz integration fill in automatically.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-travefy-gray-200">
        <button onClick={onClose} className="px-5 py-2.5 text-sm text-travefy-blue hover:underline font-semibold">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-5 py-2.5 text-sm bg-travefy-blue text-white rounded hover:bg-travefy-blue-dark font-semibold"
        >
          Save policy
        </button>
      </div>
    </Modal>
  )
}

interface ViewPolicyModalProps {
  open: boolean
  onClose: () => void
  policy: {
    travelerName: string
    provider: string
    plan: string
    policyNumber: string
    coverageStart: string
    coverageEnd: string
    premiumPaid: number
    purchaseDate: string
    assistancePhone?: string
  }
}

export function ViewPolicyModal({ open, onClose, policy }: ViewPolicyModalProps) {
  return (
    <Modal open={open} onClose={onClose} size="lg">
      <div className="flex items-start justify-between pb-4 border-b border-travefy-gray-200">
        <h2 className="text-xl font-semibold text-travefy-navy">View policy for {policy.travelerName}</h2>
        <button onClick={onClose} className="text-travefy-gray-400 hover:text-travefy-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="py-4 space-y-4">
        <div className="p-3 bg-travefy-blue-light border border-travefy-blue/20 rounded text-sm text-travefy-navy">
          <p>Pulled in from Allianz integration on {policy.purchaseDate}.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Provider</label>
            <p className="text-sm text-travefy-gray-900">{policy.provider}</p>
          </div>
          <div>
            <label className="block text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Plan or package name</label>
            <p className="text-sm text-travefy-gray-900">{policy.plan}</p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Policy number</label>
          <p className="text-sm text-travefy-gray-900">{policy.policyNumber}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Coverage start</label>
            <p className="text-sm text-travefy-gray-900">{policy.coverageStart}</p>
          </div>
          <div>
            <label className="block text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Coverage end</label>
            <p className="text-sm text-travefy-gray-900">{policy.coverageEnd}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Premium paid</label>
            <p className="text-sm text-travefy-gray-900">${policy.premiumPaid.toFixed(2)}</p>
          </div>
          <div>
            <label className="block text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Purchase date</label>
            <p className="text-sm text-travefy-gray-900">{policy.purchaseDate}</p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Travelers covered</label>
          <p className="text-sm text-travefy-gray-900">{policy.travelerName}</p>
        </div>

        {policy.assistancePhone && (
          <div>
            <label className="block text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">24/7 assistance phone</label>
            <p className="text-sm text-travefy-gray-900">{policy.assistancePhone}</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-travefy-gray-200">
        <button className="px-5 py-2.5 text-sm border border-travefy-blue bg-white text-travefy-blue rounded hover:bg-travefy-blue-light font-semibold">
          Open PDF
        </button>
        <button onClick={onClose} className="px-5 py-2.5 text-sm bg-travefy-blue text-white rounded hover:bg-travefy-blue-dark font-semibold">
          Close
        </button>
      </div>
    </Modal>
  )
}
