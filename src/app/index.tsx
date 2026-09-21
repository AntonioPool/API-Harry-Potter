import { Text, View, StyleSheet } from "react-native";
import { api } from "@/api/client";

export default function Index() {

  const response = api.get('')
  console.log(response)
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
