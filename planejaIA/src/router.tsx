import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { SimulationFormPage } from './pages/SimulationFormPage'
import { SimulandoResultsPage } from './pages/SimulationResultsPage'
import { useSimulationStorage } from './hooks/useSimulationStorage'
import { Link } from 'react-router-dom'

function SimulationHistoryPage() {
  const { getAllFormData, deleteSimulation } = useSimulationStorage()
  const simulations = getAllFormData()

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <h1 className="text-foreground mb-2 text-2xl font-semibold sm:text-3xl">Histórico de Simulações</h1>
      <p className="text-muted-foreground mb-8 text-sm">Exibindo os resumos salvos no localStorage</p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {simulations.length === 0 && (
          <div className="bg-card rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
            Nenhuma simulação salva ainda.
          </div>
        )}

        {simulations.slice().reverse().map((simulation) => (
          <article key={simulation.id} className="bg-card rounded-2xl p-5 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
            <h2 className="text-foreground text-base font-semibold">{simulation.goalName}</h2>
            <p className="text-muted-foreground text-sm">Prazo: {simulation.goalDeadline} meses</p>
            <p className="text-muted-foreground mt-3 text-sm">Renda: {simulation.income}</p>
            <p className="text-muted-foreground text-sm">Custo da meta: {simulation.goalAmount}</p>

            <div className="mt-4 flex items-center gap-4">
              <Link className="text-primary text-sm font-semibold" to={`/resultado/${simulation.id}`}>
                Ver detalhes
              </Link>
              <Link className="text-sm font-semibold text-amber-400" to={`/editar/${simulation.id}`}>
                Editar
              </Link>
              <button
                type="button"
                className="text-sm font-semibold text-red-500"
                onClick={() => deleteSimulation(simulation.id)}
              >
                Excluir
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulationFormPage />,
      },
      {
        path: '/editar/:id',
        element: <SimulationFormPage />,
      },
      {
        path: '/resultado/:id',
        element: <SimulandoResultsPage />,
      },
      {
        path: '/historico',
        element: <SimulationHistoryPage />,
      },
    ],
  },
])
