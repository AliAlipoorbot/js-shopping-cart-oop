class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }

  showProducts() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.toShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, qty);
    });

    this.calculateTotalPrice();
  }

  createCard(data, qty) {
    const cardEle = document.createElement("div");

    const imgEle = this.productImage(data);
    const infoEle = this.productInfo(data);

    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;

    if (this.constructor.name === "Cart") {
      const controlEle = this.productControl(data, qty);
      cardEle.innerHTML += controlEle;
    }

    this.parent.appendChild(cardEle);
  }

  productImage(data) {
    const { image, alt } = data;
    const imgJsx = `<img src=${image} alt=${alt} />`;

    return imgJsx;
  }
}

export default Display;
