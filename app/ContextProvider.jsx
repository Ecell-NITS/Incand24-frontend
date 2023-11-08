"use client";

import { ContextProvider } from "./components/Context/CreateContext";

const ContProvider = ({ children }) => <ContextProvider>{children}</ContextProvider>;

export default ContProvider;
