var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i=0;
while(ingredients[i]) {
console.log(ingredients);
i++;
}
console.log("for loop output starts");
for(i=0;i<ingredients.length;i++)
{
console.log(ingredients);
console.log("for loop output");
}
for (i=ingredients.length-1;i>=0;i--)
{
console.log(ingredients[i]);
}

