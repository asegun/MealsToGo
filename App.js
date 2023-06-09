import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { ResturantsScreen } from "./src/features/resturants/screens/resturants.screen";

export default function App() {
  return (
    <>
      <ResturantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
