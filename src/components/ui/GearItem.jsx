"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const GearItem = ({ brand, model, image, description, link }) => {
	return (
		<div className="block overflow-hidden rounded-xl border border-gray-200 bg-white">
			<div className="relative aspect-square">
				<Image
					src={image}
					alt={`${brand} ${model}`}
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					className="object-cover"
				/>
			</div>
			<div className="p-5 space-y-3 border-t">
				<div>
					<h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
						{brand}
					</h3>
					<h4 className="text-base font-semibold text-gray-800">{model}</h4>
				</div>
				<p className="text-sm text-gray-600 line-clamp-3">{description}</p>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center gap-1 text-sm font-medium text-sky-600 transition-colors duration-300 hover:text-sky-800"
				>
					<span>Lihat Produk</span>
					<FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</a>
			</div>
		</div>
	);
};

export default GearItem;
