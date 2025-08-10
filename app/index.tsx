import React from 'react';
import { ScrollView, View } from 'react-native';

import AboutSection from '@/components/landing/AboutSection';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import Navbar from '@/components/landing/Navbar';

export default function LandingPage() {
  return (
    <View className="flex-1 bg-odia-background">
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <Navbar />
        <Hero />
        <AboutSection />
        <Footer />
      </ScrollView>
    </View>
  );
}
