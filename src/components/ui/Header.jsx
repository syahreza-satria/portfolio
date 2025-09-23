import { motion, useScroll } from "motion/react";
import { profile } from "@/data";
import DecryptedText from "../DecryptedText";
import TextType from "../TextType";
import Image from "next/image";

const Header = () => {
	const { scrollYProgress } = useScroll();

	return (
		<div className="flex items-center gap-4 bg-black p-4 text-white rounded-2xl">
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
	);
};

export default Header;
