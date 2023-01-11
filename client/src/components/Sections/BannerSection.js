
import spacex from './spacex.jpg';
function BannerSection() {
  return (
    <main className='container mx-auto px-6  flex-1 text-center  backdrop-blur-sm flex flex-row justify-between border-t-2 pt-4 mainBanner rounded-sm'>
      <div className='flex flex-col justify-center ml-32'>
      <h2 className="md:text-2xl lg:text-4xl uppercase">
        Welcome inside the world of 
      </h2>
      <h2 className="md:text-4xl lg:text-6xl uppercase text-slate-200 font-bold mb-8 spacexText">
        SpaceX
      </h2>
      </div>
     <div className="bannerSize border-2 rounded-full p-2 drop-shadow-2xl">
      <img src={spacex}  class=" rounded-full max-w-full h-auto align-middle border-none"></img>
     </div>
    </main>
  )
}
export default BannerSection;