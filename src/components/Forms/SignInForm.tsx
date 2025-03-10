"use client";

import { signinWithEmailPassword, signInWithGoogle, signInWithGithub } from "@/utils/supabase/actions";
import { useActionState } from "react";
import Link from "next/link";

const SignInForm = () => {
  const [error, formAction, isPending] = useActionState(
    signinWithEmailPassword,
    null
  );

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">로그인</h1>
      <div className="space-y-4">
        <form action={signInWithGoogle}>
          <button 
            type="submit"
            className="w-full bg-white text-gray-800 flex items-center justify-center space-x-3 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer border border-gray-200"
          >
            <i className="ri-google-fill text-xl" style={{ color: "#4285F4" }}></i>
            <span>Google로 계속하기</span>
          </button>
        </form>
        
        <form action={signInWithGithub}>
          <button 
            type="submit"
            className="w-full bg-gray-700 text-white flex items-center justify-center space-x-3 py-3 rounded-lg hover:bg-gray-600 transition cursor-pointer"
          >
            <i className="ri-github-fill text-xl" style={{ color: "#ffffff" }}></i>
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
            <div className="relative">
              <i className="ri-mail-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="이메일"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <i className="ri-lock-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
                type="password"
                name="password"
                placeholder="비밀번호"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isPending} 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer flex items-center justify-center"
          >
            {isPending ? (
              <>
                <i className="ri-loader-4-line animate-spin mr-2"></i>
                처리 중...
              </>
            ) : (
              <>
                <i className="ri-login-box-line mr-2"></i>
                이메일로 로그인
              </>
            )}
          </button>
          {error && (
            <div className="text-red-500 text-sm flex items-center">
              <i className="ri-error-warning-line mr-1"></i>
              {error.message}
            </div>
          )}
        </form>
        
        <p className="text-center text-gray-600 mt-4">
          계정이 없으신가요?
          <Link href="/auth/signup" className="text-blue-600 hover:text-blue-400 ml-1">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;