import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

const signupForm = z.object({
  email: z.string().email(),
  password: z.string(),
  managerName: z.string(),
  restarauntName: z.string(),
  phone: z.number(),
});
type signupForm = z.infer<typeof signupForm>;

export function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signupForm>();

  async function handleSignUp(data: signupForm) {
    console.log(data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Restaurante cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/signin"),
        },
      });
    } catch {
      toast.error("Algo de errado!");
    }
  }

  return (
    <>
      <div className="p-8">
        <Button asChild variant={"ghost"} className="absolute right-4 top-8">
          <Link to="/signin">Ja tem uma conta?</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Crie sua conta aqui!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                required={true}
                type="email"
                {...register("email")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Estabelecimento</Label>
              <Input
                id="text"
                required={true}
                type="text"
                {...register("restarauntName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Nome</Label>
              <Input
                id="text"
                required={true}
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                required={true}
                type="password"
                {...register("password")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Telefone</Label>
              <Input
                id="number"
                required={true}
                type="number"
                {...register("phone")}
              />
            </div>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a href="" className="underline">
                Termos de serviços
              </a>{" "}
              e{" "}
              <a href="" className="underline">
                políticas de privacidade
              </a>
            </p>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Criar acesso
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
