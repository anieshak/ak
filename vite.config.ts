import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(), {
    // Manual responsive checks when the preview browser cannot resize its window.
    // configureServer is development-only; this fixture is not built or published.
    name: 'responsive-preview',
    configureServer(server) {
      server.middlewares.use('/__qa/narrow', (_request, response) => {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.end(`<!doctype html><html lang="en"><head><meta charset="utf-8">
          <title>390px responsive preview</title><style>
          body{margin:0;background:#e2e8f0;font:16px system-ui}
          main{display:flex;gap:32px;justify-content:center;padding:20px}
          section{width:390px;flex-shrink:0}h1{font-size:16px}
          iframe{display:block;width:390px;height:1400px;border:0;background:black}
          </style></head><body><main>
          <section><h1>Homepage · 390px viewport</h1><iframe title="Narrow homepage" src="/"></iframe></section>
          <section><h1>Projects · 390px viewport</h1><iframe title="Narrow projects" src="/projects/"></iframe></section>
          </main></body></html>`);
      });
    },
  }],
  base:"/",
  server: {
    host: '0.0.0.0',
    allowedHosts: ['terminal.local'],
  },
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        projects: 'projects/index.html',
        buildNote: 'projects/buildnotes/index.html',
      },
    },
  },
})
