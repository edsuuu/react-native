import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack >
      <Stack.Screen name="index" options={{ title: "Users" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
}
