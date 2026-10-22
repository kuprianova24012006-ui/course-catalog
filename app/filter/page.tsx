import ElectiveFilter from "@/components/ElectiveFilter";

export default function FilterPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold">
          Фильтр курсов
        </h1>

        <ElectiveFilter />
      </div>
    </main>
  );
}
