
const subjects = [
  { icon: "🧬", title: "Biologie", detail: "Cellen, natuur en het menselijk lichaam", color: "bg-emerald-50", tag: "text-emerald-700" },
  { icon: "➗", title: "Wiskunde", detail: "Formules, sommen en logisch denken", color: "bg-blue-50", tag: "text-blue-700" },
  { icon: "🌍", title: "Aardrijkskunde", detail: "De wereld en alles wat erop leeft", color: "bg-amber-50", tag: "text-amber-700" },
  { icon: "📚", title: "Nederlands", detail: "Taal, spelling en begrijpend lezen", color: "bg-purple-50", tag: "text-purple-700" },
];

const features = [
  { icon: "🎯", title: "Jouw dagelijkse doel", text: "Leer iedere dag een beetje en houd je voortgang bij." },
  { icon: "🔥", title: "Bouw een streak op", text: "Kom terug, blijf oefenen en vier je vooruitgang." },
  { icon: "🏆", title: "Verdien prestaties", text: "Ontgrendel badges terwijl je nieuwe dingen leert." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-xl text-white">✦</span>
            <span className="text-xl font-extrabold tracking-tight">Makkelijk<span className="text-indigo-600">Leren</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#vakken" className="transition hover:text-indigo-600">Vakken</a>
            <a href="#voordelen" className="transition hover:text-indigo-600">Waarom leren?</a>
          </div>
          <a href="#begin" className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700">
            Aan de slag <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <section id="begin" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-36 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
              <span>✨</span> Leren op jouw manier
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl">
              Leren wordt een stuk <span className="text-indigo-600">makkelijker.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Oefen op jouw tempo, ontdek nieuwe onderwerpen en zie iedere dag hoeveel je vooruitgaat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#vakken" className="rounded-2xl bg-indigo-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700">
                Ontdek de vakken <span aria-hidden="true">→</span>
              </a>
              <a href="#voordelen" className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700">
                Hoe werkt het?
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <span className="flex -space-x-2 text-xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fbfaf7] bg-amber-100">📖</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fbfaf7] bg-emerald-100">✏️</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fbfaf7] bg-purple-100">💡</span>
              </span>
              <span>Jouw leerreis begint hier.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-3 top-10 h-24 w-24 rounded-3xl bg-amber-200/70 rotate-12" />
            <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-3xl bg-emerald-200/70 -rotate-12" />
            <div className="relative rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-indigo-100/70 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Jouw leerplek</p>
                  <h2 className="mt-1 text-2xl font-extrabold">Klaar om te groeien?</h2>
                </div>
                <span className="text-3xl">🌱</span>
              </div>
              <div className="mt-7 rounded-2xl bg-indigo-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-indigo-900">Dagelijks leerdoel</p>
                    <p className="mt-1 text-sm text-indigo-700">Kleine stappen tellen!</p>
                  </div>
                  <span className="text-3xl">🎯</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm font-bold text-indigo-900">
                  <span>0 van 5 vragen</span><span>0%</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-indigo-200">
                  <div className="h-full w-0 rounded-full bg-indigo-600" />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <span className="text-2xl">🔥</span>
                  <p className="mt-2 text-xl font-extrabold">0 dagen</p>
                  <p className="mt-1 text-xs text-slate-500">Huidige streak</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <span className="text-2xl">🏅</span>
                  <p className="mt-2 text-xl font-extrabold">0 badges</p>
                  <p className="mt-1 text-xs text-slate-500">Prestaties behaald</p>
                </div>
              </div>
              <p className="mt-5 text-center text-xs text-slate-400">Zo ziet je leeromgeving er straks uit.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="vakken" className="border-y border-slate-100 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">Ontdek en oefen</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Waar wil je mee beginnen?</h2>
              <p className="mt-3 text-slate-600">Ontdek verschillende vakken en leer stap voor stap.</p>
            </div>
            <span className="text-sm font-semibold text-slate-400">Jouw volgende ontdekking wacht.</span>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((subject) => (
              <article key={subject.title} className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${subject.color} text-3xl`}>{subject.icon}</div>
                <h3 className="mt-5 text-xl font-extrabold">{subject.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{subject.detail}</p>
                <div className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-bold ${subject.color} ${subject.tag}`}>Binnenkort beschikbaar</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="voordelen" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">Leren met plezier</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Elke dag een beetje beter.</h2>
            <p className="mt-4 leading-7 text-slate-600">Maak leren onderdeel van je dag en houd je eigen vooruitgang bij.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">{feature.icon}</span>
                <h3 className="mt-5 text-xl font-extrabold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-indigo-600 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <span className="text-4xl">🚀</span>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Klaar om te beginnen?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-indigo-100">MakkelijkLeren wordt jouw plek om te oefenen, doelen te halen en nieuwe dingen te ontdekken.</p>
          <p className="mt-7 inline-flex rounded-xl bg-white/15 px-5 py-3 text-sm font-bold">Binnenkort kun je hier een account aanmaken.</p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="font-extrabold text-slate-800">✦ MakkelijkLeren</span>
          <span>Leer op jouw tempo. Groei op jouw manier.</span>
          <span>© {new Date().getFullYear()} MakkelijkLeren</span>
        </div>
      </footer>
    </main>
  );
}