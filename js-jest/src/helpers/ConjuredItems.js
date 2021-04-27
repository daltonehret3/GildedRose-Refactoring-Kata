const isConjuredItem = (item) =>
    item.name === 'Conjured Mana Cake';

const handleConjuredItem = (item) => {
    if (item.quality > 0) {
        item.quality -= 2;
    }

    if (item.sellIn < 0) {
        item.quality -= 2;
    }

    item.sellIn--;

    return item;
}

module.exports = {
    isConjuredItem,
    handleConjuredItem
}