const PRODUCT_API = "https://dummyjson.com/products?limit=10&skip=20";

const listProduct = document.getElementById("list-product");

// Fecth Data Product

const fecthData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayProduct = async () => {
  const productData = await fecthData(PRODUCT_API);

  listProduct.innerHTML = productData.products.map((item) => {
    const {
      id,
      thumbnail,
      title,
      category,
      description,
      price,
      stock,
      rating,
    } = item;

    return `
    <div class="product-card">
    <img
        style="cursor: pointer"
        onClick = "handleDetail(${id})"
        src="${thumbnail}"
        alt="${title}"
        class="product-image"
    >

    <div class="product-info">
        <span class="category">${category}</span>

        <h2>${title}</h2>

        <p class="description">
            ${description}
        </p>

        <div class="product-meta ">
            <span class="price">$${price}</span>
            <span class="rating">⭐ ${rating}</span>
        </div>

        <p><strong>Stock:</strong>${stock}</p>
        <p><strong>Status:</strong> In Stock</p>

        <button >Mua ngay</button>
    </div>
</div>
        `;
  });
};

displayProduct();

const productModal = document.getElementById("product-modal");
// const close = document.querySelector(".btn-close");

const handleDetail = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  productModal.style.display = "flex";

  const {
    title,
    description,
    category,
    price,
    rating,
    stock,
    thumbnail,
    images,
    brand = "brand",
  } = data;

  productModal.innerHTML = `
      <div class="modal-overlay"></div>

      <div class="modal-content">
        <button class="btn-close">&times;</button>

        <!-- left -->

        <div class="modal-gallery">
          <h2>Quick View Product</h2>

          <div class="thumbnail">
            <img
              id="main-image"
              src="${thumbnail}"
              alt=""
            />
          </div>

          <div class="mini-thumb" id="mini-thumb">
            <img src="${images}" alt="" />
            <img src="${images}" alt="" />
            <img src="${images}" alt="" />
            <img src="${images}" alt="" />
          </div>
        </div>

        <!-- RIGHT -->
        <div class="modal-info">
          <span class="modal-category" id="modal-category">${category}</span>

          <h3 class="product-name" id="modal-title">${title}</h3>

          <p class="desc" id="modal-description">${description}</p>

          <div class="product-feedback">
            <span class="price" id="modal-price">$${price}</span>

            <span class="rating" id="modal-rating">Rating: ${rating}</span>
          </div>

          <p>
            <strong>Brand:</strong>
            <span id="modal-brand">${brand}</span>
          </p>

          <p>
            <strong>Stock:</strong>
            <span id="modal-stock">${stock}</span>
          </p>

          <p>
            <strong>Status:</strong>
            <span id="modal-status">In Stock</span>
          </p>

          <button class="btn-buy">Mua ngay</button>
        </div>
      </div>
  `;

  const close = document.querySelector(".btn-close");
  close.addEventListener("click", () => {
    productModal.style.display = "none";
  });
};
