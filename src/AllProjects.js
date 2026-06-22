import './App.css';
import logo from './static/images/logo.svg';
import { Link } from 'react-router-dom';
import projects from './data/projects.json';
import ProjectCard from './projectCard';

export default function AllProjects() {
    return (
        <div className="flex flex-col w-full">
            <div className="top-0 sticky w-full flex flex-row justify-center items-center shadow-md z-50 bg-white">
                <div className="flex items-center justify-between w-[90%]">
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-20 w-20" />
                    </Link>
                    <Link to="/" className="font-helios text-[var(--blue)] sm:text-xl text-sm menu-option underline">
                        back
                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-col items-center mt-10 mb-16">
                <p className="w-[85%] mb-8 text-xl sm:text-2xl font-helios font-bold text-[var(--blue)]">all projects</p>
                <div className="w-[85%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                    {projects.map(project => (
                        <ProjectCard key={`${project.name}-${project.date}`} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
