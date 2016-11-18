class pizza{
  //type constructor below
  constructor(size, meatToppings, veggieToppings){
    this.size = s;
    this.meatToppings = mT;
    this.veggieToppings = vT;

}
  //type instance functions below
sizeCost = function(){
  this.size = s;
  this.cost = c;
  if this.size = "Small"
  this.Cost = 7.99;
  if this.size = "Medium"
  this.Cost = 9.99;
  if this.size = "Large"
  this.Cost = 12.99;
  if this.size = "ExtraLarge"
  this.Cost = 15.99;
  return this.Cost
};

toppingCost = function(top){
  this.top = t;
  if (this.top == "meat")
  this.top = this.top + 0.99
  return this.top

  if (this.top == "veggie")
  this.top = this.top + 0.50
  return this.top
};

price = function(price){
  this.price = this.Cost + this.top;
  return this.price
};

  //type class functions below
promotionalDeal = function(pizza,percent){
  this.pizza = p;
  this.percent = d;
  this.newCost = this.pizza*this.percent;
  return this.newCost;
  
}

}
