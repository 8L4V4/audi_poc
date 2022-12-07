/** @type {import('next').NextConfig} */

const { isPropertyAccessChain } = require('typescript');

module.exports = {
  env: {
    apiUrl: "https://cdn.contentstack.io/v3/",
    api_key: process.env.CONTENTSTACK_API_KEY,
    access_token: process.env.CONTENTSTACK_DELIVERY_KEY,
    branch: "prod",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.contentstack.io"],
    dangerouslyAllowSVG: true
  }
};


// cs977d3899e2f44382c8f5adeb - delivery token
// blt504163b814fa9f8a - api key
// posting

// https://cdn.contentstack.io/v3/content_types/posting/entries?environment=dev_env&include_fallback=true
// https://cdn.contentstack.io/v3/content_types?include_count=false&include_branch=dev