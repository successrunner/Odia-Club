declare module 'react-native-switch-selector' {
  import { TextStyle, ViewStyle } from 'react-native';

  interface Option {
    label: string;
    value: string | number;
    customIcon?: JSX.Element;
    imageIcon?: string;
    activeColor?: string;
  }

  interface SwitchSelectorProps {
    options: Option[];
    initial?: number;
    onPress(value: string | number): void;
    fontSize?: number;
    selectedColor?: string;
    buttonColor?: string;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    hasPadding?: boolean;
    valuePadding?: number;
    height?: number;
    bold?: boolean;
    textStyle?: TextStyle;
    selectedTextStyle?: TextStyle;
    imageStyle?: TextStyle;
    style?: ViewStyle;
    animationDuration?: number;
    disabled?: boolean;
  }

  export default function SwitchSelector(
    props: SwitchSelectorProps
  ): JSX.Element;
}
