import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "«Играй c электрическим Nike»" ,
  subtitle: "Кроссовки Адапт 2.0",
  img: heroimg,
  btntext: "Изучите продукт",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Популярные продажи",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "МУЖСКИЕ Кроссовки",
      rating: "4.9",
      btn: "Купить сейчас",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "МУЖСКИЕ Кроссовки",
      rating: "4.5",
      btn: "Купить сейчас",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "МУЖСКИЕ Кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "ОСНОВНЫЕ МОМЕНТЫ",
  title: "NIKE AIR С БЕЗГРАНИЧНЫМ ВЫБОРОМ",
  text: "Наша цель – двигать мир вперед. Мы принимаем меры, создавая сообщество, защищая нашу планету и расширяя доступ к спорту..",
  btn: "Узнайте больше",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "ПРЕДЛАГАЕМЫЕ",
  title: "КРОССОВКИ NIKE AIR LANNCING SNEAKERS",
  text: "Сияние живет в кроссовках Nike Sneakers Air Lancing Shoes, баскетбольном мяче OG, который по-новому раскрывает то, что вы знаете лучше всего: прочные сшитые накладки, чистую отделку и идеальное количество блеска, чтобы вы сияли.",
  btn: "Узнайте больше",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Продажи с самым высоким рейтингом",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "Мужские кроссовки",
      rating: "5+",
      btn: "Купить сейчас",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};

const footerAPI = {
  titles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "Новости"},
      {link: "Карьера"},
      {link: "Инвесторы"},
      {link: "Предполагать"},
      {link: "Устойчивое развитие"},
    ],
    [
      {link: "Статус заказа"},
      {link: "Перевозка и доставка"},
      {link: "Варианты оплаты"},
      {link: "Баланс подарочной карты"},
      {link: "Contact Us"},
      {link: "Часто задаваемые вопросы"},
      {link: "Блог"},
    ],
    [
      {link: "Подарочные карты"},
      {link: "Акции"},
      {link: "Найти магазин"},
      {link: "Зарегистрироваться"},
      {link: "Журнал Nike"},
      {link: "Отправьте нам отзыв"},
    ],
  ]
};


export { heroapi, footerAPI, sneaker, highlight, toprateslaes, popularsales };
