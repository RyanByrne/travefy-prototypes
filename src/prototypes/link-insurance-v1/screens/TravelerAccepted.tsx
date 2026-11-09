import { ChevronDown, Calendar, MapPin, Users } from 'lucide-react'

export function TravelerAccepted() {
  return (
    <div className="w-[1728px] min-h-[1076px] bg-[#f4f7fb]">
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
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-7 border-[1.5px] border-dashed border-[#003781] rounded-md flex items-center justify-center">
                    <span className="text-[12px] font-semibold text-[#003781] tracking-wider">LOGO</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[16px] font-bold text-[#223e47]">
                        Allianz Travel (example) · OneTrip Prime
                      </h3>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-semibold bg-[#E5EDFF] text-[#42389D]">
                        Accepted
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-[#4f666d] mb-3">
                      <span>Jack Hawthorne</span>
                      <span>•</span>
                      <span>Dec 1 - 15, 2026</span>
                      <span>•</span>
                      <span>$72</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#678390]">
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#d1dae0] rounded-lg overflow-hidden opacity-50">
              <div className="border-l-4 border-[#007A33]"></div>
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-7 border-[1.5px] border-dashed border-[#007A33] rounded-md flex items-center justify-center">
                    <span className="text-[12px] font-semibold text-[#007A33] tracking-wider">LOGO</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[16px] font-bold text-[#223e47] mb-2">
                      Travel Guard (example)
                    </h3>
                  </div>
                  <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#678390]">
                    <ChevronDown className="w-5 h-5" />
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
