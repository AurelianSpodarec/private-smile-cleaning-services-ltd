import { cva } from 'class-variance-authority'

/**
* @description CVA provides limited grouping functionality. Please adhere to the specified structure.
* @note Ensure the use of template literals for quoting to facilitate class line breaking for proper organization.
* 
*  The first line of CVA globally affects all the buttons
*/

const buttonVariants = cva(
  `rounded-button-border-radius border border-button-border-color`,
  {
    variants: {
      kind: {
        solid: '',
        outline: 'bg-transparent',
        glass: 'border-transparent backdrop-blur-sm bg-opacity-60',
      },
      variant: {
        primary: '',
        secondary: '',
      },
      size: {
        sm: "p-button-size-sm-padding text-button-size-sm-foreground",
        md: "p-button-size-md-padding text-button-size-md-foreground",
        lg: "p-button-size-lg-padding text-button-size-lg-foreground",
      }
    },
    compoundVariants: [
      // ======================================
      // Primary
      // ======================================
      {
        variant: 'primary',
        kind: 'solid',
        className: `bg-button-primary hover:bg-button-primary/50
                    
                    `
      },
      {
        variant: 'primary',
        kind: 'outline',
        className: `border border-button-primary`
      },
      // ======================================
      // Secondary
      // ======================================
      {
        variant: 'secondary',
        kind: 'solid',
        className: `bg-button-secondary 
                    
                    `
      },
      {
        variant: 'secondary',
        kind: 'outline',
        className: `border border-button-secondary`
      },
      // ======================================
      // Glass
      // ======================================
    ],
    defaultVariants: {
      variant: 'primary',
      kind: "solid",
      size: "md"
    }
  }
)

export default buttonVariants
