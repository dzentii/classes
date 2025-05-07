interface IUser {
    readonly id: number; // Только для чтения
    userName: string;
    surname: string;
    coins: number;
    age?: number; // Необязательное свойство
    addCoin(amount: number): void;
    removeCoin(amount: number): void;
    getCoins(): string;
}

// Расширение интерфейса
interface IExtendedUser extends IUser {
    email: string;
}

// Интерфейс-наследник
interface IAdvancedUser extends IExtendedUser {
    isPremium: boolean;
}

// Класс, реализующий интерфейс
class AdvancedUser implements IAdvancedUser {
    readonly id: number;
    userName: string;
    surname: string;
    coins: number;
    age?: number;
    email: string;
    isPremium: boolean;

    constructor(id: number, userName: string, surname: string, coins: number, email: string, isPremium: boolean, age?: number) {
        this.id = id;
        this.userName = userName;
        this.surname = surname;
        this.coins = coins;
        this.email = email;
        this.isPremium = isPremium;
        if (age) this.age = age;
    }

    addCoin(amount: number): void {
        this.coins += amount;
    }

    removeCoin(amount: number): void {
        this.coins -= amount;
    }

    getCoins(): string {
        return `Количество монет ${this.coins}`;
    }
}

// Проверка
const ivan: IUser = {
    id: 1,
    userName: "Ivan",
    surname: "Ivanov",
    coins: 5,
    age: 25,
    addCoin(amount) {
        this.coins += amount;
    },
    removeCoin(amount) {
        this.coins -= amount;
    },
    getCoins() {
        return `Количество монет ${this.coins}`;
    },
};

const premiumUser = new AdvancedUser(2, "Petr", "Petrov", 10, "petr@example.com", true, 30);
console.log(ivan.getCoins());
console.log(premiumUser.getCoins());