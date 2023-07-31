import {cva, type VariantProps} from 'class-variance-authority'
import {twMerge} from 'tailwind-merge'

const buttonVariants = cva(
  'flex items-center justify-center px-2 py-2 rounded-[11px] focus:outline-none font-medium tracking-wide transition-all duration-[300ms] laptop:hover:scale-[1.05]',
  {
    variants: {
      intent: {
        primary: 'bg-red text-12 text-white border-2 border-red',
        secondary: 'bg-transparent border-2 border-solid border-red text-black'
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4']
      }
    },
    compoundVariants: [{intent: 'primary', size: 'medium', className: 'uppercase'}],
    defaultVariants: {
      intent: 'primary',
      size: 'medium'
    }
  }
)

type ButtonVariant = VariantProps<typeof buttonVariants>

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariant {}

export default function Button({className, intent, size, ...props}: ButtonProps) {
  return <button className={twMerge(buttonVariants({intent, size, className}))} {...props} />
}
