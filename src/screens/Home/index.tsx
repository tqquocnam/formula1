import {
  Col,
  Row,
  Select,
  Space,
  TablePaginationConfig,
  Typography,
  Input,
  Image,
  Layout,
} from "antd";

import { gql, useQuery } from "@apollo/client";
import { GetRaceResultsDocument, GetRaceYearDocument } from "./index.generated";
import TableList from "../../components/TableList";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { RaceResultsBoolExp } from "../../sdk/gql/types";
import Formula1Icon from "../../assets/icons/Formula1Icon.png";
import LapsChart from "../../components/LapsChart";
import styles from "./index.module.css";

gql`
  query getRaceYear {
    race_year {
      year
    }
  }
  query getRaceResults(
    $where: race_results_bool_exp!
    $limit: Int
    $offset: Int
  ) {
    race_results(where: $where, limit: $limit, offset: $offset) {
      car
      date
      time
      venue
      winner
      year
      laps
    }
    race_results_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

const Home = () => {
  const { data: getRaceYear } = useQuery(GetRaceYearDocument);
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    size: "30",
    keyword: "",
  });
  const size = Number(searchParams.get("size") ?? "30");
  const page = Number(searchParams.get("page") ?? "1");
  const keyword = searchParams.get("keyword")?.trim();
  const raceYear = Number(searchParams.get("raceYear") ?? "2023");

  let where: RaceResultsBoolExp = {};

  if (keyword !== null) {
    where = {
      ...where,
      _or: [
        { winner: keyword !== "" ? { _ilike: `%${keyword}%` } : undefined },
        { venue: keyword !== "" ? { _ilike: `%${keyword}%` } : undefined },
        { car: keyword !== "" ? { _ilike: `%${keyword}%` } : undefined },
      ],
    };
  }

  if (raceYear !== null) {
    where = {
      ...where,
      year: { _eq: raceYear },
    };
  }
  const { loading, data } = useQuery(GetRaceResultsDocument, {
    variables: {
      where: where,
      limit: size,
      offset: (page - 1) * size,
    },
  });
  console.log(data);

  const paginationConfig: TablePaginationConfig = {
    total: data?.race_results_aggregate.aggregate?.count,
    pageSize: size,
    current: page,
    showSizeChanger: true,
    onChange: (p, s) =>
      setSearchParams((params) => {
        params.set("page", String(p));
        params.set("size", String(s));
        return params;
      }),
    onShowSizeChange: (p, s) =>
      setSearchParams((params) => {
        params.set("page", String(p));
        params.set("size", String(s));
        return params;
      }),
    showTotal: (total) => (
      <span style={{ color: "#919EAB" }}>{`${total} results`}</span>
    ),
  };
  return (
    <Layout>
      <Space direction="vertical" className={styles.container}>
        <Row gutter={[16, 16]}>
          <Col span={24} className={styles.card}>
            <Col span={24}>
              <Space size="middle">
                <Typography.Title
                  level={2}
                  style={{
                    fontWeight: 600,
                    color: "#E10600",
                    textTransform: "uppercase",
                  }}
                >
                  Formula 1 Dashboard
                </Typography.Title>
                <Image src={Formula1Icon} preview={false} width={64} />
              </Space>
            </Col>
            <Col span={24}>
              <Space size="small">
                <Space direction="vertical" size="small">
                  <Typography.Text strong className={styles.label}>
                    Search
                  </Typography.Text>
                  <Input.Search
                    size="large"
                    allowClear
                    placeholder="Enter the driver's name, participating team, race venue"
                    style={{ width: 600 }}
                    onChange={debounce((e) => {
                      setSearchParams((params) => {
                        params.set("keyword", e.target.value);
                        return params;
                      });
                    }, 500)}
                  />
                </Space>
                <Space direction="vertical" size="small">
                  <Typography.Text strong className={styles.label}>
                    Choose the year of the race
                  </Typography.Text>
                  <Select
                    size="large"
                    style={{ width: 230 }}
                    value={raceYear}
                    onChange={(raceYear) =>
                      setSearchParams((params) => {
                        params.set("raceYear", String(raceYear));
                        return params;
                      })
                    }
                    options={getRaceYear?.race_year.map((item) => ({
                      label: item.year,
                      value: item.year,
                    }))}
                  />
                </Space>
              </Space>
            </Col>
          </Col>

          <Col span={24} className={styles.card}>
            <LapsChart data={data?.race_results} loading={loading} />
          </Col>
          <Col span={24} className={styles.card}>
            <TableList
              title={`${raceYear} RACE RESULTS`}
              loading={loading}
              data={data?.race_results}
              paginationConfig={paginationConfig}
            />
          </Col>
        </Row>
      </Space>
    </Layout>
  );
};

export default Home;
