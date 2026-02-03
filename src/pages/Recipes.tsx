import { Search, SlidersHorizontal, Plus, Coffee, Eye, Pencil, Trash2 } from "lucide-react";

const recipes = [
    {
        code: "#RCP-001",
        name: "Classic Espresso",
        ingredients: "Coffee Beans, Hot Water",
        price: "$2.50",
        iconBg: "bg-[#F2E6DA]",
    },
    {
        code: "#RCP-002",
        name: "Cappuccino",
        ingredients: "Espresso, Steamed Milk, Foam",
        price: "$3.75",
        iconBg: "bg-[#F2E6DA]",
    },
    {
        code: "#RCP-003",
        name: "Caffe Latte",
        ingredients: "Espresso, Steamed Milk",
        price: "$4.00",
        iconBg: "bg-[#F2E6DA]",
    },
    {
        code: "#RCP-004",
        name: "Mocha",
        ingredients: "Espresso, Chocolate Syrup, Milk",
        price: "$4.50",
        iconBg: "bg-[#F2E6DA]",
    },
    {
        code: "#RCP-005",
        name: "Affogato",
        ingredients: "Vanilla Gelato, Hot Espresso",
        price: "$5.00",
        iconBg: "bg-[#F2E6DA]",
    },
    {
        code: "#RCP-006",
        name: "Americano",
        ingredients: "Espresso, Hot Water",
        price: "$3.00",
        iconBg: "bg-[#F2E6DA]",
    },
    {
        code: "#RCP-007",
        name: "Flat White",
        ingredients: "Espresso, Microfoam",
        price: "$3.80",
        iconBg: "bg-[#F2E6DA]",
    },
];

export function Recipes() {
    return (
        <div className="mt-24 px-10 pb-10 w-full overflow-y-auto">
            <div className="w-full">
                {/* Page header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-[#1F1F1F]">
                        Recipe Management
                    </h1>
                    <p className="mt-1 text-sm text-[#707070]">
                        Create, edit, and organize coffee recipes
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#EFEAE5]">
                    {/* Card header */}
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-6 py-4 border-b border-[#EFEAE5]">
                        <h2 className="text-base font-semibold text-[#573E32]">All Recipes</h2>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            {/* Search */}
                            <div className="flex items-center gap-2 rounded-full bg-[#F5F3F1] px-4 py-2 w-full sm:w-[260px]">
                                <Search size={16} className="text-[#B0A49E]" />
                                <input
                                    type="text"
                                    placeholder="Search by name, code..."
                                    className="w-full bg-transparent text-sm text-[#573E32] placeholder:text-[#B0A49E] focus:outline-none"
                                />
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 self-end sm:self-auto">
                                <button className="inline-flex items-center gap-2 rounded-full border border-[#E0D5D0] bg-white px-4 py-2 text-sm font-medium text-[#573E32] hover:bg-[#F5F3F1] transition-colors">
                                    <SlidersHorizontal size={16} />
                                    <span>Filter</span>
                                </button>

                                <button className="inline-flex items-center gap-2 rounded-full bg-[#573E32] px-4 py-2 text-sm font-medium text-white hover:bg-[#432d23] transition-colors">
                                    <Plus size={16} />
                                    <span>Add Recipe</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="px-6 py-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="text-xs font-medium uppercase text-[#A7968D]">
                                        <th className="py-3">Code</th>
                                        <th className="py-3">Image</th>
                                        <th className="py-3">Recipe Name</th>
                                        <th className="py-3">Ingredient</th>
                                        <th className="py-3 text-right">Cost</th>
                                        <th className="py-3 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recipes.map((recipe) => (
                                        <tr key={recipe.code} className="border-t border-[#F1E8E2] hover:bg-[#F9F5F2]">
                                            <td className="py-3 align-middle text-[#573E32]">{recipe.code}</td>
                                            <td className="py-3 align-middle">
                                                <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${recipe.iconBg}`}>
                                                    <Coffee size={18} className="text-[#573E32]" />
                                                </div>
                                            </td>
                                            <td className="py-3 align-middle">
                                                <span className="font-medium text-[#573E32]">{recipe.name}</span>
                                            </td>
                                            <td className="py-3 align-middle max-w-xs">
                                                <p className="truncate text-[#707070]">{recipe.ingredients}</p>
                                            </td>
                                            <td className="py-3 align-middle text-right font-medium text-[#573E32]">
                                                {recipe.price}
                                            </td>
                                            <td className="py-3 align-middle">
                                                <div className="flex justify-end gap-2 text-[#B0A49E]">
                                                    <button className="hover:text-[#573E32]" aria-label="View">
                                                        <Eye size={16} />
                                                    </button>
                                                    <button className="hover:text-[#573E32]" aria-label="Edit">
                                                        <Pencil size={16} />
                                                    </button>
                                                    <button className="hover:text-[#C04A3A]" aria-label="Delete">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="mt-4 flex flex-col gap-3 items-start justify-between text-xs text-[#707070] sm:flex-row sm:items-center">
                            <p>Showing 1 to 7 of 24 entries</p>
                            <div className="inline-flex items-center gap-1 rounded-full border border-[#E0D5D0] bg-white px-2 py-1">
                                <button className="px-2 py-1 rounded-full hover:bg-[#F5F3F1]">Previous</button>
                                <button className="px-3 py-1 rounded-full bg-[#573E32] text-white text-xs">1</button>
                                <button className="px-3 py-1 rounded-full hover:bg-[#F5F3F1]">2</button>
                                <button className="px-3 py-1 rounded-full hover:bg-[#F5F3F1]">3</button>
                                <span className="px-2">...</span>
                                <button className="px-2 py-1 rounded-full hover:bg-[#F5F3F1]">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
