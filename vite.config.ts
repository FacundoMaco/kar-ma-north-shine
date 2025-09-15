import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Optional dev-only plugin. Loaded dynamically in development to avoid build failures when absent.

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    try {
      const { componentTagger } = await import("lovable-tagger");
      plugins.push(componentTagger());
    } catch {
      // Ignore if the plugin is not installed in this environment
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    define: {
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
      __COMMIT_HASH__: JSON.stringify(process.env.VERCEL_GIT_COMMIT_SHA || process.env.COMMIT_SHA || "local"),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
