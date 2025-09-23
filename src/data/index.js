import {
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	YoutubeIcon,
	TakoIcon,
	PaypalIcon,
} from "@/components/ui/icons";

export const bubbleMenuItems = [
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
		href: "/gear",
		ariaLabel: "Gear",
		rotation: 8,
		hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
	},
	{
		label: "CONTACT",
		href: "/contact",
		ariaLabel: "Contact",
		rotation: -8,
		hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
	},
];

export const profile = {
	name: "Syahreza Satria Alfath",
	bio: `I don't just build websites, I bring them to life. I design beautiful interfaces, write the code that makes them work, and create the stories they tell. I'm a digital creator, from concept to execution.`,
	avatar: "/assets/img/profilePic.png",
	cv: "https://drive.google.com/file/d/1gplQTTVjASTT4jr2kvAZTR3lb5jhyZdC/view?usp=drive_link",
	portfolio:
		"https://drive.google.com/file/d/1SOjXLSwtvE_g1oVBBl1BJEeFbP6CNLo4/view?usp=sharing",
};

export const projects = [
	{
		id: 1,
		title: "Portfolio Website",
		description:
			"Website portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS. Website portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS.",
		imageUrl: "/assets/portfolio/portfolio.png",
		tags: ["React", "Tailwind CSS", "Vercel"],
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 2,
		title: "Finance Web Hutangin",
		description:
			"Aplikasi web responsive yang dapat digunakan untuk menghitung pengeluaran dan pemasukan.",
		imageUrl: "/assets/portfolio/hutangin.png",
		tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 3,
		title: "Sistem Manajemen F&B",
		description:
			"Aplikasi web & mobile untuk manajemen pesanan dan keanggotaan pelanggan.",
		imageUrl: "/assets/portfolio/lakesideMembership.png",
		tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 4,
		title: "UI Design for Doctor website",
		description:
			"Desain antarmuka untuk website yang bertujuan untuk konsultasi bersama dokter secara gratis.",
		imageUrl: "/assets/portfolio/helenna.png",
		tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
		githubUrl: "#",
		liveUrl: "#",
	},
];

export const education = [
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
export const experience = [
	{
		id: 1,
		logo: "/assets/experience/caatis.png",
		company: "Lakeside F&B Group",
		position: "IT LEAD",
		description: [
			"Lead an eight-person IT team in the development and refinement of three F&B application products (Mobile Membership, POS, and Stock Lakeside F&B Group).",
			"Fully responsible for system architecture, full-stack development, and product maintenance.",
			"Collaborate with product and marketing teams to translate business needs into effective technical features.",
		],
		period: "Sep 2024 - Jan 2025",
		link: "https://caatis.matradipti.org/",
	},
	{
		id: 2,
		logo: "/assets/experience/caatis.png",
		company: "Caatis COE",
		position: "User Experience Designer",
		description: [
			"Designed high-fidelity wireframes and prototypes for financial management features.",
			"Analyzed users need to formulate technology-based design solutions for financial record-keeping websites.",
		],
		period: "Jun 2023 - Jul 2023",
		link: "https://caatis.matradipti.org/",
	},
	{
		id: 3,
		logo: "/assets/experience/caatis.png",
		company: "Caatis COE",
		position: "Laboratory Assistant",
		description: [
			"Provide technical and analytical support on various web application development and UI/UX design projects in a lab environment.",
		],
		period: "Jun 2023 - Jul 2023",
		link: "https://caatis.matradipti.org/",
	},
	{
		id: 4,
		logo: "/assets/experience/mcsmb.jpeg",
		company: "Telkom University Marketing Crew",
		position: "Social Media Designer",
		description: [
			"Designed and produced over 20+ visual content and developed visual strategies for social media campaigns.",
		],
		period: "Nov 2022 - Des 2024",
		link: "https://www.instagram.com/mcsmbtelkom/",
	},
];

export const skillsDev = [
	"MySQL",
	"React",
	"Next.js",
	"Tailwind CSS",
	"Node.js",
	"JavaScript",
	"TypeScript",
	"HTML5",
	"CSS3",
	"Laravel",
	"Bootstrap CSS",
	"Material UI",
];

export const skillsCreative = [
	"Adobe Photoshop",
	"Figma",
	"Adobe Lightroom",
	"Capcut",
	"Canva",
	"Adobe Premiere Pro",
	"Notion",
	"Google Docs",
	"Google Sheets",
	"Google Sheets",
];

export const socialLinks = [
	{ href: "https://github.com/syahreza-satria", icon: <GithubIcon /> },
	{ href: "https://instagram.com/syahreza_satria", icon: <InstagramIcon /> },
	{
		href: "https://linkedin.com/in/syahreza-satria-alfath",
		icon: <LinkedinIcon />,
	},
	{ href: "mailto:satriaeza221@gmail.com", icon: <MailIcon /> },
	{ href: "https://www.youtube.com/@SyahrezaSatria", icon: <YoutubeIcon /> },
];

export const donationLinks = [
	{ href: "https://tako.id/SyahrezaSatria", icon: <TakoIcon /> },
	{ href: "https://paypal.me/SyahrezaSatriaAlfath", icon: <PaypalIcon /> },
];

export const gears = [
	{
		id: 1,
		brand: "Canon",
		model: "EOS RP",
		category: "Camera",
		description: "Main camera, great for photography.",
		image: "/assets/gear/canon-eos-rp.jpg",
		link: "https://www.tokopedia.com/search?st=&q=canon%20eos%20rp&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=",
	},
	{
		id: 2,
		brand: "Apple",
		model: "Macbook Air M3",
		category: "Computer",
		description: "Great battery life, great display.",
		image: "/assets/gear/macbook-air-m3.jpg",
		link: "https://www.tokopedia.com/search?st=&q=canon%20eos%20rp&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=",
	},
	{
		id: 3,
		brand: "VortexSeries",
		model: "Mono 75",
		category: "Computer",
		description: "Cheap and quality keyboard.",
		image: "/assets/gear/vortex-series-mono-75.jpg",
		link: "https://www.tokopedia.com/search?st=&q=canon%20eos%20rp&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=",
	},
	{
		id: 4,
		brand: "Lenovo",
		model: "Ideapad Gaming M100",
		category: "Computer",
		description: "Wired mouse, great for gaming.",
		image: "/assets/gear/lenovo-ideapad-gaming-m100.jpg",
		link: "https://www.tokopedia.com/search?st=&q=canon%20eos%20rp&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=",
	},
	{
		id: 5,
		brand: "AOC",
		model: "24G4E",
		category: "Computer",
		description: "Monitor 180Hz, with okei color.",
		image: "/assets/gear/aoc-24g4e.jpg",
		link: "https://www.tokopedia.com/search?st=&q=canon%20eos%20rp&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=",
	},
	{
		id: 6,
		brand: "Canon",
		model: "RF 35mm f/1.8",
		category: "Camera",
		description: "Great lens for taking potraits.",
		image: "/assets/gear/canon-rf-35mm.jpg",
		link: "https://www.tokopedia.com/search?st=&q=canon%20eos%20rp&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=",
	},
	{
		id: 7,
		brand: "Rexus",
		model: "Gladius GX2",
		category: "Camera",
		description: "For simple gaming.",
		image: "/assets/gear/rexus-gladius-gx2.jpg",
		link: "https://www.tokopedia.com/search?st=&q=canon%20eos%20rp&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=",
	},
	{
		id: 8,
		brand: "Rexus",
		model: "RXC 305",
		category: "Camera",
		description: "For simple gaming.",
		image: "/assets/gear/rexus-rxc-305.jpg",
		link: "https://www.tokopedia.com/search?st=&q=canon%20eos%20rp&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=",
	},
];
