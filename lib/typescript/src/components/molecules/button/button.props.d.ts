import { BackgroundColorProps, BorderProps, FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';
import { TouchableOpacityProps } from 'react-native';
import { TextStyleProps } from '../../atoms/text/text.props';
import { ButtonSizes, ButtonVariants } from './button.presets';
export declare type ButtonStyleProps = FlexboxProps & LayoutProps & BackgroundColorProps & SpaceProps & BorderProps;
export interface ButtonProps extends ButtonStyleProps, TouchableOpacityProps {
    variant?: ButtonVariants;
    size?: ButtonSizes;
    textStyle?: TextStyleProps;
}
