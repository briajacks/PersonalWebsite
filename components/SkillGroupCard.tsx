import type { SkillGroup } from "@/lib/credentials";

/** Skill group panel used by the homepage Skills section and the /certifications page. */
export default function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="h-full rounded-2xl border border-line bg-panel/70 p-6 shadow-sm">
      <h3 className="font-display mb-5 text-sm font-semibold tracking-[0.15em] text-muted uppercase">
        {group.title}
      </h3>
      <ul className="space-y-3">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-3 rounded-xl border border-line bg-tint px-3 py-2.5 transition-colors duration-200 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${skill.chip}`}
            >
              <skill.icon className={`h-5 w-5 ${skill.iconColor}`} />
            </span>
            <span className="text-sm font-medium text-body">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
