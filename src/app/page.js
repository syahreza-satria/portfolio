"use client";

import {
	LinkIcon,
} from "@/components/ui/icons";
import {
	profile,
	projects,
	education,
} from "@/data"
import ShinyText from "@/components/ShinyText";
import GradientText from "@/components/GradientText";
import ProjectCard from "@/components/ui/ProjectCard";
import EducationItem from "@/components/ui/EducationItem";
import SkillItem from "@/components/ui/SkillItem";
import Header from "@/components/ui/Header";


export default function Home() {
	return (
		<main className="max-w-2xl mx-auto px-4 md:px-0 py-24 lg:py-8 space-y-6 text-gray-800">
			<section className="space-y-4 md:space-y-6 text-gray-800">
				<Header />
				<p className="text-sm md:text-base">
					24 year old frontend programmer, UI/UX Designer & Content Creator
					based in Bandung 🇮🇩 grinding my skills and create content under the
					name Syahreza Satria.
				</p>

				<div className="flex items-center gap-2">
					<a
						href={profile.cv}
						target="_blank"
						className=" border px-3 py-1 md:py-2 md:px-4 rounded-full hover:bg-gray-200 transition duration-300 flex items-center gap-1 bg-gray-100"
					>
						✨
						<ShinyText
							text="View CV!"
							disabled={false}
							speed={5}
							className="custom-class bg-black"
						/>
						<LinkIcon />
					</a>
					<a href={profile.portfolio} target="_blank" className="">
						<GradientText
							colors={["#0ea5e9", "#a5b4fc", "#ec4899", "#10b981", "#40ffaa"]}
							animationSpeed={10}
							showBorder={true}
							className="custom-class bg-white px-3 py-1 md:py-2 md:px-4 flex items-center"
						>
							View Portfolio
							<span className="text-gray-300">
								<LinkIcon />
							</span>
						</GradientText>
					</a>
				</div>
			</section>

			<hr className="border-gray-100" />

			{/* Projects Section */}
			<section className="space-y-4">
				<h2 className="font-bold text-xl">Checkout my projects!</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
					{projects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			</section>

			<hr className="border-gray-100" />

			{/* Education Section */}
			<section className="space-y-4">
				<h2 className="font-bold text-xl">My Education</h2>
				<div className="flex flex-col gap-0">
					{education.map((edu) => (
						<EducationItem key={edu.id} {...edu} />
					))}
				</div>
			</section>

			<hr className="border-gray-100" />

			{/* Skills Section */}
			<section className="space-y-4">
				<h2 className="font-bold text-xl">Skills</h2>
				<SkillItem />
			</section>
		</main>
	);
}
