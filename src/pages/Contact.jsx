import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-10 border border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="Email: example@gmail.com"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              placeholder="Your Message"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white resize-none transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
