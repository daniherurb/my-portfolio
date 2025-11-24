import './App.css';
import logo from './static/images/logo.svg'
import cat from './static/images/cat.png'
import linkedn from './static/images/linkedn.png'
import github from './static/images/github.png'
import x from './static/images/x.png'
import github_white from './static/images/github_white.png'
import linkedin_white from './static/images/linkedin_white.png'
import x_white from './static/images/x_white.png'
import { LuDownload } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { useRef, useEffect } from "react";
import { FaCircle } from "react-icons/fa";


function App() {
    const projectsContainer = useRef(null);

    const projects = [
        {
            name: 'Seveneat Landing Page',
            link: 'https://www.seveneat.com',
            repo: 'https://github.com/daniherurb/seveneat-landing-page',
            date: 'September 2025',
            description: 'Landing page for Seveneat, an intelligent meal planning app.',
            tech: 'React, Tailwind CSS',
            preview: 'seveneat.png'
        },
        {
            name: 'Personal Portfolio',
            repo: 'https://github.com/daniherurb',
            date: 'November 2025',
            description: 'My personal portfolio web, containing my contact, personal projects and tech stack I use.',
            tech: 'React, Tailwind CSS',
            preview: 'portfolio.png'
        },
        {
            name: 'Game of Life Web',
            link: "https://daniherurb.github.io/game-of-life-web",
            repo: 'https://github.com/daniherurb/game-of-life-web',
            date: 'July 2025',
            description: `Implementation of Conway's Game of Life.`,
            tech: 'HTML, JS & CSS',
            preview: 'gameoflife.png'
        },
        {
            name: "Daniela's Portfolio",
            link: "https://danielarg.site",
            repo: "https://github.com/danielarg28/danielarg28.github.io",
            date: 'January 2025',
            description: 'Personal portfolio web for my best friend :)',
            tech: 'HTML, JS & CSS',
            preview: 'dani.png'
        },
        {
            name: "VRP Project",
            repo: "https://github.com/daniherurb/clustered-vrp-ga-project",
            date: 'May 2025',
            description: 'My final AI project, solved using clustering and genetic algorithms.',
            tech: 'Python',
            preview: 'vrp.png'
        }
]

    useEffect(() => {
        const container = projectsContainer.current;
        if (!container) return;

        const handleWheel = (e) => {
            e.preventDefault();
            const horizontalScroll = e.deltaX !== 0 ? e.deltaX : e.deltaY * 0.7;
            container.scrollLeft += horizontalScroll*0.7;
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const renderProjects = () => {
        return projects.map(project => (
            <div className={"flex flex-col justify-between h-[420px] sm:h-[500px] border-2 border-[var(--blue)] w-[300px] sm:w-[400px] flex-shrink-0 p-5 rounded-md card"} key={project.id}>
                <div className={"flex flex-col sm:min-h-[130px]"}>
                    <p className={"text-md sm:text-lg font-helios font-bold text-[var(--blue)]"}>{project.name}</p>
                    <p className={"text-sm sm:text-md font-helios font-light text-[var(--blue)]"}>{project.description}</p>
                    <p className={"text-sm sm:text-md font-helios text-[var(--blue)] mt-2"}><b>date: </b>{project.date}</p>
                    <p className={"text-sm sm:text-md font-helios text-[var(--blue)]"}><b>tech: </b>{project.tech}</p>
                </div>
                <div className={"flex border-2 justify-center border-[var(--blue)] sm:h-[200px] mt-3 mb-3 sm:m-0 rounded-md overflow-hidden"}>
                    <img className={"h-full w-auto"} src={require(`./static/images/previews/${project.preview}`)} alt={""}/>
                </div>
                <div className={"flex flex-row gap-3 self-center"}>
                    {project.link ? <a href={project.link} target="_blank" rel="noreferrer"><button className={"flex flex-col bg-[var(--blue)] w-28 h-11 text-center border-2 border-[var(--blue)] justify-center rounded-sm font-helios text-white button visit"}>visit</button></a> : <></>}
                    {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer"><button className={"flex flex-col w-28 h-11 text-center justify-center border-2 border-[var(--blue)] rounded-sm font-helios font-bold text-[var(--blue)] button repo"}>view repo</button></a> : <></>}
                </div>
            </div>
        ));
    }

    const renderTechStack = () => {
        return Array.from({ length: 9 }, (_, i) => {
            const j = i + 1;
            const animation = j % 2 === 1 ? "tech1" : "tech2";

            return (
                <img
                    key={j}
                    className={`h-16 w-auto ${animation}`}
                    src={require(`./static/images/stack/${j}.png`)}
                    alt={`stack-${j}`}
                />
            );
        });
    };


  return (
    <>
        <div className={"flex flex-col w-full"}>
            <div className={"top-0 sticky w-full flex flex-row justify-center items-center shadow-md z-50 bg-white"}>
                <div className={"flex items-center justify-between w-[90%]"}>
                    <div>
                        <img src={logo} alt="logo" className="h-20 w-20 animate-slide_in_right"/>
                    </div>
                    <div className={"text-sm flex flex-row sm:gap-10 gap-4 font-helios sm:text-xl text-[var(--blue)]"}>
                        <a href={'#aboutme'} className={"bio menu-option"}>about.</a>
                        <a href={'#projects'} className={"projects menu-option"}>projects.</a>
                        <a href={'#stack'} className={"stack menu-option"}>stack.</a>
                    </div>
                </div>
            </div>
            <div className={"w-full flex flex-col items-center mt-14"}>
                <img src={cat} alt="catimage" className="w-40 sm:w-48 h-auto" />
                <p className={"w-[95%] mt-2 text-4xl sm:text-6xl text-center font-helios font-bold text-[var(--blue)] animate-slide_in_up"}> Daniel Herrera Urbano</p>
                <p className={"w-[95%] mt-2 text-2xl sm:text-4xl text-center font-helios font-light text-[var(--blue)] animate-slide_in_up"}> Software Engineer</p>
                <p className={"w-[95%] mt-16 text-xl sm:text-3xl text-center font-helios font-light text-[var(--blue)]"}> It's me, hi!</p>
                <div className={"flex flex-row align gap-6 sm:gap-5 mt-2 sm:mt-3"}>
                    <a href={"https://www.linkedin.com/in/daniel-herrera-urbano-a1170428b"} target="_blank" rel="noopener noreferrer">
                        <img src={linkedn} alt="linkedn" className="w-7 sm:w-8 h-auto icon linkedn" />
                    </a>
                    <a href={"https://github.com/daniherurb"} target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className="w-7 sm:w-8 h-auto icon github" />
                    </a>
                    <a href={"https://x.com/adictware"} target="_blank" rel="noopener noreferrer">
                        <img src={x} alt="x" className="w-7 sm:w-8 h-auto icon x" />
                    </a>
                </div>
                <a href="/Curriculum_spen.pdf" download="DanielHerreraUrbano_CV" className={"flex flex-row mt-16 gap-2"}>
                    <LuDownload className={"size-6 mt-[1px] text-[var(--blue)]"}/>
                    <p id="cv" className={"text-md sm:text-lg text-center font-helios font-light text-[var(--blue)] underline"}>
                        download my CV!
                    </p>
                </a>
                <div className={"flex flex-row mt-2 gap-2"}>
                    <MdOutlineEmail className={"size-6 mt-[2px] text-[var(--blue)]"}/>
                    <p className={"text-md sm:text-lg text-center font-helios font-light text-[var(--blue)] underline"}>
                        <a href={"mailto:danielherurb@gmail.com"}>danielherurb@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className={"w-full flex flex-col items-center mt-24"}>
                <p className={"w-[85%] mt-2 mb-4 text-xl sm:text-2xl font-helios font-bold text-[var(--blue)] section-title"} id="aboutme">about me</p>
                <p className={"w-[85%] text-md sm:text-lg font-helios text-justify text-[var(--blue)]"}>
                    I’m Daniel, a Software Engineering student passionate about web development, especially frontend
                    engineering and UI/UX design. I also have experience
                    developing APIs and working with backend systems.<br/>
                    <br/>
                    My interest in frontend started early, back in high school when I built my first static HTML pages.
                    Since then, I’ve become convinced that visual quality, usability, and accessibility are essential to
                    delivering meaningful user experiences. I enjoy creating interfaces that not only look good but
                    genuinely improve how people interact with an application.
                </p>
            </div>
            <div className={"w-full flex flex-col items-center mt-16 mb-10"}>
                <p className={"w-[85%] text-xl sm:text-2xl font-helios font-bold text-[var(--blue)] section-title"} id="projects">projects</p>
                <div
                    ref={projectsContainer}
                    className={"w-[85%] overflow-x-scroll overflow-y-hidden h-fit flex flex-row items-center gap-6 sm:gap-5 pr-2 projects pb-2 pt-4"}
                >
                    {renderProjects()}
                </div>
            </div>
            <div className={"w-full flex flex-col items-center mt-12"}>
                <p className={"w-[85%] mt-2 mb-4 text-xl sm:text-2xl font-helios font-bold text-[var(--blue)] section-title"} id="stack">stack</p>
                <div className="w-[80%] lg:w-[85%] mt-2 grid grid-cols-3 lg:grid-cols-9 gap-y-10 gap-x-5 justify-items-center">
                    {renderTechStack()}
                </div>
            </div>
            <div className={"w-full h-64 flex flex-col items-center mt-12 justify-between p-3 pb-2 bg-[var(--blue)] font-helios text-white"}>
                <div className={"flex flex-col items-center mt-2"}>
                    <p className={"mt-2 text-lg sm:text-2xl text-center font-helios font-light text-white"}> Daniel Herrera Urbano</p>
                    <p className={"text-sm sm:text-lg text-center font-helios font-light text-white"}> (the CSS/mockups guy, according to some)</p>
                    <div className={"flex flex-row items-center gap-2 mt-6"}>
                        <FaCircle className={"text-green-600 text-sm"}/>
                        <p className={"text-sm sm:text-md"}>I am <b>currently available</b>, contact me!</p>
                    </div>
                    <div className={"flex flex-row align gap-6 sm:gap-5 mt-2 sm:mt-3"}>
                        <a href={"https://www.linkedin.com/in/daniel-herrera-urbano-a1170428b"} target="_blank" rel="noopener noreferrer">
                            <img src={linkedin_white} alt="linkedn" className="w-7 sm:w-8 h-auto icon linkedn" />
                        </a>
                        <a href={"https://github.com/daniherurb"} target="_blank" rel="noopener noreferrer">
                            <img src={github_white} alt="github" className="w-7 sm:w-8 h-auto icon github" />
                        </a>
                        <a href={"https://x.com/adictware"} target="_blank" rel="noopener noreferrer">
                            <img src={x_white} alt="x" className="w-7 sm:w-8 h-auto icon x" />
                        </a>
                    </div>
                </div>
                <p>from the desk of <a href={"https://www.github.com/daniherurb"}>@daniherurb</a></p>
            </div>
        </div>
    </>
  );
}

export default App;
