import { useEffect } from 'react'
import { Check } from 'lucide-react'

export interface ToastMessage {
  id: number
  text: string
}

interface ToastProps {
  message: ToastMessage | null
  onDismiss: () => void
  durationMs?: number
}

export function Toast({ message, onDismiss, durationMs = 2400 }: ToastProps) {
  useEffect(() => {
    if (!message) return
    const t = setTimeout(onDismiss, durationMs)
    return () => clearTimeout(t)
  }, [message, onDismiss, durationMs])

  if (!message) return null

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex items-center gap-2.5 px-4 py-3 rounded-lg shadow-xl bg-travefy-navy text-white text-sm font-medium max-w-sm animate-in fade-in slide-in-from-bottom-2">
      <span className="w-5 h-5 rounded-full bg-travefy-blue flex items-center justify-center shrink-0">
        <Check className="w-3 h-3" />
      </span>
      <span>{message.text}</span>
    </div>
  )
}
