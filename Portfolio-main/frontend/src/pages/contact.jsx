import React from 'react';

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <h1 className="text-4xl font-extrabold mb-6" style={{ color: "var(--text-color)" }}>
        Get in Touch
      </h1>

      <p className="text-lg mb-8 text-center max-w-2xl" style={{ color: "var(--text-color)" }}>
        I’d love to hear from you! Whether you have a question about projects, collaborations, or just want to say hi,
        feel free to drop me an email directly.
      </p>

      <a
        href="mailto:sahaibhumika04@gmail.com"
        className="font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:opacity-90"
        style={{
          backgroundColor: "var(--button-bg)",
          color: "var(--button-text)",
        }}
      >
        Send an Email
      </a>
    </div>
  );
};

export default Contact;