"use client";

import Header from "@/components/ui/Header";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/icons";
import { FaDribbble, FaSquareThreads, FaThreads } from "react-icons/fa6";

export default function projectPage() {
	return (
		<main className="max-w-3xl px-4 py-24 mx-auto space-y-10 text-gray-800 md:px-0 lg:py-16">
			<Header />

			<div>
				<h2 className="text-2xl font-bold tracking-tight text-black md:text-4xl">
					Contact
				</h2>
				<p className="mt-4 text-lg text-gray-600">
					Feel free to get in touch. Let's discuss how we can collaborate and
					create something amazing together.
				</p>
			</div>

			<hr className="border-gray-200" />

			<div className="space-y-6">
				<h3 className="text-xl font-semibold tracking-tight text-black">
					Find me on social media
				</h3>
				<div className="flex flex-wrap items-center gap-4 md:flex-nowrap">
					<a
						href="https://github.com/syahreza-satria"
						className="flex items-center gap-3 px-4 py-2 font-semibold text-gray-800 transition duration-300 border border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black"
					>
						<GithubIcon size={18} />
						Github
					</a>
					<a
						href="https://linkedin.com/in/syahreza-satria-alfath"
						className="flex items-center gap-3 px-4 py-2 font-semibold text-gray-800 transition duration-300 border border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black"
					>
						<LinkedinIcon size={18} />
						LinkedIn
					</a>
					<a
						href="https://instagram.com/syahreza_satria"
						className="flex items-center gap-3 px-4 py-2 font-semibold text-gray-800 transition duration-300 border border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black"
					>
						<InstagramIcon size={18} />
						Instagram
					</a>
					<a
						href="https://threads.com/syahreza_satria"
						className="flex items-center gap-3 px-4 py-2 font-semibold text-gray-800 transition duration-300 border border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black"
					>
						<FaThreads size={18} />
						Threads
					</a>
					<a
						href="https://dribbble.com/SyahrezaSatria"
						className="flex items-center gap-3 px-4 py-2 font-semibold text-gray-800 transition duration-300 border border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black"
					>
						<FaDribbble size={18} />
						Dribbble
					</a>
				</div>
			</div>

			<hr className="border-gray-200" />

			<div className="space-y-6">
				<h3 className="text-xl font-semibold tracking-tight text-black">
					Or send me a message
				</h3>
				<form method="POST" className="flex flex-col gap-6">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<input
								id="name"
								name="name"
								type="text"
								className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
								placeholder="John Doe"
								required
							/>
						</div>
						<div>
							<input
								id="email"
								name="email"
								type="email"
								className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
								placeholder="example@gmail.com"
								required
							/>
						</div>
					</div>

					<div>
						<textarea
							id="message"
							name="message"
							className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
							placeholder="I'd like to discuss..."
							rows={5}
							required
						/>
					</div>

					<button
						className="w-full px-5 py-3 font-semibold text-white transition-colors duration-300 bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:cursor-pointer"
						type="submit"
					>
						Submit Message
					</button>
				</form>
			</div>
		</main>
	);
}
