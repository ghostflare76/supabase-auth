"use client";

import { signInWithGoogle, signInWithGithub } from "@/utils/supabase/actions";
import Link from "next/link";

const AuthForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">TranslateX에 오신 것을 환영합니다</h1>
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
        
        <div className="space-y-4">
          <Link href="/auth/signin" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer flex items-center justify-center">
            <i className="ri-mail-line mr-2"></i>
            이메일로 로그인
          </Link>
          <Link href="/auth/signup" className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition cursor-pointer flex items-center justify-center">
            <i className="ri-user-add-line mr-2"></i>
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;