import { View, Image, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TextInANest from '@/components/myText';
import Indicator from '@/components/myActivityIndicator';
import Button from '@/components/myButton';
import KeyboardAvoidingComponent from '@/components/myKeyboardAvoidingView';
import Modal from '@/components/myModal';
import Pressable from '@/components/myPressable';
import RefreshControl from '@/components/myRefreshControl';
import ScrollView from '@/components/myScrollView';
import SectionList from '@/components/mySectionList';
import Switch from '@/components/mySwitch';
import TextInput from '@/components/myTextInput';
import TouchableHighlight from '@/components/myTouchableHighlight';
import TouchableOpacity from '@/components/myTouchableOpacity';
import ViewBoxesWithColorAndText from '@/components/myView';
export default function HomeScreen() {
  return (
    <View>
      <TextInANest/>
      <Indicator/>
      <Button/>
      <KeyboardAvoidingComponent/>
      <Modal/>
      <Pressable/>
      <RefreshControl/>
      <ScrollView/>
      <SectionList/>
      <Switch/>
      <TextInput/>
      <TouchableHighlight/>
      <TouchableOpacity/>
      <ViewBoxesWithColorAndText/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
