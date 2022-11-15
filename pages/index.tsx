import React from 'react';
import Head from 'next/head';
import AboutMe from 'module/home/components/About';
import InformationBlock from 'module/home/components/InformationBlock';
import Footer from 'module/home/components/Footer';
import Intro from 'module/home/components/Intro';
import { FromTheLeftAnimation } from 'common/animations';
import ExperienceSection from 'module/home/components/ExperienceSection';
import { useTranslation } from 'common/hooks/useTranslation';

export default function Home() {
  const translationData = useTranslation();

  if (translationData === undefined) return null;

  return (
    <>
      <Head>
        <title>Antoine Chevalier - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Fullstack web Developper living in Nice, freelancer, startup builder."
        />
      </Head>
      <div className="bg-[#131415] text-white min-h-screen overflow-hidden">
        <Intro intro={translationData.intro} />
        <div className="max-w-[1600px] m-auto">
          <main>
            <AboutMe about={translationData.about} />
            <ExperienceSection
              title={translationData.workExperiences.title}
              experiences={translationData.workExperiences.experiences}
            />
            <div className="flex flex-col gap-12 mt-8">
              <InformationBlock
                title={translationData.skills.title}
                skills={translationData.skills.skills}
                arrow
                gradient="linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)"
              />
              <InformationBlock
                title={translationData.technicalSkills.title}
                skills={translationData.technicalSkills.skills}
                gradient="linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)"
                reverse
              />
              <div
                className="w-[90%] m-auto p-6 md:p-12 rounded-lg flex flex-col gap-4 overflow-hidden"
                style={{
                  background:
                    'linear-gradient(108deg, rgba(152,96,221,1) 0%, rgba(210,141,169,1) 72%)',
                }}
              >
                <FromTheLeftAnimation>
                  <h4 className="text-3xl font-semibold">
                    {translationData.contact.title}
                  </h4>
                </FromTheLeftAnimation>
                <FromTheLeftAnimation>
                  <p className="font-light">
                    {translationData.contact.description}
                  </p>
                </FromTheLeftAnimation>
                <FromTheLeftAnimation>
                  <div className="mt-2">
                    <a
                      href="mailto:antoinechevalier.work@protonmail.com"
                      className="bg-[#131415] text-[#8A24FF] text-md py-3 px-4 rounded-full font-bold"
                    >
                      {translationData.contact.callToAction} →
                    </a>
                  </div>
                </FromTheLeftAnimation>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
