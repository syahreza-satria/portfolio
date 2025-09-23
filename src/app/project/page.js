"use client";

import Header from "@/components/ui/Header";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data";
import Link from "next/link";

export default function projectPage() {
	return (
		<main className="max-w-2xl mx-auto px-4 md:px-0 py-24 lg:py-8 space-y-6 text-gray-800">
			<Header />
			<section className="space-y-4">
				<h2 className="font-bold text-xl">Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
					{projects.slice(0, 4).map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			</section>
		</main>
	);
}
