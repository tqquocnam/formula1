import {
  Col,
  Row,
  Select,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import Search from "antd/es/input/Search";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./index.module.css";
import { gql, useQuery } from "@apollo/client";
import {
  GetRaceResultsDocument,
  GetRaceResultsQuery,
  GetRaceYearDocument,
} from "./index.generated";
import TableList from "../../components/TableList";

gql`
  query getRaceYear {
    race_year {
      year
    }
  }
  query getRaceResults {
    race_results {
      car
      date
      time
      venue
      winner
      year
      laps
    }
  }
`;

const Home = () => {
  const { data: getRaceYear } = useQuery(GetRaceYearDocument);

  const { loading, data } = useQuery(GetRaceResultsDocument);
  console.log(data);

  const dataBarChart = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];
  const dataLineChart = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value: string) => console.log(value);

  return (
    <div style={{ padding: "12px 50px 24px", backgroundColor: "#f9fafb" }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Row gutter={[16, 16]}>
          <Col span={24} className={styles.cardContainer}>
            <Search
              size="large"
              placeholder="Tìm kiếm tay lái, đội tham gia, cuộc đua,..."
              onSearch={onSearch}
              style={{ width: 660 }}
            />
          </Col>
          <Col span={24}>
            <Row gutter={[16, 16]}>
              <Col span={12} className={styles.cardContainer}>
                <BarChart width={500} height={340} data={dataBarChart}>
                  <Bar dataKey="students" fill="green" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </BarChart>
              </Col>
              <Col span={12} className={styles.cardContainer}>
                <LineChart width={500} height={300} data={dataLineChart}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </Col>
            </Row>
          </Col>
          <Col span={24} className={styles.cardContainer}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography.Title level={2} style={{ padding: "0 12px" }}>
                2023 RACE RESULTS
              </Typography.Title>
              <Select
                style={{ width: 230 }}
                placeholder="Chọn năm tổ chức cuộc đua"
                onChange={handleChange}
                options={getRaceYear?.race_year.map((item) => ({
                  label: item.year,
                  value: item.year,
                }))}
              />
            </div>
            <TableList loading={loading} data={data?.race_results} />
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Home;
