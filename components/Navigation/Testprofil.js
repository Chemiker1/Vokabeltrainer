import React from "react";
import { Container, Text, Button } from "native-base";
import { Grid, Row } from "react-native-easy-grid";

export default class Testprofil extends React.Component {
    static navigationOptions = {
      title: "Testprofil"
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
              <Text>Testprofil</Text>
            </Row>
          </Grid>
        </Container>
      );
    }
  }