"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { fleet } from "@/lib/content";

export default function Fleet() {
  return (
    <section id="fleet" className="relative bg-ivory pt-6 pb-28 sm:pt-8 sm:pb-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
            Our Fleet
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-onyx leading-tight">
            Machines Built For The Moment
          </h2>
          <p className="mt-6 text-stone text-base sm:text-lg font-light leading-relaxed">
            Every vehicle in our collection is prepared to the same
            exacting standard — whether you&rsquo;re travelling for
            business, arriving at an event in style, or simply want the
            most comfortable seat in the city. We&rsquo;re also proud to
            be the choice of athletes who value our Executive Premium
            Plus seating and its extra legroom.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {fleet.map((car, i) => (
            <Reveal key={car.key} delay={i * 0.12}>
              <TiltCard className="group flex h-full flex-col overflow-hidden rounded-sm bg-onyx shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={car.image}
                    alt={`${car.name} — AEL Chauffeurs`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col px-7 py-8">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
                    {car.tagline}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-ivory">
                    {car.name}
                  </h3>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {car.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-ivory-dim/85 font-light"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    data-cursor="Book"
                    href="#contact"
                    className="mt-8 inline-flex cursor-pointer items-center gap-2 self-start border-b border-gold/60 pb-1 text-[12px] uppercase tracking-[0.2em] text-gold-bright transition-colors hover:border-gold-bright"
                  >
                    Book Now
                    <span aria-hidden>&rarr;</span>
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-sm border border-onyx/10 bg-onyx/[0.03] px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-onyx">
                Need Multiple Cars, Or Something Bespoke?
              </h3>
              <p className="mt-2 text-stone font-light">
                Large parties, multi-car convoys, unusual requests — tell us
                what you need and we&rsquo;ll build the journey around it.
              </p>
            </div>
            <a
              href="#contact"
              className="cursor-pointer shrink-0 rounded-full bg-onyx px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold hover:text-onyx"
            >
              Book Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
