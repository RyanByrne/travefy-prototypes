// Travefy application navbar - extracted from reference-code.tsx
// Blue primary navigation bar with logo, nav links, tasks, avatar

const ASSETS = '/figma-assets/34227-78843'

export function NavbarApplication() {
  return (
    <div className="bg-primary-400 flex flex-col w-full shrink-0">
      <div className="flex items-center px-0 py-2 w-full">
        <div className="flex flex-1 gap-8 items-center min-w-0 px-4">
          {/* Logo and primary nav */}
          <div className="flex flex-1 items-center min-w-0">
            <div className="flex gap-5 items-center shrink-0 w-16">
              <div className="relative shrink-0 size-6">
                <div className="absolute inset-[6.2%_0_6.43%_0]">
                  <img alt="Travefy" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/d18e8e95-1f80-4e86-bdfe-726c6e51ed6b.svg`} />
                </div>
              </div>
              <div className="flex h-6 items-center justify-center relative shrink-0 w-0">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-6">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={`${ASSETS}/ea1845c0-4792-425a-8e8f-5ab6341f4366.svg`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Nav links */}
            <div className="flex flex-1 gap-2 items-center min-w-0 p-0">
              <div className="bg-primary-500 flex gap-2 items-center justify-center px-3 py-1.5 relative rounded shrink-0">
                <p className="font-normal leading-relaxed not-italic relative shrink-0 text-base text-white whitespace-nowrap">
                  Compass
                </p>
              </div>
              <div className="bg-primary-400 flex gap-2 items-center justify-center px-3 py-1.5 relative rounded shrink-0">
                <p className="font-normal leading-relaxed not-italic relative shrink-0 text-base text-white whitespace-nowrap">
                  Trips
                </p>
              </div>
              <div className="bg-primary-400 flex gap-2 items-center justify-center px-3 py-1.5 relative rounded shrink-0">
                <p className="font-normal leading-relaxed not-italic relative shrink-0 text-base text-white whitespace-nowrap">
                  Business Hub
                </p>
                <div className="relative shrink-0 size-2.5">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/e3d188bb-2efc-4f24-aa3e-02d80ec4e74b.svg`} />
                </div>
              </div>
              <div className="bg-primary-400 flex gap-2 items-center justify-center px-3 py-1.5 relative rounded shrink-0">
                <p className="font-normal leading-relaxed not-italic relative shrink-0 text-base text-white whitespace-nowrap">
                  Resources
                </p>
                <div className="relative shrink-0 size-2.5">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/e3d188bb-2efc-4f24-aa3e-02d80ec4e74b.svg`} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Tasks, Avatar, Learn */}
          <div className="flex gap-2 items-center shrink-0">
            {/* Tasks with notification */}
            <div className="flex gap-2 items-center justify-end p-3 relative rounded shrink-0">
              <div className="relative shrink-0 size-4">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/866459c1-f112-4b18-a38b-6b41c57ca0b8.svg`} />
              </div>
              <div className="absolute flex gap-1.5 items-center right-0 size-5 top-0">
                <div className="flex-1 h-full min-w-0 relative">
                  <div className="absolute inset-[-5%]">
                    <img alt="" className="block max-w-none size-full" src={`${ASSETS}/f6447694-9a51-45df-8c1b-1e0e1276ab0a.svg`} />
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 flex flex-col font-semibold justify-center leading-[0] left-1/2 not-italic absolute text-xs text-white text-center top-1/2 whitespace-nowrap">
                  <p className="leading-relaxed">8</p>
                </div>
              </div>
            </div>
            
            {/* Avatar */}
            <div className="flex gap-2 items-center justify-end px-3 py-1 relative rounded shrink-0">
              <div className="relative rounded-2xl shrink-0 size-8">
                <div className="absolute inset-0 pointer-events-none rounded-2xl">
                  <div className="absolute bg-white inset-0 rounded-2xl" />
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <img alt="" className="absolute left-[-36.72%] max-w-none size-[170.31%] top-[-3.91%]" src={`${ASSETS}/74371420-7311-4e55-b1ec-75a821c043cd.png`} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-base text-white text-center whitespace-nowrap">
                <p className="leading-relaxed">Kim Anderson</p>
              </div>
            </div>
            
            {/* Learn */}
            <div className="flex gap-2 h-9 items-center justify-end px-3 py-2 relative shrink-0">
              <div className="relative shrink-0 size-4">
                <div className="absolute inset-[0_-2.86%_-2.86%_0]">
                  <img alt="" className="block max-w-none size-full" src={`${ASSETS}/2c9e9edc-d0c9-4f28-a7dc-06b803a2f8fd.svg`} />
                </div>
              </div>
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-base text-white text-center whitespace-nowrap">
                <p className="leading-relaxed">Learn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
