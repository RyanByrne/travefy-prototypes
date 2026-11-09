const imgFlowbiteSolidX = "/src/prototypes/link-insurance-v1/assets/c8d847c7-d9cd-4216-b88f-1d8e01405ae1.svg";
const imgSeparator = "/src/prototypes/link-insurance-v1/assets/460e351c-04ca-4bcc-9b1e-f245df983368.svg";
const imgSeparator1 = "/src/prototypes/link-insurance-v1/assets/38c08cef-cb2d-4a24-914d-d4ece1f1117c.svg";
const imgFlowbiteSolidChevronDown = "/src/prototypes/link-insurance-v1/assets/dc7ef49e-5351-47fd-ac1d-1eefe56644fb.svg";

export default function AdvisorAddPolicyAddNewProvider() {
  return (
    <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start relative rounded-[var(--rounded-sm,4px)] size-full" data-node-id="34237:3007" data-name="Advisor: Add policy, + Add new provider">
      <div className="bg-[var(--gray\/50,#f6f8f9)] border-[var(--blue-gray\/200,#d1dae0)] border-l border-r border-solid border-t content-stretch flex gap-[16px] h-[48px] items-center justify-end px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-tl-[var(--rounded-sm,4px)] rounded-tr-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="34237:3008" data-name="Modal Header">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I34237:3008;15411:10373" data-name="Title">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semibold'] leading-[1.5] min-w-px not-italic overflow-hidden relative text-[18px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis whitespace-nowrap" data-node-id="I34237:3008;15411:10374">
            Add policy for Jack Hawthorne
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="I34237:3008;15411:11465">
          <div className="relative shrink-0 size-[12px]" data-node-id="I34237:3008;15411:10375" data-name="flowbite_solid-x">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidX} />
          </div>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full" data-node-id="34237:3009" data-name="Separator">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparator} />
      </div>
      <div className="h-px relative shrink-0 w-full" data-node-id="34237:3010" data-name="Separator">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparator1} />
      </div>
      <div className="content-stretch flex flex-col gap-[var(--4,16px)] items-start overflow-clip p-[var(--5,20px)] relative shrink-0 w-full" data-node-id="34237:3011" data-name="Modal body">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#375059] text-[14px] w-[min-content]" data-node-id="34237:3012">
          <p className="leading-[1.43]">{`Jack's policy was bought with a provider that is not in your list. Pick "+ Add new" in the provider list to enter it.`}</p>
        </div>
        <div className="[word-break:break-word] bg-[#f9fafb] content-stretch flex flex-col font-['Inter:Regular'] gap-[4px] items-start not-italic overflow-clip p-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="34237:3013" data-name="Accepted quote summary">
          <p className="leading-[1.43] relative shrink-0 text-[#111928] text-[14px] w-full" data-node-id="34237:3014">
            New provider: add its name, then the policy details below
          </p>
          <p className="leading-[1.5] relative shrink-0 text-[#6b7280] text-[12px] w-full" data-node-id="34237:3015">{`Saved to your agency's provider list for next time. No linked quote, so use the amounts on the policy.`}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--2,8px)] items-start relative shrink-0 w-full" data-node-id="34237:3016" data-name="Provider (combobox, + Add new is the last option)">
          <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0 w-full" data-node-id="I34237:3016;135:141662" data-name="Label">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34237:3016;135:141663">
              Provider
            </p>
          </div>
          <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex flex-col items-start p-[var(--3,12px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" data-node-id="I34237:3016;528:335" data-name="Input">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34237:3016;528:340" data-name="Content">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] h-full justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/900,#223e47)]">
                <p className="leading-[1.25]">+ Add new</p>
              </div>
              <div className="relative shrink-0 size-[10px]" data-node-id="I34237:3016;989:72" data-name="flowbite_solid-chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:3139" data-name="New provider name">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3139;17912:21518">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3139;110:145392">
              New provider name
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3139;110:145393" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3139;110:145394" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:3139;110:145396">
                  <p className="leading-[1.25]">Seven Corners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:3152" data-name="Provider phone or website (optional)">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3152;17912:21518">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3152;110:145392">
              Provider phone or website (optional)
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3152;110:145393" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3152;110:145394" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:3152;110:145396">
                  <p className="leading-[1.25]">sevencorners.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:3017" data-name="Plan or package name">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3017;17912:21518">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3017;110:145392">
              Plan or package name
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3017;110:145393" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3017;110:145394" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:3017;110:145396">
                  <p className="leading-[1.25]">RoundTrip Choice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:3018" data-name="Policy number">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3018;17912:21518">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3018;110:145392">
              Policy number
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3018;110:145393" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3018;110:145394" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:3018;110:145396">
                  <p className="leading-[1.25]">SC-220914</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34237:3019" data-name="Coverage dates">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34237:3020" data-name="Coverage start">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3020;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3020;110:145392">
                Coverage start
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3020;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3020;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:3020;110:145396">
                    <p className="leading-[1.25]">Jun 2, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34237:3021" data-name="Coverage end">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3021;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3021;110:145392">
                Coverage end
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3021;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3021;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:3021;110:145396">
                    <p className="leading-[1.25]">Jun 14, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34237:3022" data-name="Premium and purchase date">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34237:3023" data-name="Premium paid">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3023;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3023;110:145392">
                Premium paid
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3023;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3023;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:3023;110:145396">
                    <p className="leading-[1.25]">$81.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34237:3024" data-name="Purchase date">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3024;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3024;110:145392">
                Purchase date
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3024;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3024;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:3024;110:145396">
                    <p className="leading-[1.25]">May 10, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:3025" data-name="Travelers covered">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3025;17912:21515">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3025;17339:37800">
              Travelers covered
            </p>
            <div className="bg-[var(--blue-gray\/100,#e1e7ec)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3025;17339:37801" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3025;17339:37802" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34237:3025;17339:37804">
                  <p className="leading-[1.25]">Jack Hawthorne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34237:3026" data-name="24/7 assistance phone (optional)">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3026;17912:21527">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3026;45:127837">
              24/7 assistance phone (optional)
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3026;45:127838" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3026;45:127839" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34237:3026;45:127841">
                  <p className="leading-[1.25]">Provider emergency number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-end overflow-clip relative shrink-0 w-full" data-node-id="34237:3027" data-name="Policy document">
          <div className="flex flex-[1_0_0] flex-row items-end self-stretch" data-node-id="34237:3028">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] h-full items-start min-w-px relative" data-name="Policy document (optional)">
              <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34237:3028;17912:21527">
                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34237:3028;45:127837">
                  Policy document (optional)
                </p>
                <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34237:3028;45:127838" data-name="Input">
                  <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34237:3028;45:127839" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34237:3028;45:127841">
                      <p className="leading-[1.25]">Paste a link or upload the policy PDF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[var(--gray\/200,#d9dee0)] border-solid content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="34237:3029" data-name="Upload PDF button">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/400,#45bbff)] whitespace-nowrap" data-node-id="I34237:3029;27:127993">
              Upload PDF
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[min-content]" data-node-id="34237:3030">
          Saving adds Seven Corners to your provider list and marks Jack Purchased on Responses. Policy details for a provider you add are always entered by hand.
        </p>
      </div>
      <div className="bg-[var(--gray\/50,#f6f8f9)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex items-center p-[var(--4,16px)] relative rounded-bl-[var(--rounded,4px)] rounded-br-[var(--rounded,4px)] shrink-0 w-full" data-node-id="34237:3039" data-name="Modal Footer">
        <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I34237:3039;15411:11771" data-name="Modal footer actions">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I34237:3039;15411:11771;15411:11725">
            <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[var(--0,0px)] relative" data-name="Cancel">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34237:3039;15411:11771;15411:11724">
                Cancel
              </p>
            </div>
          </div>
          <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--5,20px)] py-[var(--2․5,10px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34237:3039;15411:11771;15411:11700" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34237:3039;15411:11771;15411:11700;27:127539">
              Save policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
