import type { NextConfig } from "next";

import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */

    sassOptions:{
      includePaths:[path.join(__dirname, 'src/sass')],
      // prependData:`@import "main.sass"`,
    },
    images:{
      remotePatterns:[{
        hostname: 'cdn.shopify.com',
        protocol: 'https',
        
      }
    
    ],qualities: [30,50,75,100],
      
    }
};

export default nextConfig;
