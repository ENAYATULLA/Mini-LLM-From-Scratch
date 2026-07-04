"""
Simple Word-Level Tokenizer
Mini LLM From Scratch
"""

import json
import re
from collections import Counter


class SimpleTokenizer:
    """
    A simple word-level tokenizer.
    """

    def __init__(self):
        """
        Initialize tokenizer variables.
        """

        # Word Frequency
        self.vocab = {}

        # Mapping
        self.word_to_id = {}
        self.id_to_word = {}

        # Special Tokens
        self.special_tokens = [
            "<PAD>",
            "<UNK>",
            "<BOS>",
            "<EOS>"
        ]

    def clean_text(self, text: str) -> str:
        """
        Convert text to lowercase and remove punctuation.
        """

        text = text.lower()
        text = re.sub(r"[^a-zA-Z0-9\s]", "", text)

        return text

    def load_corpus(self, file_path: str) -> str:
        """
        Load corpus file.
        """

        with open(file_path, "r", encoding="utf-8") as file:
            text = file.read()

        return self.clean_text(text)

    def build_vocab(self, text: str):
        """
        Build vocabulary from text.
        """

        words = text.split()

        word_counts = Counter(words)

        self.vocab = dict(word_counts)

        current_id = 0

        # Add Special Tokens First
        for token in self.special_tokens:
            self.word_to_id[token] = current_id
            self.id_to_word[current_id] = token
            current_id += 1

        # Add Corpus Words
        for word in sorted(self.vocab.keys()):

            if word not in self.word_to_id:

                self.word_to_id[word] = current_id
                self.id_to_word[current_id] = word

                current_id += 1

    def encode(self, sentence: str):
        """
        Convert sentence into token IDs.
        """

        sentence = self.clean_text(sentence)

        words = sentence.split()

        token_ids = []

        for word in words:

            token_ids.append(
                self.word_to_id.get(
                    word,
                    self.word_to_id["<UNK>"]
                )
            )

        return token_ids

    def decode(self, token_ids):
        """
        Convert token IDs back into text.
        """

        words = []

        for token_id in token_ids:

            words.append(
                self.id_to_word.get(
                    token_id,
                    "<UNK>"
                )
            )

        return " ".join(words)

    def save_vocab(self, file_path):
        """
        Save vocabulary as JSON.
        """

        with open(file_path, "w", encoding="utf-8") as file:
            json.dump(
                self.word_to_id,
                file,
                indent=4
            )

    def load_vocab(self, file_path):
        """
        Load vocabulary from JSON.
        """

        with open(file_path, "r", encoding="utf-8") as file:

            self.word_to_id = json.load(file)

        self.id_to_word = {
            int(v): k
            for k, v in self.word_to_id.items()
        }