import React from "react";
import { Button } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import data from "../../store";

const Home = () => {
  const myWeather = data.weather.main.temp;
  return (
    <View>
      <Text>Hello</Text>
      <Text>{myWeather}</Text>
      <Button onPress={() => data.getLocation()}>Show me my Location</Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
