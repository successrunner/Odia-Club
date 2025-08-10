import { View } from 'react-native';

import { FONTS } from '@/constants/fonts';
import { Branding } from '@/types/branding.type';

import PrimaryText from './global/PrimaryText';

interface ServiceInfoItemProps {
  theme: Branding['theme'];
  label: string;
  value: string | null | undefined;
  className?: string;
}

export default function ServiceInfoItem({
  theme,
  label,
  value,
  className,
}: ServiceInfoItemProps) {
  if (!value) return null;

  return (
    <View className={className}>
      <PrimaryText
        color={`${theme.primary}80`}
        fontFamily={FONTS.MANROPE.REGULAR}
        className="text-sm leading-5"
      >
        {label}
      </PrimaryText>
      <PrimaryText
        color={theme.primary}
        fontFamily={FONTS.MANROPE.BOLD}
        className="text-sm leading-5"
      >
        {value}
      </PrimaryText>
    </View>
  );
}
