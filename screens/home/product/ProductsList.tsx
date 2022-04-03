import React from "react";
import { FlatList, View } from "react-native";
import { Divider } from "../../components/Divider/Divider";
import { Product } from "./interfaces";
import { ProductItem } from "./ProductItem";
import { SectionLabel } from "./styled";

interface iProps {
  products: Product[]
}

export const ProductsList = ({
  products,
}: iProps) => {
  return (
    <View>
      <SectionLabel>
        Listagem
      </SectionLabel>
      <FlatList
        key={'products'}
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            product={item as unknown as Product} 
            shouldHideDescription={true} 
          />
        )}
        keyExtractor={(item, index) => 
          item.id.toString() || index.toString()
        }
        numColumns={2}
        contentContainerStyle={{ 
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}
        columnWrapperStyle={{
          flexShrink: 1,
          flex: 1,
          justifyContent: 'space-around',
        }}
      />
    </View>
  )
}
