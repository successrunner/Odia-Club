import React from 'react';
import { Pressable, View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import { Branding } from '@/types/branding.type';

import PrimaryText from './global/PrimaryText';

const ITINERARY_TABS = [
  { value: 'overview', label: 'Overview' },
  { value: 'itinerary', label: 'Daily itinerary' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'comments', label: 'Comments' },
];

interface TabSwitcherProps {
  theme: Branding['theme'];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabSwitcher({
  theme,
  activeTab,
  setActiveTab,
}: TabSwitcherProps) {
  return (
    <>
      <View className="min-w-[500px] rounded-full max-sm:hidden">
        <SwitchSelector
          options={ITINERARY_TABS}
          initial={0}
          height={32}
          textColor={theme.primary}
          textStyle={{
            fontFamily: 'Manrope_500Medium',
            fontSize: 14,
          }}
          buttonColor={theme.primary}
          selectedTextStyle={{
            color: theme.secondary,
            fontFamily: 'Manrope_500Medium',
            fontSize: 14,
          }}
          backgroundColor={theme.cardPrimary}
          onPress={(value: string) => setActiveTab(value)}
        />
      </View>
      <View className="no-scrollbar flex flex-row gap-2 max-sm:w-full max-sm:overflow-x-scroll sm:hidden">
        {ITINERARY_TABS.map((tab) => (
          <Pressable
            key={tab.value}
            style={{
              backgroundColor:
                activeTab === tab.value
                  ? theme.cardPrimary
                  : theme.backgroundPrimary,
            }}
            className="rounded-full px-4 py-1.5"
            onPress={() => setActiveTab(tab.value)}
          >
            <PrimaryText
              color={
                activeTab === tab.value ? theme.primary : `${theme.primary}80`
              }
              className="text-sm leading-5"
            >
              {tab.label}
            </PrimaryText>
          </Pressable>
        ))}
      </View>
    </>
  );
}
