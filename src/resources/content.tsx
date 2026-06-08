import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Michael",
  lastName: "Kitivi",
  name: `Michael Mulinge Kitivi`,
  role: "Director, Uniformed Capabilities Support Division at UNITED NATIONS",
  avatar: "/images/m8pr.jpeg",
  email: "",
  location: "America/New_York",
  languages: ["English", "Swahili"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Updates</>,
  description: (
    <>Updates on global peacekeeping logistics and mission support.</>
  ),
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/michael-mulinge-kitivi/",
  }
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `The professional portfolio of ${person.name}, Director of the Uniformed Capabilities Support Division at the United Nations.`,
  headline: (
    <>
      Advancing global peacekeeping, logistics, and mission support at the United Nations.
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Recent Initiative</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Work
        </Text>
      </Row>
    ),
    href: "/work/uniformed-capabilities-management",
  },
  subline: (
    <>
      Director of the Uniformed Capabilities Support Division at the United Nations, overseeing force generation and management.
      <br />Proven track record in managing billion-dollar budgets and leading thousands of personnel in challenging peacekeeping operations.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn about ${person.name}, Director at the UN.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "Professional Profile",
    description: (
      <>
        Dedicated and highly experienced leader currently serving as the Director of the Uniformed Capabilities Support Division (UCSD) at the United Nations Secretariat. 
        <br /><br />
        With extensive experience in mission support, logistics, and administration, I have overseen complex operations, including a $1.2 Billion annual budget and a 3,000-strong support division during the MINUSMA Peace Keeping Operation in Mali. My focus remains on improving the complex processes involved in force generation and capability management for global peace.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "United Nations",
        timeframe: "Sep 2019 – Present",
        role: "Director, Uniformed Capabilities Support Division",
        achievements: [
          <>Leading the USCD to leverage the Department of Peace Operations for enhanced force generation and management.</>,
          <>Overseeing the implementation of the Umoja UE2 Uniformed Capabilities Management system.</>,
          <>Coordinating critical peacekeeper support initiatives, including landmark training for PTSD support.</>,
        ],
        images: [],
      },
      {
        company: "MINUSMA, Peace Keeping Operation in Mali",
        timeframe: "Feb 2016 – Aug 2019",
        role: "Director, Mission Support",
        achievements: [
          <>In charge of Logistics and Administration in Bamako, Mali.</>,
          <>Oversaw an annual operating budget of $1.2 Billion.</>,
          <>Headed the Support Division comprising 3,000 employees in one of the UN's most challenging missions.</>,
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: false,
    title: "Education",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Key Competencies",
    skills: [
      {
        title: "Mission Support & Logistics",
        description: (
          <>
            Expertise in large-scale logistics, administration, budget management, and force generation for international peacekeeping operations.
          </>
        ),
        tags: ["Logistics", "Budget Management", "Force Generation", "Administration", "Strategic Planning"],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Projects & Initiatives",
  title: `Projects & Initiatives`,
  description: `Key strategic initiatives and projects managed by ${person.name}.`,
};

const blog: Blog = {
  path: "/blog",
  label: "Updates",
  title: "News & Updates",
  description: `Recent news and updates regarding ${person.name}'s work at the United Nations.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo Gallery – ${person.name}`,
  description: `Professional journey and international visits of ${person.name}.`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
