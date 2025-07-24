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
      <div >
        <Header />
        <Carousel />
        <Main arr={arr} />
        <Hero />
        <Main arr={arr2} />
        <Footer />
      </div>
    </>
  );
};
export default Home;
