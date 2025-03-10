// src/app/auth/signup/page.tsx

import SignUpForm from "@/components/Forms/SignUpForm";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-pacifico text-gray-900">
          TranslateX
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          <Link href="/" className="font-medium text-blue-600 hover:text-blue-500 flex items-center justify-center">
            <i className="ri-home-line mr-1"></i>
            홈으로 돌아가기
          </Link>
        </p>
      </div>
      
      <div className="mt-8">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;