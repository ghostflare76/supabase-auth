"use client";

import { signupWithEmailPassword, signInWithGoogle, signInWithGithub } from "@/utils/supabase/actions";
import { useActionState } from "react";
import Link from "next/link";

const SignUpForm = () => {
  const [error, formAction, isPending] = useActionState(
    signupWithEmailPassword,
    null
  );

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">회원가입</h1>
      <div className="space-y-4">
        <form action={signInWithGoogle}>
          <button 
            type="submit"
            className="w-full bg-white text-gray-800 flex items-center justify-center space-x-3 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer border border-gray-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Google로 계속하기</span>
          </button>
        </form>
        
        <form action={signInWithGithub}>
          <button 
            type="submit"
            className="w-full bg-gray-700 text-white flex items-center justify-center space-x-3 py-3 rounded-lg hover:bg-gray-600 transition cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            <span>GitHub로 계속하기</span>
          </button>
        </form>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-white">또는</span>
          </div>
        </div>
        
        <form action={formAction} className="space-y-4">
          <div>
            <input
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="이메일"
            />
          </div>

          <div>
            <input
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              placeholder="비밀번호"
            />
          </div>

          <button 
            type="submit"
            disabled={isPending} 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            {isPending ? "처리 중..." : "회원가입"}
          </button>
          {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </form>
        
        <p className="text-center text-gray-600 mt-4">
          이미 계정이 있으신가요?
          <Link href="/auth/signin" className="text-blue-600 hover:text-blue-400 ml-1">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;