"use client";

import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";
import { stats, whyUs } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative bg-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-28 sm:px-10 sm:py-36 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative aspect-4/5 w-full overflow-hidden rounded-sm lg:order-2">
          <Image
            src="/media/about-chauffeur.jpg"
            alt="An AEL chauffeur opening the door of a luxury Mercedes"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-onyx/10" />
        </Reveal>

        <Reveal className="lg:order-1">
          <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
            About AEL
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl text-onyx leading-tight">
            No Detail Left To Chance
          </h2>
          <p className="mt-6 text-stone text-base sm:text-lg font-light leading-relaxed">
            AEL Chauffeurs delivers executive travel across the UK —
            airport transfers, private tours and everything between — for
            clients who simply expect it done properly. Our roster spans
            celebrities, corporations and elite individuals, and we&rsquo;re
            a regular choice for athletes who appreciate our Executive
            Premium Plus seating and its extra legroom.
          </p>
          <p className="mt-5 text-stone text-base sm:text-lg font-light leading-relaxed">
            Whether it&rsquo;s business or pleasure, our standard
            doesn&rsquo;t change. Every chauffeur is trained to
            anticipate what you need before you ask — impeccable
            punctuality, quiet professionalism, and the kind of
            consistency that turns first-time clients into long-term
            ones.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-onyx/10 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-4xl text-gold-deep">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    display={stat.display}
                  />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative isolate overflow-hidden border-t border-onyx/10 bg-onyx">
        <Image
          src="/media/grille-detail.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-25 -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-onyx/85" />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.35em] text-gold">
              Why Work With Us
            </span>
            <h2 className="mt-5 font-display italic text-3xl sm:text-4xl lg:text-5xl text-ivory leading-snug">
              &ldquo;It&rsquo;s our vision to exceed expectations, and
              transform the way you travel.&rdquo;
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Reveal key={item.key} delay={i * 0.1}>
                <span className="font-display text-5xl text-gold-deep/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ivory">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-ivory-dim/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
