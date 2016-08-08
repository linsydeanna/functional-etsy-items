$(document).ready(function() {

  // NUMBER ONE

    var $averagePrice = $('#average-price');

    var $avgprices = items.map(function(item) {return item.price})
    .reduce((total, item) => total + item, 0);

    var $average = $avgprices/items.length;

    console.log ("Function is working");

$averagePrice.append($average);

  // NUMBER TWO

var $arrayItems = $('#array-items');

var $pricesBetween = items.filter( (item) => item.price <= 18 && item.price >= 14 )
.map((items) => items.title);

$arrayItems.append($pricesBetween);

  // NUMBER Three

  var $gbpCode = $('#gbp');

  var $displayGBP = items.filter( (item) => item.currency_code === "GBP" )
  .map((items) => items.title);

  $gbpCode.append($displayGBP);

  // NUMBER FOUR

  var $woodMaterial = $('#wood');

  var $displayWood = items.filter( (item) => item.materials.includes("wood") )
  .map((items) => items.title);

  $woodMaterial.append($displayWood);

  // NUMBER FIVE

  var $eightMaterials = $('#eight-materials');

  var $displayEight = items.filter( (item) => item.materials.length >= 8 )
  .map((item) => item.title + item.materials + item.quantity);

  $eightMaterials.append($displayEight);

  // NUMBER SIX

  var $sellersMade = $('#sellers');

  var $displaySellers = items.filter( (items) => items.who_made === "i_did" )
  .map((items) => items.title).length;

  $sellersMade.append($displaySellers);

  });
