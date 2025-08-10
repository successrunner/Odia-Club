import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { FONTS } from '@/constants/fonts';
import { Branding } from '@/types/branding.type';
import { Service } from '@/types/service.type';

import { DraggableScrollView } from './DraggableScrollView';
import Button from './global/Button';
import PrimaryText from './global/PrimaryText';
import ServiceCard from './ServiceCard';

interface GroupedServiceCardProps {
  theme: Branding['theme'];
  services: Service[];
}

export default function GroupedServiceCard({
  theme,
  services,
}: GroupedServiceCardProps) {
  const [showMore, setShowMore] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  return (
    <View
      style={{ backgroundColor: theme.cardPrimary }}
      className="rounded-3xl p-5"
    >
      <View className="flex flex-row items-center justify-between">
        <View
          style={{ backgroundColor: theme.backgroundPrimary }}
          className="mr-auto flex h-7 flex-row items-center gap-1 rounded-full px-4"
        >
          <Image
            source={{ uri: services[0].service.category.icon_url }}
            className="h-4 w-4"
          />
          <PrimaryText color={theme.primary} className="text-sm leading-6">
            {services[0].service.category.name}
          </PrimaryText>
        </View>
        <Button
          size="extra-small"
          rightIcon={
            <FontAwesome
              size={10}
              name="chevron-right"
              color={theme.secondary}
            />
          }
          textColor={theme.secondary}
          backgroundColor={theme.primary}
          onPress={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </Button>
      </View>
      {!showMore && (
        <View
          className="mt-4"
          onLayout={(event) => {
            setCardWidth(event.nativeEvent.layout.width);
          }}
        >
          {cardWidth > 0 && (
            <DraggableScrollView className="no-scrollbar flex flex-row gap-4 overflow-auto">
              {services.map((item) => (
                <View
                  key={item.id}
                  style={{
                    width:
                      cardWidth > 640 ? (cardWidth - 32) / 3 : cardWidth - 32,
                    borderColor: `${theme.primary}40`,
                  }}
                  className="flex flex-col justify-between rounded-3xl border p-5"
                >
                  <View>
                    <Image
                      source={{ uri: item.service.images![0] }}
                      className="aspect-square w-full rounded-lg"
                    />
                    <View className="mt-6">
                      <PrimaryText
                        color={theme.primary}
                        fontFamily={FONTS.LORA.REGULAR}
                        className="truncate text-2xl"
                      >
                        {item.service.title}
                      </PrimaryText>
                      <PrimaryText
                        color={`${theme.primary}80`}
                        fontFamily={FONTS.MANROPE.REGULAR}
                        className="truncate text-sm"
                      >
                        {item.service.headline}
                      </PrimaryText>
                      <PrimaryText
                        color={`${theme.primary}BF`}
                        fontFamily={FONTS.MANROPE.BOLD}
                        className="truncate text-sm"
                      >
                        {item.additional_info}
                      </PrimaryText>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: `${theme.backgroundPrimary}80`,
                    }}
                    className="mt-4 flex h-10 flex-row items-center justify-between rounded-lg border border-muted px-4"
                  >
                    <PrimaryText
                      color={theme.primary}
                      fontFamily={FONTS.MANROPE.BOLD}
                      className="leading-5"
                    >
                      Total
                    </PrimaryText>
                    <PrimaryText
                      color={theme.primary}
                      fontFamily={FONTS.MANROPE.BOLD}
                      className="leading-5"
                    >
                      ${item.price}
                    </PrimaryText>
                  </View>
                </View>
              ))}
            </DraggableScrollView>
          )}
        </View>
      )}
      {showMore && (
        <View className="mt-4 flex flex-col gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              theme={theme}
              service={service}
              asDetailedCard
            />
          ))}
        </View>
      )}
    </View>
  );
}
