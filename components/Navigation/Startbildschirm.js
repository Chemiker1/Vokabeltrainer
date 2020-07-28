import React from "react";
import { Container, Text, Button } from "native-base";
import { Grid, Row } from "react-native-easy-grid";

export default class Startbildschirm extends React.Component {
    static navigationOptions = {
      title: "Startbildschirm"
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
              <Text>Startbildschirm</Text>
            </Row>
            <Row>
              <Button onPress={() => this.props.navigation.navigate("Testprofil")}>
                <Text>Testprofil</Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate("globale Einstellungen")}>
                <Text>globale Einstellungen</Text>
              </Button>
            </Row>
          </Grid>
        </Container>
      );
    }
  }