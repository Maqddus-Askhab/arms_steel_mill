'use client';

import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
    {
        title: "Chemical Research",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/image.png",
        icon: "flask",
    },
    {
        title: "Mechanical Engineering",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/image.png",
        icon: "cogs",
    },
    {
        title: "Power and Energy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/image.png",
        icon: "lightbulb",
    },
    {
        title: "Material Engineering",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/image.png",
        icon: "industry",
    },
    {
        title: "Agriculture Processing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/image.png",
        icon: "tractor",
    },
    {
        title: "Petroleum and Gas",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/image.png",
        icon: "oil-can",
    },
];

const Services = () => {
    return (
        <section className="py-16 bg-[#e9eef4] flex flex-col md:flex-row justify-between items-center w-full mx-auto p-6 mt-12">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        OUR <span className="text-[#4a6480]">SERVICES</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar lacus at feugiat iaculis.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto my-4"
                        >
                            <div className="overflow-hidden rounded-lg">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="mt-6 flex items-center space-x-4">
                                <div className="text-[#4a6480]">
                                    <i className={`fas fa-${service.icon} text-3xl`}></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600">{service.description}</p>
                                </div>
                            </div>
                            <Link
                                href="#"
                                className="text-[#4a6480] mt-4 inline-block font-semibold"
                            >
                                Read More »
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
