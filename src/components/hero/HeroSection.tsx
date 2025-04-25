import { useState, FC } from "react";
import EditableText from "./EditableText";
import CTAButtons from "./CTAButtons";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
  dummyHeadlines,
  dummySubheadlines,
  dummyImages,
  getRandomItem,
} from "./constants";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const HeroSection: FC = () => {
  const [headline, setHeadline] = useState<string>(dummyHeadlines[0]);
  const [subheadline, setSubheadline] = useState<string>(dummySubheadlines[0]);
  const [image, setImage] = useState(dummyImages[0]);

  const regenerateContent = () => {
    setHeadline(getRandomItem(dummyHeadlines, headline));
    setSubheadline(getRandomItem(dummySubheadlines, subheadline));
    setImage(getRandomItem(dummyImages, image));
  };

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8"
      aria-label="Hero section"
    >
      <div className="flex-1 space-y-6">
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
        >
          <EditableText
            tag="h1"
            text={headline}
            onChange={setHeadline}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
            text-[40px] md:text-[50px] lg:text-[64px] tracking-tight text-transparent capitalize font-bold text-center sm:text-start mb-6"
            ariaLabel="Editable headline"
          />
        </motion.span>

        <EditableText
          tag="p"
          text={subheadline}
          onChange={setSubheadline}
          className="text-lg md:text-xl text-gray-600 max-w-xl outline-none text-center sm:text-start mb-10"
          ariaLabel="Editable subheadline"
        />
        <CTAButtons onRegenerate={regenerateContent} />
      </div>
      <section className="flex-1 flex justify-center items-center">
        <Lottie
          animationData={image}
          loop
          className=" w-full h-full max-w-[300px] max-h-[300px] md:max-w-[500px] md:max-h-[500px] "
        />
      </section>
    </section>
  );
};

export default HeroSection;
