import React from "react";

import { HeroTitleProps } from "../types/interfaces";

function HeroTitle(props: HeroTitleProps) {
  const { number, days, journey } = props;

  return (
    <div className="hidden md:flex md:flex-col md:items-end md:mb-[56px] lg:mb-[181px]">
      <p className="text-[67px] lg:text-[98px] font-thin tracking-[8.71px] uppercase leading-none">
        <span className="font-medium">{number}</span>
        {days}
      </p>
      <p className="md:text-[14px] lg:text-[16px] font-light tracking-[25px] lg:tracking-[36.48px] uppercase leading-none">
        {journey}
      </p>
    </div>
  );
}

export default HeroTitle;
