import { createContext } from "react";

export type ProductsType = {
  id: string
  name: string
  price: number
  img: string
  gender: string
  detail: string
  size: number[]
}

const Products: ProductsType[] = [
  {
    id: 'product-1',
    name: 'Nike Court Legacy Next Nature',
    price: 2100,
    img: '/img/product/product-1.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'Court Legacy เป็นคู่เก่งเหนือกาลเวลาที่มาในลุคสะอาดตา พร้อมยกย่องประวัติศาสตร์ที่หยั่งรากอยู่ในวัฒนธรรมเทนนิส ส่วนบนจากหนังสังเคราะห์แบบมีเท็กซ์เจอร์ การยึดเกาะที่ทนทาน และสีคลาสสิกเสิร์ฟสไตล์ระดับแชมป์',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
  {
    id: 'product-2',
    name: 'Nike Air Max SC',
    price: 2700,
    img: '/img/product/product-2.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'Nike Air Max SC คือคู่ปิดท้ายสุดเพอร์เฟ็กต์ไม่ว่าจะเป็นชุดไหน ด้วยลวดลายเรียบง่ายลำลอง ลุครองเท้าวิ่งลู่แบบดั้งเดิม และระบบลดแรงกระแทก Air ที่มองเห็นได้ การผสมผสานวัสดุที่หลากหลายเพิ่มความมีมิติและเสริมสร้างรองเท้าคู่มั่นคงและน้ำหนักเบาเพื่อการสวมใส่ในทุกๆ วัน',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
  {
    id: 'product-3',
    name: 'Nike Court Legacy Canvas',
    price: 1900,
    img: '/img/product/product-3.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'Nike Court Legacy Canvas ร่วมยกย่องตำนานที่ฝังรากในวัฒนธรรมเทนนิส โดยนำเสนอรุ่นคลาสสิกในดีไซน์โมเดิร์นเข้ากับสไตล์สตรีท ผลิตจากผ้าใบทนทานและโดดเด่นด้วยการเย็บระดับตำนานและดีไซน์ Swoosh สไตล์เรโทร เป็นการผสมผสานกีฬาและแฟชั่นอย่างลงตัว',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
  {
    id: 'product-4',
    name: 'Nike Waffle Debut',
    price: 2700,
    img: '/img/product/product-4.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'รุ่นเรโทรปรับให้ดูโมเดิร์นใน Nike Waffle Debut มาพร้อมหนังนุ่มและผ้าถักโปร่งที่ปลุกกลิ่นอายแบบมหาวิทยาลัย ซึ่งชวนให้นึกถึงวันวาน ในขณะเดียวกันพื้นรองเท้าชั้นกลางทรงลิ่มที่ผ่านการปรับให้โมเดิร์น จะช่วยให้รู้สึกนุ่มสบายเป็นพิเศษ ตบท้ายด้วยความคลาสสิกด้านล่างที่เรารักษาไว้ อย่างพื้นรองเท้าชั้นนอกลายวาฟเฟิลที่ไว้ใจได้และพิสูจน์แล้วว่าดีจริง ซึ่งเพิ่มการยึดเกาะ ความทนทาน และสไตล์ในตำนาน',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
  {
    id: 'product-5',
    name: 'Nike E-Series AD',
    price: 2700,
    img: '/img/product/product-5.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'ความสบายสำหรับทุกวันมาในลุคโมเดิร์น รุ่น E-Series AD ดีไซน์ขึ้นโดยคํานึงถึงความสะดวกในการสวม ซึ่งจะทำให้คุณอยากคว้ามาใส่ในทุกๆ วัน ตาข่ายระบายอากาศและโฟมที่ช่วยลดแรงกระแทกสร้างความสมดุลระหว่างความสบายและการรองรับอย่างลงตัว ตั้งแต่ก้าวแรกไปจนถึงทุกก้าวตลอดวัน',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
  {
    id: 'product-6',
    name: 'Nike Waffle Debut SE',
    price: 2700,
    img: '/img/product/product-6.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'เติมความโมเดิร์นให้รองเท้าเรโทรกับสนีกเกอร์คู่เพรียวสวยที่ได้แรงบันดาลใจจาก Nike Daybreak พร้อมเสริมความสูงด้วยพื้นรองเท้าชั้นกลางทรงลิ่มแบบปรับปรุงใหม่ นอกจากนี้ ด้วยพื้นรองเท้าชั้นนอกลายวาฟเฟิล ซึ่งมีทั้งสไตล์ ความสบาย และความไอคอนิก ทำให้รองเท้าคู่นี้จะเป็นอีกหนึ่งไอเท็มใส่เวียนในเซ็ตประจำวันของคุณ',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
  {
    id: 'product-7',
    name: 'Nike Oneonta Next Nature',
    price: 2400,
    img: '/img/product/product-7.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'รองเท้าแซนดัลทนทานน้ำหนักเบาคู่นี้พร้อมทำให้คุณสนุกกับการผจญภัยตั้งแต่เส้นทางเทรล ข้ามผ่านแม่น้ำและต้นไม้ ด้วยดอกยางอันสมบุกสมบัน ชื่อ Oneonta กล่าวถึงน้ำตกขนาดใหญ่ที่ตั้งอยู่ใกล้แม่น้ำ Colombia River ในรัฐโอเรกอน (รัฐบ้านเกิดของ Nike) คาดสายรัดแล้วใช้เชือกยางยืดกับเชือกดึงที่ส้นปรับความกระชับตามต้องการได้อย่างรวดเร็ว เสร็จแล้วก็พร้อมออกลุยได้เลย',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
  {
    id: 'product-8',
    name: 'Nike SB Force 58',
    price: 2700,
    img: '/img/product/product-8.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'Force 58 คือนวัตกรรมล่าสุดและยอดเยี่ยมที่สุดแห่งวงการสตรีท โดยให้ความทนทานแบบพื้นรองเท้าคัพโซลและมีความยืดหยุ่นแบบรองเท้าวัลคาไนซ์ นอกจากนี้ยังผลิตจากผ้าใบ หนังกลับ และตกแต่งด้วยรูระบายอากาศที่ปลายเท้าเพื่อทำให้ทั้งลุคมีการผสาน DNA ของสไตล์บาสเก็ตบอลดั้งเดิมเข้าไปด้วย',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
  {
    id: 'product-9',
    name: 'Jordan Hex Mule',
    price: 1679,
    img: '/img/product/product-9.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'หารองเท้าเปิดส้นสไตล์สปอร์ต์หนักๆ อยู่หรือเปล่า Jordan Hex Mule ใช้ดีไซน์ล้ำอนาคตแบบเดียวกับที่เคยใช้แล้วโด่งดังในรองเท้าแตะ Hex เพื่อเป็นออปชันปิดปลายเท้าที่เหมาะสำหรับช่วงเปลี่ยนผ่านฤดูกาล',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
  {
    id: 'product-10',
    name: 'Nike City Rep TR',
    price: 2100,
    img: '/img/product/product-10.webp',
    gender: 'รองเท้าผู้ชาย',
    detail: 'Nike City Rep TR เป็นรองเท้าอเนกประสงค์ที่เสริมความทนทานและความยืดหยุ่นให้กับไลฟ์สไตล์ในเมืองที่ไม่หยุดนิ่ง ดอกยางให้การยึดเกาะบนพื้นผิวหลายประเภท ขณะที่ระบบลดแรงกระแทกจากโฟมช่วยให้เท้ารู้สึกสบายเสมอตั้งแต่การออกกำลังกายกลางแจ้งจนถึงการทำกิจกรรมอื่นตลอดวัน',
    size: [
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
    ]
  },
]

export const ProductContext = createContext(Products);