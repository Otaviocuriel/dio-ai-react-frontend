import { AIInsightsCard } from '@/components/features/Simulation/SimulationResults/AIInsightCardProps'
import { Card } from '@/components/features/Simulation/SimulationResults/Card'
import { PageHero } from '@/components/shared/PageHero'
// import type { SimulationRecord } from '@/data/simulation' // removido: tipo não utilizado
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { calcMonthlySavings } from '@/utils/simulation'
import { CalendarClock, CreditCardIcon, Goal, Landmark, PiggyBank, Trash2, Wallet } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function SimulandoResultsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getFormData, getAllFormData, deleteSimulation } = useSimulationStorage()
  
  const data = id ? getFormData(id) : null 
  const simulations = getAllFormData()

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

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-foreground text-xl font-semibold">Histórico de Simulações</h2>
            <p className="text-muted-foreground text-sm">Resumo das simulações salvas no seu navegador</p>
          </div>
          <Link className="text-primary text-sm font-semibold" to="/historico">
            Ver histórico completo
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {simulations.slice().reverse().map((simulation, index) => (
            <article key={`${simulation.id}-${index}`} className="bg-card rounded-2xl p-5 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-foreground text-base font-semibold">{simulation.goalName}</h3>
                  <p className="text-muted-foreground text-sm">{simulation.goalDeadline} meses para atingir a meta</p>
                </div>
                <button
                  type="button"
                  className="text-muted-foreground hover:text-red-500"
                  aria-label="Excluir simulação"
                  onClick={() => {
                    deleteSimulation(simulation.id)
                    if (simulation.id === data.id) {
                      void navigate('/')
                    }
                  }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
              <div className="text-muted-foreground space-y-1 text-sm">
                <p>Renda: {simulation.income}</p>
                <p>Custos: {simulation.expenses}</p>
                <p>Dívidas: {simulation.debts}</p>
                <p>Meta: {simulation.goalAmount}</p>
              </div>
              <Link
                className="text-primary mt-4 inline-flex text-sm font-semibold"
                to={`/resultado/${simulation.id}`}
              >
                Ver detalhes
              </Link>
              <Link
                className="text-amber-400 mt-4 ml-4 inline-flex text-sm font-semibold"
                to={`/editar/${simulation.id}`}
              >
                Editar
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
