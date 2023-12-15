/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function InputBarTyping(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="694px"
      height="56px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="12px"
      padding="8px 16px 8px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "InputBarTyping")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Emoji Icon")}
      >
        <Icon
          width="20px"
          height="20px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 20.003997802734375,
            height: 20.003005981445312,
          }}
          paths={[
            {
              d: "M10.002 0C15.526 0 20.004 4.478 20.004 10.002C20.004 15.525 15.526 20.003 10.002 20.003C4.478 20.003 0 15.525 0 10.002C-1.11022e-15 4.478 4.478 0 10.002 0ZM10.002 1.5C8.87781 1.48781 7.76236 1.6987 6.72022 2.12047C5.67807 2.54224 4.72993 3.16652 3.93066 3.95717C3.13139 4.74781 2.49687 5.68913 2.06382 6.72664C1.63077 7.76415 1.4078 8.87724 1.4078 10.0015C1.4078 11.1258 1.63077 12.2389 2.06382 13.2764C2.49687 14.3139 3.13139 15.2552 3.93066 16.0458C4.72993 16.8365 5.67807 17.4608 6.72022 17.8825C7.76236 18.3043 8.87781 18.5152 10.002 18.503C12.234 18.4688 14.363 17.5581 15.9294 15.9675C17.4957 14.377 18.3736 12.2343 18.3736 10.002C18.3736 7.76972 17.4957 5.62698 15.9294 4.03646C14.363 2.44594 12.234 1.53524 10.002 1.501L10.002 1.5ZM6.464 12.785C6.88475 13.321 7.42195 13.7542 8.03493 14.0519C8.64791 14.3496 9.32058 14.5038 10.002 14.503C10.6826 14.5038 11.3544 14.3499 11.9668 14.0529C12.5792 13.756 13.1161 13.3238 13.537 12.789C13.6603 12.6329 13.8406 12.5322 14.0382 12.5091C14.2357 12.4859 14.4344 12.5422 14.5905 12.6655C14.7466 12.7888 14.8473 12.9691 14.8704 13.1667C14.8936 13.3642 14.8373 13.5629 14.714 13.719C14.1527 14.4316 13.437 15.0074 12.6207 15.4031C11.8045 15.7987 10.9091 16.0038 10.002 16.003C9.09376 16.0037 8.19723 15.798 7.38021 15.4012C6.5632 15.0045 5.84708 14.4272 5.286 13.713C5.1682 13.5564 5.11639 13.3598 5.14168 13.1655C5.16696 12.9711 5.26733 12.7944 5.42129 12.6731C5.57526 12.5518 5.77058 12.4956 5.96546 12.5165C6.16034 12.5374 6.33929 12.6338 6.464 12.785L6.464 12.785ZM7.002 6.751C7.16906 6.74627 7.33537 6.7751 7.4911 6.83576C7.64683 6.89643 7.78881 6.98771 7.90865 7.1042C8.02848 7.2207 8.12374 7.36004 8.18879 7.51399C8.25384 7.66794 8.28735 7.83337 8.28735 8.0005C8.28735 8.16763 8.25384 8.33306 8.18879 8.48701C8.12374 8.64096 8.02848 8.7803 7.90865 8.8968C7.78881 9.01329 7.64683 9.10457 7.4911 9.16524C7.33537 9.2259 7.16906 9.25473 7.002 9.25C6.67673 9.2408 6.36787 9.10512 6.14106 8.8718C5.91424 8.63847 5.78735 8.3259 5.78735 8.0005C5.78735 7.6751 5.91424 7.36253 6.14106 7.12921C6.36787 6.89588 6.67673 6.7602 7.002 6.751ZM13.002 6.751C13.1691 6.74627 13.3354 6.7751 13.4911 6.83576C13.6468 6.89643 13.7888 6.98771 13.9086 7.1042C14.0285 7.2207 14.1237 7.36004 14.1888 7.51399C14.2538 7.66794 14.2874 7.83337 14.2874 8.0005C14.2874 8.16763 14.2538 8.33306 14.1888 8.48701C14.1237 8.64096 14.0285 8.7803 13.9086 8.8968C13.7888 9.01329 13.6468 9.10457 13.4911 9.16524C13.3354 9.2259 13.1691 9.25473 13.002 9.25C12.6767 9.2408 12.3679 9.10512 12.1411 8.8718C11.9142 8.63847 11.7874 8.3259 11.7874 8.0005C11.7874 7.6751 11.9142 7.36253 12.1411 7.12921C12.3679 6.89588 12.6767 6.7602 13.002 6.751L13.002 6.751Z",
              fill: "rgba(112,121,145,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.33%"
          bottom="8.32%"
          left="8.33%"
          right="8.32%"
          {...getOverrideProps(overrides, "Vector15153")}
        ></Icon>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(1,22,39,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Hello..."
        {...getOverrideProps(overrides, "Typing")}
      ></Text>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Send Icon")}
      >
        <Icon
          width="19.5px"
          height="19.51px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 19.5029296875,
            height: 19.505615234375,
          }}
          paths={[
            {
              d: "M10.568 9.94977L3.03601 11.2058C2.94942 11.2202 2.86815 11.2572 2.80039 11.313C2.73263 11.3689 2.68077 11.4415 2.65001 11.5238L0.0530096 18.4808C-0.19499 19.1208 0.47401 19.7308 1.08801 19.4238L19.088 10.4238C19.2127 10.3615 19.3175 10.2658 19.3908 10.1472C19.4641 10.0287 19.503 9.89212 19.503 9.75277C19.503 9.61342 19.4641 9.47682 19.3908 9.3583C19.3175 9.23978 19.2127 9.14402 19.088 9.08177L1.08801 0.0817693C0.47401 -0.225231 -0.19499 0.385769 0.0530096 1.02477L2.65101 7.98177C2.68162 8.06418 2.73343 8.13707 2.8012 8.19307C2.86897 8.24908 2.9503 8.28623 3.03701 8.30077L10.569 9.55577C10.6154 9.56389 10.6574 9.58809 10.6876 9.62413C10.7179 9.66016 10.7345 9.70571 10.7345 9.75277C10.7345 9.79983 10.7179 9.84538 10.6876 9.88141C10.6574 9.91745 10.6154 9.94165 10.569 9.94977L10.568 9.94977Z",
              fill: "rgba(139,171,216,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="9.36%"
          bottom="9.36%"
          left="9.36%"
          right="9.38%"
          {...getOverrideProps(overrides, "Vector15156")}
        ></Icon>
      </View>
    </Flex>
  );
}
