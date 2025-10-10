// Simplified `itemData` Structure
const itemData = {
    // Item Key: Unique identifier for each item
    // Item Title: Title of the item
    // Navigation Links: Previous and Next items
    gt3mantle: {
        title: "2:2 Porsche 911 GT3 Mantle Design",
        prev: { href: "index.html", text: "Garage" },
        next: { href: "car.html?item=mansm8", text: "1:1 BMW M8 Mansaug" }
    },
    mansm8: {
        title: "1:1 BMW M8 Mansaug",
        prev: { href: "car.html?item=gt3mantle", text: "2:2 Porsche 911 GT3 Mantle Design" },
        next: { href: "car.html?item=golf4x4", text: "1:2 Volkswagen Golf R 4x4" }
    },
    golf4x4: {
        title: "1:1 Volkswagen Golf R 4x4",
        prev: { href: "car.html?item=mansm8", text: "1:1 BMW M8 Mansaug" },
        next: { href: "car.html?item=vanztrackhawk", text: "3:3 Jeep Trackhawk Slammed" }
    },
    vanztrackhawk: {
        title: "3:3 Jeep Trackhawk Slammed",
        prev: { href: "car.html?item=golf4x4", text: "1:2 Volkswagen Golf R 4x4" },
        next: { href: "car.html?item=puroswb", text: "1:2 Ferrari Purosangue Pogea Racing Edition" }
    },
    puroswb: {
        title: "1:1 Ferrari Purosangue Pogea Racing Edition",
        prev: { href: "car.html?item=vanztrackhawk", text: "3:3 Jeep Trackhawk Slammed" },
        next: { href: "w223mansory.html", text: "1:2 Mansory Mercedes S500" }
    },
    w223mansory: {
        title: "1:2 Mansory Mercedes S500",
        prev: { href: "car.html?item=puroswb", text: "1:2 Ferrari Purosangue Pogea Racing Edition" },
        next: { href: "car.html?item=saskia", text: "1:1 Pagani Huayra Codalunga" }
    },
    r8yeti: {
        title: "1:1 Audi R8 Yeti",
        prev: { href: "w223mansory.html", text: "1:2 Mansory Mercedes S500" },
        next: { href: "car.html?item=rx7kyza", text: "1:1 Ferrari 812 Competizione Venuum" }
    },
    rx7kyza: {
        title: "1:1 Ferrari 812 Competizione Venuum",
        prev: { href: "car.html?item=saskia", text: "1:1 Pagani Huayra Codalunga" },
        next: { href: "car.html?item=kcsq8", text: "2:2 Audi SQ8 Sportback KC" }
    },
    kcsq8: {
        title: "2:2 Audi SQ8 4x4",
        prev: { href: "car.html?item=rx7kyza", text: "1:1 Ferrari 812 Competizione" },
        next: { href: "car.html?item=evil", text: "1:1 Bugatti Tourbillon Venuum" }
    },
    evil: {
        title: "1:1 Bugatti Tourbillon Venuum",
        prev: { href: "car.html?item=kcsq8", text: "2:2 Audi SQ8 Sportback KC" },
        next: { href: "car.html?item=phawk", text: "2:2 Jeep Trackhawk PriorDesign" }
    },
    phawk: {
        title: "2:2 Jeep Trackhawk PriorDesign",
        prev: { href: "car.html?item=evil", text: "1:1 Bugatti Tourbillon Venuum" },
        next: { href: "car.html?item=rs6", text: "1:1 Big Drippa Bloodclaat Magnum Sipper" }
    },
    rs6: {
        title: "1:1 Big Drippa Bloodclaat Magnum Sipper",
        prev: { href: "car.html?item=phawk", text: "2:2 Jeep Trackhawk PriorDesign" },
        next: { href: "evo911.html", text: "2:2 Mansory Porsche 911 P9LM Evo" }
    },
    evo911: {
        title: "2:2 Mansory Porsche 911 P9LM Evo",
        prev: { href: "car.html?item=rs6", text: "1:1 Big Drippa Bloodclaat Magnum Sipper" },
        next: { href: "widekit911b.html", text: "1:2 Porsche Brabus Rocket 900R" }
    },
    widekit911b: {
        title: "1:2 Porsche Brabus Rocket 900R",
        prev: { href: "evo911.html", text: "2:2 Mansory Porsche 911 P9LM Evo" },
        next: { href: "car.html?item=sequoia4x4", text: "4:4 Toyota Sequoia 4x4" }
    },
    z40: {
        title: "1:1 Zlayworks Z40",
        prev: { href: "widekit911b.html", text: "1:2 Porsche Brabus Rocket 900R" },
        next: { href: "car.html?item=cayrhc", text: "2:2 Porsche Cayenne 4x4" }
    },
    cayrhc: {
        title: "1:2 Porsche Cayenne 4x4",
        prev: { href: "car.html?item=sequoia4x4", text: "4:4 Toyota Sequoia 4x4" },
        next: { href: "car.html?item=s63w223mansory", text: "2:2 Mansory Mercedes S63 AMG" }
    },
    s63w223mansory: {
        title: "2:2 Mansory Mercedes S63 AMG",
        prev: { href: "car.html?item=cayrhc", text: "2:2 Porsche Cayenne 4x4" },
        next: { href: "car.html?item=zzz", text: "McLaren 765LT ZZZ" }
    },
    zzz: {
        title: "1:1 McLaren 765LT ZZZ",
        prev: { href: "car.html?item=s63w223mansory", text: "2:2 Mansory Mercedes S63 AMG" },
        next: { href: "index.html", text: "Garage" }
    }
    // Add more items here
};

// Dynamic Image Rendering Logic
// Parse query parameters
const params = new URLSearchParams(window.location.search);
const itemKey = params.get("item");

// Retrieve current item data
const currentItem = itemData[itemKey];

if (currentItem) {
    // Set page title
    document.getElementById("page-title").textContent = currentItem.title;

    // Generate dynamic image paths
    const folderPath = `./images/${itemKey}/`;
    const images = [
        { src: `${folderPath}main.png`, title: currentItem.title },
        { src: `${folderPath}1.png`, title: "Title of Image 1" },
        { src: `${folderPath}2.png`, title: "Title of Image 2" },
        { src: `${folderPath}3.png`, title: "Title of Image 3" },
        { src: `${folderPath}4.png`, title: "Title of Image 4" },
        { src: `${folderPath}back.png`, title: "Back View" }
    ];

    // Populate image grid
    const imageGrid = document.getElementById("image-grid");
    images.forEach((imgData, index) => {
        const imageItem = document.createElement("div");
        imageItem.className = "image-item";
        if (index === 0 || index === images.length - 1) {
            imageItem.classList.add("large");
        }

        imageItem.innerHTML = `
            <img src="${imgData.src}" alt="${imgData.title}">
            <div class="image-title">${imgData.title}</div>
        `;
        imageGrid.appendChild(imageItem);
    });

    // Set navigation links
    const prevLink = document.getElementById("prev-link");
    prevLink.href = currentItem.prev.href;
    prevLink.textContent = `\u276E ${currentItem.prev.text}`;

    const nextLink = document.getElementById("next-link");
    nextLink.href = currentItem.next.href;
    nextLink.textContent = `${currentItem.next.text} \u276F`;
} else {
    // Handle missing or invalid items
    document.body.innerHTML = "<h1>Item not found!</h1>";
}