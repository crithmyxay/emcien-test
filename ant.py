import random

def random_walk(n):
  x, y = 0, 0 
  for i in range(n):
    step = random.choice(['N', 'S', 'E', 'W', 'none'])
    if step == 'N':
      if y < 5:
        y += 1
      else:
        break
    elif step == 'S':
      if y > -5:
        y -= 1
      else: 
        break
    elif step == 'E':
      if x < 5:
        x += 1
      else:
        break
    elif step == 'W':
      if x > -5:
        x -= 1
      else: 
        break
    else:
      break
  return (x, y)

walk_attempts = 10000

# for walk_length in range(1, 16):
def ant_test():
  back_at_zero = 0 # This counts how many times it is back at the center.
  for i in range(walk_attempts):
    (x, y) = random_walk(15)
    if (x, y) == (0, 0):
      back_at_zero += 1
  chance_at_zero = float(back_at_zero) / walk_attempts
  print "Chance to be located at center:", 100*chance_at_zero
  
ant_test()

# for walk_length in range(1, 3601):
#   on_the_side = 0 # This counts how many times it is back at the center.
#   for i in range(walk_attempts):
#     (x, y) = random_walk(walk_length)
#     dx = abs(x)
#     dy = abs(y)
#     if dx == 5 or dy == 5:
#       on_the_side += 1
#   chance_at_side = float(on_the_side) / walk_attempts
#   print "Chance to be located at side:", 100*chance_at_side