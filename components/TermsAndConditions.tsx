import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

import { FONTS } from '@/constants/fonts';
import { Branding } from '@/types/branding.type';

import PrimaryText from './global/PrimaryText';

interface TermsAndConditionsProps {
  theme: Branding['theme'];
  content: string;
}

export default function TermsAndConditions({
  theme,
  content,
}: TermsAndConditionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View
      style={{ backgroundColor: theme.cardPrimary }}
      className="flex flex-col rounded-3xl p-8 max-md:px-4 max-md:py-8"
    >
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        className="flex flex-row items-center justify-between"
      >
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.LORA.REGULAR}
          className="text-[32px] leading-5"
        >
          Terms and Conditions
        </PrimaryText>
        <PrimaryText
          color={theme.primary}
          fontFamily={FONTS.LORA.REGULAR}
          className="text-2xl"
        >
          {isExpanded ? '−' : '+'}
        </PrimaryText>
      </TouchableOpacity>

      {isExpanded && (
        <View className="mt-6">
          <Markdown>{content}</Markdown>
        </View>
      )}
    </View>
  );
}
