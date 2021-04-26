const {isAgedBrie, handleBrie, isSulfuras, handleSulfuras, isConjuredItem, handleConjuredItem} = require("./helpers");
const { isBackstagePass, handleBackstagePass } = require("./helpers/BackstagePasses");

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if(isBackstagePass(this.items[i])){
        this.items[i] = handleBackstagePass(this.items[i]);
      } else if(isAgedBrie(this.items[i])){
        this.items[i] = handleBrie(this.items[i]);
      } else if(isSulfuras(this.items[i])){
        this.items[i] = handleSulfuras(this.items[i])
      } else if(isConjuredItem(this.items[i])){
        this.items[i] = handleConjuredItem(this.items[i]);
      }else {
        this.items[i].sellIn --;
        if (this.items[i].quality > 0) {
            this.items[i].quality --; 
        }
        if (this.items[i].sellIn < 0) {
            if (this.items[i].quality > 0) {
                this.items[i].quality --;
            }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
