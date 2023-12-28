/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let ans={};
  for(let item of transactions)
  {
    const type = item["category"];
    if(!ans.hasOwnProperty(type))
    {
      ans[type]={category:type,totalSpent:item["price"]};
    }
    else
    {
      ans[type].totalSpent+=item["price"];
    }
  
  }
  return Object.values(ans);
}

module.exports = calculateTotalSpentByCategory;
