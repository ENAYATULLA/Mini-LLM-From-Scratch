"""
Feed Forward Network
Mini LLM From Scratch
"""

import torch.nn as nn


class FeedForward(nn.Module):
    """
    Position-wise Feed Forward Network
    """

    def __init__(self, embedding_dim, hidden_dim):
        super().__init__()

        self.network = nn.Sequential(
            nn.Linear(embedding_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, embedding_dim)
        )

    def forward(self, x):
        return self.network(x)