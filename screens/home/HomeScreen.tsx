import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableHighlight, View } from "react-native";
import { fetchAllCategories, fetchAllProducts, fetchNewestProducts, fetchProductsPerCategory } from "../../api/requests";
import { Divider } from "../components/Divider/Divider";
import { Container, Headline, Icon, TopRow } from "../styled";
import { GoToCart } from "./cart/GoToCart";
import { CategoriesSection } from "./CategoriesSection";
import { DEFAULT_CATEGORY } from "./constants";
import { Product } from "./product/interfaces";
import { NewProductsList } from "./product/NewProductsList";
import { ProductsList } from "./product/ProductsList";

interface iProps {
  navigation: NativeStackNavigationProp<any>
}

const HomeScreen = ({ navigation }: iProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(DEFAULT_CATEGORY)
  const [newestProducts, setNewestProducts] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [displayProducts, setDisplayProducts] = useState<Product[]>(products)

  const shouldRenderNewestList = 
    selectedCategory === DEFAULT_CATEGORY

  const goToCartScreen = () => {
    navigation.navigate('Cart')
  }

  //separate this from visual rendering
  const getNewestProducts = async () => {
    const productsFromApi = await fetchNewestProducts()
    if (productsFromApi && productsFromApi.length) setNewestProducts(productsFromApi)
  }
  const getProducts = async () => {
    const productsFromApi = await fetchAllProducts()
    if (productsFromApi && productsFromApi.length) setProducts(productsFromApi)
  }
  const getCategories = async () => {
    const categoriesFromApi = await fetchAllCategories()
    if (categoriesFromApi && categoriesFromApi.length) setCategories(categoriesFromApi)
  }

  useEffect(() => {
    getNewestProducts()
    getCategories()
    getProducts()
  }, [])

  useEffect(() => {
    if (selectedCategory !== DEFAULT_CATEGORY) {
      const productsFromProps = products
      const filteredProducts = productsFromProps.filter(
        (product) => product.category === selectedCategory)
      setDisplayProducts(filteredProducts)
    } else {
      setDisplayProducts(products)
    }
  }, [selectedCategory])

  return (
    <Container>
      <TopRow>
        <Headline>
          Produtos
        </Headline>
        <TouchableHighlight onPress={() => goToCartScreen()}>
          <Icon
            source={require('../../assets/icons/bag_icon.png')}
          />
        </TouchableHighlight>
      </TopRow>
      <CategoriesSection 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelected={setSelectedCategory} 
      />
      <FlatList
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={
          shouldRenderNewestList ? (
            () => (
              <>
                <NewProductsList products={newestProducts} />
                <Divider />
              </>
            )
          ) : (
            <View />
          )
        }
        ListFooterComponent={
          () => (
            <ProductsList products={displayProducts} filterCategory={selectedCategory} />
          )
        }
      />

      <GoToCart onPress={() => null} />
    </Container>
  )
}

export default HomeScreen
