// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const preBtn = document.querySelector(".prev-btn");
const nexBtn = document.querySelector(".next-btn");
const ranBtn = document.querySelector(".random-btn");

// local reviews data
const reviews = [
  {
    id: 1,
    name: "Boa Hancock",
    job: "web developer",
    img: "https://images2.alphacoders.com/127/1277702.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Yamato",
    job: "web designer",
    img: "https://w0.peakpx.com/wallpaper/1006/249/HD-wallpaper-yamato-anime-waifu-one-piece.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Monkey D. Luffy",
    job: "intern",
    img: "https://wallpapers.com/images/hd/luffy-phone-wallpaper-4i3d2l5f6kaab812.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Zoro",
    job: "the boss",
    img: "https://w0.peakpx.com/wallpaper/611/249/HD-wallpaper-zoro-one-piece-one-piece.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// initial id num
let iniNum = 0;

window.addEventListener("load", () => {
  // set attributes and text content
  setUp();
});

function setUp() {
  img.setAttribute("src", reviews[iniNum].img);
  author.textContent = reviews[iniNum].name;
  job.textContent = reviews[iniNum].job;
  info.textContent = reviews[iniNum].text;
}

nexBtn.addEventListener("click", () => {
  iniNum = iniNum + 1;

  if (iniNum > reviews.length - 1) {
    iniNum = 0;
  }
  console.log(iniNum);
  setUp();
});

preBtn.addEventListener("click", () => {
  iniNum = iniNum - 1;

  if (iniNum < 0) {
    iniNum = reviews.length - 1;
  }
  setUp();
});

ranBtn.addEventListener("click", () => {
  let randomNumber = Math.random();

  randomNumber = Math.floor(randomNumber * reviews.length);

  iniNum = randomNumber;
  setUp();
});
