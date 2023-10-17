import data from "../../data/hero_text.json";
import btnData from "../../data/buttons_text.json";
import Button from "../../components/Button";
import TitleHero from "../../components/Hero_Title";

function Hero() {
  const { title, descr } = data;

  return (
    <section
      className="pt-[105px] pb-[56px] md:pt-[122px] md:pb-[64px] lg:pt-[130px] lg:pb-[104px]"
      id="hero"
    >
      <div className="container md:flex md:gap-[48px] lg:gap-[285px]">
        {/* Title Block (Mobile) */}
        <div className="md:hidden flex flex-col items-end mb-[24px]">
          <p className="text-[37px] font-thin uppercase tracking-[1.66px] leading-none">
            <span className="font-medium">{title.number}</span>
            {title.days}
          </p>
          <p className="text-[12px] font-light uppercase tracking-[9.48px] leading-none">
            {title.journey}
          </p>
        </div>

        {/* Main Content Block */}
        <div className="w-[280px] md:w-[426px] lg:w-[646px]">
          <h1 className="title mb-[24px] md:mb-[68px] lg:mb-[148px]">
            {title.span1}
            <span className="font-thin">{title.span2}</span>
          </h1>
          <p className="text-[10px] md:text-[14px] lg:text-[16px] font-extralight leading-[16px] lg:leading-[24px] md:tracking-[1.26px] lg:tracking-[1.44px] max-w-[157px] md:max-w-[265px] lg:max-w-[608px] mb-[24px]">
            {descr.places}
          </p>
        </div>

        {/* Sidebar Block */}
        <div className="md:w-[230px] lg:w-[294px]">
          <TitleHero {...title} />
          <p className="font-extralight text-justify md:text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] mb-[24px] md:mb-[28px]">
            {descr.text}
          </p>
          <Button label={btnData.join} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
