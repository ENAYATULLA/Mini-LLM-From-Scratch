<h1 align="center">🧠 Mini LLM From Scratch</h1>

<p align="center">
<strong>Understand • Build • Train • Generate • Learn</strong>
</p>

<p align="center">
An educational implementation of a <strong>GPT-style Decoder-Only Transformer Language Model</strong> built from scratch using <strong>Python</strong> and <strong>PyTorch</strong>.
</p>

<p align="center">

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-Deep%20Learning-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Educational-blue?style=for-the-badge)

</p>

---

# 📖 Overview

Large Language Models such as GPT have transformed the way computers understand and generate human language. While modern AI libraries make these models easy to use, they often hide the underlying concepts that make them work.

This repository was created to explore those concepts by implementing the core components of a **GPT-style Decoder-Only Transformer** from scratch using **Python** and **PyTorch**.

Instead of treating the model as a black box, the project focuses on understanding each stage of the pipeline—from tokenization and embeddings to self-attention, Transformer blocks, training, and autoregressive text generation.

The implementation is intentionally simple, modular, and beginner-friendly, making it easier to understand how modern language models work internally.

---

# 🎓 Educational Notice

> [!NOTE]
> This repository is an educational implementation created for learning and experimentation.
>
> The project intentionally simplifies several aspects of production-scale language models so that the core Transformer architecture can be studied more easily.
>
> The primary goal is to understand **how GPT-style language models work**, not to reproduce the scale or performance of commercial LLMs.

---

# ⭐ Why I Built This Project

When I started learning about Large Language Models, I found many resources explaining the theory but very few that demonstrated how to build one step by step.

This project began as a personal learning exercise to better understand the internal mechanics of Transformer-based language models through implementation rather than abstraction.

By documenting the development process and organizing the code into small, understandable modules, I hope this repository can also serve as a useful learning resource for other students and developers beginning their journey into modern AI.

---

# 🚀 What You'll Learn

By exploring this project, you'll gain practical experience with the core building blocks behind GPT-style language models, including:

- ✅ Tokenization and Vocabulary Creation
- ✅ Text Encoding and Decoding
- ✅ Word Embeddings
- ✅ Positional Information
- ✅ Masked Self-Attention
- ✅ Multi-Head Attention
- ✅ Feed Forward Networks
- ✅ Transformer Decoder Blocks
- ✅ Next-Token Prediction
- ✅ Model Training with PyTorch
- ✅ Checkpoint Saving and Loading
- ✅ Autoregressive Text Generation

Each concept is implemented in code so you can understand both the theory and the implementation.

---

# ✨ Project Highlights

<table>
<tr>

<td width="50%">

### 🧠 Built for Learning

The project focuses on understanding the internal working of GPT-style language models through implementation rather than relying on high-level AI libraries.

</td>

<td width="50%">

### ⚡ Pure Python & PyTorch

Implemented using Python and PyTorch with clean, readable, and modular code that is easy to explore and extend.

</td>

</tr>

<tr>

<td>

### 📚 Beginner Friendly

The codebase is organized into small components, allowing readers to learn one concept at a time without being overwhelmed.

</td>

<td>

### 🏗 Modular Design

Tokenizer, embeddings, attention layers, Transformer blocks, training, and inference are implemented as separate modules for better readability.

</td>

</tr>

<tr>

<td>

### 🌱 Educational Focus

The repository prioritizes clarity, simplicity, and understanding over large-scale optimization or production deployment.

</td>

<td>

### 🔧 Easy to Experiment

The modular structure makes it straightforward to explore ideas such as BPE tokenization, RoPE, Flash Attention, or larger model configurations.

</td>

</tr>

</table>

---

# 👨‍🎓 Who Is This Project For?

This project is suitable for:

- 🎓 Computer Science students
- 🤖 Beginners learning Machine Learning or Deep Learning
- 💬 Developers interested in Natural Language Processing
- 📖 Students exploring Transformer architectures
- 🎯 Learners preparing for AI or Software Engineering interviews
- 🔬 Master's students interested in AI research
- ❤️ Anyone curious about how GPT-style language models work

A basic understanding of Python is recommended, but prior experience with Large Language Models is **not required**.

---

# 🗺 Learning Roadmap

```text
Raw Text
     │
     ▼
Tokenization
     │
     ▼
Vocabulary
     │
     ▼
Token IDs
     │
     ▼
Embeddings
     │
     ▼
Positional Information
     │
     ▼
Masked Self-Attention
     │
     ▼
Multi-Head Attention
     │
     ▼
Transformer Blocks
     │
     ▼
Training
     │
     ▼
Checkpoint Saving
     │
     ▼
Text Generation
```

Each stage is implemented independently, making it easier to understand how every component contributes to the complete language model.

---

# 🏗 Architecture Overview

The implementation follows the high-level workflow of a decoder-only Transformer language model.

Rather than presenting the model as a single system, the project separates each major component into individual modules. This makes it easier to understand how data moves through the model during training and text generation.

> **Note:** This is a simplified educational implementation designed to explain the core ideas behind Transformer-based language models. It does not aim to replicate the architecture, scale, or performance of modern production LLMs.

---

# ⚙️ Project Workflow

The project is organized as a sequence of learning steps.

```text
Raw Text
    │
    ▼
Tokenization
    │
    ▼
Vocabulary
    │
    ▼
Dataset Preparation
    │
    ▼
Embedding Layer
    │
    ▼
Transformer Decoder
    │
    ▼
Training
    │
    ▼
Checkpoint Saving
    │
    ▼
Text Generation
```

Each module can be studied independently before understanding how they work together as a complete pipeline.

---

# 🧩 Core Components

| Component | Description |
|-----------|-------------|
| 🔤 Tokenizer | Converts text into tokens |
| 📚 Vocabulary | Maps tokens to numerical IDs |
| 📄 Dataset | Creates training samples for next-token prediction |
| 🔢 Embedding Layer | Learns vector representations of tokens |
| 📍 Positional Information | Preserves token order within a sequence |
| 👀 Masked Self-Attention | Allows tokens to attend to previous context |
| ⚡ Feed Forward Network | Refines token representations |
| 🏗 Transformer Block | Combines attention and feed-forward layers |
| 💾 Checkpoints | Saves training progress |
| 💬 Inference | Generates text token by token |

---

# 📂 Project Structure

> *(Keep your existing project structure image here.)*

```text
Mini-LLM-From-Scratch/

├── assets/
├── checkpoints/
├── data/
├── tokenizer/
├── model/
├── training/
├── inference/
├── utils/

├── main.py
├── requirements.txt
└── README.md
```

The repository is organized into small, focused modules to make the code easier to understand and extend.

---

# 🚀 Getting Started

## Prerequisites

Before running the project, install:

- Python 3.10 or later
- Git
- pip

---

## Clone the Repository

```bash
git clone https://github.com/ENAYATULLA/Mini-LLM-From-Scratch.git

cd Mini-LLM-From-Scratch
```

---

## Create a Virtual Environment

### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv venv

source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# ▶ Running the Project

The project can be explored in the following stages.

1. Build the vocabulary
2. Prepare the dataset
3. Configure the model
4. Train the model
5. Generate text

---

# 🔤 Vocabulary & Tokenization

The tokenizer converts raw text into numerical token IDs that can be processed by the neural network.

The current implementation uses a **word-level tokenizer**, which keeps the code simple and suitable for learning.

---

# 📊 Dataset Preparation

Training data is converted into input-target pairs for **next-token prediction** using a sliding window over the text corpus.

This is one of the fundamental training objectives used by decoder-only language models.

---

# 🏋️ Training

The model is trained using **PyTorch**.

During training:

- Input sequences are passed through the Transformer.
- The model predicts the next token.
- Loss is calculated using cross-entropy.
- Model parameters are updated through backpropagation.
- Checkpoints are saved periodically.

The default configuration is intentionally lightweight so the project can run on a standard personal computer.

---

# 💬 Text Generation

After training, the model generates text one token at a time.

Generation starts from an initial prompt and repeatedly predicts the next token until the desired sequence length is reached.

This demonstrates the basic principle of **autoregressive text generation**.

---

# ⚙️ Current Configuration

| Parameter | Value |
|-----------|------:|
| Architecture | Decoder-only Transformer |
| Embedding Size | 64 |
| Attention Heads | 4 |
| Transformer Layers | 2 |
| Framework | PyTorch |
| Training Objective | Next-Token Prediction |
| Device | CPU |

These values are intentionally small to keep the implementation approachable for learning and experimentation.

---

# 📸 Project Walkthrough

*(Keep all your existing screenshots and GIFs exactly as they are.)*

Suggested order:

- 📂 Project Structure
- 🔤 Vocabulary Creation
- 📊 Dataset Preparation
- ⚙️ Model Configuration
- 🚀 Training Progress
- 💬 Text Generation

> A walkthrough video will be added in a future update.

# 📚 Learning Outcomes

This project helped me strengthen my understanding of several important concepts in modern Natural Language Processing and Deep Learning, including:

- Transformer Architecture
- Decoder-only Language Models
- Tokenization and Vocabulary Building
- Word Embeddings
- Positional Information
- Masked Self-Attention
- Multi-Head Attention
- Feed Forward Networks
- Residual Connections
- Layer Normalization
- Next-Token Prediction
- Autoregressive Text Generation
- Model Training with PyTorch
- Software Project Organization

While this implementation is intentionally simplified, the concepts explored here provide a solid foundation for understanding larger Transformer-based language models.

---

# 🔮 Future Learning Goals

As I continue learning about Large Language Models, I plan to gradually improve this project by exploring topics such as:

- Byte Pair Encoding (BPE)
- SentencePiece Tokenization
- Rotary Positional Embeddings (RoPE)
- Flash Attention
- GPU Training
- Mixed Precision Training
- Better Sampling Strategies
- Larger Training Datasets
- Model Evaluation
- Interactive Web Interface
- Improved Documentation
- More Educational Visualizations

These are learning goals rather than fixed milestones, and I plan to explore them step by step.

---

# 🤝 Contributing

Contributions are welcome.

If you notice a bug, find an issue in the documentation, or have ideas that could make the project easier to understand, feel free to open an Issue or submit a Pull Request.

Please keep contributions beginner-friendly, well documented, and focused on improving the educational value of the repository.

---

# ❓ Frequently Asked Questions

## Is this a production-ready Large Language Model?

No.

This repository is an educational implementation created to understand the core ideas behind GPT-style Transformer language models.

---

## Does this repository use pre-trained models?

No.

The implementation focuses on building the core architecture directly in PyTorch for learning purposes.

---

## Can I modify this project?

Yes.

The modular design makes it easier to experiment with different tokenizers, attention mechanisms, training strategies, or model configurations.

---

## Is this suitable for beginners?

Yes.

The repository is intended for students and developers who want to understand how Transformer language models work by reading and experimenting with the code.

---

# ⭐ Support

If you found this repository helpful, consider giving it a ⭐ on GitHub.

Your support encourages me to continue improving the project and documenting my learning journey.

---

# 👨‍💻 About the Author

## Enayat Ullah

Computer Science Graduate | Aspiring Software Engineer | AI Learner

I enjoy learning about Artificial Intelligence, Machine Learning, and Software Engineering by building practical projects.

This repository represents one step in my learning journey toward understanding Transformer-based language models through implementation.

Rather than treating modern AI systems as black boxes, I enjoy exploring how they work internally and documenting what I learn along the way.

I believe the best way to learn is to build projects, experiment with ideas, and continuously improve through practice.

If this repository helps another student understand Transformers a little better, then it has achieved its purpose.

---

# 🌐 Connect With Me

- 💼 LinkedIn: *(Add your profile link)*
- 💻 GitHub: *(Add your GitHub profile link)*
- 🌍 Portfolio: *(Add your portfolio link)*

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, study, modify, and build upon this repository in accordance with the terms of the license.

---

# 🙏 Acknowledgements

I would like to thank the open-source community, researchers, educators, and developers whose articles, papers, repositories, and educational resources have made learning modern AI more accessible.

Their work has inspired this project and continues to support learners around the world.

---

# 📌 Final Note

This repository is part of my personal learning journey.

It is not intended to compete with production-scale language models or replace existing frameworks.

Instead, it is an attempt to better understand the ideas behind Transformer architectures by implementing them step by step.

If you have suggestions, feedback, or ideas for improvement, feel free to open an Issue or start a discussion.

Happy Learning! 🚀

---

<p align="center">

Made with ❤️ using Python & PyTorch

<br><br>

<strong>Built as a Learning Project by</strong>

<h3 align="center">Enayat Ullah</h3>

Computer Science Graduate • AI Learner • Open Source Enthusiast

</p>
