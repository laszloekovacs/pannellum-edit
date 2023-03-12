import React from "react"

/* redux */
import { store } from "./state/store"
import { Provider } from "react-redux"

/* context providers */
import AppContextProvider from "./contexts/AppContext"

/* layout */
import Layout from "./Layouts/Layout"
import Header from "./Layouts/Header"
import PreviewCacheProvider from "./contexts/PreviewCacheContext"

/*
  Root of the app, privides redux store and context providers.
  file handles are provided trough the context due to them having methods and 
  redux can't store them 
  */
function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContextProvider>
          <PreviewCacheProvider>
            <>
              <Header />
              <Layout />
            </>
          </PreviewCacheProvider>
        </AppContextProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default App
