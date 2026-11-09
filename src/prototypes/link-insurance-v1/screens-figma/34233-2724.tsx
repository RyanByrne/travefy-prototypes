import { useNavigate } from 'react-router-dom'

const imgCollapse = "/src/prototypes/link-insurance-v1/assets/212f3d96-af8f-418d-b8cc-beaa7c8a21c6.svg";
const imgTypeCircleSizeLgContentImageNotificationDotFalse = "/src/prototypes/link-insurance-v1/assets/11587b97-24f8-4155-b276-f85b93af2ad9.png";
const imgHero = "/src/prototypes/link-insurance-v1/assets/bdcfb24b-a625-41ec-992c-d903559c8ecf.png";
const imgContent = "/src/prototypes/link-insurance-v1/assets/8ab41541-be95-4041-a73c-763c1e9c564c.png";
const imgMaterialRoundedPhoneIphoneRounded = "/src/prototypes/link-insurance-v1/assets/76741213-7946-4340-8efb-5716b328ea82.svg";
const imgMaterialRoundedTvRounded = "/src/prototypes/link-insurance-v1/assets/255787d8-64e3-4a4a-a1a1-0552b8249747.svg";
const imgFlowbiteOutlineEnvelopeOutline = "/src/prototypes/link-insurance-v1/assets/3c04c816-36dd-4e80-805d-aa045cffd88b.svg";
const imgLine2 = "/src/prototypes/link-insurance-v1/assets/edf6248a-c6fd-4b20-b5d3-c68e91c2cb57.svg";
const imgLine1 = "/src/prototypes/link-insurance-v1/assets/68c80ebf-5e48-4cbd-8b98-bdc4758045f1.svg";
const imgLine3 = "/src/prototypes/link-insurance-v1/assets/c76e7549-d473-4dc6-862e-a8822b1c20eb.svg";

type InsuranceOfferCardProps = {
  className?: string;
  showCollapseChevron?: boolean;
  state?: "Pre-quote";
};

function InsuranceOfferCard({ className, showCollapseChevron = true, state = "Pre-quote" }: InsuranceOfferCardProps) {
  return (
    <div className={className || "bg-[var(--white,white)] border border-[var(--blue-gray\\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] w-[632px]"} data-node-id="34160:3767">
      <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip pb-[14px] pt-[16px] px-[20px] relative shrink-0 w-full" data-node-id="34160:3768" data-name="Provider row">
        <div className="bg-[#003781] h-[34px] relative rounded-[2px] shrink-0 w-[4px]" data-node-id="34160:3769" data-name="Provider accent" />
        <div className="border-[#003781] border-[1.5px] border-dashed content-stretch flex h-[32px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[110px]" data-node-id="34160:3770" data-name="Provider logo">
          <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#003781] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="34160:3771">
            PROVIDER LOGO
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic overflow-clip relative" data-node-id="34160:3772" data-name="Provider name">
          <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="34160:3773" data-name="Name line">
            <p className="font-['Inter:Bold'] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="34160:3774">
              Allianz Travel
            </p>
            <p className="font-['Inter:Regular'] relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="34160:3775">
              (example)
            </p>
          </div>
          <p className="font-['Inter:Regular'] min-w-full relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-[min-content]" data-node-id="34160:3776">
            Travel with confidence, wherever you go.
          </p>
        </div>
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="34160:3777" data-name="Header actions">
          <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="34160:3778">
            Sample policy
          </p>
          {showCollapseChevron && (
            <div className="relative shrink-0 size-[16px]" data-node-id="34164:2329" data-name="Collapse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCollapse} />
            </div>
          )}
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip px-[20px] py-[14px] relative shrink-0 w-full" data-node-id="34160:3781" data-name="Body">
        <p className="font-['Inter:Bold'] leading-[1.5] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34160:3782">
          Add travel protection?
        </p>
        <p className="font-['Inter:Regular'] leading-[1.43] min-w-full relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-[min-content]" data-node-id="34160:3783">
          Your advisor shared a travel protection offer for this trip. Get a quote to see plans and prices for your details, or decline.
        </p>
        <p className="font-['Inter:Regular'] leading-[1.5] min-w-full relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)] w-[min-content]" data-node-id="34160:3784">
          Plans can include trip cancellation, medical and baggage cover.
        </p>
      </div>
      <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip pb-[16px] pt-[12px] px-[20px] relative shrink-0 w-full" data-node-id="34160:3785" data-name="Decision bar">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="34160:3786">
          Your decision is saved with your name and the time.
        </p>
        <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="34160:3787" data-name="Button - Decline">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34160:3787;29:127807">
            <p className="leading-[1.43]">Decline</p>
          </div>
        </div>
        <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="34160:3793" data-name="Button - Primary">
          <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34160:3793;27:127543">
            Get a quote
          </p>
        </div>
      </div>
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

export default function AdvisorPreviewAsTravelerInsuranceCardOnItinerary() {
  const navigate = useNavigate()
  return (
    <div className="bg-[var(--blue-gray\/100,#e1e7ec)] relative size-full" data-node-id="34233:2724" data-name="Advisor: Preview as traveler (insurance card on itinerary)">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-30.5px)] top-[calc(50%+27.5px)]" data-node-id="34233:2725">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--white,white)] h-[1053px] left-[calc(50%-30.5px)] rounded-[var(--rounded-lg,8px)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.05)] top-[calc(50%+27.5px)] w-[931px]" data-node-id="34233:2726" />
      </div>
      <div className="absolute bg-[var(--white,white)] content-stretch flex flex-col items-start left-0 pl-[35px] pr-[var(--14,56px)] py-[var(--0,0px)] top-0 w-[1600px]" data-node-id="34233:2727" data-name="Navbar (application)">
        <div className="content-stretch flex items-center justify-between px-[var(--0,0px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="34233:2728" data-name="Navbar">
          <div className="content-stretch flex items-center px-[var(--4,16px)] py-[var(--0,0px)] relative shrink-0 w-[166px]" data-node-id="34233:2729" data-name="Content">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="34233:2730" data-name="Primary global navigation">
              <div className="content-stretch flex gap-[var(--1․5,6px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="34233:2731" data-name="Nav Links">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="34233:2732">
                  Viewing as
                </p>
                <div className="content-stretch flex gap-[var(--0,0px)] items-center relative shrink-0" data-node-id="34233:2733">
                  <div className="content-stretch flex flex-col items-start px-[var(--0,0px)] py-[var(--3,12px)] relative rounded-[var(--rounded,4px)] shrink-0 w-[143px]" data-node-id="34233:2734" data-name="Select input">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="34233:2735" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semibold'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="34233:2736">
                        <p className="leading-[1.25]">Recipient</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--white,white)] content-stretch flex items-start relative rounded-[6px] shrink-0" data-node-id="34233:2737" data-name="Button Toggle Group">
            <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/600,#4f666d)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center mr-[-1px] overflow-clip px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-bl-[var(--rounded-sm,4px)] rounded-tl-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34233:2737;16636:80192" data-name="Button group buttons">
              <div className="relative shrink-0 size-[12px]" data-node-id="I34233:2737;16636:80192;17398:13763" data-name="material_rounded-PhoneIphoneRounded">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialRoundedPhoneIphoneRounded} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34233:2737;16636:80192;16636:80173">
                Mobile
              </p>
            </div>
            <div className="bg-[var(--blue-gray\/600,#4f666d)] border border-[var(--blue-gray\/600,#4f666d)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center overflow-clip px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-node-id="I34233:2737;16636:80201" data-name="Button group buttons">
              <div className="relative shrink-0 size-[12px]" data-node-id="I34233:2737;16636:80201;17398:13852" data-name="material_rounded-TvRounded">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialRoundedTvRounded} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34233:2737;16636:80201;16636:80164">
                Desktop
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--3,12px)] items-center relative shrink-0" data-node-id="34233:2738">
            <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] h-[44px] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="34233:2739" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34233:2739;29:127803">{`Send Test `}</p>
            </div>
            <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--5,20px)] py-[var(--2․5,10px)] relative rounded-[var(--rounded,4px)] shrink-0 cursor-pointer" data-node-id="34233:2740" data-name="Button" onClick={() => navigate('/link-insurance-v1/screen/34227-78843')}>
              <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34233:2740;27:127539">
                Close Preview
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[10px] h-[134px] items-start left-[304px] pl-[34px] pt-[13px] rounded-tl-[var(--rounded-lg,8px)] rounded-tr-[var(--rounded-lg,8px)] top-[103px] w-[926px]" data-node-id="34233:2741">
        <div className="content-stretch flex flex-col gap-[var(--2,8px)] items-start justify-center relative shrink-0" data-node-id="34233:2742">
          <div className="h-[20px] relative shrink-0 w-[41px]" data-node-id="34233:2743" />
        </div>
        <div className="content-stretch flex flex-col gap-[var(--1,4px)] items-start justify-center relative shrink-0" data-node-id="34233:2744">
          <div className="h-[24px] relative shrink-0 w-[162px]" data-node-id="34233:2745" />
        </div>
      </div>
      <div className="absolute bg-white border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-center justify-center left-[434px] overflow-clip pr-[var(--0,0px)] rounded-tl-[var(--rounded-lg,8px)] rounded-tr-[var(--rounded-lg,8px)] top-[253px]" data-node-id="34233:2746" data-name="Itinerary content (from Traveler itinerary: offer before quote)">
        <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34233:2747">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-w-px relative" data-node-id="34233:2748">
            <div className="content-stretch flex gap-[var(--2․5,10px)] items-start relative shrink-0 w-full" data-node-id="34233:2749">
              <Avatar className="relative rounded-[100px] shrink-0 size-[64px]" />
              <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-w-px relative" data-node-id="34233:2751">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] items-start leading-[1.25] min-w-px not-italic relative" data-node-id="34233:2752">
                  <p className="relative shrink-0 text-[20px] text-[color:var(--black,#052530)] w-full" data-node-id="34233:2753">
                    Advisor Name
                  </p>
                  <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34233:2754">
                    Travel Specialist
                  </p>
                  <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34233:2755">
                    Agency Name
                  </p>
                </div>
                <div className="bg-[#d9d9d9] h-[64px] relative shrink-0 w-[320px]" data-node-id="34233:2756" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0,0px)] h-[256px] items-start justify-end overflow-clip p-[var(--0,0px)] relative shrink-0 w-[672px]" data-node-id="34233:2757" data-name="Hero">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
          <div className="bg-[var(--black,#052530)] content-stretch flex gap-[8px] items-center justify-center opacity-80 py-[var(--4,16px)] relative shrink-0 w-full" data-node-id="I34233:2757;16688:85379">
            <div className="relative shrink-0 size-[24px]" data-node-id="I34233:2757;16688:85380" data-name="flowbite_outline-envelope-outline">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineEnvelopeOutline} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34233:2757;16688:85381">
              email@travelagency.com
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--16,64px)] items-start justify-end min-h-px pb-[var(--0,0px)] pt-[var(--8,32px)] px-[var(--0,0px)] relative w-full" data-node-id="I34233:2757;16688:85309" data-name="Background">
            <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-node-id="I34233:2757;16688:85310" data-name="Content">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContent} />
              <div className="content-stretch flex flex-[1_0_0] h-full items-end justify-between min-w-px px-[var(--5,20px)] py-[var(--4,16px)] relative" data-node-id="I34233:2757;16688:85311">
                <div className="content-stretch flex gap-[var(--2,8px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34233:2757;16688:85312" data-name="Title & Desc">
                  <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] gap-[var(--0,0px)] items-start not-italic px-[var(--4,16px)] relative shrink-0 text-[color:var(--white,white)] w-[672px]" data-node-id="I34233:2757;16688:85375">
                    <p className="leading-[1.5] relative shrink-0 text-[16px] w-full" data-node-id="I34233:2757;16688:85376">
                      Aug 9, 2025 - Aug 16, 2025
                    </p>
                    <p className="leading-[1.25] relative shrink-0 text-[30px] w-full" data-node-id="I34233:2757;16688:85377">
                      10 Day Euro Sights Trip
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] pt-[16px] px-[19px] relative shrink-0 w-full" data-node-id="34233:2758" data-name="Travel protection (outside Info & Docs)">
          <InsuranceOfferCard className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" />
        </div>
        <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34233:2760" data-name="Day with divider">
          <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34233:2760;16691:85574">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine2} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34233:2760;16691:85575">{`Information & Documents`}</p>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34233:2760;16691:85577">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
        </div>
        <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34233:2770">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[20px] text-[color:var(--black,#052530)]" data-node-id="34233:2771">
            Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
          </p>
        </div>
        <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34233:2772" data-name="Day with divider">
          <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34233:2772;16691:85574">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine2} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34233:2772;16691:85575">
            Arrival in Paris
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.25] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34233:2772;16691:85576">
            Aug 9
          </p>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34233:2772;16691:85577">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
