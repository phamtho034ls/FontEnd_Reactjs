const LIST_PRODUCTS_URL = "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"

export const getProducts = async () => {
    return fetch(LIST_PRODUCTS_URL).then((response) => response.json());
}