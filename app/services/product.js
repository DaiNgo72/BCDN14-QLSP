function createProduct(result) {
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