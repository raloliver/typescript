/**
 * Person
 */
class Person {
    constructor(public document: string) {
        
    }
}

interface ICompany extends Company {
    register(): void;
}

/**
 * TechCompany
 */
class TechCompany implements ICompany {
    constructor(public companyName: string) {
        
    }
    register(): void {

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

var company     = new Company ('AMDE'); 
var customer    = new Customer('Laura','2345678');
customer.register();
Customer.badges;