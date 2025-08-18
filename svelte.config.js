import vercel from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-node';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
let config;

if (process.env.ADAPTER === 'vercel') {
  config = {
    kit: {
      adapter: vercel({
        runtime: 'nodejs20.x'
      })
    }
  };
} else if (process.env.ADAPTER === 'static') {
  config = {
    kit: {
      adapter: staticAdapter({
        pages: 'build',
        assets: 'build',
        fallback: null,
        precompress: false
      }),
      prerender: {
        default: true
      }
    }
  };
} else {
  config = {
    kit: {
      adapter: adapter({
        out: 'build'
      })
    }
  };
}


export default config;

// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV;
const dev = mode === "development";
process.env.TAILWIND_MODE = dev ? "watch" : "build";


