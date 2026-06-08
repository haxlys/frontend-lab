import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { value: "99.7%", label: "Accuracy Rate" },
  { value: "<20ms", label: "Token Latency" },
  { value: "1M+", label: "Context Window" },
  { value: "50B+", label: "Parameters" },
];

export default function Stats() {
  const ref = useScrollReveal();

  return (
    <section className="relative px-6 py-20">
      <div
        ref={ref}
        className="reveal glass mx-auto max-w-4xl rounded-3xl p-10 sm:p-14"
      >
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-geist text-3xl font-bold text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 font-inter text-sm font-medium text-gray-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
