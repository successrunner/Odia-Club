import { Pressable } from 'react-native';

import { FONTS } from '@/constants/fonts';
import { Branding } from '@/types/branding.type';
import { formatDayAndDate } from '@/utils/date';

import PrimaryText from './global/PrimaryText';

interface DayIndicatorProps {
  id: string;
  day: number;
  date: Date;
  theme: Branding['theme'];
  headline?: string;
  isActive?: boolean;
}

export default function DayIndicator({
  id,
  day,
  date,
  theme,
  headline,
  isActive,
}: DayIndicatorProps) {
  return (
    <Pressable
      style={isActive && { backgroundColor: theme.cardPrimary }}
      className="min-w-[140px] rounded-2xl px-3 py-4"
      onPress={() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <PrimaryText color={theme.primary} className="text-sm">
        {formatDayAndDate(day, date)}
      </PrimaryText>
      {headline && (
        <PrimaryText
          color="var(--secondary-foreground)"
          fontFamily={FONTS.MANROPE.REGULAR}
          className="text-sm"
        >
          {headline}
        </PrimaryText>
      )}
    </Pressable>
  );
}
