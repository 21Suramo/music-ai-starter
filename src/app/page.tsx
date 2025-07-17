"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import confetti from "canvas-confetti";
import { formSchema } from "@/schemas/formSchema";
import { ProgressBar } from "@/components/wizard/ProgressBar";
import { StepContainer } from "@/components/wizard/StepContainer";
import { Step0Hero } from "@/components/wizard/Step0Hero";
import { Step1Recipient } from "@/components/wizard/Step1Recipient";
import { Step2Emotions } from "@/components/wizard/Step2Emotions";
import { Step3StoryForm } from "@/components/wizard/Step3StoryForm";
import { useWizardStore } from "@/stores/useWizardStore";

export default function HomePage() {
  const { step } = useWizardStore();
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { emotionalTone: [], identity: ["", "", ""] },
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    confetti({ particleCount: 150, spread: 50 });
    console.log("Submitted:", data);
    // TODO: appel API
  };

  return (
    <FormProvider {...methods}>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
        {/* Barre de progression */}
        <div className="fixed top-0 left-0 right-0 p-2 z-40 backdrop-blur bg-white/30 dark:bg-gray-800/30">
          <ProgressBar value={((step + 1) / 4) * 100} />
        </div>

        <StepContainer idx={0}>
          <Step0Hero />
        </StepContainer>

        <StepContainer idx={1}>
          <Step1Recipient />
        </StepContainer>

        <StepContainer idx={2}>
          <Step2Emotions />
        </StepContainer>

        <StepContainer idx={3}>
          <Step3StoryForm onSubmit={onSubmit} />
        </StepContainer>

        {/* Footer */}
        <footer className="snap-start py-8 text-center text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} MySongGift. Tous droits réservés.
        </footer>
      </div>
    </FormProvider>
  );
}
