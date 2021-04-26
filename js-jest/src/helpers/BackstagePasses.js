const isBackstagePass = (item) => {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
};

const handleBackstagePass = (item) => {
    if(item.sellIn <= 0){
        item.quality = 0
    } else if(item.sellIn <= 5){
        item.quality = item.quality + 3
    }else if(item.sellIn <= 10){
        item.quality = item.quality + 2;
    }else {
        item.quality ++;
    }

    item.sellIn --;

    return item;
};

module.exports = {
    isBackstagePass,
    handleBackstagePass
}