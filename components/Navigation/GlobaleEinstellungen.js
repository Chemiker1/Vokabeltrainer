import React from "react";
import { Container, Text, Button } from "native-base";
import { Grid, Row } from "react-native-easy-grid";

export default class GlobaleEinstellungen extends React.Component {
    static navigationOptions = {
      title: "globale Einstellungen"
    };
    render() {
      return (
        <Container>
          <Grid
            style={{
              alignItems: "center"
            }}
          >
            <Row>
              <Text>globale Einstellungen</Text>
            </Row>
          </Grid>
        </Container>
      );
    }
  }