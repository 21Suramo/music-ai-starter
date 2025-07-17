import { useWizardStore } from "@/stores/useWizardStore";

export const StepContainer: React.FC<{
  idx: number;
  children: React.ReactNode;
}> = ({ idx, children }) => {
  const { step } = useWizardStore();
  return step === idx ? <>{children}</> : null;
};
