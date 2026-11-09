import { useState } from 'react'
import { ChevronDown, ChevronUp, Calendar, MapPin, Users } from 'lucide-react'

export function TravelerPreQuote() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="w-[1728px] min-h-[1011px] bg-[#f4f7fb]">
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
              <div className="border-l-4 border-[#003781]"></div>
              
              <div className="p-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-7 border-[1.5px] border-dashed border-[#003781] rounded-md flex items-center justify-center">
                    <span className="text-[12px] font-semibold text-[#003781] tracking-wider">LOGO</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-bold text-[#223e47] mb-1">
                      Protect your trip with travel insurance v1
                    </h3>
                    <p className="text-[14px] text-[#4f666d] leading-[1.43]">
                      Your advisor is offering travel protection from Allianz Travel. Get a quote in under a minute.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#678390] hover:text-[#223e47]"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {isExpanded && (
                  <>
                    <div className="mb-4 space-y-3">
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#2a79a6] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="text-[14px] font-semibold text-[#223e47]">Trip cancellation & interruption</div>
                          <div className="text-[14px] text-[#4f666d]">Get reimbursed if you need to cancel or cut your trip short</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#2a79a6] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="text-[14px] font-semibold text-[#223e47]">Emergency medical & dental</div>
                          <div className="text-[14px] text-[#4f666d]">Coverage for medical emergencies while traveling</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#2a79a6] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="text-[14px] font-semibold text-[#223e47]">Baggage loss & delay</div>
                          <div className="text-[14px] text-[#4f666d]">Protection for your belongings during travel</div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#e1e7ec] pt-4 flex items-center justify-between">
                      <button className="px-4 py-2 text-[14px] font-semibold text-[#678390] hover:text-[#223e47]">
                        Decline
                      </button>
                      <button className="px-6 py-2 bg-[#2a79a6] hover:bg-[#1B6793] text-white text-[14px] font-semibold rounded">
                        Get a quote
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
