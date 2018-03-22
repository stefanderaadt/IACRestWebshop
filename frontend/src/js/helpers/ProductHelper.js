export function getDiscountedProductPrice(product){
  return product.price *
    ((100-getCurrentDiscountPercentage(product.discounts))/100)
}

export function isToday(discounts){
  if(discounts.length === 0) return false

  const today = new Date()

  for(var i = 0; i < discounts.length; i++){
    if((new Date(discounts[i].beginDate)<today) &&
      (today<new Date(discounts[i].endDate))) return true
  }

  return false
}

export function getCurrentDiscountPercentage(discounts){
  const today = new Date()

  for(var i = 0; i < discounts.length; i++){
    if((new Date(discounts[i].beginDate)<today) &&
      (today<new Date(discounts[i].endDate))) return discounts[i].discountPercentage
  }
}

export function getTotalCartPrice(all){
    var total = 0

    all.forEach(function(row) {
      if(isToday(row.product.discounts)){
        total += row.amount * getDiscountedProductPrice(row.product)
      }else{
        total += row.amount * row.product.price
      }
    })

    return total
  }
