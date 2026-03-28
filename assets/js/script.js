const plots = [
    { 
        title: "SVG Flora form land", 
        location: "Jangaon", 
        size: "242 syd onwards", 
        price: "2,899/- per sqd", 
        imgBase: "assets/images/SVGFLORA_", 
        imgCount: 7, 
        href: "assets/Brochure/SVG_Flora_Farms_Resorts_Brochure.pdf",
		Details: "100 acre project | With a 5-acre premium resort, modern amenities |3 mins from Warangal highway"
    },
    { 
        title: "GEM Group | Sree Laxmi Balaji Township", 
        location: "ShadNagar Town", 
        size: "242 syd onwards", 
        price: "25,000/- per sqd", 
        imgBase: "assets/images/sreelaxmibalaji_", 
        imgCount: 7, 
        href: "assets/Brochure/Sree_laxmi_balaji_township_Brochure.pdf",
		Details: "46 acre project | Adjasent to houses | Near to Amazon Data Center | proposed school with in this venture | Clubhouse"
    },
    { 
        title: "1000 syd open land at Timmapur", 
        location: "Timmapur, 400 meters from Bangaloru Road", 
        size: "1000 syd", 
        price: "9000/- per sqd", 
        imgBase: "assets/images/Timmapur_", 
        imgCount: 2, 
        href: "",
		Details: "immidiate registration, second venture from main road"
    },
    { 
        title: "5 acre agriculture land", 
        location: "Near to Balanagar, ShadNagar", 
        size: "5 acre", 
        price: "60 Lakhs per acre", 
        imgBase: "assets/images/5acre60lakhs_", 
        imgCount: 2, 
        href: "",
		Details: "Landscape land, Clear title"
    }
];


const flats = [
   { 
        title: "Nirvanan Kuteer (re sale)", 
        location: "Pragathi Nagar - near More Super Markat", 
        size: "1050", 
        price: "58 Lakhs", 
        imgBase: "assets/images/nirvana_", 
        imgCount: 11, 
        href: "",
		Details: "Getting 20,000/- rent every month | no water problem | as per vastu"
    },
    { 
        title: "Indipendent house", 
        location: "Mahadev puram, near KPHB", 
        size: "100 syd, G+2", 
        price: "1.4 Cr", 
        imgBase: "assets/images/mahadevpuram_", 
        imgCount: 1, 
        href: "",
		Details: "Ready to occupy | as per vastu "
    },
    { 
        title: "Spring Ville | Villa no.135/A", 
        location: "Nizempet, Hyderabad", 
        size: "300 syd | 5780 sef | G+2", 
        price: "3.9 Cr", 
        imgBase: "assets/images/SpringVille_", 
        imgCount: 3, 
        href: "",
		Details: "4 Beedroom | Study Room | Home theatre | Servent Room | Lift"
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
					<p>${item.Details}</p>
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
