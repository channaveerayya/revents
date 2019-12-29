import React, { Component } from "react";
import {connect} from 'react-redux'
import { Grid} from "semantic-ui-react";
import EventList from "../EventLists/EventList/EventList";
import { createEvent,deleteEvent,updateEvent } from "../eventActions";
class EventDashboard extends Component {

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };
  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column
          width={12}
          style={{
            overflow: "scroll",
            height: "92vh",
            paddingLeft: "2rem"
          }}
        >
          <EventList
            events={events}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column
          width={4}
          style={{
            overflow: "scroll",
            height: "92vh",
            paddingRight: "2rem"
          }}
        >
         <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  events:state.events
})

const mapDispatchToProps = {
  createEvent,
  deleteEvent,
  updateEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
