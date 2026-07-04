"""
Mini Transformer Model
"""

import torch.nn as nn

from model.embedding import TokenEmbedding
from model.positional_encoding import PositionalEncoding
from model.transformer_block import TransformerBlock


class MiniTransformer(nn.Module):

    def __init__(
        self,
        vocab_size,
        embedding_dim,
        num_heads,
        hidden_dim,
        num_layers,
    ):
        super().__init__()

        self.embedding = TokenEmbedding(
            vocab_size,
            embedding_dim
        )

        self.position = PositionalEncoding(
            embedding_dim
        )

        self.blocks = nn.ModuleList(
            [
                TransformerBlock(
                    embedding_dim,
                    num_heads,
                    hidden_dim
                )
                for _ in range(num_layers)
            ]
        )

        self.output_layer = nn.Linear(
            embedding_dim,
            vocab_size
        )

    def forward(self, x):

        x = self.embedding(x)

        x = self.position(x)

        for block in self.blocks:
            x = block(x)

        logits = self.output_layer(x)

        return logits