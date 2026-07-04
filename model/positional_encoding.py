"""
Positional Encoding
Mini LLM From Scratch
"""

import math
import torch
import torch.nn as nn


class PositionalEncoding(nn.Module):
    def __init__(self, embedding_dim, max_length=5000):
        super().__init__()

        pe = torch.zeros(max_length, embedding_dim)

        position = torch.arange(0, max_length).unsqueeze(1)

        div_term = torch.exp(
            torch.arange(0, embedding_dim, 2)
            * (-math.log(10000.0) / embedding_dim)
        )

        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)

        pe = pe.unsqueeze(0)

        self.register_buffer("pe", pe)

    def forward(self, x):
        return x + self.pe[:, :x.size(1)]