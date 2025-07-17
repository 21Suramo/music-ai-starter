import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWizardStore } from "@/stores/useWizardStore";
import { TONES } from "@/constants/tones";
import { useFormContext } from "react-hook-form";

export function Step2Emotions() {
  const { next, tones, setTones } = useWizardStore();
  const { control, watch } = useFormContext();
  const selectedTones = watch("emotionalTone") || [];

  useEffect(() => {
    setTones(selectedTones);
  }, [selectedTones, setTones]);

  return (
    <section className="snap-start h-screen px-6 py-16">
      <h2 className="text-4xl font-semibold text-center mb-6">
        Quelle émotion souhaitez-vous transmettre ?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {TONES.map((tone) => (
          <Controller
            key={tone.id}
            name="emotionalTone"
            control={control}
            render={({ field }) => {
              const sel = field.value.includes(tone.id);
              return (
                <motion.label
                  className={`flex flex-col items-center p-6 rounded-2xl backdrop-blur-sm bg-white/30 dark:bg-gray-700/30 cursor-pointer transition-all ${
                    sel
                      ? "ring-2 ring-indigo-500 shadow-lg"
                      : "shadow-md hover:shadow-lg"
                  }`}
                  whileHover={{ scale: 1.05 }}>
                  <input
                    type="checkbox"
                    className="hidden"
                    value={tone.id}
                    checked={sel}
                    onChange={(e) => {
                      const vals = field.value as string[];
                      field.onChange(
                        e.target.checked
                          ? [...vals, tone.id]
                          : vals.filter((v) => v !== tone.id)
                      );
                    }}
                  />
                  <span className="text-4xl mb-2">{tone.icon}</span>
                  <span className="font-medium">{tone.id}</span>
                </motion.label>
              );
            }}
          />
        ))}
      </div>
      {tones.includes("Other") && (
        <div className="mt-8 max-w-md mx-auto">
          <input
            {...register("otherEmotion")}
            placeholder="Décrivez votre émotion"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400"
          />
          {errors.otherEmotion && (
            <p className="text-red-500 mt-1">{errors.otherEmotion.message}</p>
          )}
        </div>
      )}
      {tones.length > 0 && (
        <Button type="button" className="mt-12 block mx-auto" onClick={next}>
          Continuer <ChevronDown className="ml-2" />
        </Button>
      )}
    </section>
  );
}
