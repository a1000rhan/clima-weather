import React, { useState } from "react";
import { Button, Spinner } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import data from "../../store";
import Card from "./Card";

const Home = () => {
  data.loading && <Spinner />;
  console.log(data.weather);
  return (
    <View>
      <Card myWeather={data.weather} />
      <Button onPress={() => data.getLocation()}>Get my Location</Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
