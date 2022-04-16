import React from "react";
import { Button, Spinner } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import data from "../../store";
import Card from "./Card";

const Home = () => {
  data.loading && <Spinner />;

  const myWeather = data.weather;
  return (
    <View>
      <Card myWeather={myWeather} />
      <Button onPress={() => data.getLocation()}>Get my Location</Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
