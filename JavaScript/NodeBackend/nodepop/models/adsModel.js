const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/adsDatabase");

var adSchema = mongoose.Schema({
  name: String,
  sell: Boolean,
  price: Number,
  photo: String,
  tags: [String],
});

adSchema.index({ name: 1, sell: 1, price: 1, tags: 1 });

class ad {
  constructor(name, sell, price, photo, tags) {
    this.name = name;
    this.sell = sell;
    this.price = price;
    this.photo = photo;
    this.tags = tags;
  }

  async getAllAds(pageLimit, page) {
    const getAds = mongoose.model("Ad", adSchema);

    let listOfAds = [];

    for await (let item of getAds.find().sort({["name"]: 1}).skip((pageLimit*page)-pageLimit).limit(pageLimit))
      listOfAds.push(
        new ad(item.name, item.sell, item.price, item.photo, item.tags)
      );

    return listOfAds;
  }

  isModelValid() {
    const validTags = ["work", "lifestyle", "motor", "mobile"];
    let isValid = true;
    // Check tags
    this.tags.forEach((tag) => {
      isValid = isValid && validTags.includes(tag) ? true : false;
    });
    if (!isValid) {
      return isValid;
    }
    // Check name
    if (this.name === undefined || this.name === null) {
      return false;
    }
    // Check price
    if (this.price === undefined || this.price === null || this.price < 0) {
      return false;
    }
    // Check sell
    if ((this.sale === true || this.sale === false)) {
      return false
    }
    return true
  }

  async createAd() {
    if (!this.isModelValid()) {
      return { message: "error!", details: "model is not valid" };
    }
    try {
      const createdAd = mongoose.model("Ad", adSchema);

      const newAd = new createdAd({
        name: this.name,
        sell: this.sell,
        price: this.price,
        photo: this.photo,
        tags: this.tags,
      });
      await newAd.save();
      console.log("ad saved");
      return { message: "ad saved", dataSave: this };
    } catch (err) {
      return { message: "error!", details: err };
    }
  }

  async filterAds(filter, pageLimit, page) {
    const getAds = mongoose.model("Ad", adSchema);

    let listOfAds = [];

    for await (let item of getAds.find(filter).sort({["name"]: 1}).skip((pageLimit*page)-pageLimit).limit(pageLimit))
      listOfAds.push(
        new ad(item.name, item.sell, item.price, item.photo, item.tags)
      );
    return listOfAds;
  }

  async getAllTags() {
    const getAds = mongoose.model("Ad", adSchema);

    let listOfTags = [];

    for await (let item of getAds.find()) {
      for (let index in item.tags) {
        if (listOfTags.includes(item.tags[index]) === false) {
          listOfTags.push(item.tags[index]);
        }
      }
    }
    return listOfTags;
  }
}

module.exports = ad;
