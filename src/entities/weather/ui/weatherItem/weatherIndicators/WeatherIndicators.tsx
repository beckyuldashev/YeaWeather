import cl from './styles.module.css';

import { IndicatorsData } from './weatherIndicators.model';

interface IndicatorsDataProps {
  indicatorsData: IndicatorsData[];
}

const IndicatorsList = ({ indicatorsData }: IndicatorsDataProps) => {
  return (
    <ul className={cl.indicators}>
      {indicatorsData.map(({ Icon, value, title }, index) => (
        <li key={index} className={cl.indicator}>
          <Icon />
          <span>{value}</span>
          <span>{title}</span>
        </li>
      ))}
    </ul>
  );
};

export default IndicatorsList;
