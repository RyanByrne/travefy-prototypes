import { useState } from 'react'
import { ChevronDown, ChevronUp, Calendar, MapPin, Users } from 'lucide-react'

export function TravelerMultiProvider() {
  const [provider1Expanded, setProvider1Expanded] = useState(true)
  const [provider2Expanded, setProvider2Expanded] = useState(true)

  return (
    <div className="w-[1728px] min-h-[1413px] bg-[#f4f7fb]">
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
          <div className="max-w-[632px] space-y-4">
            <div className="bg-white border border-[#d1dae0] rounded-lg overflow-hidden">
              <div className="border-l-4 border-[#003781]"></div>
              <div className="p-4">
                <button 
                  onClick={() => setProvider1Expanded(!provider1Expanded)}
                  className="w-full flex items-center gap-3 mb-4"
                >
                  <div className="flex-shrink-0 w-12 h-7 border-[1.5px] border-dashed border-[#003781] rounded-md flex items-center justify-center">
                    <span className="text-[12px] font-semibold text-[#003781] tracking-wider">LOGO</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-[16px] font-bold text-[#223e47]">
                      Allianz Travel (example)
                    </h3>
                  </div>
                  {provider1Expanded ? (
                    <ChevronUp className="w-5 h-5 text-[#678390]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#678390]" />
                  )}
                </button>

                {provider1Expanded && (
                  <>
                    <div className="mb-3 text-[14px] text-[#4f666d]">
                      <div className="flex items-center gap-2 mb-1">
                        <span>Jack Hawthorne</span>
                        <span>•</span>
                        <span>Dec 1 - 15, 2026</span>
                        <span>•</span>
                        <span>Trip cost $8,400</span>
                      </div>
                    </div>

                    <div className="space-y-0">
                      {['OneTrip Prime', 'Preferred', 'Basic'].map((plan, i) => (
                        <button
                          key={i}
                          className="w-full flex items-center gap-3 px-4 py-3 border-t border-[#e1e7ec] hover:bg-[#eff9ff]"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-[18px] h-[18px] rounded-full border-2 border-[#d1dae0]"></div>
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-[14px] font-bold text-[#223e47] mb-1">{plan}</div>
                            <div className="flex flex-wrap gap-x-3 text-[12px] text-[#4f666d]">
                              <span>Cancellation up to $8,400</span>
                              <span>Medical $50,000</span>
                              {i < 2 && <span>Baggage ${i === 0 ? '1,000' : '2,500'}</span>}
                            </div>
                          </div>
                          <div className="flex-shrink-0 text-[20px] font-bold text-[#223e47]">
                            ${[72, 97, 65][i]}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="border-t border-[#e1e7ec] pt-4 flex items-center justify-between mt-4">
                      <button className="text-[14px] font-semibold text-[#678390] hover:text-[#223e47]">
                        Decline
                      </button>
                      <button className="px-6 py-2 bg-[#2a79a6] hover:bg-[#1B6793] text-white text-[14px] font-semibold rounded">
                        Accept quote
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white border border-[#d1dae0] rounded-lg overflow-hidden">
              <div className="border-l-4 border-[#007A33]"></div>
              <div className="p-4">
                <button 
                  onClick={() => setProvider2Expanded(!provider2Expanded)}
                  className="w-full flex items-center gap-3 mb-4"
                >
                  <div className="flex-shrink-0 w-12 h-7 border-[1.5px] border-dashed border-[#007A33] rounded-md flex items-center justify-center">
                    <span className="text-[12px] font-semibold text-[#007A33] tracking-wider">LOGO</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-[16px] font-bold text-[#223e47]">
                      Travel Guard (example)
                    </h3>
                  </div>
                  {provider2Expanded ? (
                    <ChevronUp className="w-5 h-5 text-[#678390]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#678390]" />
                  )}
                </button>

                {provider2Expanded && (
                  <>
                    <div className="mb-3 text-[14px] text-[#4f666d]">
                      <div className="flex items-center gap-2 mb-1">
                        <span>Jack Hawthorne</span>
                        <span>•</span>
                        <span>Dec 1 - 15, 2026</span>
                        <span>•</span>
                        <span>Trip cost $8,400</span>
                      </div>
                    </div>

                    <div className="space-y-0">
                      {['Essential', 'Deluxe'].map((plan, i) => (
                        <button
                          key={i}
                          className="w-full flex items-center gap-3 px-4 py-3 border-t border-[#e1e7ec] hover:bg-[#eff9ff]"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-[18px] h-[18px] rounded-full border-2 border-[#d1dae0]"></div>
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-[14px] font-bold text-[#223e47] mb-1">{plan}</div>
                            <div className="flex flex-wrap gap-x-3 text-[12px] text-[#4f666d]">
                              <span>Cancellation up to ${i === 0 ? '8,000' : '8,400'}</span>
                              <span>Medical ${i === 0 ? '25,000' : '100,000'}</span>
                            </div>
                          </div>
                          <div className="flex-shrink-0 text-[20px] font-bold text-[#223e47]">
                            ${[68, 115][i]}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="border-t border-[#e1e7ec] pt-4 flex items-center justify-between mt-4">
                      <button className="text-[14px] font-semibold text-[#678390] hover:text-[#223e47]">
                        Decline
                      </button>
                      <button className="px-6 py-2 bg-[#2a79a6] hover:bg-[#1B6793] text-white text-[14px] font-semibold rounded">
                        Accept quote
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
