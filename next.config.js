/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    apiUrl: "https://cdn.contentstack.io/v3/",
    api_key: "blt504163b814fa9f8a",
    access_token: "cs977d3899e2f44382c8f5adeb",
    branch: "dev",

  },
  reactStrictMode: true
};


// cs977d3899e2f44382c8f5adeb - delivery token
// blt504163b814fa9f8a - api key
// posting

// https://cdn.contentstack.io/v3/content_types/posting/entries?environment=dev_env&include_fallback=true
// https://cdn.contentstack.io/v3/content_types?include_count=false&include_branch=dev