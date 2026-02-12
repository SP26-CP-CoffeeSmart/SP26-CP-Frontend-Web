import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus } from "lucide-react";

// Validation schemas
const step1Schema = z.object({
    recipeName: z.string().min(1, "Recipe name is required"),
    flavorStylePrimary: z.string().min(1, "Flavor style is required"),
    flavorStyleSecondary: z.string().optional(),
    brewingMethod: z.string().min(1, "Brewing method is required"),
    description: z.string().optional(),
});

const step2Schema = z.object({
    isHot: z.boolean(),
    isCold: z.boolean(),
    containMilk: z.boolean(),
    hasIce: z.boolean(),
    createdResource: z.string().optional(),
    caffeineStrength: z.enum(["Low", "Medium", "High"]).optional(),
    prepTimeRange: z.string().optional(),
    difficultyLevel: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
    suggestedOccasions: z.string().optional(),
    costBase: z.number(),
    flavorNotes: z.string().optional(),
    brewingStepsData: z.string().optional(),
    brewingVariablesData: z.string().optional(),
    ingredients: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            quantity: z.string(),
            unit: z.string(),
            costEstimate: z.string(),
        })
    ),
});

type Step1FormData = z.infer<typeof step1Schema>;
type Step2FormData = z.infer<typeof step2Schema>;

interface RecipeCreateDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit?: (data: Step1FormData & Step2FormData) => void;
}

export function RecipeCreateDialog({ open, onOpenChange, onSubmit }: RecipeCreateDialogProps) {
    const [step, setStep] = useState<1 | 2>(1);
    const [step1Data, setStep1Data] = useState<Step1FormData | null>(null);

    const step1Form = useForm<Step1FormData>({
        resolver: zodResolver(step1Schema),
        defaultValues: {
            recipeName: "",
            flavorStylePrimary: "",
            flavorStyleSecondary: "",
            brewingMethod: "",
            description: "",
        },
    });

    const step2Form = useForm<Step2FormData>({
        resolver: zodResolver(step2Schema),
        defaultValues: {
            isHot: true,
            isCold: false,
            containMilk: false,
            hasIce: false,
            createdResource: "",
            caffeineStrength: "Medium",
            prepTimeRange: "",
            difficultyLevel: "Beginner",
            suggestedOccasions: "",
            costBase: 0,
            flavorNotes: "",
            brewingStepsData: "",
            brewingVariablesData: "",
            ingredients: [],
        },
    });

    const handleStep1Submit = async (data: Step1FormData) => {
        setStep1Data(data);
        setStep(2);
    };

    const handleStep2Submit = async (data: Step2FormData) => {
        if (step1Data && onSubmit) {
            onSubmit({ ...step1Data, ...data });
        }
        onOpenChange(false);
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleClose = () => {
        setStep(1);
        step1Form.reset();
        step2Form.reset();
        setStep1Data(null);
        onOpenChange(false);
    };

    const addIngredient = () => {
        const currentIngredients = step2Form.getValues("ingredients");
        step2Form.setValue("ingredients", [
            ...currentIngredients,
            { id: Date.now().toString(), name: "", quantity: "", unit: "", costEstimate: "" },
        ]);
    };

    const removeIngredient = (id: string) => {
        const currentIngredients = step2Form.getValues("ingredients");
        step2Form.setValue(
            "ingredients",
            currentIngredients.filter((ing) => ing.id !== id)
        );
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-[#1F1F1F]">
                        Create New Recipe
                    </DialogTitle>
                    <p className="text-sm text-[#707070] mt-1">
                        {step === 1
                            ? "Define details, parameters, and ingredients for a new brew"
                            : "Define advanced details, brewing steps, and parameters"}
                    </p>
                </DialogHeader>

                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${step >= 1
                                ? "bg-[#573E32] text-white"
                                : "bg-[#EFEAE5] text-[#573E32]"
                            }`}
                    >
                        1
                    </div>
                    <div className={`flex-1 h-1 transition-colors ${step >= 2 ? "bg-[#573E32]" : "bg-[#EFEAE5]"}`} />
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${step >= 2
                                ? "bg-[#573E32] text-white"
                                : "bg-[#EFEAE5] text-[#573E32]"
                            }`}
                    >
                        2
                    </div>
                </div>

                {/* Step 1 Form */}
                {step === 1 && (
                    <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-[#1F1F1F] uppercase">Basic Information</h3>

                            {/* Recipe Name and Brewing Method */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#573E32]">Recipe Name</label>
                                    <Input
                                        placeholder="e.g. Morning Blend V2"
                                        {...step1Form.register("recipeName")}
                                        className="bg-white"
                                    />
                                    {step1Form.formState.errors.recipeName && (
                                        <p className="text-xs text-red-500">
                                            {step1Form.formState.errors.recipeName.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#573E32]">Brewing Method</label>
                                    <select
                                        {...step1Form.register("brewingMethod")}
                                        className="w-full px-3 py-2 border border-[#E0D5D0] rounded-lg bg-white text-sm text-[#573E32] focus:outline-none focus:border-[#573E32]"
                                    >
                                        <option value="">Select method...</option>
                                        <option value="Pour Over">Pour Over</option>
                                        <option value="Espresso">Espresso</option>
                                        <option value="French Press">French Press</option>
                                        <option value="AeroPress">AeroPress</option>
                                        <option value="Cold Brew">Cold Brew</option>
                                    </select>
                                    {step1Form.formState.errors.brewingMethod && (
                                        <p className="text-xs text-red-500">
                                            {step1Form.formState.errors.brewingMethod.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Flavor Styles */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#573E32]">Flavor Style Primary</label>
                                    <Input
                                        placeholder="e.g. Fruity, Nutty"
                                        {...step1Form.register("flavorStylePrimary")}
                                        className="bg-white"
                                    />
                                    {step1Form.formState.errors.flavorStylePrimary && (
                                        <p className="text-xs text-red-500">
                                            {step1Form.formState.errors.flavorStylePrimary.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#573E32]">Flavor Style Secondary</label>
                                    <Input
                                        placeholder="e.g. Nutty"
                                        {...step1Form.register("flavorStyleSecondary")}
                                        className="bg-white"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#573E32]">Description</label>
                                <textarea
                                    placeholder="Short description of the recipe..."
                                    {...step1Form.register("description")}
                                    className="w-full px-3 py-2 border border-[#E0D5D0] rounded-lg bg-white text-sm text-[#573E32] focus:outline-none focus:border-[#573E32] resize-none"
                                    rows={3}
                                />
                            </div>
                        </div>

                        <Separator />

                        {/* Buttons */}
                        <div className="flex gap-3 justify-end">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleClose}
                                className="border-[#E0D5D0] text-[#573E32] hover:bg-[#F5F3F1]"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="bg-[#573E32] text-white hover:bg-[#432d23]"
                            >
                                Next Step
                            </Button>
                        </div>
                    </form>
                )}

                {/* Step 2 Form */}
                {step === 2 && (
                    <form onSubmit={step2Form.handleSubmit((data) => handleStep2Submit(data))} className="space-y-6 max-h-[calc(90vh-250px)] overflow-y-auto pr-4">
                        {/* Recipe Properties */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-[#1F1F1F] uppercase">Recipe Properties</h3>

                            <div className="grid grid-cols-4 gap-3">
                                {/* Checkboxes */}
                                {[
                                    { name: "isHot", label: "Is Hot" },
                                    { name: "isCold", label: "Is Cold" },
                                    { name: "containMilk", label: "Contain Milk" },
                                    { name: "hasIce", label: "Has Ice" },
                                ].map(({ name, label }) => (
                                    <div key={name} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id={name}
                                            {...step2Form.register(name as any)}
                                            className="w-4 h-4 rounded border-[#E0D5D0] text-[#573E32] focus:ring-2 focus:ring-[#573E32]"
                                        />
                                        <label htmlFor={name} className="text-sm font-medium text-[#573E32] cursor-pointer">
                                            {label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recipe Details */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-[#1F1F1F] uppercase">Recipe Details</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#573E32]">Caffeine Strength</label>
                                    <select
                                        {...step2Form.register("caffeineStrength")}
                                        className="w-full px-3 py-2 border border-[#E0D5D0] rounded-lg bg-white text-sm text-[#573E32] focus:outline-none focus:border-[#573E32]"
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#573E32]">Prep Time Range</label>
                                    <Input
                                        placeholder="e.g. 3-5 mins"
                                        {...step2Form.register("prepTimeRange")}
                                        className="bg-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#573E32]">Difficulty Level</label>
                                    <select
                                        {...step2Form.register("difficultyLevel")}
                                        className="w-full px-3 py-2 border border-[#E0D5D0] rounded-lg bg-white text-sm text-[#573E32] focus:outline-none focus:border-[#573E32]"
                                    >
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#573E32]">Cost (Base)</label>
                                    <Input
                                        type="number"
                                        placeholder="0.00"
                                        {...step2Form.register("costBase", { valueAsNumber: true })}
                                        className="bg-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#573E32]">Suggested Occasions</label>
                                <Input
                                    placeholder="Morning, Afternoon, etc..."
                                    {...step2Form.register("suggestedOccasions")}
                                    className="bg-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#573E32]">Flavor Notes</label>
                                <textarea
                                    placeholder="Detailed taste profile description..."
                                    {...step2Form.register("flavorNotes")}
                                    className="w-full px-3 py-2 border border-[#E0D5D0] rounded-lg bg-white text-sm text-[#573E32] focus:outline-none focus:border-[#573E32] resize-none"
                                    rows={3}
                                />
                            </div>
                        </div>

                        {/* Brewing Steps */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-[#1F1F1F] uppercase">Brewing Steps Data</h3>
                                <Button
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    onClick={() => { }}
                                    className="border-[#E0D5D0] text-[#573E32] hover:bg-[#F5F3F1]"
                                >
                                    <Plus size={14} className="mr-1" />
                                    Add Step
                                </Button>
                            </div>

                            <textarea
                                placeholder="Step 1: ...\nStep 2: ...\nStep 3: ..."
                                {...step2Form.register("brewingStepsData")}
                                className="w-full px-3 py-2 border border-[#E0D5D0] rounded-lg bg-white text-sm text-[#573E32] focus:outline-none focus:border-[#573E32] resize-none"
                                rows={3}
                            />
                        </div>

                        {/* Ingredients */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-[#1F1F1F] uppercase">Ingredients</h3>
                                <div className="text-sm text-[#707070]">
                                    Total Cost: <span className="font-semibold text-[#573E32]">$0.00</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#573E32]">Search Ingredient</label>
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Type to search..."
                                        className="bg-white flex-1"
                                    />
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-20 px-3 py-2 border border-[#E0D5D0] rounded-lg bg-white text-sm text-[#573E32] focus:outline-none focus:border-[#573E32]"
                                    />
                                    <select
                                        className="w-16 px-2 py-2 border border-[#E0D5D0] rounded-lg bg-white text-sm text-[#573E32] focus:outline-none focus:border-[#573E32]"
                                    >
                                        <option>g</option>
                                        <option>ml</option>
                                        <option>cup</option>
                                    </select>
                                    <Button
                                        type="button"
                                        size="sm"
                                        className="bg-[#573E32] text-white hover:bg-[#432d23]"
                                        onClick={addIngredient}
                                    >
                                        Add Item
                                    </Button>
                                </div>
                            </div>

                            {/* Ingredients List */}
                            {step2Form.watch("ingredients").length > 0 && (
                                <div className="mt-4 space-y-2">
                                    <div className="bg-[#F5F3F1] rounded-lg p-3 space-y-2">
                                        {step2Form.watch("ingredients").map((ingredient) => (
                                            <div key={ingredient.id} className="flex items-center gap-2 bg-white p-2 rounded border border-[#E0D5D0]">
                                                <span className="flex-1 text-sm text-[#573E32]">{ingredient.name || "New Ingredient"}</span>
                                                <span className="text-xs text-[#707070]">{ingredient.quantity} {ingredient.unit}</span>
                                                <span className="text-xs text-[#707070]">${ingredient.costEstimate}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeIngredient(ingredient.id)}
                                                    className="p-1 text-[#707070] hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Separator />

                        {/* Buttons */}
                        <div className="flex gap-3 justify-end">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleBack}
                                className="border-[#E0D5D0] text-[#573E32] hover:bg-[#F5F3F1]"
                            >
                                Back
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleClose}
                                className="border-[#E0D5D0] text-[#573E32] hover:bg-[#F5F3F1]"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="bg-[#573E32] text-white hover:bg-[#432d23]"
                            >
                                Create Recipe
                            </Button>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
