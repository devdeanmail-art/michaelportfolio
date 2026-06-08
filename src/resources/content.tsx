import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Josphat",
  lastName: "Mwatelah",
  name: `Prof. Josphat K. Z. Mwatelah`,
  role: "Associate Professor in Construction Engineering",
  avatar: "/images/avatar.jpeg",
  email: "",
  location: "Africa/Nairobi", 
  languages: ["English", "Swahili", "Japanese"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Updates</>,
  description: (
    <>Updates on civil engineering and infrastructure research.</>
  ),
};

const social: Social = [];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `The professional portfolio of ${person.name}, an Associate Professor in Construction Engineering and Geomantic Engineering.`,
  headline: (
    <>
      <img 
        src="/images/avatar.jpeg" 
        alt="Prof. Josphat K. Z. Mwatelah" 
        style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '16px', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} 
      />
      Advancing infrastructure, civil engineering, and capacity building.
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Recent Publication</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Work
        </Text>
      </Row>
    ),
    href: "/work/mapping-water-quality",
  },
  subline: (
    <>
      Associate Professor in the School of Construction Engineering and Geomantic Engineering at JKUAT since 2007.
      <br />Over 30 years of experience in engineering curriculum development, academic administration, and infrastructure project management.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn about ${person.name}, Associate Professor of Civil Engineering.`,
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
        Associate Professor in the School of Construction Engineering and Geomantic Engineering at the Jomo Kenyatta University of Agriculture & Technology (JKUAT) since 2007.
        <br /><br />
        Vast experience in engineering curriculum development, project supervision (undergraduate, Masters, Ph.D.), and editorial roles in both local and international engineering journals. Over 30 years of proficiency in the administrative duties of academic and governmental institutions, alongside teaching and supervising community development projects.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Jomo Kenyatta University of Agriculture & Technology",
        timeframe: "2007 – Present",
        role: "Associate Professor",
        achievements: [
          <>Preparation and dissemination of courses and processing of examinations.</>,
          <>Supervision of Undergraduate, Graduate, and Postgraduate students.</>,
        ],
        images: [],
      },
      {
        company: "Kilifi County Government",
        timeframe: "2018 – 2022",
        role: "County Executive Member for Roads, Transport and Public Works",
        achievements: [
          <>Pursuant to Article 183 of the Constitution and Section 36 of the County Government Act, 2012.</>,
        ],
        images: [],
      },
      {
        company: "Technical University of Mombasa",
        timeframe: "2013 – 2016",
        role: "Vice Chancellor",
        achievements: [
          <>Responsible for maintaining high-level academic standards, administration, and management of the institution.</>,
        ],
        images: [],
      },
      {
        company: "African Institute for Capacity Development (AICAD)",
        timeframe: "2000 – 2009",
        role: "Deputy Executive Secretary & Director",
        achievements: [
          <>Management and conceptualization of the AICAD project.</>,
          <>Coordinating research, training, and extension services in the African region.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Doctor of Engineering",
        description: <>Kyoto University, Japan (1995)</>,
      },
      {
        name: "Master of Science in Civil Engineering",
        description: <>Tottori University, Japan (1988)</>,
      },
      {
        name: "B.Sc. (Hons.) in Surveying and Photogrammetry",
        description: <>University of Nairobi, Kenya (1978)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Professional Certifications",
    skills: [
      {
        title: "Surveying & Engineering",
        description: (
          <>
            Licensed Land Surveyor (Land Surveyors Board of Kenya), Full Member of the Institution of Surveyors of Kenya, and Associate Member of the American Society of Civil Engineers.
          </>
        ),
        tags: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Publications",
  title: `Publications & Research – ${person.name}`,
  description: `A collection of impactful engineering research and publications by ${person.name}.`,
};

const blog: Blog = {
  path: "/blog",
  label: "Journal",
  title: "Academic Notes & Reflections",
  description: `Insights from ${person.name} on civil engineering, infrastructure, and academic leadership.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo Gallery – ${person.name}`,
  description: `Professional and academic journey of ${person.name}.`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };