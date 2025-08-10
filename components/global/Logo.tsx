import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

import { OdiaLogo } from '@/assets/icons';
import { FONTS } from '@/constants/fonts';

import PrimaryText from './PrimaryText';

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 62 }: LogoProps) {
  const router = useRouter();

  return (
    <Pressable
      className="flex flex-row items-center justify-center gap-3"
      onPress={() => router.push('/+not-found')}
    >
      <OdiaLogo width={size} height={size} className="hidden sm:block" />
      <OdiaLogo width={42} height={42} className="block sm:hidden" />
      <PrimaryText
        color="white"
        fontFamily={FONTS.MANROPE.SEMIBOLD}
        className="sm:text-2xl"
      >
        Odia
      </PrimaryText>
    </Pressable>
  );
}
