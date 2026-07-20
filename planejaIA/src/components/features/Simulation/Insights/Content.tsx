import React from 'react'
import type { InsightData } from '@/service/aiService'

interface Props {
  insight: InsightData
}

export function Content({ insight }: Props) {
  return (
    <div className="prose max-w-none">
      <h3 className="font-semibold mb-2">Diagnóstico</h3>
      <p className="mb-3">{insight.diagnosis?.content}</p>

      <h4 className="font-semibold">Sugestões</h4>
      <ul className="mb-3 list-disc pl-5">
        {insight.suggestions?.items?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h4 className="font-semibold">Renda extra</h4>
      <ul className="mb-3 list-disc pl-5">
        {insight.extraIncome?.items?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  )
}
