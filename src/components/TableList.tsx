import {
  Table,
  TableColumnsType,
  TablePaginationConfig,
  Typography,
} from "antd";
import { GetRaceResultsQuery } from "../screens/Home/index.generated";
import { FC, ReactNode } from "react";

interface TableListProps {
  data: GetRaceResultsQuery["race_results"][number];
  loading?: boolean;
  paginationConfig: TablePaginationConfig;
  title: ReactNode;
}
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
      title: "GRAND PRIX",
      width: "20%",
      dataIndex: "venue",
    },
    {
      title: "DATE",
      width: "10%",
      dataIndex: "date",
    },
    {
      title: "WINNER",
      width: "20%",
      dataIndex: "winner",
    },
    {
      title: "CAR",
      width: "20%",
      dataIndex: "car",
    },
    {
      title: "LAPS",
      width: "10%",
      dataIndex: "laps",
    },
    {
      title: "TIME",
      width: "10%",
      dataIndex: "time",
    },
  ];
  return (
    <Table
      showHeader
      caption={
        <Typography.Title
          level={2}
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
