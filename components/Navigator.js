import React from "react";
//import { Container, Text, Button } from "native-base";
//import { Grid, Row } from "react-native-easy-grid";
import { createStackNavigator } from '@react-navigation/stack';

//Import der Navigationsbildschirme
import Startbildschirm from "./Navigation/Startbildschirm";
import GlobaleEinstellungen from "./Navigation/GlobaleEinstellungen";
import Testprofil from "./Navigation/Testprofil";

const Bildschirme = createStackNavigator();

function BildschirmeFunct() {
  return(
    <Bildschirme.Navigator initialRouteName="Startbildschirm">
      <Bildschirme.Screen name="Startbildschirm" component={Startbildschirm}/>
      <Bildschirme.Screen name="Testprofil" component={Testprofil}/>
      <Bildschirme.Screen name="globale Einstellungen" component={GlobaleEinstellungen}/>
    </Bildschirme.Navigator>
  );
};

export {BildschirmeFunct};