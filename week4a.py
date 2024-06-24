# def computepay(hours, rate):
#   if hours <= 40:
#     return hours * rate
#   else:
#     overtime_pay = (hours - 40) * rate * 1.5
#     return 40 * rate + overtime_pay

# try:
#   hrs = float(input("Enter Hours: "))
#   rate = float(input("Enter Rate per Hour: "))

#   gross_pay = computepay(hrs, rate)
#   print("Pay", round(gross_pay, 2))

# except ValueError:
#   print("Error: Please enter valid numbers for hours and rate.")


def mad_libs():
  """Generates a Mad Libs story with user input and conditional variations."""

  # Get user input for various words
  adjective1 = input("Enter an adjective for the day: ")
  noun1 = input("Enter a noun (animal): ")
  adjective2 = input("Enter an adjective for the " + noun1 + ": ")
  verb = input("Enter a verb ending in -ing: ")
  adjective3 = input("Enter an adjective for the zoo: ")
  noun2 = input("Enter another noun (animal): ")
  adjective4 = input("Enter an adjective for the " + noun2 + ": ")

  # Build the story with conditional variations for the second animal
  story =  f"On a beautiful {adjective1} day, I went to the zoo. "
  story += f"I saw a funny {adjective2} {noun1} {verb} from a tree branch. "

  if noun2 == "lion" or noun2 == "tiger":
    story += f"Then, I spotted a majestic {adjective4} {noun2} roaring loudly. "
  else:
    story += f"Then, I spotted a {adjective4} {noun2} {verb} around its enclosure. "

  story += f"What a wild and {adjective3} experience!"

  # Print the completed story
  print(story)

# Run the mad_libs function
mad_libs()