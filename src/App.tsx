import { useState } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import TechnologySection from "./components/TechnologySection"
import type { ITechnology } from "./types/technology"

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([])

  const handleAddToStack = (technology: ITechnology) => {
    setSelectedTechnologies((previousTechnologies) => {
      return [...previousTechnologies, technology]
    })
  }

  return (
    <>
      <Nav />
      <Banner />
      <TechnologySection onAddToStack={handleAddToStack} />
    </>
  )
}

export default App
