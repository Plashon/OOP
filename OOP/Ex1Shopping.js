class Payment {
  constructor(amount) {
    this.amount = amount;
  }
}
let payment = new Payment(50);
console.log(payment);

class Cash extends Payment {
  constructor(amount, cashTendered) {
    super(amount);
    this.cashTendered = cashTendered;
  }
}
let cash = new Cash(20,"cash");
console.log(cash);

class Check extends Payment {
  constructor(amount, name, bankID) {
    super(amount);
    this.name = name;
    this.bankID = bankID;
  }
  authorized() {
    console.log("authorized Cash");
  }
}
let check = new Check(30,"check", "0001");
console.log(check);
check.authorized();

class Credit extends Payment {
  constructor(amount, number, type, expDate) {
    super(amount);
    this.number = number;
    this.type = type;
    this.expDate = expDate;
  }
  authorized() {
    console.log("authorized Credit");
  }
}
let credit = new Credit(10,"01", "credit", "01/11/1111");
console.log(credit);
credit.authorized();

///////////////////////END PAYMENT////////////////////////////

class Customer {
    orders = [];
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  addOrder(order){
    this.orders.push(order)
  }
}
let customer = new Customer("customer", "01/01");
console.log(customer.name);
console.log(customer.address);

class Order {
    Payment = null;
    orderDetails = [];
  constructor(date, status) {
    this.date = date;
    this.status = {status};
  }
  calcSubTotal() {
    console.log("SubTotal Order");
  }
  calcTex() {
    console.log("Tex Order");
  }
  calcTotal() {
    console.log("Total Order");
  }
  calcTotalWeight() {
    console.log("TotalWeight Order");
  }

  addPayment(payment){
    this.payment=payment;
  }
  addOrderDetail(orderDetail){
    this.orderDetails.push(orderDetail)
  }
}
let order = new Order("order", "sit");
console.log(order.name);
console.log(order.status);
order.calcSubTotal();
order.calcTex();
order.calcTotal();
order.calcTotalWeight();

class OrderDetail {
    item = null;
  constructor(quantity, texStatus) {
    this.quantity = quantity;
    this.texStatus = texStatus;
  }
  calcSubTotal() {
    console.log("SubTotal OrderDetail");
  }
  calcTotalWeight() {
    console.log("TotalWeight OrderDetail");
  }
  calcTex() {
    console.log("Tex OrderDetail");
  }
  additem(item){
    this.item = item;
  }
}
let orderdetail = new OrderDetail("order detail", "true");
console.log(orderdetail.quantity);
console.log(orderdetail.texStatus);
orderdetail.calcSubTotal();
orderdetail.calcTotalWeight();
orderdetail.calcTex();

class Item {
  constructor(shippingWeight, description, price) {
    this.shippingWeight = shippingWeight;
    this.description = description;
  }
  getPriceForQuantity() {
    console.log("getPriceForQuantity");
  }
  getTex() {
    console.log("getTex");
  }
  inStock() {
    console.log("inStock");
  }
}
let item = new Item("shippingWeight", "description");
console.log(item.shippingWeight);
console.log(item.description);
item.getPriceForQuantity();
item.getTex();
item.inStock();
