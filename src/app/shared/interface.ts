export interface ProductInfo {
  productId: number,
  productName: string,
  basePrice: number,
  lastReleaseDate: string,
  productNameDescription: string
}

export interface ProductDetailInfo {
  productDetail: string,
  productName: string,
  basePrice: number,
  productNameDescription: string,
  lastReleaseDate: string
  description: string,
  productUrl: string,
  eduLicenseDescription: string
  variantDescription: string,
  packetDescription?: string
  variants: any
  packets?: any
}
