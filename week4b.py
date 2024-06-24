import random

secret_number = random.randint(1, 10)
num_guesses = 0

while True:
  try:
    guess = int(input("Guess a number between 1 and 10: "))
    num_guesses += 1

    if guess == secret_number:
      print("Congratulations, you guessed it in", num_guesses, "guesses!")
      break
    elif guess > secret_number:
      print("Oops, your guess is a bit high. Try again!")
      continue
    else:
      print("Nope, your guess is a bit low. Give it another shot!")
  except ValueError:
    print("Invalid input. Please enter a number.")

  play_again = input("Do you want to play again? (y/n): ").lower()
  if play_again != 'y':
    break

print("Thanks for playing!")
