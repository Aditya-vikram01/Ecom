import AvCard from '../Card/Card';

const Main = ({ arr }: any) => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {arr?.map((item: any) => (
          <AvCard item={item}/>
        ))}
      </div>

      {/* <AvCard /> */}
    </>
  );
};
export default Main;
