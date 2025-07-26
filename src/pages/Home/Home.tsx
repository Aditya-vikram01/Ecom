import Carousel from '@/(components)/Carousel/Carousel';
import Footer from '@/(components)/Footer/Footer';
import Header from '@/(components)/Header/Header';
import Hero from '@/(components)/Hero/Hero';
import Main from '@/(components)/Main/Main';

const Home = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const arr2 = [1, 2, 3];
  return (
    <>
      <div className='bg-gray-100'>
        <Header />
        <Carousel />
        <div className='mt-15'>
          <Main arr={arr} />
        </div>
        <div className='mt-15'>
          <Hero />
        </div>
        <div className='mt-15'>
          <Main arr={arr2} />
        </div>
        <div className='mt-15'>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
