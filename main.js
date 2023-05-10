// alert('Hi Javascript basic!')

var fullName = 'Khuat Dai Nghia';
var age = 20;

alert('xin chao ' + fullName)
alert('ban ' + age + ' tuoi')

// mot so ham built-in 
/*
1. alert
2. console 
3. confirm 
4. promt
5. set timeout
6. set interval
*/
console.log(age)

confirm('xac nhan ban du tuoi !');
prompt('nhap so dien thoai cua ban');
setTimeout(function () {
    alert('5s roi day')
}, 5000)
//settimeout chay 1 lan 
//setinterval chay nhieu lan
setInterval(function () {
    console.log('day la log ' + Math.random());
}, 2000)

/*
Giới thiệu về toán tử trong JS

1. toán tử số học - arthimetic      
2. toán tử gán - assignment     var fullName = 'Khuat Dai Nghia 2'
3. toán tử so sánh - comparison   
var a = 1; 
var b = 2; 
if ( a>b){
    alert('right'); 
}
4. toán tử logic - logical 
*/
//toán tử chuỗi 
var firstName = 'Dai';
var secondName = 'Nghia';
console.log(firstName + ' ' + secondName);

var a = 4
var b = 5
if (a != b) {
    alert('a khong bang b')
}
else {
    alert('a = b')
}

var boolean = a > b
console.log('a > b :' + boolean)
console.log(boolean)
/*
    trong js có các gtri false: 
    0 
    false 
    ' ' hoặc " "
    undefined 
    NaN 
    null 
*/

/*
    *Toán tử logic 
    * 1. && - and  
    * 2. || - or 
    * 3. ! - not 
*/

/*
    kiểu dữ liệu phức tạp 
    1. Function
        var myFunction = function(){
            alert('abc); 
        }

        myFunction();
        --> phải gọi đến function thì mới chạy alert
    2. Object types 
        var myObject = {
            name: 'khuat dai nghia', 
            age: 18, 
            address: 'Ha Noi'
            myFunction: function(){

            } 
        };
    var myArray = [
        'Javascript'. 
        'PHP', 
        'Ruby'
    ];
    console.log(myArray)

    var a = 1; 
    console.log(typeof a); 
    --> cách ktra dạng 
*/

/* TOAN TU 2 
    === là so sánh cả datatype
    == chỉ quan tâm value của 2 biến
    != và !== tương tự

*/


