import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';

import { ArrowDownIcon } from '@/assets/icons';
import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';
import { EXTRA_OPTIONS_TABLE_HEADERS } from '@/constants/tables';
import { Branding } from '@/types/branding.type';
import { ServicePrice } from '@/types/service-price.type';

interface ServicePriceRowProps {
  theme: Branding['theme'];
  service: ServicePrice['services'][number];
  lastRow?: boolean;
}

export default function ServicePriceRow({
  theme,
  service,
  lastRow,
}: ServicePriceRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View>
      <View
        style={{
          borderColor: `${theme.primary}80`,
          backgroundColor: `${theme.cardPrimary}BF`,
        }}
        className={`flex flex-row items-center py-3 max-lg:flex-wrap max-lg:!bg-transparent lg:px-8 ${
          lastRow && 'rounded-b-2xl'
        } ${!lastRow && 'border-b'}`}
      >
        <View className="mr-auto flex flex-row items-center gap-2 max-lg:w-full lg:max-w-lg lg:flex-1">
          {service.extraOptions && (
            <Pressable
              className="h-6 w-6"
              onPress={() => setIsExpanded(!isExpanded)}
            >
              <ArrowDownIcon />
            </Pressable>
          )}
          <PrimaryText color={theme.primary} fontFamily={FONTS.MANROPE.REGULAR}>
            {service.title}
            {service.details && (
              <PrimaryText
                color={`${theme.primary}80`}
                fontFamily={FONTS.MANROPE.REGULAR}
              >
                {` - ${service.details}`}
              </PrimaryText>
            )}
          </PrimaryText>
        </View>
        <View className="w-[12%] min-w-[132px] max-lg:hidden">
          <View
            style={{ backgroundColor: theme.backgroundPrimary }}
            className="ml-auto flex h-7 flex-row items-center gap-1 rounded-full px-4"
          >
            <Image
              source={{ uri: service.category.icon }}
              className="h-4 w-4"
            />
            <PrimaryText color={theme.primary} className="text-sm leading-6">
              {service.category.label}
            </PrimaryText>
          </View>
        </View>
        <View className="mt-3 flex w-full flex-row items-center lg:hidden">
          <PrimaryText
            color={`${theme.primary}80`}
            fontFamily={FONTS.MANROPE.REGULAR}
            className="flex-1 text-xs leading-6 md:text-sm"
          >
            Price pp
          </PrimaryText>
          <PrimaryText
            color={`${theme.primary}80`}
            fontFamily={FONTS.MANROPE.REGULAR}
            className="flex-1 text-xs leading-6 md:text-sm"
          >
            Quantity
          </PrimaryText>
          <PrimaryText
            color={`${theme.primary}80`}
            fontFamily={FONTS.MANROPE.REGULAR}
            className="flex-1 text-xs leading-6 md:text-sm"
          >
            Total price
          </PrimaryText>
        </View>
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.MANROPE.REGULAR}
          className="max-lg:flex-1 max-sm:text-xs lg:w-[12%] lg:min-w-[132px] lg:text-right"
        >
          ${service.pricePerPerson} pp
        </PrimaryText>
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.MANROPE.REGULAR}
          className="max-lg:flex-1 max-sm:text-xs lg:w-[12%] lg:min-w-[132px] lg:text-right"
        >
          {service.totalPassengers} pax
        </PrimaryText>
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.MANROPE.REGULAR}
          className="max-lg:flex-1 max-sm:text-xs lg:w-[12%] lg:min-w-[132px] lg:text-right"
        >
          ${service.pricePerPerson * service.totalPassengers}
        </PrimaryText>
      </View>
      {isExpanded && (
        <View style={{ backgroundColor: `${theme.cardPrimary}80` }}>
          <View className="flex flex-row items-center pr-6 max-sm:hidden lg:pl-20">
            {EXTRA_OPTIONS_TABLE_HEADERS.map((header, index) => (
              <PrimaryText
                key={`${header}-${index}`}
                color={`${theme.primary}80`}
                fontFamily={FONTS.MANROPE.REGULAR}
                className={`p-2 text-xs leading-6 ${index === 0 ? 'flex-1' : 'w-[12%] min-w-[132px] text-right'}`}
              >
                {header}
              </PrimaryText>
            ))}
          </View>
          {service.extraOptions?.map((option, index) => (
            <View
              key={`${service.title}-extra-option-${option.label}-${index}`}
              style={{
                borderColor: `${theme.primary}4D`,
              }}
              className="flex flex-row items-center border-b py-2 pl-2 max-sm:flex-wrap sm:pr-8 lg:pl-[88px]"
            >
              <PrimaryText
                color={theme.primary}
                fontFamily={FONTS.MANROPE.REGULAR}
                className="text-sm leading-6 max-sm:w-full sm:flex-1"
              >
                {option.label}
              </PrimaryText>
              <PrimaryText
                color={theme.primary}
                fontFamily={FONTS.MANROPE.REGULAR}
                className="text-xs leading-6 max-sm:flex-1 sm:w-[12%] sm:min-w-[132px] sm:text-right sm:text-sm"
              >
                ${option.unitPrice}
              </PrimaryText>
              <PrimaryText
                color={theme.primary}
                fontFamily={FONTS.MANROPE.REGULAR}
                className="text-xs leading-6 max-sm:flex-1 sm:w-[12%] sm:min-w-[132px] sm:text-right sm:text-sm"
              >
                {option.quantity}x
              </PrimaryText>
              <PrimaryText
                color={theme.primary}
                fontFamily={FONTS.MANROPE.REGULAR}
                className="text-xs leading-6 max-sm:flex-1 sm:w-[12%] sm:min-w-[132px] sm:text-right sm:text-sm"
              >
                ${option.unitPrice * option.quantity}
              </PrimaryText>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
