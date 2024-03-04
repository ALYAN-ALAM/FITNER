import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./components/Navbar/NavBar";
import { TypeAnimation } from "react-type-animation";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <div className="welcome-section">
              <h1>Welcome to AI Fitness Trainer Chatbot</h1>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Get personalized workouts Daily.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Get personalized workouts Weekly.",
                  1000,
                  "Get personalized workouts Monthly.",
                  1000,
                  "Get personalized workouts Yearly.",
                  1000,
                  "Get personalized Diet Plans.",
                  1000,
                  "And Many More......",
                  1000,
                ]}
                wrapper="span"
                speed={45}
                style={{
                  fontSize: "2em",
                  display: "inline-block",
                  color: "#2364aa",
                }}
                repeat={Infinity}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
