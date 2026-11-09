import { X } from 'lucide-react'
import { ReactNode } from 'react'

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
  width?: number
  height?: number
}

export function Modal({ isOpen = true, onClose, title, children, footer, width, height }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
        style={{ width: width ? `${width}px` : 'auto', maxHeight: height ? `${height}px` : '90vh' }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d1dae0]">
          <h2 className="text-[18px] font-semibold text-[#223e47]">{title}</h2>
          {onClose && (
            <button onClick={onClose} className="text-[#678390] hover:text-[#223e47]">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
        
        {footer && (
          <div className="px-6 py-4 border-t border-[#d1dae0] flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
