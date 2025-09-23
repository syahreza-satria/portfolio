import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectList = ({ imageUrl, title, description, tags, liveUrl }) => {
	return (
		<div
			className="block group rounded-lg
                 transition-all duration-500 ease-in-out hover:bg-slate-100 hover:p-4"
		>
			<div className="flex flex-col sm:flex-row items-center gap-4 ">
				{/* Kolom Gambar */}
				<div className="w-full sm:w-56 sm:hover:w-72 transition-all duration-500 shrink-0">
					<Image
						src={imageUrl}
						alt={title}
						width={1920}
						height={1080}
						className="w-full aspect-video object-cover rounded-md border border-slate-200"
					/>
				</div>

				{/* Kolom Teks & Ikon */}
				<div className="flex flex-1 mt-2 sm:mt-0">
					<div className="w-full">
						<h3 className="font-semibold text-lg mb-1">{title}</h3>
						<p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none">
							{description}
						</p>
						<div className="flex flex-wrap gap-2">
							{tags.map((tag, index) => (
								<span
									key={index}
									className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
				<a
					href={liveUrl}
					className="text-slate-400 pl-4 transition-transform duration-500 ease-in-out 
                          group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-800"
				>
					<FiArrowUpRight size={20} />
				</a>
			</div>
		</div>
	);
};

export default ProjectList;
