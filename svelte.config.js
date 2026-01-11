import adapter from '@sveltejs/adapter-auto';

/** @type {import('sveltekit').Config} */
const config = {
  kit: {
    adapter: adapter()
  }
};

export default config;