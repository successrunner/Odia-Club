import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import DayIndicator from '@/components/DayIndicator';
import Button from '@/components/global/Button';
import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';
import { DAILY_SERVICE_COMMENTS } from '@/constants/mock/comments';
import { Branding } from '@/types/branding.type';
import { formatDayAndDate, formatTimeAndDate } from '@/utils/date';

interface CommentsTabProps {
  theme: Branding['theme'];
}

export default function CommentsTab({ theme }: CommentsTabProps) {
  const [activeDay, setActiveDay] = useState<string>(
    DAILY_SERVICE_COMMENTS[0].day.toString()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dayId = entry.target.id;
            setActiveDay(dayId);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    DAILY_SERVICE_COMMENTS.forEach((dailyServiceComments) => {
      const element = document.getElementById(
        dailyServiceComments.day.toString()
      );
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <View className="flex flex-row justify-center gap-6">
      <View className="max-w-56 flex-1 max-md:hidden">
        <View className="sticky top-4 space-y-4">
          {DAILY_SERVICE_COMMENTS.map((dailyServiceComments, index) => (
            <DayIndicator
              id={dailyServiceComments.day.toString()}
              key={dailyServiceComments.day}
              day={index + 1}
              date={dailyServiceComments.date}
              theme={theme}
              isActive={activeDay === dailyServiceComments.day.toString()}
            />
          ))}
        </View>
      </View>
      <View className="flex max-w-5xl flex-1 flex-col gap-24">
        {DAILY_SERVICE_COMMENTS.map((dailyServiceComments) => (
          <View
            id={dailyServiceComments.day.toString()}
            key={dailyServiceComments.day}
            style={{ backgroundColor: theme.cardPrimary }}
            className="rounded-2xl"
          >
            <View className="flex flex-row items-center justify-between p-5">
              <PrimaryText
                color={theme.primary}
                fontFamily={FONTS.MANROPE.SEMIBOLD}
                className="text-lg leading-6"
              >
                {formatDayAndDate(
                  dailyServiceComments.day,
                  dailyServiceComments.date,
                  true
                )}
              </PrimaryText>
              <PrimaryText
                color={`${theme.primary}80`}
                className="text-sm leading-5"
              >
                {`${dailyServiceComments.services.reduce(
                  (acc, curr) => acc + curr.comments.length,
                  0
                )} comments`}
              </PrimaryText>
            </View>
            <View className="mb-1 space-y-10 p-4">
              {dailyServiceComments.services.map((service, index) => (
                <View
                  key={`service-comments-${service.title}-${index}`}
                  className="space-y-6"
                >
                  <View className="space-y-3">
                    <View
                      style={{
                        backgroundColor: theme.backgroundPrimary,
                      }}
                      className="mr-auto flex h-7 flex-row items-center gap-1 rounded-full px-4"
                    >
                      <Image
                        source={{ uri: service.category.icon }}
                        className="h-4 w-4"
                      />
                      <PrimaryText
                        color={theme.primary}
                        className="text-sm leading-6"
                      >
                        {service.category.label}
                      </PrimaryText>
                    </View>
                    <PrimaryText
                      color={theme.primary}
                      fontFamily={FONTS.LORA.REGULAR}
                      className="text-2xl"
                    >
                      {service.title}
                    </PrimaryText>
                  </View>
                  {service.comments.map((comment, index) => (
                    <View
                      key={`comment-${comment.writer.fullName}-${index}`}
                      className="space-y-3"
                    >
                      <View className="flex flex-row items-center gap-3">
                        <Image
                          source={{ uri: comment.writer.avatar }}
                          className="h-8 w-8 rounded-full"
                        />
                        <View>
                          <PrimaryText
                            color={theme.primary}
                            fontFamily={FONTS.MANROPE.SEMIBOLD}
                            className="text-sm"
                          >
                            {comment.writer.fullName}
                          </PrimaryText>
                          <PrimaryText
                            color={`${theme.primary}80`}
                            fontFamily={FONTS.MANROPE.REGULAR}
                            className="text-xs"
                          >
                            {formatTimeAndDate(comment.createdAt)}
                          </PrimaryText>
                        </View>
                      </View>
                      <PrimaryText color={theme.primary} className="text-sm">
                        {comment.comment}
                      </PrimaryText>
                    </View>
                  ))}
                  <Button
                    size="extra-small"
                    variant="muted"
                    textColor={theme.secondary}
                    backgroundColor={theme.primary}
                    className="ml-auto mt-4"
                    onPress={() => {}}
                  >
                    Comment
                  </Button>
                  {index !== dailyServiceComments.services.length - 1 && (
                    <View className="flex flex-row justify-between">
                      <View
                        style={{ backgroundColor: theme.backgroundPrimary }}
                        className="-ml-9 h-10 w-10 rounded-full"
                      ></View>
                      <View
                        style={{ backgroundColor: theme.backgroundPrimary }}
                        className="-mr-9 h-10 w-10 rounded-full"
                      ></View>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
      <View className="max-w-56 flex-1 max-[1200px]:hidden"></View>
    </View>
  );
}
