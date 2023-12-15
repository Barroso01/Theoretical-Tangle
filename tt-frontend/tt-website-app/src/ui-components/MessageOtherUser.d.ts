/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessageOtherUserOverridesProps = {
    MessageOtherUser?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    "OMG \uD83D\uDE32 do you remember what you did last night at the work night out?"?: PrimitiveOverrideProps<TextProps>;
    "Time (Emoji(Icon)"?: PrimitiveOverrideProps<FlexProps>;
    "heart icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15127?: PrimitiveOverrideProps<IconProps>;
    "18:12"?: PrimitiveOverrideProps<TextProps>;
    "check Icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector15130?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MessageOtherUserProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MessageOtherUserOverridesProps | undefined | null;
}>;
export default function MessageOtherUser(props: MessageOtherUserProps): React.ReactElement;
