import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  requestUserPermission,
  notificationListner,
} from "./src/utils/notificationServices";

export default function App() {
  useEffect(() => {
    requestUserPermission();
    notificationListner();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 35 }}>
        React Native Push Notification
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
