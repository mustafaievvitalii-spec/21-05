"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const situations = [
  "Втрачене посвідчення водія",
  "Посвідчення не відображається в Дії",
  "Помилки у базі МВС",
  "Старий зразок посвідчення",
  "Відсутність посвідчення в реєстрі",
  "Відсутність фото в Дії",
  "Відмова при замовленні через Дію",
  "Допомога українцям за кордоном",
];

const procedureSteps = [
  "Перевірка ситуації",
  "Верифікація через реєстри МВС",
  "Оновлення в Дії",
  "Замовлення нового посвідчення",
  "Отримання в Україні",
  "Доставка за кордон",
];

const requiredDocuments = [
  "Фото посвідчення водія",
  "Закордонний паспорт",
  "Внутрішній паспорт або ID-карта",
  "ІПН",
  "Прописка",
  "Додаткові документи за потреби",
];

const importantDetails = [
  "Посвідчення до 2014 року часто відсутні у реєстрі",
  "Дія може не підтягувати посвідчення автоматично",
  "Помилки у базі МВС блокують процедуру",
  "Може бути відсутнє фото",
  "Посвідчення з окупованих територій інколи потребують додаткової перевірки",
];

const unsupportedCases = [
  "Виготовлення посвідчення “з нуля”",
  "Додавання категорій",
  "Відновлення після ст.130 КУпАП",
  "Підроблені документи",
  "Процедури, що вимагають складання іспитів",
];

const offerDuration = 2 * 60 * 60;

function formatTime(s: number) {
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3H7.5A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25V8.25L14.25 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3v5.25h4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12h7.5m-7.5 3h5.25" />
    </svg>
  );
}

function XMarkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export default function Landing() {
  const [timeLeft, setTimeLeft] = useState(offerDuration);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const timerText = useMemo(() => formatTime(timeLeft), [timeLeft]);

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.25),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.2),transparent_34%)]" />
      <section className="relative mx-auto min-h-screen max-w-6xl px-4 py-20 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl md:p-14">
          <p className="mb-3 inline-flex rounded-full border border-indigo-400/50 bg-indigo-500/10 px-4 py-1 text-sm">DocExpert • Юридичний супровід</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Відновлення посвідчення водія дистанційно</h1>
          <h2 className="mt-3 text-xl text-indigo-200 md:text-2xl">Для українців за кордоном</h2>
          <p className="mt-6 max-w-3xl text-slate-300">Допомагаємо внести посвідчення в Дію, перевипустити пластикове посвідчення та виправити помилки в базі МВС без необхідності приїжджати в Україну.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Офіційна процедура", "Робота через державні реєстри", "Супровід клієнтів по Європі", "Договір про надання послуг"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-200">{item}</div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Отримати консультацію", "Написати у WhatsApp", "Написати у Viber"].map((cta, i) => (
              <motion.button whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} key={cta} className={`rounded-xl px-5 py-3 text-sm font-medium ${i === 0 ? "bg-indigo-500 text-white shadow-glow" : "border border-white/20 bg-white/5 text-slate-100"}`}>{cta}</motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-12 md:px-8">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-3xl border border-amber-300/30 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 p-8 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs text-amber-200">Лише 10 місць</span>
              <h3 className="mt-3 text-2xl font-semibold">Безкоштовна перевірка ситуації для перших 10 заявок</h3>
              <p className="mt-2 text-slate-300">Ми безкоштовно перевіримо вашу ситуацію та підкажемо, чи можливо дистанційно відновити або перевипустити посвідчення.</p>
            </div>
            <div className="text-right">
              {timeLeft > 0 ? (
                <motion.p key="timer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-semibold tracking-widest text-amber-200">{timerText}</motion.p>
              ) : (
                <motion.p key="fallback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-xs text-amber-100">Менеджер перевірить доступність консультації</motion.p>
              )}
              <button className="mt-4 rounded-xl bg-amber-400 px-5 py-3 font-medium text-slate-900">Забронювати перевірку</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <h3 className="text-3xl font-semibold">З якими ситуаціями ми допомагаємо</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((item, idx) => (
            <motion.div key={item} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }} viewport={{ once: true }} whileHover={{ y: -6 }} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-lg">
              <p className="text-slate-100">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8">
        <h3 className="text-3xl font-semibold">Вартість та терміни</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[{ title: "Верифікація посвідчення", price: "200€", features: ["Внесення в Дію", "Оновлення даних", "Перевірка реєстрів", "Термін: до 1 місяця"] }, { title: "Перевипуск посвідчення", price: "300€", features: ["Замовлення нового пластику", "Отримання в Україні", "Доставка в Європу", "Термін: до 3-х тижнів"] }].map((plan) => (
            <motion.article key={plan.title} whileHover={{ scale: 1.02 }} className="rounded-3xl border border-indigo-300/30 bg-white/5 p-7 shadow-glow backdrop-blur-xl">
              <h4 className="text-xl font-semibold">{plan.title}</h4>
              <p className="mt-3 text-4xl font-bold text-indigo-200">{plan.price}</p>
              <ul className="mt-5 space-y-2 text-slate-300">
                {plan.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <h3 className="text-3xl font-semibold">Як проходить процедура</h3>
        <div className="relative mt-10 pl-6 md:pl-10">
          <div className="absolute left-[13px] top-0 h-full w-px bg-gradient-to-b from-indigo-300/10 via-indigo-300/70 to-indigo-300/10 md:left-[18px]" />
          <div className="space-y-6">
            {procedureSteps.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-lg"
              >
                <span className="absolute -left-[18px] top-6 flex h-5 w-5 items-center justify-center rounded-full border border-indigo-200/70 bg-indigo-400/30 md:-left-[26px]">
                  <span className="h-2 w-2 rounded-full bg-indigo-100" />
                </span>
                <p className="text-sm text-indigo-200">Крок {idx + 1}</p>
                <p className="mt-1 text-lg text-slate-100">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <h3 className="text-3xl font-semibold">Необхідні документи</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {requiredDocuments.map((doc, idx) => (
            <motion.article
              key={doc}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-glow backdrop-blur-lg"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-100">
                <DocumentIcon />
              </div>
              <p className="text-slate-100">{doc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-sky-300/20 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 p-8 backdrop-blur-xl"
        >
          <h3 className="text-3xl font-semibold">Важливі нюанси</h3>
          <ul className="mt-6 space-y-3 text-slate-200">
            {importantDetails.map((detail) => (
              <li key={detail} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-300" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-rose-400/35 bg-gradient-to-r from-rose-500/10 to-orange-500/10 p-8 backdrop-blur-xl"
        >
          <h3 className="text-3xl font-semibold text-rose-100">У яких випадках ми НЕ допомагаємо</h3>
          <ul className="mt-6 space-y-3 text-rose-50/90">
            {unsupportedCases.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-rose-300">
                  <XMarkIcon />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <motion.a whileHover={{ scale: 1.05 }} href="#" className="fixed bottom-6 right-6 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-glow">Консультація</motion.a>
    </main>
  );
}
