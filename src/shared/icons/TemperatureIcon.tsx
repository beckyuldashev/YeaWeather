const TemperatureIcon = ({ width = '24px', height = '24px' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 90.625C60.3553 90.625 68.75 82.2303 68.75 71.875C68.75 61.5197 60.3553 53.125 50 53.125C39.6447 53.125 31.25 61.5197 31.25 71.875C31.25 82.2303 39.6447 90.625 50 90.625Z"
        fill="#0BAEFF"
      />
      <path
        d="M50 20.3125V71.875"
        stroke="#0BAEFF"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 20.3125V57.8125"
        stroke="#1441AF"
        strokeWidth="6"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M50 54.6875V71.875"
        stroke="white"
        strokeWidth="6"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M63.0999 76.9822C65.9262 69.7481 62.353 61.5927 55.119 58.7665C47.8849 55.9402 39.7295 59.5134 36.9033 66.7474C34.077 73.9814 37.6502 82.1369 44.8842 84.9631C52.1182 87.7894 60.2737 84.2162 63.0999 76.9822Z"
        fill="white"
      />
    </svg>
  );
};

export default TemperatureIcon;
