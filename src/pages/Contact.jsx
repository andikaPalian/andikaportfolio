import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "../lib/utils";

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
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setIsSubmitting(false);
        e.target.reset();
      })
      .catch(() => {
        setStatus("error");
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-gradient-blue"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Got a project idea or looking to collaborate? Don’t hesitate to reach out — I’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-zinc-800/50 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="flex items-start font-medium"> Email</h4>
                  <a
                    href="mailto:andika12des@gmail.com"
                    className="text-muted-foreground hover:text-gradient-blue transition-colors"
                  >
                    andika12des@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-zinc-800/50 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="flex items-start font-medium"> Phone</h4>
                  <a
                    href="tel:+6282190087153"
                    className="text-muted-foreground hover:text-gradient-blue transition-colors"
                  >
                    +62 821 9008 7153
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-zinc-800/50 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="flex items-start font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-gradient-blue transition-colors">
                    Makassar, Sulawesi Selatan, Indonesia
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/andika-palian-4b96b0309/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/andika121204/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://github.com/andikaPalian" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-zinc-800/50 p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="flex items-start text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-start text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                  placeholder="contact@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex items-start text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-white"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-blue-600"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {status === "success" && (
                <p className="text-green-500 text-sm text-center mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">
                  ❌ Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;