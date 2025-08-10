import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, View } from 'react-native';

import PrimaryText from '@/components/global/PrimaryText';
import TermsAndConditions from '@/components/TermsAndConditions';
import { FONTS } from '@/constants/fonts';
import { useGetBranding } from '@/hooks/useGetBranding';

const socialIcons = [
  { icon: 'logo-twitter', url: 'https://twitter.com' },
  { icon: 'logo-linkedin', url: 'https://linkedin.com' },
  { icon: 'logo-instagram', url: 'https://instagram.com' },
];

const quickLinks = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#about' },
  { title: 'Sign In', href: '#' },
];

const legalLinks = [
  { title: 'Privacy Policy', href: '#' },
  { title: 'Terms of Service', href: '#' },
];

export default function Footer() {
  const params = useLocalSearchParams();
  const shareCode = params.slug ? String(params.slug).split('/')[0] : null;

  const { mutate: getBranding, result: branding } = useGetBranding();

  useEffect(() => {
    if (shareCode) {
      getBranding(shareCode).catch(() => {});
    }
  }, [shareCode, getBranding]);

  return (
    <View className="bg-odia-dark px-6 py-12 md:px-10 md:py-20 lg:px-20">
      <View className="mx-auto max-w-7xl">
        {/* Top Section */}
        <View className="mb-12 flex flex-col md:flex-row">
          {/* Logo and company info */}
          <View className="mb-10 flex-1 md:mb-0">
            <PrimaryText
              fontFamily={FONTS.MANROPE.MEDIUM}
              color="white"
              className="mb-2 text-2xl tracking-tight"
            >
              Odia
              <PrimaryText
                fontFamily={FONTS.MANROPE.MEDIUM}
                color="#5935E9"
                className="text-2xl"
              >
                .club
              </PrimaryText>
            </PrimaryText>

            <PrimaryText
              fontFamily={FONTS.MANROPE.REGULAR}
              color="rgba(255, 255, 255, 0.7)"
              className="mb-6 max-w-sm text-sm"
            >
              Simplifying travel management for everyone. Access your
              itineraries anytime, anywhere.
            </PrimaryText>

            {/* Social Media Icons */}
            <View className="flex flex-row space-x-4">
              {socialIcons.map((item, index) => (
                <a key={index} href={item.url}>
                  <Pressable
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
                    style={{ width: 32, height: 32 }}
                  >
                    <Ionicons name={item.icon as any} size={18} color="white" />
                  </Pressable>
                </a>
              ))}
            </View>
          </View>

          {/* Quick Links */}
          <View className="mb-10 md:mb-0 md:ml-16">
            <PrimaryText
              fontFamily={FONTS.MANROPE.MEDIUM}
              color="white"
              className="mb-4 text-sm uppercase tracking-wider"
            >
              Quick Links
            </PrimaryText>

            <View className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  <Pressable>
                    <PrimaryText
                      fontFamily={FONTS.MANROPE.REGULAR}
                      color="rgba(255, 255, 255, 0.7)"
                      className="text-sm"
                    >
                      {link.title}
                    </PrimaryText>
                  </Pressable>
                </a>
              ))}
            </View>
          </View>

          {/* Terms and Conditions - only shown if data exists */}
          {branding?.terms_conditions && (
            <View className="md:ml-16">
              <TermsAndConditions
                theme={branding.theme}
                content={branding.terms_conditions}
              />
            </View>
          )}
        </View>

        {/* Copyright Section */}
        <View className="flex flex-col items-center justify-between border-t border-white/10 pt-6 md:flex-row">
          <PrimaryText
            fontFamily={FONTS.MANROPE.REGULAR}
            color="rgba(255, 255, 255, 0.5)"
            className="mb-4 text-xs md:mb-0"
          >
            {new Date().getFullYear()} Odia. All rights reserved.
          </PrimaryText>

          <View className="flex flex-row space-x-6">
            {legalLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <Pressable>
                  <PrimaryText
                    fontFamily={FONTS.MANROPE.REGULAR}
                    color="rgba(255, 255, 255, 0.5)"
                    className="text-xs"
                  >
                    {link.title}
                  </PrimaryText>
                </Pressable>
              </a>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
