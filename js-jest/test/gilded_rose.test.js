const {Shop, Item} = require("../src/gilded_rose");
const {items} = require('./texttest_fixture')

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it('should drop the sellIn date by 1 if not Sulfuras or Conjured Mana Cakes', () => {
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

  it('should drop the quality of Backstage passes to zero if the date has passed', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toStrictEqual(0)
  });

  it('should increase the quality of the backstage pass', () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 7, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 30),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toStrictEqual(33);
    expect(items[1].quality).toStrictEqual(32);
    expect(items[2].quality).toStrictEqual(31);
  });

  it('should decrease the quality of Conjured items by 2 as the sellIn date gets closer', () => {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toStrictEqual(4);
  });

  it('should decrese the quality of Conjured items by 4 if we are passed the sellIn Date', () => {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", -1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toStrictEqual(2);
  });

  it('should never allow quality to drop below 0', () => {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', -1, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toStrictEqual(0);
  });

  it('should never allow quality to go above 50', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toStrictEqual(50);
  });

  it('should handle the list of items from ./texttest_fixtures', () => {
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toStrictEqual(19);
    expect(updatedItems[1].quality).toStrictEqual(1);
    expect(updatedItems[2].quality).toStrictEqual(6);
    expect(updatedItems[3].quality).toStrictEqual(80);
    expect(updatedItems[4].quality).toStrictEqual(80);
    expect(updatedItems[5].quality).toStrictEqual(21);
    expect(updatedItems[6].quality).toStrictEqual(50);
    expect(updatedItems[7].quality).toStrictEqual(50);
    expect(updatedItems[8].quality).toStrictEqual(4);
  });
});
