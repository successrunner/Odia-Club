import { Dimensions, Image, ImageBackground, View } from 'react-native';

import { CalendarIcon, UsersIcon } from '@/assets/icons';
import Button from '@/components/global/Button';
import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';
import { ItinerarySummary, ProposalSummary } from '@/types/summary.type';
import { formatDateRange } from '@/utils/date';

interface HeroSectionProps {
  summary: ItinerarySummary | ProposalSummary;
  organizationLogoUrl: string | null;
}

export default function HeroSection({
  summary,
  organizationLogoUrl,
}: HeroSectionProps) {
  const screenHeight = Dimensions.get('window').height;

  return (
    <ImageBackground
      source={{ uri: summary.cover_image_url }}
      style={{
        width: '100%',
        height: screenHeight,
      }}
      resizeMode="cover"
    >
      <View
        style={{
          backgroundColor: 'rgba(14, 7, 61, 0.12)',
        }}
        className="absolute inset-0 h-full w-full"
      />
      <View className="flex flex-1 p-4 sm:px-14 sm:py-10">
        {/* Content positioned at the bottom of the hero */}
        <View className="mt-auto flex">
          <PrimaryText
            color="white"
            fontFamily={FONTS.LORA.REGULAR}
            className="max-w-4xl text-[52px] leading-none md:text-[88px] md:leading-[100px]"
          >
            {summary.title}
          </PrimaryText>
          <View className="mt-4 flex flex-col gap-4 sm:mt-6 sm:flex-row">
            <Button
              size="small"
              variant="secondary"
              disabled
              leftIcon={
                <CalendarIcon className="h-[14px] w-[14px] sm:h-5 sm:w-5" />
              }
              className="w-fit"
              onPress={() => {}}
            >
              {formatDateRange(
                new Date(summary.from_date),
                new Date(summary.to_date)
              )}
            </Button>
            <Button
              size="small"
              variant="secondary"
              disabled
              leftIcon={
                <UsersIcon className="h-[14px] w-[14px] sm:h-5 sm:w-5" />
              }
              className="w-fit"
              onPress={() => {}}
            >
              {summary.guest_count} People
            </Button>
          </View>
          <View className="mt-12 flex flex-col max-sm:gap-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <View className="flex flex-row items-center gap-3">
              {organizationLogoUrl && (
                <View className="rounded-xl px-2 py-1 backdrop-blur sm:px-3 sm:py-2">
                  <Image
                    source={{ uri: organizationLogoUrl }}
                    className="h-10 w-10 rounded-sm sm:h-12 sm:w-12"
                  />
                </View>
              )}
              {summary.travel_agent && (
                <View className="flex flex-row items-center gap-2 rounded-xl px-2 py-1 backdrop-blur max-sm:w-fit sm:px-3 sm:py-2">
                  <Image
                    source={{ uri: summary.travel_agent.logo_image_url }}
                    className="h-10 w-10 rounded-sm sm:h-12 sm:w-12"
                  />
                  <View className="flex flex-col">
                    <PrimaryText
                      color="white"
                      fontFamily={FONTS.MANROPE.SEMIBOLD}
                      className="leading-5 max-sm:text-xs"
                    >
                      In partnership with:
                    </PrimaryText>
                    <PrimaryText
                      color="white"
                      fontFamily={FONTS.MANROPE.SEMIBOLD}
                      className="text-sm leading-6 sm:text-xl"
                    >
                      {[
                        summary.travel_agent.first_name,
                        summary.travel_agent.last_name,
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      {summary.travel_agent.agency &&
                        ` - ${summary.travel_agent.agency}`}
                    </PrimaryText>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
