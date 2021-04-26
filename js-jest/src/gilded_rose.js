const {isConjuredItem, handleConjuredItem} = require("./helpers/ConjuredItems");
const {isSulfuras, handleSulfuras} = require("./helpers/Sulfuras");
const {isAgedBrie, handleBrie} = require("./helpers/AgedBrie");
const {isBackstagePass, handleBackstagePass} = require("./helpers/BackstagePasses");

const {handleQuality} = require("./helpers");

class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        return this.items.map((item) => {
            if (isBackstagePass(item)) {
                item = handleBackstagePass(item);
            } else if (isAgedBrie(item)) {
                item = handleBrie(item);
            } else if (isSulfuras(item)) {
                item = handleSulfuras(item)
            } else if (isConjuredItem(item)) {
                item = handleConjuredItem(item);
            } else {
                item.sellIn--;
                if (item.quality > 0) {
                    item.quality--;
                }
                if (item.sellIn < 0) {
                    if (item.quality > 0) {
                        item.quality--;
                    }
                }
            }

            item = handleQuality(item);

            return item;
        });
    }
}

module.exports = {
    Item,
    Shop
}
