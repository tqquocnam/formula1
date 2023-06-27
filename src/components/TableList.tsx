import {
  Table,
  TableColumnsType,
  TablePaginationConfig,
  Typography,
} from "antd";
import { GetRaceResultsQuery } from "../screens/Home/index.generated";
import { FC, ReactNode } from "react";
import styles from "../screens/Home/index.module.css";
interface TableListProps {
  data: GetRaceResultsQuery["race_results"][number];
  loading?: boolean;
  paginationConfig: TablePaginationConfig;
  title: ReactNode;
}

const { Text } = Typography;
const TableList: FC<TableListProps> = ({
  data,
  loading,
  paginationConfig,
  title,
}) => {
  const columnSchema: TableColumnsType<
    GetRaceResultsQuery["race_results"][number]
  > = [
    {
      title: <Text className={styles.titleOfRowTable}>GRAND PRIX</Text>,
      width: "20%",
      dataIndex: "venue",
      render: (value) => <Text strong>{value}</Text>,
    },
    {
      title: <Text className={styles.titleOfRowTable}>DATE</Text>,
      width: "10%",
      dataIndex: "date",
    },
    {
      title: <Text className={styles.titleOfRowTable}>WINNER</Text>,
      width: "20%",
      dataIndex: "winner",
      render: (value) => <Text strong>{value}</Text>,
    },
    {
      title: <Text className={styles.titleOfRowTable}>CAR</Text>,
      width: "20%",
      dataIndex: "car",
    },
    {
      title: <Text className={styles.titleOfRowTable}>LAPS</Text>,
      width: "10%",
      dataIndex: "laps",
      render: (value) => <Text strong>{value}</Text>,
    },
    {
      title: <Text className={styles.titleOfRowTable}>TIME</Text>,
      width: "10%",
      dataIndex: "time",
      render: (value) => <Text strong>{value}</Text>,
    },
  ];
  return (
    <Table
      showHeader
      caption={
        <Typography.Title
          level={3}
          style={{
            textAlign: "start",
            padding: "0 12px",
            color: "#E10600",
          }}
        >
          {title}
        </Typography.Title>
      }
      loading={loading}
      columns={columnSchema}
      dataSource={data}
      pagination={paginationConfig}
    />
  );
};

export default TableList;
