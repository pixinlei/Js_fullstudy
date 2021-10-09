i = 1
j = 1

while i < 10:
    while j <= i:
        print(f'{i} * {j} = {i*j}', end=' ')
        j+= 1
    i+= 1
    j = 1
    print()