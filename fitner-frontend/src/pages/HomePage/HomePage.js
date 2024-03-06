import React from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useConvexAuth } from "convex/react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/Auth/LoginButton";
const HomePage = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user } = useAuth0();
  return (
    <Container>
      <div className="welcome-section">
        <h1>Welcome to AI Fitness Trainer</h1>
        <TypeAnimation
          sequence={[
            "Based on your Daily Routine,the AI personalized your workouts Daily.",
            1000,
            "Based on your Daily Routine,the AI personalized your workouts Weekly.",
            1000,
            "Based on your Daily Routine,the AI personalized your workouts Monthly.",
            1000,
            "Based on your Daily Routine,the AI personalized your workouts Yearly.",
            1000,
            "Based on your Daily Routine,the AI personalized your Diet Plans.",
            1000,
            "And Many More......",
            1000,
          ]}
          wrapper="span"
          speed={45}
          style={{
            fontSize: "2em",
            display: "inline-block",
            height: "20vh",
            width: "50vw",
            color: "#ffffff",
          }}
          repeat={Infinity}
        />
         
       { isAuthenticated ? (

        <div>
            <Link to="/">
            <Button variant="primary">Get AI Reccomnedations</Button>
          </Link>
        </div>
          
        
          
        ) : (
          <LoginButton />
        )}
      </div>
    </Container>
  );
};

export default HomePage;
