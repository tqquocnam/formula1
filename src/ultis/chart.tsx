export const renderLapsChartToolTip = (value, laps, props) => {
  const { color } = props;
  const label = laps === "laps" && "Số vòng";
  return [
    <span style={{ color }}>
      {label} : {value}
    </span>,
  ];
};
