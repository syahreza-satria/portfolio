import Image from 'next/image';

const EducationItem = ({ logo, university, degree, gpa, period }) => {
    return (
        <div className="flex justify-between items-start">
            <div className="flex gap-4 items-center">
                <Image
                    src={logo}
                    width={60}
                    height={60}
                    className="rounded-full bg-white object-contain border border-gray-200 p-1"
                    alt={`${university} Logo`}
                />
                <div>
                    <h3 className="font-medium">{university}</h3>
                    <p className="text-sm text-gray-500">{degree} (GPA: {gpa})</p>
                </div>
            </div>
            <span className="text-sm font-medium text-gray-600 whitespace-nowrap">{period}</span>
        </div>
    );
};

export default EducationItem;