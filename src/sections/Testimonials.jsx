import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Working alongside Heer throughout our 7th semester in AI-ML has been an incredible experience. Her knack for blending complex machine learning architectures with seamless full-stack web applications always elevates our team projects.",
    author: "Dwij Gosai",
    role: "Final-Year B.Tech CSE (AI-ML), Adani University",
    avatar: "/friend1.jpeg",
  },
  {
    quote:
      "Heer brings exceptional clarity, analytical depth, and problem-solving energy to every collaboration. Whether tackling advanced deep learning models or engineering real-time features in TeamSync, she consistently delivers high-impact results.",
    author: "Pranjal Jethva",
    role: "Final-Year B.Tech CSE (AI-ML), Adani University",
    avatar: "/friend2.jpeg",
  },
  {
    quote:
      "Heer's dedication to mastering both cutting-edge Generative AI and full-stack development is truly motivating. In our final-year cohort, she is known for her rock-solid work ethic, rapid learning ability, and collaborative spirit.",
    author: "Stuti Patel",
    role: "Final-Year B.Tech CSE (AI-ML), Adani University",
    avatar: "/friend4.jpeg",
  },
  {
    quote:
      "Collaborating and growing with my 7th semester AI-ML peers at Adani University has been the most fulfilling part of our engineering journey. Building impactful AI applications, exploring deep learning pipelines, and solving hard problems alongside great friends motivates me every day.",
    author: "Heer Rana",
    role: "Final-Year B.Tech CSE (AI-ML), Adani University",
    avatar: "/heer.jpeg",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Peer & Friends Feedback
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              classmates & peers.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
