const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/adsDatabase", {
  useNewUrlParser: true
});

// Create the ad schema
const adSchema = new mongoose.Schema({
    name: String,
    sell: Boolean,
    price: Number,
    photo: String,
    tags: [String],
});

adSchema.index({ name: 1, sell: 1, price: 1, tags: 1 });

// Create the Ad model
const Ad = mongoose.model("Ad", adSchema);

Ad.deleteMany({}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("All documents deleted from collection.");
  }
});

// Insert a few ads into the database
Ad.create([
  { name: "Bicicleta",
    sell: true,
    price: 230.95,
    photo: "bici.jpg",
    tags: ["lifestyle", "motor"], },
    { name: "Ordenador",
    sell: true,
    price: 675.24,
    photo: "pc.jpg",
    tags: ["work", "lifestyle"], },
    { name: "Tablet",
    sell: false,
    price: 200,
    photo: "tablet.jpg",
    tags: ["work", "mobile", "lifestyle"], },
    { name: "Moto",
    sell: false,
    price: 1500,
    photo: "moto.jpg",
    tags: ["motor", "lifestyle"], },
    { name: "Furgoneta",
    sell: true,
    price: 7695,
    photo: "furgoneta.jpg",
    tags: ["motor", "lifestyle", "work"], },

    ],  function(error, ads) {
    if (error) {
        console.error(error);
    } else {
        console.log(`Inserted ${ads.length} documents into the ads collection`);
    }

  // Disconnect from the database
  mongoose.connection.close();
});