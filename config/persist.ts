import { configurePersist } from "zustand-persist";

const { persist, purge } = configurePersist({
  storage: typeof window !== "undefined" ? (window.localStorage as any) : {},
  rootKey: "app",
});

export default persist;
export { purge };
