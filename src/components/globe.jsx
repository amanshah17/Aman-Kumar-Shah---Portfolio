import IconCloud from "./ui/icon-cloud";

const slugs = [
  // Languages
  "javascript",
  "typescript",
  "java",
  "python",

  // Frontend
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "tailwindcss",

  // Backend
  "nodedotjs",
  "express",
  "spring",
  "springboot",

  // Databases
  "mysql",
  "postgresql",
  "mongodb",
  "firebase",

  // Tools & platforms
  "docker",
  "git",
  "github",
  "gitlab",
  "jira",
  "visualstudiocode",
  "vercel",
  "amazonaws",
  "nginx",

  // Testing
  "jest",
  "cypress",
  "testinglibrary",

  // Mobile app
  "flutter",
  "android",
  "androidstudio",

  // UI/UX
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-10 py-12 bg-transparent sm:px-20 sm:py-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
