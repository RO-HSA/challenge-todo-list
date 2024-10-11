import Input from '@/components/UI/input';
import Label from '@/components/UI/label';

const Login = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2 className="text-4xl font-bold text-foreground">Login</h2>
        <div>
          <span>Insira suas credenciais para acessar sua conta</span>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input name="email" placeholder="Seu email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input name="password" placeholder="Sua senha" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
