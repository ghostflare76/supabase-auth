"use client";

import { signInWithGoogle, signInWithGithub } from "@/utils/supabase/actions";

const AuthForm = () => {
  return (
    <form className="flex flex-col items-start gap-2">
      <button
        formAction={signInWithGoogle}
        className="border rounded px-2.5 py-2"
      >
        Sign in with Google
      </button>
      <button
        formAction={signInWithGithub}
        className="border rounded px-2.5 py-2"
      >
        Sign in with Github
      </button>
    </form>
  );
};

export default AuthForm;