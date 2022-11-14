import { Language } from '../types/language';
import AboutLightIllustration from '../assets/light-pink-bg.avif';
import AboutBlackIllustration from '../assets/dark-purple-bg.avif';
import KlubxIcon from '../assets/layers.png';
import JobexitIcon from '../assets/world.png';
import MLAIcon from '../assets/explore.png';

export const Data: Language = {
  intro: {
    title: 'Hi, I\'m Antoine',
    subTitle: [
      [
        {
          highlighted: false,
          data: 'a',
        },
        {
          highlighted: true,
          data: 'Fullstack Developper & AI enthusiast',
        },
        {
          highlighted: false,
          data: 'based in France, currently Freelancing and building project.',
        },
      ],
    ],
    callToAction: 'Chat with me',
  },
  about: {
    title: 'Know about me',
    data: [
      {
        illustration: {
          height: 'md:h-[500px]',
          image: AboutLightIllustration,
          text: '🇫🇷🏡📚',
        },
        text: [
          [
            {
              highlighted: false,
              data: 'I was born and raised in',
            },
            {
              highlighted: true,
              data: 'Nice, FR',
            },
          ],
          [
            {
              highlighted: false,
              data: 'I have been',
            },
            {
              highlighted: true,
              data: 'Home Schooled',
            },
            {
              highlighted: false,
              data: 'as a teen and i',
            },
            {
              highlighted: true,
              data: 'started Programming',
            },
            {
              highlighted: false,
              data: 'during this period.',
            },
          ],
        ],
      },
      {
        illustration: {
          image: AboutBlackIllustration,
          text: '🧠👨‍💻',
          height: 'md:h-[450px]',
        },
        text: [
          [
            {
              highlighted: false,
              data: 'I was born and raised in',
            },
            {
              highlighted: true,
              data: 'Nice, FR',
            },
          ],
          [
            {
              highlighted: false,
              data: 'I have been',
            },
            {
              highlighted: true,
              data: 'Home Schooled',
            },
            {
              highlighted: false,
              data: 'as a teen and i',
            },
            {
              highlighted: true,
              data: 'started Programming',
            },
            {
              highlighted: false,
              data: 'during this period.',
            },
          ],
        ],
      },
      {
        illustration: {
          image: AboutLightIllustration,
          height: 'md:h-[350px]',
          text: '🧗🏊‍♂️',
        },
        text: [
          [
            {
              highlighted: false,
              data: 'I was born and raised in',
            },
            {
              highlighted: true,
              data: 'Nice, FR',
            },
          ],
          [
            {
              highlighted: false,
              data: 'I have been',
            },
            {
              highlighted: true,
              data: 'Home Schooled',
            },
            {
              highlighted: false,
              data: 'as a teen and i',
            },
            {
              highlighted: true,
              data: 'started Programming',
            },
            {
              highlighted: false,
              data: 'during this period.',
            },
          ],
        ],
      },
    ],
  },
  workExperiences: {
    title: 'Work Experiences',
    experiences: [
      {
        title: 'Klubx',
        description:
          'A Social Network that allows people to connect each other through their NFTs.',
        icon: KlubxIcon,
        link: 'https://klubx.io/',
      },
      {
        title: 'Jobexit',
        description:
          'A Legal Tech that help you calculates all the indemnities, risks and allowances related to a breach of contract.',
        icon: JobexitIcon,
        link: 'https://www.jobexit.fr/',
        gradient: 'linear-gradient(to bottom left, #a5b4fc, #c084fc)',
      },
      {
        title: 'My Little Adventure',
        description:
          'A travel technology startup that helps theirs clients upsell Tours and Activities to their customers.',
        icon: MLAIcon,
        link: 'https://www.mylittleadventure.com/',
        gradient: 'linear-gradient(to bottom left, #818cf8, #d8b4fe, #f9a8d4)',
      },
    ],
  },
  skills: {
    title: '3+ years of experience',
    skills: [
      'Fullstack Development',
      'Mobile Development',
      'DevOps',
      'UI/UX Design',
    ],
  },
  technicalSkills: {
    title: 'Technical Skills',
    skills: [
      'React.js',
      'Next.js',
      'Typescript',
      'Vue.js',
      'React Native',
      'Node.js',
      'Next.js',
      'Python',
      'Flask',
    ],
  },
  contact: {
    title: 'Let\'s chat!',
    description: 'I\'d love to talk to you! Send me an email !',
    callToAction: 'Chat with me',
  },
};
