import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBasket } from 'lucide-react';

const AvCard = ({ item }: any) => {
  return (
    <>
      <div key={item}>
        <Card className='w-[500px]'>
          <CardHeader>
            <CardTitle>Flat 50%o ff</CardTitle>
          </CardHeader>
          <CardContent className='w-auto'>
            <img src='/images/swiper1.jpg' width={500} height={300} />
          </CardContent>
          <CardFooter className='flex items-center justify-center gap-4'>
            <span className='text-xl font-semibold'>$200</span>
            <CardAction>
              <ShoppingBasket />
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default AvCard;
