import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
  Contact as ContactIcon,
  Navigation,
  Rocket,
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setIsSubmitting(false);
        e.target.reset();

        setTimeout(() => setStatus(""), 5000);
      })
      .catch(() => {
        setStatus("error");
        setIsSubmitting(false);

        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 md:px-8 bg-white overflow-hidden relative"
    >
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#fde047] border-[3px] border-black rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] hidden lg:block"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-[#3b82f6] text-white font-black px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-3 mb-6 tracking-widest uppercase">
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
            Let's Build <br />
            <span className="text-[#ec4899] border-b-[6px] border-black pb-1">Something Cool</span>
          </h2>

          <p className="mt-8 text-gray-700 font-medium text-lg max-w-xl">
            Got a project idea or looking to collaborate? Don't hesitate to reach out — I'd love to
            hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full relative z-10">
          <div className="relative mt-4 lg:mt-0">
            <div className="absolute -top-6 -left-4 md:-left-6 bg-[#fde047] p-3 border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-6 z-20">
              <ContactIcon size={28} strokeWidth={2.5} />
            </div>

            <div className="bg-white border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8 md:p-10 h-full flex flex-col">
              <h3 className="text-2xl font-black uppercase tracking-wider mb-8 border-b-4 border-black inline-block pb-1 w-fit">
                Contact Info
              </h3>

              <div className="flex flex-col gap-8 flex-grow">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#c084fc] border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0">
                    <Mail size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:andika12des@gmail.com"
                      className="font-bold text-base md:text-lg hover:text-[#3b82f6] hover:underline transition-colors"
                    >
                      andika12des@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#4ade80] border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0">
                    <Phone size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+6282190087153"
                      className="font-bold text-base md:text-lg hover:text-[#3b82f6] hover:underline transition-colors"
                    >
                      +62 821 9008 7153
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#f472b6] border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0">
                    <MapPin size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                      Location
                    </p>
                    <p className="font-bold text-base md:text-lg">Makassar, Sulawesi Selatan</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t-[3px] border-black flex flex-col items-center">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Connect With Me
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/andika121204/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://github.com/andikaPalian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andika-palian-4b96b0309/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0">
            <div className="absolute -bottom-6 -right-4 md:-right-6 w-full h-full bg-[#d8b4fe] border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-3 z-0"></div>

            <div className="absolute -top-6 -right-4 md:-right-6 bg-[#38bdf8] p-3 border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-12 z-20">
              <Navigation size={28} strokeWidth={2.5} />
            </div>

            <div className="relative bg-[#f4f4f5] border-[3px] border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8 md:p-10 z-10 h-full flex flex-col">
              <h3 className="text-2xl font-black uppercase tracking-wider mb-8 border-b-4 border-black inline-block pb-1 w-fit">
                Send a Message
              </h3>

              <form className="flex flex-col gap-6 flex-grow" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full p-3 border-[3px] border-black bg-white focus:outline-none focus:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-shadow font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="contact@example.com"
                    className="w-full p-3 border-[3px] border-black bg-white focus:outline-none focus:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-shadow font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2 flex-grow">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full p-3 border-[3px] border-black bg-white h-32 md:h-full resize-none focus:outline-none focus:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-shadow font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-2 w-full font-black text-lg py-4 border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3 uppercase tracking-wider ${
                    isSubmitting
                      ? "bg-gray-400 text-black cursor-not-allowed translate-y-[4px] translate-x-[4px] shadow-none"
                      : "bg-[#3b82f6] text-white hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none"
                  }`}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"} <Rocket size={24} />
                </button>

                {status === "success" && (
                  <div className="bg-[#4ade80] border-[3px] border-black text-black font-bold p-3 text-center shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-fade-in uppercase tracking-wider text-sm mt-2">
                    ✅ Message sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="bg-[#f87171] border-[3px] border-black text-black font-bold p-3 text-center shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-fade-in uppercase tracking-wider text-sm mt-2">
                    ❌ Failed to send message.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
