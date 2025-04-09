import React from "react";
import {
  JavascriptOriginal,
  ReactOriginal,
  NodejsOriginalWordmark,
  ExpressOriginal,
  FlaskOriginal,
  MongodbOriginalWordmark,
  PostgresqlOriginalWordmark,
  PrismaOriginalWordmark,
  PythonOriginal,
  TailwindcssOriginal,
  Html5Original,
  Css3Original,
  MysqlOriginalWordmark,
} from "devicons-react";

const About = () => {
  const Skills = [
    { icon: <JavascriptOriginal size={"45"} />, name: "JavaScript" },
    { icon: <ReactOriginal size={"45"} />, name: "React" },
    { icon: <NodejsOriginalWordmark size={"45"} />, name: "Node.js" },
    { icon: <ExpressOriginal size={"45"} />, name: "Express" },
    { icon: <FlaskOriginal size={"45"} />, name: "Flask" },
    { icon: <MongodbOriginalWordmark size={"45"} />, name: "MongoDB" },
    { icon: <PostgresqlOriginalWordmark size={"45"} />, name: "PostgreSQL" },
    { icon: <PrismaOriginalWordmark size={"45"} />, name: "Prisma" },
    { icon: <PythonOriginal size={"45"} />, name: "Python" },
    { icon: <TailwindcssOriginal size={"45"} />, name: "Tailwind CSS" },
    { icon: <Html5Original size={"45"} />, name: "HTML5" },
    { icon: <Css3Original size={"45"} />, name: "CSS3" },
    { icon: <MysqlOriginalWordmark size={"45"} />, name: "MySQL" },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="p-8 rounded-2xl border-white/10 border hover:-translate-y-1 transition-all bg-white/4">
          <p className="text-gray-300 mb-6">
            Hi! I'm Andika Palian, a backend developer who loves turning ideas
            into scalable and secure web applications. With a strong foundation
            in Node.js, Express.js, MongoDB, and PostgreSQL, I specialize in
            building clean APIs, real-time features with Socket.IO, and robust
            authentication systems.
          </p>
          <p className="text-gray-300">
            Over the years, I’ve worked on various backend projects ranging from
            e-commerce systems to social media APIs and real-time chat apps. I'm
            passionate about writing maintainable code, designing efficient
            database structures, and solving backend challenges that power great
            user experiences.
          </p>
          {/* <p className="text-gray-300 mb-6">
            Currently, I’m exploring more about AI/ML, and I’m always open to
            learning new tech and collaborating on exciting projects. If you’re
            looking for someone who’s committed, curious, and loves backend
            development—let’s connect!
          </p> */}
        </div>

        <div className="gap-6 mt-8 rounded-xl p-6 hover:-translate-y-1 transition-all bg-white/4 mr-[400px] pb-[50px]">
          <h3 className="text-xl font-bold mb-4 relative text-center">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2 ">
            {Skills.map((skill, index) => (
              <span key={index} className="">
                {skill.icon}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-xl hover:-translate-y-1 transition-all bg-white/4 relative mr-[370px] left-[370px] -top-[268px] pb-[150px]">
          <h3 className="text-xl font-bold mb-4 text-center">🏫 Educstion</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Teknologi Informasi </strong> - Universitas Bosowa (2023 -
              now)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
