import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CertificationCard from "@/components/CertificationCard";
import CertificateCard from "@/components/CertificateCard";
import SkillGroupCard from "@/components/SkillGroupCard";
import {
  CERTIFICATIONS,
  PROFESSIONAL_CERTIFICATES,
  SKILL_GROUPS,
} from "@/lib/credentials";

export const metadata: Metadata = {
  title: "Certifications & Skills | Bria Jackson",
  description:
    "The full collection of certifications and skills held by Bria Jackson — CompTIA, Cisco, AWS, and Oracle credentials alongside Java, Spring Boot, and web development skills.",
};

export default function CertificationsPage() {
  return (
    <main className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Subtle backdrop accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-300/25 blur-3xl dark:bg-fuchsia-600/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-0 -z-10 h-72 w-72 rounded-full bg-violet-300/25 blur-3xl dark:bg-violet-600/10"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-8">
          <Link
            href="/#skills"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </Reveal>

        <SectionHeading
          as="h1"
          eyebrow="Credentials"
          title="Certifications & Skills"
          blurb="The full collection — every certification I've earned and the skills I work with, from networking and infrastructure to modern Java web development."
        />

        {/* Certification badges */}
        <h2 className="font-display mb-6 text-sm font-semibold tracking-[0.2em] text-muted uppercase">
          Certifications
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 3) * 100}>
              <CertificationCard cert={cert} />
            </Reveal>
          ))}
        </div>

        {/* Professional certificates */}
        <h2 className="font-display mt-16 mb-6 text-sm font-semibold tracking-[0.2em] text-muted uppercase">
          Professional Certificates
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONAL_CERTIFICATES.map((certificate, i) => (
            <Reveal key={certificate.name} delay={(i % 3) * 100}>
              <CertificateCard certificate={certificate} />
            </Reveal>
          ))}
        </div>

        {/* Skill groups */}
        <h2 className="font-display mt-16 mb-6 text-sm font-semibold tracking-[0.2em] text-muted uppercase">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 120}>
              <SkillGroupCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
