// Operations
let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2); //Power
// console.log(2 + 2); //Cube
// console.log(2 /  2); //Division
// console.log(2 % 2); //Modulas
let str1 = "Hitesh";
let str2 = " Chodhary";
let str3 = str1 + str2;
console.log(str3);

//Let Us See What is the confusion Is here // Why Memes On JS Are Made
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //agar First String Hai Toh sabhi Ko String Me treat Kiya Jayenga4
console.log(1 + 2 + "2"); //aagr String last Me hai toh pehle  conversion hojaynga

//So Yeh Sab Actually Hotah kaise hotah hai-  tc39 (Ecma Scrpt Guidelines)
//  7.1.1 ToPrimitive ( input [ , preferredType I )
//Yahhi ki convert Krna hai kisiko bhi preferred Type me

//Tricky Conversions //Readibility Nhi Hia So Dont Use
console.log(+true);
console.log(+"");
// console.log(true-); Error Denga
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
//prefix And PostFix Operators Apko Padnhi Chaiye
//prefix me values pehle increment hojati hai or
//  Postfix me usage k Baad Me Increment Hojati hai
//search prefix postfix mdnf
