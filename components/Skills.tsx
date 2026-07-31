import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CertificationCard from "@/components/CertificationCard";
import SkillGroupCard from "@/components/SkillGroupCard";
import {
  FEATURED_CERTIFICATIONS,
  FEATURED_SKILL_GROUPS,
} from "@/lib/credentials";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Skills"
          blurb="A foundation in networking and infrastructure, applied to building modern Java web applications."
        />

        {/* Certification badges */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {FEATURED_CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 100}>
              <CertificationCard cert={cert} />
            </Reveal>
          ))}
        </div>

        {/* Skill groups (professional certificates live on /certifications) */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURED_SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 120}>
              <SkillGroupCard group={group} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/certifications"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-fuchsia-500/40 px-5 py-2.5 text-sm font-semibold text-pop transition-colors hover:border-fuchsia-500 hover:bg-fuchsia-500/10"
          >
            View all certifications & skills
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
