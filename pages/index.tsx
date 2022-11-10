import Footer from "../components/Footer";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className="bg-[#131415] text-white min-h-screen">
      <Intro />
      <div className="max-w-[1600px] m-auto">
        <Footer />
      </div>
    </div>
  );
}
