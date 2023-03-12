import React from "react"

// redux
import { store } from "./state/store"
import { Provider } from "react-redux"

/* Components */
import WorkingDirectoriesProvider from "./contexts/WorkingDirectories"

/* layout */
import Layout from "./Layouts/Layout"
import Header from "./Layouts/Header"

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <WorkingDirectoriesProvider>
          <Header />
          <Layout />
        </WorkingDirectoriesProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default App
