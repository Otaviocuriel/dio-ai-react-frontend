import { SimulationForm } from "@/components/features/Simulation/Form"
import { SimulationHero } from "@/components/features/Simulation/Hero"
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { useParams } from 'react-router-dom'

export function SimulationFormPage () {
    const { id } = useParams()
    const { getFormData } = useSimulationStorage()
    const initialData = id ? getFormData(id) : null

    return (
        <main className="mx-auto max-w-xl px-4 py-10 sm:py-14">
            <SimulationHero />
            <SimulationForm initialData={initialData} />
        </main>
    )
}