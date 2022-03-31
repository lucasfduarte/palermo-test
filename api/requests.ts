const BASE_URL = 'https://fakestoreapi.com'
const PRODUCTS_SUFFIX = 'products'
const CATEGORIES_SUFFIX = 'categories'

export const fetchAllProducts = (limitToFirstFive = true) => {
  try {
    return fetch(`${BASE_URL}/${PRODUCTS_SUFFIX}${limitToFirstFive ? '?limit=5' : ''}`)
      .then(res => res.json())
      .then(json => json)
  } catch(err) {
    console.warn('Ocorreu um erro: ', err)
  }
}

export const fetchAllCategories = () => {
  try {
    return fetch(`${BASE_URL}/${PRODUCTS_SUFFIX}/${CATEGORIES_SUFFIX}`)
      .then(res => res.json())
      .then(json => json)
  } catch(err) {
    console.warn('Ocorreu um erro: ', err)
  }
}

export const fetchProductsPerCategory = (category: string) => {
  try {
    return fetch(`${BASE_URL}/${PRODUCTS_SUFFIX}/${CATEGORIES_SUFFIX}/${category}`)
      .then(res => res.json())
      .then(json => json)
  } catch(err) {
    console.warn('Ocorreu um erro: ', err)
  }
}
