import React, { useContext, useEffect, useState } from "react"

/* app context */
import { appContext } from "../contexts/AppContext"

/* components */
import PanoramaItem from "./PanoramaItem"

const PanoramaList = () => {
  const projectRoot = useContext(appContext).projectRoot

  const [files, setFiles] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        let filelist = []

        // get directory handle for panoramas folder
        const dir = await projectRoot.getDirectoryHandle("panoramas", {
          create: false,
        })

        // list all filenames in panoramas folder
        for await (const entry of dir.values()) {
          // list only jpeg files
          if (entry.kind === "file" && (entry.name.endsWith(".jpg") || entry.name.endsWith(".jpeg"))) {
            // load file into blob and create an object url for it
            const blob = await entry.getFile()

            const item = {
              name: entry.name,
              url: URL.createObjectURL(blob),
            }

            filelist.push(item)
            console.log(item)
          }
        }

        setFiles(filelist)
      } catch (error) {
        console.log(error)
        setFiles([])
      }
    })()

    return () => {
      // clean up files
      setFiles([])
    }
  }, [])

  return (
    <div>
      <ul>
        {files.map((item) => (
          <PanoramaItem key={item.name} item={item.name} url={item.url} />
        ))}
      </ul>
    </div>
  )
}

export default PanoramaList
