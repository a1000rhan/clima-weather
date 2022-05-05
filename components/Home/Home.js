import React, { useState, useEffect } from "react";
import { Button, Spinner } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import data from "../../store";
import Card from "./Card";

const Home = () => {
  // const cond = ["clouds", "rain", "dust", "sunny"];

  if (data.loading) {
    <Spinner style={styles.wait} />;
    <Text style={styles.wait}>Loading</Text>;
  }
  const [weather, setWeather] = useState(data.weather);

  const theCond = async () => {
    await data.getLocation();
    setWeather(data.weather);
  };
  return (
    <ImageBackground
      style={styles.bk}
      source={{
        uri: "https://img.freepik.com/free-photo/cloud-blue-sky_1232-3108.jpg?w=1800&t=st=1651264108~exp=1651264708~hmac=0cef9ed8a091786a7d5a11bf0e0e1672961c239daf5f933b2e71fb6edbceb858",
      }}
    >
      <SafeAreaView>
        <Card myWeather={weather} />
        <Button marginTop={10} onPress={theCond}>
          Get my Location
        </Button>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  bk: {
    width: "100%",
    height: "100%",
  },
  wait: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
