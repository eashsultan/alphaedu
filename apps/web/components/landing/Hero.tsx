import React from "react";
import Link from "next/link";
import HeroDashboardMockup from "./HeroDashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-20 sm:pb-24 sm:pt-32 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--color-brand-orange)] to-[var(--color-brand-blue)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="inline-flex rounded-full bg-[var(--color-brand-blue)]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[var(--color-brand-blue)]">
            THE FUTURE OF SCHOOL MANAGEMENT
          </p>
          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Run your school <span className="text-[var(--color-brand-orange)]">smarter.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            AlphaEdu brings students, teachers, parents, results, attendance, and school
            administration together in one simple platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#get-started"
              className="rounded-full bg-[var(--color-brand-orange)] px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Get Started
            </Link>
            <Link
              href="#how-it-works"
              className="text-base font-semibold leading-6 text-gray-900 transition-colors hover:text-[var(--color-brand-blue)]"
            >
              See How It Works <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <HeroDashboardMockup />
      </div>
    </section>
  );
}
