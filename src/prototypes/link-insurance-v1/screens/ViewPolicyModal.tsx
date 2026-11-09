import { Modal } from '../components/Modal'

export function ViewPolicyModal() {
  return (
    <div className="w-[561px] h-[972px] bg-[#f4f7fb] flex items-center justify-center">
      <Modal
        title="Advisor: View policy for Lucy Nelson"
        width={561}
        footer={
          <button className="px-6 py-2 bg-[#e1e7ec] hover:bg-[#d1dae0] text-[#223e47] text-[14px] font-semibold rounded">
            Close
          </button>
        }
      >
        <div className="space-y-6">
          <div className="bg-[#f4f7fb] border border-[#d1dae0] rounded-lg p-4">
            <div className="text-[14px] font-semibold text-[#223e47] mb-3">
              Accepted quote summary
            </div>
            <div className="space-y-2 text-[14px]">
              <div className="flex justify-between">
                <span className="text-[#4f666d]">Plan</span>
                <span className="text-[#223e47]">Preferred</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4f666d]">Provider</span>
                <span className="text-[#223e47]">Allianz Travel</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4f666d]">Price</span>
                <span className="text-[#223e47] font-semibold">$97</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Policy number
            </label>
            <div className="px-3 py-2 bg-[#f4f7fb] border border-[#d1dae0] rounded text-[14px] text-[#223e47]">
              ALZ-2026-847392
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Provider
            </label>
            <div className="px-3 py-2 bg-[#f4f7fb] border border-[#d1dae0] rounded text-[14px] text-[#223e47]">
              Allianz Travel
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Coverage dates
            </label>
            <div className="space-y-3">
              <div>
                <label className="block text-[12px] text-[#4f666d] mb-1">
                  Coverage start
                </label>
                <div className="px-3 py-2 bg-[#f4f7fb] border border-[#d1dae0] rounded text-[14px] text-[#223e47]">
                  Dec 1, 2026
                </div>
              </div>
              <div>
                <label className="block text-[12px] text-[#4f666d] mb-1">
                  Coverage end
                </label>
                <div className="px-3 py-2 bg-[#f4f7fb] border border-[#d1dae0] rounded text-[14px] text-[#223e47]">
                  Dec 15, 2026
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Certificate/policy document
            </label>
            <button className="w-full px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#2a79a6] font-semibold hover:bg-[#eff9ff] text-left">
              📄 policy-certificate.pdf
            </button>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              24/7 assistance phone
            </label>
            <div className="px-3 py-2 bg-[#f4f7fb] border border-[#d1dae0] rounded text-[14px] text-[#223e47]">
              +1 (800) 654-1908
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
