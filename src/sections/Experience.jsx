const experiences = [
  {
    period: "Secondary School · Class X",
    role: "Secondary School Certificate — 91.66%",
    company: "CBSE Board",
    description:
      "Graduated 10th standard with a score of 91.66% under CBSE board, building a strong academic grounding in Mathematics, Science, and Analytical Thinking.",
    technologies: ["CBSE Board", "Mathematics", "Science", "Foundation"],
    current: false,
  },
  {
    period: "Higher Secondary · Class XII (Science)",
    role: "Higher Secondary Certificate — 82 Percentile",
    company: "GNFC School · GSEB (English Medium)",
    description:
      "Completed Class 12th in the Science stream (PCM) with 82 percentile under the GSEB board (English Medium) from GNFC School, strengthening problem-solving skills and mathematical intuition for engineering.",
    technologies: [
      "GSEB (English Medium)",
      "GNFC School",
      "Physics",
      "Chemistry",
      "Mathematics (PCM)",
    ],
    current: false,
  },
  {
    period: "Jun 2026 — Jul 2026",
    role: "Research Intern — Skin Cancer Detection",
    company: "Adani University (Under Dr. Abhay Sharma)",
    description:
      "Engineered an end-to-end deep learning pipeline for 7-class skin lesion classification utilizing the HAM10000 dataset (10,015 dermoscopic images). Implemented automated preprocessing with Gaussian filtering and CLAHE contrast enhancement. Conducted 4 experimental phases with Focal Loss, MixUp augmentation, and early stopping. Benchmarked ResNet50 (84% peak accuracy, 0.73 Macro F1) against ViT-B/16 (76% accuracy).",
    technologies: [
      "Python",
      "ResNet50",
      "Vision Transformer (ViT)",
      "HAM10000",
      "CLAHE",
      "MixUp",
      "Deep Learning",
    ],
    current: false,
  },
  {
    period: "Jul 2023 — Present",
    role: "B.Tech in Computer Science & Engineering (AI-ML)",
    company: "Adani University · Ahmedabad, Gujarat",
    description:
      "Currently in 7th semester maintaining a 8.19 / 10 CGPA. Specializing in AI/ML, Generative AI, and full-stack software engineering. Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Machine Learning, Deep Learning, Operating Systems, Computer Networks, IoT & Automation.",
    technologies: [
      "CGPA: 8.19",
      "Data Structures & Algorithms",
      "DBMS",
      "Machine Learning",
      "Deep Learning",
      "Full-Stack Dev",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Milestones that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              define the path.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my academic grounding and technical growth, from
            foundation schooling to cutting-edge deep learning research and full-stack software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
