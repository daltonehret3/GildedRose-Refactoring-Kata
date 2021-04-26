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

module.exports = {
    handleQuality
}