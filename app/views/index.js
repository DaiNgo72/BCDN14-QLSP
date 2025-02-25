import { BASE_URL } from "./constant.js"

document.getElementById('form-product').addEventListener(
    "submit",
    function (event) {
        // Ngăn chặn sự kiện mặc định của form
        // reload trang web
        event.preventDefault();

        console.log("submit", event.target);

        let data = new FormData(event.target);

        /**
         * convert dữ liệu từ formData thành object
         */
        let result = Object.fromEntries(data);
        result.price = Number(result.price);

        console.log(result);
        // console.log(
        //     data.get('image'),
        //     data.get('name')
        // )

        fetch(`${BASE_URL}/product`, {
            method: "POST",
            // body: nơi để gửi dữ liệu lên server
            // convert dữ liệu trước khi gửi lên server về dạng string 

            // JSON.stringify: convert tất cả kiểu dữ liệu của js về dạng string
            body: JSON.stringify(result),

            // Bổ sung thêm thông tin dữ liệu đẩy lên là kiểu định dạng như thế nào
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    }
)