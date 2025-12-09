import { LucideIcon } from 'lucide-react';

interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureBlock({ icon: Icon, title, description }: FeatureBlockProps) {
  return (
    <div className="flex items-start gap-4 py-6 border-b border-black/10 last:border-0">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#9CB4A7]" strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="mb-1 text-sm">{title}</h4>
        <p className="text-[#333333]/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
