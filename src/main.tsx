// react
import React from "react"
import ReactDOM from "react-dom/client"

//styling
import "./index.css"

// redux
import { store } from "./state/store"
import { Provider } from "react-redux"

// components
import App from "./App"
import WorkingDirectories from "./components/WorkingDirectories"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <WorkingDirectories>
        <App />
      </WorkingDirectories>
    </Provider>
  </React.StrictMode>
)
