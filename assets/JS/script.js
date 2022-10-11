class Person {

    constructor(name, age){
        this.name = name
        this.age = age
    }
    differentsAge(persona){
        if(persona < this.age){
        console.log(persona.nome + "è più vecchio di" + this.nome)
     }else{
        console.log("Non è più vecchio")
     }
    }
}

let p1 = new Person("jonathan", 20)

let p2 = new Person("Frank", 23)

let p3 = new Person("Fabian", 29)

p1.differentsAge(p2.nome)
p2.differentsAge(p1.nome)