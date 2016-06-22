/**
 * Customer
 */
class Customer {
    private _name: string;
    constructor(public myname: string) {
        this._name = myname;
    }

    
    public get name() : string {
        return this._name
    }

    
    public set name(newName : string) {
        this._name = newName;
    }
    
    
}

var c = new Customer('Laura');

c.name = 'Fernanda';
console.log(c.name);
