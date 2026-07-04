"""
Transformer Block
Mini LLM From Scratch
"""

import torch.nn as nn

from model.multi_head import MultiHeadAttention
from model.feed_forward import FeedForward


class TransformerBlock(nn.Module):
    """
    Single Transformer Block
    """

    def __init__(
        self,
        embedding_dim,
        num_heads,
        hidden_dim
    ):
        super().__init__()

        self.attention = MultiHeadAttention(
            embedding_dim,
            num_heads
        )

        self.norm1 = nn.LayerNorm(
            embedding_dim
        )

        self.feed_forward = FeedForward(
            embedding_dim,
            hidden_dim
        )

        self.norm2 = nn.LayerNorm(
            embedding_dim
        )

    def forward(self, x):

        # Multi Head Attention
        attention_output = self.attention(x)

        # Residual + LayerNorm
        x = self.norm1(
            x + attention_output
        )

        # Feed Forward
        feed_forward_output = self.feed_forward(x)

        # Residual + LayerNorm
        x = self.norm2(
            x + feed_forward_output
        )

        return x