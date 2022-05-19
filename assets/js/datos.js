class Datos{
    constructor(fecha, evento, cuota, stake,){
        this._fecha = fecha;
        this._evento = evento;
        this._cuota = cuota;
        this._stake = stake;
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(fecha){
        this._fecha = fecha;
    }

    get evento(){
        return this._evento;
    }
    set evento(evento){
        this._evento = evento;
    }

    get cuota(){
        return this._cuota;
    }
    set cuota(cuota){
        this._cuota = cuota;
    }

    get stake(){
        return this._stake;
    }
    set stake(stake){
        this._stake = stake;
    }

    Ganancia(){
        return this._stake * this._cuota
    }
}


class Tike extends Datos{
    static contadorIngreso = 0;

    constructor(fecha, evento, cuota, stake, result){
        super(fecha, evento, cuota, stake);
        this._result = result;
        this._id = ++Tike.contadorIngreso;
    }
    get id(){
        return this._id;
    }
    get result(){
        return this._result;
    }
    set result(result){
        this._result = result;
    }
}

