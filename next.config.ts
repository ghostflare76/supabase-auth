import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 빌드 시 ESLint 오류를 무시하도록 설정
    ignoreDuringBuilds: true,
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
    // NODE_TLS_REJECT_UNAUTHORIZED는 next.config.ts의 env에서 허용되지 않으므로 제거
    // 대신 .env.local 또는 .env.development 파일에 설정하거나 
    // 애플리케이션 시작 전에 환경 변수로 설정해야 합니다.
  },
};

export default nextConfig;
