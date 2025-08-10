import { Image, View } from 'react-native';

import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';
import { TOTAL_PRICE_TABLE_DATA } from '@/constants/mock/prices';
import { TOTAL_PRICE_TABLE_HEADERS } from '@/constants/tables';
import { Branding } from '@/types/branding.type';

interface TotalPriceTableProps {
  theme: Branding['theme'];
}

export default function TotalPriceTable({ theme }: TotalPriceTableProps) {
  return (
    <View>
      {/* Main Header */}
      <View className="flex flex-row items-center px-6">
        {TOTAL_PRICE_TABLE_HEADERS.map((header, index) => (
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

      {/* Summary Row */}
      <View
        style={{
          borderColor: `${theme.primary}80`,
          backgroundColor: theme.cardPrimary,
        }}
        className="mt-2 flex flex-row items-center rounded-t-2xl border-b px-8 py-5"
      >
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.MANROPE.BOLD}
          className="flex-1"
        >
          {TOTAL_PRICE_TABLE_DATA.days} Days
        </PrimaryText>
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.MANROPE.BOLD}
          className="w-[12%] min-w-[132px] text-right"
        >
          Total: $
          {TOTAL_PRICE_TABLE_DATA.categories.reduce(
            (acc, curr) => acc + curr.price,
            0
          )}
        </PrimaryText>
      </View>

      {/* Detail Row */}
      {TOTAL_PRICE_TABLE_DATA.categories.map((category, index) => (
        <View
          key={`price-by-category-${index}`}
          style={{
            borderColor: `${theme.primary}80`,
            backgroundColor: `${theme.cardPrimary}BF`,
          }}
          className={`flex flex-row items-center border-b px-8 py-3 ${
            index === TOTAL_PRICE_TABLE_DATA.categories.length - 1 &&
            'rounded-b-2xl'
          }`}
        >
          <PrimaryText
            color={theme.primary}
            fontFamily={FONTS.MANROPE.REGULAR}
            className="flex-1"
          >
            {category.count}x
          </PrimaryText>
          <View className="w-[12%] min-w-[132px]">
            <View
              style={{ backgroundColor: theme.backgroundPrimary }}
              className="ml-auto flex h-7 flex-row items-center gap-1 rounded-full px-4"
            >
              <Image source={{ uri: category.icon }} className="h-4 w-4" />
              <PrimaryText color={theme.primary} className="text-sm leading-6">
                {category.label}
              </PrimaryText>
            </View>
          </View>
          <PrimaryText
            color={theme.primary}
            fontFamily={FONTS.MANROPE.REGULAR}
            className="w-[12%] min-w-[132px] text-right"
          >
            ${category.price}
          </PrimaryText>
        </View>
      ))}
    </View>
  );
}
