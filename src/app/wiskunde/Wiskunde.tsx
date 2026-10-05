"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "../../lib/supabase/client";

type Subject = {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
};

type Lesson = {
  id: string;
  title: string;
  description: string | null;
  content: string | null;
};

export default function WiskundePage() {
  const [subject, setSubject] = useState<Subject | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function laadWiskunde() {
      const supabase = createClient();

      const { data: subjectData, error: subjectError } =
        await supabase
          .from("subjects")
          .select("id, title, description, icon")
          .eq("slug", "wiskunde")
          .eq("is_published", true)
          .single();

      if (subjectError) {
        setError("Het vak Wiskunde kon niet worden geladen.");
        setLoading(false);
        return;
      }

      setSubject(subjectData);

      const { data: lessonData, error: lessonError } =
        await supabase
          .from("lessons")
          .select("id, title, description, content")
          .eq("subject_id", subjectData.id)
          .eq("is_published", true)
          .order("sort_order", { ascending: true });

      if (lessonError) {
        setError("De lessen konden niet worden geladen.");
        setLoading(false);
        return;
      }

      setLessons(lessonData || []);
      setLoading(false);
    }

    laadWiskunde();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-slate-600">Wiskunde wordt geladen...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="rounded-lg bg-red-100 p-4 text-red-700">
            {error}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Terug naar de homepage
        </Link>

        {subject && (
          <section className="mt-6 rounded-2xl bg-white p-8 shadow-sm">
            <div className="text-5xl">{subject.icon}</div>

            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              {subject.title}
            </h1>

            <p className="mt-2 text-lg text-slate-600">
              {subject.description}
            </p>
          </section>
        )}

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Lessen
          </h2>

          {lessons.length === 0 ? (
            <p className="mt-4 text-slate-600">
              Er zijn nog geen lessen beschikbaar.
            </p>
          ) : (
            <div className="mt-4 space-y-4">
              {lessons.map((lesson, index) => (
                <article
                  key={lesson.id}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {lesson.title}
                      </h3>

                      {lesson.description && (
                        <p className="mt-1 text-slate-600">
                          {lesson.description}
                        </p>
                      )}

                      {lesson.content && (
                        <div className="mt-4 whitespace-pre-line text-slate-700">
                          {lesson.content}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}