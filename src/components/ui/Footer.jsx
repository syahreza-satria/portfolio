// src/components/ui/Footer.jsx

import React from "react";

const Footer = ({ profile, socialLinks, donationLinks }) => {
	// Menambahkan pengecekan untuk 'profile' untuk menghindari error jika prop tidak ada
	if (!profile) {
		console.warn("Profile prop is missing in Footer component.");
		return null; // Atau render fallback UI jika diinginkan
	}

	const currentYear = new Date().getFullYear(); // Dapatkan tahun saat ini secara dinamis

	return (
		<footer className="p-8 max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-8 mt-10 border-t border-gray-200 ">
			<div className="flex flex-col justify-between">
				<div>
					{/* Menggunakan profile.name dari props */}
					<h1 className="font-bold text-lg md:text-xl">{profile.name}</h1>
					<p className="text-gray-500 text-sm md:text-base">
						Frontend Developer · UI Designer · Content Creator
					</p>
				</div>
				<p className="text-gray-500 text-sm mt-4 sm:mt-0 font-light">
					{/* Menggunakan tahun saat ini dan profile.name */}© {currentYear}{" "}
					{profile.name}. All rights reserved.
				</p>
			</div>
			<div className="space-y-4">
				<div className="space-y-2">
					<h2 className="font-bold text-lg">Get in touch with me</h2>
					<div className="flex gap-4">
						{/* Memastikan socialLinks ada sebelum map */}
						{socialLinks &&
							socialLinks.map((link, index) => (
								<a
									key={`social-${index}`} // Key unik yang lebih baik
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-500 hover:text-black transition-colors"
									aria-label={link.name || "social link"} // Tambah aria-label untuk aksesibilitas
								>
									{link.icon}
								</a>
							))}
					</div>
				</div>
				<div className="space-y-2">
					<h2 className="font-bold text-lg">Donation</h2>
					<div className="flex gap-4">
						{/* Memastikan donationLinks ada sebelum map */}
						{donationLinks &&
							donationLinks.map((link, index) => (
								<a
									key={`donation-${index}`} // Key unik yang lebih baik
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-500 hover:text-black transition-colors"
									aria-label={link.name || "donation link"} // Tambah aria-label
								>
									{link.icon}
								</a>
							))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
