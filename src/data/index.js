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
            "Website portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS.",
        imageUrl: "/assets/portfolio/portfolio.png",
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        id: 2,
        title: "Finance Web Hutangin",
        description:
            "Aplikasi web responsive yang dapat digunakan untuk menghitung pengeluaran dan pemasukan.",
        imageUrl: "/assets/portfolio/hutangin.png",
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        id: 3,
        title: "Sistem Manajemen F&B",
        description:
            "Aplikasi web & mobile untuk manajemen pesanan dan keanggotaan pelanggan.",
        imageUrl: "/assets/portfolio/lakesideMembership.png",
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        id: 4,
        title: "UI Design for Doctor website",
        description:
            "Desain antarmuka untuk website yang bertujuan untuk konsultasi bersama dokter secara gratis.",
        imageUrl: "/assets/portfolio/helenna.png",
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

export const skillsDev = [
    "MySQL",
    "React",
    "Next.JS",
    "Tailwind CSS",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Laravel",
    "Bootstrap CSS"
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
