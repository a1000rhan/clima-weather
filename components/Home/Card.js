import { Spinner } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import data from "../../store";

const Card = ({ myWeather }) => {
  console.log(data.loading);
  if (data.loading) {
    <Spinner style={styles.wait} />;
  }

  const temper = Math.round(myWeather.main?.temp - 273.15);
  const condit = myWeather.weather?.map((we) => (
    <>
      <Image
        style={styles.ico}
        source={{ uri: `http://openweathermap.org/img/wn/${we.icon}@2x.png` }}
      />
      <Text style={styles.des}>{we.description}</Text>
    </>
  ));
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{myWeather.name}</Text>
      {condit}
      <Text style={styles.temp}>{temper}&deg; C</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.43)",
  },
  temp: {
    fontSize: 60,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  wait: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  des: {
    fontSize: 15,
    fontWeight: "bold",
  },
  ico: {
    width: 70,
    height: 70,
  },
});
