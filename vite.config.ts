import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env
    },
    plugins: [react(), tsConfigPaths()],
    base: '/',
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/__test__/setupTests.tsx',
      testTimeout: 30000,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') 
      }
    }
}});