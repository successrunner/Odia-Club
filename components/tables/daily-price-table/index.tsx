import { View } from 'react-native';

import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';
import { Branding } from '@/types/branding.type';
import { ServicePrice } from '@/types/service-price.type';
import { formatDayAndDate } from '@/utils/date';

import ServicePriceRow from './ServicePriceRow';

interface DailyPriceTableProps {
  data: ServicePrice;
  theme: Branding['theme'];
}

export default function DailyPriceTable({ data, theme }: DailyPriceTableProps) {
  return (
    <View
      style={{ backgroundColor: `${theme.cardPrimary}80` }}
      className="rounded-2xl max-lg:px-3 max-lg:pb-3 lg:!bg-transparent"
    >
      {/* Summary Row */}
      <View
        style={{
          borderColor: `${theme.primary}80`,
          backgroundColor: theme.cardPrimary,
        }}
        className="flex flex-row items-center justify-between border-b px-4 py-2 max-lg:!bg-transparent lg:rounded-t-2xl lg:px-8 lg:py-5"
      >
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.MANROPE.BOLD}
          className="max-md:flex-1 max-md:text-sm"
        >
          {formatDayAndDate(data.day, data.date, true)}
        </PrimaryText>
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.MANROPE.BOLD}
          className="text-right max-md:text-sm lg:w-[12%] lg:min-w-[132px]"
        >
          Total: $
          {data.services.reduce(
            (acc, curr) => acc + curr.pricePerPerson * curr.totalPassengers,
            0
          )}
        </PrimaryText>
      </View>

      {/* Detail Row */}
      {data.services.map((service, index) => (
        <ServicePriceRow
          key={`price-by-service-${index}`}
          theme={theme}
          service={service}
          lastRow={index === data.services.length - 1}
        />
      ))}
    </View>
  );
}
