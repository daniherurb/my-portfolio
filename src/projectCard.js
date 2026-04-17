import { RiProgress6Line, RiProgress3Line } from "react-icons/ri";

export default function ProjectCard({ project }) {
  return (
	<div className="flex flex-col justify-between h-[420px] sm:h-[500px] border-2 border-[var(--blue)] w-[300px] sm:w-[400px] flex-shrink-0 p-5 rounded-md card gap-2">
	  <div className="flex flex-col sm:min-h-[130px]">
		  <p className="flex flex-row items-center gap-1 text-md sm:text-lg font-helios font-bold text-[var(--blue)]">
			  {project.name}
			  {project.almostDone && <RiProgress6Line className={"text-2xl"}/>}
			  {project.almostMidway && <RiProgress3Line className={"text-2xl"}/>}
		  </p>
		<p className="text-sm sm:text-md font-helios font-light text-[var(--blue)] text-justify">{project.description}</p>
		<p className="text-sm sm:text-md font-helios text-[var(--blue)] mt-3"><b>date: </b>{project.date}</p>
		<p className="text-sm sm:text-md font-helios text-[var(--blue)] py-1"><b>tech: </b>{project.tech}</p>
		  {project.role && <p className="text-sm sm:text-md font-helios text-[var(--blue)] text-justify mb-1"><b>role: </b>{project.role}</p>}
	  </div>
	  <div className="flex border-2 justify-center border-[var(--blue)] sm:h-[200px] sm:m-0 rounded-md overflow-hidden">
		<img className="h-full w-auto" src={require(`./static/images/previews/${project.preview}`)} alt={project.name} />
	  </div>
	  <div className="flex flex-row gap-3 self-center">
		{project.link ? (
		  <a href={project.link} target="_blank" rel="noreferrer">
			<button className="flex flex-col bg-[var(--blue)] w-28 h-11 text-center border-2 border-[var(--blue)] justify-center rounded-sm font-helios text-white button visit">visit</button>
		  </a>
		) : null}
		{project.repo ? (
		  <a href={project.repo} target="_blank" rel="noreferrer">
			<button className="flex flex-col w-28 h-11 text-center justify-center border-2 border-[var(--blue)] rounded-sm font-helios font-bold text-[var(--blue)] button repo">view repo</button>
		  </a>
		) : null}
	  </div>
	</div>
  );
}