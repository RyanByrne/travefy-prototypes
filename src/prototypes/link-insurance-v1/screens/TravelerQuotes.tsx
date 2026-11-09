import { useState } from 'react'
import { ChevronUp, Calendar, MapPin, Users } from 'lucide-react'
import { mockPlans } from '../mockData'

export function TravelerQuotes() {
  const [selectedPlan, setSelectedPlan] = useState('1')

  return (
    <div className="w-[1728px] min-h-[1211px] bg-[#f4f7fb]">
      <div className="h-16 bg-white border-b border-[#d1dae0] flex items-center px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3a9ed8] rounded"></div>
          <span className="text-[16px] font-semibold text-[#223e47]">Travefy</span>
        </div>
        <nav className="ml-12 flex gap-8">
          <button className="text-[14px] font-semibold text-[#2a79a6] border-b-2 border-[#2a79a6] h-16 flex items-center">
            Itinerary
          </button>
          <button className="text-[14px] text-[#4f666d] h-16 flex items-center">
            Proposal
          </button>
          <button className="text-[14px] text-[#4f666d] h-16 flex items-center">
            Chat
          </button>
        </nav>
      </div>

      <div className="flex">
        <div className="w-[672px] border-r border-[#d1dae0] bg-white">
          <div className="p-6">
            <div className="mb-6">
              <img 
                src="/src/prototypes/link-insurance-v1/assets/96ea98e4-dcd9-449e-a8d7-3216fe8cdc81.png" 
                alt="Trip header"
                className="w-full h-[160px] object-cover rounded-lg"
              />
            </div>

            <div className="mb-8">
              <h1 className="text-[30px] font-normal leading-[1.25] text-[#223e47] mb-2">
                Paris Adventure
              </h1>
              <div className="flex items-center gap-4 text-[14px] text-[#4f666d]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 1 - 15, 2026</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Paris, France</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>2 travelers</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-t border-[#e1e7ec] pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#3a9ed8] rounded flex items-center justify-center text-white text-[12px] font-semibold">
                    1
                  </div>
                  <span className="text-[14px] font-semibold text-[#223e47]">Day 1</span>
                  <span className="text-[14px] text-[#678390]">Mon, Dec 1</span>
                </div>
                <div className="ml-11 space-y-2">
                  <div className="text-[14px] text-[#223e47]">Arrive in Paris</div>
                  <div className="text-[14px] text-[#678390]">Check into hotel</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8">
          <div className="max-w-[632px]">
            <div className="bg-white border border-[#d1dae0] rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-7 border-[1.5px] border-dashed border-[#003781] rounded-md flex items-center justify-center">
                    <span className="text-[12px] font-semibold text-[#003781] tracking-wider">LOGO</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-bold text-[#223e47] mb-1">
                      Choose your plan
                    </h3>
                    <div className="flex items-center gap-2 text-[12px] text-[#4f666d]">
                      <span>Jack Hawthorne</span>
                      <span>•</span>
                      <span>Dec 1 - 15, 2026</span>
                      <span>•</span>
                      <span>Trip cost $8,400</span>
                      <button className="text-[#2a79a6] font-semibold ml-1">Edit</button>
                    </div>
                  </div>
                  <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#678390] hover:text-[#223e47]">
                    <ChevronUp className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-4">
                  {mockPlans.map((plan) => {
                    const isSelected = selectedPlan === plan.id
                    return (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 border-t border-[#e1e7ec] hover:bg-[#eff9ff] relative ${
                          isSelected ? 'bg-[#eff9ff]' : 'bg-white'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2a79a6]"></div>
                        )}
                        <div className="flex-shrink-0">
                          <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'border-[#2a79a6]' : 'border-[#d1dae0]'
                          }`}>
                            {isSelected && (
                              <div className="w-[10px] h-[10px] rounded-full bg-[#2a79a6]"></div>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-[14px] font-bold text-[#223e47] mb-1">
                            {plan.name}
                          </div>
                          <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[12px] text-[#4f666d]">
                            {plan.highlights.map((highlight, i) => (
                              <span key={i}>{highlight}</span>
                            ))}
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-[20px] font-bold text-[#223e47]">
                          ${plan.price}
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="mb-4">
                  <button className="w-full text-[14px] text-[#2a79a6] font-semibold text-center py-2 hover:underline">
                    Compare plans
                  </button>
                </div>

                <div className="border-t border-[#e1e7ec] pt-4 flex items-center justify-between">
                  <button className="px-4 py-2 text-[14px] font-semibold text-[#678390] hover:text-[#223e47]">
                    Decline
                  </button>
                  <button className="px-6 py-2 bg-[#2a79a6] hover:bg-[#1B6793] text-white text-[14px] font-semibold rounded">
                    Continue with {mockPlans.find(p => p.id === selectedPlan)?.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
