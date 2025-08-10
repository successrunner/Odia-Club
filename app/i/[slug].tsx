import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Linking, ScrollView, View } from 'react-native';
import { Toast } from 'toastify-react-native';

import Button from '@/components/global/Button';
import PrimaryText from '@/components/global/PrimaryText';
import TabSwitcher from '@/components/TabSwitcher';
import TermsAndConditions from '@/components/TermsAndConditions';
import { FONTS } from '@/constants/fonts';
import CommentsTab from '@/containers/CommentsTab';
import HeroSection from '@/containers/HeroSection';
import HighlightsCard from '@/containers/HighlightsCard';
import ItineraryTab from '@/containers/ItineraryTab';
import OverviewCard from '@/containers/OverviewCard';
import PricingTab from '@/containers/PricingTab';
import { useGetBranding } from '@/hooks/useGetBranding';
import { useGetItinerarySummary } from '@/hooks/useGetItinerarySummary';

export default function ItineraryPage() {
  const { slug } = useLocalSearchParams();
  const shareCode = slug.toString().split('/')[0];

  const {
    mutate: getBranding,
    isError: isGetBrandingError,
    isLoading: isGettingBranding,
    result: branding,
  } = useGetBranding();

  const {
    mutate: getSummary,
    isError: isGetSummaryError,
    isLoading: isGettingSummary,
    result: summary,
  } = useGetItinerarySummary();

  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (isGetBrandingError || isGetSummaryError) {
      Toast.error('Something went wrong while fetching the data');
    }
  }, [isGetBrandingError, isGetSummaryError]);

  useEffect(() => {
    getSummary(shareCode);
    getBranding(shareCode);
  }, [shareCode, getBranding, getSummary]);

  return isGettingBranding || isGettingSummary || !summary || !branding ? (
    <View className="flex-1 items-center justify-center">
      {(isGettingBranding || isGettingSummary) && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      {(isGetBrandingError || isGetSummaryError) && (
        <PrimaryText>Something went wrong while fetching the data</PrimaryText>
      )}
    </View>
  ) : (
    <ScrollView style={{ flex: 1 }}>
      {summary && (
        <HeroSection
          summary={summary}
          organizationLogoUrl={branding.organization_logo_url}
        />
      )}
      <View
        style={{ backgroundColor: branding.theme.backgroundPrimary }}
        className="flex flex-col items-center p-10 max-sm:px-4 max-sm:py-5"
      >
        <TabSwitcher
          theme={branding.theme}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === 'overview' && (
          <View className="mt-10 w-full max-w-5xl space-y-6 max-sm:mt-5">
            <HighlightsCard theme={branding.theme} summary={summary} />
            <OverviewCard theme={branding.theme} summary={summary} />
            {branding.terms_conditions && (
              <TermsAndConditions
                theme={branding.theme}
                content={branding.terms_conditions}
              />
            )}
          </View>
        )}
        {activeTab === 'itinerary' && (
          <View className="mt-10 w-full max-sm:mt-5">
            <ItineraryTab theme={branding.theme} summary={summary} />
          </View>
        )}
        {activeTab === 'pricing' && (
          <View className="mt-10 w-full max-w-5xl max-sm:mt-5">
            <PricingTab theme={branding.theme} />
          </View>
        )}
        {activeTab === 'comments' && (
          <View className="mt-10 w-full max-sm:mt-5">
            <CommentsTab theme={branding.theme} />
          </View>
        )}

        <View className="mt-20 flex flex-col items-center gap-5 py-6">
          <Button
            className="w-auto"
            onPress={() => {
              Linking.openURL(`mailto:${branding.contact_email}`);
            }}
          >
            Contact us
          </Button>
          <View className="space-y-3">
            <PrimaryText
              color={branding.theme.primary}
              fontFamily={FONTS.MANROPE.SEMIBOLD}
              className="text-center leading-5"
            >
              {branding.telephone_1} | Support 24/7 {branding.telephone_2} |{' '}
              {branding.contact_email} | {branding.website}
            </PrimaryText>
            <PrimaryText
              color={branding.theme.primary}
              fontFamily={FONTS.MANROPE.BOLD}
              className="text-center leading-5"
            >
              {branding.organization_name}
            </PrimaryText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
