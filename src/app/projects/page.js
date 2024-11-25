import React from 'react';

const projects = [
  {
    title: 'Portfolio',
    description: 'An Alternate Portfolio for myself to showcase my skills and projects and for you to view.',
    imageUrl: '/images/project1.png',
    link: 'https://nicky-mortoza-cowles-portfolio.vercel.app/',
  },
  {
    title: 'The Nexus',
    description: 'A Nextjs full stack site that serves as a companion for d&d players and dungeon masters a like this one will be ever expanding so watch out for these changes.',
    imageUrl: '/images/project2.png',
    link: 'https://the-nexus.vercel.app/',
  },
  {
    title: 'The Sparkle Zone',
    description: 'A project utilising nextjs and supabase to create blog posts allowing comments using CRUD operations as well as including things I enjoy and utilising as many of the skills learnt so far during my Bootcamp with Tech Educators UK in Norwich..',
    imageUrl: '/images/project3.png',
    link: 'https://the-sparkle-zone.vercel.app/',
  },
  {
    title: 'Leasons Learnt',
    description: 'A collection of lessons put to dynamic use including useReducer, Object Oriented Programming, and Context.',
    imageUrl: '/images/project4.png',
    link: 'https://week11-lessons-maybe.vercel.app/',
  },
  {
    title: 'Monster Smasher',
    description: 'A fun clicker game where players can smash the monster and earn points and buy upgrades. Built with React.',
    imageUrl: '/images/project6.png',
    link: 'https://week-6-assignment-9lus.onrender.com/',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}