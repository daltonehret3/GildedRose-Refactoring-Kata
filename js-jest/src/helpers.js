const {isSulfuras} = require("./helpers/Sulfuras");

const handleQuality = (item) => {
    if (!isSulfuras(item)) {
        if (item.quality > 50) {
            item.quality = 50;
        } else if (item.quality < 0) {
            item.quality = 0;
        }
    } else {
        item.quality = 80;
    }

    return item;
};

const handleOtherItems = (item) => {
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

module.exports = {
    handleQuality,
    handleOtherItems
}