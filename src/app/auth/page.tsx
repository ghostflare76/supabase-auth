import AuthForm from "@/components/Forms/AuthForm";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div className="flex flex-col mx-auto gap-4 p-8">
      <Link href="/" className="underline">Home</Link>
      <Link href="/auth/signup" className="underline">Go to Sign up </Link>
      <Link href="/auth/signin" className="underline">Go to Sign in </Link>
     
      <AuthForm />
    </div>
  );
};

export default AuthPage;