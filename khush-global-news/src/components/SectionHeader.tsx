import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  className?: string;
  link?: string;
  linkText?: string;
}

export default function SectionHeader({ title, className, link, linkText = "View All" }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between border-b-2 border-gray-100 pb-2 mb-6", className)}>
      <h2 className="font-display font-bold text-xl md:text-2xl text-primary relative">
        {title}
        <span className="absolute -bottom-[10px] left-0 w-full h-[2px] bg-accent" />
      </h2>
      {link && (
        <a href={link} className="text-xs font-bold text-accent uppercase tracking-wider hover:underline">
          {linkText}
        </a>
      )}
    </div>
  );
}
