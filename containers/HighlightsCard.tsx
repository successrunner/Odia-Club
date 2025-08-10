import { View } from 'react-native';

import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';
import { Branding } from '@/types/branding.type';
import { ItinerarySummary, ProposalSummary } from '@/types/summary.type';
import { calculateNightCount, formatDateRange } from '@/utils/date';

interface HighlightsCardProps {
  theme: Branding['theme'];
  summary: ItinerarySummary | ProposalSummary;
}

export default function HighlightsCard({
  theme,
  summary,
}: HighlightsCardProps) {
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
        Highlights
      </PrimaryText>
      <View className="flex flex-row items-start max-md:flex-col">
        <View
          style={{ borderColor: `${theme.primary}80` }}
          className="flex flex-col gap-1 max-md:w-full max-md:border-b max-md:pb-4 md:border-r md:pr-7"
        >
          <PrimaryText
            color={`${theme.primary}80`}
            fontFamily={FONTS.MANROPE.BOLD}
            className="leading-6"
          >
            Duration
          </PrimaryText>
          <PrimaryText color={theme.primary} className="leading-6">
            {calculateNightCount(
              new Date(summary.from_date),
              new Date(summary.to_date)
            )}{' '}
            nights
          </PrimaryText>
        </View>
        <View
          style={{ borderColor: `${theme.primary}80` }}
          className="flex flex-col gap-1 max-md:w-full max-md:border-b max-md:py-4 md:border-r md:px-7"
        >
          <PrimaryText
            color={`${theme.primary}80`}
            fontFamily={FONTS.MANROPE.BOLD}
            className="leading-6"
          >
            Dates
          </PrimaryText>
          <PrimaryText color={theme.primary} className="leading-6">
            {formatDateRange(
              new Date(summary.from_date),
              new Date(summary.to_date)
            )}
          </PrimaryText>
        </View>
        <View
          style={{ borderColor: `${theme.primary}80` }}
          className="flex flex-col gap-1 max-md:w-full max-md:border-b max-md:py-4 md:border-r md:px-7"
        >
          <PrimaryText
            color={`${theme.primary}80`}
            fontFamily={FONTS.MANROPE.BOLD}
            className="leading-6"
          >
            Price
          </PrimaryText>
          <PrimaryText color={theme.primary} className="leading-6">
            {summary.price_per_person
              ? `$${summary.price_per_person} per person`
              : 'N/A'}
          </PrimaryText>
        </View>
        <View className="flex flex-1 flex-col gap-1 max-md:pt-4 md:pl-7">
          <PrimaryText
            color={`${theme.primary}80`}
            fontFamily={FONTS.MANROPE.BOLD}
            className="leading-6"
          >
            Travellers
          </PrimaryText>
          <PrimaryText color={theme.primary} className="leading-6">
            {summary.travellers ? summary.travellers?.join(', ') : 'N/A'}
          </PrimaryText>
        </View>
      </View>
      <View>
        <PrimaryText
          color={`${theme.primary}80`}
          fontFamily={FONTS.MANROPE.BOLD}
          className="leading-6"
        >
          Description
        </PrimaryText>
        <PrimaryText color={theme.primary} className="leading-6">
          {summary.overall_summary}
        </PrimaryText>
      </View>
    </View>
  );
}
