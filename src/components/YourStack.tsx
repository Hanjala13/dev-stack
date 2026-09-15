import type { ITechnology } from "../types/technology";

interface IYourStackProps {
  selectedTechnologies: ITechnology[];
  handleRemoveFromStack: (technologyId: string) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({ selectedTechnologies, handleRemoveFromStack, handleRemoveAll }: IYourStackProps) => {
  return (
    <aside className="border border-gray-200 rounded-xl p-5">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Your Stack</h2>
        <span className="text-sm text-gray-500"> {selectedTechnologies.length} Technology Selected </span>
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500"> No technologies added yet. </p>
          <p className="text-sm text-gray-400 mt-2"> Add technologies from the list to build your stack. </p>
        </div>
      ) : (
        <div className="space-y-3 mt-5">

          {selectedTechnologies.map((technology) => (
            <div key={technology.id} className="flex items-center gap-3 border border-gray-200 rounded-lg p-3" >

              <img src={technology.icon} alt={technology.name} className="w-8 h-8" />

              <div className="flex-1">
                <h3 className="font-semibold"> {technology.name} </h3>
                <p className="text-xs text-gray-500"> {technology.category} </p>
              </div>

              <button onClick={() => handleRemoveFromStack(technology.id)} className="text-xs text-red-500 border border-gray-200 rounded-md px-2 py-1 hover:bg-red-50">Remove</button>

            </div>
          ))}

          {selectedTechnologies.length > 0 && (
            <button onClick={handleRemoveAll}
              className="w-full mt-5 py-2 rounded-lg border border-red-200 text-red-500 hover:bg-red-50">
              Remove All
            </button>
          )}

        </div>
      )}

    </aside>
  );
};

export default YourStack;