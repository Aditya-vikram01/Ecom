import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Instagram } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const handleRegisteMeClick = (data: any) => {
    console.log(data);
  };
  const handleLoginClick = () => {
    navigate('/signin');
  };

  return (
    <>
      <div className='bg-[url("/images/login-abstract.jpg")] bg-cover bg-center bg-no-repeat w-full min-h-screen flex justify-center items-center'>
        <Card className='w-200 backdrop-blur-sm bg-white/70 shadow-2xl'>
          <CardHeader className='font-semibold'>Let' us get to know each other!</CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(handleRegisteMeClick)}>
              <div>
                <Label htmlFor='email' className='mb-3'>
                  Email
                </Label>
                <Controller name='email' control={control} render={({ field }) => <Input placeholder='Email' {...field} />} />
              </div>
              <div className='mt-4'>
                <Label htmlFor='password' className='mb-3'>
                  Password
                </Label>
                <Controller name='password' control={control} render={({ field }) => <Input placeholder='Password' {...field} />} />
              </div>
              <div className='mt-4'>
                <Label htmlFor='confirmpassword' className='mb-3'>
                  Confirm Password
                </Label>
                <Controller name='confirmPassword' control={control} render={({ field }) => <Input placeholder='Confirm Password' {...field} />} />
              </div>
              <div>
                <div className='mt-6 mb-4'>
                  <Button className='cursor-pointer'>Hook me up</Button>
                </div>
                <span>
                  Already have a account?{' '}
                  <span onClick={handleLoginClick} className='font-semibold cursor-pointer'>
                    Login
                  </span>
                </span>
                <div className='mt-2'>
                  <span>or Sign up with these providers</span>
                  <div className='flex justify-center items-center gap-4 m-4'>
                    <Instagram className='text-2xl cursor-pointer' />
                    <Instagram className='text-2xl cursor-pointer' />
                    <Instagram className='text-2xl cursor-pointer' />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Register;
