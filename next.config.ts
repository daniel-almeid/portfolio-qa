  import type { NextConfig } from 'next';

  const prod = process.env.NODE_ENV === 'production';

  const config: NextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: prod ? '/portfolio-qa' : '',
  };
  export default config;