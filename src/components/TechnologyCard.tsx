import type { ITechnology } from "../types/technology";

interface ITechnologyCardProps {
    technology: ITechnology;
    onAddToStack: (technology: ITechnology) => void;
    selectedTechnologies: ITechnology[];
}

const TechnologyCard = ({technology, onAddToStack, selectedTechnologies}: ITechnologyCardProps) => {

    const isAdded = selectedTechnologies.some((selectedTechnology) => 
        selectedTechnology.id === technology.id);

    return (
        <div className="border border-gray-200 rounded-xl p-4">

            <div className="flex items-center justify-between">
                <img src={technology.icon} alt={technology.name} className="w-10 h-10"/>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-50">{technology.badge}</span>
            </div>

            <h3 className="text-xl font-bold mt-4"> {technology.name} </h3>
            <p className="text-sm text-gray-600 mt-2">{technology.description}</p>

            <div className="flex items-center justify-between mt-5 text-xs">

                <span className="bg-gray-100 px-2 py-1 rounded"> {technology.category} </span>
                <span> {technology.difficulty} </span>

                <div className="flex items-center gap-1">
                    <div className="rating rating-xs">
                        <div className="mask mask-star-2 bg-amber-400" aria-label="Rating" aria-current="true"
                        />
                    </div>

                    <span>{technology.rating}</span>
                </div>

            </div>

            <button type="button" onClick={() => onAddToStack(technology)} 
            className={`w-full py-2 rounded-lg mt-4 ${ isAdded ? "bg-pink-100 text-pink-700 border border-pink-200" : "bg-gray-800 text-white"}`}>
                 {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </div>
    );
};

export default TechnologyCard;