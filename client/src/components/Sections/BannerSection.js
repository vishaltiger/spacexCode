
import spacex from './spacex.jpg';
function BannerSection() {
  return (
    <main className='container mx-auto px-6  flex-1 text-center  backdrop-blur-sm flex flex-row justify-between border-t-2 pt-4'>
      <div className='flex flex-col justify-center ml-32'>
        <h2 className="md:text-2xl lg:text-4xl uppercase">
          Welcome inside the world of
        </h2>
        <h2 className="md:text-4xl lg:text-6xl uppercase text-slate-200 font-bold mb-8 spacexText">
          SpaceX
        </h2>
      </div>
      <div className="bannerSize rounded-t-3xl drop-shadow-2xl overflow-hidden pt-2 pl-2 pr-2 border-t-2 border-l-2 boder-r-2 border-red bg-gray-300">
        <img src={spacex} class="max-w-full h-auto align-middle border-none rounded-t-3xl"></img>
      </div>
    </main>
  )
}
export default BannerSection;