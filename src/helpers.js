// trim file extension from filename string
export function trimFileExtension(filename) {
  return filename.replace(/\.[^/.]+$/, "")
}
