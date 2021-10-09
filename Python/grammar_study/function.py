def sumFromTo(m, n):
    sum = 0
    for i in range(n + 1):
        if i >= m:
            sum += i
    return sum

print(sumFromTo(1, 100))


# def sumFromTo(m, n):
#     sum = 0
#     while m<=n:
#         sum += m
#         m += 1
#     return sum
# print(sumFromTo(1, 100))

