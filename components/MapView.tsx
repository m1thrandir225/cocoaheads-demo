import * as Haptics from "expo-haptics";
import {useMemo} from "react";
import {StyleSheet, View, useColorScheme} from "react-native";
import MapView, {MapMarker, type Region} from "react-native-maps";
type MapViewProps = {};

const Map: React.FC<MapViewProps> = () => {
  const initialRegion = useMemo<Region>(() => {
    return {
      latitude: 42.00547521241869,
      longitude: 21.410438426003015,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
  }, []);

  const onMoveHapticFeedback = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPanDrag={onMoveHapticFeedback}
        renderToHardwareTextureAndroid
        onRegionChange={onMoveHapticFeedback}
        userInterfaceStyle={useColorScheme() === "dark" ? "dark" : "light"}
      >
        <MapMarker
          coordinate={initialRegion}
          title="CocoaHeadsMK"
          description="Currently at Netavile!"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
