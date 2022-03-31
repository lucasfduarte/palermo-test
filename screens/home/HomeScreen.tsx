import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { TouchableHighlight } from "react-native";
import { fetchAllCategories, fetchAllProducts } from "../../api/requests";
import { Container, Headline, Icon, TopRow } from "../styled";

interface iProps {
  navigation: NativeStackNavigationProp<any>
}

const HomeScreen = ({ navigation }: iProps) => {
  const [products, setProducts] = useState()
  const [categories, setCategories] = useState()

  const goToCartScreen = () => {
    navigation.navigate('Cart')
  }

  //separate this from visual rendering
  const getProducts = async () => {
    const productsFromApi = await fetchAllProducts()
    if (productsFromApi) setProducts(productsFromApi)
  }
  const getCategories = async () => {
    const categoriesFromApi = await fetchAllCategories()
    if (categoriesFromApi) setCategories(categoriesFromApi)
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

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
    </Container>
  )
}

export default HomeScreen
