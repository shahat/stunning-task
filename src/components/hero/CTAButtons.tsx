import { FC } from "react";
import { Button } from "../ui/Button";
type CTAButtonsProps = {
  onRegenerate: () => void;
};
const CTAButtons: FC<CTAButtonsProps> = ({ onRegenerate }) => (
  <div className="flex gap-4 justify-center md:justify-start ">
    <Button
      className="bg-teal-600 text-white  hover:bg-teal-700"
      aria-label="Get Started"
    >
      Get Started
    </Button>
    <Button
      variant="outline"
      onClick={onRegenerate}
      className=" text-gray-700 bg-gray-100 hover:bg-gray-200 "
      aria-label="Regenerate with AI"
    >
      Regenerate with AI
    </Button>
  </div>
);

export default CTAButtons;
