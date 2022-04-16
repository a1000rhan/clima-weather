import * as Location from "expo-location";
import axios from "axios";
import { makeAutoObservable, configure } from "mobx";

configure({
  enforceActions: "never",
});

class Source {
  weather = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  getLocation = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission not granted",
          "Allow the app to use location service.",
          [{ text: "OK" }],
          { cancelable: false }
        );
      }

      let { coords } = await Location.getCurrentPositionAsync();

      if (coords) {
        const { latitude, longitude } = coords;
        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        this.loading = false;

        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=27938e851274fbdb39a19dc8c09410dc`
        );
        this.weather = res.data;
        console.log(
          "🚀 ~ file: store.js ~ line 43 ~ Source ~ getLocation= ~ this.weather",
          this.weather
        );
        this.loading = false;
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: store.js ~ line 42 ~ Source ~ getLocation= ~ error",
        error
      );
    }
  };
}
const data = new Source();
data.getLocation();
export default data;
