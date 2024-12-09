"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isMainAccordionOpen, setIsMainAccordionOpen] = useState(false);
  const [isNestedAccordionOpen, setIsNestedAccordionOpen] = useState(false);
  const accordionRef = useRef(null);

  // Close accordion when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accordionRef.current && !accordionRef.current.contains(event.target)) {
        setIsMainAccordionOpen(false);
        setIsNestedAccordionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="/images
/155E2806-D377-48C8-9281-D0A4870CAA30.jpeg"
            alt="Dominique Mortoza-Cowles"
            className="rounded-full shadow-lg w-48 h-48 object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <p className="text-lg leading-relaxed">
            Greetings, adventurer! I am Nicky Mortoza-Cowles, a Level 20 Sorcerer of the
            Phoenix Bloodline with a focus on web development magic. My skills include mastering
            HTML, CSS, JavaScript, TailwindCSS, Node.js, TypeScript, PostgreSQL, and modern frameworks like React and Next.js.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            When I&apos;m not weaving spells in the form of functional, user-friendly apps, I enjoy exploring fantasy worlds,
            honing my problem-solving skills, and bringing ideas to life with innovative designs.
            Let&apos;s embark on an adventure together!
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I am a web developer with a passion for creating beautiful and functional websites. I have experience in various web technologies and love to learn new things. Enthusiastic and detail-oriented individual transitioning into the tech industry with hands-on experience from a software development boot camp, which I graduated with high standards. I am eager to bring my technical support background, problem-solving skills, and ability to communicate technical concepts to a new and challenging role in Web Development.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link href="/contact" className="btn btn-primary">
              Contact Me
            </Link>
            <Link href="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Accordion */}
      <div className="mt-12" ref={accordionRef}>
        <div
          className={`collapse bg-white shadow-md transition-all duration-500 ${
            isMainAccordionOpen ? "collapse-open" : "collapse-close"
          }`}
        >
          <div
            className="collapse-title flex justify-between items-center text-xl font-medium cursor-pointer"
            onClick={() => setIsMainAccordionOpen(!isMainAccordionOpen)}
          >
            Turning Creativity Into Code: My Portfolio Adventure 🧙‍♂️
            <span
              className={`transform transition-transform duration-500 ${
                isMainAccordionOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </div>
          <div
            className={`collapse-content overflow-hidden transition-all duration-500 ease-in-out ${
              isMainAccordionOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg leading-relaxed mt-4">
              Growing up, storytelling was woven into the fabric of my life. My father had a talent for spinning amusing tales (and very, very, very bad jokes), and my grandfather, a proud Glaswegian, was the epitome of a “patter merchant”—charming and quick-witted, always ready with a story to captivate his audience. (Once, between the two of them, they tried to convince my siblings and me that a haggis was a three-legged creature that lived in Scotland, its fur used to make kilts, and its body to make a bagpipe.)
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Those influences shaped how I view the world (and continued with my own son, much to his head-shaking at how lame a parent he has (teens, huh?)): as a series of adventures, challenges, and opportunities to tell a tale.
            </p>

            {/* Nested Accordion */}
            <div
              className={`collapse bg-gray-50 shadow-md transition-all duration-500 mt-4 ${
                isNestedAccordionOpen ? "collapse-open" : "collapse-close"
              }`}
            >
              <div
                className="collapse-title flex justify-between items-center text-lg font-medium cursor-pointer"
                onClick={() => setIsNestedAccordionOpen(!isNestedAccordionOpen)}
              >
                Why Storytelling?
                <span
                  className={`transform transition-transform duration-500 ${
                    isNestedAccordionOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              <div
                className={`collapse-content transition-all duration-500 ease-in-out ${
                  isNestedAccordionOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-lg leading-relaxed mt-4">
                  It’s no wonder, then, that I’ve turned my portfolio into <strong>The Adventure Begins: A Portfolio Story</strong>. This isn’t just a standard list of projects or a plain resume—it’s an immersive journey into my creative and technical skills, told in a way that reflects who I am.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Why did I choose this approach? Because storytelling is one of the most powerful tools we have to connect with others, and in a competitive industry, standing out matters. Turning my skills into a story not only showcases my work—it engages, inspires, and leaves a lasting impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
