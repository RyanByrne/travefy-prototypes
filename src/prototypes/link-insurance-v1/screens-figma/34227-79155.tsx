// @ts-nocheck
import { useNavigate } from 'react-router-dom'

const imgSelectedFalse = "/src/prototypes/link-insurance-v1/assets/6dda37ce-54ae-4720-8fbb-440add7cd37e.svg";
const imgSelectedTrue = "/src/prototypes/link-insurance-v1/assets/345f46f0-e86b-4870-9d8c-fd1a61675f82.svg";
const imgTypeCircleSizeLgContentImageNotificationDotFalse = "/src/prototypes/link-insurance-v1/assets/66b466b8-6d48-4433-891f-c1ee805e5939.png";
const imgFlowbiteSolidPlus = "/src/prototypes/link-insurance-v1/assets/fe91f930-1df3-4a0c-88d9-aef025a81335.svg";
const imgTripThumbnail = "/src/prototypes/link-insurance-v1/assets/7c8362e2-f22e-4db1-8a3a-952f96965e4f.png";
const imgHero = "/src/prototypes/link-insurance-v1/assets/1527176e-4216-42a6-bfa0-c7a942b5104f.png";
const imgContent = "/src/prototypes/link-insurance-v1/assets/c93768a7-ed30-449e-872d-3ef5f09bbc9a.png";
const imgFlowbiteSolidChevronDown = "/src/prototypes/link-insurance-v1/assets/c794371f-9edd-422c-99ac-63dd391a2882.svg";
const imgMaterialRoundedPhoneAndroidRounded = "/src/prototypes/link-insurance-v1/assets/5fa94431-0d01-402c-9f7c-302fd21457d4.svg";
const imgFlowbiteOutlineFileLinesOutline = "/src/prototypes/link-insurance-v1/assets/e5b19d81-47f0-4f43-8428-f900df5ee3b3.svg";
const imgCustomIconChatOneBubble = "/src/prototypes/link-insurance-v1/assets/9369412d-46af-4210-9ba0-ab4c55e0999e.svg";
const imgFlowbiteOutlineEnvelopeOutline = "/src/prototypes/link-insurance-v1/assets/76562b86-5500-4bbb-a647-3ab5e0bce02e.svg";
const imgCollapse = "/src/prototypes/link-insurance-v1/assets/f0af18af-185b-4274-b4ce-5a75ef9aca6e.svg";
const imgLine2 = "/src/prototypes/link-insurance-v1/assets/b33862df-905d-4159-bcbf-2cb075f7e60d.svg";
const imgLine1 = "/src/prototypes/link-insurance-v1/assets/97dc358d-b8fc-4053-ac88-0f42636cec40.svg";
const imgLine3 = "/src/prototypes/link-insurance-v1/assets/cb01294f-f584-4274-a46b-c76d9053779a.svg";

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
  return (
    <div className={className || "bg-[var(--white,white)] border-[var(--blue-gray\\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-[600px]"} data-node-id="34159:3685">
      <RadioLocalInsuranceOfferCard className="relative shrink-0 size-[18px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="34159:3688" data-name="Plan">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="34159:3689" data-name="Name line">
          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34159:3690">
            {planName}
          </p>
        </div>
        <div className="[word-break:break-word] content-start flex flex-wrap font-['Inter:Regular'] gap-[2px_12px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-full whitespace-nowrap" data-node-id="34159:3693" data-name="Highlights">
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

export default function TravelerItineraryQuotesShownDetailsOnProfile() {
  const navigate = useNavigate()
  return (
    <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-start relative size-full" data-node-id="34227:79155" data-name="Traveler itinerary: quotes shown (details on profile)">
      <div className="bg-[var(--white,white)] content-stretch flex flex-col gap-[var(--0,0px)] items-start pl-[var(--32,128px)] pr-[var(--14,56px)] py-[var(--0,0px)] relative shrink-0 w-full" data-node-id="34227:79156" data-name="Navbar (application)">
        <div className="content-stretch flex gap-[var(--0,0px)] items-center px-[var(--0,0px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:79156;16661:1302" data-name="Navbar">
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--8,32px)] items-center min-w-px px-[var(--4,16px)] py-[var(--0,0px)] relative" data-node-id="I34227:79156;16661:1303" data-name="Content">
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--0,0px)] items-center min-w-px relative" data-node-id="I34227:79156;16661:1304" data-name="Primary global navigation">
              <div className="content-stretch flex gap-[var(--1․5,6px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:79156;16661:1305" data-name="Nav Links">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79156;16661:1306">
                  Viewing as
                </p>
                <div className="content-stretch flex gap-[var(--0,0px)] items-center relative shrink-0 w-[291px]" data-node-id="I34227:79156;16661:1307">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px px-[var(--0,0px)] py-[var(--3,12px)] relative rounded-[var(--rounded,4px)]" data-node-id="I34227:79156;16661:1308" data-name="Select input">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34227:79156;16661:1309" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semibold'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:79156;16661:1310">
                        <p className="leading-[1.25]">Elisa Denton</p>
                      </div>
                      <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79156;16661:1311" data-name="flowbite_solid-chevron-down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--3․5,14px)] items-center relative shrink-0" data-node-id="I34227:79156;16661:1312">
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34227:79156;16661:1313">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:79156;16661:1314" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34227:79156;16661:1314;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79156;16661:1314;16101:9150" data-name="material_rounded-PhoneAndroidRounded">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialRoundedPhoneAndroidRounded} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79156;16661:1314;16082:43071">
                      App
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34227:79156;16661:1336">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:79156;16661:1337" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34227:79156;16661:1337;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79156;16661:1337;16101:9150" data-name="flowbite_outline-file-lines-outline">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineFileLinesOutline} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79156;16661:1337;16082:43071">
                      PDF
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[20px]" data-node-id="I34227:79156;16661:1319" data-name="custom_icon-chat-one-bubble">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChatOneBubble} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34227:79157">
        <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-center px-[224px] relative shrink-0 w-full" data-node-id="34227:79158">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34227:79159">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="34227:79160">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34227:79161">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34227:79162">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--9,36px)] items-start min-w-px pb-[64px] pt-[var(--5,20px)] relative" data-node-id="34227:79163">
                    <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start px-[var(--5,20px)] relative shrink-0 w-[400px]" data-node-id="34227:79164" data-name="Web itinerary sidebar nav">
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--2․5,10px)] items-center pl-[var(--0,0px)] pr-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79164;16647:80450" data-name="Web itinerary nav item">
                        <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[40px]" data-node-id="I34227:79164;16647:80450;16647:80448" data-name="Trip thumbnail">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I34227:79164;16647:80450;16647:80443">
                          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] uppercase w-full" data-node-id="I34227:79164;16647:80450;16647:80445">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <WebItineraryNavItem className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" />
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79164;16647:80283" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79164;16647:80283;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79164;16647:80283;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79164;16647:80283;16645:80221">
                            Aug 11
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79164;16647:80283;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79164;16647:80291" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79164;16647:80291;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79164;16647:80291;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79164;16647:80291;16645:80221">
                            Aug 12
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79164;16647:80291;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79164;16647:80298" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79164;16647:80298;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79164;16647:80298;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79164;16647:80298;16645:80221">
                            Aug 13
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79164;16647:80298;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79164;16647:80305" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79164;16647:80305;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79164;16647:80305;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79164;16647:80305;16645:80221">
                            Aug 14
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79164;16647:80305;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-center justify-center overflow-clip pr-[var(--0,0px)] relative rounded-tl-[var(--rounded-lg,8px)] rounded-tr-[var(--rounded-lg,8px)] shrink-0" data-node-id="34227:79165">
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34227:79166">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-w-px relative" data-node-id="34227:79167">
                          <div className="content-stretch flex gap-[var(--2․5,10px)] items-start relative shrink-0 w-full" data-node-id="34227:79168">
                            <Avatar className="relative rounded-[100px] shrink-0 size-[64px]" />
                            <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-w-px relative" data-node-id="34227:79170">
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] items-start leading-[1.25] min-w-px not-italic relative" data-node-id="34227:79171">
                                <p className="relative shrink-0 text-[20px] text-[color:var(--black,#052530)] w-full" data-node-id="34227:79172">
                                  Advisor Name
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34227:79173">
                                  Travel Specialist
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34227:79174">
                                  Agency Name
                                </p>
                              </div>
                              <div className="bg-[#d9d9d9] h-[64px] relative shrink-0 w-[320px]" data-node-id="34227:79175" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--0,0px)] h-[256px] items-start justify-end overflow-clip p-[var(--0,0px)] relative shrink-0 w-[672px]" data-node-id="34227:79176" data-name="Hero">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
                        <div className="bg-[var(--black,#052530)] content-stretch flex gap-[8px] items-center justify-center opacity-80 py-[var(--4,16px)] relative shrink-0 w-full" data-node-id="I34227:79176;16688:85379">
                          <div className="relative shrink-0 size-[24px]" data-node-id="I34227:79176;16688:85380" data-name="flowbite_outline-envelope-outline">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineEnvelopeOutline} />
                          </div>
                          <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79176;16688:85381">
                            email@travelagency.com
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--16,64px)] items-start justify-end min-h-px pb-[var(--0,0px)] pt-[var(--8,32px)] px-[var(--0,0px)] relative w-full" data-node-id="I34227:79176;16688:85309" data-name="Background">
                          <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-node-id="I34227:79176;16688:85310" data-name="Content">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContent} />
                            <div className="content-stretch flex flex-[1_0_0] h-full items-end justify-between min-w-px px-[var(--5,20px)] py-[var(--4,16px)] relative" data-node-id="I34227:79176;16688:85311">
                              <div className="content-stretch flex gap-[var(--2,8px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:79176;16688:85312" data-name="Title & Desc">
                                <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] gap-[var(--0,0px)] items-start not-italic px-[var(--4,16px)] relative shrink-0 text-[color:var(--white,white)] w-[672px]" data-node-id="I34227:79176;16688:85375">
                                  <p className="leading-[1.5] relative shrink-0 text-[16px] w-full" data-node-id="I34227:79176;16688:85376">
                                    Aug 9, 2025 - Aug 16, 2025
                                  </p>
                                  <p className="leading-[1.25] relative shrink-0 text-[30px] w-full" data-node-id="I34227:79176;16688:85377">
                                    10 Day Euro Sights Trip
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[8px] pt-[16px] px-[19px] relative shrink-0 w-full" data-node-id="34227:79177" data-name="Travel protection (outside Info & Docs)">
                        <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="34227:79178" data-name="Insurance offer card">
                          <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip pb-[14px] pt-[16px] px-[20px] relative shrink-0 w-full" data-node-id="I34227:79178;34160:3685" data-name="Provider row">
                            <div className="bg-[#003781] h-[34px] relative rounded-[2px] shrink-0 w-[4px]" data-node-id="I34227:79178;34160:3686" data-name="Provider accent" />
                            <div className="border-[#003781] border-[1.5px] border-dashed content-stretch flex h-[32px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[110px]" data-node-id="I34227:79178;34160:3687" data-name="Provider logo">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#003781] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="I34227:79178;34160:3688">
                                PROVIDER LOGO
                              </p>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic overflow-clip relative" data-node-id="I34227:79178;34160:3689" data-name="Provider name">
                              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I34227:79178;34160:3690" data-name="Name line">
                                <p className="font-['Inter:Bold'] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:79178;34160:3691">
                                  Allianz Travel
                                </p>
                                <p className="font-['Inter:Regular'] relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34227:79178;34160:3692">
                                  (example)
                                </p>
                              </div>
                              <p className="font-['Inter:Regular'] min-w-full relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-[min-content]" data-node-id="I34227:79178;34160:3693">
                                Travel with confidence, wherever you go.
                              </p>
                            </div>
                            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="I34227:79178;34160:3694" data-name="Header actions">
                              <div className="bg-[var(--primary\/100,#daf1ff)] content-stretch flex h-[20px] items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[80px] shrink-0" data-node-id="I34227:79178;34160:3696" data-name="Status pill">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[color:var(--primary\/800,#1b5079)] text-center whitespace-nowrap" data-node-id="I34227:79178;34160:3696;13552:81436">
                                  Choose a plan
                                </p>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79178;34164:2327" data-name="Collapse">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCollapse} />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[20px] py-[14px] relative shrink-0 w-full" data-node-id="I34227:79178;34160:3698" data-name="Body">
                            <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79178;34160:3699">
                              Add travel protection?
                            </p>
                            <div className="[word-break:break-word] content-start flex flex-wrap gap-[2px_6px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[12px] w-full" data-node-id="I34227:79178;34160:3700" data-name="Your details">
                              <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/500,#678390)] whitespace-nowrap" data-node-id="I34227:79178;34160:3701">
                                Your details:
                              </p>
                              <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79178;34160:3702">
                                Elisa Denton
                              </p>
                              <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/600,#4f666d)] whitespace-pre" data-node-id="I34227:79178;34160:3703">{`|  DOB Mar 3, 1986  |  Colorado  |  Trip cost $8,400`}</p>
                              <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:79178;34160:3704">
                                Edit
                              </p>
                            </div>
                            <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="I34227:79178;34160:3705" data-name="Plans (single choice)">
                              <div className="bg-[var(--white,white)] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="I34227:79178;34160:3706" data-name="Plan row - Basic">
                                <RadioLocalInsuranceOfferCard className="relative shrink-0 size-[18px]" />
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="I34227:79178;34160:3706;34159:3688" data-name="Plan">
                                  <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I34227:79178;34160:3706;34159:3689" data-name="Name line">
                                    <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79178;34160:3706;34159:3690">
                                      OneTrip Basic
                                    </p>
                                  </div>
                                  <div className="[word-break:break-word] content-start flex flex-wrap font-['Inter:Regular'] gap-[2px_12px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-full whitespace-nowrap" data-node-id="I34227:79178;34160:3706;34159:3693" data-name="Highlights">
                                    <p className="relative shrink-0" data-node-id="I34227:79178;34160:3706;34159:3694">
                                      Cancellation up to $5,000
                                    </p>
                                    <p className="relative shrink-0" data-node-id="I34227:79178;34160:3706;34159:3695">
                                      Medical $10,000
                                    </p>
                                  </div>
                                </div>
                                <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[20px] text-[color:var(--blue-gray\/900,#223e47)] text-right whitespace-nowrap" data-node-id="I34227:79178;34160:3706;34159:3697">
                                  $38
                                </p>
                              </div>
                              <div className="bg-[var(--primary\/50,#eff9ff)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="I34227:79178;34160:3719" data-name="Plan row - Prime">
                                <RadioLocalInsuranceOfferCard className="relative shrink-0 size-[18px]" selected />
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="I34227:79178;34160:3719;34159:3701" data-name="Plan">
                                  <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I34227:79178;34160:3719;34159:3702" data-name="Name line">
                                    <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79178;34160:3719;34159:3703">
                                      OneTrip Prime
                                    </p>
                                  </div>
                                  <div className="[word-break:break-word] content-start flex flex-wrap font-['Inter:Regular'] gap-[2px_12px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-full whitespace-nowrap" data-node-id="I34227:79178;34160:3719;34159:3706" data-name="Highlights">
                                    <p className="relative shrink-0" data-node-id="I34227:79178;34160:3719;34159:3707">
                                      Cancellation up to $8,400
                                    </p>
                                    <p className="relative shrink-0" data-node-id="I34227:79178;34160:3719;34159:3708">
                                      Medical $50,000
                                    </p>
                                    <p className="relative shrink-0" data-node-id="I34227:79178;34160:3719;34159:3709">
                                      Baggage $1,000
                                    </p>
                                  </div>
                                </div>
                                <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[20px] text-[color:var(--blue-gray\/900,#223e47)] text-right whitespace-nowrap" data-node-id="I34227:79178;34160:3719;34159:3710">
                                  $72
                                </p>
                                <div className="absolute bg-[var(--primary\/600,#2a79a6)] bottom-0 left-0 top-[-1px] w-[3px]" data-node-id="I34227:79178;34160:3719;34159:3711" data-name="Selected accent" />
                              </div>
                              <PlanRowInsuranceOfferCard className="bg-[var(--white,white)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" highlight2="Medical $100,000" highlight3="Baggage $2,000" planName="OneTrip Premier" price="$118" />
                            </div>
                            <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.5] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-node-id="I34227:79178;34160:3746" data-name="Compare">
                              <p className="font-['Inter:Semibold'] font-semibold relative shrink-0 text-[color:var(--primary\/600,#2a79a6)]" data-node-id="I34227:79178;34160:3747" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                Compare coverage ▾
                              </p>
                              <p className="font-['Inter:Regular'] not-italic relative shrink-0 text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34227:79178;34160:3748">
                                Prices may change slightly before purchase.
                              </p>
                            </div>
                          </div>
                          <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip pb-[16px] pt-[12px] px-[20px] relative shrink-0 w-full" data-node-id="I34227:79178;34160:3749" data-name="Decision bar">
                            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34227:79178;34160:3750">
                              Editing your details gets new quotes. Your decision is saved with your name and the time.
                            </p>
                            <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 cursor-pointer" data-node-id="I34227:79178;34160:3751" data-name="Button - Decline" onClick={() => navigate('/link-insurance-v1/screen/34227-79275')}>
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:79178;34160:3751;29:127807">
                                <p className="leading-[1.43]">Decline</p>
                              </div>
                            </div>
                            <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 cursor-pointer" data-node-id="I34227:79178;34160:3759" data-name="Button - Primary" onClick={() => navigate('/link-insurance-v1/screen/34227-79314')}>
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79178;34160:3759;27:127543">
                                Continue with Prime, $72
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34227:79219" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34227:79219;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34227:79219;16691:85575">{`Information & Documents`}</p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34227:79219;16691:85577">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34227:79229">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[20px] text-[color:var(--black,#052530)]" data-node-id="34227:79230">
                          Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
                        </p>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34227:79231" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34227:79231;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34227:79231;16691:85575">
                          Arrival in Paris
                        </p>
                        <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.25] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79231;16691:85576">
                          Aug 9
                        </p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34227:79231;16691:85577">
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
