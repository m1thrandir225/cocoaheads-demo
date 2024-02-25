import {Pressable, StyleSheet, useColorScheme} from "react-native";
import {Feather} from "@expo/vector-icons";
import {useCallback, useMemo} from "react";
import {Text} from "./Themed";
import * as WebBrowser from "expo-web-browser";

type SocialButtonProps = {
  social: "linkedin" | "github";
  icon: React.ComponentProps<typeof Feather>["name"];
} & React.ComponentProps<typeof Pressable>;

const SocialButton: React.FC<SocialButtonProps> = (props) => {
  const {social, icon, ...pressableProps} = props;

  const theme = useColorScheme();

  const iconColor = useMemo(() => {
    switch (social) {
      case "linkedin":
        return "#0077B5";
      case "github":
        return "#333";
    }
  }, [theme]);

  const socialUrl = useMemo(() => {
    switch (social) {
      case "linkedin":
        return "https://www.linkedin.com/in/sebastijanzindl/";
      case "github":
        return "";
    }
  }, [social]);

  const socialText = useMemo(() => {
    switch (social) {
      case "linkedin":
        return "Linked In";
      case "github":
        return "GitHub";
    }
  }, [social]);

  const handlePress = async () => {
    console.log("Opening", socialUrl);
    if (socialUrl) {
      const result = await WebBrowser.openBrowserAsync(socialUrl);
    }
  };
  return (
    <Pressable
      onPress={handlePress}
      style={({pressed}) => [
        styles.container,
        {
          borderColor:
            theme === "light"
              ? "rgba(0, 0, 0, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
        },
        pressed && {
          backgroundColor: "rgba(191, 191, 191, 0.5)",
        },
      ]}
      {...pressableProps}
    >
      <Feather name={icon} size={24} color={iconColor} />
      <Text style={styles.text}> {socialText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    alignItems: "flex-end",
    marginVertical: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SpaceMono",
  },
});

export default SocialButton;
