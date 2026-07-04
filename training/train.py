"""
Training Script
Mini LLM From Scratch
"""

import torch
import torch.nn as nn
from torch.utils.data import DataLoader

from tokenizer.tokenizer import SimpleTokenizer
from training.dataset import TextDataset
from training.checkpoint import (
    save_checkpoint,
    load_checkpoint,
)

from model.transformer import MiniTransformer

from utils.config import (
    CORPUS_FILE,
    CHECKPOINT_DIR,
    MODEL_FILE,
    VOCAB_FILE,
    EMBED_DIM,
    NUM_HEADS,
    NUM_LAYERS,
    FF_DIM,
    MAX_SEQ_LEN,
    BATCH_SIZE,
    LEARNING_RATE,
    EPOCHS,
    DEVICE,
)


def train():

    print(f"\nUsing Device: {DEVICE}\n")

    # ----------------------------------------
    # Create Directories
    # ----------------------------------------

    CHECKPOINT_DIR.mkdir(
        parents=True,
        exist_ok=True
    )

    # ----------------------------------------
    # Tokenizer
    # ----------------------------------------

    tokenizer = SimpleTokenizer()

    text = tokenizer.load_corpus(
        str(CORPUS_FILE)
    )

    tokenizer.build_vocab(text)

    tokenizer.save_vocab(
        str(VOCAB_FILE)
    )

    print(f"Vocabulary saved to: {VOCAB_FILE}")

    token_ids = tokenizer.encode(text)

    # ----------------------------------------
    # Dataset
    # ----------------------------------------

    dataset = TextDataset(
        token_ids,
        MAX_SEQ_LEN
    )

    dataloader = DataLoader(
        dataset,
        batch_size=BATCH_SIZE,
        shuffle=True
    )

    # ----------------------------------------
    # Model
    # ----------------------------------------

    model = MiniTransformer(
        vocab_size=len(tokenizer.word_to_id),
        embedding_dim=EMBED_DIM,
        num_heads=NUM_HEADS,
        hidden_dim=FF_DIM,
        num_layers=NUM_LAYERS,
    ).to(DEVICE)

    criterion = nn.CrossEntropyLoss()

    optimizer = torch.optim.Adam(
        model.parameters(),
        lr=LEARNING_RATE
    )

    # ----------------------------------------
    # Resume Training
    # ----------------------------------------

    checkpoint_path = CHECKPOINT_DIR / "checkpoint.pth"

    start_epoch, previous_loss = load_checkpoint(
        model=model,
        optimizer=optimizer,
        checkpoint_path=checkpoint_path,
        device=DEVICE,
    )

    if start_epoch == 0:

        print("Starting fresh training...\n")

    elif start_epoch >= EPOCHS:

        print(
            f"Training already completed ({start_epoch}/{EPOCHS} epochs)."
        )

        print(
            "Delete checkpoint.pth or increase EPOCHS to train again."
        )

        return

    else:

        print(
            f"Resuming training from Epoch {start_epoch + 1}\n"
        )

    # ----------------------------------------
    # Training
    # ----------------------------------------

    print("Training Started...\n")

    for epoch in range(
        start_epoch,
        EPOCHS
    ):

        model.train()

        total_loss = 0

        for inputs, targets in dataloader:

            inputs = inputs.to(DEVICE)
            targets = targets.to(DEVICE)

            optimizer.zero_grad()

            outputs = model(inputs)

            loss = criterion(
                outputs.reshape(
                    -1,
                    len(tokenizer.word_to_id)
                ),
                targets.reshape(-1)
            )

            loss.backward()

            optimizer.step()

            total_loss += loss.item()

        average_loss = total_loss / len(dataloader)

        print(
            f"Epoch {epoch + 1}/{EPOCHS}"
            f" | Loss: {average_loss:.4f}"
        )

        save_checkpoint(
            model=model,
            optimizer=optimizer,
            epoch=epoch + 1,
            loss=average_loss,
            checkpoint_path=checkpoint_path,
        )

    # ----------------------------------------
    # Save Final Model
    # ----------------------------------------

    torch.save(
        model.state_dict(),
        MODEL_FILE
    )

    print("\nTraining Complete!")

    print(
        f"Final model saved to: {MODEL_FILE}"
    )


if __name__ == "__main__":
    train()