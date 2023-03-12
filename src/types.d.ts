export {}

declare global {
  interface Window {
    showDirectoryPicker: ({ mode: string, startIn: string }) => Promise<FileSystemDirectoryHandle>
  }

  interface FileSystemDirectoryHandle {
    values: () => AsyncIterable<FileSystemFileHandle>
  }
}
