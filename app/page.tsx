import Hero from './component/Hero';
import Newest from './component/Newest';

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:">
      <Hero />
      <Newest />
    </div>
  );
}
