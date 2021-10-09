file = open('./text.txt', encoding='utf-8')
file_content = file.read()

print(file_content)

file.close()