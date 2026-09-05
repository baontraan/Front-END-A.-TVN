const API = "https://66f8af6c2a683ce9730ff32f.mockapi.io/api/products";

let currentEditId = null;

const listProduct = document.getElementById("list-product");

const loading = document.querySelector(".loading");

const inputName = document.getElementById("name");
const inputImage = document.getElementById("image");
const inputCategory = document.getElementById("category");
const inputPrice = document.getElementById("price");

const btnAdd = document.getElementById("btn-add");

const fetchDataProduct = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 1. Hiển thị danh sách sản phẩm

const displayAllProduct = async () => {
  try {
    const data = await fetchDataProduct(API);

    listProduct.innerHTML = data
      .map((item) => {
        const { id, name, image, category, price } = item;
        return `
            <div class="product_card">
          <div class="thumb">
            <img
              src="${image}"
              alt=""
            />
          </div>
          <div class="body">
            <h3 class="title">${name}</h3>
            <p class="category">${category}</p>
            <p class="price">${price}$</p>

            <div class="btn-controll">
              <button onClick="handleUpdateProduct(${id})"  class="btn-cta edit">Edit</button>
              <button onClick="handleDeleteProduct(${id})" class="btn-cta delete">Delete</button>
            </div>
          </div>
        </div>
            `;
      })
      .join("");
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
  }
};

displayAllProduct();

// 2. Thêm mới sản phẩm

const handleAddNewProduct = async () => {
  const inpName = inputName.value;
  const inpImage = inputImage.value;
  const inpCategory = inputCategory.value;
  const inpPrice = inputPrice.value;

  if (
    inpName === "" ||
    inpImage === "" ||
    inpCategory === "" ||
    inpPrice === ""
  ) {
    alert("Fields cannot be empty");
    throw new Error("Fields cannot be empty");
  }

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inpName,
        image: inpImage,
        category: inpCategory,
        price: Number(inpPrice),
      }),
    });

    if (!res.ok) {
      throw new Error(`Error when fetching data, code: ${res.status}`);
    }

    const data = await res.json();

    alert("Added new product Successfully!");

    inputName.value = "";
    inputImage.value = "";
    inputCategory.value = "";
    inputPrice.value = "";

    await displayAllProduct();
  } catch (error) {
    alert("Add new product Unsuccessfully!");
    console.error(`Error: ${error.message}`);
  }

  // console.log(inpName, inpImage, inpCategory, inpPrice);
};

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentEditId) {
    updateProduct(currentEditId);
  } else {
    handleAddNewProduct();
  }
});

// 3. Cập nhật sản phẩm

const handleUpdateProduct = async (id) => {
  try {
    const data = await fetchDataProduct(`${API}/${id}`);

    if (!data) return;

    const { name, image, category, price } = data;

    inputName.value = name;
    inputImage.value = image;
    inputCategory.value = category;
    inputPrice.value = price;

    btnAdd.textContent = "Update Product";

    currentEditId = id;
  } catch (error) {
    console.error("Error when get product info " + error);
  }
};

const updateProduct = async (id) => {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputName.value,
        image: inputImage.value,
        category: inputCategory.value,
        price: inputPrice.value,
      }),
    });

    if (!res.ok) {
      throw new Error(`Error when updating data, code: ${res.status}`);
    }

    alert("Updated product Successfully!");

    btnAdd.textContent = "Add Product";
    currentEditId = null;

    inputName.value = "";
    inputImage.value = "";
    inputCategory.value = "";
    inputPrice.value = "";

    await displayAllProduct();
  } catch (error) {
    alert("Update product Unsuccessfully!");
    console.error(error);
  }
};

// 4. Xóa sản phẩm khỏi danh sách

const handleDeleteProduct = async (id) => {
  try {
    const res = await fetch(
      `https://66f8af6c2a683ce9730ff32f.mockapi.io/api/products/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Error when deleting data, code: ${res.status}`);
    }

    alert(`Delete product with ID: ${id} Successfully!`);
    await displayAllProduct();
  } catch (error) {
    alert(`Delete product with ID: ${id} Unsuccessfully!`);
    console.error();
  }
};
