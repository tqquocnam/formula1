import { Table, TableColumnsType } from "antd";
import { GetRaceResultsQuery } from "../screens/Home/index.generated";

const TableList = ({
  data,
  loading,
}: {
  data: GetRaceResultsQuery["race_results"];
  loading: boolean;
}) => {
  const columnSchema: TableColumnsType<
    GetRaceResultsQuery["race_results"][number]
  > = [
    {
      title: "YEAR",
      width: "10%",
      dataIndex: "year",
    },
    {
      title: "GRAND PRIX",
      width: "10%",
      dataIndex: "venue",
    },
    {
      title: "DATE",
      width: "10%",
      dataIndex: "date",
    },
    {
      title: "WINNER",
      width: "10%",
      dataIndex: "winner",
    },
    {
      title: "CAR",
      width: "10%",
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
      loading={loading}
      showHeader
      columns={columnSchema}
      dataSource={data}
    />
  );
};

export default TableList;
