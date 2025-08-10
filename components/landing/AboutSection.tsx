import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, Pressable, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import PrimaryText from '@/components/global/PrimaryText';
import { FONTS } from '@/constants/fonts';

export default function AboutSection() {
  // Animation values
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(10);

  // Animation start
  opacity.value = withDelay(100, withTiming(1, { duration: 500 }));
  translateY.value = withDelay(100, withTiming(0, { duration: 500 }));

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const AnimatedView = Animated.createAnimatedComponent(View);

  return (
    <View
      id="about"
      className="bg-gray-50 px-6 py-16 md:px-10 md:py-24 lg:px-20"
    >
      <View className="mx-auto max-w-7xl">
        <View className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          {/* Text content */}
          <AnimatedView style={animatedStyle} className="max-w-xl md:w-1/2">
            <PrimaryText
              fontFamily={FONTS.MANROPE.REGULAR}
              className="mb-5 text-sm uppercase tracking-wider text-gray-500"
            >
              ABOUT ODIA.CLUB
            </PrimaryText>

            <PrimaryText
              fontFamily={FONTS.MANROPE.BOLD}
              className="mb-6 text-3xl leading-tight text-gray-900 md:text-4xl"
            >
              Crafted with Odia, Designed for You.
            </PrimaryText>

            <PrimaryText
              fontFamily={FONTS.MANROPE.REGULAR}
              className="mb-10 text-base leading-relaxed text-gray-500"
            >
              Odia.club is your personal travel portal for managing itineraries
              designed with Odia. Explore your schedules, get real-time updates,
              and access curated travel tips and suggestions — all in one place.
            </PrimaryText>

            <Link href="https://odia.app" asChild>
              <Pressable className="flex flex-row items-center self-start rounded-md border border-gray-200 bg-white px-5 py-3 shadow-sm">
                <PrimaryText
                  fontFamily={FONTS.MANROPE.MEDIUM}
                  className="mr-2 text-sm text-gray-900"
                >
                  Learn More About Odia.app
                </PrimaryText>
                <Ionicons name="arrow-forward-outline" size={16} color="#000" />
              </Pressable>
            </Link>
          </AnimatedView>

          {/* Image */}
          <AnimatedView
            style={{
              opacity: withDelay(300, withTiming(1, { duration: 700 })),
              transform: [
                {
                  translateY: withDelay(300, withTiming(0, { duration: 700 })),
                },
              ],
            }}
            className="my-auto w-full md:w-1/2"
          >
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2940&auto=format&fit=crop',
              }}
              className="overflow-hidden rounded-2xl shadow-lg"
              style={{ width: '100%', height: 360, resizeMode: 'cover' }}
            />
          </AnimatedView>
        </View>
      </View>
    </View>
  );
}
