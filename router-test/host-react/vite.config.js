import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8002,
  },
  plugins: [
    federation({
			filename: 'remoteEntry.js',
			name: 'host_react',
			remotes: {
				remote: {
					type: 'module',
					name: 'remote',
					entry: 'http://localhost:8001/remoteEntry.js',
					entryGlobalName: 'remote',
					shareScope: 'default',
				},
			},
			shared: {
				react: {
					singleton: true,
				},
				'react-dom': {
					singleton: true,
				},
			},
		}),
    react()
  ],
  build: {
    target: 'esnext'
  }
})
