// Node 34160:3830 - Insurance card component states showcase
// All 6 card states stacked vertically with 12px gap

const ASSETS = '/figma-assets/34160-3830'

export function Node34160_3830() {
  return (
    <div className="flex flex-col items-center justify-start gap-3 bg-gray-50 w-[632px] p-4">
      
      {/* 1. Quotes card - 3 plans, Prime selected */}
      <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-full">
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
          <p className="text-sm font-semibold text-primary-600">Sample policy</p>
          <div className="bg-primary-100 flex items-center px-2.5 py-0.5 rounded-full">
            <p className="text-xs font-semibold text-primary-800">Choose a plan</p>
          </div>
          <img src={`${ASSETS}/10dc0c15-1e6e-4398-9d1c-ef58e7c53bcf.svg`} alt="Collapse" className="w-4 h-4" />
        </div>
        
        <div className="flex flex-col gap-3 items-start overflow-hidden px-5 py-3.5 w-full">
          <p className="text-base font-bold text-blue-gray-900 leading-relaxed">Add travel protection?</p>
          <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-start text-xs leading-relaxed w-full">
            <p className="text-blue-gray-500">Your details:</p>
            <p className="font-semibold text-blue-gray-900">Elisa Denton</p>
            <p className="text-blue-gray-600">| DOB Mar 3, 1986 | Colorado | Trip cost $8,400</p>
            <p className="font-semibold text-primary-600">Edit</p>
          </div>
          
          <div className="border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-full">
            {/* Basic plan row */}
            <div className="bg-white flex gap-3 items-center px-4 py-3 w-full">
              <img src={`${ASSETS}/a20f4fcb-057c-4a66-850b-7ecee5400d05.svg`} alt="" className="w-[18px] h-[18px]" />
              <div className="flex-1">
                <p className="text-sm font-bold text-blue-gray-900">OneTrip Basic</p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-blue-gray-600">
                  <p>Cancellation up to $5,000</p>
                  <p>Medical $10,000</p>
                </div>
              </div>
              <p className="text-xl font-bold text-blue-gray-900 text-right">$38</p>
            </div>
            
            {/* Prime plan row - selected */}
            <div className="bg-primary-50 border-t border-gray-100 flex gap-3 items-center px-4 py-3 w-full relative">
              <img src={`${ASSETS}/370c6fda-587c-4fe4-8fce-f661cd8e66b2.svg`} alt="" className="w-[18px] h-[18px]" />
              <div className="flex-1">
                <p className="text-sm font-bold text-blue-gray-900">OneTrip Prime</p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-blue-gray-600">
                  <p>Cancellation up to $8,400</p>
                  <p>Medical $50,000</p>
                  <p>Baggage $1,000</p>
                </div>
              </div>
              <p className="text-xl font-bold text-blue-gray-900 text-right">$72</p>
              <div className="absolute left-0 top-[-1px] bottom-0 w-[3px] bg-primary-600" />
            </div>
            
            {/* Premier plan row */}
            <div className="bg-white border-t border-gray-100 flex gap-3 items-center px-4 py-3 w-full">
              <img src={`${ASSETS}/a20f4fcb-057c-4a66-850b-7ecee5400d05.svg`} alt="" className="w-[18px] h-[18px]" />
              <div className="flex-1">
                <p className="text-sm font-bold text-blue-gray-900">OneTrip Premier</p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-blue-gray-600">
                  <p>Cancellation up to $8,400</p>
                  <p>Medical $100,000</p>
                  <p>Baggage $2,000</p>
                </div>
              </div>
              <p className="text-xl font-bold text-blue-gray-900 text-right">$118</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs w-full">
            <p className="font-semibold text-primary-600">Compare coverage ▾</p>
            <p className="text-blue-gray-500">Prices may change slightly before purchase.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 flex gap-3 items-center overflow-hidden pb-4 pt-3 px-5 w-full">
          <p className="flex-1 text-xs text-blue-gray-500 leading-relaxed">Editing your details gets new quotes. Your decision is saved with your name and the time.</p>
          <button className="border border-gray-200 px-4 py-2 rounded text-sm font-semibold text-primary-600 hover:bg-gray-50">
            Decline
          </button>
          <button className="bg-primary-600 px-4 py-2 rounded text-sm font-semibold text-white hover:bg-primary-700">
            Continue with Prime, $72
          </button>
        </div>
      </div>

      {/* 2. Pre-quote intro card */}
      <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-full">
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
          <p className="text-sm font-semibold text-primary-600">Sample policy</p>
          <img src={`${ASSETS}/10dc0c15-1e6e-4398-9d1c-ef58e7c53bcf.svg`} alt="Collapse" className="w-4 h-4" />
        </div>
        
        <div className="flex flex-col gap-2 items-start overflow-hidden px-5 py-3.5 w-full">
          <p className="text-base font-bold text-blue-gray-900 leading-relaxed">Add travel protection?</p>
          <p className="text-sm text-blue-gray-600 leading-tight w-full">
            Your advisor shared a travel protection offer for this trip. Get a quote to see plans and prices for your details, or decline.
          </p>
          <p className="text-xs text-blue-gray-500 leading-relaxed w-full">
            Plans can include trip cancellation, medical and baggage cover.
          </p>
        </div>
        
        <div className="border-t border-gray-100 flex gap-3 items-center overflow-hidden pb-4 pt-3 px-5 w-full">
          <p className="flex-1 text-xs text-blue-gray-500 leading-relaxed">Your decision is saved with your name and the time.</p>
          <button className="border border-gray-200 px-4 py-2 rounded text-sm font-semibold text-primary-600 hover:bg-gray-50">
            Decline
          </button>
          <button className="bg-primary-600 px-4 py-2 rounded text-sm font-semibold text-white hover:bg-primary-700">
            Get a quote
          </button>
        </div>
      </div>

      {/* 3. Accepted collapsed row */}
      <div className="bg-white border border-gray-200 flex items-center overflow-hidden rounded-lg h-[60px] w-full">
        <div className="bg-[#003781] h-full w-1" />
        <div className="flex-1 flex gap-3 items-center px-4 py-3">
          <div className="border-[#003781] border-[1.5px] border-dashed flex h-[26px] items-center justify-center px-2 rounded w-[46px]">
            <p className="text-xs font-semibold text-[#003781] tracking-wide">LOGO</p>
          </div>
          <div className="flex-1 flex flex-col gap-0.5">
            <p className="text-sm font-bold text-blue-gray-900 leading-tight">Allianz Travel (example) · OneTrip Prime</p>
            <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-xs">
              <p className="font-semibold text-blue-gray-900">$72</p>
              <p className="text-blue-gray-600">· Accepted May 11 by Elisa Denton. Not covered until purchased</p>
            </div>
          </div>
          <div className="bg-indigo-100 flex items-center px-2.5 py-0.5 rounded-full">
            <p className="text-xs font-semibold text-indigo-800">Accepted</p>
          </div>
          <img src={`${ASSETS}/5d1398e8-d832-4271-ae29-436368500b3d.svg`} alt="Expand" className="w-4 h-4" />
        </div>
      </div>

      {/* 4. Purchased collapsed row */}
      <div className="bg-white border border-gray-200 flex items-center overflow-hidden rounded-lg h-[60px] w-full">
        <div className="bg-[#003781] h-full w-1" />
        <div className="flex-1 flex gap-3 items-center px-4 py-3">
          <div className="border-[#003781] border-[1.5px] border-dashed flex h-[26px] items-center justify-center px-2 rounded w-[46px]">
            <p className="text-xs font-semibold text-[#003781] tracking-wide">LOGO</p>
          </div>
          <div className="flex-1 flex flex-col gap-0.5">
            <p className="text-sm font-bold text-blue-gray-900 leading-tight">Allianz Travel (example) · OneTrip Prime</p>
            <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-xs">
              <p className="font-semibold text-blue-gray-900">$72</p>
              <p className="text-blue-gray-600">· Policy ALZ-48213, covered Jun 2 to Jun 14</p>
              <p className="font-semibold text-primary-600">· View policy</p>
            </div>
          </div>
          <div className="bg-green-100 flex items-center px-2.5 py-0.5 rounded-full">
            <p className="text-xs font-semibold text-green-800">✓ Purchased</p>
          </div>
          <img src={`${ASSETS}/5d1398e8-d832-4271-ae29-436368500b3d.svg`} alt="Expand" className="w-4 h-4" />
        </div>
      </div>

      {/* 5. Declined collapsed row */}
      <div className="bg-white border border-gray-200 flex items-center overflow-hidden rounded-lg h-[60px] w-full">
        <div className="bg-[#003781] h-full w-1" />
        <div className="flex-1 flex gap-3 items-center px-4 py-3">
          <div className="border-[#003781] border-[1.5px] border-dashed flex h-[26px] items-center justify-center px-2 rounded w-[46px]">
            <p className="text-xs font-semibold text-[#003781] tracking-wide">LOGO</p>
          </div>
          <div className="flex-1 flex flex-col gap-0.5">
            <p className="text-sm font-bold text-blue-gray-900 leading-tight">Allianz Travel (example) · Travel protection</p>
            <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-xs">
              <p className="text-blue-gray-600">Declined May 11, 14:02 by Elisa Denton</p>
              <p className="font-semibold text-primary-600">· Change your mind?</p>
            </div>
          </div>
          <div className="bg-gray-100 flex items-center px-2.5 py-0.5 rounded-full">
            <p className="text-xs font-semibold text-blue-gray-900">Declined</p>
          </div>
          <img src={`${ASSETS}/5d1398e8-d832-4271-ae29-436368500b3d.svg`} alt="Expand" className="w-4 h-4" />
        </div>
      </div>

      {/* 6. Logged-out collapsed row */}
      <div className="bg-white border border-gray-200 flex items-center overflow-hidden rounded-lg h-[60px] w-full">
        <div className="bg-[#003781] h-full w-1" />
        <div className="flex-1 flex gap-3 items-center px-4 py-3">
          <div className="border-[#003781] border-[1.5px] border-dashed flex h-[26px] items-center justify-center px-2 rounded w-[46px]">
            <p className="text-xs font-semibold text-[#003781] tracking-wide">LOGO</p>
          </div>
          <div className="flex-1 flex flex-col gap-0.5 min-w-0">
            <p className="text-sm font-bold text-blue-gray-900 leading-tight whitespace-nowrap overflow-hidden">Allianz Travel (example) · Travel protection</p>
            <p className="text-xs text-blue-gray-600 whitespace-nowrap">Your advisor shared an offer for this trip.</p>
          </div>
          <button className="px-0 py-1 text-xs font-semibold text-primary-600 whitespace-nowrap shrink-0">
            Decline
          </button>
          <button className="bg-primary-600 px-3 py-2 rounded text-xs font-semibold text-white whitespace-nowrap shrink-0">
            Log in to get a quote
          </button>
          <img src={`${ASSETS}/635f7b6f-e171-4c41-a3e1-68b30b534748.svg`} alt="Expand" className="w-4 h-4" />
        </div>
      </div>

    </div>
  )
}
