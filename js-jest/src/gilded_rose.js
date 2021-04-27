const {handleConjuredItem} = require("./helpers/ConjuredItems");
const {handleSulfuras} = require("./helpers/Sulfuras");
const {handleBrie} = require("./helpers/AgedBrie");
const {handleBackstagePass} = require("./helpers/BackstagePasses");

const {handleQuality, handleOtherItems} = require("./helpers");

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
            switch (item.name) {
                case 'Backstage passes to a TAFKAL80ETC concert':
                    handleBackstagePass(item);
                    break;
                case 'Aged Brie':
                    handleBrie(item);
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    handleSulfuras(item);
                    break;
                case 'Conjured Mana Cake':
                    handleConjuredItem(item);
                    break;
                default:
                    handleOtherItems(item);
            }

            handleQuality(item);

            return item;
        });
    }
}

module.exports = {
    Item,
    Shop
}
