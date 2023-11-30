import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const data = {
  skills: [
    { name: "JavaScript(ES6+)" },
    { name: "TypeScript" },
    { name: "ReactJs" },
    { name: "NextJs" },
    { name: "Redux" },
    { name: "PostgresSQL" },
    { name: "Ruby" },
    { name: "NodeJs" },
    { name: "Prisma" },
    { name: "Ruby on Rails" },
  ],
  projects: [
    {
      project_name: "VibeView",
      project_live_link: "https://vibeview.vercel.app/",
      project_description:
        "VibeView is a music streaming platform. It is a platform where users can bookmark their favorite movies and TV shows. Users have options to register and login to their account using credential and Oauth authentication.",
      project_image:
        "https://res.cloudinary.com/dxsom7jmx/image/upload/v1701302438/vibeview/Screenshot_2023-08-31_at_09.24.00_ymbxdz.png",
      project_tech:
        "ReactJs, NextJs, TypeScript, TailwindCSS, NodeJs(Prisma), PostgresSQL",
      project_link: "https://github.com/Strangeal/Entertainment_app",
    },
    {
      project_name: "UseForm",
      project_live_link: "https://useform-teal.vercel.app/",
      project_description:
        "UseForm is a user-friendly landing page designed to simplify the creation of professional forms within minutes. It allows users to quickly and easily create professional forms with ease. ",
      project_image:
        "https://res.cloudinary.com/dxsom7jmx/image/upload/v1701303319/useForm/Screenshot_2023-11-30_at_00.15.00_mmoxvw.png",
      project_tech: "ReactJs, NextJs, TypeScript, TailwindCSS",
      project_link: "https://github.com/Strangeal/useform",
    },
    {
      project_name: "Clickbank",
      project_live_link: "https://strangeal.github.io/clickbank/index.html",
      project_description:
        "Clickbank is an affiliate marketing platform enable businesses with great products to connect with elite affiliates who can promote those products. They have e-commerce tools that helps product owners sell more with less work, and their marketplace helps marketers and aspiring entrepreneurs looking for new ways to earn an income online!.",
      project_image:
        "https://res.cloudinary.com/dxsom7jmx/image/upload/v1668783580/Meta%20tags/shot_fpwnaw.png",
      project_tech: "HTML, CSS, JavaScript",
      project_link: "https://github.com/Strangeal/clickbank",
    },
    {
      project_name: "ClinixGo",
      project_live_link: "https://clinixgo-production.up.railway.app/",
      project_description:
        "The project is based on an app to book an appointment with a health specialist(Doctor). The doctor appointment booking app permits healthcare providers to manage their appointments with increased efficiency while giving reliable management. However, it displays all details of the patients, complete history of appointment, analyses the doctors, etc",
      project_image:
        "https://res.cloudinary.com/dxsom7jmx/image/upload/v1678831190/Screenshot_2023-03-14_at_14.58.21_pcoore.png",
      project_tech:
        "React, Redux, Ruby On Rails, PostgreSQL, Bootstrap, React-Router",
      project_link: "https://github.com/Strangeal/ClinixGo/",
    },
    {
      project_name: "Space Travel",
      project_live_link: "https://spacehubx.netlify.app/",
      project_description:
        "This project is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
      project_image:
        "https://res.cloudinary.com/dxsom7jmx/image/upload/v1668859707/Meta%20tags/Screenshot_2022-11-19_at_07.05.18_kpxwpi.png",
      project_tech: "HTML5, CSS, React, Redux, Sass, Jest-test",
      project_link: "https://github.com/Strangeal/space-travelers-hub",
    },
    {
      project_name: "BookStore",
      project_live_link: "https://bookstorecmstrangeal.netlify.app/",
      project_description:
        "The Bookstore is a website similar to the Awesome Books website built in the previous module, Which user can use to add their favorite bookstore",
      project_image:
        "https://res.cloudinary.com/dxsom7jmx/image/upload/v1668812401/Meta%20tags/Screenshot_2022-11-18_at_17.59.38_mo8cyd.png",
      project_tech: "HTML5, CSS, React, Redux, Sass, Jest-test",
      project_link: "https://github.com/Strangeal/bookstore",
    },
  ],
  socials: [
    { name: <GitHubIcon />, link: "https://github.com/Strangeal" },
    {
      name: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/justice-bajeri/",
    },
    { name: <AlternateEmailIcon />, link: "mailto:bajerijustice@gmail.com" },
    // { name: <TwitterIcon />, link: "https://twitter.com/Str_angeal" },
    { name: <InstagramIcon />, link: "https://www.instagram.com" },
  ],
};

export default data;
