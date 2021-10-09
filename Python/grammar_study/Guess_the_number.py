import random
result = random.randint(1, 100)

count = 0
totalCount = 5

while True:
    if count >= totalCount:
        break
    inputNum = int(input('请输入你要猜的数字'))
    count += 1
    print(f'还可以猜{totalCount - count}次')
    if inputNum > result:
        print('你猜的太大了')
    elif inputNum < result:
        print('你猜的太小了')
    else:
        print('你猜中了')
        break