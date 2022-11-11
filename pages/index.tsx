import AboutMe from "../components/About";
import InformationBlock from "../components/InformationBlock";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import FromTheLeftAnimation from "../components/animations/FromTheLeftAnimation";

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
            <div
              className="w-[90%] max-w-[800px] m-auto p-6 md:p-12 rounded-lg flex flex-col gap-4 overflow-hidden"
              style={{
                background:
                  "linear-gradient(108deg, rgba(152,96,221,1) 0%, rgba(210,141,169,1) 72%)",
              }}
            >
              <FromTheLeftAnimation>
                <h4 className="text-3xl font-semibold">Let&apos;s chat!</h4>
              </FromTheLeftAnimation>
              <FromTheLeftAnimation>
                <p className="font-light">
                  I&apos;d love to talk to you! Send me an email !
                </p>
              </FromTheLeftAnimation>
              <FromTheLeftAnimation>
                <div className="mt-2">
                  <a
                    href="mailto:antoinechevalier.work@protonmail.com"
                    className="bg-[#131415] text-[#8A24FF] text-md py-3 px-4 rounded-full font-bold"
                  >
                    Chat with me →
                  </a>
                </div>
              </FromTheLeftAnimation>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
