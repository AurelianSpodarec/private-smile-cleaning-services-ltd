import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import buttonVariants from './buttonVariants'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  label?: string
  asChild?: boolean
  block?: boolean
  size?: "sm" | "md" | "lg"
  hideTextLoading?: boolean
  isLoading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  icon, iconPosition,
  isLoading, hideTextLoading,
  label,
  children,
  className,
  asChild = false,
  kind,
  variant,
  size,
  block,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      ref={ref}
      className={
        cn(buttonVariants({ variant, kind, size, className }), `
          inline-flex justify-center leading-4 items-center
          ${!children && isLoading && !label ? '' : 'gap-2'}
          ${iconPosition === 'right' && !isLoading ? 'flex-row-reverse' : ''}
          ${block ? 'w-full' : ''}
        `)
      }
      {...props}
    >
      <>
        {icon && (
          !isLoading || iconPosition !== 'right' &&
          <div className="flex items-center max-h-4 max-w-4 h-4 w-4 select-none pointer-events-none wop">
            {/* {icon} */}
            <div
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          </div>
        )}
        {icon && (
          !isLoading &&
          <div className="flex items-center max-h-4 max-w-4 h-4 w-4 select-none pointer-events-none">
            <div
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          </div>
        )}

        {!hideTextLoading &&
          <span className="text-nowrap">{children || label}</span>
        }

        {isLoading && (
          <svg className="max-h-3 max-w-3 h-3 w-3 inline-block animate-spin text-white select-none pointer-events-none" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}

      </>
    </Comp>
  )
}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
