import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Instagram } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { control } = useForm({});
  return (
    <div className='flex justify-center items-center min-h-screen bg-[url("/images/login-abstract.jpg")] bg-cover bg-center bg-no-repeat'>
      <Card className='w-150 backdrop-blur-sm bg-white/70 shadow-2xl'>
        <CardHeader>
          <CardTitle>Sign in to your Account</CardTitle>
          <CardDescription>Enter your email and password to sign in</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='mb-4'>
              <Controller name='email' control={control} render={({ field }) => <Input placeholder='Email' {...field} />} />
            </div>
            <div className='mb-4'>
              <Controller name='password' control={control} render={({ field }) => <Input placeholder='Password' {...field} />} />
            </div>
            <div className='flex justify-end items-center gap-4'>
              <span>
                <Link to={'/reset'}>Forgot your Password? </Link>
              </span>
            </div>
            <Button className='mb-4 cursor-pointer' size={'lg'}>
              Get Started
            </Button>
            <div>
                <span>or Sign in with these providers</span>
                <div className='flex justify-center items-center gap-4 m-4'>
                  <Instagram className='text-2xl cursor-pointer' />
                  <Instagram className='text-2xl cursor-pointer' />
                  <Instagram className='text-2xl cursor-pointer' />
                </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
