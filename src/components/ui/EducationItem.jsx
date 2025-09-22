import Image from "next/image";

const EducationItem = ({ logo, university, degree, gpa, period, link }) => {
	return (
		<div className="flex justify-between items-start px-0 md:px-4 md:hover:px-2 transition-all duration-300 hover:bg-gray-100 hover:py-2 py-1">
			<div className="flex gap-4 items-center">
				<Image
					src={logo}
					width={60}
					height={60}
					className="rounded-full bg-white object-contain border border-gray-200 p-1"
					alt={`${university} Logo`}
				/>
				<div>
					<a href={link} className="font-medium hover:underline">
						{university}
					</a>
					<p className="text-sm text-gray-500">
						{degree} (GPA: {gpa})
					</p>
				</div>
			</div>
			<span className="text-sm font-medium text-gray-600 whitespace-nowrap my-auto">
				{period}
			</span>
		</div>
	);
};

export default EducationItem;
