import { SupplierOnboardingDialog } from "@/components/SupplierOnboardingDialog";

export function SupplierHome() {
    return (
        <div className="relative flex h-full items-center justify-center">
            <SupplierOnboardingDialog />
            <h1 className="text-4xl font-bold text-[#1F1F1F]">Supplier Dashboard</h1>
        </div>
    );
}
