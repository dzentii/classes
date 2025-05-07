class User {
    public static userName: string;
    private surname: string;
    protected age: number;

    constructor(userName: string, surname: string, age: number) {
        User.userName = userName;
        this.surname = surname;
        this.age = age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }
}

// Проверка доступа
const user = new User("John", "Doe", 30);
console.log(User.userName); // Доступно только через класс
// console.log(user.surname); // Ошибка - private
// console.log(user.age); // Ошибка - protected
user.setAge(31); // public метод
console.log(user.getAge()); // public метод