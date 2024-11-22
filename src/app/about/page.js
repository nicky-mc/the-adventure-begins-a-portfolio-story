// About.jsx
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQH839lLDu-jQw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731101331762?e=1737590400&v=beta&t=2DsI2a9EwERd1wKS29b63gsPxZqLenR1OXzrO6QleX4" // Ensure this path points to your profile image
            alt="Dominique Mortoza-Cowles"
            className="rounded-full shadow-lg w-48 h-48 object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <p className="text-lg leading-relaxed">
            Greetings, adventurer! I am Dominique Mortoza-Cowles, a Level 20 Sorcerer of the
            Phoenix Bloodline with a focus on web development magic. My skills include mastering
            HTML, CSS, JavaScript, TailwindCSS, Node.js, TypeScript, PostgreSQL, and modern frameworks like React and Next.js.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            When I'm not weaving spells in the form of functional, user-friendly apps, I enjoy exploring fantasy worlds,
            honing my problem-solving skills, and bringing ideas to life with innovative designs.
            Let’s embark on an adventure together!
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
    </div>
  );
}
