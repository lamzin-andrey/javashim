class Integer {
    /**
     * @param {Number} i 
     * @return String
     */
    static toString(i){
        i = parseInt(i, 10);
        return String(i);
    }
}

class StringBuffer {
    constructor(){
        this.s = "";
    }
    append(v){
        this.s += String(v);
    }
    toString(){
        return this.s;
    }
}