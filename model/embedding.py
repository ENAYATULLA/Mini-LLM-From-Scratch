"""
Embedding Layer
Mini LLM From Scratch
"""

import torch
import torch.nn as nn


class TokenEmbedding(nn.Module):
    """
    Converts token IDs into dense vectors.
    """

    def __init__(self, vocab_size: int, embedding_dim: int):
        """
        Initialize embedding layer.

        Parameters
        ----------
        vocab_size : int
            Number of unique words.

        embedding_dim : int
            Size of each word vector.
        """

        super().__init__()

        self.embedding = nn.Embedding(
            num_embeddings=vocab_size,
            embedding_dim=embedding_dim
        )

    def forward(self, token_ids):
        """
        Convert token IDs into embeddings.
        """

        return self.embedding(token_ids)