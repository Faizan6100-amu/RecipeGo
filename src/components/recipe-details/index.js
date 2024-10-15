import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen py-8">
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
        <Link href={"/recipe-list"} className="text-blue-600 hover:text-blue-800 transition duration-300 mb-4 inline-block">
          &larr; Go to Recipe List
        </Link>
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-full lg:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getRecipeDetails?.name}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl text-gray-700 font-medium">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl text-gray-800 font-semibold">
                Cuisine: <span className="text-gray-600">{getRecipeDetails?.cuisine}</span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
