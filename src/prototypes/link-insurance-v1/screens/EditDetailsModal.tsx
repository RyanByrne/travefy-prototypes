import { Modal } from '../components/Modal'

export function EditDetailsModal() {
  return (
    <div className="w-[490px] h-[756px] bg-[#f4f7fb] flex items-center justify-center">
      <Modal
        title="Traveler: edit your details"
        width={490}
        footer={
          <>
            <button className="px-4 py-2 text-[14px] font-semibold text-[#678390] hover:text-[#223e47]">
              Cancel
            </button>
            <button className="px-6 py-2 bg-[#2a79a6] hover:bg-[#1B6793] text-white text-[14px] font-semibold rounded">
              Save & continue
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Full name
            </label>
            <input
              type="text"
              defaultValue="Jack Hawthorne"
              className="w-full px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Date of birth
            </label>
            <input
              type="date"
              defaultValue="1985-03-15"
              className="w-full px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              State of residence
            </label>
            <select
              defaultValue="CA"
              className="w-full px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
            >
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
            </select>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Trip cost
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[14px] text-[#678390]">$</span>
              <input
                type="number"
                defaultValue="8400"
                className="w-full pl-6 pr-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#223e47] mb-2">
              Trip dates
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                defaultValue="2026-12-01"
                className="px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
              />
              <input
                type="date"
                defaultValue="2026-12-15"
                className="px-3 py-2 border border-[#d1dae0] rounded text-[14px] text-[#223e47] focus:outline-none focus:ring-2 focus:ring-[#2a79a6] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
