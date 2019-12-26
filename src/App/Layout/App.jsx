import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Particles from "react-particles-js";
import EventDashboard from "../../Features/event/EventDashboard/EventDashboard";
import NavigationBar from "../../Features/Navigation/NavigationBar/NavigationBar";
import HomePage from "../../Features/Home/Home";
import EventDetailed from "../../Features/event/EventDetailed/EventDetailed";
import PeopleDashboard from "../../Features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../Features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../Features/user/settings/SettingsDashboard/SettingsDashboard";
import EventForm from "../../Features/event/EventForm/EventForm";

import "./App.scss";
import { Fragment } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavigationBar />
              <Container fluid style={{marginTop:"5rem"}}>
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

                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailed} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </div>
    );
  }
}

export default App;
