"""
Checkpoint Utilities
Mini LLM From Scratch
"""

from pathlib import Path

import torch


def save_checkpoint(
    model,
    optimizer,
    epoch,
    loss,
    checkpoint_path,
):
    """
    Save training checkpoint.
    """

    checkpoint = {
        "epoch": epoch,
        "loss": loss,
        "learning_rate": optimizer.param_groups[0]["lr"],
        "model_state_dict": model.state_dict(),
        "optimizer_state_dict": optimizer.state_dict(),
    }

    checkpoint_path = Path(checkpoint_path)

    checkpoint_path.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    torch.save(
        checkpoint,
        checkpoint_path,
    )

    print(
        f"Checkpoint saved: {checkpoint_path}"
    )


def load_checkpoint(
    model,
    optimizer,
    checkpoint_path,
    device,
):
    """
    Load training checkpoint.
    """

    checkpoint_path = Path(checkpoint_path)

    if not checkpoint_path.exists():
        return 0, None

    checkpoint = torch.load(
        checkpoint_path,
        map_location=device,
    )

    model.load_state_dict(
        checkpoint["model_state_dict"]
    )

    optimizer.load_state_dict(
        checkpoint["optimizer_state_dict"]
    )

    epoch = checkpoint["epoch"]

    loss = checkpoint["loss"]

    print("\nCheckpoint Loaded Successfully")
    print(f"Resuming From Epoch : {epoch}")
    print(f"Previous Loss       : {loss:.4f}\n")

    return epoch, loss