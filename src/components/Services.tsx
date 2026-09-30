"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="relative bg-onyx py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.35em] text-gold">
            What We Do
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight">
            Wherever. Whenever. However You Move.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.key} delay={i * 0.1}>
              <TiltCard className="group relative isolate flex h-80 flex-col justify-end overflow-hidden rounded-sm">
                <Image
                  src={service.image}
                  alt={`${service.name} — AEL Chauffeurs`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-onyx via-onyx/60 to-onyx/10" />
                <div className="p-8">
                  <h3 className="font-display text-2xl sm:text-3xl text-ivory">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-ivory-dim/85 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    data-cursor="Learn"
                    href="#contact"
                    className="mt-5 inline-flex cursor-pointer items-center gap-2 border-b border-gold/60 pb-1 text-[11px] uppercase tracking-[0.2em] text-gold-bright transition-colors hover:border-gold-bright"
                  >
                    Learn More
                    <span aria-hidden>&rarr;</span>
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
