"use server";

import { Provider } from "@supabase/supabase-js";
import { createClientForServer } from "./server";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';

const signInWith = (provider: Provider) => async () => {
  const supabase = await createClientForServer();

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  console.log(data);

  if (error) {
    console.log(error);
  }

  redirect(data.url as string);
};

const signupWithEmailPassword = async (prev: any, formData: FormData) => {
  const supabase = await createClientForServer();

  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  console.log(data);
  if (error) {
    console.log("signupWithEmailPassword error", error);
    revalidatePath("/auth/signup");
    if (error.code === 'user_already_exists') {
      return { message: "이미 가입된 이메일입니다" };
    }
    
    return { message: error.message || "회원가입 중 오류가 발생했습니다" };
  }

  redirect("/");
};

const signinWithEmailPassword = async (prev: any, formData: FormData) => {
  const supabase = await createClientForServer();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  console.log(data);

  if (error) {
    console.log("signinWithEmailPassword error", error);
    revalidatePath("/auth/signin");
    // 오류 코드에 따라 사용자 친화적인 메시지 반환
    if (error.code === 'invalid_credentials') {
      return { message: "잘못된 이메일 또는 비밀번호입니다" };
    }
    
    return { message: error.message || "로그인 중 오류가 발생했습니다" };
  } 
  
  redirect("/");
};



const signOut = async () => {
  const supabase = await createClientForServer();
  await supabase.auth.signOut();
};

const signInWithGoogle = signInWith("google");
const signInWithGithub = signInWith("github");

export { 
  signInWithGoogle, 
  signInWithGithub, 
  signupWithEmailPassword, 
  signinWithEmailPassword, 
  signOut
};