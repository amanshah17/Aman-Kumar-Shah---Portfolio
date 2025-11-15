import HeroImg from "../../assets/images/hero.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Problem Solver, Creator, Innovator
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="developer illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold">Aman Kumar Shah</span>, a passionate
                Software Developer specializing in Java, Spring Boot, React.js, and
                modern frontend technologies like Tailwind CSS. I enjoy building clean,
                efficient, and user-focused web applications.{" "}
                <span className="font-bold text-white">
                  I love solving complex problems and turning ideas into real, functional software.
                </span>
              </p>

              <p className="text-white">
                I’m continuously improving my full-stack development skills, exploring backend
                architectures, clean code principles, and scalable system design. My projects
                reflect my dedication to learning and building real-world solutions — from
                Java-based applications to complete MERN-style web apps.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I believe in lifelong learning and continuous improvement. Whether it’s
                    mastering Java frameworks, building responsive UIs, or designing backend
                    systems, I aim to create meaningful digital experiences. My goal is to grow
                    as a full-stack developer and contribute to impactful tech projects.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      — Aman Kumar Shah, Software Developer
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white">Portfolio</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
