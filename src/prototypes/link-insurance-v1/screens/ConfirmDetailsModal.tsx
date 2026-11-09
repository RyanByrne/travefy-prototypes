import { Modal } from '../components/Modal'

export function ConfirmDetailsModal() {
  return (
    <div className="w-[490px] h-[309px] bg-[#f4f7fb] flex items-center justify-center">
      <Modal
        title="Traveler: confirm your details"
        width={490}
        footer={
          <>
            <button className="px-4 py-2 text-[14px] font-semibold text-[#678390] hover:text-[#223e47]">
              Cancel
            </button>
            <button className="px-6 py-2 bg-[#2a79a6] hover:bg-[#1B6793] text-white text-[14px] font-semibold rounded">
              Confirm
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <div className="text-[14px] font-semibold text-[#223e47] mb-3">
              Your details
            </div>
            <div className="space-y-2 text-[14px]">
              <div className="flex justify-between">
                <span className="text-[#4f666d]">Full name</span>
                <span className="text-[#223e47] font-medium">Jack Hawthorne</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4f666d]">Date of birth</span>
                <span className="text-[#223e47] font-medium">March 15, 1985</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4f666d]">State of residence</span>
                <span className="text-[#223e47] font-medium">California</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4f666d]">Trip cost</span>
                <span className="text-[#223e47] font-medium">$8,400</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4f666d]">Trip dates</span>
                <span className="text-[#223e47] font-medium">Dec 1 - 15, 2026</span>
              </div>
            </div>
          </div>
          <button className="text-[14px] text-[#2a79a6] font-semibold hover:underline">
            Edit
          </button>
        </div>
      </Modal>
    </div>
  )
}
