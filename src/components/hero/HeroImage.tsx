import { FC } from 'react';
import { motion } from 'framer-motion';

type HeroImageProps = {
  src: string;
};

const HeroImage: FC<HeroImageProps> = ({ src }) => (
  <motion.div
    className="flex-1 max-w-md w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img
      src={src}
      alt="Illustration representing hero content"
      className="rounded-2xl shadow-lg w-full h-auto object-cover"
    />
  </motion.div>
);

export default HeroImage;