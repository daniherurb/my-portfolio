import { RiProgress6Line, RiProgress3Line } from "react-icons/ri";

export default function FeaturedProject({ project }) {
    return (
        <div className="flex flex-col flex-1 min-w-0 gap-3 items-center">
            <img
                className="h-32 w-auto object-contain"
                src={require(`./static/images/logos/${project.logo}`)}
                alt={project.name}
            />
            <p style={{ color: project.color }} className="flex flex-row items-center gap-1 font-helios font-bold text-base sm:text-lg leading-tight text-center">
                {project.name}
                {project.almostDone && <RiProgress6Line className="text-xl flex-shrink-0" />}
                {project.almostMidway && <RiProgress3Line className="text-xl flex-shrink-0" />}
            </p>
            <p className="font-helios font-light text-sm text-center text-[var(--blue)]">
                {project.description}
            </p>
            <div className="flex flex-row gap-2">
                {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                        <button className="bg-[var(--blue)] w-20 h-8 text-xs border-2 border-[var(--blue)] rounded-sm font-helios text-white button visit">visit</button>
                    </a>
                )}
                {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                        <button className="w-24 h-8 text-xs border-2 border-[var(--blue)] rounded-sm font-helios font-bold text-[var(--blue)] button repo">view repo</button>
                    </a>
                )}
            </div>
        </div>
    );
}
