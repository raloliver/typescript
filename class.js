var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Person
 */
var Person = (function () {
    function Person(document) {
        this.document = document;
    }
    return Person;
}());
/**
 * Company
 */
var Company = (function () {
    function Company(companyName) {
        this.companyName = companyName;
    }
    return Company;
}());
/**
 * Customer
 */
var Customer = (function (_super) {
    __extends(Customer, _super);
    function Customer(name, document) {
        _super.call(this, document);
        this.name = name;
        this.document = document;
        this._name = name;
        Customer.badges;
    }
    // definição de método anônimo (void)
    // aqui posso usar todos os tipos
    Customer.prototype.register = function () {
    };
    // exemplo de variável estática
    Customer.badges = 0;
    return Customer;
}(Person));
var c = new Customer('Laura', '2345678');
c.register();
Customer.badges;
