import {Button, StyleSheet} from "react-native";

import {Text, View} from "@/components/Themed";
import {ExternalLink} from "@/components/ExternalLink";
import * as WebBrowser from "expo-web-browser";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CocoaHeadsMK Meetup #14</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.descriptionContainer}>
        <Text>📍Location: Netaville, Skopje</Text>
        <Text>🗓️ Date: February 28, 2024</Text>
        <Text>🕕 Time: 18:00 - 20:00</Text>
        <Button
          title="🔗 More info"
          color={""}
          onPress={(e) => {
            e.preventDefault();

            WebBrowser.openBrowserAsync(
              "https://www.linkedin.com/events/cocoaheadsmkmeetup-147163836922325331968/comments/"
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  descriptionContainer: {
    justifyContent: "flex-start",
    gap: 16,
  },
});
