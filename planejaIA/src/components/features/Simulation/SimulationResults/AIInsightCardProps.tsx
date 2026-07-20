import { useInsight } from '@/hooks/useInsight'

import { Content } from '@/components/features/Simulation/Insights/Content'
import { Error } from '@/components/features/Simulation/Insights/Error'

interface AIInsightCardProps {
  simulationId: string
}

export function AIInsightsCard({ simulationId }: AIInsightCardProps) {
  const { insight, isLoading, error, fetchInsight } = useInsight(simulationId)
  console.log(insight)

  return (
    <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
      <div className="mb-3 flex items-center gap-1.5">
        <span>✨</span>
        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          Insight Financeiro Personalizado
        </span>
      </div>

      {isLoading && (
        <div className="flex flex-col gap-3">
          <div className="h-3 w-full rounded bg-slate-200/80" />
          <div className="h-3 w-4/5 rounded bg-slate-200/80" />
          <div className="h-3 w-3/5 rounded bg-slate-200/80" />
        </div>
      )}
      {!isLoading && error && (
        <Error
          simulationId={simulationId}
          message={error}
          onRetry={() => {
            fetchInsight(simulationId)
          }}
        />
      )}
      {!isLoading && insight && !error && <Content insight={insight} />}
    </div>
  )
}