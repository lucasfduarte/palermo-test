import React from "react";
import { CheckoutButton } from "../../components/CheckoutButton/CheckoutButton";
import { Product } from "./interfaces";
import { BottomRow, ProductCategoryLabel, ProductDescriptionLabel, ProductImage, ProductItemContainer, ProductPriceLabel, ProductTitleLabel } from "./styled";

interface iProps {
  product: Product
  shouldHideDescription?: boolean
}

export const ProductItem = ({ 
  product,
  shouldHideDescription,
}: iProps) => {

  const { 
    category,
    title,
    price,
    image,
    description
  } = product

  return (
    <ProductItemContainer>
      <ProductImage source={{ 
        uri: image,
       }} 
        resizeMode={'contain'}
      />
      <ProductCategoryLabel>
        {category}
      </ProductCategoryLabel>
      <ProductTitleLabel ellipsizeMode='tail' numberOfLines={2}>
        {title}
      </ProductTitleLabel>
      {!shouldHideDescription && (
        <ProductDescriptionLabel ellipsizeMode='tail' numberOfLines={4}>
          {description}
        </ProductDescriptionLabel>
      )}
      <BottomRow>
        <ProductPriceLabel>
          {`$${price}`}
        </ProductPriceLabel>

        <CheckoutButton /> 
      </BottomRow>
    </ProductItemContainer>
  )
}
