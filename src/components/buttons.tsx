// import * as React from 'react';

// const buttonVariants = cva(
//   'cursor-pointer duration-150 flex items-center justify-center gap-2 uppercase p-2 border-solid',
//   {
//     variants: {
//       variant: {
//         primary:
//           'text-neutral-white bg-primary-500 hover:bg-primary-600 disabled:bg-grey-50',
//         secondary:
//           'bg-secondary-500 py-4 px-8 font-bold italic leading-6 text-lg text-grey-800 max-h-14 hover:bg-grey-800 hover:text-white',
//         ghost:
//           'text-grey-900 border border-primary-500 hover:bg-primary-100 disabled:border-none disabled:text-neutral-white disabled:bg-grey-50',
//         link: 'relative before:absolute before:w-full before:h-0.5 before:bg-primary-500 before:-bottom-1 p-0 before:hover:bg-primary-600 before:duration-150 disabled:text-grey-50 disabled:before:bg-grey-50',
//         destructive: 'bg-semantic-danger-500 text-neutral-white',
//         danger: 'bg-semantic-danger-100 border border-semantic-danger-500',
//         danger_dark:
//           'bg-semantic-danger-500 border border-semantic-danger-500 text-neutral-white',
//         input: 'text-grey-500 border border-grey-100 not-italic',
//         disabled:
//           'text-grey-400 bg-grey-200 cursor-not-allowed pointer-events-none border border-bg-grey-200',
//       },
//       size: {
//         default: 'px-6 py-2 text-sm leading-6',
//         small: 'px-4 py-1.5 text-sm leading-4',
//         large: 'px-8 py-4 text-lg leading-6',
//         medium: 'px-3 py-2',
//         icon: 'p-2',
//       },
//     },
//     defaultVariants: {
//       variant: 'primary',
//       size: 'default',
//     },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : 'button';
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// Button.displayName = 'Button';

// export { Button, buttonVariants };
// function cva(
//   arg0: string,
//   arg1: {
//     variants: {
//       variant: {
//         primary: string;
//         secondary: string;
//         ghost: string;
//         link: string;
//         destructive: string;
//         danger: string;
//         danger_dark: string;
//         input: string;
//         disabled: string;
//       };
//       size: {
//         default: string;
//         small: string;
//         large: string;
//         medium: string;
//         icon: string;
//       };
//     };
//     defaultVariants: { variant: string; size: string };
//   }
// ) {
//   throw new Error('Function not implemented.');
// }
