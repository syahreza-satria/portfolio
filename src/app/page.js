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
import TextType from "@/components/TextType";
import DecryptedText from "@/components/DecryptedText";
import { motion, useScroll } from "motion/react";
import ShinyText from "@/components/ShinyText";
import GradientText from "@/components/GradientText";
import BubbleMenu from "@/components/BubbleMenu";
import ProjectCard from "@/components/ui/ProjectCard";
import EducationItem from "@/components/ui/EducationItem";
import Footer from "@/components/ui/Footer";

const bubbleMenuItems = [
	{
		label: "HOME",
		href: "/",
		ariaLabel: "Home",
		rotation: -8,
		hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
	},
	{
		label: "PROJECT",
		href: "/project",
		ariaLabel: "Project",
		rotation: 8,
		hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
	},
	{
		label: "GEAR",
		href: "#",
		ariaLabel: "Gear",
		rotation: 8,
		hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
	},
	{
		label: "CONTACT",
		href: "#",
		ariaLabel: "Contact",
		rotation: -8,
		hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
	},
];

const profile = {
	name: "Syahreza Satria Alfath",
	bio: `I don't just build websites, I bring them to life. I design beautiful interfaces, write the code that makes them work, and create the stories they tell. I'm a digital creator, from concept to execution.`,
	avatar: "/assets/img/profilePic.png",
	cv: "https://drive.google.com/file/d/1gplQTTVjASTT4jr2kvAZTR3lb5jhyZdC/view?usp=drive_link",
	portfolio:
		"https://drive.google.com/file/d/1SOjXLSwtvE_g1oVBBl1BJEeFbP6CNLo4/view?usp=sharing",
};

const projects = [
	{
		id: 1,
		title: "Sistem Manajemen F&B",
		description:
			"Aplikasi web & mobile untuk manajemen pesanan dan keanggotaan pelanggan.",
		imageUrl: "https://placehold.co/1920x1080",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 2,
		title: "Portfolio Website",
		description:
			"Website portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS.",
		imageUrl: "https://placehold.co/1920x1080",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 3,
		title: "Content Creator Dashboard",
		description:
			"Dashboard untuk melacak performa konten di berbagai platform sosial.",
		imageUrl: "https://placehold.co/1920x1080",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 4,
		title: "UI/UX Design for E-commerce",
		description:
			"Desain antarmuka untuk aplikasi e-commerce menggunakan Figma.",
		imageUrl: "https://placehold.co/1920x1080",
		githubUrl: "#",
		liveUrl: "#",
	},
];

const education = [
	{
		id: 1,
		logo: "/assets/img/logoTelkom.png",
		university: "Telkom University",
		degree: "Bachelor of Information Technology",
		gpa: "3.29/4.00",
		period: "Aug 2020 - Sep 2024",
		link: "https://www.youtube.com/watch?v=xfM4X6inBUk",
	},
];

const skillDev = [
	{ name: "HTML" },
	{ name: "CSS" },
	{ name: "Javascript" },
	{ name: "Bootstrap" },
	{ name: "Tailwind" },
	{ name: "Laravel" },
	{ name: "NextJs" },
	{ name: "MySQL" },
];

const skillCreative = [
	{ name: "Adobe Photoshop" },
	{ name: "Adobe Lightroom" },
	{ name: "Adobe Premiere Pro" },
	{ name: "Capcut" },
	{ name: "Photography" },
];

const socialLinks = [
	{ href: "https://github.com/syahreza-satria", icon: <GithubIcon /> },
	{ href: "https://instagram.com/syahreza_satria", icon: <InstagramIcon /> },
	{
		href: "https://linkedin.com/in/syahreza-satria-alfath",
		icon: <LinkedinIcon />,
	},
	{ href: "mailto:satriaeza221@gmail.com", icon: <MailIcon /> },
	{ href: "https://www.youtube.com/@SyahrezaSatria", icon: <YoutubeIcon /> },
];

const donationLinks = [
	{ href: "https://tako.id/SyahrezaSatria", icon: <TakoIcon /> },
	{ href: "https://paypal.me/SyahrezaSatriaAlfath", icon: <PaypalIcon /> },
];

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
							alt="Profile Picture"
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
								parentClassName="text-2xl font-semibold"
								encryptedClassName="text-2xl font-semibold"
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
								className="text-gray-500"
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
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
					</section>
				</main>
			</div>
			<Footer profile={profile} socialLinks={socialLinks} donationLinks={donationLinks} />
		</div>
	);
}
