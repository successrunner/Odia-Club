import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import {
  Image,
  LayoutChangeEvent,
  Linking,
  Modal,
  Pressable,
  View,
} from 'react-native';
import HTMLView from 'react-native-htmlview';

import { FONTS } from '@/constants/fonts';
import { useItineraryStore } from '@/stores/useItineraryStore';
import { Branding } from '@/types/branding.type';
import { Service } from '@/types/service.type';
import { formatTime } from '@/utils/date';

import { DraggableScrollView } from './DraggableScrollView';
import Button from './global/Button';
import PrimaryText from './global/PrimaryText';
import ServiceInfoItem from './ServiceInfoItem';

interface ServiceCardProps {
  theme: Branding['theme'];
  service: Service;
  isFirstCard?: boolean;
  asDetailedCard?: boolean;
}

export default function ServiceCard({
  theme,
  service,
  isFirstCard = false,
  asDetailedCard = false,
}: ServiceCardProps) {
  const { itinerary } = useItineraryStore();

  const [showMore, setShowMore] = useState(false);
  const [imageWidth, setImageWidth] = useState(0);
  const [hideContent, setHideContent] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);

  const onImageLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setImageWidth(width);
  };

  const onDescriptionLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;

    if (height > width * 0.8) {
      setShowMore(true);
      setHideContent(true);
    } else {
      setShowMore(false);
      setHideContent(false);
    }
  };

  return (
    <View
      key={service.id}
      style={{
        borderColor: `${theme.primary}40`,
        backgroundColor: theme.cardPrimary,
      }}
      className={`relative grid grid-cols-1 gap-x-6 gap-y-4 rounded-3xl p-5 md:grid-cols-3 ${
        asDetailedCard && 'border'
      } `}
    >
      {!isFirstCard && !asDetailedCard && (
        <View
          style={{ borderColor: `${theme.primary}80` }}
          className="absolute -top-12 left-6 h-10 w-[1px] border-l border-dashed"
        />
      )}
      {itinerary?.services
        .filter((linkedService) => linkedService.linked_id === service.id)
        .map((linkedService) => (
          <View
            style={{ borderColor: `${theme.primary}40` }}
            className="col-span-1 border-b border-dashed md:col-span-3"
          >
            <View
              style={{ backgroundColor: theme.backgroundPrimary }}
              className="mr-auto flex h-7 flex-row items-center gap-1 rounded-full px-4"
            >
              <Image
                source={{ uri: linkedService.service.category.icon_url }}
                className="h-4 w-4"
              />
              <PrimaryText color={theme.primary} className="text-sm leading-6">
                {linkedService.service.category.name}
              </PrimaryText>
            </View>
            <PrimaryText
              color={theme.primary}
              fontFamily={FONTS.LORA.REGULAR}
              className={`${!asDetailedCard && 'mt-4'} text-2xl`}
            >
              {linkedService.service.title}
            </PrimaryText>
            <PrimaryText
              color={`${theme.primary}80`}
              fontFamily={FONTS.MANROPE.REGULAR}
              className="mt-2 text-sm"
            >
              {linkedService.service.headline}
            </PrimaryText>
            <PrimaryText
              color={`${theme.primary}BF`}
              fontFamily={FONTS.MANROPE.BOLD}
              className="mt-2 text-sm"
            >
              {linkedService.additional_info}
            </PrimaryText>
          </View>
        ))}
      <View
        className={`max-md:order-2 ${
          service.service.images ? 'md:col-span-2' : 'md:col-span-3'
        }`}
      >
        {!asDetailedCard && (
          <View
            style={{ backgroundColor: theme.backgroundPrimary }}
            className="mr-auto flex h-7 flex-row items-center gap-1 rounded-full px-4"
          >
            <Image
              source={{ uri: service.service.category.icon_url }}
              className="h-4 w-4"
            />
            <PrimaryText color={theme.primary} className="text-sm leading-6">
              {service.service.category.name}
            </PrimaryText>
          </View>
        )}
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.LORA.REGULAR}
          className={`${!asDetailedCard && 'mt-4'} text-2xl`}
        >
          {service.service.title}
        </PrimaryText>
        <PrimaryText
          color={`${theme.primary}80`}
          fontFamily={FONTS.MANROPE.REGULAR}
          className="mt-2 text-sm"
        >
          {service.service.headline}
        </PrimaryText>
        <PrimaryText
          color={`${theme.primary}BF`}
          fontFamily={FONTS.MANROPE.BOLD}
          className="mt-2 text-sm"
        >
          {service.additional_info}
        </PrimaryText>
        {service.attachments && service.attachments.length > 0 && (
          <slot>
            <Button
              size="extra-small"
              variant="muted"
              textColor={theme.secondary}
              backgroundColor={theme.primary}
              className="mr-auto mt-4"
              onPress={() => {
                setShowDownloadDialog(true);
              }}
            >
              Download your documents
            </Button>
            <Modal
              visible={showDownloadDialog}
              transparent
              animationType="fade"
              onRequestClose={() => setShowDownloadDialog(false)}
            >
              <View className="relative flex-1 items-center justify-center bg-black/50">
                <Pressable
                  onPress={() => setShowDownloadDialog(false)}
                  className="absolute bottom-0 left-0 right-0 top-0"
                />
                <View className="mx-auto max-w-2xl rounded-3xl bg-white p-5">
                  <PrimaryText color={theme.primary} className="text-xl">
                    Download your documents
                  </PrimaryText>
                  <PrimaryText
                    color={`${theme.primary}80`}
                    className="my-2 text-sm"
                  >
                    Please select the documents you want to download.
                  </PrimaryText>
                  {service.attachments.map((attachment) => (
                    <View
                      key={attachment.id}
                      className="flex flex-row items-center justify-between"
                    >
                      <PrimaryText color={theme.primary}>
                        {attachment.name}
                      </PrimaryText>
                      <Pressable
                        onPress={() => {
                          Linking.openURL(attachment.url);
                        }}
                      >
                        <FontAwesome
                          name="download"
                          size={20}
                          color={theme.primary}
                        />
                      </Pressable>
                    </View>
                  ))}
                </View>
              </View>
            </Modal>
          </slot>
        )}
        <View
          style={{ aspectRatio: hideContent ? 1.25 : 'auto' }}
          className={`relative mt-4 ${hideContent && 'overflow-hidden'}`}
        >
          <View onLayout={onDescriptionLayout}>
            <HTMLView
              value={service.edited_description}
              stylesheet={{
                p: {
                  color: theme.primary,
                  fontFamily: FONTS.MANROPE.MEDIUM,
                },
              }}
            />
          </View>
          {hideContent && (
            <View
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, ${theme.cardPrimary})`,
              }}
              className="absolute bottom-0 h-20 w-full"
            />
          )}
        </View>
        {showMore && (
          <Pressable
            className="mt-2"
            onPress={() => setHideContent(!hideContent)}
          >
            <PrimaryText
              color={`${theme.primary}80`}
              className="text-sm underline"
            >
              {hideContent ? 'Show More' : 'Show Less'}
            </PrimaryText>
          </Pressable>
        )}
        {(service.start_time || service.end_time || service.address) && (
          <View className="mt-auto flex flex-row items-start gap-6 pt-4">
            <ServiceInfoItem
              theme={theme}
              label="Start time"
              value={formatTime(service.start_time)}
            />
            <ServiceInfoItem
              theme={theme}
              label="End time"
              value={formatTime(service.end_time)}
            />
            <ServiceInfoItem
              theme={theme}
              label="Meeting point"
              value={service.address}
              className="flex-1"
            />
          </View>
        )}
        {(service.contact_name || service.contact_phone_number) && (
          <View className="mb-0 mt-2 flex flex-row items-start gap-6 pt-4">
            <ServiceInfoItem
              theme={theme}
              label="Contact"
              value={service.contact_name}
            />
            <ServiceInfoItem
              theme={theme}
              label="Phone"
              value={service.contact_phone_number}
            />
          </View>
        )}
      </View>
      {service.service.images && (
        <View className="max-md:order-1" onLayout={onImageLayout}>
          <Image
            source={{ uri: service.service.images[selectedImage] }}
            className="aspect-square w-full rounded-xl"
          />
          {imageWidth > 0 && (
            <DraggableScrollView className="no-scrollbar mt-3 flex flex-row gap-2 overflow-auto">
              {service.service.images.map((image, index) => (
                <Pressable
                  key={image}
                  style={{
                    width: (imageWidth - 16) / 3,
                    borderWidth: index === selectedImage ? 2 : 0,
                    borderColor: theme.primary,
                  }}
                  className="aspect-square h-auto w-full overflow-hidden rounded-xl"
                  onPress={() => setSelectedImage(index)}
                >
                  <Image source={{ uri: image }} className="h-full w-full" />
                </Pressable>
              ))}
            </DraggableScrollView>
          )}
        </View>
      )}
      <View
        style={{
          backgroundColor: `${theme.backgroundPrimary}80`,
        }}
        className="flex h-10 flex-row items-center justify-between rounded-lg border border-muted px-4 max-md:order-3 md:col-span-3"
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
          ${service.price}
        </PrimaryText>
      </View>
    </View>
  );
}
