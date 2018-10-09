//1. Transpilación: http://babeljs.io/repl/

//2. Declaración de clases (objetos)

    class Persona{
        constructor(name, age){
            this.name  = name;
            this.age = age;
        }

        sayHello(){
            console.log(`Hello ${this.name} and I\'m ${this.age}`);
        }
    }

    const p1 = new Persona('Paco',32);
    p1.sayHello();

//3. Importación/exportación de módulos

    import cars from './cars';
    console.log('Cars = ', cars);

//4. const, var, let, windows.

    for (let i = 0;i<cars.length;i++){

    }

//5. Funciones flecha, contexto del this

function suma(a, b){
    return a + b;
}

const suma2 = (a, b) =>{
    return a + b;
}

console.log(suma2(1,3));

const array = [2,4,7,9,10,12];

const fun1 = (a) =>{
    /*const res = [];
    for(let i = 0;i<a.length;i++){
        if(a[i]%2===0)  res.push(a[i]*2);
    }
    return res;*/

    /*
        return a.filter(function(x){
                return x%2===0;
        });
    */

    /*
        return a.filter(x => x%2 === 0);
    */

    /*
        return a.map(x => x*2);
    */
    
    
        return a.filter(x => x%2 === 0).map(x => x*2);
    

}

/*const fun1 = (a) =>{
    const res = [];
    for(let x of a){
        if(x%2===0)  res.push(x*2);
    }
    return res;
}*/



console.log(fun1(array));

//6. Plantillas en cadenas (``), funcion includes

 // ver en la clase persona punto 2

//7. Valores por defecto en parámetros,

    const sum  = (a, b = 0) =>{
        return a + b;
    }
    console.log(sum(1));

    const person = {
        name: 'Paco',
        age: 33,
        sex: 'M'
    };


    const {name, age, sex}  = person;

    console.log(name, age, sex);

//8. Objetos literales:
//     - Simplificación propiedad-valor let a = {b, c: 'val'}
//     - Simplificación declaración de función

//9. Spread operator

    const c = [4,5,6,7,8];
    const array6 = [0,1,2,3, ...c];

    console.log(array6);

//10. Bucles for para iterar arrays y claves de objetos

    // ARRAY
    for (let x1 of array6){
        console.log(x1);
    }

    // CLASE
    for (let k in person){
        console.log(`${k}: ${person[k]}`);
    }