"""
Project Configuration
Mini LLM From Scratch
"""

from pathlib import Path

import torch

# ==========================================================
# Project Directories
# ==========================================================

ROOT_DIR = Path(__file__).resolve().parent.parent

DATA_DIR = ROOT_DIR / "data"

CHECKPOINT_DIR = ROOT_DIR / "checkpoints"

OUTPUT_DIR = ROOT_DIR / "outputs"

# ==========================================================
# Files
# ==========================================================

CORPUS_FILE = DATA_DIR / "corpus.txt"

MODEL_FILE = CHECKPOINT_DIR / "mini_llm.pth"

VOCAB_FILE = CHECKPOINT_DIR / "vocab.json"

# ==========================================================
# Model Hyperparameters
# ==========================================================

VOCAB_SIZE = None

EMBED_DIM = 64

NUM_HEADS = 4

NUM_LAYERS = 2

FF_DIM = 256

MAX_SEQ_LEN = 32

DROPOUT = 0.1

# ==========================================================
# Training
# ==========================================================

BATCH_SIZE = 8

LEARNING_RATE = 0.001

EPOCHS = 30

# ==========================================================
# Device
# ==========================================================

DEVICE = torch.device(
    "cuda" if torch.cuda.is_available() else "cpu"
)

# ==========================================================
# Generation
# ==========================================================

MAX_NEW_TOKENS = 30

RANDOM_SEED = 42