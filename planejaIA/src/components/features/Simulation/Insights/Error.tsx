import React from 'react'

interface Props {
  simulationId: string
  message: string
  onRetry: () => void
}

export function Error({ simulationId, message, onRetry }: Props) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <p className="text-sm text-red-700 font-medium">{message}</p>
      <div className="mt-3 flex items-center gap-2">
        <button
          className="rounded bg-red-600 px-3 py-1 text-white text-sm"
          onClick={onRetry}
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
