export interface IPizzaItem {
  id: number;
  title: string;
  desc: string;
  price: number;
  thumb: string;
}

export const pizzaData: IPizzaItem[] = [
  {
    id: 1,
    title: "Margherita",
    desc: "Sốt cà chua truyền thống, phô mai Mozzarella tươi và lá húng quế",
    price: 12.0,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgnS0KlA0Vj6J1LoAXeDQbctSSt5WxK181-FXLgnoQQ&s=10",
  },
  {
    id: 2,
    title: "Pepperoni Passion",
    desc: "Gấp đôi xúc xích bò Pepperoni cay nồng và lớp phô mai Mozzarella dày",
    price: 14.5,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kXiBQQJYmnNRf-jTg2ReHJw3Mho7Frm07UcybtXuOg&s=10",
  },
  {
    id: 3,
    title: "Hawaiian Paradise",
    desc: "Sự kết hợp ngọt mặn của thịt giăm bông nguội, dứa chín và sốt cà chua",
    price: 13.0,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5cXrJFwsRJ0pkFhe08K7qi2euZ0XTYYwcfkEW9NJMg&s=10",
  },
  {
    id: 4,
    title: "BBQ Chicken Supreme",
    desc: "Gà nướng xé sợi, hành tây đỏ, ngô ngọt trên nền sốt BBQ đậm đà",
    price: 15.0,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQ89CA9ka1UCO7Jj2yPGeCfcWBnGzae5Q-SdGV1E1_A&s=10",
  },
  {
    id: 5,
    title: "Seafood Deluxe",
    desc: "Hải sản cao cấp gồm tôm, mực, thanh cua phối cùng sốt bơ tỏi thơm ngậy",
    price: 16.5,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdI7PDuQG2U2Jk9wTgIhJ_hcRugr3opbcAWHG1r1t_6w&s=10",
  },
  {
    id: 6,
    title: "Vegetarian Garden",
    desc: "Thanh đạm với ớt chuông xanh, nấm mỡ, cà chua bi, hành tây và ô liu đen",
    price: 11.5,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gQORF59Mqsm0hZDYA-XTrGavOyQNaMW4xXtWuqSCDg&s=10",
  },
  {
    id: 7,
    title: "Four Cheese (Quattro Formaggi)",
    desc: "Bùng nổ hương vị với 4 loại phô mai: Mozzarella, Parmesan, Blue Cheese và Cheddar",
    price: 15.5,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQA_YGZljFn0omtxjTQQgigUTnwi0Z1vxYMJ0gk2viEA&s=10",
  },
  {
    id: 8,
    title: "Meat Lover's",
    desc: "Bữa tiệc thịt gồm thịt băm, xúc xích, giăm bông và thịt xông khói giòn rụm",
    price: 17.0,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY4jqabi0XT4ZJOQ5jluOowczzG1LVHlC_5TIBAA2_w&s=10",
  },
  {
    id: 9,
    title: "Spicy Beef & Chili",
    desc: "Thịt bò băm nướng phô mai kết hợp với ớt Jalapeno cay xè kích thích vị giác",
    price: 14.0,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZNcB2Vkat7qgYK8RHgB5sFOaKCgZ5f7uNbZImYA5Vg&s=10",
  },
  {
    id: 10,
    title: "Truffle Mushroom",
    desc: "Nấm hỗn hợp cao cấp hòa quyện cùng sốt kem nấm Truffle đen siêu quý phái",
    price: 18.0,
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmecdNH1nEfNYWAShB8y4iuyUYKmN6XENAsheW0OEKWw&s=10",
  },
];
