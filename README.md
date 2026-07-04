# 🧠 Mini LLM From Scratch

A simplified GPT-style Transformer Language Model built from scratch using **Python** and **PyTorch**.

This project was developed to understand the internal working of Large Language Models (LLMs) by implementing the core components of a Transformer architecture instead of relying on high-level libraries.

> **Note:** This is an educational project designed for learning Transformer fundamentals. It is **not** intended to compete with production LLMs such as GPT or Llama.

---

## 🚀 Features

- Custom Word-Level Tokenizer
- Vocabulary Creation and Persistence
- Token Embedding Layer
- Sinusoidal Positional Encoding
- Causal Masked Self-Attention
- Multi-Head Self-Attention
- Feed Forward Network
- Transformer Blocks
- GPT-style Autoregressive Text Generation
- Temperature Sampling
- Top-k Sampling
- Training Checkpoints
- Resume Training Support
- CPU/GPU Automatic Device Selection

---

## 🏗️ Project Structure

```text
mini-llm-from-scratch/
│
├── checkpoints/
├── data/
├── inference/
├── model/
├── outputs/
├── tokenizer/
├── training/
├── utils/
│
├── requirements.txt
├── README.md
└── main.py
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mini-llm-from-scratch.git
cd mini-llm-from-scratch
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it (Windows):

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 📚 Training

Start model training:

```bash
python -m training.train
```

The training pipeline automatically:

- Builds the vocabulary
- Saves `vocab.json`
- Saves training checkpoints
- Saves the final trained model
- Supports resuming interrupted training

---

## 💬 Text Generation

Generate text using the trained model:

```bash
python -m inference.generate
```

Example prompt:

```text
artificial intelligence
```

Example output:

```text
artificial intelligence is changing finance machine learning models improve through training
```

Since the project uses **Temperature Sampling** and **Top-k Sampling**, the generated text may vary between runs.

---

## 🧠 Model Architecture

```
Input Text
     │
Tokenizer
     │
Token Embeddings
     │
Positional Encoding
     │
Transformer Blocks
     │
Multi-Head Self-Attention
     │
Feed Forward Network
     │
Output Layer
     │
Next Token Prediction
```

---

## 🛠️ Technologies Used

- Python 3.10
- PyTorch
- NumPy

---

## 📖 Learning Objectives

This project demonstrates the implementation of the fundamental components behind Transformer-based language models, including:

- Tokenization
- Embedding Layers
- Positional Encoding
- Self-Attention
- Multi-Head Attention
- Feed Forward Networks
- Transformer Architecture
- Language Model Training
- Autoregressive Text Generation
- Model Checkpointing

---

## 🔮 Future Improvements

- Validation Dataset
- Learning Rate Scheduler
- Better Decoding Strategies
- Larger Training Corpus
- Subword Tokenization (BPE)
- Byte-Level Tokenizer

---

## 👨‍💻 Author

**Enayat Ullah**

- GitHub: https://github.com/ENAYATULLA
- Email: enayatullah9857@gmail.com

---

## ⭐ If you found this project useful

Please consider giving the repository a **Star** ⭐.# 🧠 Mini LLM From Scratch

A simplified GPT-style Transformer Language Model built from scratch using **Python** and **PyTorch**.

This project was developed to understand the internal working of Large Language Models (LLMs) by implementing the core components of a Transformer architecture instead of relying on high-level libraries.

> **Note:** This is an educational project designed for learning Transformer fundamentals. It is **not** intended to compete with production LLMs such as GPT or Llama.

---

## 🚀 Features

- Custom Word-Level Tokenizer
- Vocabulary Creation and Persistence
- Token Embedding Layer
- Sinusoidal Positional Encoding
- Causal Masked Self-Attention
- Multi-Head Self-Attention
- Feed Forward Network
- Transformer Blocks
- GPT-style Autoregressive Text Generation
- Temperature Sampling
- Top-k Sampling
- Training Checkpoints
- Resume Training Support
- CPU/GPU Automatic Device Selection

---

## 🏗️ Project Structure

```text
mini-llm-from-scratch/
│
├── checkpoints/
├── data/
├── inference/
├── model/
├── outputs/
├── tokenizer/
├── training/
├── utils/
│
├── requirements.txt
├── README.md
└── main.py
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mini-llm-from-scratch.git
cd mini-llm-from-scratch
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it (Windows):

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 📚 Training

Start model training:

```bash
python -m training.train
```

The training pipeline automatically:

- Builds the vocabulary
- Saves `vocab.json`
- Saves training checkpoints
- Saves the final trained model
- Supports resuming interrupted training

---

## 💬 Text Generation

Generate text using the trained model:

```bash
python -m inference.generate
```

Example prompt:

```text
artificial intelligence
```

Example output:

```text
artificial intelligence is changing finance machine learning models improve through training
```

Since the project uses **Temperature Sampling** and **Top-k Sampling**, the generated text may vary between runs.

---

## 🧠 Model Architecture

```
Input Text
     │
Tokenizer
     │
Token Embeddings
     │
Positional Encoding
     │
Transformer Blocks
     │
Multi-Head Self-Attention
     │
Feed Forward Network
     │
Output Layer
     │
Next Token Prediction
```

---

## 🛠️ Technologies Used

- Python 3.10
- PyTorch
- NumPy

---

## 📖 Learning Objectives

This project demonstrates the implementation of the fundamental components behind Transformer-based language models, including:

- Tokenization
- Embedding Layers
- Positional Encoding
- Self-Attention
- Multi-Head Attention
- Feed Forward Networks
- Transformer Architecture
- Language Model Training
- Autoregressive Text Generation
- Model Checkpointing

---

## 🔮 Future Improvements

- Validation Dataset
- Learning Rate Scheduler
- Better Decoding Strategies
- Larger Training Corpus
- Subword Tokenization (BPE)
- Byte-Level Tokenizer

---

## 👨‍💻 Author

**Enayat Ullah**

- GitHub: https://github.com/ENAYATULLA
- Email: enayatullah9857@gmail.com

---

## ⭐ If you found this project useful

Please consider giving the repository a **Star** ⭐.