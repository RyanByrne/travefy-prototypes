const imgFlowbiteSolidX = "/src/prototypes/link-insurance-v1/assets/84c99e4a-1bc1-4ec8-b0ab-d670e34d3fff.svg";
const imgSeparator = "/src/prototypes/link-insurance-v1/assets/40d12a16-f669-404c-a72e-57545fd6061a.svg";
const imgSeparator1 = "/src/prototypes/link-insurance-v1/assets/6b206d33-6c16-40d2-af3c-1fda5c7e2368.svg";
const imgFlowbiteSolidChevronDown = "/src/prototypes/link-insurance-v1/assets/494fc81e-ebbc-48bf-a03f-f4f0b575f58f.svg";

export default function AdvisorAddPolicyProviderListOpen() {
  return (
    <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start relative rounded-[var(--rounded-sm,4px)] size-full" data-node-id="34237:2862" data-name="Advisor: Add policy, provider list open">
      <div className="bg-[var(--gray\/50,#f6f8f9)] border-[var(--blue-gray\/200,#d1dae0)] border-l border-r border-solid border-t content-stretch flex gap-[16px] h-[48px] items-center justify-end px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-tl-[var(--rounded-sm,4px)] rounded-tr-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="34237:2863" data-name="Modal Header">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I34237:2863;15411:10373" data-name="Title">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semibold'] leading-[1.5] min-w-px not-italic overflow-hidden relative text-[18px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis whitespace-nowrap" data-node-id="I34237:2863;15411:10374">
            Add policy for Jack Hawthorne
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="I34237:2863;15411:11465">
          <div className="relative shrink-0 size-[12px]" data-node-id="I34237:2863;15411:10375" data-name="flowbite_solid-x">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidX} />
          </div>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full" data-node-id="34237:2864" data-name="Separator">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparator} />
      </div>
      <div className="h-px relative shrink-0 w-full" data-node-id="34237:2865" data-name="Separator">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparator1} />
      </div>
      <div className="content-stretch flex flex-col gap-[var(--4,16px)] items-start overflow-clip p-[var(--5,20px)] relative shrink-0 w-full" data-node-id="34237:2866" data-name="Modal body">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#375059] text-[14px] w-[min-content]" data-node-id="34237:2867">
          <p className="leading-[1.43]">{`Jack accepted this offer and chose "My advisor will buy on my behalf". Buy the policy with the provider, then add it here for Jack only. Each traveler gets their own policy record.`}</p>
        </div>
        <div className="[word-break:break-word] bg-[#f9fafb] content-stretch flex flex-col font-['Inter:Regular'] gap-[4px] items-start not-italic overflow-clip p-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="34237:2868" data-name="Accepted quote summary">
          <p className="leading-[1.43] relative shrink-0 text-[#111928] text-[14px] w-full" data-node-id="34237:2869">
            Accepted quote: Allianz Travel OneTrip Prime, $72, on May 10
          </p>
          <p className="leading-[1.5] relative shrink-0 text-[#6b7280] text-[12px] w-full" data-node-id="34237:2870">
            Quotes are regenerated at purchase, so enter the premium you actually paid.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--2,8px)] items-start relative shrink-0 w-full" data-node-id="34237:2871" data-name="Provider (combobox, + Add new is the last option)">
          <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0 w-full" data-node-id="I34237:2871;135:141662" data-name="Label">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34237:2871;135:141663">
              Provider
            </p>
          </div>
          <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex flex-col items-start p-[var(--3,12px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" data-node-id="I34237:2871;528:335" data-name="Input">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34237:2871;528:340" data-name="Content">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] h-full justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/900,#223e47)]">
                <p className="leading-[1.25]">Allianz Travel</p>
              </div>
              <div className="relative shrink-0 size-[10px]" data-node-id="I34237:2871;989:72" data-name="flowbite_solid-chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:2872" data-name="Plan or package name">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:2872;17912:21518">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:2872;110:145392">
              Plan or package name
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:2872;110:145393" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:2872;110:145394" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:2872;110:145396">
                  <p className="leading-[1.25]">OneTrip Prime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:2873" data-name="Policy number">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:2873;17912:21518">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:2873;110:145392">
              Policy number
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:2873;110:145393" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:2873;110:145394" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:2873;110:145396">
                  <p className="leading-[1.25]">ALZ-48213</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34237:2874" data-name="Coverage dates">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34237:2875" data-name="Coverage start">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:2875;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:2875;110:145392">
                Coverage start
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:2875;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:2875;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:2875;110:145396">
                    <p className="leading-[1.25]">Jun 2, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34237:2876" data-name="Coverage end">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:2876;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:2876;110:145392">
                Coverage end
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:2876;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:2876;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:2876;110:145396">
                    <p className="leading-[1.25]">Jun 14, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34237:2877" data-name="Premium and purchase date">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34237:2878" data-name="Premium paid">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:2878;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:2878;110:145392">
                Premium paid
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:2878;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:2878;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:2878;110:145396">
                    <p className="leading-[1.25]">$72.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34237:2879" data-name="Purchase date">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:2879;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:2879;110:145392">
                Purchase date
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:2879;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:2879;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:2879;110:145396">
                    <p className="leading-[1.25]">May 10, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:2880" data-name="Travelers covered">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:2880;17912:21515">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:2880;17339:37800">
              Travelers covered
            </p>
            <div className="bg-[var(--blue-gray\/100,#e1e7ec)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:2880;17339:37801" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:2880;17339:37802" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:2880;17339:37804">
                  <p className="leading-[1.25]">Jack Hawthorne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:2881" data-name="24/7 assistance phone (optional)">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:2881;17912:21527">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:2881;45:127837">
              24/7 assistance phone (optional)
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:2881;45:127838" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:2881;45:127839" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34237:2881;45:127841">
                  <p className="leading-[1.25]">Provider emergency number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-end overflow-clip relative shrink-0 w-full" data-node-id="34237:2882" data-name="Policy document">
          <div className="flex flex-[1_0_0] flex-row items-end self-stretch" data-node-id="34237:2883">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] h-full items-start min-w-px relative" data-name="Policy document (optional)">
              <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:2883;17912:21527">
                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:2883;45:127837">
                  Policy document (optional)
                </p>
                <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:2883;45:127838" data-name="Input">
                  <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:2883;45:127839" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34237:2883;45:127841">
                      <p className="leading-[1.25]">Paste a link or upload the policy PDF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[var(--gray\/200,#d9dee0)] border-solid content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="34237:2884" data-name="Upload PDF button">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/400,#45bbff)] whitespace-nowrap" data-node-id="I34237:2884;27:127993">
              Upload PDF
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[min-content]" data-node-id="34237:2885">{`Saving marks Jack Purchased on Responses and shows the policy on his itinerary. The trip's advisor can add or edit a policy. Policies bought through the Allianz integration fill in automatically.`}</p>
        <div className="absolute bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start left-[20px] overflow-clip rounded-[var(--rounded-sm,4px)] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.05)] top-[253px] w-[520px]" data-node-id="34237:2950" data-name="Provider options (Dropdown Menu)">
          <div className="content-stretch flex flex-col items-start py-[var(--1,4px)] relative shrink-0 w-full" data-node-id="I34237:2950;3283:21149" data-name="Dropdown Menu">
            <div className="content-stretch flex items-center px-[var(--4,16px)] py-[var(--2,8px)] relative shrink-0 w-full" data-node-id="I34237:2950;3283:21150" data-name="Nav Link">
              <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34237:2950;3283:21151">
                Allianz Travel (linked)
              </p>
            </div>
            <div className="content-stretch flex items-center px-[var(--4,16px)] py-[var(--2,8px)] relative shrink-0 w-full" data-node-id="I34237:2950;3283:21152" data-name="Nav Link">
              <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34237:2950;3283:21153">
                BHTP (linked)
              </p>
            </div>
            <div className="content-stretch flex items-center px-[var(--4,16px)] py-[var(--2,8px)] relative shrink-0 w-full" data-node-id="I34237:2950;3283:21154" data-name="Nav Link">
              <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34237:2950;3283:21155">
                Travel Guard
              </p>
            </div>
            <div className="content-stretch flex items-center px-[var(--4,16px)] py-[var(--2,8px)] relative shrink-0 w-full" data-node-id="I34237:2950;3283:21156" data-name="Nav Link">
              <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34237:2950;3283:21157">
                Seven Corners
              </p>
            </div>
          </div>
          <div className="bg-[var(--blue-gray\/200,#d1dae0)] h-px relative shrink-0 w-full" data-node-id="I34237:2950;3283:21158" data-name="Separator" />
          <div className="content-stretch flex flex-col items-start py-[var(--1,4px)] relative shrink-0 w-full" data-node-id="I34237:2950;3283:21159" data-name="Dropdown/Menu section">
            <button className="content-stretch cursor-pointer flex items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I34237:2950;3283:21160" data-name="Dropdown/Menu item">
              <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] text-left whitespace-nowrap" data-node-id="I34237:2950;3283:21161">
                + Add new
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[var(--gray\/50,#f6f8f9)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex items-center p-[var(--4,16px)] relative rounded-bl-[var(--rounded,4px)] rounded-br-[var(--rounded,4px)] shrink-0 w-full" data-node-id="34237:2894" data-name="Modal Footer">
        <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I34237:2894;15411:11771" data-name="Modal footer actions">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I34237:2894;15411:11771;15411:11725">
            <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[var(--0,0px)] relative" data-name="Cancel">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34237:2894;15411:11771;15411:11724">
                Cancel
              </p>
            </div>
          </div>
          <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--5,20px)] py-[var(--2․5,10px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34237:2894;15411:11771;15411:11700" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34237:2894;15411:11771;15411:11700;27:127539">
              Save policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
