import type { VariantProps } from 'class-variance-authority';

export const buttonVariants = {
  base: "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs",
      destructive: "bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white shadow-xs",
      outline: "bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
  }
} as const config = {
  compoundVariants: ['full', 'outline', 'text', 'icon'],
  defaultVariants: ['default', 'destructive', 'outline', 'ghost', 'link'],
    defaultVariants: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
    compoundVariants: ['default', 'outline', 'text', 'icon'],
  },
  compound: {
      full: 'w-full',
      outline: 'border border',
      ghost: 'transparent',
      link: 'underline'
    }
  }
} as const config = {
  compoundVariants: ['full', 'outline', 'text', 'icon'],
  defaultVariants: ['default', 'destructive', 'outline', 'ghost', 'link'],
    defaultVariants: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
  },
  compound: {
      full: 'w-full',
      outline: 'border border',
      ghost: 'transparent',
      link: 'underline'
    }
  },
  {
    compound: ['full', 'outline', 'text', 'icon'],
    defaultVariants: ['default', 'destructive', 'line', 'outline', 'ghost', 'link']
  }
} as const config = {
  compoundVariants: ['full', 'outline', 'text', 'icon'],
    defaultVariants: ['default', 'destructive', 'line', 'outline', 'ghost', 'link'],
    compound: {
      full: 'w-full',
      outline: 'border border',
      ghost: 'transparent',
      link: 'underline'
    }
  }
};

export type ButtonSize = VariantProps<typeof buttonVariants.size>['default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'>;
export type ButtonVariant = VariantProps<typeof buttonVariants.variant>['default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'>;