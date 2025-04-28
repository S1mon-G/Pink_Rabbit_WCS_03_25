import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root") || document.body).render(<App />);

/*import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router"; 
import "./index.css";
import router from "./router/Router";

const rootElement = document.getElementById("root");
if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}*/
