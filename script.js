// function Log(text) {
//     this.text = text;
// }
// Log.prototype.showText = function() {
//     console.log('cb ' + Log.format(this.text || Log.DEFAULT_TEXT));
// };

// // Log.format = function(text) {
// //     return text.toUpperCase();
// // };

// // Log.DEFAULT_TEXT = 'Default';

// const logger = new Log('Hello world');

// class Log1 {
//     constructor(text) {
//         this.text = text;
//     }

//     showText(prefix) {
//         // console.log('cb ' + Log.format(this.text || Log.DEFAULT_TEXT));
//         console.log(prefix + this.text);
//     }
// }

// const logger1 = new Log1('Hello world');

class Human {
    static DEFAULT_AGE = 30;

    constructor(name, age) {
        this.name = name;
        this.type = 'Human';
        this.age = age || Human.DEFAULT_AGE;
    }
    static format(text) {
        return text.toUpperCase();
    }
    run() {
        console.log(this.name + ' is running');
    }
}

class Student extends Human {
    constructor(name) {
        super(name, 18);

        this.type = 'Student';
    }

    run(text) {
        console.log(this.name + ' is running fast');
    }

    eat() {
        console.log(this.name + 'is eating');
    }

    superRun() {
        super.run();
    }
}

const ham = new Hamburger(Hamburger.SMALL);

ham.add(Hamburger.FILLING_KETCHUP);
