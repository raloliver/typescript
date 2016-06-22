/**
 * Customer
 */
class Customer {
    private _name: string;
    constructor(public name: string) {
        this._name = name;
    }    
    // definição de método anônimo (void)
    // aqui posso usar todos os tipos
    register(age: number, document: string, social?: boolean): string {
        return: 'Broadcast agendado...';
    }
}

var c = new Customer('Laura');
c.register(18, '2345678', true);