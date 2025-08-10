import { Text } from 'react-native';

import { FONTS } from '@/constants/fonts';

interface PrimaryTextProps {
  id?: string;
  color?: string;
  fontFamily?: string;
  className?: string;
  children: React.ReactNode;
}

export default function PrimaryText({
  id,
  color = 'var(--foreground)',
  fontFamily = FONTS.MANROPE.MEDIUM,
  className,
  children,
}: PrimaryTextProps) {
  return (
    <Text
      {...(id && { id })}
      style={{ color, fontFamily }}
      className={className}
    >
      {children}
    </Text>
  );
}
