import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Precision Clock",
        short_name: "Precision Clock",
        description: "A clock precise to the milisecond",
        lang: "zxx",
        background_color: "crimson",
        theme_color: "goldenrod",
        orientation: "any",
        icons: [
          {
            src: "./icon.svg",
            sizes: "any"
          }
        ]
        
      }
    })
  ]
});
