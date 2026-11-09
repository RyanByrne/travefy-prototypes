import { Modal } from '../components/Modal'

export function AddPolicyModal() {
  return (
    <div className="w-[561px] h-[1062px] bg-[#f4f7fb] flex items-center justify-center">
      <Modal
        title="Advisor: Add policy for Jack Hawthorne"
        width={561}
        footer={
          <>
            <button className="px-4 py-2 text-[14px] font-semibold text-[#678390] hover:text-[#223e47]">
              Cancel
            </button>
            <button className="px-6 py-2 bg-[#2a79a6] hover:bg-[#1B6793] text-white text-[14px] font-semibold rounded">
              Add policy
            </button>
          </>
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
                <span className="text-[#223e47]">OneTrip Prime</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4f666d]">Provider</span>
                <span className="text-[#223e47]">Allianz Travel</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4f666d]">Price</span>
                <span className="text-[#223e47] font-semibold">$72</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Policy number
            </label>
            <input
              type="text"
              placeholder="Enter policy number"
              className="w-full px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] placeholder:text-[#b9c7ce] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Provider
            </label>
            <select
              defaultValue="allianz"
              className="w-full px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
            >
              <option value="allianz">Allianz Travel</option>
              <option value="travel-guard">Travel Guard</option>
              <option value="add-new">+ Add new provider</option>
            </select>
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
                <input
                  type="date"
                  defaultValue="2026-12-01"
                  className="w-full px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-[12px] text-[#4f666d] mb-1">
                  Coverage end
                </label>
                <input
                  type="date"
                  defaultValue="2026-12-15"
                  className="w-full px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Certificate/policy document
            </label>
            <div className="border-2 border-dashed border-[#d1dae0] rounded-lg p-6 text-center">
              <div className="text-[14px] text-[#4f666d] mb-2">
                Drop file here or click to upload
              </div>
              <div className="text-[12px] text-[#b9c7ce]">
                PDF, up to 10MB
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[14px] text-[#223e47] mb-2">
              24/7 assistance phone (optional)
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] placeholder:text-[#b9c7ce] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}
