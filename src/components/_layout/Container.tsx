import { ReactNode } from 'react';

interface IContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: object;
  size?: string;
}

function Container({ id, style, size, className, children }: IContainerProps) {
  const options: { [key: string]: string } = {
    clear: "",
    fluid: 'max-w-none',
    default: "container",
    sm: 'max-w-sm',
    base: 'max-w-base',
    xs: 'max-w-xs',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  };

  return (
    <div
      id={id}
      style={style}
      className={` mx-auto px-4 md:px-8 lg:px-16 ${size ? `${options[size]}` : `${options["default"]}`} ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
