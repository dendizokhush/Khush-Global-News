import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function Newsletter({ variant = 'default' }: { variant?: 'default' | 'sidebar' }) {
  return (
    <form className={cn("flex flex-col space-y-2", variant === 'sidebar' ? "" : "max-w-md mx-auto")}>
      <input
        type="email"
        placeholder="Your email address"
        className={cn(
          "w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-accent",
          variant === 'sidebar' 
            ? "bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white" 
            : "bg-white border-gray-300 text-gray-900"
        )}
      />
      <Button 
        type="submit" 
        className={cn(
          "w-full font-bold",
          variant === 'sidebar' ? "bg-accent hover:bg-accent/90 text-white" : "bg-primary hover:bg-primary/90 text-white"
        )}
      >
        Subscribe
      </Button>
    </form>
  );
}
