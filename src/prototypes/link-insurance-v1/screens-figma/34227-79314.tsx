const imgSelectedFalse = "/src/prototypes/link-insurance-v1/assets/3325e8c0-2be2-4fb3-a4e4-faf2aec0f5e6.svg";
const imgSelectedTrue = "/src/prototypes/link-insurance-v1/assets/b14ecd22-4d8f-4ffc-9c22-18606de58eea.svg";
const imgTypeCircleSizeLgContentImageNotificationDotFalse = "/src/prototypes/link-insurance-v1/assets/8834cf4e-fd8f-4151-aaa9-b900f5fab92a.png";
const imgFlowbiteSolidPlus = "/src/prototypes/link-insurance-v1/assets/3c3afc2e-ed6e-482d-85b0-de8aada5d2dc.svg";
const imgTripThumbnail = "/src/prototypes/link-insurance-v1/assets/06c3e6b8-5d2e-421a-be2a-47ca2e2c1f2b.png";
const imgHero = "/src/prototypes/link-insurance-v1/assets/2aa866ad-c9bd-4708-af67-5dd423235b19.png";
const imgContent = "/src/prototypes/link-insurance-v1/assets/45fd13ac-f327-40c9-ac59-930964d6d8c6.png";
const imgFlowbiteSolidChevronDown = "/src/prototypes/link-insurance-v1/assets/d78fee18-5721-4dfe-8f50-62bdd38cabc2.svg";
const imgMaterialRoundedPhoneAndroidRounded = "/src/prototypes/link-insurance-v1/assets/ecc893ea-3e48-4508-9da1-126830252f68.svg";
const imgFlowbiteOutlineFileLinesOutline = "/src/prototypes/link-insurance-v1/assets/77147e87-cbbc-48df-9785-79246844f563.svg";
const imgCustomIconChatOneBubble = "/src/prototypes/link-insurance-v1/assets/5cef2118-5de0-4e46-90a1-0dde5d6de0e5.svg";
const imgFlowbiteOutlineEnvelopeOutline = "/src/prototypes/link-insurance-v1/assets/c900e796-12da-45ea-9a2c-3bb8c01a310a.svg";
const imgShield = "/src/prototypes/link-insurance-v1/assets/e17eae23-3202-4074-846c-28618854c507.svg";
const imgCollapse = "/src/prototypes/link-insurance-v1/assets/2208f1ff-269c-4091-bd73-596413ff9d50.svg";
const imgExpand = "/src/prototypes/link-insurance-v1/assets/22a09208-8107-4a7e-aa8f-148678ac7a89.svg";
const imgExpand1 = "/src/prototypes/link-insurance-v1/assets/7a5e2fb6-e5d9-4e87-9cae-540992e6780d.svg";
const imgLine2 = "/src/prototypes/link-insurance-v1/assets/22191128-0fac-408f-aefb-a964f251a1dd.svg";
const imgLine1 = "/src/prototypes/link-insurance-v1/assets/ea1ad5bf-9667-43fa-a411-e1f1101bc1f5.svg";
const imgLine3 = "/src/prototypes/link-insurance-v1/assets/32d07973-6881-430d-a89a-a0b5222f2e05.svg";

type RadioLocalInsuranceOfferCardProps = {
  className?: string;
  selected?: boolean;
};

function RadioLocalInsuranceOfferCard({ className, selected = false }: RadioLocalInsuranceOfferCardProps) {
  const isSelected = selected;
  return (
    <div className={className || "relative size-[18px]"} id={isSelected ? "node-34159_3682" : "node-34159_3680"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isSelected ? imgSelectedTrue : imgSelectedFalse} />
    </div>
  );
}

type PlanRowInsuranceOfferCardProps = {
  className?: string;
  highlight1?: string;
  highlight2?: string;
  highlight3?: string;
  planName?: string;
  price?: string;
  selected?: boolean;
  showHighlight3?: boolean;
};

function PlanRowInsuranceOfferCard({ className, highlight1 = "Cancellation up to $8,400", highlight2 = "Medical $50,000", highlight3 = "Baggage $1,000", planName = "OneTrip Prime", price = "$72", selected = false, showHighlight3 = true }: PlanRowInsuranceOfferCardProps) {
  const isSelected = selected;
  return (
    <div className={className || `${String.raw`border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-[600px] `}${isSelected ? String.raw`bg-[var(--primary\/50,#eff9ff)]` : "bg-[var(--white,white)]"}`} id={isSelected ? "node-34159_3698" : "node-34159_3685"}>
      <RadioLocalInsuranceOfferCard className="relative shrink-0 size-[18px]" selected={isSelected ? true : undefined} />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" id={isSelected ? "node-34159_3701" : "node-34159_3688"} data-name="Plan">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" id={isSelected ? "node-34159_3702" : "node-34159_3689"} data-name="Name line">
          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34159:3690">
            {planName}
          </p>
        </div>
        <div className="[word-break:break-word] content-start flex flex-wrap font-['Inter:Regular'] gap-[2px_12px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-full whitespace-nowrap" id={isSelected ? "node-34159_3706" : "node-34159_3693"} data-name="Highlights">
          <p className="relative shrink-0" data-node-id="34159:3694">
            {highlight1}
          </p>
          <p className="relative shrink-0" data-node-id="34159:3695">
            {highlight2}
          </p>
          {showHighlight3 && (
            <p className="relative shrink-0" data-node-id="34159:3696">
              {highlight3}
            </p>
          )}
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[20px] text-[color:var(--blue-gray\/900,#223e47)] text-right whitespace-nowrap" data-node-id="34159:3697">
        {price}
      </p>
      {isSelected && <div className="absolute bg-[var(--primary\/600,#2a79a6)] bottom-0 left-0 top-[-1px] w-[3px]" data-node-id="34159:3711" data-name="Selected accent" />}
    </div>
  );
}

type AvatarProps = {
  className?: string;
  content?: "Image";
  notificationDot?: "False";
  size?: "lg";
  type?: "Circle";
};

function Avatar({ className, content = "Image", notificationDot = "False", size = "lg", type = "Circle" }: AvatarProps) {
  return (
    <div className={className || "relative rounded-[100px] size-[64px]"} data-node-id="26475:19054">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgTypeCircleSizeLgContentImageNotificationDotFalse} />
    </div>
  );
}

type WebItineraryNavItemProps = {
  className?: string;
  state?: "Default";
  type?: "Exact Day";
};

function WebItineraryNavItem({ className, state = "Default", type = "Exact Day" }: WebItineraryNavItemProps) {
  return (
    <div className={className || "bg-[var(--blue-gray\\/50,#f4f7fb)] border-[var(--blue-gray\\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative w-[376px]"} data-node-id="28214:95008">
      <div className="relative shrink-0 size-[16px]" data-node-id="28214:95009" data-name="flowbite_solid-plus">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="28214:95010">
        <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="28214:95011">
          Aug 10
        </p>
        <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="28214:95012">
          Arrival in Paris
        </p>
      </div>
    </div>
  );
}

export default function TravelerItineraryMultipleProvidersOneAcceptedBefore() {
  return (
    <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-start relative size-full" data-node-id="34227:79314" data-name="Traveler itinerary: multiple providers, one accepted (before)">
      <div className="bg-[var(--white,white)] content-stretch flex flex-col gap-[var(--0,0px)] items-start pl-[var(--32,128px)] pr-[var(--14,56px)] py-[var(--0,0px)] relative shrink-0 w-full" data-node-id="34227:79315" data-name="Navbar (application)">
        <div className="content-stretch flex gap-[var(--0,0px)] items-center px-[var(--0,0px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:79315;16661:1302" data-name="Navbar">
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--8,32px)] items-center min-w-px px-[var(--4,16px)] py-[var(--0,0px)] relative" data-node-id="I34227:79315;16661:1303" data-name="Content">
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--0,0px)] items-center min-w-px relative" data-node-id="I34227:79315;16661:1304" data-name="Primary global navigation">
              <div className="content-stretch flex gap-[var(--1․5,6px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:79315;16661:1305" data-name="Nav Links">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79315;16661:1306">
                  Viewing as
                </p>
                <div className="content-stretch flex gap-[var(--0,0px)] items-center relative shrink-0 w-[291px]" data-node-id="I34227:79315;16661:1307">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px px-[var(--0,0px)] py-[var(--3,12px)] relative rounded-[var(--rounded,4px)]" data-node-id="I34227:79315;16661:1308" data-name="Select input">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34227:79315;16661:1309" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semibold'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:79315;16661:1310">
                        <p className="leading-[1.25]">Elisa Denton</p>
                      </div>
                      <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79315;16661:1311" data-name="flowbite_solid-chevron-down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--3․5,14px)] items-center relative shrink-0" data-node-id="I34227:79315;16661:1312">
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34227:79315;16661:1313">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:79315;16661:1314" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34227:79315;16661:1314;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79315;16661:1314;16101:9150" data-name="material_rounded-PhoneAndroidRounded">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialRoundedPhoneAndroidRounded} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79315;16661:1314;16082:43071">
                      App
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34227:79315;16661:1336">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:79315;16661:1337" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34227:79315;16661:1337;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79315;16661:1337;16101:9150" data-name="flowbite_outline-file-lines-outline">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineFileLinesOutline} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79315;16661:1337;16082:43071">
                      PDF
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[20px]" data-node-id="I34227:79315;16661:1319" data-name="custom_icon-chat-one-bubble">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChatOneBubble} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34227:79316">
        <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-center px-[224px] relative shrink-0 w-full" data-node-id="34227:79317">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34227:79318">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="34227:79319">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34227:79320">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34227:79321">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--9,36px)] items-start min-w-px pb-[64px] pt-[var(--5,20px)] relative" data-node-id="34227:79322">
                    <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start px-[var(--5,20px)] relative shrink-0 w-[400px]" data-node-id="34227:79323" data-name="Web itinerary sidebar nav">
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--2․5,10px)] items-center pl-[var(--0,0px)] pr-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79323;16647:80450" data-name="Web itinerary nav item">
                        <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[40px]" data-node-id="I34227:79323;16647:80450;16647:80448" data-name="Trip thumbnail">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I34227:79323;16647:80450;16647:80443">
                          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] uppercase w-full" data-node-id="I34227:79323;16647:80450;16647:80445">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <WebItineraryNavItem className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" />
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79323;16647:80283" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79323;16647:80283;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79323;16647:80283;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79323;16647:80283;16645:80221">
                            Aug 11
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79323;16647:80283;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79323;16647:80291" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79323;16647:80291;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79323;16647:80291;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79323;16647:80291;16645:80221">
                            Aug 12
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79323;16647:80291;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79323;16647:80298" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79323;16647:80298;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79323;16647:80298;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79323;16647:80298;16645:80221">
                            Aug 13
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79323;16647:80298;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79323;16647:80305" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79323;16647:80305;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79323;16647:80305;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79323;16647:80305;16645:80221">
                            Aug 14
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79323;16647:80305;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-center justify-center overflow-clip pr-[var(--0,0px)] relative rounded-tl-[var(--rounded-lg,8px)] rounded-tr-[var(--rounded-lg,8px)] shrink-0" data-node-id="34227:79324">
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34227:79325">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-w-px relative" data-node-id="34227:79326">
                          <div className="content-stretch flex gap-[var(--2․5,10px)] items-start relative shrink-0 w-full" data-node-id="34227:79327">
                            <Avatar className="relative rounded-[100px] shrink-0 size-[64px]" />
                            <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-w-px relative" data-node-id="34227:79329">
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] items-start leading-[1.25] min-w-px not-italic relative" data-node-id="34227:79330">
                                <p className="relative shrink-0 text-[20px] text-[color:var(--black,#052530)] w-full" data-node-id="34227:79331">
                                  Advisor Name
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34227:79332">
                                  Travel Specialist
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34227:79333">
                                  Agency Name
                                </p>
                              </div>
                              <div className="bg-[#d9d9d9] h-[64px] relative shrink-0 w-[320px]" data-node-id="34227:79334" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--0,0px)] h-[256px] items-start justify-end overflow-clip p-[var(--0,0px)] relative shrink-0 w-[672px]" data-node-id="34227:79335" data-name="Hero">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
                        <div className="bg-[var(--black,#052530)] content-stretch flex gap-[8px] items-center justify-center opacity-80 py-[var(--4,16px)] relative shrink-0 w-full" data-node-id="I34227:79335;16688:85379">
                          <div className="relative shrink-0 size-[24px]" data-node-id="I34227:79335;16688:85380" data-name="flowbite_outline-envelope-outline">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineEnvelopeOutline} />
                          </div>
                          <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79335;16688:85381">
                            email@travelagency.com
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--16,64px)] items-start justify-end min-h-px pb-[var(--0,0px)] pt-[var(--8,32px)] px-[var(--0,0px)] relative w-full" data-node-id="I34227:79335;16688:85309" data-name="Background">
                          <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-node-id="I34227:79335;16688:85310" data-name="Content">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContent} />
                            <div className="content-stretch flex flex-[1_0_0] h-full items-end justify-between min-w-px px-[var(--5,20px)] py-[var(--4,16px)] relative" data-node-id="I34227:79335;16688:85311">
                              <div className="content-stretch flex gap-[var(--2,8px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:79335;16688:85312" data-name="Title & Desc">
                                <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] gap-[var(--0,0px)] items-start not-italic px-[var(--4,16px)] relative shrink-0 text-[color:var(--white,white)] w-[672px]" data-node-id="I34227:79335;16688:85375">
                                  <p className="leading-[1.5] relative shrink-0 text-[16px] w-full" data-node-id="I34227:79335;16688:85376">
                                    Aug 9, 2025 - Aug 16, 2025
                                  </p>
                                  <p className="leading-[1.25] relative shrink-0 text-[30px] w-full" data-node-id="I34227:79335;16688:85377">
                                    10 Day Euro Sights Trip
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[8px] pt-[16px] px-[19px] relative shrink-0 w-full" data-node-id="34227:79336" data-name="Travel protection (outside Info & Docs)">
                        <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="34227:79337" data-name="Travel protection, choose one option">
                          <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[20px] py-[14px] relative shrink-0 w-full" data-node-id="34227:79338" data-name="Accordion header">
                            <div className="relative shrink-0 size-[22px]" data-node-id="34227:79339" data-name="Shield">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShield} />
                            </div>
                            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="34227:79340" data-name="Header text">
                              <p className="font-['Inter:Bold'] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="34227:79341">
                                Travel protection
                              </p>
                              <p className="font-['Inter:Regular'] relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="34227:79342">
                                Choose one option, or decline
                              </p>
                            </div>
                          </div>
                          <div className="[word-break:break-word] bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex items-center justify-between leading-[1.5] not-italic overflow-clip px-[20px] py-[10px] relative shrink-0 text-[12px] w-full" data-node-id="34227:79343" data-name="Your details (shared)">
                            <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-node-id="34227:79344" data-name="Details">
                              <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/500,#678390)] whitespace-nowrap" data-node-id="34227:79345">
                                Your details:
                              </p>
                              <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34227:79346">
                                Elisa Denton
                              </p>
                              <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/600,#4f666d)] whitespace-pre" data-node-id="34227:79347">{`|  DOB Mar 3, 1986  |  Colorado  |  Trip cost $8,400`}</p>
                              <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="34227:79348">
                                Edit
                              </p>
                            </div>
                            <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/500,#678390)] whitespace-nowrap" data-node-id="34227:79349">
                              Used for all quotes
                            </p>
                          </div>
                          <div className="bg-[var(--white,white)] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="34227:79350" data-name="Offer 1: Allianz Travel (expanded, undecided)">
                            <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip pb-[14px] pt-[16px] px-[20px] relative shrink-0 w-full" data-node-id="I34227:79350;34160:3685" data-name="Provider row">
                              <div className="bg-[#003781] h-[34px] relative rounded-[2px] shrink-0 w-[4px]" data-node-id="I34227:79350;34160:3686" data-name="Provider accent" />
                              <div className="border-[#003781] border-[1.5px] border-dashed content-stretch flex h-[32px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[110px]" data-node-id="I34227:79350;34160:3687" data-name="Provider logo">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#003781] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="I34227:79350;34160:3688">
                                  PROVIDER LOGO
                                </p>
                              </div>
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic overflow-clip relative" data-node-id="I34227:79350;34160:3689" data-name="Provider name">
                                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I34227:79350;34160:3690" data-name="Name line">
                                  <p className="font-['Inter:Bold'] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:79350;34160:3691">
                                    Allianz Travel
                                  </p>
                                  <p className="font-['Inter:Regular'] relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34227:79350;34160:3692">
                                    (example)
                                  </p>
                                </div>
                                <p className="font-['Inter:Regular'] min-w-full relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-[min-content]" data-node-id="I34227:79350;34160:3693">
                                  Travel with confidence, wherever you go.
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="I34227:79350;34160:3694" data-name="Header actions">
                                <div className="bg-[var(--primary\/100,#daf1ff)] content-stretch flex h-[20px] items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[80px] shrink-0" data-node-id="I34227:79350;34160:3696" data-name="Status pill">
                                  <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[color:var(--primary\/800,#1b5079)] text-center whitespace-nowrap" data-node-id="I34227:79350;34160:3696;13552:81436">
                                    Choose Offer
                                  </p>
                                </div>
                                <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79350;34164:2327" data-name="Collapse">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCollapse} />
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[20px] py-[14px] relative shrink-0 w-full" data-node-id="I34227:79350;34160:3698" data-name="Body">
                              <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79350;34160:3699">
                                Add travel protection?
                              </p>
                              <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="I34227:79350;34160:3705" data-name="Plans (single choice)">
                                <div className="bg-[var(--white,white)] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="I34227:79350;34160:3706" data-name="Plan row - Basic">
                                  <RadioLocalInsuranceOfferCard className="relative shrink-0 size-[18px]" />
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="I34227:79350;34160:3706;34159:3688" data-name="Plan">
                                    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I34227:79350;34160:3706;34159:3689" data-name="Name line">
                                      <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79350;34160:3706;34159:3690">
                                        OneTrip Basic
                                      </p>
                                    </div>
                                    <div className="[word-break:break-word] content-start flex flex-wrap font-['Inter:Regular'] gap-[2px_12px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-full whitespace-nowrap" data-node-id="I34227:79350;34160:3706;34159:3693" data-name="Highlights">
                                      <p className="relative shrink-0" data-node-id="I34227:79350;34160:3706;34159:3694">
                                        Cancellation up to $5,000
                                      </p>
                                      <p className="relative shrink-0" data-node-id="I34227:79350;34160:3706;34159:3695">
                                        Medical $10,000
                                      </p>
                                    </div>
                                  </div>
                                  <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[20px] text-[color:var(--blue-gray\/900,#223e47)] text-right whitespace-nowrap" data-node-id="I34227:79350;34160:3706;34159:3697">
                                    $38
                                  </p>
                                </div>
                                <PlanRowInsuranceOfferCard className="bg-[var(--primary\/50,#eff9ff)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" selected />
                                <PlanRowInsuranceOfferCard className="bg-[var(--white,white)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" highlight2="Medical $100,000" highlight3="Baggage $2,000" planName="OneTrip Premier" price="$118" />
                              </div>
                              <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.5] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-node-id="I34227:79350;34160:3746" data-name="Compare">
                                <p className="font-['Inter:Semibold'] font-semibold relative shrink-0 text-[color:var(--primary\/600,#2a79a6)]" data-node-id="I34227:79350;34160:3747" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                  Compare coverage ▾
                                </p>
                                <p className="font-['Inter:Regular'] not-italic relative shrink-0 text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34227:79350;34160:3748">
                                  Prices may change slightly before purchase.
                                </p>
                              </div>
                            </div>
                            <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip pb-[16px] pt-[12px] px-[20px] relative shrink-0 w-full" data-node-id="I34227:79350;34160:3749" data-name="Decision bar">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34227:79350;34160:3750">
                                Editing your details gets new quotes. Your decision is saved with your name and the time.
                              </p>
                              <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34227:79350;34160:3751" data-name="Button - Decline">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:79350;34160:3751;29:127807">
                                  <p className="leading-[1.43]">Decline</p>
                                </div>
                              </div>
                              <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34227:79350;34160:3759" data-name="Button - Primary">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79350;34160:3759;27:127543">
                                  Continue with Prime, $72
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[var(--white,white)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex h-[60px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34227:79351" data-name="Offer 2: Medjet (collapsed, selectable)">
                            <div className="bg-[#b4232f] h-full relative shrink-0 w-[4px]" data-node-id="I34227:79351;34170:2176" data-name="Provider accent" />
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="I34227:79351;34170:2177" data-name="Summary">
                              <div className="border-[#b4232f] border-[1.5px] border-dashed content-stretch flex h-[26px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[46px]" data-node-id="I34227:79351;34170:2178" data-name="Provider logo">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#b4232f] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="I34227:79351;34170:2179">
                                  LOGO
                                </p>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="I34227:79351;34170:2180" data-name="Summary text">
                                <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="I34227:79351;34170:2515" data-name="Title row">
                                  <p className="[word-break:break-word] font-['Inter:Bold'] h-full leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] w-[275px] whitespace-pre-wrap">{`Medjet (example)  ·  Medical transport`}</p>
                                </div>
                                <div className="content-center flex flex-wrap gap-[2px_6px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I34227:79351;34170:2182" data-name="Summary details">
                                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[12px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79351;34170:2183">
                                    Short-term, 15 days, from $129. Open to compare.
                                  </p>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--0,0px)] py-[var(--1,4px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34227:79351;34170:2193" data-name="Button - Decline (text link)">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[12px] not-italic relative shrink-0 text-[12px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:79351;34170:2193;15922:373848">
                                  Decline
                                </p>
                              </div>
                              <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34227:79351;34170:2201" data-name="Button - Primary">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[12px] not-italic relative shrink-0 text-[12px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79351;34170:2201;27:127547">
                                  See plans
                                </p>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79351;34170:2187" data-name="Expand">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpand} />
                              </div>
                            </div>
                          </div>
                          <div className="bg-[var(--white,white)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex h-[60px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34227:79352" data-name="Offer 3: Travel Guard (collapsed, declined)">
                            <div className="bg-[#1f7a4d] h-full relative shrink-0 w-[4px]" data-node-id="I34227:79352;34160:3815" data-name="Provider accent" />
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="I34227:79352;34160:3816" data-name="Summary">
                              <div className="border-[#1f7a4d] border-[1.5px] border-dashed content-stretch flex h-[26px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[46px]" data-node-id="I34227:79352;34160:3817" data-name="Provider logo">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#1f7a4d] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="I34227:79352;34160:3818">
                                  LOGO
                                </p>
                              </div>
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="I34227:79352;34160:3819" data-name="Summary text">
                                <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] w-full whitespace-pre-wrap" data-node-id="I34227:79352;34160:3820">{`Travel Guard (example)  ·  Rental car damage`}</p>
                                <div className="content-center flex flex-wrap gap-[2px_6px] items-center leading-[1.5] overflow-clip relative shrink-0 text-[12px] w-full" data-node-id="I34227:79352;34160:3821" data-name="Summary details">
                                  <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79352;34160:3822">
                                    Declined May 11, 14:02 by Elisa Denton
                                  </p>
                                  <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--primary\/600,#2a79a6)] whitespace-pre" data-node-id="I34227:79352;34160:3823">{`·  Change your mind?`}</p>
                                </div>
                              </div>
                              <div className="bg-[var(--blue-gray\/100,#e1e7ec)] content-stretch flex h-[20px] items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[80px] shrink-0" data-node-id="I34227:79352;34160:3826" data-name="Status pill">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[color:var(--blue-gray\/900,#223e47)] text-center whitespace-nowrap" data-node-id="I34227:79352;34160:3826;13552:81428">
                                  Declined
                                </p>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79352;34160:3828" data-name="Expand">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpand1} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34227:79394" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34227:79394;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34227:79394;16691:85575">{`Information & Documents`}</p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34227:79394;16691:85577">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34227:79404">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[20px] text-[color:var(--black,#052530)]" data-node-id="34227:79405">
                          Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
                        </p>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34227:79406" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34227:79406;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34227:79406;16691:85575">
                          Arrival in Paris
                        </p>
                        <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.25] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79406;16691:85576">
                          Aug 9
                        </p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34227:79406;16691:85577">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine3} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
