import AboutMe from "../components/About";
import InformationBlock from "../components/InformationBlock";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className="bg-[#131415] text-white min-h-screen overflow-hidden">
      <Intro />
      <div className="max-w-[1600px] m-auto">
        <main>
          <AboutMe />
          <div className="flex flex-col gap-12 mt-8">
            <InformationBlock
              title="3+ years of experience"
              skills={[
                "Fullstack Development",
                "Mobile Development",
                "DevOps",
                "UI/UX Design",
              ]}
              arrow
              gradient="linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)"
            />
            <InformationBlock
              title="Technical Skills"
              skills={[
                "React.js",
                "Next.js",
                "Typescript",
                "Vue.js",
                "React Native",
                "Node.js",
                "Nest.js",
                "Python",
                "Flask",
              ]}
              gradient="linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)"
              reverse
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
