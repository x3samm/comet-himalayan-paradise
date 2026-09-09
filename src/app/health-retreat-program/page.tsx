import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health retreat program | CHP Himalayan Paradise",
};

export default function HealthRetreatProgramPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Health retreat program
        </h1>
      </div>
    </main>
  );
}
