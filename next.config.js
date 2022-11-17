/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
dotenvLoad();
const withNextEnv = nextEnv();

module.exports = withNextEnv();
