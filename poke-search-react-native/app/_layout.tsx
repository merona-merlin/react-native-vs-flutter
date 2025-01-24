import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack >
    <Stack.Screen name="index" options={{ title: 'List' }} />
    <Stack.Screen name="details/[id]" options={{ title: "Pokemon" }} />
  </Stack>;
}
