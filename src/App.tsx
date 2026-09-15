import { useState } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import TechnologySection from "./components/TechnologySection"
import { toast, ToastContainer } from "react-toastify"
import type { ITechnology } from "./types/technology"
import Footer from "./components/Footer"

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([])

  const handleAddToStack = (technology: ITechnology) => {

    const alreadyAdded = selectedTechnologies.some((selectedTechnology) => selectedTechnology.id === technology.id)

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    setSelectedTechnologies((previousTechnologies) => [...previousTechnologies, technology])

    toast.success(`${technology.name} added to your stack!`)
  }

  const handleRemoveFromStack = (technologyId: string) => {
    const technologyToRemove = selectedTechnologies.find((technology) =>
      technology.id === technologyId)

    setSelectedTechnologies((previousTechnologies) => previousTechnologies.filter((technology) => technology.id !== technologyId))

    if (technologyToRemove) {
      toast.info(`${technologyToRemove.name} removed from your stack!`)
    }
  }

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return
    }
    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack!")
  }

  return (
    <>
      <ToastContainer position="bottom-right"/>
      <Nav />
      <Banner />

      <TechnologySection
        onAddToStack={handleAddToStack}
        selectedTechnologies={selectedTechnologies}
        handleRemoveFromStack={handleRemoveFromStack}
        handleRemoveAll={handleRemoveAll}
      />
      <Footer />
    </>
  )
}

export default App
