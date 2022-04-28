import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Platform,
} from "react-native";

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>DetailsScreen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.push("Home")}
      />
    </View>
  );
}
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
