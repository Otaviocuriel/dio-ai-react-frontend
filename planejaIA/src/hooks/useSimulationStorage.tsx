import type { SimulationFormData, SimulationRecord } from "@/data/simulation"

const LOCAL_STORAGE_KEY = 'simulando-data'

const readStorage = () => {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY)

  return storage ? (JSON.parse(storage) as SimulationRecord[]) : []
}

const writeStorage = (data: SimulationRecord[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

export const useSimulationStorage = () => {
  const saveFormData = (formData: SimulationFormData) => {
    const id = crypto.randomUUID()
    const record: SimulationRecord = { ...formData, id }

    const savedData = readStorage()

    writeStorage([...savedData, record])

    return id
  }


  const getFormData = (id: string): SimulationRecord | null => {
    const savedData = readStorage()
    return savedData.find((record) => record.id === id) || null
  }

  const getAllFormData = () => readStorage()

  const updateSimulation = (id: string, data: SimulationRecord) => {
    const savedData = readStorage()

    const updated = savedData.map((record) =>
      record.id === id ? {...data} : record,
  )
  
  writeStorage(updated)
  }

  const deleteSimulation = (id: string) => {
    const updated = readStorage().filter((record) => record.id !== id)

    writeStorage(updated)
  }

  return { saveFormData, getFormData, getAllFormData, updateSimulation, deleteSimulation }
}
