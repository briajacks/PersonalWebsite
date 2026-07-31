import { ExternalLink } from "lucide-react";
import type { ProfessionalCertificate } from "@/lib/credentials";

/** Compact professional-certificate card used by the homepage Skills section and the /certifications page. */
export default function CertificateCard({
  certificate,
}: {
  certificate: ProfessionalCertificate;
}) {
  return (
    <a
      href={certificate.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${certificate.name} certificate`}
      className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-panel p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-fuchsia-400/60 hover:shadow-md hover:shadow-fuchsia-500/10"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-md">
        <certificate.icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ink">{certificate.name}</p>
        <p className="mt-0.5 text-sm text-muted">
          {certificate.issuer} · {certificate.year}
        </p>
      </div>
      <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-faint opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
}
