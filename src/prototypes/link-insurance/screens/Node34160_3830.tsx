// Node 34160:3830 - Insurance card component states showcase - 632x340px
// Shows the offer card design that appears in traveler itinerary

export function Node34160_3830() {
  return (
    <div className="flex items-center justify-center bg-gray-50 w-[632px] h-[340px] p-4">
      <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-full max-w-[600px]">
        <div className="border-b border-gray-100 flex gap-3 items-center overflow-hidden pb-3.5 pt-4 px-5 w-full">
          <div className="bg-[#003781] h-[34px] rounded-sm w-1" />
          <div className="border-[#003781] border-[1.5px] border-dashed flex h-8 items-center justify-center overflow-hidden px-2 rounded-md w-[110px]">
            <p className="text-xs font-semibold text-[#003781] tracking-wider">PROVIDER LOGO</p>
          </div>
          <div className="flex-1 flex flex-col gap-0.5 items-start leading-relaxed overflow-hidden">
            <div className="flex gap-1.5 items-center overflow-hidden">
              <p className="font-bold text-base text-blue-gray-900">Allianz Travel</p>
            </div>
            <p className="text-xs text-blue-gray-600 w-full">Travel with confidence</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 items-start overflow-hidden px-5 py-3.5 w-full">
          <p className="text-base font-bold text-blue-gray-900 leading-relaxed">Add travel protection?</p>
          <p className="text-xs text-blue-gray-500 leading-relaxed w-full">
            Your details: Elisa Denton | DOB Mar 3, 1986 | Colorado | Trip cost $8,400
          </p>
          
          <div className="border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-full">
            <div className="bg-white flex gap-3 items-center px-4 py-3 w-full border-b border-gray-100">
              <div className="w-[18px] h-[18px] bg-gray-300 rounded-full border-2 border-gray-300" />
              <div className="flex-1">
                <p className="text-sm font-bold text-blue-gray-900">OneTrip Basic</p>
                <p className="text-xs text-blue-gray-600">Cancellation $5,000 | Medical $10,000</p>
              </div>
              <p className="text-xl font-bold">$38</p>
            </div>
            <div className="bg-primary-50 flex gap-3 items-center px-4 py-3 w-full relative">
              <div className="w-[18px] h-[18px] bg-primary-600 rounded-full border-2 border-primary-600 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-blue-gray-900">OneTrip Prime</p>
                <p className="text-xs text-blue-gray-600">Cancellation $8,400 | Medical $50,000 | Baggage $1,000</p>
              </div>
              <p className="text-xl font-bold">$72</p>
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-600" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 flex gap-3 items-center overflow-hidden pb-4 pt-3 px-5 w-full">
          <p className="flex-1 text-xs text-blue-gray-500 leading-relaxed">Your decision is saved</p>
          <button className="border border-gray-200 px-4 py-2 rounded text-sm font-semibold text-primary-600 hover:bg-gray-50">
            Decline
          </button>
          <button className="bg-primary-600 px-4 py-2 rounded text-sm font-semibold text-white hover:bg-primary-700">
            Continue with Prime, $72
          </button>
        </div>
      </div>
    </div>
  )
}
