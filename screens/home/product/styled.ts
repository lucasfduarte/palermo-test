import styled from "styled-components/native";
import { Image, View, Text, TouchableOpacity, ScrollView } from "react-native";

export const BottomRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`

export const ProductItemContainer = styled(View)`
  width: 158px;
  height: 222px;
  margin-right: 10px;
`

export const ProductImage = styled(Image)`
  height: 140px;
  width: 155px;
  border-radius: 16px;
  margin-bottom: 8px;
`

export const ProductCategoryLabel = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  display: flex;
  align-items: center;
  color: #8775FE;
  margin-bottom: 2px;
`

export const ProductTitleLabel = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 2px;
`

export const ProductDescriptionLabel = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: justify;
  color: #85868A;
  margin-bottom: 2px;
`

export const ProductPriceLabel = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #8775FE
`

export const SectionLabel = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin: 20px 0px;
`

export const NewProductsListContainer = styled(ScrollView)`
  height: 300px;
  display: flex;
`

export const ProductsListContainer = styled(ScrollView)`
  width: 100%;
  display: flex;
`
