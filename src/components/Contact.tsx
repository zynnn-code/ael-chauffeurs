"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { contact } from "@/lib/content";

const fields = [
  { id: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { id: "phone", label: "Phone", type: "tel", required: false, autoComplete: "tel" },
  { id: "company", label: "Company", type: "text", required: false, autoComplete: "organization" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-onyx py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.35em] text-gold">
            Reserve Your Journey
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight">
            Let&rsquo;s Get You Moving
          </h2>
          <p className="mt-6 text-ivory-dim/80 font-light">
            Call {contact.phone} or send the details below — our booking
            team will call you straight back, day or night.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {fields.map((field) => (
                <div
                  key={field.id}
                  className={field.id === "company" ? "sm:col-span-2" : undefined}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-[11px] uppercase tracking-[0.25em] text-ivory-dim/80"
                  >
                    {field.label}
                    {field.required && <span className="text-gold"> *</span>}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    className="mt-2.5 w-full border-b border-ivory-dim/30 bg-transparent py-2.5 text-ivory placeholder:text-ivory-dim/40 outline-none transition-colors focus:border-gold"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-[11px] uppercase tracking-[0.25em] text-ivory-dim/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2.5 w-full resize-none border-b border-ivory-dim/30 bg-transparent py-2.5 text-ivory outline-none transition-colors focus:border-gold"
                />
              </div>

              <div className="sm:col-span-2">
                <motion.button
                  type="submit"
                  data-cursor="Send"
                  whileTap={{ scale: 0.97 }}
                  disabled={submitted}
                  className="cursor-pointer rounded-full bg-gold px-9 py-3.5 text-[12px] uppercase tracking-[0.2em] text-onyx transition-colors hover:bg-gold-bright disabled:cursor-default disabled:opacity-70"
                >
                  {submitted ? "Message Sent — Thank You" : "Send Message"}
                </motion.button>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-sm text-ivory-dim/70"
                  >
                    Our booking team will be in touch shortly.
                  </motion.p>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="h-full rounded-sm border border-gold/20 bg-ivory/[0.03] p-9">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Call Anytime
                </span>
                <a
                  href={contact.phoneHref}
                  className="mt-2 block font-display text-3xl text-ivory hover:text-gold-bright transition-colors"
                >
                  {contact.phone}
                </a>
                <p className="mt-1 text-xs text-ivory-dim/60">
                  Available 24 hours, 7 days a week
                </p>
              </div>

              <div className="mt-8 border-t border-ivory-dim/15 pt-8">
                <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Email
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 block text-ivory hover:text-gold-bright transition-colors"
                >
                  {contact.email}
                </a>
              </div>

              <div className="mt-8 border-t border-ivory-dim/15 pt-8">
                <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Address
                </span>
                <p className="mt-2 text-ivory-dim/85 font-light leading-relaxed">
                  AEL Chauffeurs
                  <br />
                  {contact.addressLines[0]}
                  <br />
                  {contact.addressLines[1]}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
