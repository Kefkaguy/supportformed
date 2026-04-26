const features = [
  {
    title: "Medication schedules",
    text: "Add medicine names, dosage notes, and reminder times for each pet.",
  },
  {
    title: "Daily tracking",
    text: "See today's doses at a glance and mark them as taken or missed.",
  },
  {
    title: "Local reminders",
    text: "Notifications are scheduled on your device without a server account.",
  },
];

const faqs = [
  {
    question: "Does Pet Medication Log require an account?",
    answer:
      "No. The app is designed to be local-first, so you can start tracking pets and medications without sign-in.",
  },
  {
    question: "Where is my pet and medication data stored?",
    answer:
      "Your data is stored locally on your device. Pet Medication Log does not use external APIs, analytics, AI features, or a backend service.",
  },
  {
    question: "How do reminders work?",
    answer:
      "The app uses local notifications scheduled from your medication times. Notification delivery depends on your device settings and permissions.",
  },
  {
    question: "How can I get help?",
    answer:
      "Email support with your device model, iOS version, and a short description of the issue so we can troubleshoot quickly.",
  },
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none text-emerald-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <section className="overflow-hidden border-b border-emerald-100 bg-[linear-gradient(180deg,#effaf4_0%,#f7faf8_70%,#ffffff_100%)]">
        <div className="mx-auto min-h-[72vh] max-w-4xl px-6 py-20 text-center lg:px-8">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              Support for Pet Medication Log
            </p>
            <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-[1.02] tracking-normal text-slate-950 sm:text-6xl">
              Pet Medication Log
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-slate-800">
              For support, contact:{" "}
              <a
                href="mailto:erosimcity@gmail.com?subject=Pet%20Medication%20Log%20Support"
                className="text-emerald-700 underline decoration-emerald-300 underline-offset-4"
              >
                erosimcity@gmail.com
              </a>
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A simple, privacy-first iPhone app for tracking pet medications,
              setting local reminders, and keeping daily doses on schedule.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:erosimcity@gmail.com?subject=Pet%20Medication%20Log%20Support"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-slate-950 px-6 text-base font-bold text-white shadow-xl shadow-slate-300 transition hover:bg-slate-800"
              >
                Email Support
              </a>
              <a
                href="#faq"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-base font-bold text-slate-950 transition hover:border-emerald-200 hover:bg-emerald-50"
              >
                View FAQ
              </a>
            </div>
            <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left text-sm font-medium text-slate-600 sm:grid-cols-3">
              {["Fully offline", "No account", "No external APIs"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckIcon />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              App Help
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Built for quick medication logging
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-[#fbfcfb] p-6 shadow-sm"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-lg font-black text-emerald-700">
                  +
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Privacy
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Local-first by design
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Pet Medication Log is designed for offline use. Your pet profiles,
              medications, reminder schedules, and logs stay on your device.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "No backend service",
              "No AI processing",
              "No external data APIs",
              "No required sign-in",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-3xl bg-white p-5 font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200"
              >
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Support questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-[#fbfcfb] p-6"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Contact Support</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Contact support for bugs, reminder issues, accessibility feedback,
              or questions about using Pet Medication Log.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 text-slate-950 shadow-xl shadow-slate-900/20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Email
            </p>
            <a
              href="mailto:erosimcity@gmail.com?subject=Pet%20Medication%20Log%20Support"
              className="mt-2 block text-lg font-bold text-slate-950 underline decoration-emerald-300 underline-offset-4"
            >
              erosimcity@gmail.com
            </a>
            <p className="mt-4 text-sm font-semibold text-slate-600">
              Response time: within 24-48 hours
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
