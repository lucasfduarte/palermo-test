import React from "react";
import { FlatList } from "react-native";
import { Product } from "../../home/product/interfaces";
import { CartListItem } from "./CartListItem";

interface iProps {
  cart: Product[]
}

export const CartList = ({ cart }: iProps) => {
  return (
    <FlatList 
      data={cart}
      renderItem={({item, index}) => 
        <CartListItem 
          indexAtCart={index} 
          product={item as unknown as Product} 
        />
      }
      keyExtractor={(item, index) => `${index}-${item.id}`}
    />
  )
}
