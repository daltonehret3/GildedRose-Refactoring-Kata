const isAgedBrie = (item) =>
    item.name === 'Aged Brie';

const handleBrie = (item) => {
    if(item.quality < 50){
        item.quality += 1
    }

    item.sellIn --;

    return item
}

module.exports = {
    isAgedBrie,
    handleBrie
}