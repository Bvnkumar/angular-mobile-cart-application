import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  imageUrl: string;
  supplier: string;
  description: string;
  specifications: ProductSpecification[];
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface CommentEntry {
  id: number;
  comment: string;
  rating: number;
}

@Injectable()
export class AppGlobals {
  cartProduts: number[] = [];
  comments: CommentEntry[] = [];
  productList: Product[] = [
    {
      name: 'Samsung Galaxy S24 Ultra',
      price: 999,
      currency: '$',
      id: 1,
      quantity: 1,
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928.jpg',
      supplier: 'Samsung Electronics Co., Ltd.',
      description: 'Samsung flagship phone with premium camera system, S Pen support, and high-end performance.',
      specifications: [
        { label: 'Display', value: '6.8-inch QHD+ AMOLED, 120Hz' },
        { label: 'Processor', value: 'Snapdragon 8 Gen 3' },
        { label: 'Battery', value: '5000 mAh with fast charging' },
        { label: 'Camera', value: '200MP main + multi-lens zoom system' }
      ]
    },
    {
      name: 'Nokia G42',
      price: 299,
      currency: '$',
      id: 2,
      quantity: 1,
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/nokia-g42.jpg',
      supplier: 'HMD Global Oy',
      description: 'Reliable mid-range Nokia smartphone focused on durability, clean software experience, and daily usage.',
      specifications: [
        { label: 'Display', value: '6.56-inch HD+ IPS, 90Hz' },
        { label: 'Processor', value: 'Snapdragon 480+ 5G' },
        { label: 'Battery', value: '5000 mAh' },
        { label: 'Camera', value: '50MP triple rear camera' }
      ]
    },
    {
      name: 'Xiaomi Redmi Note 13 Pro',
      price: 399,
      currency: '$',
      id: 3,
      quantity: 1,
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note13-pro-5g.jpg',
      supplier: 'Xiaomi Communications Co., Ltd.',
      description: 'Value-focused Xiaomi phone with strong display quality, large battery, and excellent everyday camera output.',
      specifications: [
        { label: 'Display', value: '6.67-inch AMOLED, 120Hz' },
        { label: 'Processor', value: 'Snapdragon 7s Gen 2' },
        { label: 'Battery', value: '5100 mAh, 67W turbo charging' },
        { label: 'Camera', value: '200MP main camera' }
      ]
    },
    {
      name: 'Huawei Pura 70',
      price: 799,
      currency: '$',
      id: 4,
      quantity: 1,
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-pura70.jpg',
      supplier: 'Huawei Technologies Co., Ltd.',
      description: 'Huawei premium device offering advanced camera tuning, elegant industrial design, and smooth daily performance.',
      specifications: [
        { label: 'Display', value: '6.6-inch OLED, 120Hz' },
        { label: 'Processor', value: 'Kirin series chipset' },
        { label: 'Battery', value: '4900 mAh with fast charging' },
        { label: 'Camera', value: '50MP Ultra Lighting main camera' }
      ]
    }
  ];
}
