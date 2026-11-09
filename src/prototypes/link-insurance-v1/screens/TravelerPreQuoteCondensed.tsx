import { ChevronDown } from 'lucide-react'

export function TravelerPreQuoteCondensed() {
  return (
    <div className="w-[1728px] min-h-[803px] bg-[#f4f7fb]">
      <div className="h-16 bg-white border-b border-[#d1dae0] flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3a9ed8] rounded"></div>
          <span className="text-[16px] font-semibold text-[#223e47]">Travefy</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[14px] text-[#2a79a6] font-semibold">Log in</button>
          <button className="px-4 py-2 bg-[#2a79a6] text-white text-[14px] font-semibold rounded">
            Sign up
          </button>
        </div>
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
                <span>Dec 1 - 15, 2026</span>
                <span>•</span>
                <span>Paris, France</span>
                <span>•</span>
                <span>2 travelers</span>
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
            <div className="bg-white border border-[#d1dae0] rounded-lg h-[60px] flex items-center overflow-hidden">
              <div className="w-1 h-full bg-[#003781]"></div>
              <div className="flex items-center gap-3 px-4 flex-1">
                <div className="flex-shrink-0 w-12 h-7 border-[1.5px] border-dashed border-[#003781] rounded-md flex items-center justify-center">
                  <span className="text-[12px] font-semibold text-[#003781] tracking-wider">LOGO</span>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-bold text-[#223e47]">
                    Protect your trip with travel insurance v1
                  </p>
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
  )
}
