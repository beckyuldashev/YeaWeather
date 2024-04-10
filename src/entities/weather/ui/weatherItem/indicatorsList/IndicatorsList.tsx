import cl from './styles.module.css';

import { IndicatorsData } from './indicatorsList.model';

interface IndicatorsDataProps {
  indicatorsData: IndicatorsData[];
}

const IndicatorsList = ({ indicatorsData }: IndicatorsDataProps) => {
  return (
    <ul className={cl.indicators}>
      {indicatorsData.map((indicator, index) => (
        <li key={index} className={cl.indicator}>
          <indicator.icon />
          <span>{indicator.value}</span>
          <span>{indicator.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default IndicatorsList;
