# Exercise: Summation of Multiples
# Objective: Write a function that accepts an integer, n, and returns the sum of all natural numbers below n that are multiples of 3 or 5. If n is negative, return 0. Numbers that are multiples of both 3 and 5 should only be counted once.

# Example: For n = 10, the function should return 23, because 3, 5, 6, and 9 are the multiples of 3 or 5 below 10, and their sum is 23.



def multiples(num):
    results = []
    for i in range(1,num):            
        if i % 3 == False:
            results.append(i)
        if i % 5 == False and i not in results:
            results.append(i)
    return sum(results)


print(multiples(10))
    