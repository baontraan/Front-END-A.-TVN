const API_CATEGORY = "https://dummyjson.com/products/category-list";
const API_PRODUCT_CATEGORY = "https://dummyjson.com/products/category";

const loading = document.querySelector(".loading");

const length = document.querySelector(".length");

const list_category = document.querySelector(".list-category");

const list_card = document.querySelector(".list-card");

const fetchData = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("Error when fetching data");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayAllCategory = async () => {
  try {
    loading.style.display = "flex";
    const data = await fetchData(API_CATEGORY);

    list_category.innerHTML = data
      .map((data) => {
        return `
                 <li data-category="${data}" class="category-item">
                    <a href="#!">${data}</a>
                </li>
            `;
      })
      .join("");
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
  }
};

displayAllCategory();

const fetchProductsByCategory = async (categroy) => {
  try {
    const data = await fetchData(`${API_PRODUCT_CATEGORY}/${categroy}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const handleDisplayProducts = async (c) => {
  try {
    loading.style.display = "flex";
    const data = await fetchProductsByCategory(c);
    console.log(data);
    console.log(data.products);

    length.textContent = data.products.length;

    list_card.innerHTML = data.products
      .map((item) => {
        const { id, title, category, price, thumbnail } = item;

        return `
        <li class="card-item">
          <div class="card-thumb">
            <a href="#!">
              <img
                src="${thumbnail}"
                alt="${title}"
              />
            </a>
          </div>
          <div class="card-body">
            <h3 class="card-name">${title}</h3>
            <p class="card-category">${category}</p>
            <p class="card-price">${price}</p>
          </div>
        </li>
        `;
      })
      .join("");
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
  }
};

list_category.addEventListener("click", async (e) => {
  const category_item = e.target.closest(".category-item");
  //   console.log(category_item);

  if (!category_item) return;

  const currentActive = list_category.querySelector(".category-item.active");
  //   console.log(currentActive);

  if (currentActive) currentActive.classList.remove("active");

  category_item.classList.add("active");

  await handleDisplayProducts(category_item.dataset.category);

  console.log(category_item.dataset.category);
});
