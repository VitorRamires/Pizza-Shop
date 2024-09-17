import { api } from "@/lib/axios";

export interface SigninBody {
  email: string;
}

export async function signinAction({ email }: SigninBody) {
  await api.post("/authenticate", { email });
}
