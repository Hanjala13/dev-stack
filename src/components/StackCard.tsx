import type { ITechnology } from "../types/technology";

interface IYourStackProps {
  selectedTechnologies: ITechnology[];
}

const YourStack = ({selectedTechnologies}: IYourStackProps) => {
  return (
    <aside className="border border-gray-200 rounded-xl p-5">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold"> Your Stack </h2>
        <span className="text-sm text-gray-500"> {selectedTechnologies.length} Technology Selected </span>
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No technologies added yet.
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div className="space-y-3 mt-5">

          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-200 rounded-lg p-3"
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="w-8 h-8"
              />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

            </div>
          ))}

        </div>
      )}

    </aside>
  );
};

export default YourStack;