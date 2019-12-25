import React, { Component } from "react";
import { Button, Icon, Container } from "semantic-ui-react";
import Particles from "react-particles-js";
import EventDashboard from "../../Features/event/EventDashboard/EventDashboard";
import NavigationBar from "../../Features/Navigation/NavigationBar/NavigationBar";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Particles
            params={{
              particles: {
                number: {
                  value: 150
                },
                size: {
                  value: 1
                },
                color: {
                  value: "#566270"
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
            style={{
              position: "absolute",
              backgroundColor: "#383A3F",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          />
          <NavigationBar />
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
