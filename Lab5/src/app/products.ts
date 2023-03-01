export interface Product {
  image: string;
  id: number;
  name: string;
  price: number;
  description: string;
  rating: string;
  link: string;
}

export const products = [
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/hb4/33208264228894/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg',
    id: 1,
    name: 'Apple iPhone 11 128Gb',
    price: 659,
    rating: 'rating: 4.5',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/?c=750000000#!/item',
    description: 'The iPhone 11 has a 6.1-inch (15 cm) IPS LCD with a resolution is 1792 × 828 pixels (1.4 megapixels) at a pixel density of 326 PPI with a maximum brightness of 625 nits'
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    id: 2,
    name: 'Apple iPhone 13 128Gb',
    price: 830,
    rating: 'rating: 5',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    description: 'The iPhone 13 features a 6.1-inch (155 mm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 PPI with a refresh rate of 60 Hz.'
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    id: 3,
    name: 'Apple iPhone 14 Pro Max 256Gb',
    price: 1543,
    rating: 'rating: 5',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    description: 'Display: 6.7 inches OLED; Camera: 48 MP (OIS, PDAF); Processor: Apple 16 Bionic (4 nm); RAM: 6GB'
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/hb2/49730556592158/oneplus-10-pro-12-gb-256-gb-chernyi-104314136-1.jpg',
    id: 4,
    name: 'OnePlus 10 Pro 12 Gb/256 Gb',
    price: 764,
    rating: 'rating: 5',
    link: 'https://kaspi.kz/shop/p/oneplus-10-pro-12-gb-256-gb-chernyi-global-version-104314136/?c=750000000#!/item',
    description: 'QHD+ 120 Hz Fluid AMOLED display incorporates stunning LTPO 2.0 technology and exacting color accuracy.'
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h57/63387998158878/oneplus-ace-pro-16-gb-512-gb-zelenyj-106955292-1.jpg',
    id: 5,
    name: 'OnePlus Ace Pro 16 Gb/256 Gb',
    price: 690,
    rating: 'rating: 5',
    link: 'https://kaspi.kz/shop/p/oneplus-ace-pro-16-gb-256-gb-zelenyi-106955292/?c=750000000#!/item',
    description: '6.7-inches 120Hz 2.5D Fluid AMOLED FHD+ display. · Qualcomm Snapdragon 8+ Gen 1 chipset, with Adreno 730 GPU. '
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h95/52369623580702/xiaomi-12-pro-12-gb-256-gb-seryj-104688742-1.jpg',
    id: 6,
    name: 'Xiaomi 12 Pro NFC 12 Gb/256 Gb',
    price: 989,
    rating: 'rating: 5',
    link: 'https://kaspi.kz/shop/p/xiaomi-12-pro-nfc-12-gb-256-gb-seryi-104688742/?c=750000000#!/item',
    description: 'Features 6.73″ display, Snapdragon 8 Gen 1 chipset, 4600 mAh battery, 256 GB storage, 12 GB RAM.'
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/h80/63387596062750/xiaomi-12s-ultra-12-gb-256-gb-cernyj-106954956-1.jpg',
    id: 7,
    name: 'Xiaomi 12S Ultra 12 Gb/256 Gb',
    price: 1190,
    rating: 'rating: 5',
    link: 'https://kaspi.kz/shop/p/xiaomi-12s-ultra-12-gb-256-gb-chernyi-106954956/?c=750000000#!/item',
    description: 'Xiaomi 12S Ultra is equipped with a 6.73-inch curved LTPO AMOLED with a 120Hz refresh rate and 240Hz touch sampling rate, support HDR10+, and high DCI-P3 coverage.'
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/ha4/51165210050590/realme-gt-2-pro-5g-12-gb-256-gb-cernyj-105089650-1.jpg',
    id: 8,
    name: 'Realme GT 2 Pro 5G 12 Gb/256 Gb',
    price: 735,
    rating: 'rating: 5',
    link: 'https://kaspi.kz/shop/p/realme-gt-2-pro-5g-12-gb-256-gb-chernyi-105089650/?c=750000000#!/item',
    description: 'The Realme GT 2 Pro relies heavily on its new Super Reality display technology with a 6.7-inch LTPO 2.0 AMOLED panel that features an adaptive refresh rate from 1 to 120 Hz, touch sampling rate up to 1000 Hz, 10-bit color, and max brightness of 1400 nits.'
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h8f/52425090269214/realme-gt-neo-3-12-gb-256-gb-sinii-105773358-1.jpg',
    id: 9,
    name: 'Realme GT Neo 3 12/256Gb',
    price: 579,
    rating: 'rating: 5',
    link: 'https://kaspi.kz/shop/p/realme-gt-neo-3-12-256gb-150w-sinii-105773358/?c=750000000#!/item',
    description: 'The realme GT NEO 3 is essentially a tribute to racing legends, with an exceptional design and faster performance. The 5nm Dimensity 8100 5G chipset packs an eight-core CPU and six-core Mali-G610 GPU for super fast performance, so that realme GT NEO 3 can blaze through all the tasks.'
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/hc9/32237037125662/bbk-ep-1200s-cernyj-100663927-1-Container.jpg',
    id: 10,
    name: 'BBK EP-1200S',
    price: 2,
    rating: 'rating: 4',
    link: 'https://kaspi.kz/shop/p/bbk-ep-1200s-chernyi-100663927/?c=750000000#!/item',
    description: ' Dimension: W580mm, L 500mm, H55mm Weight: 5.8Kg (11kg net wt).'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/