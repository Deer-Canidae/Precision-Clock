import { defineConfig, PluginOption } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import handlebars from "vite-plugin-handlebars"

const env = process.env;

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: "inline",
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
            sizes: "any",
            purpose: "maskable"
          }
        ]
        
      }
    }),
    handlebars({
      context: {
        "gSiteKey": env.GSITE_KEY ?? ""
      }
    }) as PluginOption
  ]
});
