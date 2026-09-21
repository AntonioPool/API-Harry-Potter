import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Oculta la barra blanca superior que dice "index"
      }}
    />
  );
}