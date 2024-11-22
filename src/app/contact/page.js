"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <div className="max-w-2xl mx-auto bg-neutral p-6 rounded-lg shadow-md">
        <p className="text-lg leading-relaxed mb-4">
          If you`&apos;d like to discuss potential opportunities, collaborations, just chat about
          web development magic or dungeons and dragons,  feel free to reach out! You can download my CV or email me directly.
        </p>

        {/* Download CV */}
        <div className="mb-4">
          <a
            href="/cv.pdf"
            download="Dominique_Mortoza_Cowles_CV.pdf"
            className="btn btn-primary w-full text-center"
          >
            Download My CV
          </a>
        </div>

        {/* Email Form */}
        <form
          action="mailto:d.mortozacowles@gmail.com"
          method="post"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Type your message"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-accent w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
