import React from "react";
import { Sun } from "./Sun";
import artboard31 from "./artboard-3-1.png";
import artboard32 from "./artboard-3-2.png";
import comp311 from "./comp-3-1-1.png";
import flyerNexuba1 from "./flyer-nexuba-1.png";
import flyerNexuba3 from "./flyer-nexuba-3.png";
import flyerNexuba9 from "./flyer-nexuba-9.png";
import image1 from "./image-1.png";
import image from "./image.png";

const navigationItems = [
  { id: 1, label: "main" },
  { id: 2, label: "about" },
  { id: 3, label: "samples" },
  { id: 4, label: "contact" },
];

const galleryImages = [
  { id: 1, src: flyerNexuba9, width: "w-14", alt: "Flyer nexuba 9" },
  { id: 2, src: flyerNexuba1, width: "w-[125px]", alt: "Flyer nexuba 1" },
  { id: 3, src: flyerNexuba3, width: "flex-1 grow", alt: "Flyer nexuba 3" },
];

const ctaButtons = [
  { id: 1, text: "Request a sample", top: "top-[2030px]" },
  { id: 2, text: "More works", top: "top-[2143px]" },
  { id: 3, text: "Start with the $250 Package", top: "top-[2256px]" },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-black overflow-hidden w-full min-w-[1440px] h-[2824px] relative">
      <img
        className="h-[59.88%] top-[12.36%] w-[481px] absolute left-[calc(50.00%_-_720px)] aspect-[0.63] object-cover"
        alt="Artboard background"
        src={image}
      />

      <img
        className="absolute h-[39.09%] top-0 left-[calc(50.00%_+_282px)] w-[438px] aspect-[0.63] object-cover"
        alt="Artboard decorative element"
        src={artboard31}
      />

      <img
        className="h-[74.54%] top-[70.50%] w-[1440px] absolute left-[calc(50.00%_-_720px)] aspect-[0.63] object-cover"
        alt="Artboard footer background"
        src={artboard32}
      />

      <nav
        className="absolute w-[83.06%] h-[3.22%] top-[2.34%] left-[8.75%]"
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.label}`}
            className="absolute h-full top-0 [font-family:'Instrument_Serif-Regular',Helvetica] font-normal text-white text-[50px] tracking-[0] leading-[60.0px] hover:text-[#baa278] transition-colors"
            style={{
              width: index === 0 ? "8.19%" : index === 1 ? "9.11%" : "15.38%",
              left:
                index === 0
                  ? "0"
                  : index === 1
                    ? "11.29%"
                    : index === 2
                      ? "23.49%"
                      : "38.21%",
            }}
          >
            {item.label}
          </a>
        ))}

        <Sun className="!absolute !w-[4.01%] !h-[52.75%] !top-[15.38%] !left-[95.32%]" />
      </nav>

      <header className="absolute w-[100.90%] top-[calc(50.00%_-_1172px)] left-[8.75%] h-[464px]">
        <div className="absolute w-[1188px] h-[424px] top-10 left-0 flex">
          <div className="flex-1 w-[1192px] relative">
            <h1 className="absolute w-[35.49%] h-[21.46%] top-0 left-0 [font-family:'Instrument_Serif-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[96.0px] whitespace-nowrap">
              Nicolás
            </h1>

            <p className="absolute w-[29.61%] h-[11.32%] top-[88.68%] left-[70.05%] [font-family:'Instrument_Serif-Italic',Helvetica] font-normal italic text-white text-[40px] tracking-[0] leading-[48.0px]">
              motion + social designer
            </p>
          </div>
        </div>

        <img
          className="absolute w-full top-[calc(50.00%_-_232px)] left-0 h-[398px] aspect-[3.65] object-cover"
          alt="Nicolás Diácono logo composition"
          src={comp311}
        />
      </header>

      <section
        className="absolute w-[68.26%] h-[9.60%] top-[30.59%] left-[8.75%]"
        aria-labelledby="intro-heading"
      >
        <h2 id="intro-heading" className="sr-only">
          About Nicolás
        </h2>
        <p className="absolute w-[99.59%] h-[43.54%] top-0 left-0 [font-family:'Bison-Bold',Helvetica] font-normal text-transparent text-[40px] tracking-[0] leading-[48.0px]">
          <span className="font-bold text-[#baa278]">Graphic</span>
          <span className="[font-family:'Instrument_Serif-Regular',Helvetica] text-white">
            {" "}
            &amp;
          </span>
          <span className="font-bold text-white">&nbsp;</span>
          <span className="font-bold text-[#baa278]">Motion Designer</span>
          <span className="[font-family:'Instrument_Serif-Regular',Helvetica] text-white">
            {" "}
            with 5+ years of experience helping agencies and brands communicate
            with clarity and impact.
          </span>
        </p>

        <p className="absolute w-[99.59%] h-[46.13%] top-[53.87%] left-0 [font-family:'Instrument_Serif-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[48.0px]">
          I specialize in social media graphics, fast-turnaround motion, and
          clean visual systems that make content feel polished and consistent.
        </p>
      </section>

      <section
        className="flex w-[1356px] h-[521px] items-center gap-4 px-2.5 py-0 absolute top-[1215px] left-[42px]"
        aria-label="Portfolio gallery"
      >
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className={`relative ${item.width} h-[434px] bg-white`}
          >
            <img
              className={`absolute ${item.id === 1 ? "top-[calc(50.00%_-_137px)] left-[calc(50.00%_-_28px)] w-14 h-[276px]" : item.id === 2 ? "top-[calc(50.00%_-_129px)] left-[calc(50.00%_-_62px)] w-[125px] h-[258px]" : "top-[calc(50.00%_-_217px)] left-[calc(50.00%_-_356px)] w-[712px] h-[434px]"} aspect-[1] object-cover`}
              alt={item.alt}
              src={item.src}
            />
          </div>
        ))}
      </section>

      <section
        className="absolute w-[86.04%] h-[4.18%] top-[64.87%] left-[7.01%] flex"
        aria-labelledby="cta-heading"
      >
        <h2
          id="cta-heading"
          className="flex-1 w-[1237px] [font-family:'Instrument_Serif-Regular',Helvetica] font-normal text-transparent text-[90px] text-center tracking-[0] leading-[108.0px] whitespace-nowrap"
        >
          <span className="text-white">Need</span>
          <span className="text-[#baa278]">&nbsp;</span>
          <span className="[font-family:'Instrument_Serif-Italic',Helvetica] italic text-[#baa278]">
            fast
          </span>
          <span className="text-[#baa278]">&nbsp;</span>
          <span className="text-white">&amp;</span>
          <span className="text-[#baa278]">&nbsp;</span>
          <span className="[font-family:'Instrument_Serif-Italic',Helvetica] italic text-[#baa278]">
            reliable
          </span>
          <span className="text-[#baa278]">&nbsp;</span>
          <span className="text-white">graphic support?</span>
        </h2>
      </section>

      {ctaButtons.map((button) => (
        <button
          key={button.id}
          className={`absolute ${button.top} left-[444px] w-[551px] h-[91px] flex bg-black rounded-[20px] overflow-hidden border-[none] shadow-[0px_4px_77.5px_11px_#ffffff24] before:content-[''] before:absolute before:inset-0 before:p-[3px] before:rounded-[20px] before:[background:linear-gradient(183deg,rgba(0,0,0,0)_0%,rgba(186,162,120,0.7)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:shadow-[0px_4px_77.5px_15px_#ffffff40] transition-shadow cursor-pointer`}
          aria-label={button.text}
        >
          <div className="mt-3 w-[530px] h-[60px] ml-[21px] flex">
            <span className="mt-4 w-[510px] h-[65px] ml-1 aspect-[7.85] [font-family:'Instrument_Serif-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[48.0px]">
              {button.text}
            </span>
          </div>
        </button>
      ))}

      <img
        className="absolute top-[2498px] left-[259px] w-[921px] h-[260px] aspect-[3.54] object-cover"
        alt="Footer contact information"
        src={image1}
      />
    </div>
  );
};
