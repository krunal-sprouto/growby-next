import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config options here
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
