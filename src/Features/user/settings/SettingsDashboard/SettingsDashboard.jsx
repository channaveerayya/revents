import React from 'react'
import { Route, Redirect, Switch } from "react-router-dom";
import { Grid, Container } from 'semantic-ui-react'
import SettingsNav from '../SettingsNav/SettingsNav';
import BasicPage from "../BasicPage/BasicPage";
import AboutPage from "../AboutPage/AboutPage";
import PhotosPage from "../PhotosPage/PhotosPage";
import AccountPage from "../AccountPage/AccountPage";

import styles from "./SettingsDashboard.module.scss";

const SettingsDashboard = () => {
  const {SettingsDashboard}=styles
  return (
    <Container className={SettingsDashboard}>
      <Grid>
        <Grid.Column width={12}>
          <Switch>
            <Redirect exact from="/settings" to="/settings/basic" />
            <Route path="/settings/basic" component={BasicPage} />
            <Route path="/settings/about" component={AboutPage} />
            <Route path="/settings/photos" component={PhotosPage} />
            <Route path="/settings/account" component={AccountPage} />
          </Switch>
        </Grid.Column>
        <Grid.Column width={4}>
          <SettingsNav />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default SettingsDashboard
