import { getListProduct, deleteProduct } from "../services/product.js";
import { BASE_URL } from "./constant.js"

document.getElementById('form-product').addEventListener(
    "submit",
    function (event) {
        // Ngăn chặn sự kiện mặc định của form
        // reload trang web
        event.preventDefault();

        console.log("submit", event.target);
        const formEle = event.target;

        let data = new FormData(formEle);

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
        }).then(function (r) {
            if (r.ok) {

                // Query với attribute của html nên dùng dấu `[ ]` 
                const closeEle = document.querySelector("[data-dismiss='modal']")

                // Giải lập sự kiện click vào close button
                closeEle.click();

                // reset form
                formEle.reset();

                // Alert thông báo thành công
                alert("Thêm sản phẩm thành công.");


                // re-render list Product
                renderListProduct();
            } else {
                // Alert thông báo thất bại
                alert("Thêm sản phẩm thất bại.")
            }
        })
    }
)

//#region render list sản phẩm

function renderListProduct() {
    getListProduct()
        .then(function (r) {

            // let contentHTML = ''

            // r.forEach(function (product) {
            //     contentHTML += `
            //     <tr>
            //       <td>${product.id}</td>
            //       <td>${product.name}</td>
            //       <td>${product.price} vnd</td>
            //       <td>
            //         <img width='400' src="${product.image}" alt="" >
            //       </td>
            //       <td>${product.type}</td>
            //       <td>
            //         <button class='btn btn-warning'>Edit</button>
            //         <button class='btn btn-danger'>Delete</button>
            //       </td>
            //     </tr>
            //     `
            // })
            // document.getElementById('tblDanhSachSP').innerHTML = contentHTML;


            let nContent = r.map(function (product) {
                return `
                <tr>
                  <td>${product.id}</td>
                  <td>${product.name}</td>
                  <td>${product.price} vnd</td>
                  <td>
                    <img width='100' src="${product.image}" alt="" >
                  </td>
                  <td>${product.type}</td>
                  <td>
                    <button class='btn btn-warning'>Edit</button>
                    <button onclick="handleDelete('${product.id}')" class='btn btn-danger'>Delete</button>
                  </td>
                </tr>
                `
            })
            // join: convert mảng -> string
            // [1,2,3,4] => `1  2  3  4`
            // [1,2,3,4].join("  ")


            // split để chuyển string -> array
            // "1 2 3 4".split(' ') => [1,2,3,4]

            // document.getElementById('tblDanhSachSP').innerHTML = nContent.join("");
            document.getElementById('tblDanhSachSP').innerHTML = nContent;

            // document.querySelectorAll('.btn-danger').forEach(function (btn) {
            //     btn.addEventListener('click', handleDelete);
            // })
        })
        .catch(function (error) {
            console.log("[ERROR] :::", error);
        })
}

renderListProduct();

//#endregion

// gắn sự kiện click cho button delete

function handleDelete(id) {
    console.log(id);

    deleteProduct(id)
        .then(function (r) {
            alert(`Xóa sản phẩm id=${id} thành công.`);

            renderListProduct();
        }).catch(function (error) {
            console.log(error);
        })
}

window.handleDelete = handleDelete;



