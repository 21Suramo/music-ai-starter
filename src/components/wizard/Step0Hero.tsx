import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ChevronDown, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWizardStore } from "@/stores/useWizardStore";
import magicSparkles from "@/animations/magic-sparkles.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function Step0Hero() {
  const { next } = useWizardStore();

  return (
    <section className="snap-start h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Lottie
        animationData={magicSparkles}
        loop
        className="absolute inset-0 opacity-10 pointer-events-none"
      />
      <motion.h1
        className="text-6xl md:text-7xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 text-center px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        Un cadeau qui <span className="italic">résonne</span>
      </motion.h1>
      <Button
        type="button"
        size="xl"
        className="mt-8 shadow-neu hover:shadow-neu-active transition-shadow"
        onClick={next}>
        <Wand2 className="mr-2" /> Commencer la magie
      </Button>
      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}>
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-300" />
      </motion.div>
    </section>
  );
}
