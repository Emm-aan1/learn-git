import random

# Generate a random secret number between 1 and 10 (inclusive)
secret_number = random.randint(1, 10)

# Number of guesses (initialize to 0)
num_guesses = 0

while True:
  # Get user's guess
  try:
    guess = int(input("Guess a number between 1 and 10: "))
    num_guesses += 1  # Increment guess counter

    # Match the guess using a match-case statement
    match guess:
      case secret_number:
        print("Congratulations, you guessed it in", num_guesses, "guesses!")
        break  # Exit the loop after a correct guess
      case x if x > secret_number:
        print("Oops, your guess is a bit high. Try again!")
      case x if x < secret_number:
        print("Nope, your guess is a bit low. Give it another shot!")
      case _:
        print("Invalid input. Please enter a number between 1 and 10.")
  except ValueError:
    print("Invalid input. Please enter a number.")

  # Ask the user if they want to play again
  play_again = input("Do you want to play again? (y/n): ").lower()
  if play_again != 'y':
    break

print("Thanks for playing!")
