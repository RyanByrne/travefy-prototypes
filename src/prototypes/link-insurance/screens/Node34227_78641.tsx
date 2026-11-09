// Node 34227:78641 - Advisor: Settings - 1728x1198px
// Full Travefy app chrome with settings panel

import { NavbarApplication } from '../chrome/NavbarApplication'
import { TripsList } from '../chrome/TripsList'
import { TripMenu } from '../chrome/TripMenu'
import { TripHeader } from '../chrome/TripHeader'

const ASSETS = '/figma-assets/34227-78641'

export function Node34227_78641() {
  return (
    <div className="bg-blue-gray-50 flex flex-col w-[1400px] h-[971px]">
      <NavbarApplication />

      {/* Main content with sidebars and settings panel */}
      <div className="flex flex-1 overflow-hidden">
        <TripsList />
        <TripMenu />

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Trip header */}
          <div className="flex items-center min-h-0 pt-4 px-4 w-full">
            <div className="flex flex-1 flex-col gap-4 h-full items-center min-w-0">
              <TripHeader />
            </div>
          </div>
          
          {/* Travel Protection Settings panel */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden">
            {/* Panel header */}
          <div className="border-b border-gray-200 px-5 py-4 shrink-0">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-blue-gray-900 leading-relaxed">Travel Protection</h1>
              <div className="relative shrink-0 size-4">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/ba3d59b3-2c15-4aa8-9c20-ea25cb9c4a59.svg`} />
              </div>
            </div>
            <p className="text-base font-normal leading-4 overflow-hidden text-blue-gray-600 text-ellipsis whitespace-nowrap">Insurance</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 flex shrink-0">
            <button className="px-4 py-3 text-base font-semibold text-primary-600 border-b-2 border-primary-600">
              Settings
            </button>
            <button className="px-4 py-3 text-base font-semibold text-blue-gray-600 hover:text-primary-600 border-b-2 border-transparent">
              Responses
            </button>
          </div>

          {/* Settings content - scrollable */}
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col px-5 py-6">
              {/* Content header with Send buttons */}
              <div className="flex items-center justify-between mb-8 w-[866px]">
                <h2 className="text-2xl font-semibold text-blue-gray-900">Insurance offer</h2>
                <div className="flex gap-1">
                  <button className="border border-gray-200 flex gap-2 h-7 items-center justify-center px-3 py-2 rounded">
                    <p className="text-xs font-semibold text-primary-400 leading-[12px]">Preview</p>
                  </button>
                  <button className="border border-gray-200 flex gap-2 h-7 items-center justify-center px-3 py-2 rounded">
                    <div className="relative shrink-0 size-3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/685ab037-0fa9-4a0d-ba65-74b023b85bc9.svg`} />
                    </div>
                  </button>
                </div>
              </div>

              {/* Insurance for this trip toggle */}
              <div className="flex gap-4 items-center mb-6 w-[866px]">
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm font-semibold text-black leading-tight">Insurance for this trip</p>
                  </div>
                  <p className="text-xs font-normal text-black leading-relaxed">
                    Toggle visibility of insurance offer on Proposals and Itineraries.
                  </p>
                </div>
                <button className="flex gap-2 items-start shrink-0">
                  <div className="h-5 relative shrink-0 w-10">
                    <div className="absolute inset-0 rounded-[40px] bg-primary-600" />
                    <div className="absolute bg-white rounded-[40px] size-4 top-0.5 right-[2.83px]" />
                  </div>
                </button>
              </div>

              <div className="bg-[#e5e8eb] h-px mb-6 w-full" />

              {/* Insurance provider */}
              <div className="flex flex-col gap-2 mb-6 w-full">
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm font-semibold text-black leading-tight">Insurance provider</p>
                  </div>
                  <p className="text-xs font-normal text-black leading-relaxed min-w-full w-min">
                    Choose a linked provider, or pick + Add new at the bottom of the list for one without a linked account.
                  </p>
                </div>
                <div className="bg-blue-gray-50 border border-blue-gray-300 flex flex-col items-start p-3 rounded w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col justify-center leading-[0]">
                      <p className="font-semibold leading-tight text-sm text-black">Allianz Travel (linked account)</p>
                    </div>
                    <div className="relative shrink-0 size-3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/1b02e636-9211-490a-86c7-dff823279480.svg`} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#e5e8eb] h-px mb-6 w-full" />

              {/* Who buys */}
              <div className="flex flex-col gap-2 mb-6 w-full">
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm font-semibold text-black leading-tight">Who buys</p>
                  </div>
                  <p className="text-xs font-normal text-black leading-relaxed">
                    Traveler purchases directly is unavailable when the provider has no traveler checkout.
                  </p>
                </div>
                <div className="bg-blue-gray-50 border border-blue-gray-300 flex flex-col items-start p-3 rounded w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col justify-center leading-[0]">
                      <p className="font-semibold leading-tight text-sm text-black">Advisor chooses one per traveler</p>
                    </div>
                    <div className="relative shrink-0 size-3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/1b02e636-9211-490a-86c7-dff823279480.svg`} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#e5e8eb] h-px mb-6 w-full" />

              {/* Total trip cost */}
              <div className="flex flex-col gap-2 mb-6 w-full">
                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm font-semibold text-black leading-tight">Total trip cost</p>
                  </div>
                  <p className="text-xs font-normal text-black leading-relaxed min-w-full w-min">
                    Confirm the trip cost used for quotes. Traveler details prefill from the CRM or their login.
                  </p>
                </div>
                <div className="flex flex-col gap-0.5 w-full">
                  <div className="bg-blue-gray-50 border border-blue-gray-300 flex items-center px-3 py-2 rounded w-full">
                    <p className="flex-1 font-normal leading-relaxed text-sm text-black">$8,950</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#e5e8eb] h-px mb-6 w-full" />

              {/* Travelers who see the offer */}
              <div className="flex flex-col gap-2 mb-6 w-full">
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm font-semibold text-black leading-tight">Travelers who see the offer</p>
                  </div>
                  <p className="text-xs font-normal text-black leading-relaxed">
                    Everyone, all travelers on this trip, or just adults, or one specific group.
                  </p>
                </div>
                <div className="bg-blue-gray-50 border border-blue-gray-300 flex flex-col items-start p-3 rounded w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col justify-center leading-[0]">
                      <p className="font-semibold leading-tight text-sm text-black">Everyone, all travelers on this trip</p>
                    </div>
                    <div className="relative shrink-0 size-3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/1b02e636-9211-490a-86c7-dff823279480.svg`} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#e5e8eb] h-px mb-6 w-full" />

              {/* Require e-signature toggle */}
              <div className="flex gap-4 items-center mb-6 w-[866px]">
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm font-semibold text-black leading-tight">Require e-signature on decisions</p>
                    <div className="bg-grandis-100 border border-grandis-400 flex gap-1 items-center px-2.5 py-0.5 rounded-3xl">
                      <p className="text-xs font-normal text-grandis-800 leading-relaxed">Open question</p>
                    </div>
                  </div>
                  <p className="text-xs font-normal text-black leading-relaxed">
                    Both Accept and Decline capture a signature. Decision history is kept regardless of this toggle.
                  </p>
                </div>
                <button className="flex gap-2 items-start shrink-0">
                  <div className="h-5 relative shrink-0 w-10">
                    <div className="absolute inset-0 rounded-[40px] bg-gray-600" />
                    <div className="absolute bg-white rounded-[40px] size-4 top-0.5 left-[2.5px]" />
                  </div>
                </button>
              </div>

              <div className="bg-[#e5e8eb] h-px mb-6 w-full" />

              {/* Set automation toggle */}
              <div className="flex gap-4 items-center mb-6 w-[866px]">
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm font-semibold text-black leading-tight">Set automation to remind traveler</p>
                  </div>
                  <p className="text-xs font-normal text-black leading-relaxed">
                    Send a reminder X days before final payment date if no decision yet.
                  </p>
                </div>
                <button className="flex gap-2 items-start shrink-0">
                  <div className="h-5 relative shrink-0 w-10">
                    <div className="absolute inset-0 rounded-[40px] bg-primary-600" />
                    <div className="absolute bg-white rounded-[40px] size-4 top-0.5 right-[2.83px]" />
                  </div>
                </button>
              </div>

              {/* Sticky footer placeholder */}
              <div className="flex h-[60px] items-center justify-end py-2 w-full" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
