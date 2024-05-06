import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const userProfile = [
  {
    id: 28,
    photo: personsImgs.person_one,
    name: "Muhammad Aiman",
    firstname: "Muhammad",
    lastname: "Aiman",

    email: "aiman123@gmail.com",
  },
];

export const SidebarData = [
  {
    id: 1,
    title: "Pendaftaran",
    path: "/Pendaftaran",
    icon: iconsImgs.home,
    cName: "nav-text",
  },
  {
    id: 2,
    title: "Maklumat",
    path: "/Maklumat",
    icon: iconsImgs.bills,
    cName: "nav-text",
  },
  {
    id: 3,
    title: "E-Kehakiman",
    path: "/E-Kehakiman",
    icon: iconsImgs.wealth,
    cName: "nav-text",
  },
  {
    id: 4,
    title: "Maklum Balas",
    path: "/Maklum_Balas",
    icon: iconsImgs.user,
    cName: "nav-text",
  },
  {
    id: 5,
    title: "Penetapan",
    path: "/penetapan",
    icon: iconsImgs.budget,
    cName: "nav-text",
  },
];

export const navigationLinks = [
  { id: 1, title: "Pendaftaran", path: "/Pendaftaran", image: iconsImgs.home },
  { id: 2, title: "Maklumat", path: "/Maklumat", image: iconsImgs.budget },
  { id: 3, title: "Customers", path: "/Customers", image: iconsImgs.plane },
];

export const data = [
  { id: 1, date: "2024-04-15", totalModules: 10 },
  { id: 2, date: "2024-04-16", totalModules: 7 },
  { id: 3, date: "2024-04-17", totalModules: 5 },
  { id: 4, date: "2024-06-01", totalModules: 4 },
  { id: 5, date: "2024-10-13", totalModules: 1 },
];

export const pieCharts = [
  { name: "Facebook", value: 20000 },
  { name: "Instagram", value: 120000 },
  { name: "Twitter", value: 15000 },
  { name: "Telegram", value: 10000 },
];

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const linechart_data = [
  {
    month: "January",
    savings: 5000,
    loss: 500,
  },
  {
    month: "February",
    savings: 8000,
    loss: 300,
  },
  {
    month: "March",
    savings: 3000,
    loss: 800,
  },
  {
    month: "April",
    savings: 6000,
    loss: 100,
  },
  {
    month: "May",
    savings: 4000,
    loss: 700,
  },
  {
    month: "June",
    savings: 9000,
    loss: 1200,
  },
];

export const ProductData = [
  {
    name: "2 SET KERTAS PENTAKSIRAN SUMATIF BAHASA INGGERIS TAHUN 4 PENGGAL 1/2024",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 15,
    photoName: "testpaper(books)/TP2556.jpg",
    soldOut: false,
    discount: true,
    discountNum: 0.39,
  },
  {
    name: "2 SET KERTAS PENTAKSIRAN SUMATIF BAHASA INGGERIS TAHUN 5 PENGGAL 1/2024",
    ingredients: "Tomato and mozarella",
    price: 15,
    photoName: "testpaper(books)/TP2557.jpg",
    soldOut: false,
    discount: false,
    discountNum: 0.0,
  },
  {
    name: "2 SET KERTAS PENTAKSIRAN SUMATIF BAHASA INGGERIS TAHUN 6 PENGGAL 1/2024",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 15,
    photoName: "testpaper(books)/TP2558.jpg",
    soldOut: false,
    discount: true,
    discountNum: 0.1,
  },
  {
    name: "2 SET KERTAS PENTAKSIRAN SUMATIF BAHASA INGGERIS TAHUN 3 PENGGAL 1/2024",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 15,
    photoName: "testpaper(books)/TP2579_01.jpg",
    soldOut: false,
    discount: true,
    discountNum: 0.1,
  },
  {
    name: "UJIAN DIAGNOSTIK BAHASA INGGERIS TAHUN 6 2024-2025",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 10,
    photoName: "testpaper(books)/Tp2602.jpg",
    soldOut: true,
    discount: false,
    discountNum: 0.0,
  },
  {
    name: "UJIAN DIAGNOSTIK BAHASA INGGERIS TAHUN 5 2024-2025",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 10,
    photoName: "testpaper(books)/TP2609.jpg",
    soldOut: false,
    discount: false,
    discountNum: 0.0,
  },
];
