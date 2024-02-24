import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FeatherIcons from "@expo/vector-icons/Feather";
import {Link, Tabs} from "expo-router";
import {Platform, Pressable} from "react-native";

import Colors from "@/constants/Colors";
import {useColorScheme} from "@/components/useColorScheme";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FeatherIcons>["name"];
  color: string;
}) {
  return (
    <FeatherIcons
      size={Platform.OS === "ios" ? 24 : 20}
      style={{marginBottom: -3}}
      {...props}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Event Location",
          tabBarIcon: ({color}) => <TabBarIcon name="compass" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({pressed}) => (
                  <FeatherIcons
                    name="grid"
                    size={24}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Event Info",
          tabBarIcon: ({color}) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
    </Tabs>
  );
}
