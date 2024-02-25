import {FlashList, type ListRenderItem} from "@shopify/flash-list";
import {StatusBar} from "expo-status-bar";
import {Platform, Pressable, StyleSheet, useColorScheme} from "react-native";

import * as ExpoImage from "expo-image";

import {Text, View} from "@/components/Themed";
import {useCallback} from "react";
import {Feather} from "@expo/vector-icons";
import SocialButton from "@/components/SocialButton";

type CatCarouselItem = {
  id: string;
  uri: number;
  blurhash: string;
};

const imageData: CatCarouselItem[] = [
  {
    id: "1",
    uri: require("../assets/images/benjamin.jpg"),
    blurhash: "LDCiRXT#AR,]?=^ji*Sgu3?HrbEe",
  },
  {
    id: "2",
    uri: require("../assets/images/benjamin3.jpg"),
    blurhash: "LYDvK9WYRlWA~SV|Rpad_3R*ajaw",
  },
  {
    id: "3",
    uri: require("../assets/images/benjamin2.jpg"),
    blurhash: "L5Eeodx^0KH?{w4m%fsX8xaJx[$g",
  },
];

export default function ModalScreen() {
  const renderCatItem = useCallback<ListRenderItem<CatCarouselItem>>(
    ({item}) => {
      return (
        <ExpoImage.Image
          source={item.uri}
          style={styles.image}
          placeholder={item.blurhash}
          contentFit="cover"
        />
      );
    },
    []
  );

  const renderSeparator = useCallback(() => {
    return <View style={{width: 16}} />;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, I'm Sebastijan Zindl</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.descriptionContainer}>
        <Text style={{textAlign: "center"}}>
          Here are some pictures of my cat, Benajmin 🐈
        </Text>
        <View style={{height: 265}}>
          <FlashList
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            bouncesZoom={false}
            data={imageData}
            keyExtractor={(item) => item.id}
            renderItem={renderCatItem}
            horizontal
            estimatedItemSize={233}
            ItemSeparatorComponent={renderSeparator}
            contentContainerStyle={{paddingHorizontal: 16}}
          />
        </View>
      </View>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Text style={styles.title}>Checkout my : </Text>

      <SocialButton icon="linkedin" social="linkedin" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    marginTop: 32,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  descriptionContainer: {
    gap: 16,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
