const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it('should drop the sellIn date by 1 if not Sulfuras', () => {
    const gildedRose = new Shop([
      new Item("Aged Brie", 2, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Sulfuras, Hand of Ragnaros", 5, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toStrictEqual(1);
    expect(items[1].sellIn).toStrictEqual(14);
    expect(items[2].sellIn).toStrictEqual(5);
  });

  it('should drop the quality of backstage passes to zero if the date has passed', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toStrictEqual(0)
  });

  it('should increase the quality of the backstage pass', () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 7, 30),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toStrictEqual(33);
    expect(items[1].quality).toStrictEqual(31);
    expect(items[2].quality).toStrictEqual(32);
  });

  it('should decrese the quality of Conjured items by 2 as the sellIn date gets closer', () => {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toStrictEqual(4);
  })

  // it('should update the quality of backstage passes')

  // it('should run through all the test_fixtures items', () => {
  //   const gildedRose = items;

  //   console.log({gildedRose})
  //   expect(testItems[0].name).toStrictEqual('Conjured Mana Cake');
  // });
});
