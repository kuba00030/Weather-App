import { Accordion } from "./Accordion";

interface BottomProps {
  dailyWeather: any;
}

const Bottom: React.FC<BottomProps> = ({ dailyWeather }: any) => {
  return <Accordion dailyWeather={dailyWeather} />;
};

export { Bottom };
