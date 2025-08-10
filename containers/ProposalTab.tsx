import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import DayIndicator from '@/components/DayIndicator';
import PrimaryText from '@/components/global/PrimaryText';
import GroupedServiceCard from '@/components/GroupedServiceCard';
import ServiceCard from '@/components/ServiceCard';
import { FONTS } from '@/constants/fonts';
import { useGetProposalDetails } from '@/hooks/useGetProposalDetails';
import { useProposalStore } from '@/stores/useProposalStore';
import { Branding } from '@/types/branding.type';
import { ProposalSummary } from '@/types/summary.type';
import {
  createDayIndicators,
  formatDayAndDate,
  isEqualDate,
} from '@/utils/date';

interface ProposalTabProps {
  theme: Branding['theme'];
  summary: ProposalSummary;
}

export default function ProposalTab({ theme, summary }: ProposalTabProps) {
  const dayIndicators = createDayIndicators(
    new Date(summary.from_date),
    new Date(summary.to_date)
  );
  const [activeDay, setActiveDay] = useState<string>(dayIndicators[0].id);

  const {
    mutate: getProposalDetails,
    isLoading: isGettingProposal,
    isError: isGetProposalError,
    result: fetchedProposal,
  } = useGetProposalDetails();

  const { proposal, setProposal } = useProposalStore();

  useEffect(() => {
    if (!proposal) return;

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
        threshold: [0.75, 1],
      }
    );

    dayIndicators.forEach((dayIndicator) => {
      const element = document.getElementById(dayIndicator.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [proposal, dayIndicators]);

  useEffect(() => {
    if (!fetchedProposal) return;

    setProposal(fetchedProposal);
  }, [fetchedProposal, setProposal]);

  useEffect(() => {
    if (proposal) return;

    getProposalDetails(summary.id);
  }, [proposal, summary.id, getProposalDetails]);

  if (isGettingProposal || !proposal) {
    return (
      <View className="mt-10 flex-1 items-center justify-center py-24">
        {isGettingProposal && (
          <ActivityIndicator size="small" color={theme.secondary} />
        )}
        {isGetProposalError && (
          <PrimaryText color={theme.primary}>
            Something went wrong while fetching the data
          </PrimaryText>
        )}
      </View>
    );
  }

  const getServicesByDate = (date: Date) => {
    return proposal?.services.filter((service) =>
      isEqualDate(new Date(service.start_date), date)
    );
  };

  const getGroupedServices = (date: Date) => {
    return getServicesByDate(date)?.filter((service) => service.grouped);
  };

  return (
    <View className="flex justify-center gap-6 max-[950px]:flex-wrap min-[950px]:flex-row">
      <View className="max-[950px]:w-full min-[950px]:max-w-56 min-[950px]:flex-1">
        <View className="max-[950px]:no-scrollbar sticky top-4 max-[950px]:flex max-[950px]:flex-row max-[950px]:gap-4 max-[950px]:overflow-auto min-[950px]:space-y-4">
          {dayIndicators.map(
            (dayIndicator) =>
              getServicesByDate(dayIndicator.date).length > 0 && (
                <DayIndicator
                  id={dayIndicator.id}
                  key={dayIndicator.id}
                  day={dayIndicator.day}
                  date={dayIndicator.date}
                  theme={theme}
                  isActive={activeDay === dayIndicator.id}
                />
              )
          )}
        </View>
      </View>
      <View className="flex w-full max-w-5xl flex-col gap-24">
        {dayIndicators.map((dayIndicator) => {
          const dateServices = getServicesByDate(dayIndicator.date);
          const groupedServices = getGroupedServices(dayIndicator.date);

          if (dateServices.length === 0) {
            return null;
          }

          return (
            <View id={dayIndicator.id} key={dayIndicator.id}>
              <PrimaryText
                color={theme.primary}
                fontFamily={FONTS.MANROPE.SEMIBOLD}
                className="pl-6 text-2xl md:text-4xl"
              >
                {formatDayAndDate(dayIndicator.day, dayIndicator.date)}
              </PrimaryText>
              <View className="mt-4 space-y-14">
                {groupedServices.length > 0 && (
                  <GroupedServiceCard
                    theme={theme}
                    services={groupedServices}
                  />
                )}
                {dateServices
                  .filter((service) => !service.grouped)
                  .sort((a, b) => a.index - b.index)
                  .map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      theme={theme}
                      service={service}
                      isFirstCard={index === 0}
                    />
                  ))}
              </View>
            </View>
          );
        })}
      </View>
      <View className="max-w-56 flex-1 max-[1400px]:hidden"></View>
    </View>
  );
}
