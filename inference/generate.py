"""
Text Generation
Mini LLM From Scratch
"""

import torch
import torch.nn.functional as F

from tokenizer.tokenizer import SimpleTokenizer
from model.transformer import MiniTransformer

from utils.config import (
    MODEL_FILE,
    VOCAB_FILE,
    EMBED_DIM,
    NUM_HEADS,
    NUM_LAYERS,
    FF_DIM,
    DEVICE,
)


class TextGenerator:

    def __init__(self):

        print(f"\nUsing Device: {DEVICE}\n")

        # -----------------------
        # Tokenizer
        # -----------------------

        self.tokenizer = SimpleTokenizer()

        self.tokenizer.load_vocab(
            str(VOCAB_FILE)
        )

        # -----------------------
        # Model
        # -----------------------

        self.model = MiniTransformer(
            vocab_size=len(self.tokenizer.word_to_id),
            embedding_dim=EMBED_DIM,
            num_heads=NUM_HEADS,
            hidden_dim=FF_DIM,
            num_layers=NUM_LAYERS,
        ).to(DEVICE)

        self.model.load_state_dict(
            torch.load(
                MODEL_FILE,
                map_location=DEVICE
            )
        )

        self.model.eval()

    def generate(
        self,
        prompt,
        max_new_tokens=15,
        temperature=1.0,
        top_k=10,
    ):

        token_ids = self.tokenizer.encode(prompt)

        for _ in range(max_new_tokens):

            input_tensor = torch.tensor(
                token_ids,
                dtype=torch.long
            ).unsqueeze(0).to(DEVICE)

            with torch.no_grad():

                output = self.model(
                    input_tensor
                )

            logits = output[0, -1]

            # ---------------------------------
            # Temperature Scaling
            # ---------------------------------

            logits = logits / temperature

            # ---------------------------------
            # Top-k Sampling
            # ---------------------------------

            top_k = min(
                top_k,
                logits.size(-1)
            )

            top_k_logits, top_k_indices = torch.topk(
                logits,
                top_k
            )

            probabilities = F.softmax(
                top_k_logits,
                dim=-1
            )

            sampled_index = torch.multinomial(
                probabilities,
                num_samples=1
            )

            next_token = top_k_indices[
                sampled_index
            ].item()

            token_ids.append(next_token)

        return self.tokenizer.decode(
            token_ids
        )


if __name__ == "__main__":

    generator = TextGenerator()

    prompt = input("Enter Prompt: ")

    print("\nGenerated Text:\n")

    generated_text = generator.generate(
        prompt=prompt,
        max_new_tokens=15,
        temperature=1.0,
        top_k=10,
    )

    print(generated_text)