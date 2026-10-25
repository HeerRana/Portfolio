import {
  ArrowUpRight,
  Github,
  Brain,
  Languages,
  Binary,
  Eye,
  Cpu,
  Sparkles,
  Activity,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiGooglegemini,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPython,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiNumpy,
  SiStreamlit,
  SiPytorch,
} from "react-icons/si";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Snippy — AI-Powered Code Sharing SaaS",
    period: "Full-Stack SaaS & Generative AI",
    description:
      "Architected an intelligent developer SaaS supporting secure code sharing with syntax highlighting and automatic formatting for 50+ languages. Integrated Google Generative AI for automated code quality scoring and documentation, plus real-time QR sharing and live status indicators.",
    image: "/projects/project1.png",
    tags: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Gemini AI", icon: SiGooglegemini },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MongoDB", icon: SiMongodb },
    ],
    link: "https://snippet-master-sepia.vercel.app/",
    github: "https://github.com/HeerRana/Snippet_Master",
  },
  {
    title: "TeamSync — Real-Time Collaboration Platform",
    period: "Full-Stack & Real-Time Systems",
    description:
      "Constructed a full-stack project management platform with granular role-based access control (Admin, Manager, Member, Viewer). Implemented live task updates and notifications with Socket.IO supporting up to 100 concurrent users, secured with Google OAuth and JWT, plus 3 interactive analytics dashboards.",
    image: "/projects/project2.png",
    tags: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "OAuth & JWT", icon: SiJsonwebtokens },
    ],
    link: "https://team-sync-nu-rust.vercel.app/",
    github: "https://github.com/HeerRana/TeamSync",
  },
  {
    title: "IMDb Sentiment Analysis — Deep Learning BiLSTM",
    period: "NLP & Deep Learning",
    description:
      "Developed an end-to-end sentiment analysis model leveraging a Bidirectional LSTM network on 50,000 IMDb reviews, securing 83.5% test accuracy. Built a custom TextVectorization pipeline (20k-word vocabulary, 250 sequence length) with fast real-time inference under 200ms.",
    image: "/projects/project3.png",
    tags: [
      { name: "Python", icon: SiPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "BiLSTM", icon: Brain },
      { name: "NLP", icon: Languages },
      { name: "TextVectorization", icon: Binary },
    ],
    link: null,
    github: "https://github.com/HeerRana/SentimentAnalysis-ADeepLearningProject",
  },
  {
    title: "Parking Space Counter (OpenCV)",
    period: "Computer Vision & Python",
    description:
      "Engineered a real-time computer vision system using OpenCV to detect and count available and occupied parking spots from video and live webcam feeds. Built with an interactive mouse picker to map parking slots, adaptive threshold image processing, and dynamic green/red status HUD overlays.",
    image: "/projects/project4.png",
    tags: [
      { name: "Python", icon: SiPython },
      { name: "OpenCV", icon: SiOpencv },
      { name: "NumPy", icon: SiNumpy },
      { name: "Computer Vision", icon: Eye },
    ],
    link: null,
    github: "https://github.com/HeerRana/Parking-space-counter-opencv",
  },
  {
    title: "AI Driver Drowsiness Monitoring System",
    period: "MediaPipe & Deep Learning",
    description:
      "Implemented a real-time driver fatigue monitoring system utilizing MediaPipe Face Mesh (468 3D landmarks) for head-pose invariant eye tracking and a custom lightweight CNN model (1.1 MB). Includes temporal buffer smoothing to prevent false alarms, Pygame audio alerts, and an interactive Streamlit dashboard.",
    image: "/projects/project5.png",
    tags: [
      { name: "Python", icon: SiPython },
      { name: "OpenCV", icon: SiOpencv },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "MediaPipe", icon: Cpu },
      { name: "Streamlit", icon: SiStreamlit },
    ],
    link: null,
    github: "https://github.com/HeerRana/Driver-Drowsiness-Detection",
  },
  {
    title: "Skin Lesion Classification Using Vision Transformer",
    period: "Medical AI & Research",
    description:
      "Engineered an end-to-end deep learning pipeline for 7-class skin lesion classification on the HAM10000 dataset (10,015 dermoscopic images). Implemented Gaussian filtering and CLAHE contrast enhancement, trained with Focal Loss and MixUp augmentation, and benchmarked ResNet50 (84% accuracy, 0.73 Macro F1) against ViT-B/16.",
    image: "/projects/project6.png",
    tags: [
      { name: "Python", icon: SiPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "ResNet50", icon: Cpu },
      { name: "ViT Transformer", icon: Sparkles },
      { name: "HAM10000", icon: Binary },
      { name: "Medical AI", icon: Activity },
    ],
    link: null,
    github: "https://github.com/HeerRana/SkinLessionClassification",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent full-stack, Generative AI, and deep learning
            engineering projects designed to solve practical, real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col justify-between border border-border/50 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50
                   to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Source on GitHub"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Project"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-primary font-medium">
                    <span>{project.period}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>Visit Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title flex items-center gap-1.5"
                      >
                        <h3 className="text-lg font-semibold group-hover/title:text-primary transition-colors leading-snug">
                          {project.title}
                        </h3>
                      </a>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title flex items-center gap-1.5"
                      >
                        <h3 className="text-lg font-semibold group-hover/title:text-primary transition-colors leading-snug">
                          {project.title}
                        </h3>
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                  {project.tags.map((tag, tagIdx) => {
                    const IconComponent = tag.icon;
                    return (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground group-hover:border-primary/30 hover:border-primary/60 hover:text-foreground transition-all duration-300"
                      >
                        {IconComponent && (
                          <IconComponent className="w-3.5 h-3.5 text-primary shrink-0" />
                        )}
                        <span>{tag.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/HeerRana?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View More on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
