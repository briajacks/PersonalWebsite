import { ExternalLink } from "lucide-react";
import type { Certification } from "@/lib/credentials";

/** Certification badge card used by the homepage Skills section and the /certifications page. */
export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.credlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${cert.name} badge on Credly`}
      className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-panel p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/60 hover:shadow-xl hover:shadow-fuchsia-500/10"
    >
      {/* Gradient glow on hover */}
      <div
        className={`absolute -top-12 -right-12 h-28 w-28 rounded-full bg-gradient-to-br ${cert.gradient} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-50`}
      />
      <ExternalLink className="absolute top-4 right-4 h-4 w-4 text-faint opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cert.gradient} shadow-md`}
      >
        <cert.icon className={`h-6 w-6 ${cert.iconColor}`} />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink">
        {cert.name}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {cert.issuer} · {cert.year}
      </p>
      <p className="mt-3 text-xs font-medium text-pop opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Verify on Credly →
      </p>
    </a>
  );
}
