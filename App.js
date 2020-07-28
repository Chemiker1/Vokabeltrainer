/*import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//***Variablen***
  //**Farben**
    var dunkelgrau = "#111";
    var weiss = "white";

export default function App() {
  return (
    <View style={styleBackground.container}>
      <Text style={styleText.container}>Die App funktioniert erfolgreich!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styleBackground = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dunkelgrau,
    alignItems: "center",
    justifyContent: "center",
  },
});

const styleText = StyleSheet.create({
  container: {
    color: weiss,
  },
});*/


import * as React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { BildschirmeFunct } from "./components/Navigator";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  //vector-icons und expo-font muessen vor dem Rendern mit native-base geladen werden
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ loading: true });
  }

  render() {
    if (!this.state.loading) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <BildschirmeFunct />
      </NavigationContainer>
    );
      /*<Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Grid
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Row>
            <Text>This is Content Section</Text>
          </Row>
          <Row>
            <Text>Hello World</Text>
          </Row>
        </Grid>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );*/
  }
}