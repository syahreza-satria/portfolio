"use client";

import Image from "next/image";
import {
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	YoutubeIcon,
	TakoIcon,
	PaypalIcon,
	LinkIcon,
} from "@/components/ui/icons";
import {
	bubbleMenuItems,
	profile,
	projects,
	education,
	skillsDev,
	skillsCreative,
	socialLinks,
	donationLinks
} from "@/data"
import TextType from "@/components/TextType";
import DecryptedText from "@/components/DecryptedText";
import { motion, useScroll } from "motion/react";
import ShinyText from "@/components/ShinyText";
import GradientText from "@/components/GradientText";
import BubbleMenu from "@/components/BubbleMenu";
import ProjectCard from "@/components/ui/ProjectCard";
import EducationItem from "@/components/ui/EducationItem";
import Footer from "@/components/ui/Footer";
import Marquee from "react-fast-marquee";


export default function Home() {
	const { scrollYProgress } = useScroll();

	return (
		<div className="h-screen bg-white text-black">
			<motion.div
				id="scroll-indicator"
				style={{
					scaleX: scrollYProgress,
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					height: 5,
					originX: 0,
					backgroundColor: "#74d4ff",
				}}
			/>

			<BubbleMenu
				logo={<span style={{ fontWeight: 700 }}>Gogooo~</span>}
				items={bubbleMenuItems}
				menuAriaLabel="Toggle navigation"
				menuBg="#ffffff"
				menuContentColor="#111111"
				useFixedPosition={false}
				animationEase="back.out(1.5)"
				animationDuration={0.5}
				staggerDelay={0.12}
			/>

			<div className="max-w-2xl mx-auto px-4 md:px-0 py-28 lg:py-8">
				<main className="space-y-6 text-gray-800">
					{/* Profile Header */}
					<div className="flex items-center gap-4 bg-black p-4 text-white rounded-2xl">
						<Image
							src={profile.avatar}
							width={100}
							height={100}
							alt={profile.name}
							className="rounded-full object-cover"
						/>
						<div className="leading-tight flex flex-col">
							<div className="flex gap-1 items-center text-sm">
								<div className="flex gap-1 items-center">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
									</span>
									<p className="text-green-600 font-medium">Online</p>
								</div>
								<p className="text-gray-500 font-medium">@syahreza_satria</p>
							</div>
							<DecryptedText
								text={"Syahreza Satria Alfath"}
								parentClassName="text-lg md:text-2xl font-semibold"
								encryptedClassName="text-lg md:text-2xl font-semibold"
								animateOn="hover"
								revealDirection="start"
								sequential
								speed={50}
								maxIterations={10}
							/>

							<TextType
								text={[
									"Junior Front-end Developer",
									"UI/UX Designer",
									"Content Creator",
									"Photographer",
									"Graphic Designer",
									"Gamer",
								]}
								typingSpeed={100}
								pauseDuration={2500}
								showCursor={true}
								cursorCharacter="|"
								className="text-gray-500 text-sm md:text-base"
								textColors={["#6a7282"]}
							/>
						</div>
					</div>

					<p className="text-base">
						24 year old frontend programmer, UI/UX Designer & Content Creator
						based in Bandung 🇮🇩 grinding my skills and create content under the
						name Syahreza Satria.
					</p>

					<div className="flex items-center gap-2">
						<a
							href={profile.cv}
							target="_blank"
							className=" border py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 flex items-center gap-1 bg-gray-100"
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
						<a href={profile.portfolio} target="_blank">
							<GradientText
								colors={["#0ea5e9", "#a5b4fc", "#ec4899", "#10b981", "#40ffaa"]}
								animationSpeed={10}
								showBorder={true}
								className="custom-class bg-white py-2 px-4 flex items-center"
							>
								View Portfolio
								<span className="text-gray-300">
									<LinkIcon />
								</span>
							</GradientText>
						</a>
					</div>

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
						<div className="space-y-2">
							<Marquee pauseOnHover={false} speed={75} className="py-1" direction="left">
								{skillsDev.map((skill, index) => (
									<span key={index} className="bg-slate-100 text-slate-700 font-medium px-4 py-1.5 rounded-full text-sm mx-2">
										{skill}
									</span>
								))}
							</Marquee>
							<Marquee pauseOnHover={false} speed={35} className="py-1" direction="right">
								{skillsCreative.map((skill, index) => (
									<span key={index} className="bg-slate-100 text-slate-700 font-medium px-4 py-1.5 rounded-full text-sm mx-2">
										{skill}
									</span>
								))}
							</Marquee>
						</div>
					</section>

				</main>
			</div>
			<Footer profile={profile} socialLinks={socialLinks} donationLinks={donationLinks} />
		</div>
	);
}
