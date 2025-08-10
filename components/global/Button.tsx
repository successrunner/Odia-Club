import { Pressable } from 'react-native';

import { FONTS } from '@/constants/fonts';

import PrimaryText from './PrimaryText';

interface ButtonProps {
  size?: 'extra-small' | 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'muted';
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textColor?: string;
  backgroundColor?: string;
  onPress: () => void;
  // default
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  size = 'medium',
  variant = 'primary',
  disabled = false,
  leftIcon,
  rightIcon,
  textColor,
  backgroundColor,
  onPress,
  // default
  children,
  className = '',
}: ButtonProps) {
  const defaultStyle =
    'flex flex-row gap-2 rounded-full flex items-center justify-center cursor-pointer';

  const baseStyles = {
    primary: 'border-none',
    secondary: 'border border-white/70',
    muted: 'border-none',
  };
  const sizeStyles = {
    'extra-small': 'h-8 px-3',
    small: 'h-8 sm:h-11 px-4 sm:px-6',
    medium: 'h-8 sm:h-12 px-4 sm:px-8',
    large: 'h-10 sm:h-14 px-6 sm:px-12',
  };
  const textStyle = {
    'extra-small': 'text-xs sm:text-sm',
    small: 'text-sm sm:text-lg',
    medium: 'text-sm sm:text-lg',
    large: 'text-sm sm:text-lg',
  };
  const variantStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary backdrop-blur',
    muted: 'bg-muted',
  };

  return (
    <Pressable
      style={backgroundColor && { backgroundColor }}
      className={`${defaultStyle} ${baseStyles[variant]} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      onPress={onPress}
    >
      {leftIcon && leftIcon}
      <PrimaryText
        color={
          textColor ||
          (variant === 'muted' ? 'var(--accent-foreground)' : 'white')
        }
        fontFamily={FONTS.MANROPE.SEMIBOLD}
        className={textStyle[size]}
      >
        {children}
      </PrimaryText>
      {rightIcon && rightIcon}
    </Pressable>
  );
}
