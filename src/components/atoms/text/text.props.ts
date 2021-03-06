import { TextProps as ReactNativeTextProps } from 'react-native';
import { TypographyProps, ColorProps, SpaceProps } from 'styled-system';
import { TextVariants } from './text.presets';

export interface TextStyleProps
  extends TypographyProps,
    ColorProps,
    SpaceProps {
  textTransform?: 'uppercase' | 'lowercase' | 'none';
}

export interface TextProps extends TextStyleProps, ReactNativeTextProps {
  variant?: TextVariants;
}
