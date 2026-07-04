"""
Multi Head Attention
Mini LLM From Scratch
"""

import torch
import torch.nn as nn

from model.attention import SelfAttention


class MultiHeadAttention(nn.Module):
    """
    Multi Head Self Attention
    """

    def __init__(self, embedding_dim, num_heads):
        super().__init__()

        self.heads = nn.ModuleList(
            [
                SelfAttention(embedding_dim)
                for _ in range(num_heads)
            ]
        )

        self.output_layer = nn.Linear(
            embedding_dim * num_heads,
            embedding_dim
        )

    def forward(self, x):

        head_outputs = []

        for head in self.heads:

            head_outputs.append(
                head(x)
            )

        multi_head_output = torch.cat(
            head_outputs,
            dim=-1
        )

        output = self.output_layer(
            multi_head_output
        )

        return output