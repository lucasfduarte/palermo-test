const BASE_URL = 'https://fakestoreapi.com'
const PRODUCTS_SUFFIX = 'products'
const CATEGORIES_SUFFIX = 'categories'

export const fetchAllProducts = (limitToFirstFive = false) => {
  try {
    return fetch(`${BASE_URL}/${PRODUCTS_SUFFIX}${limitToFirstFive ? '?limit=5' : ''}`)
      .then(res => res.json())
      .then(json => json)
  } catch(err) {
    console.warn('Ocorreu um erro: ', err)
  }
}

export const fetchNewestProducts = () => {
  return fetchAllProducts(true)
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

// the api is currently unable to retrieve products by category
export const fetchProductsPerCategory = (category: string) => {
  try {
    const url = `${BASE_URL}/${PRODUCTS_SUFFIX}/${CATEGORIES_SUFFIX}/${category}`
    console.log('url', url)
    return fetch(url)
      .then(res => res.json())
      .then(json => json)
  } catch(err) {
    console.log('Ocorreu um erro: ', err)
  }
}
