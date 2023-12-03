import React from "react";

type Props = {
  color?: string;
};

const ArrowLargeRightIcon = ({ color }: Props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_670_20657"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={25}
      >
        <rect
          y="0.000976562"
          width={24}
          height={24}
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_670_20657)">
        <path
          d="M13.2924 12.0011L8.69238 7.40106L9.40008 6.69336L14.7078 12.0011L9.40008 17.3088L8.69238 16.6011L13.2924 12.0011Z"
          fill={color || "#777E91"}
        />
      </g>
    </svg>
  );
};

export default ArrowLargeRightIcon;
