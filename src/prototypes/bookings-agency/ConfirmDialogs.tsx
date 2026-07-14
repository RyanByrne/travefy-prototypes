import { Button, Modal } from '../../shared/components'

interface ConfirmProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

/** "Export Commissions" — exports only what's currently shown in the table. */
export function ExportCommissionsModal({ open, onClose, onConfirm }: ConfirmProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Export Commissions"
      size="sm"
      footer={
        <>
          <Button variant="link" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Export Commissions</Button>
        </>
      }
    >
      <p className="text-sm text-travefy-gray-600">
        Your export will only include commissions that are currently shown in the table. Make sure your
        filters match what you expect to see in the export.
      </p>
    </Modal>
  )
}

/** "Remove Commission" — destructive; unmatches any linked booking. */
export function RemoveCommissionModal({ open, onClose, onConfirm }: ConfirmProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Remove Commission"
      size="sm"
      footer={
        <>
          <Button variant="link" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Yes, remove
          </Button>
        </>
      }
    >
      <p className="text-sm text-travefy-gray-600">
        Are you sure you want to remove this commission? Any matched bookings will be unmatched and it will
        not be included in any exports.
      </p>
    </Modal>
  )
}

/** "Confirm Match" — final step after Match Booking; moves the line to Commissions. */
export function ConfirmMatchModal({ open, onClose, onConfirm }: ConfirmProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Confirm Match"
      size="sm"
      footer={
        <>
          <Button variant="link" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm Match</Button>
        </>
      }
    >
      <p className="text-sm text-travefy-gray-600">
        Once you've matched this booking it will be reconcilable from the Commissions tab. You will no longer
        be able to edit it from Unclaimed.
      </p>
    </Modal>
  )
}
