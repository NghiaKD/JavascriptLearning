/*
    Function in JS 
    1. Hàm là gì ? 
        -  1 khối mã 
        -   làm 1 việc cụ thể 
    2. Loại hàm 
        - built-in 
        - Tự định nghĩa 
    3. Tính chất 
        - Không thực thi khi định nghĩa 
        - Sẽ thực thi khi được gọi 
        - Có thể nhận được tham số 
        - Có thể trả về giá trị 
    4. Tạo hàm đầu tiên 

*/

function showDialog(message) {
    // alert(message);
}
showDialog('Hohoooooo');

/*
    1. Tham số ? 
        - định nghĩa: là 1 giá trị có thể truyền vào (parameter)
        - kiểu dữ liệu
        - private
        - 1 tham số 
        - nhiều tham số
    2.truyền tham số
    3. argument ? 
        - đối tượng argument 
        - vong for of 
*/

// function writeLog(message, message2) {
//     console.log(message);

//     if (message2) {
//         console.log(message2);
//     }
// }

function writeLog() {
    var myString = " ";
    for (var param of arguments) {
        myString += ` ${param} -`
    }
    console.log(myString)
}
writeLog(123, 'test');