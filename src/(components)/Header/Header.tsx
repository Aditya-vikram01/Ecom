import { NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList } from '../../components/ui/navigation-menu';
import { Heart, Search, ShoppingBag } from 'lucide-react';
import { Input } from '../../components/ui/input';
import MinorHeader from './HeaderMinor';

const Header = () => {
  return (
    <>
      <MinorHeader />
      <div className='bg-white w-full flex items-center px-6 py-4'>
        {/* Left Section - Logo (Fixed Width) */}
        <div className='w-48 flex justify-start'>
          <div className='text-2xl font-bold text-black cursor-pointer'>Logo</div>
        </div>

        {/* Center Section - Navigation Menu (Flexible but Constrained) */}
        <div className='flex-1 flex justify-center max-w-4xl mx-auto'>
          <NavigationMenu className='w-full max-w-none'>
            <NavigationMenuList className='w-full max-w-none'>
              <div className='flex gap-4 justify-center flex-wrap'>
                {/* New and Featured Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='font-semibold cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-3 py-2'>
                    New & Featured
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className='w-[1000px] grid grid-cols-4 gap-6 p-6'>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Featured</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shop All New Arrivals</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Best Sellers</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>SNKRS Launch Calendar</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Back to School Essentials</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Football Inspired Looks</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Club Kits</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>New Releases</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shop All New Arrivals</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Best Sellers</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>SNKRS Launch Calendar</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Back to School Essentials</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Football Inspired Looks</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Club Kits</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Shop Icons</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Air Force 1</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Air Jordan 1</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Air Max</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Dunk</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Pegasus</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Mercurial</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Discover Sport</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Football</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Running</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Basketball</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Training and Gym</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Golf</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Tennis</li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Men Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='font-semibold cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-3 py-2'>
                    Men
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className='w-[1000px] grid grid-cols-4 gap-6 p-6'>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Featured</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shop All Men</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>New Releases</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Best Sellers</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Member Exclusive</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Jordan</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Lifestyle</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Shoes</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>All Shoes</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Lifestyle</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Jordan</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Running</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Basketball</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Training</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Clothing</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>All Clothing</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Tops & T-Shirts</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shorts</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Hoodies & Sweatshirts</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Pants & Tights</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Jackets & Vests</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Sport</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Football</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Running</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Basketball</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Training</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Golf</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Tennis</li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Women Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='font-semibold cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-3 py-2'>
                    Women
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className='w-[1000px] grid grid-cols-4 gap-6 p-6'>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Featured</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shop All Women</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>New Releases</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Best Sellers</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Member Exclusive</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Jordan</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Lifestyle</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Shoes</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>All Shoes</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Lifestyle</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Jordan</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Running</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Training</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Yoga</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Clothing</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>All Clothing</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Tops & T-Shirts</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Sports Bras</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Hoodies & Sweatshirts</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Pants & Leggings</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shorts</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Sport</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Running</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Training</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Yoga</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Basketball</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Tennis</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Dance</li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Kids Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='font-semibold cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-3 py-2'>
                    Kids
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className='w-[1000px] grid grid-cols-4 gap-6 p-6'>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Featured</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shop All Kids</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>New Releases</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Best Sellers</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Jordan Kids</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Back to School</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Easy On & Off</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Boys</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>All Boys</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shoes</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Clothing</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Big Kids (7-15)</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Little Kids (4-7)</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Baby & Toddler</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Girls</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>All Girls</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shoes</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Clothing</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Big Kids (7-15)</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Little Kids (4-7)</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Baby & Toddler</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Sport</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Football</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Running</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Basketball</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Baseball</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Soccer</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Skateboarding</li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Sale Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='font-semibold cursor-pointer hover:text-gray-600 transition-colors whitespace-nowrap px-3 py-2'>
                    Sale
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className='w-[1000px] grid grid-cols-4 gap-6 p-6'>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Featured</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Best Deals</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Clearance</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Member Deals</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Last Chance</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>End of Season</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Men's Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>All Men's Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shoes</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Clothing</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Accessories</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Jordan Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Running Sale</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Women's Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>All Women's Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shoes</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Clothing</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Accessories</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Jordan Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Training Sale</li>
                      </ul>
                      <ul className='space-y-2'>
                        <li className='font-semibold text-gray-900 mb-3'>Kids' Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>All Kids' Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Boys' Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Girls' Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Shoes Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Clothing Sale</li>
                        <li className='text-gray-700 hover:text-black cursor-pointer'>Jordan Kids Sale</li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
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
