import { GetRaceResultsQuery } from "../screens/Home/index.generated";
import {
  Bar,
  BarChart,
  Label,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { renderLapsChartToolTip } from "../ultis/chart";
import { FC } from "react";
import { Empty, Spin } from "antd";
import styles from "../screens/Home/index.module.css";
import { isEmpty } from "lodash";
interface LapsChartProps {
  data: GetRaceResultsQuery["race_results"][number];
  loading?: boolean;
}

const LapsChart: FC<LapsChartProps> = ({ data, loading }) => {
  return (
    <div>
      {loading ? (
        <Spin className={styles.stylesSpin} />
      ) : isEmpty(data) ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        <ResponsiveContainer height={300}>
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 40,
              right: 40,
              left: 40,
              bottom: 0,
            }}
          >
            <Bar dataKey="laps" fill="#A6E1D3">
              <LabelList dataKey="winner" position="top" />
            </Bar>
            <XAxis dataKey="venue" tick={{ color: "#637381", fontSize: 12 }} />
            <YAxis tick={{ color: "#637381", fontSize: 12 }}>
              <Label
                value="LAPS"
                offset={-25}
                position="insideTopLeft"
                fontSize={12}
                fontWeight={600}
                color="#637381"
              />
            </YAxis>
            <Tooltip formatter={renderLapsChartToolTip} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default LapsChart;
