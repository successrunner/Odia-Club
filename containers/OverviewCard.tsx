import { Image, View } from 'react-native';

import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';
import { Branding } from '@/types/branding.type';
import { ItinerarySummary, ProposalSummary } from '@/types/summary.type';
import { formatDayAndDate } from '@/utils/date';

interface OverviewCardProps {
  theme: Branding['theme'];
  summary: ItinerarySummary | ProposalSummary;
}

export default function OverviewCard({ theme, summary }: OverviewCardProps) {
  return (
    <View
      style={{ backgroundColor: theme.cardPrimary }}
      className="flex flex-col gap-6 rounded-3xl p-8 max-md:px-4 max-md:py-8"
    >
      <PrimaryText
        color={theme.primary}
        fontFamily={FONTS.LORA.REGULAR}
        className="text-[32px] leading-5"
      >
        At a glance
      </PrimaryText>
      <View className="grid grid-cols-2 gap-x-8 gap-y-5 max-sm:grid-cols-1">
        <View className="flex flex-col gap-4 max-sm:order-2">
          {summary.day_summaries.map((daySummary, index) => (
            <View
              key={`${daySummary.day_date}-${index}`}
              className="flex flex-col gap-2"
            >
              <PrimaryText
                color={`${theme.primary}80`}
                className="text-sm leading-6"
              >
                {formatDayAndDate(index + 1, new Date(daySummary.day_date))}
              </PrimaryText>
              <PrimaryText color={theme.primary} className="leading-6">
                {daySummary.day_summary}
              </PrimaryText>
            </View>
          ))}
        </View>
        <View className="mb-auto flex aspect-square w-full max-sm:order-1">
          <Image
            source={require('@/assets/images/sample-map.png')}
            className="!h-full !w-full rounded-2xl"
          />
        </View>
      </View>
    </View>
  );
}
