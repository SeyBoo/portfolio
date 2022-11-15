import { Language } from '../types/language';
import AboutLightIllustration from '../assets/light-pink-bg.avif';
import AboutBlackIllustration from '../assets/dark-purple-bg.avif';
import KlubxIcon from '../assets/layers.png';
import JobexitIcon from '../assets/world.png';
import MLAIcon from '../assets/explore.png';

export const Data: Language = {
  intro: {
    title: 'Bonjour, je suis Antoine',
    subTitle: [
      [
        {
          highlighted: false,
          data: 'Un',
        },
        {
          highlighted: true,
          data: 'Développeur Full Stack Freelance et passionné d\'IA',
        },
        {
          highlighted: false,
          data: 'basé en France.',
        },
      ],
    ],
    callToAction: 'Contactez moi',
  },
  about: {
    title: 'A propos de moi',
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
              data: 'Je suis né et j\'ai grandi à',
            },
            {
              highlighted: true,
              data: 'Nice, FR',
            },
          ],
          [
            {
              highlighted: false,
              data: 'J\'ai été ',
            }, 
            {
              highlighted: true,
              data: 'Home Schooled',
            },
            {
              highlighted: false,
              data: 'durant mon adolescence et j\'ai',
            },
            {
              highlighted: true,
              data: 'commencé la Programmation',
            },
            {
              highlighted: false,
              data: 'à cette période.',
            },
          ],
        ],
      },
      {//
        illustration: {
          image: AboutBlackIllustration,
          text: '🧠👨‍💻',
          height: 'md:h-[450px]',
        },
        text: [
          [
            {
              highlighted: false,
              data: 'Ma famille est ',
            },
            {
              highlighted: true,
              data: 'pleine de développeurs / ingénieurs.',
            },
          ],
          [
            {
              highlighted: true,
              data: 'J\'ai terminé mes premières missions de freelance à 16 ans.',
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
              data: 'La',
            },
            {
              highlighted: true,
              data: 'Callisthénie',
            },
            {
              highlighted: false,
              data: 'est mon sport préféré.',
            },
          ],
          [
            {
              highlighted: false,
              data: 'J\'aime aussi',
            },
            {
              highlighted: true,
              data: 'l\'Escalade',
            },
            {
              highlighted: false,
              data: 'et',
            },
            {
              highlighted: true,
              data: 'la Natation.',
            },
          ],
        ],
      },
    ],
  },
  workExperiences: {
    title: 'Expériences Professionnelles',
    experiences: [
      {
        title: 'Klubx',
        description:
          'Un réseau social qui permet aux gens de se connecter entre eux grâce à leurs NFT.',
        icon: KlubxIcon,
        link: 'https://klubx.io/',
      },
      {
        title: 'Jobexit',
        description:
          'Une Legal Tech qui vous aide à calculer toutes les indemnités et risques liés à une rupture de contrat.',
        icon: JobexitIcon,
        link: 'https://www.jobexit.fr/',
        gradient: 'linear-gradient(to bottom left, #a5b4fc, #c084fc)',
      },
      {
        title: 'My Little Adventure',
        description:
          'Une start-up technologique qui aide ses clients à vendre leurs Tours et Activités à leurs clients.',
        icon: MLAIcon,
        link: 'https://www.mylittleadventure.com/',
        gradient: 'linear-gradient(to bottom left, #818cf8, #d8b4fe, #f9a8d4)',
      },
    ],
  },
  skills: {
    title: '3+ ans d\'expérience',
    skills: [
      'Fullstack Development',
      'Mobile Development',
      'DevOps',
      'UI/UX Design',
    ],
  },
  technicalSkills: {
    title: 'Compétences Techniques',
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
    title: 'Contactez moi!',
    description: 'J\'aimerais vous parler! Envoyez-moi un mail!',
    callToAction: 'Envoyez moi un mail',
  },
};
