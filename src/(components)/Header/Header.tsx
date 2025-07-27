import { NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList } from '../../components/ui/navigation-menu';
import { Heart, Search, ShoppingBag } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Link } from 'react-router-dom';
import MinorHeader from './HeaderMinor';
import { navigationConfig } from '../../../SharedData/HeaderMenu';

const Header = () => {
  const renderSection = ({ section }: any) => (
    <ul className='space-y-2'>
      <li className='font-semibold text-gray-900 mb-3'>{section.title}</li>
      {section.items.map((item: any, index: number) => (
        <li key={index} className='text-gray-700 hover:text-black cursor-pointer'>
          <Link to={`/products/${item.slug}`} className='block w-full hover:text-black transition-colors'>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <MinorHeader />
      <div className='bg-white w-full flex items-center px-6 py-4'>
        {/* Left Section - Logo (Fixed Width) */}
        <div className='w-48 flex justify-start'>
          <Link to='/' className='text-2xl font-bold text-black cursor-pointer flex justify-center items-center gap-3'>
            <img src='./logo.svg' height={100} width={40} alt='Logo' />
            <span className='text-nowrap'>Relive your Moments</span>
          </Link>
        </div>

        {/* Center Section - Navigation Menu (Flexible but Constrained) */}
        <div className='flex-1 flex justify-center max-w-4xl mx-auto'>
          <NavigationMenu className='w-full max-w-none'>
            <NavigationMenuList className='w-full max-w-none'>
              <div className='flex gap-4 justify-center flex-wrap'>
                {Object.entries(navigationConfig).map(([key, menu]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className='font-semibold cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-3 py-2'>
                      {menu.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className='w-[1000px] grid grid-cols-4 gap-6 p-6'>
                        {Object.values(menu.sections).map((section, index) => (
                          <div key={index}>{renderSection(section)}</div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section - Actions (Fixed Width) */}
        <div className='w-auto flex justify-end items-center gap-4'>
          <div className='flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2 hover:bg-gray-200 transition-colors'>
            <Search className='w-4 h-4 text-gray-500' />
            <Input
              className='border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 w-32 placeholder:text-gray-500'
              placeholder='Search...'
            />
          </div>
          <Heart className='w-5 h-5 cursor-pointer hover:text-red-500 transition-colors' />
          <ShoppingBag className='w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors' />
        </div>
      </div>
    </>
  );
};

export default Header;
