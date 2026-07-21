import { AIInsightsCard } from '@/components/features/Simulation/SimulationResults/AIInsightCardProps'
import { Card } from '@/components/features/Simulation/SimulationResults/Card'
import { PageHero } from '@/components/shared/PageHero'
// import type { SimulationRecord } from '@/data/simulation' // removido: tipo não utilizado
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { calcMonthlySavings } from '@/utils/simulation'
import { CalendarClock, CreditCardIcon, Goal, Landmark, PiggyBank, Wallet } from 'lucide-react'
import { useParams } from 'react-router-dom'

export function SimulandoResultsPage() {
  const { id } = useParams()
  const { getFormData } = useSimulationStorage()
  
  const data = id ? getFormData(id) : null 

  if (!data) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg font-semibold text-red-500">Simulação não encontrada.</p>
      </div>
    )
  }

  const monthlySavings = calcMonthlySavings(data)

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Resultado da sua simulação"
        subtitle="Com base no seu perfil financeiro e objetivos"
      />
      
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card
          icon={Goal}
          label="Custo de Meta"
          value={data.goalAmount}
          subtitle={data.goalName}
        />
        <Card
          icon={CalendarClock}
          label="Prazo"
          value={`${data.goalDeadline} meses`}
          subtitle="Prazo para atingir a meta"
        />
        <Card
          variant="primary"
          icon={PiggyBank}
          label="Economia mensal"
          value={`R$ ${monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          subtitle="Economia mensal necessária"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <AIInsightsCard simulationId={data.id} />

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Card
            icon={Wallet}
            label="Renda mensal"
            value={data.income}
            subtitle="Renda total bruta por mês"
          />
          <Card
            icon={CreditCardIcon}
            label="Custos Fixos de Vida"
            value={data.expenses}
            subtitle="Gastos essenciais por mês"
          />
          <Card
            icon={Landmark}
            label="Dívidas / Parcelas"
            value={data.debts}
            subtitle="Valor comprometido em parcelas/depósito"
          />
        </div>

      </div>
    </main>
  )
}
