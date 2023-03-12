/* trim file extension from filename */
export function trimFileExtension(filename) {
  return filename.replace(/\.[^/.]+$/, "")
}
