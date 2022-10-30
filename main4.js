// VOORRAAD ARRAY MET TV'S
const inventory4 = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];
//----------------------------------------------------------------------------------------//
//opdracht 4a
function tv(name) {
    for (let i = 0; i < inventory4.length; i++) {
        if (name === inventory4[i].name) {
            return inventory4[i].brand + " " + inventory4[i].type + " " + inventory4[i].name
        }
        }

}
console.log(tv('4K LED TV'))
//----------------------------------------------------------------------------------------//
//opdracht 4b
function price2(price) {
    return "€" + price + ",-";
}
console.log(price2("379"))
//----------------------------------------------------------------------------------------//
//opdracht 4c
function sizez(name) {
    let sizes = "";
    for (let i = 0; i < inventory4.length; i++) {
        if (name === inventory4[i].name) {
            for (let j = 0; j < inventory4[i].availableSizes.length; j++) {
                let cm = Math.round(inventory4[i].availableSizes[j] * 2.54);
                sizes = sizes + inventory4[i].availableSizes[j] + " inch (" + cm + " cm) | ";
            }
            sizes = sizes.substring(0, sizes.length - 2);
        }
    }
    return sizes;
}
console.log(sizez("4K TV"))
//----------------------------------------------------------------------------------------//
//opdracht 4d
function getDetails(tvType) {
    let details = ""
    for (let i = 0; i < inventory4.length; i++) {
        if (tvType === inventory4[i].type) {
           let tvName = inventory4[i].brand + " " + inventory4[i].type + " " + inventory4[i].name
            let price = "€" + inventory4[i].price + ",-"
            let sizez = ""
            for (let j = 0; j < inventory4[i].availableSizes.length; j++) {
                let cm = Math.round(inventory4[i].availableSizes[j] * 2.54);
                sizez = sizez + inventory4[i].availableSizes[j] + " inch (" + cm + " cm) | ";
            }
            sizez = sizez.substring(0, sizez.length - 2);
            details = tvName + "\n" + price + "\n" + sizez;
        }
    }
    return details;
}
console.log(getDetails("43PUS6504/12"))
//----------------------------------------------------------------------------------------//
//opdracht 4e
function getTvDetails() {
    const tvDetails = inventory4.map((TVD) => {
            let details = ""
                    let tvName = TVD.brand + " " + TVD.type + " " + TVD.name
                    let price = "€" + TVD.price + ",-"
                    let sizez = ""
                    for (let j = 0; j < TVD.availableSizes.length; j++) {
                        let cm = Math.round(TVD.availableSizes[j] * 2.54);
                        sizez = sizez + TVD.availableSizes[j] + " inch (" + cm + " cm) | ";
                    }
                    sizez = sizez.substring(0, sizez.length - 2);
                    details = tvName + "\n" + price + "\n" + sizez;
            return details;
    })
    return tvDetails
}
console.log(getTvDetails())
