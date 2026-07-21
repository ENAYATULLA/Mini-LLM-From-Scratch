// Single source of truth for factual, verifiable project and author details.
// Only information that exists in the repository or was explicitly provided
// belongs here. Do not add parameter counts, benchmarks, dataset sizes,
// hardware, or training statistics unless they are confirmed.

export const siteConfig = {
  name: "Mini LLM From Scratch",
  tagline: "Learn Transformers by building one",
  description:
    "Educational GPT-style Transformer implementation built from scratch using Python and PyTorch. Learn tokenization, embeddings, self-attention, transformer blocks, training and autoregressive text generation through clean, modular code.",
  url: "https://mini-llm-from-scratch.vercel.app",
  repository: "https://github.com/ENAYATULLA/Mini-LLM-From-Scratch",
  license: "MIT",
  ogImage: "/og-image.png",
};

export const author = {
  name: "Enayat Ullah",
  role: "Computer Science Graduate",
  bio: [
    "I'm a Computer Science graduate with a strong interest in Artificial Intelligence, Machine Learning and Software Engineering.",
    "I enjoy building educational open-source projects that simplify complex engineering concepts and make them easier to understand.",
    "Mini LLM From Scratch was created to help students and developers understand how Transformer-based language models work by implementing every important building block from first principles instead of relying on high-level abstractions.",
    "I believe the best way to learn AI is to build it.",
  ],
  tags: [
    "Computer Science Graduate",
    "AI & Software Engineering Enthusiast",
    "Open Source Learner",
  ],
  github: "https://github.com/ENAYATULLA",
  repository: "https://github.com/ENAYATULLA/Mini-LLM-From-Scratch",
  portfolio: "https://enayat-ullah-portfolio.vercel.app/",
  linkedin: "https://www.linkedin.com/in/enayat-ullah-65a6a1252/",
  email: "enayatullah9857@gmail.com",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Documentation", href: "/documentation" },
  { label: "Architecture", href: "/architecture" },
  { label: "Pipeline", href: "/pipeline" },
  { label: "Playground", href: "/playground" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "About", href: "/about" },
];

export const projectFacts = [
  { label: "Purpose", value: "Educational implementation of a GPT-style decoder-only Transformer" },
  { label: "Language", value: "Python" },
  { label: "Framework", value: "PyTorch" },
  { label: "Architecture", value: "Transformer decoder" },
  { label: "Learning focus", value: "Transformer internals, from first principles" },
  { label: "Difficulty", value: "Intermediate" },
  { label: "License", value: "MIT" },
  { label: "Project type", value: "Open source, educational project" },
] as const;

export const skillsDemonstrated = [
  "Python",
  "PyTorch",
  "Transformer architecture",
  "Deep learning",
  "Software engineering",
  "NLP",
  "Documentation",
] as const;

export const engineeringHighlights = [
  {
    title: "Custom Transformer implementation",
    detail:
      "The decoder-only Transformer is implemented directly in PyTorch rather than imported from a pretrained-model library, showing an understanding of each component's role.",
  },
  {
    title: "Word-level tokenizer",
    detail:
      "A tokenizer built from scratch to convert raw text into vocabulary IDs, the first step in the model's input pipeline.",
  },
  {
    title: "Autoregressive text generation",
    detail:
      "Implements next-token prediction and sampling, following the same fundamental autoregressive generation principle used by modern language models.",
  },
  {
    title: "Training pipeline",
    detail:
      "A structured training loop connecting data loading, the forward pass, loss computation, and optimization into a repeatable process.",
  },
  {
    title: "Checkpoint system",
    detail:
      "Model state can be saved and restored, a practical engineering concern for any training workflow that runs over multiple sessions.",
  },
  {
    title: "Modular architecture",
    detail:
      "Code is organized into independent, readable components (tokenizer, embeddings, attention, blocks, training) rather than one monolithic script.",
  },
  {
    title: "Educational documentation",
    detail:
      "Each part of the codebase is documented to explain not just what it does, but why it exists inside a Transformer.",
  },
  {
    title: "Well-structured repository",
    detail:
      "The project follows a clean and organized structure with clear documentation, licensing, and modular code to make learning and exploration easier.",
  },
] as const;
