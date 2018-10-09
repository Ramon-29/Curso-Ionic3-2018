class Coche {
    constructor(make, km){
        this.make = make;
        this.km = km;
    }

    move(km){
        this.km += km;
    }

    getkm(){
        return this.km;
    }
}


export default Coche;