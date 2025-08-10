import React from 'react';
import { View } from 'react-native';

import PrimaryText from '@/components/global/PrimaryText';
import DailyPriceTable from '@/components/tables/daily-price-table';
import TotalPriceTable from '@/components/tables/TotalPriceTable';
import { FONTS } from '@/constants/fonts';
import { DAILY_SERVICE_PRICE_TABLE_DATA } from '@/constants/mock/prices';
import { SERVICE_PRICE_TABLE_HEADERS } from '@/constants/tables';
import { Branding } from '@/types/branding.type';

interface PricingTabProps {
  theme: Branding['theme'];
}

export default function PricingTab({ theme }: PricingTabProps) {
  return (
    <>
      <TotalPriceTable theme={theme} />
      {/* Daily Price Section */}
      <View className="mt-40">
        <View className="flex flex-row items-center px-6 max-lg:hidden">
          {SERVICE_PRICE_TABLE_HEADERS.map((header, index) => (
            <PrimaryText
              key={header}
              color={`${theme.primary}80`}
              fontFamily={FONTS.MANROPE.REGULAR}
              className={`p-2 text-sm ${index === 0 ? 'flex-1' : 'w-[12%] min-w-[132px] text-right'}`}
            >
              {header}
            </PrimaryText>
          ))}
        </View>
        <View className="mt-2 space-y-6">
          {DAILY_SERVICE_PRICE_TABLE_DATA.map((data) => (
            <DailyPriceTable key={data.day} data={data} theme={theme} />
          ))}
        </View>
      </View>
    </>
  );
}
