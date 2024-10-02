'use client';
import React from 'react';
import Image from 'next/image'; 

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Danial Jain',
    role: 'Mechanical Engineering',
    imageSrc: '/img.jpeg', 
  },
  {
    name: 'Margorie Hych',
    role: 'Testing Manager',
    imageSrc: '/img.jpeg',
  },
  {
    name: 'Cheryl Ray Lam',
    role: 'Interior Designer',
    imageSrc: '/img.jpeg',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-16">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          OUR <span className="text-[#4a6480]">TEAM</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar lacus at feugiat iaculis. 
          Suspendisse at viverra mauris, sit amet facilisis lectus.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center bg-gray-100 p-8 md:p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"> 
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={144} 
                height={144} 
                className="object-cover mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold mb-2 text-white bg-[#4a6480] hover:bg-[#3b5065] inline-block px-6 py-2 rounded-md">
                {member.name}
              </h3>
              <p className="italic text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
