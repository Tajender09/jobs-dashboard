import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faPencilAlt,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./teams.css";

const Teams = () => {
  const [dataArray, setDataArray] = useState([
    {
      name: "Mobile App Development",
      startDate: { startDay: 25, startMonth: "March", startYear: 2020 },
      endDate: { endDay: 19, endMonth: "August", endYear: 2020 },
      weeks: 5,
      sessions: 15
    },
    {
      name: "Website Design",
      startDate: { startDay: 25, startMonth: "October", startYear: 2020 },
      endDate: { endDay: 19, endMonth: "February", endYear: 2020 },
      weeks: 4,
      sessions: 12
    },
    {
      name: "Mobile App Development",
      startDate: { startDay: 25, startMonth: "March", startYear: 2020 },
      endDate: { endDay: 19, endMonth: "August", endYear: 2020 },
      weeks: 5,
      sessions: 15
    },
    {
      name: "Website Design",
      startDate: { startDay: 25, startMonth: "October", startYear: 2020 },
      endDate: { endDay: 19, endMonth: "February", endYear: 2020 },
      weeks: 4,
      sessions: 12
    },
    {
      name: "Mobile App Development",
      startDate: { startDay: 25, startMonth: "March", startYear: 2020 },
      endDate: { endDay: 19, endMonth: "August", endYear: 2020 },
      weeks: 5,
      sessions: 15
    },
    {
      name: "Website Design",
      startDate: { startDay: 25, startMonth: "October", startYear: 2020 },
      endDate: { endDay: 19, endMonth: "February", endYear: 2020 },
      weeks: 4,
      sessions: 12
    }
  ]);
  const [clickedItem, setClickedItem] = useState(-1);
  const [down, setDown] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [weeks, setWeeks] = useState("");
  const createHandler = () => {
    let startDate = new Date(start);
    let endDate = new Date(end);
    let startDay = startDate.getDate();
    let endDay = endDate.getDate();
    let startMonth = startDate.toLocaleString("en-US", { month: "long" });
    let endMonth = endDate.toLocaleString("en-US", { month: "long" });
    let startYear = startDate.getFullYear();
    let endYear = endDate.getFullYear();
    let sessions = weeks * 3;
    let scheduleData = {
      name,
      startDate: { startDay, startMonth, startYear },
      endDate: { endDay, endMonth, endYear },
      weeks,
      sessions,
    };
    setDataArray([...dataArray, scheduleData]);
    setName("");
    setStart("");
    setEnd("");
    setWeeks("");
    handleClose();
  };
  const dropdown = (index) => {
    if (down) {
      setClickedItem(-1);
      setDown(false);
    }
    else{
      setClickedItem(index);
      setDown(true);

    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Button
          onClick={handleShow}
          style={{ backgroundColor: "#4eb93e", borderColor: "#4eb93e" }}
        >
          Create a New Job
        </Button>
        <input type="text" placeholder="Search a Job" />
      </div>
      <Container className="mt-4">
        {dataArray.map((item, index) => {
          return (
            <Row
              key={index}
              className="bg-light rounded align-items-center py-2 mt-3"
            >
              <Col xs={6}>
                <p className="mb-0" style={{ fontWeight: "bold" }}>
                  {item.name}
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "0.8rem", color: "grey" }}
                >
                  {item.weeks} weeks | {item.sessions} sessions
                </p>
              </Col>
              <Col xs={6} className="fs-5 d-flex align-items-center justify-content-end">
                {clickedItem === index ? (
                  <>
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="mx-2 text-secondary"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="mx-2 text-danger"
                    />
                  </>
                ) : null}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => {
                    dropdown(index);
                  }}
                  className="fs-3 mx-2 text-success"
                  style={
                    clickedItem === index
                      ? { transform: "rotateX(180deg)", cursor: "pointer" }
                      : { transform: "rotateX(0deg)", cursor: "pointer" }
                  }
                />
              </Col>
              {clickedItem === index ? (
                <div style={{ borderTop: "2px solid lightgrey" }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex mt-4">
                      <div>
                        <p
                          className="mb-0"
                          style={{ fontSize: "0.8rem", color: "grey" }}
                        >
                          START DATE
                        </p>
                        <p
                          className="mb-0"
                          style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                        >
                          {item.startDate.startDay} {item.startDate.startMonth}{" "}
                          {item.startDate.startYear}
                        </p>
                      </div>
                      <div className="mx-5">
                        <p
                          className="mb-0"
                          style={{ fontSize: "0.8rem", color: "grey" }}
                        >
                          END DATE
                        </p>
                        <p
                          className="mb-0"
                          style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                        >
                          {item.endDate.endDay} {item.endDate.endMonth}{" "}
                          {item.endDate.endYear}
                        </p>
                      </div>
                    </div>
                    <Button
                      style={{
                        backgroundColor: "#4eb93e",
                        borderColor: "#4eb93e",
                      }}
                    >
                      Update
                    </Button>
                  </div>
                  <ul style={{listStyle: "none"}} className="my-4 d-flex flex-wrap justify-content-between">
                    <li
                      className="p-3 rounded parent"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      <input
                        type="checkbox"
                        id="sunday"
                        className="checkboxes checkbox-circle"
                      />
                      &nbsp;&nbsp;
                      <label
                        for="sunday"
                        style={{
                          fontSize: "0.9rem",
                          color: "grey",
                          fontWeight: "bold",
                        }}
                      >
                        SUNDAY
                      </label>
                    </li>
                    <li
                      className="p-3 rounded parent"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      <input
                        type="checkbox"
                        className="checkboxes"
                        id="monday"
                      />
                      &nbsp;&nbsp;
                      <label
                        for="monday"
                        style={{
                          fontSize: "0.9rem",
                          color: "grey",
                          fontWeight: "bold",
                        }}
                      >
                        MONDAY
                      </label>
                    </li>
                    <li
                      className="p-3 rounded parent"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      <input
                        type="checkbox"
                        className="checkboxes"
                        id="tuesday"
                      />
                      &nbsp;&nbsp;
                      <label
                        for="tuesday"
                        style={{
                          fontSize: "0.9rem",
                          color: "grey",
                          fontWeight: "bold",
                        }}
                      >
                        TUESDAY
                      </label>
                    </li>
                    <li
                      className="p-3 rounded parent"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      <input
                        type="checkbox"
                        className="checkboxes"
                        id="wednesday"
                      />
                      &nbsp;&nbsp;
                      <label
                        for="wednesday"
                        style={{
                          fontSize: "0.9rem",
                          color: "grey",
                          fontWeight: "bold",
                        }}
                      >
                        WEDNESDAY
                      </label>
                    </li>
                    <li
                      className="p-3 rounded parent"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      <input
                        type="checkbox"
                        className="checkboxes"
                        id="thursday"
                      />
                      &nbsp;&nbsp;
                      <label
                        for="thursday"
                        style={{
                          fontSize: "0.9rem",
                          color: "grey",
                          fontWeight: "bold",
                        }}
                      >
                        THURSDAY
                      </label>
                    </li>
                    <li
                      className="p-3 rounded parent"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      <input
                        type="checkbox"
                        className="checkboxes"
                        id="friday"
                      />
                      &nbsp;&nbsp;
                      <label
                        for="friday"
                        style={{
                          fontSize: "0.9rem",
                          color: "grey",
                          fontWeight: "bold",
                        }}
                      >
                        FRIDAY
                      </label>
                    </li>
                    <li
                      className="p-3 rounded parent"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      <input
                        type="checkbox"
                        className="checkboxes"
                        id="saturday"
                      />
                      &nbsp;&nbsp;
                      <label
                        for="saturday"
                        style={{
                          fontSize: "0.9rem",
                          color: "grey",
                          fontWeight: "bold",
                        }}
                      >
                        SATURDAY
                      </label>
                    </li>
                  </ul>
                </div>
              ) : null}
            </Row>
          );
        })}
      </Container>
      <Modal show={show} size="lg" onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
            Job Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <br />
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div>
              <label style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                Start Date
              </label>
              <br />
              <input
                type="date"
                className="form-control"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="Start Date"
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                End Date
              </label>
              <br />
              <input
                type="date"
                className="form-control"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                placeholder="End Date"
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                Enter No. of weeks
              </label>
              <br />
              <input
                type="number"
                className="form-control"
                value={weeks}
                onChange={(e) => setWeeks(e.target.value)}
                placeholder="Enter No. of weeks"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button
            className="text-secondary"
            style={{
              width: "40%",
              backgroundColor: "lightgrey",
              borderColor: "lightgrey",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{
              width: "40%",
              backgroundColor: "#4eb93e",
              borderColor: "#4eb93e",
            }}
            onClick={createHandler}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Teams;
