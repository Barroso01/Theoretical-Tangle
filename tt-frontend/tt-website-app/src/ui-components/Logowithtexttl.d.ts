/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LogowithtexttlOverridesProps = {
    Logowithtexttl?: PrimitiveOverrideProps<ViewProps>;
    "Logo tl"?: PrimitiveOverrideProps<ViewProps>;
    "Tangled Labs"?: PrimitiveOverrideProps<TextProps>;
    logoart?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 17"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 18"?: PrimitiveOverrideProps<IconProps>;
    "Vector 16"?: PrimitiveOverrideProps<IconProps>;
    "Vector 17"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LogowithtexttlProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "colored" | "grayscale";
} & {
    overrides?: LogowithtexttlOverridesProps | undefined | null;
}>;
export default function Logowithtexttl(props: LogowithtexttlProps): React.ReactElement;
