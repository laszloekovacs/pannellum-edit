import React from "react"

const FileSave = (event) => {
  // save the repo to the file system
  const handleSave = async (event) => {
    const opts = {
      types: [
        {
          description: "JSON text file",
          accept: { "text/json": [".json"] },
        },
      ],
    }

    const content = JSON.stringify({ hello: "world" })

    try {
      // pick a save file
      const writable = await (
        await window.showSaveFilePicker(opts)
      ).createWritable()

      await writable.write(content)
      console.log("writing")
      await writable.close()
      console.log("closing")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button
        className="hover:bg-purple-600 bg-purple-400 px-2 "
        onClick={handleSave}
      >
        save
      </button>
    </>
  )
}

export default FileSave
