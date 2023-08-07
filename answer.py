def divisors(interger):
  ls=[x+1 for x in range(interger)  if interger % (x + 1) == 0 and interger != x+1 and x+1!=1]
  return f"{interger} is prime" if ls == [] else ls
