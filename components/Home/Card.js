import { Spinner } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import data from "../../store";

const Card = ({ myWeather }) => {
  console.log("🚀 ~ file: Card.js ~ line 7 ~ Card ~ myWeather", myWeather);
  data.loading && <Spinner />;
  const [temper, SetTemper] = useState(
    Math.round(myWeather.main?.temp - 273.15)
  );
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{myWeather.name}</Text>
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
    backgroundColor: "grey",
  },
  temp: {
    fontSize: 60,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
