import type { SimulationFormData, SimulationRecord } from "@/data/simulation"

const LOCAL_STORAGE_KEY = 'simulando-data'

export const useSimulationStorage = () => {
  const saveFormData = (formData: SimulationFormData) => {
    const id = crypto.randomUUID()
    const record: SimulationRecord = { ...formData, id }
     
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    const savedData = storage 
      ? (JSON.parse(storage) as SimulationRecord[]) 
      : []

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...savedData, record])
    )

    return id
  }


  const getFormData = (id: string): SimulationRecord | null => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(!storage){
      return null 
    }

    const savedData = JSON.parse(storage) as SimulationRecord[]
    return savedData.find((record) => record.id === id) || null
  }

  const updateSimulation = (id: string, partial: Partial<SimulationRecord>) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!storage) return false

    const savedData = JSON.parse(storage) as SimulationRecord[]
    const index = savedData.findIndex((r) => r.id === id)
    if (index === -1) return false

    savedData[index] = { ...savedData[index], ...partial }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedData))
    return true
  }

  return { saveFormData, getFormData, updateSimulation }
}
