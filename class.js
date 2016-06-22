/**
 * Customer
 */
var Customer = (function () {
    function Customer(myname) {
        this.myname = myname;
        this._name = myname;
    }
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var c = new Customer('Laura');
c.name = 'Fernanda';
console.log(c.name);
