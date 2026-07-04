from inference.generate import TextGenerator

generator = TextGenerator()

prompt = "artificial intelligence"

generated = generator.generate(
    prompt,
    max_new_tokens=8
)

print("=" * 60)
print("Prompt")
print("=" * 60)

print(prompt)

print()

print("=" * 60)
print("Generated")
print("=" * 60)

print(generated)