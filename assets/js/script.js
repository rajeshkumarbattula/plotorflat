const plots = [
    { 
        title: "SVG Flora", 
        location: "Jangaon", 
        size: "242 syd onwards", 
        price: "2,899/- per sqd", 
        imgBase: "assets/images/SVGFLORA_", 
        imgCount: 7, 
        href: "assets/Brochure/SVG_Flora_Farms_Resorts_Brochure.pdf"
    },
    { 
        title: "GEM Group | Sree Laxmi Balaji Township", 
        location: "ShadNagar Town", 
        size: "242 syd onwards", 
        price: "25,000/- per sqd", 
        imgBase: "assets/images/sreelaxmibalaji_", 
        imgCount: 7, 
        href: "assets/Brochure/Sree_laxmi_balaji_township_Brochure.pdf"
    }
];


const flats = [
   { 
        title: "Nirvanan Kuteer (re sale)", 
        location: "Pragathi Nagar - near More Super Markat", 
        size: "1050 sft", 
        price: "58 Lakhs", 
        imgBase: "assets/images/NirvanaKuteer_", 
        imgCount: 11, 
        href: ""
    },
    { 
        title: "Indipendent house", 
        location: "Mahadev puram, near KPHB", 
        size: "100 syd, G+2", 
        price: "1.4 Cr", 
        imgBase: "assets/images/mahadevpuram_", 
        imgCount: 1, 
        href: ""
    }
];

function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = data.map((item, index) => {
        return `
            <div class="card">
                <div class="carousel" id="carousel-${containerId}-${index}">
                    <button class="prev" onclick="showPrev('${containerId}', ${index}, ${item.imgCount}, '${item.imgBase}')">&#10094;</button>
                    <img src="${item.imgBase}1.JPG" alt="${item.title}" id="img-${containerId}-${index}">
                    <button class="next" onclick="showNext('${containerId}', ${index}, ${item.imgCount}, '${item.imgBase}')">&#10095;</button>
                </div>
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.location} | ${item.size}</p>
                    <p class="price">${item.price}</p>
                    <a href="${item.href}">Brochure</a>
                </div>
            </div>
        `;
    }).join('');
}

renderCards(plots, 'plots-container');
renderCards(flats, 'flats-container');

function showPrev(containerId, cardIndex, imgCount, imgBase) {
    const imgElement = document.getElementById(`img-${containerId}-${cardIndex}`);
    let currentIndex = parseInt(imgElement.dataset.index || "1");
    currentIndex = currentIndex === 1 ? imgCount : currentIndex - 1;
    imgElement.src = `${imgBase}${currentIndex}.JPG`;
    imgElement.dataset.index = currentIndex;
}

function showNext(containerId, cardIndex, imgCount, imgBase) {
    const imgElement = document.getElementById(`img-${containerId}-${cardIndex}`);
    let currentIndex = parseInt(imgElement.dataset.index || "1");
    currentIndex = currentIndex === imgCount ? 1 : currentIndex + 1;
    imgElement.src = `${imgBase}${currentIndex}.JPG`;
    imgElement.dataset.index = currentIndex;
}
