import * as yup from "yup";

export const formSchema = yup.object({
  emotionalTone: yup
    .array()
    .of(yup.string())
    .min(1, "Sélectionnez au moins une émotion"),
  otherEmotion: yup.string().when("emotionalTone", {
    is: (arr: string[]) => arr.includes("Other"),
    then: yup.string().required("Précisez l'émotion"),
  }),
  story: yup
    .string()
    .min(20, "Au moins 20 caractères")
    .required("Racontez votre histoire"),
  identity: yup
    .array()
    .of(yup.string().min(2))
    .length(3, "3 mots requis")
    .required(),
  musicStyle: yup.string().required("Choisissez un style"),
  coverFile: yup
    .mixed()
    .test("required", "Image requise", (v) => v?.length > 0)
    .test("size", "Max 5 Mo", (v) => v?.[0]?.size <= 5e6)
    .test("type", "JPG/PNG uniquement", (v) =>
      ["image/jpeg", "image/png"].includes(v?.[0]?.type)
    ),
});

export type FormData = yup.InferType<typeof formSchema>;
