"""
Self Attention
Mini LLM From Scratch
"""

import math
import torch
import torch.nn as nn


class SelfAttention(nn.Module):
    """
    Single Head Self Attention with Causal Mask
    """

    def __init__(self, embedding_dim):
        super().__init__()

        self.embedding_dim = embedding_dim

        self.query = nn.Linear(
            embedding_dim,
            embedding_dim
        )

        self.key = nn.Linear(
            embedding_dim,
            embedding_dim
        )

        self.value = nn.Linear(
            embedding_dim,
            embedding_dim
        )

        self.softmax = nn.Softmax(dim=-1)

    def forward(self, x):

        Q = self.query(x)
        K = self.key(x)
        V = self.value(x)

        scores = torch.matmul(
            Q,
            K.transpose(-2, -1)
        )

        scores = scores / math.sqrt(self.embedding_dim)

        # ----------------------------
        # Causal Mask
        # ----------------------------

        seq_length = x.size(1)

        mask = torch.triu(
            torch.ones(
                seq_length,
                seq_length,
                device=x.device
            ),
            diagonal=1
        ).bool()

        scores = scores.masked_fill(
            mask,
            float("-inf")
        )

        attention_weights = self.softmax(scores)

        output = torch.matmul(
            attention_weights,
            V
        )

        return output