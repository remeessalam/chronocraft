import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const ChronocraftFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. So, what exactly is Chronocraft AI?",
      answer: (
        <div>
          <p>
            Chronocraft AI is a creative-tech platform that combines intelligent
            storytelling, adaptive AI, and interactive worldbuilding. It's a
            space where your imagination teams up with responsive technology to
            create dynamic characters, evolving narratives, and immersive realms
            that shift based on your input.
          </p>
          <p className="mt-2">
            It's not just about watching or playing — it's about co-creating.
          </p>
        </div>
      ),
    },
    {
      question: "2. How does it actually work?",
      answer: (
        <div>
          <p>
            At the core, Chronocraft runs on an advanced AI framework designed
            to learn from you — your choices, your style, and your creativity.
            As you explore different storylines or build new worlds, the AI
            adapts and responds in real time.
          </p>
          <p className="mt-2">
            Every character you meet, every story you shape, and every outcome
            you influence is part of a living, breathing digital universe.
          </p>
        </div>
      ),
    },
    {
      question: "3. What makes Chronocraft different from other platforms?",
      answer: (
        <div>
          <p>
            Chronocraft isn't just another interactive app or storytelling
            engine. It brings together a few powerful elements:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Intelligent Digital Beings that evolve based on your interactions.
            </li>
            <li>
              Nonlinear Story Universes where every choice you make branches
              into a new path.
            </li>
            <li>
              Knowledge Layers embedded into the worlds — where wisdom, science,
              and philosophy mix.
            </li>
            <li>
              Collaborative Design that allows creators to build, share, and
              remix each other's visions.
            </li>
          </ul>
          <p className="mt-2">
            It's creativity with depth — powered by technology that thinks with
            you, not just for you.
          </p>
        </div>
      ),
    },
    {
      question: "4. Who's Chronocraft built for?",
      answer: (
        <div>
          <p>
            This platform is made for curious minds — people who love exploring
            ideas, building stories, and bending the rules of traditional
            narrative.
          </p>
          <p className="mt-2">Whether you're a:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Storyteller or Game Designer</li>
            <li>Philosopher, Futurist, or Technologist</li>
            <li>Seeker of Conscious Growth</li>
            <li>
              Or simply someone who loves blending imagination with
              innovation...
            </li>
          </ul>
          <p className="mt-2">
            Chronocraft gives you the tools and playground to do it.
          </p>
        </div>
      ),
    },
    {
      question: "5. Can Chronocraft help me grow creatively or mentally?",
      answer: (
        <div>
          <p>
            Absolutely. While it's a creative platform at its core, Chronocraft
            naturally sparks growth in a few areas:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <span className="font-medium">
                Systems Thinking & Multiverse Logic
              </span>{" "}
              — You start seeing ideas from multiple angles at once.
            </li>
            <li>
              <span className="font-medium">Self-Awareness</span> —
              Conversations with intelligent agents can mirror and challenge
              your own beliefs.
            </li>
            <li>
              <span className="font-medium">Intentional Creation</span> — You
              learn to shape outcomes with clearer vision and focus.
            </li>
            <li>
              <span className="font-medium">Collaborative Innovation</span> —
              You become part of a bigger ecosystem exploring the future of
              consciousness and creativity.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "6. Is there a community I can join?",
      answer: (
        <div>
          <p>
            Yes — and it's a powerful one. Chronocraft is home to creators,
            thinkers, developers, and digital dreamers who are building the
            future together.
          </p>
          <p className="mt-2">Inside the community, you'll find:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Story-sharing spaces</li>
            <li>Creative collaborations</li>
            <li>
              Deep discussions on AI, digital philosophy, and where it's all
              heading
            </li>
          </ul>
          <p className="mt-2">
            It's more than a community — it's a collective experiment in
            intelligent storytelling.
          </p>
        </div>
      ),
    },
    {
      question: "7. How do I start using Chronocraft AI?",
      answer: (
        <div>
          <p>Getting started is simple:</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>Head to chronocraft-taupe.vercel.app.</li>
            <li>Create an account and customize your user profile.</li>
            <li>
              Jump in — start building, exploring, and interacting with
              AI-powered characters and worlds.
            </li>
          </ol>
          <p className="mt-2">
            You're only a few clicks away from shaping your own multiverse.
          </p>
        </div>
      ),
    },
    {
      question: "8. Is it free, or do I need to pay to access everything?",
      answer: (
        <div>
          <p>Chronocraft offers both free and premium options:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <span className="font-medium">Free Tier</span> – Great for
              exploring core features, testing creative ideas, and getting to
              know the platform.
            </li>
            <li>
              <span className="font-medium">Premium Access</span> – Unlocks
              deeper AI customization, richer story environments, and exclusive
              content designed for advanced creators.
            </li>
          </ul>
          <p className="mt-2">
            You can explore at your own pace and upgrade when you're ready.
          </p>
        </div>
      ),
    },
    {
      question: "9. What about my privacy and data? Is it safe here?",
      answer: (
        <div>
          <p>
            We take privacy seriously. Chronocraft is built with future-focused,
            secure design principles:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Your data is yours — we don't sell it or share it.</li>
            <li>All activity is encrypted for your protection.</li>
            <li>
              We're actively working on decentralized storage options to stay
              aligned with emerging Web 5.0 standards.
            </li>
          </ul>
          <p className="mt-2">
            Trust and creativity go hand-in-hand — and we're committed to both.
          </p>
        </div>
      ),
    },
    {
      question: "10. Can I add my own stories or ideas to Chronocraft?",
      answer: (
        <div>
          <p>Yes, please do. Chronocraft is designed to grow with its users:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Submit your own characters, worlds, or timelines.</li>
            <li>Collaborate with others on shared projects.</li>
            <li>
              Work directly with our team on new features or experimental
              storytelling tools.
            </li>
          </ul>
          <p className="mt-2">
            Your vision helps shape the Chronocraft ecosystem. We're building
            this together.
          </p>
        </div>
      ),
    },
    {
      question: "11. How does Chronocraft tie into Web 5.0 and future tech?",
      answer: (
        <div>
          <p>
            Chronocraft is more than just a modern platform — it's built for
            where the web is going next:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Self-Evolving AI that responds in real time.</li>
            <li>
              Quantum Narrative Structures where stories don't follow a straight
              line.
            </li>
            <li>
              Metaverse & Multiverse Readiness with seamless world transitions.
            </li>
            <li>Decentralized Design so users have ownership and control.</li>
          </ul>
          <p className="mt-2">
            In short: it's a platform built not just for today, but for the
            digital realities of tomorrow.
          </p>
        </div>
      ),
    },
    {
      question: "12. I want to learn more or ask a question — where do I go?",
      answer: (
        <div>
          <p>We've got you covered:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Visit our official site for more insights and updates.</li>
            <li>
              Join the community for real conversations with creators like you.
            </li>
            <li>
              Reach out to our team for partnerships, feedback, or just to say
              hi.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="py-[4rem]">
      <div className="wrapper ">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primay mb-2">
            Chronocraft AI – Frequently Asked Questions
          </h1>
          <p className="text-lg text-primary italic">
            Where creative minds shape intelligent realities.
          </p>
          <div className="mt-4 text-gray-700">
            <p>
              Welcome to the Chronocraft AI FAQ. If you're curious about how
              we're blending immersive storytelling, conscious technology, and
              next-gen AI to redefine digital experiences — you're in the right
              place.
            </p>
            <p className="mt-2">Let's dive in.</p>
          </div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-blue-50 transition-all duration-200"
              >
                <span className="font-medium text-lg text-black">
                  {faq.question}
                </span>
                <span className="text-primary text-xl">
                  {openIndex === index ? (
                    <FiMinus className="h-6 w-6" />
                  ) : (
                    <FiPlus className="h-6 w-6" />
                  )}
                </span>
              </button>
              <div
                className={`bg-white transition-all duration-200 overflow-hidden ${
                  openIndex === index ? "max-h-screen py-4 px-6" : "max-h-0"
                }`}
              >
                <div className="text-gray-700">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-blue-100 rounded-lg text-center">
          <h2 className="text-xl font-bold text-primary mb-2">
            Final Thoughts
          </h2>
          <p className="text-gray-700">
            Chronocraft AI isn't just a tool or a platform. It's an open
            invitation to create with intelligence — to explore, build,
            question, and evolve.
          </p>
          <p className="mt-2 text-gray-700">
            If you've ever imagined shaping your own universe, building
            intelligent characters, or being part of something bigger than a
            game or a story... you'll feel right at home here.
          </p>
          <p className="mt-4 font-medium text-primary">
            So, are you ready to create what comes next?
          </p>
          <p className="mt-2 font-medium text-primary">
            Let's build the future — one story at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChronocraftFAQ;
