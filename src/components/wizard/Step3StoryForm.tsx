import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STYLES } from "@/constants/musicStyles";
import { useFormContext } from "react-hook-form";

export function Step3StoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useFormContext();

  return (
    <section className="snap-start py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          Racontez votre histoire
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <textarea
                {...register("story")}
                placeholder="Votre histoire..."
                rows={4}
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              {errors.story && (
                <p className="text-red-500 mt-1">{errors.story.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">3 mots pour vous décrire</label>
                <div className="flex gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <input
                      key={i}
                      {...register(`identity.${i}` as const)}
                      placeholder={`Mot ${i + 1}`}
                      className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                  ))}
                </div>
                {errors.identity && (
                  <p className="text-red-500 mt-1">
                    {(errors.identity as any).message}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2">Style musical</label>
                <select
                  {...register("musicStyle")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500">
                  <option value="">Sélectionnez...</option>
                  {STYLES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.icon} {s.id}
                    </option>
                  ))}
                </select>
                {errors.musicStyle && (
                  <p className="text-red-500 mt-1">
                    {errors.musicStyle.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block mb-2">
                Cover Art (JPG/PNG, max 5 Mo)
              </label>
              <input type="file" {...register("coverFile")} />
              {errors.coverFile && (
                <p className="text-red-500 mt-1">{errors.coverFile.message}</p>
              )}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                type="submit"
                disabled={!isValid || isSubmitting}
                className="shadow-neu hover:shadow-neu-active transition-shadow">
                <Wand2 className="mr-2" />
                {isSubmitting ? "Création…" : "Créer ma chanson magique"}
              </Button>
            </div>
          </form>
        </form>
      </div>
    </section>
  );
}
