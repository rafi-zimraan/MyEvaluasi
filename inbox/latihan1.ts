
// // NO 1.
// for (let y = 0; y <= 10; y++) {
//     for(let x = 0; x <= 10; x++){
//         if( x <= y) {
//             document.write(" * ")
//         } else {
//             document.write(" _ ")
//         }
//     }
//     document.write("</br>")
// }

// document.write("</br>")

// // NO 2
// for (let i = 0; i < 10; i++) {
//     for(let o = 0; o < 10; o++) {
//         if ( i <= o -1 || i + o <= 8) {
//             document.write(" _ ")
//         }else {
//             document.write(" * ")
//         }
//     }
//     document.write("</br>")
// }


// document.write("</br>")

// // NO 3 
// for (let n = 0; n < 10; n++) {
//     for(let m = 0; m < 10; m++) {
//         if ( m == n || n + m <= 10 ) {
//             document.write(" _ ")   
//         } else {
//             document.write(" * ")
//         }
//     }
//     document.write("</br>")
// }


// NO 7.(SALAH)
let buah : string[];
buah =[' Banana', 'Orange', 'Apple','Manggo' ];
buah.join();
console.log(buah);

// NO 8.
let hewan : any = [];
hewan =['lion','elephant','squirrel','eagle','zebra','tiger']
hewan.splice(2,3)
console.log("No 8.",hewan );


// NO 6.
let mobile :string[];
mobile = ['A FAqih','David','El Ghifari','Fajar','Faqih'];
let backend :string[];
backend =['Arga','ramdan','luqman','Andaru','Aldimas'];

let hasil =[mobile.concat(backend)];
console.log("No 6",hasil);

// NO 5
let santri : string[];
santri =['YUsuf','Fatih','El Ghifari','Faqih','Ramdhan','David','Juhadi','A Faqih','Hilmi','Rafi'];
santri.sort()
console.log("No 5",santri);

// No 4
let animals : string[];
animals = ['Lion','Elephant','Squirel','Eagle','Zebra','Tiger'];
animals.pop();
animals.shift();
console.log("No 4",animals);
