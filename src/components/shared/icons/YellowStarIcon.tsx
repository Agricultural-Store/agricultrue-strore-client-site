import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
};

const YellowStarIcon = ({ height, width }: Props) => {
  return (
    <svg
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.36003 2.7265C9.0306 1.31382 10.9681 1.31382 11.6387 2.7265L12.7976 5.16797C13.0639 5.72895 13.5786 6.11777 14.174 6.20773L16.7655 6.59924C18.2649 6.82577 18.8636 8.74161 17.7786 9.84123L15.9034 11.7417C15.4726 12.1783 15.276 12.8074 15.3777 13.424L15.8204 16.1074C16.0765 17.6601 14.509 18.8442 13.1679 18.1111L10.85 16.8442C10.3175 16.5531 9.68123 16.5531 9.14866 16.8442L6.83082 18.1111C5.48968 18.8442 3.9222 17.6601 4.17834 16.1075L4.62101 13.424C4.72272 12.8074 4.52611 12.1783 4.09525 11.7417L2.22008 9.84123C1.13507 8.74161 1.73379 6.82577 3.23323 6.59924L5.82466 6.20773C6.42009 6.11777 6.93482 5.72895 7.20111 5.16797L8.36003 2.7265Z"
        fill="#F59E0B"
      />
    </svg>
  );
};

export default YellowStarIcon;
