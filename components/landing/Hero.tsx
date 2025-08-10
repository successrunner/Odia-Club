import { useEffect, useRef } from 'react';
import { Dimensions, Image, Pressable, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';

import Chip from './Chip';

export default function Hero() {
  // Animation values
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(10);

  // Get screen dimensions
  const { width, height } = Dimensions.get('window');
  const isMobile = width < 768;

  // Reference to determine if the component is mounted
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;

      // Start animations
      opacity.value = withTiming(1, { duration: 500 });
      translateY.value = withTiming(0, { duration: 500 });
    }
  }, [opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const AnimatedView = Animated.createAnimatedComponent(View);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  return (
    <View
      className="relative flex items-center justify-center"
      style={{ height: height * 0.9 }}
    >
      {/* Background Image */}
      <View className="absolute inset-0 z-0">
        <View className="absolute inset-0 z-10 bg-black/30" />
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=2940&auto=format&fit=crop',
          }}
          className="h-full w-full"
          style={{ resizeMode: 'cover' }}
        />
      </View>

      {/* Content */}
      <AnimatedView
        style={animatedStyle}
        className="z-20 flex w-full items-center justify-center px-6"
      >
        <View className="flex w-full max-w-[350px] items-center md:max-w-[800px]">
          {/* Chip */}
          <Chip text="Welcome to Odia.club" className="mb-5" />

          {/* Heading */}
          <PrimaryText
            fontFamily={FONTS.MANROPE.SEMIBOLD}
            color="white"
            className={`mb-5 text-center ${isMobile ? 'text-3xl' : 'text-6xl'}`}
          >
            Your Trips, Seamlessly Managed.
          </PrimaryText>

          {/* Subheading */}
          <PrimaryText
            fontFamily={FONTS.MANROPE.REGULAR}
            color="rgba(255, 255, 255, 0.9)"
            className="mb-8 px-2 text-center text-base"
          >
            Access and manage itineraries created with Odia — plus expert tips
            and travel insights.
          </PrimaryText>
        </View>
      </AnimatedView>

      {/* Scroll down indicator */}
      <AnimatedPressable
        className="absolute bottom-8 z-30 flex h-10 w-10 items-center justify-center self-center rounded-full bg-white/10"
        style={{
          opacity: withDelay(300, withTiming(1, { duration: 500 })),
        }}
      >
        <View className="flex h-5 w-5 items-center justify-center">
          <View className="h-2 w-2 -translate-y-0.5 rotate-45 transform border-b-2 border-r-2 border-white" />
        </View>
      </AnimatedPressable>
    </View>
  );
}
