"use client";

import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import EducationItem from "./components/EducationItem";
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, YoutubeIcon, TakoIcon, PaypalIcon } from "./components/icons";
import TextType from "@/components/TextType";
import DecryptedText from "@/components/DecryptedText";
import ScrollVelocity from "@/components/ScrollVelocity";
import { motion, useScroll } from "motion/react"

// --- DATA ---
// Data dipisahkan dari JSX agar mudah dikelola
const profile = {
  name: "Syahreza Satria Alfath",
  bio: "Fresh graduate IT dengan pengalaman memimpin tim IT buat aplikasi web & mobile F&B. Jago arsitektur sistem, full-stack (PHP, Laravel, JS), dan UI/UX (Figma). Pernah handle produk dari ide sampai launch, plus dapet hak cipta untuk app Customer Membership.",
  avatar: "/assets/img/profilePic.png",
};

const projects = [
  {
    id: 1,
    title: "Sistem Manajemen F&B",
    description: "Aplikasi web & mobile untuk manajemen pesanan dan keanggotaan pelanggan.",
    imageUrl: "https://placehold.co/1920x1080",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Website portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS.",
    imageUrl: "https://placehold.co/1920x1080",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Content Creator Dashboard",
    description: "Dashboard untuk melacak performa konten di berbagai platform sosial.",
    imageUrl: "https://placehold.co/1920x1080",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "UI/UX Design for E-commerce",
    description: "Desain antarmuka untuk aplikasi e-commerce menggunakan Figma.",
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
  },
];

const socialLinks = [
  { href: "https://github.com/syahreza-satria", icon: <GithubIcon /> },
  { href: "https://instagram.com/syahreza_satria", icon: <InstagramIcon /> },
  { href: "https://linkedin.com/in/syahreza-satria-alfath", icon: <LinkedinIcon /> },
  { href: "mailto:satriaeza221@gmail.com", icon: <MailIcon /> },
  { href: "https://www.youtube.com/@SyahrezaSatria", icon: <YoutubeIcon /> },
];

const donationLinks = [
  { href: "https://tako.id/SyahrezaSatria", icon: <TakoIcon /> },
  { href: "https://paypal.me/SyahrezaSatriaAlfath", icon: <PaypalIcon /> },
];

// --- COMPONENT ---
export default function Home() {
  const { scrollYProgress } = useScroll()

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

      <div className="max-w-2xl mx-auto px-4 md:px-0 py-8">
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
              <DecryptedText
                text={profile.name}
                parentClassName="text-2xl font-semibold"
                encryptedClassName="text-2xl font-semibold"
                animateOn="hover"
                revealDirection="center"
                sequential
                speed={50}
                maxIterations={10}
              />
              <TextType
                text={["Junior Front-end Developer", "UI/UX Designer", "Content Creator", "Photographer", "Graphic Designer", "Gamer"]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-gray-500"
                textColors={["#6a7282"]}
              />
            </div>
          </div>

          <p className="font-light text-justify">{profile.bio}</p>

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
            {education.map((edu) => (
              <EducationItem key={edu.id} {...edu} />
            ))}
          </section>

          <hr className="border-gray-100" />

          {/* Education Section */}
          <section className="space-y-4">
            <h2 className="font-bold text-xl">Skills</h2>

          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="p-8 max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-8 mt-10 border-t border-gray-200 ">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-xl">{profile.name}</h1>
            <p className="text-gray-500">Frontend Developer · UI Designer · Content Creator</p>
          </div>
          <p className="text-gray-500 text-sm mt-4 sm:mt-0 font-light">© 2025 Syahreza Satria Alfath. All rights reserved.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="font-bold text-lg">Get in touch with me</h2>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-lg">Donation</h2>
            <div className="flex gap-4">
              {donationLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}