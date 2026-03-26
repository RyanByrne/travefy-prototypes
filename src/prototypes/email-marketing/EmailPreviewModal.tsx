import { clsx } from 'clsx'
import { Monitor, Smartphone, X } from 'lucide-react'
import { useEffect, useState } from 'react'

type Device = 'desktop' | 'mobile'

export function EmailPreviewModal({
  open,
  onClose,
  subjectLine,
  fromName,
  html,
}: {
  open: boolean
  onClose: () => void
  subjectLine: string
  fromName: string
  html: string
}) {
  const [device, setDevice] = useState<Device>('desktop')

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-travefy-gray-100">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-travefy-gray-200 shrink-0">
        {/* Left — context */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-travefy-gray-500">Viewing as:</span>
          <div className="flex items-center gap-1.5 px-3 py-1.5 border border-travefy-gray-300 rounded text-sm font-medium text-travefy-navy bg-white">
            Subscriber
            <svg className="w-3.5 h-3.5 text-travefy-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        {/* Center — device toggle */}
        <div className="flex items-center border border-travefy-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => setDevice('mobile')}
            className={clsx(
              'flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors',
              device === 'mobile'
                ? 'bg-travefy-navy text-white'
                : 'bg-white text-travefy-gray-600 hover:bg-travefy-gray-50',
            )}
          >
            <Smartphone className="w-4 h-4" /> Mobile
          </button>
          <button
            onClick={() => setDevice('desktop')}
            className={clsx(
              'flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors',
              device === 'desktop'
                ? 'bg-travefy-navy text-white'
                : 'bg-white text-travefy-gray-600 hover:bg-travefy-gray-50',
            )}
          >
            <Monitor className="w-4 h-4" /> Desktop
          </button>
        </div>

        {/* Right — close */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 bg-travefy-blue text-white text-sm font-semibold rounded hover:bg-travefy-blue-dark transition-colors"
        >
          Close Preview
        </button>
      </div>

      {/* Preview area */}
      <div className="flex-1 overflow-auto p-6 flex justify-center">
        <div
          className={clsx(
            'shrink-0 transition-all duration-300',
            device === 'desktop' ? 'w-full max-w-[900px]' : 'w-[400px]',
          )}
        >
          {/* Browser chrome card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-travefy-gray-200">
            {/* Window dots */}
            <div className="flex items-center gap-2 px-4 py-3 bg-travefy-gray-50 border-b border-travefy-gray-200">
              <div className="w-3 h-3 rounded-full bg-[#ec6a5e]" />
              <div className="w-3 h-3 rounded-full bg-[#f4bf4f]" />
              <div className="w-3 h-3 rounded-full bg-[#61c554]" />
            </div>

            {/* Email header bar */}
            <div className="px-6 py-4 border-b border-travefy-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-travefy-blue/10 border border-travefy-blue/20 flex items-center justify-center text-travefy-blue text-sm font-bold shrink-0">
                  {(fromName || 'T')[0].toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-travefy-navy">{fromName || 'Sender Name'}</p>
                  <p className="text-xs text-travefy-gray-500">{subjectLine || '(no subject line)'}</p>
                </div>
              </div>
            </div>

            {/* Email body */}
            <div
              className="overflow-y-auto bg-white"
              style={{ maxHeight: 'calc(100vh - 260px)' }}
            >
              {html ? (
                <div
                  className="px-6 py-6 text-sm"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ) : (
                <div className="px-6 py-16 text-center">
                  <p className="text-travefy-gray-400 text-sm">Your email content will appear here.</p>
                  <p className="text-travefy-gray-300 text-xs mt-1">Start adding content in the editor.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
