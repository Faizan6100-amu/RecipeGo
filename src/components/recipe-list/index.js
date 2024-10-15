import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  // console.log(recipeList);
  return (
    <div className="bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen">
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Unleash Your Inner Chef: Recipe Collection
        </h2>
        <Link href={"/"}>
          <button className="mb-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 transition duration-300">
            Go Home
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((recipe) => (
              <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] transition-transform">
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 transition-colors duration-200 hover:text-purple-600">
                        {recipe.name}
                      </h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg text-gray-600">
                          Rating: <span className="font-bold text-purple-600">{recipe.rating}</span>
                        </p>
                        <div className="ml-auto">
                          <p className="text-lg text-gray-600 font-bold bg-purple-100 p-2 rounded-full">
                            {recipe.cuisine}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">No recipes found.</p>
          )}
        </div>
      </div>
       {/* Footer Section */}
       <footer className="bg-purple-600 text-white py-4 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Recipe App. All rights reserved.
          </p>
          <div className="mt-2">
            <Link href="#" className="text-white hover:text-gray-200 mx-2">
              Made with ❤️ in India
            </Link>
            |
            <Link href="https://www.linkedin.com/in/faizan-anwar-khan-amu/" className="text-white hover:text-gray-200 mx-2">
              Developed by Faizan@Khan
            </Link>
            |
            <Link href="https://github.com/Faizan6100-amu/" className="text-white hover:text-gray-200 mx-2">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
