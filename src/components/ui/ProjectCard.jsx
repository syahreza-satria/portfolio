import Image from "next/image";
import { LinkIcon } from "./icons"; // Menggunakan ikon generik

const ProjectCard = ({ title, description, imageUrl, githubUrl, liveUrl }) => {
	return (
		<div className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
			<div className="relative aspect-video overflow-hidden">
				<Image
					src={imageUrl}
					alt={`${title} thumbnail`}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800">{title}</h3>
				<div className="group max-h-12 md:group-hover:max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
					<p className="mt-1 text-sm text-gray-500">{description}</p>
				</div>
				<div className="mt-4 flex items-center justify-end gap-3">
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-black hover:text-white duration-300"
					>
						Github
						<LinkIcon />
					</a>
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800 transition hover:bg-sky-500 hover:text-white duration-300"
					>
						Live
						<LinkIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
