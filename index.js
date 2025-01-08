// let car = {
//     name: 'kien',
//     speed: '10000000000',
// }

// console.log(car);


// let content = "hello file node.js";
// const fs = require("fs");

// fs.writeFile("demo.txt","như hoa như nguyệt, như cứt", "utf8", (err)=>{
//     console.log(err);
    
// })
// fs.readFile("demo.txt", "utf8", (err, data) => {
//     console.log(data); // In nội dung file
// });

// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000,()=>{
//     console.log('http://localhost:8000');
// });
const os = require("os");
const fs = require("fs");
const path = require("path");
const http = require("http");

// Lấy thông tin cấu hình máy tính
const systemInfo = {
    OSType: os.type(),
    Platform: os.platform(),
    RAM: os.totalmem(),
    USEDRAM: os.totalmem() - os.freemem(),
    CPU: os.cpus(),
};

// Lưu thông tin vào file
const folderPath = "D:/CODE/LTMNM";
const filePath = path.join(folderPath, "systemInfo.json");

fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
        console.error("Lỗi tạo thư mục:", err);
        return;
    }
    fs.writeFile(filePath, JSON.stringify(systemInfo, null, 2), (err) => {
        if (err) {
            console.error("Lỗi ghi tệp:", err);
            return;
        }
        console.log("Ghi tệp thành công!");
        console.log("Completed task!");
    });
});

// Tạo server hiển thị thông tin
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(systemInfo, null, 2));
});

// Server chạy trên cổng 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

