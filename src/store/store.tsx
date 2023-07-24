import React, { useContext } from "react";
import { UserModel } from "./listinfo";

class Store {
    userStore = new UserModel();
}

export const store = new Store();

export const StoreContext = React.createContext(store);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
