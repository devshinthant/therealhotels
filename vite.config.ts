import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    esbuild: {
      drop: mode === "production" ? ["console", "debugger"] : [],
    },
  }
})
