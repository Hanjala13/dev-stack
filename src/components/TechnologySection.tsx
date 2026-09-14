import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { ITechnology } from "../types/technology";

interface ITechnologySectionProps {
  onAddToStack: (technology: ITechnology) => void;
  selectedTechnologies: ITechnology[];
}

const TechnologySection = ({ onAddToStack, selectedTechnologies }: ITechnologySectionProps) => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      const res = await fetch("/data.json");
      const data: ITechnology[] = await res.json();

      setTechnologies(data);
      setLoading(false);
    }

    fetchTechnologies();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p>Loading technologies...</p>
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div>
        <h2 className="text-3xl font-bold"> Explore the Technologies </h2>
        <p className="text-gray-500 mt-2"> Pick one technology per category to build your ideal stack. </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} onAddToStack={onAddToStack} />
          ))}
        </div>

        <YourStack selectedTechnologies={selectedTechnologies} />

      </div>

    </section>
  )
}

export default TechnologySection;