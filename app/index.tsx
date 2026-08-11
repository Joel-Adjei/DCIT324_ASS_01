import { colors } from "@/config/colors";
import { ScrollView } from "react-native";
import Home from "./screens/home";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
      }}
    >
      <Home />
    </ScrollView>
  );
}
