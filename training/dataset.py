"""
PyTorch Dataset for Mini LLM

Creates input-target pairs for next-token prediction.
"""

import torch
from torch.utils.data import Dataset


class TextDataset(Dataset):
    """
    Dataset for language model training.
    """

    def __init__(self, token_ids, seq_length):
        """
        Parameters
        ----------
        token_ids : list
            Complete corpus encoded into token IDs.

        seq_length : int
            Context window size.
        """

        self.token_ids = token_ids
        self.seq_length = seq_length

    def __len__(self):
        """
        Number of training samples.
        """

        return len(self.token_ids) - self.seq_length

    def __getitem__(self, index):
        """
        Returns one training example.
        """

        input_ids = self.token_ids[
            index:index + self.seq_length
        ]

        target_ids = self.token_ids[
            index + 1:index + self.seq_length + 1
        ]

        return (
            torch.tensor(input_ids, dtype=torch.long),
            torch.tensor(target_ids, dtype=torch.long)
        )