    function handleBrie(item) {
        if(item.quality < 50){
            item.quality += 1
        }

        item.sellIn --;

        return item
    }

    function isAgedBrie(item){
        if(item.name === 'Aged Brie'){
            return true;
        }
        
        return false;
    }

    // function isBackstagePass(item) {
    //     if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
    //         return true;
    //     }
        
    //     return false;
    // };

    // function handleBackstagePass(item) {
    //     if(item.sellIn <= 0){
    //         item.quality = 0
    //     } else if(item.sellIn <= 5){
    //         item.quality = item.quality + 3
    //     }else if(item.sellIn <= 10){
    //         item.quality = item.quality + 2;
    //     }

    //     {item.quality > 50 ? item.quality = 50 : null}

    //     return item;
    // };

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

module.exports = {
    isSulfuras,
    isAgedBrie,
    isConjuredItem,
    handleBrie,
    handleSulfuras,
    handleConjuredItem
}