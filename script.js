let person = {
    name: 'Uzbek',
    surname: 'Uzbekovich',
    age: 5
}

person.age = 6
person.adres = 'USSR'

person['name'] = 'Joseph'
person['surname'] = 'Stalin'





let car = {
    brand: 'BMW',
    hp: 1200,
    model:'m5cs',
    start: function() {
        // console.log('Машина заводится');
    }
}

car.hp = 2500

car.color = 'black'
car.start()
delete car.model








// console.log(car)
// console.log(person);




let car2 = {...car}



let company = {
    name: 'Github',
    founder: {
        name: 'Chris',
        surname: 'Wanstrath',
        networth: '2.2 Billion',
        address: {
            city: 'Chicago',
            street: 'Amir Temur 7'
        }

    }
}






// console.log(company);
// console.log(car,car2);





let book = {
    title: 'war and piece',
    author: 'Lev Tolstoy',
    year: 1867
}


function print (obj) {
    for(let key in obj) {
        console.log(`${key} : ${obj[key]}`);
        
    }
}
//  print(book)

//  let book2 ={...book}

// book2.title = 'War and Piece'
// book2.year =2024





let school = {
    name: 'President School',
    teachers: {
        math: 'Davlat Polatov',
        geography: 'Uzbek',
        history: 'Uzb'
    },
    students: {
        1: 'Elon Musk',
        2: 'James Rodrigues',
        3: 'Thomas Muller',
        4: 'Manuel Noer'
    }
}

