import React, { createContext, useState } from "react"

/*
    This is the juicy part. To render the preview,
    every file path needs to be converted to a blob url.
    
    To avoid loading them all the time, we cache them into a map.
    If we have a cached version, we use that instead of fetching
    from disk again.

    Unmounting the cache should be avoided, as it will clear the
    cache. It should be a child of the redux store
*/

export const previewCacheContext = createContext({
  cache: new Map(),
  setCache: () => {
    console.error("No cache provider")
  },
})

const PreviewCacheProvider = ({ children }) => {
  const [cache, setCache] = useState(new Map())

  return (
    <previewCacheContext.Provider
      value={{
        cache,
        setCache,
      }}
    >
      {children}
    </previewCacheContext.Provider>
  )
}

export default PreviewCacheProvider
