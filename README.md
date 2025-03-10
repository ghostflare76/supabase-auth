This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 환경 변수 설정

이 프로젝트는 다음과 같은 환경 변수를 사용합니다:

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase 프로젝트 URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase 익명 키
- `SITE_URL`: 사이트 URL (기본값: http://localhost:3000)
- `NODE_TLS_REJECT_UNAUTHORIZED`: SSL 인증서 검증 설정 (개발 환경에서만 '0'으로 설정)

개발 환경에서는 `.env.development` 파일에 환경 변수를 설정하고, 프로덕션 환경에서는 `.env.production` 파일을 사용합니다.
또한 `.env.local` 파일을 사용하여 모든 환경에서 공통으로 사용되는 환경 변수를 설정할 수 있습니다.

**참고**: `NODE_TLS_REJECT_UNAUTHORIZED=0` 설정은 개발 환경에서만 사용하고, 프로덕션 환경에서는 사용하지 마세요.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
