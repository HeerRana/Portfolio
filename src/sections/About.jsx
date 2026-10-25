import { Code2, Brain, Sparkles, Database } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "Building responsive interfaces with React & Next.js, backed by scalable Node.js/Express APIs and Socket.IO for real-time sync.",
  },
  {
    icon: Brain,
    title: "AI & Deep Learning",
    description:
      "Developing computer vision & NLP models with TensorFlow, Keras, ResNet50, and Vision Transformers on complex datasets.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Integration",
    description:
      "Integrating Google Generative AI to automate code scoring, documentation, and intelligent developer assistance.",
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    description:
      "Managing MongoDB & SQL databases, Cloudinary media storage, secure JWT authentication, and deploying on Vercel & Render.",
  },
];

const technicalAreas = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT Authentication"],
  },
  {
    category: "AI / ML",
    skills: ["Python", "TensorFlow", "Keras", "Google Generative AI", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB", "SQL", "Appwrite", "Cloudinary", "Vercel", "Render"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Figma", "MVC Architecture"],
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Bridging software engineering with
              <span className="font-serif italic font-normal text-white">
                {" "}
                intelligent AI solutions.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a final-year B.Tech Computer Science and Engineering (AI-ML)
                student at Adani University, passionate about building scalable
                full-stack applications and integrating AI/ML capabilities into
                practical software solutions.
              </p>
              <p>
                My interests span full-stack development, Generative AI
                integration, machine learning, and end-to-end product
                development. I enjoy working across the development lifecycle,
                from designing user interfaces and building backend APIs to
                managing databases and integrating intelligent features into
                applications.
              </p>
              <p>
                During my research internship at Adani University, I worked on
                skin lesion classification using deep learning, developing image
                preprocessing pipelines and benchmarking ResNet50 and Vision
                Transformer architectures on the HAM10000 dataset.
              </p>
              <p>
                I am particularly interested in connecting traditional software
                engineering with AI capabilities to build applications that are
                useful, interactive, and reliable. Open to full-time roles in
                software development, full-stack engineering, and AI-integrated
                solutions.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to bridge traditional engineering with AI
                innovations — building scalable, intelligent products that solve
                real-world challenges with speed and dependability."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in flex flex-col justify-between"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Areas Breakdown */}
        <div className="mt-20 glass p-8 rounded-3xl border border-primary/20 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 text-foreground">
            Technical Areas & Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalAreas.map((area, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-sm font-semibold text-primary">
                  {area.category}
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {area.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
