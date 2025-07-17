import { motion } from "framer-motion";
import { User, Gift, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWizardStore } from "@/stores/useWizardStore";

export function Step1Recipient() {
  const { selectedFor, setSelected, next } = useWizardStore();

  return (
    <section className="snap-start h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-semibold mb-8">
        Qui est cette chanson pour ?
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {(["Myself", "Someone"] as const).map((opt) => (
          <motion.div
            key={opt}
            onClick={() => setSelected(opt)}
            className={`p-8 rounded-3xl backdrop-blur-sm bg-white/30 dark:bg-gray-700/30 cursor-pointer flex flex-col items-center transition-all ${
              selectedFor === opt
                ? "ring-2 ring-pink-500 shadow-lg"
                : "shadow-md hover:shadow-lg"
            }`}
            whileHover={{ scale: 1.03 }}>
            {opt === "Myself" ? (
              <User className="w-12 h-12 mb-4 text-purple-600" />
            ) : (
              <Gift className="w-12 h-12 mb-4 text-pink-600" />
            )}
            <span className="text-xl font-medium">
              {opt === "Myself" ? "Moi" : "Pour un proche"}
            </span>
          </motion.div>
        ))}
      </div>
      {selectedFor && (
        <Button type="button" className="mt-12" onClick={next}>
          Continuer <ChevronDown className="ml-2" />
        </Button>
      )}
    </section>
  );
}
