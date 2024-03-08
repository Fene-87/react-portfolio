import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faDocker, faGit, faGithub, faGitlab, faHtml5, faJs, faLaravel, faNodeJs, faPhp, faPython, faReact, faUnity } from '@fortawesome/free-brands-svg-icons';
import { SiClickup, SiExpress, SiFlask, SiDjango, SiTailwindcss, SiJest, SiMongodb, SiMysql, SiRubyonrails } from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { DiRuby } from "react-icons/di";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";

const languages = [
    { icon: faJs, name: "JavaScript", type: 'font-awesome' },
    { icon: BiLogoTypescript, name: "TypeScript", type: 'react-icons' },
    { icon: faPython, name: "Python", type: 'font-awesome' },
    { icon: DiRuby, name: "Ruby", type: 'react-icons' },
    { icon: faPhp, name: "PHP", type: 'font-awesome' },
    { icon: faHtml5, name: "HTML", type: 'font-awesome' },
    { icon: faCss3, name: "CSS", type: 'font-awesome' },
];

const frameworks = [
    { icon: faReact, name: "ReactJs", type: 'font-awesome' },
    { icon: faAngular, name: "AngularJs", type: 'font-awesome' },
    { icon: faNodeJs, name: "NodeJs", type: 'font-awesome' },
    { icon: TbBrandNextjs, name: "NextJs", type: 'react-icons' },
    { icon: TbBrandThreejs, name: "ThreeJs", type: 'react-icons' },
    { icon: SiExpress, name: "Express", type: 'react-icons' },
    { icon: SiFlask, name: "Flask", type: 'react-icons' },
    { icon: SiDjango, name: "Django", type: 'react-icons' },
    { icon: SiRubyonrails, name: "Ruby on Rails", type: 'react-icons' },
    { icon: faLaravel, name: "Laravel", type: 'font-awesome' },
    { icon: BsFiletypeScss, name: "SCSS", type: 'react-icons' },
    { icon: SiTailwindcss, name: "Tailwind CSS", type: 'react-icons' },
    { icon: SiJest, name: "Jest", type: 'react-icons' },
];

const skills = [
    { icon: faGithub, name: "GitHub", type: 'font-awesome' },
    { icon: faGit, name: "Git", type: 'font-awesome' },
    { icon: faGitlab, name: "Gitlab", type: 'font-awesome' },
    { icon: faDocker, name: "Docker", type: 'font-awesome' },
    { icon: SiClickup, name: "Clickup", type: 'react-icons' },
    { icon: faUnity, name: "Unity",type: 'font-awesome' },
    { icon: SiMongodb, name: "MongoDB", type: 'react-icons' },
    { icon: BiLogoPostgresql, name: "PostgreSQL", type: 'react-icons' },
    { icon: SiMysql, name: "MySQL", type: 'react-icons' },
];

export { languages, frameworks, skills };
