class Person:
    def __init__(self, name, sex) -> None:
        self.name = name
        self.sex = sex

    def say(self,word = '默认word'):
        print(f'{self.name}的性别是{self.sex}， ----{word}')

person = Person('张三', '男')
person.say()
person.say('传过来的word')