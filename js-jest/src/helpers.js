    const handleBrie = (item) => {
        if(item.quality < 50){
            item.quality += 1
        }

        item.sellIn --;

        return item
    }

    const isAgedBrie = (item) => {
        return item.name === 'Aged Brie';
    }

    const isSulfuras = (item) => (
        item.name === 'Sulfuras, Hand of Ragnaros'
    );

    const handleSulfuras = (item) => item

    const isConjuredItem = (item) => {
        return item.name === 'Conjured Mana Cake';
};

    const handleConjuredItem = (item) => {
        if(item.quality > 0){
            item.quality -= 2;
        }
        
        if(item.sellIn < 0){
            item.quality -= 2;
        }

        item.sellIn --;

        return item;
    }

    const handleQuality = (item) => {
        if(!isSulfuras(item)) {
            if (item.quality > 50) {
                item.quality = 50;
            } else if (item.quality < 0) {
                item.quality = 0;
            }
        }else{
            item.quality = 80;
        }

        return item;
    };

module.exports = {
    isSulfuras,
    isAgedBrie,
    isConjuredItem,
    handleBrie,
    handleSulfuras,
    handleConjuredItem,
    handleQuality
}