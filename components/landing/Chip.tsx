import { View } from 'react-native';

import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';

interface ChipProps {
  text: string;
  className?: string;
}

export default function Chip({ text, className = '' }: ChipProps) {
  return (
    <View className={`rounded-full bg-odia-light px-3 py-1 ${className}`}>
      <PrimaryText
        fontFamily={FONTS.MANROPE.MEDIUM}
        color="var(--accent-foreground)"
        className="text-xs uppercase tracking-wider"
      >
        {text}
      </PrimaryText>
    </View>
  );
}
