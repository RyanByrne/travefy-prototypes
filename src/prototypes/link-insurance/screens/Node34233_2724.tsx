// Node 34233:2724 - Advisor: Preview as traveler - 1600x1053px
// Full-page preview with Viewing as Recipient bar, Mobile/Desktop toggle, light grey page, large white card

const ASSETS = '/figma-assets/34233-2724'

export function Node34233_2724() {
  return (
    <div className="bg-blue-gray-100 relative w-full h-full">
      
      {/* Top navbar */}
      <div className="absolute bg-white flex flex-col items-start left-0 pl-[35px] pr-14 py-0 top-0 w-[1600px]">
        <div className="flex items-center justify-between px-0 py-1.5 w-full">
          
          {/* Left: Viewing as Recipient */}
          <div className="flex items-center px-4 py-0">
            <div className="flex items-center">
              <div className="flex gap-1.5 items-center">
                <p className="text-base text-blue-gray-600 whitespace-nowrap">Viewing as</p>
                <div className="flex gap-0 items-center">
                  <div className="flex flex-col items-start px-0 py-3 rounded">
                    <div className="flex items-center">
                      <div className="flex-1 flex flex-col justify-center leading-[0]">
                        <p className="font-semibold text-base text-blue-gray-900 leading-tight whitespace-nowrap">Recipient</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center: Mobile/Desktop toggle */}
          <div className="bg-white flex items-start rounded-md">
            {/* Mobile button */}
            <div className="bg-white border border-blue-gray-600 flex gap-2 items-center justify-center mr-[-1px] overflow-hidden px-4 py-2 rounded-l">
              <img src={`${ASSETS}/76741213-7946-4340-8efb-5716b328ea82.svg`} alt="Mobile" className="w-3 h-3" />
              <p className="text-sm font-semibold text-blue-gray-600">Mobile</p>
            </div>
            {/* Desktop button - selected */}
            <div className="bg-blue-gray-600 border border-blue-gray-600 flex gap-2 items-center justify-center overflow-hidden px-4 py-2 rounded-r">
              <img src={`${ASSETS}/255787d8-64e3-4a4a-a1a1-0552b8249747.svg`} alt="Desktop" className="w-3 h-3" />
              <p className="text-sm font-semibold text-white">Desktop</p>
            </div>
          </div>
          
          {/* Right: Send Test & Close Preview buttons */}
          <div className="flex gap-3 items-center">
            <div className="border border-gray-200 flex gap-2 h-11 items-center justify-center px-4 py-2 rounded">
              <p className="text-base text-primary-600">Send Test</p>
            </div>
            <div className="bg-primary-600 flex gap-2 items-center justify-center px-5 py-2.5 rounded">
              <p className="text-base text-white">Close Preview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Large white card with trip content - centered on grey background */}
      <div className="absolute bg-white border border-gray-200 flex flex-col items-center justify-center left-[434px] overflow-hidden top-[253px] rounded-tl-lg rounded-tr-lg shadow-lg">
        
        {/* Advisor card */}
        <div className="bg-white flex items-center justify-center p-4 w-[672px]">
          <div className="flex-1 flex flex-col gap-0 items-start">
            <div className="flex gap-2.5 items-start w-full">
              <img src={`${ASSETS}/11587b97-24f8-4155-b276-f85b93af2ad9.png`} alt="Advisor" className="w-16 h-16 rounded-full object-cover" />
              <div className="flex-1 flex items-start justify-between">
                <div className="flex-1 flex flex-col items-start leading-tight">
                  <p className="text-xl text-black">Advisor Name</p>
                  <p className="text-base text-blue-gray-600">Travel Specialist</p>
                  <p className="text-base text-blue-gray-600">Agency Name</p>
                </div>
                <div className="bg-[#d9d9d9] h-16 w-[320px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex flex-col gap-0 h-64 items-start justify-end overflow-hidden w-[672px] relative">
          <img src={`${ASSETS}/bdcfb24b-a625-41ec-992c-d903559c8ecf.png`} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
          
          {/* Email bar */}
          <div className="bg-black/80 flex gap-2 items-center justify-center py-4 w-full relative z-10">
            <img src={`${ASSETS}/3c04c816-36dd-4e80-805d-aa045cffd88b.svg`} alt="Email" className="w-6 h-6" />
            <p className="text-base text-white">email@travelagency.com</p>
          </div>
          
          {/* Title overlay */}
          <div className="flex-1 flex flex-col gap-16 items-start justify-end w-full pb-0 pt-8 px-0 relative">
            <div className="flex-1 flex items-end justify-center w-full relative">
              <img src={`${ASSETS}/8ab41541-be95-4041-a73c-763c1e9c564c.png`} alt="Content background" className="absolute inset-0 w-full h-full object-cover" />
              <div className="flex-1 h-full flex items-end justify-between px-5 py-4 relative">
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col gap-0 items-start px-4 text-white w-[672px]">
                    <p className="text-base leading-normal">Aug 9, 2025 - Aug 16, 2025</p>
                    <p className="text-[30px] leading-tight">10 Day Euro Sights Trip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance offer card */}
        <div className="flex flex-col items-center overflow-hidden pb-2 pt-4 w-full">
          <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-[632px]">
            
            {/* Provider row */}
            <div className="border-b border-gray-100 flex gap-3 items-center overflow-hidden pb-3.5 pt-4 px-5 w-full">
              <div className="bg-[#003781] h-[34px] rounded-sm w-1" />
              <div className="border-[#003781] border-[1.5px] border-dashed flex h-8 items-center justify-center overflow-hidden px-2 rounded-md w-[110px]">
                <p className="text-xs font-semibold text-[#003781] tracking-wider whitespace-nowrap">PROVIDER LOGO</p>
              </div>
              <div className="flex-1 flex flex-col gap-0.5 items-start leading-relaxed overflow-hidden">
                <div className="flex gap-1.5 items-center overflow-hidden">
                  <p className="font-bold text-base text-blue-gray-900">Allianz Travel</p>
                  <p className="text-xs text-blue-gray-500">(example)</p>
                </div>
                <p className="text-xs text-blue-gray-600 w-full">Travel with confidence, wherever you go.</p>
              </div>
              <p className="text-sm font-semibold text-primary-600 leading-tight">Sample policy</p>
              <img src={`${ASSETS}/212f3d96-af8f-418d-b8cc-beaa7c8a21c6.svg`} alt="Collapse" className="w-4 h-4" />
            </div>
            
            {/* Body */}
            <div className="flex flex-col gap-2 items-start overflow-hidden px-5 py-3.5 w-full">
              <p className="text-base font-bold text-blue-gray-900 leading-normal">Add travel protection?</p>
              <p className="text-sm text-blue-gray-600 leading-tight w-full">
                Your advisor shared a travel protection offer for this trip. Get a quote to see plans and prices for your details, or decline.
              </p>
              <p className="text-xs text-blue-gray-500 leading-normal w-full">
                Plans can include trip cancellation, medical and baggage cover.
              </p>
            </div>
            
            {/* Decision bar */}
            <div className="border-t border-gray-100 flex gap-3 items-center overflow-hidden pb-4 pt-3 px-5 w-full">
              <p className="flex-1 text-xs text-blue-gray-500 leading-normal">Your decision is saved with your name and the time.</p>
              <button className="border border-gray-200 px-4 py-2 rounded text-sm font-semibold text-primary-600 hover:bg-gray-50">
                Decline
              </button>
              <button className="bg-primary-600 px-4 py-2 rounded text-sm font-semibold text-white hover:bg-primary-700">
                Get a quote
              </button>
            </div>
          </div>
        </div>

        {/* Information & Documents section */}
        <div className="bg-white flex gap-2 items-center py-3.5 w-[670px]">
          <div className="h-0 w-[60px] relative">
            <div className="absolute inset-y-[-1px] inset-x-0">
              <img src={`${ASSETS}/edf6248a-c6fd-4b20-b5d3-c68e91c2cb57.svg`} alt="" className="block w-full h-full" />
            </div>
          </div>
          <p className="text-base font-bold text-blue-gray-900 tracking-widest uppercase">Information & Documents</p>
          <div className="flex-1 h-0 relative">
            <div className="absolute inset-y-[-1px] inset-x-0">
              <img src={`${ASSETS}/68c80ebf-5e48-4cbd-8b98-bdc4758045f1.svg`} alt="" className="block w-full h-full" />
            </div>
          </div>
        </div>

        {/* Description text */}
        <div className="bg-white flex items-center justify-center p-4 w-[672px]">
          <p className="flex-1 text-xl text-black leading-normal">
            Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
          </p>
        </div>

        {/* Arrival in Paris day header */}
        <div className="bg-white flex gap-2 items-center py-3.5 w-[670px]">
          <div className="h-0 w-[60px] relative">
            <div className="absolute inset-y-[-1px] inset-x-0">
              <img src={`${ASSETS}/edf6248a-c6fd-4b20-b5d3-c68e91c2cb57.svg`} alt="" className="block w-full h-full" />
            </div>
          </div>
          <p className="text-base font-bold text-blue-gray-900 tracking-widest uppercase">Arrival in Paris</p>
          <p className="text-base text-blue-gray-900 leading-tight">Aug 9</p>
          <div className="flex-1 h-0 relative">
            <div className="absolute inset-y-[-1px] inset-x-0">
              <img src={`${ASSETS}/c76e7549-d473-4dc6-862e-a8822b1c20eb.svg`} alt="" className="block w-full h-full" />
            </div>
          </div>
        </div>

      </div>

      {/* Empty background placeholder areas visible behind white card */}
      <div className="absolute top-[103px] left-[304px] w-[926px] h-[134px] border-b border-gray-200 flex gap-2.5 items-start pl-[34px] pt-[13px] rounded-tl-lg rounded-tr-lg">
        <div className="flex flex-col gap-2 items-start justify-center">
          <div className="h-5 w-[41px]" />
        </div>
        <div className="flex flex-col gap-1 items-start justify-center">
          <div className="h-6 w-[162px]" />
        </div>
      </div>

    </div>
  )
}
