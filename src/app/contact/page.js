"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <div className="max-w-2xl mx-auto bg-neutral p-6 rounded-lg shadow-md">
        <p className="text-lg leading-relaxed mb-4">
          If you&apos;d like to discuss potential opportunities, collaborations, or just chat about
          web development magic or dungeons and dragons, feel free to reach out! You can download my CV or email me directly.
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

        {/* Email Button */}
        <div className="text-center">
          <a
            href="mailto:d.mortozacowles@gmail.com?subject=Hello Dominique!&body=Hi Dominique, I’d like to connect with you about..."
            className="btn btn-accent w-full"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </div>
  );
}
