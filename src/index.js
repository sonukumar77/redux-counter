import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import myStore from "./store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
