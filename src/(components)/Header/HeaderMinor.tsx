import { NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList } from '../../components/ui/navigation-menu';
import { useNavigate } from 'react-router-dom';
const MinorHeader = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className='w-full flex items-center justify-between px-6 py-2'>
      {/* Left Section - FIXED: Constrained width */}
      <div className='flex items-center gap-3 w-fit'>
        <div className='text-sm font-medium whitespace-nowrap'>Feel Good</div>
      </div>

      {/* Right Section - Now has proper space */}
      <div className='flex items-center gap-3'>
        <NavigationMenu className='w-fit max-w-none'>
          <NavigationMenuList className='w-fit max-w-none'>
            <div className='flex gap-3 items-center'>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-sm font-medium cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-2 py-1'>
                  Find A Store
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-sm font-medium cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-2 py-1'>
                  Help
                </NavigationMenuTrigger>
                <NavigationMenuContent className='min-w-[300px]'>
                  <div className='p-6'>
                    <ul className='space-y-3'>
                      <li className='text-sm font-semibold text-gray-900 mb-4'>Get Help</li>
                      <li className='text-sm text-gray-700 hover:text-black cursor-pointer transition-colors'>Order Status</li>
                      <li className='text-sm text-gray-700 hover:text-black cursor-pointer transition-colors'>Delivery</li>
                      <li className='text-sm text-gray-700 hover:text-black cursor-pointer transition-colors'>Returns</li>
                      <li className='text-sm text-gray-700 hover:text-black cursor-pointer transition-colors'>Contact Us</li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-sm font-medium cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-2 py-1'>
                  Join Us
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className='text-sm font-medium cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-2 py-1'
                  onClick={handleSignInClick}
                >
                  Sign In
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
export default MinorHeader;
