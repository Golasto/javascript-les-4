// VOORRAAD ARRAY MET TV'S
const inventory2 = [
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


//Opdracht 2a
let sum = 0
const runOut2 = inventory2.filter((sold) => {
    return sold.originalStock < 6
})

 for (let i = 0; i < runOut2.length; i++) {
     sum++;
 }
 console.log("Totale aantal is: " + sum)
//----------------------------------------------------------------------------------------//
//opdracht 2b
const node = document.createElement("P");
 node.setAttribute("id", "green")
 const textNode = document.createTextNode("Totale aantal is: " + sum);
node.appendChild(textNode);
 console.log(textNode)
document.getElementById("tekst").appendChild(node)
document.getElementById("green").style.color = "green"
//----------------------------------------------------------------------------------------//
//Opdracht 2c
let total = 0
for (let j = 0; j < inventory2.length; j++) {
    total = total + inventory2[j].originalStock;
}
console.log(total)
//----------------------------------------------------------------------------------------//
//opdracht 2d
const node1 = document.createElement("P");
node1.setAttribute("id", "blue")
const textNode1 = document.createTextNode("Totale aantal is: " + total);
node1.appendChild(textNode1);
console.log(textNode1)
document.getElementById("tekst").appendChild(node1)
document.getElementById("blue").style.color = "blue"
//----------------------------------------------------------------------------------------//
//opdracht 2e
let sell = 0
for (let k = 0; k < inventory2.length; k++) {
    let stock = inventory2[k].originalStock - inventory2[k].sold;
    sell = sell + stock
}
//----------------------------------------------------------------------------------------//
//opdracht 2d
const node2 = document.createElement("P");
node2.setAttribute("id", "red")
const textNode2 = document.createTextNode("Nog te verkopen: " + sell);
node2.appendChild(textNode2);
console.log(textNode2)
document.getElementById("tekst").appendChild(node2)
document.getElementById("red").style.color = "red"

