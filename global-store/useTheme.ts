import { PaletteMode } from "@mui/material";
import createStore from "zustand";
import persist from "../config/persist";

type Store = {
  mode: PaletteMode;
  toggleMode: () => void;
};

let modeType = false;
if (typeof window !== "undefined") {
  modeType = window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const useTheme = createStore<Store>(
  persist(
    {
      key: "theme",
    },
    (set) => ({
      mode: modeType ? "dark" : "light",
      toggleMode() {
        set((state) => ({
          ...state,
          mode: state.mode === "dark" ? "light" : "dark",
        }));
      },
    })
  )
);

export default useTheme;
