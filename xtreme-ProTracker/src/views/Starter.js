import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Tracking"
            subtitle="Daily"
            earning=""
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Tracking"
            subtitle="Weekly"
            earning=""
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Tracking"
            subtitle="Monthly"
            earning=""
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Tracking"
            subtitle="Quartly"
            earning=""
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col>
          <SalesChart />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
