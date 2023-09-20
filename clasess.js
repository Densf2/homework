class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        } 
    }
    eat() { console.log('eating') }
    listen() { console.log('listening') }
}


class User extends Human {
    _arms = 2
    static planet = 'Earth'
    #legs = 2
    fingers = 10

    constructor(name, legs, arms, fingers) {
        super()
        this.name = name
        this.#legs = legs
        this._arms = arms
        this.fingers = fingers
    }

    static sayHello() {
        console.log('Hello')
    }

    getName() {
        return this.name
    }

    setName(val) {
        if (val.length < 5 || typeof(val) == "string") {
            throw new Error('Please fill only letters')
            this._name = val
        }
    }
}

class Student extends User {
    mark = 5

    speak() {
        console.log('Yes, I know answer')
    }
}

class SchoolStudent extends Student {
    speak() {
        super.speak()
        console.log('My answer very short and correct')
    }
}

let student1 = new Student("jenkins", 2, 2)
student1.speak()
console.log(student1.getName())
console.log('student1 ^^^')
let student2 = new SchoolStudent("travis", 2, 2)
student2.speak()

let student3 = new SchoolStudent("mimimi", 2, 2, 9)
console.log(student3.fingers)
student3.fingers = 4
console.log(student3.fingers)




// let userD = new User('Birdss', 22, 2)
// let nnn = userD.getName
// console.log(nnn)
// console.log(User.planet)
// // userD.legs = 3
// console.log(userD.legs)

// class Article {
//     constructor(title, date) {
//       this.title = title;
//       this.date = date;
//     }
  
//     static createTodays() {
//       // пам’ятайте, this = Article
//       return new this("Сьогоднішній дайджест", new Date());
//     }
//   }
  
//   let article = Article.createTodays();
  
//   console.log( article.date.toString());
  
//   console.log( new Date().getHours().toString());



  class Worker extends Human {
    constructor(salary, workHours) {
        super();
        this.salary = salary;
        this.workHours = workHours;
    }

    sayHi() {
        console.log("Hi, I'm worker");
    }

    finishWork() {
        console.log("Finisdhed work");
    }

    isWorking() {
        let currentTime = new Date().getHours()
        if (currentTime >= 9 && currentTime < 18) {
            console.log(`I'm working, Need RedBull`)
        } else {
            console.log(`I'm outside working hours. contact me tommorow`)
        }
    }
  }

  let PetroWorker = new Worker(1200, 180)
  PetroWorker.isWorking()




  let animal = {
    eats: true,
    walk() {
      console.log("Тварина йде");
    },
    eat() { }
  };
  
  let rabbit = {
    jumps: true,
    eat() {
        console.log('Rabbit eat some feed')
    },
    __proto__: animal
  };


let r2 = {
    earLength: 5,
    __proto__:rabbit
}
  
  rabbit.eat();