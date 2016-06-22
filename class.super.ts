/**
 * Person
 */
class Person {
    constructor(public document: string) {
        
    }
}

/**
 * Company
 */
class Company {
    constructor(public companyName: string) {
        
    }
}

/**
 * Customer
 */
class Customer extends Person {
    // exemplo de variável estática
    static badges: number = 0;
    private _name: string;
    constructor(public name: string, public document: string) {        
        super(document);
        this._name = name;
        Customer.badges;
    }    
    // definição de método anônimo (void)
    // aqui posso usar todos os tipos
    register(): void {
       
    }
}

var c = new Customer('Laura','2345678');
c.register();
Customer.badges;