import Image from "next/image";

const ExperienceItem = ({
	logo,
	company,
	position,
	description,
	period,
	link,
}) => {
	return (
		<div className="flex items-center justify-between px-0 py-1 transition-all duration-300 rounded-lg group md:px-4 md:hover:px-2 hover:bg-gray-100 hover:py-2 md:hover:scale-110">
			<div className="flex items-start gap-4">
				<Image
					src={logo}
					width={60}
					height={60}
					className="object-contain p-1 mb-auto transition-all duration-300 bg-white border border-gray-200 rounded-full group-hover:mb-0"
					alt={`${company} Logo`}
				/>
				<div className="flex flex-col">
					<a
						href={link}
						target="_blank"
						className="text-sm font-bold text-gray-700 md:text-base hover:underline"
					>
						{position}
					</a>
					<span className="text-xs font-semibold text-gray-500 md:text-sm">
						{company}
					</span>
					<ul className="mt-1 text-xs text-gray-500 list-disc list-inside md:text-sm">
						{description.map((desc, index) => (
							<li key={index}>{desc}</li>
						))}
					</ul>
				</div>
			</div>

			<span className="mb-auto text-xs font-medium text-gray-600 transition-all duration-300 md:text-sm whitespace-nowrap">
				{period}
			</span>
		</div>
	);
};

export default ExperienceItem;
