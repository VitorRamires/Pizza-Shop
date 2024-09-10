import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { toast } from "sonner";

const SigninForm = z.object({
  email: z.string().email(),
});
type SigninForm = z.infer<typeof SigninForm>;

export function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SigninForm>();

  async function handleSignup(data: SigninForm) {
    console.log(data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("sucesso!");
    } catch {
      toast.error("Algo de errado!");
    }
  }

  return (
    <>
      <div className="p-8">
        <Button asChild variant={"ghost"} className="absolute right-4 top-8">
          <Link to="/signup">Novo estabelecimento</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
