import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = {
  ssr: {
    noExternal: [
      'three', 
      'troika-three-text',
      'd3-array',
      'd3-format',
      'd3-geo',
      'd3-hierarchy',
      'd3-scale',
      'd3-shape',
      'layercake',
      'topojson-client'
    ]
  },
  optimizeDeps: {
    include: [
      'd3-array',
      'd3-format',
      'd3-geo',
      'd3-hierarchy',
      'd3-scale',
      'd3-shape',
      'layercake',
      'topojson-client'
    ]
  },
  plugins: [/*sentrySvelteKit({
      sourceMapsUploadOptions: {
        org: "1lev1",
        project: "front",
        authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
        cleanArtifacts: true,
        rewrite: false,
      },
    }),*/
    sveltekit(),
    tailwindcss()
  ]
};

export default config;