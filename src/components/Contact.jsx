import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE, // replace with EmailJS service ID
        "template_641s0u9", // replace with EmailJS template ID
        formRef.current,
        "z0I1zK3rc4GhZlhdc" // replace with EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.error("Error:", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-6 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative w-full max-w-lg bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/20 z-10">
        <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Contact Us
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="user_name"
              required
              placeholder=" "
              className="peer w-full p-4 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-transparent transition"
            />
            <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
              Your Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="user_email"
              required
              placeholder=" "
              className="peer w-full p-4 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-transparent transition"
            />
            <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
              Your Email
            </label>
          </div>

          {/* Message Box */}
          <div className="relative">
            <textarea
              name="message"
              rows="5"
              required
              placeholder=" "
              className="peer w-full p-4 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-transparent transition"
            ></textarea>
            <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
              Message
            </label>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg font-semibold shadow-lg transform transition-transform hover:scale-105 hover:shadow-cyan-500/40"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Success Toast */}
        {sent && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500/90 text-white px-6 py-2 rounded-full shadow-md animate-fadeIn">
            ✅ Message Sent Successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
