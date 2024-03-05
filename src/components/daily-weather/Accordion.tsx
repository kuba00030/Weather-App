import { AccordionItem } from "./AccordionItem";
import "./accordion-style.css";

interface AccordionProps {
  dailyWeather: any;
}

const Accordion: React.FC<AccordionProps> = ({ dailyWeather }) => {
  let accordionItems: any = [];

  dailyWeather.forEach((item: any) => {
    accordionItems.push(<AccordionItem dailyWeather={item} />);
  });
  return <div className="accordion-container">{accordionItems}</div>;
};

export { Accordion };
