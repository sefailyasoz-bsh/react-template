import Badge from "@/components/Badge";
interface SkillItem {
  label: string;
  count: number;
  color: 'denim' | 'violet' | 'sea'; // Restricting colors based on your image
  variant: 'default' | 'outline' | 'indicator' | 'indicator-large'
}const skillsData: SkillItem[] = [
  { label: 'REACT', count: 2, color: 'sea', variant: "default" },
  { label: 'TYPESCRIPT', count: 1, color: 'violet', variant: "outline" },
  { label: 'JAVASCRIPT', count: 1, color: 'violet', variant: "indicator-large" },
  { label: 'NEXTJS', count: 2, color: 'sea', variant: "indicator" },
  { label: 'TAILWINDCSS', count: 4, color: 'denim', variant: "default" },
  { label: 'REACT NATIVE', count: 2, color: 'sea', variant: "outline" },
  { label: 'EXPO', count: 4, color: 'denim', variant: "indicator" },
  { label: 'PROJECT MANAGEMENT', count: 1, color: 'violet', variant: "indicator-large" },
];

const SkillsSection: React.FC = () => {
  return (
 <div className="p-stack-padding bg-brand-white shadow-overlay rounded-component-md w-full max-w-sm">
      <h2 className="text-h4 text-neutral-900 mb-stack-padding">Skills</h2> {/* UPDATED */}
      <div className="flex flex-wrap gap-inline-padding">
        {skillsData.map((skill) => (
          <Badge
            key={skill.color + skill.label + skill.count} // Unique key for each badge
            color={skill.color}
            variant="default"
            text={skill.label}
            leftComponent={
              <span className="h-space-16 w-space-16 flex items-center justify-center bg-brand-white rounded-full text-neutral-900 text-body-s-bold"> {/* UPDATED */}
                {skill.count}
              </span>
            }
          />
        ))}
      </div>
    </div>
  );
};

const BadgeUsage = () => {
  return (
    <div className="flex flex-wrap gap-space-8 p-space-24">
     <SkillsSection />
    </div>
  );
}

export default BadgeUsage;