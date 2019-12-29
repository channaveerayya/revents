import React from 'react'
import "./EventDetailed.scss";
import { Grid, Container } from 'semantic-ui-react';

import EventDetailedHeader from "./EventDetailedHeader/EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo/EventDetailedInfo";
import EventDetailedChats from "./EventDetailedChats/EventDetailedChats";
import EventDetailedSidebar from "./EventDetailedSidebar/EventDetailedSidebar";
import { connect } from 'react-redux';


const EventDetailed = ({event}) => {
  return (
    <Container className="EventDetailed">
      <Grid>
        <Grid.Column width={10}>
          <EventDetailedHeader event={event} />
          <EventDetailedInfo event={event} />
          <EventDetailedChats />
        </Grid.Column>

        <Grid.Column width={6}>
          <EventDetailedSidebar attendees={event.attendees} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state, ownProps ) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  }

}


export default connect(mapStateToProps) (EventDetailed)
