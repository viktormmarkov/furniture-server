const express = require('express');
const router = express.Router();
//const faker = require('faker');
const Product = require('../../models/Product');
const Category = require('../../models/Category');

const products = [{
        "title": "Кухня Лора 5",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-lora-sonoma-i-venge-wm.jpg?itok=mQmE6Vx7",
        "price": "209",
        "url": "https://videnov.bg/kuhnya-lora-5-1"
    },
    {
        "title": "Кухня Валена",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/valena_kuhnq_venge_i_dyb_sonoma_wm_0.jpg?itok=KoJwcvjC",
        "price": "230",
        "url": "https://videnov.bg/kuhnya-valena"
    }, {
        "title": "Кухня Лора 5 мини",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq_lora_5_mini_dyb_sonoma_i_venge_wm.jpg?itok=KjeANVzG",
        "price": "244",
        "url": "https://videnov.bg/kuhnya-lora-5-mini"
    }, {
        "title": "Кухня Лора 5",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq_lora_alqska_i_arusha_wm.jpg?itok=_FwDKUvw",
        "price": "299",
        "url": "https://videnov.bg/kuhnya-lora-5"
    }, {
        "title": "Кухня Вивиан S",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-vivian-s-bql-i-cheren-glanc-obal-plot-wm.jpg?itok=SFuiHZAP",
        "price": "304",
        "url": "https://videnov.bg/kuhnya-vivian-s-0"
    }, {
        "title": "Кухня Поли ",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq_poli_korekciq-drujki-wm.jpg?itok=_qdYHkU5",
        "price": "311",
        "url": "https://videnov.bg/kuhnya-poli-venge-byalo"
    }, {
        "title": "Кухня Дарина",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-darina-osn-venge-wm.jpg?itok=aqB4fo42",
        "price": "360",
        "url": "https://videnov.bg/kuhnya-darina-2"
    }, {
        "title": "Кухня Дарина",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-darina-venge-i-cherven-glanc-wm.jpg?itok=iKJ6Ycvo",
        "price": "371",
        "url": "https://videnov.bg/kuhnya-darina-4"
    }, {
        "title": "Кухня Дарина",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-darina-sonoma-i-zelen-glanc-wm.jpg?itok=crw_2RyK",
        "price": "374",
        "url": "https://videnov.bg/kuhnya-darina-1"
    }, {
        "title": "Кухня Дарина",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-darina-antik-i-antracit-glanc-wm.jpg?itok=3uvXA84r",
        "price": "381",
        "url": "https://videnov.bg/kuhnya-darina-0"
    }, {
        "title": "Кухня Дарина",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-darina-sonoma-i-bql-glanc-s-aluminievi-drujki-wm.jpg?itok=ja2qlonX",
        "price": "402",
        "url": "https://videnov.bg/kuhnya-darina"
    }, {
        "title": "Кухня Вивиан S",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-vivian-s-dab-sonoma-i-venge-s-obal-plot-wm.jpg?itok=8kgBAzDl",
        "price": "419",
        "url": "https://videnov.bg/kuhnya-vivian-s"
    }, {
        "title": "Кухня Зара",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-zara-venge-i-cherven-glanc-s-cheren-grub-wm.jpg?itok=3XMa_Hoh",
        "price": "419",
        "url": "https://videnov.bg/kuhnya-zara"
    }, {
        "title": "Кухня Вивиан",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/02_kuhnya_vivian_cheren_glants_wm.jpg?itok=vxBhnG65",
        "price": "425",
        "url": "https://videnov.bg/kuhnya-vivian-0"
    }, {
        "title": "Кухня Вивиан",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-vivian-korekciq-drajki-wm.jpg?itok=V3-GYIiB",
        "price": "442",
        "url": "https://videnov.bg/kuhnya-vivian"
    }, {
        "title": "Кухня Биляна ",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq_bilqna_korekciq-drujki-wm.jpg?itok=gSilB8fI",
        "price": "504",
        "url": "https://videnov.bg/kuhnya-bilyana-astra-venge"
    }, {
        "title": "Кухня Дарина",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-darina-osn-sonoma-wm.jpg?itok=53IQ8CwX",
        "price": "514",
        "url": "https://videnov.bg/kuhnya-darina-5"
    }, {
        "title": "Кухня Тереза + бутилиера",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-teraza_wm.jpg?itok=NuFy6kDO",
        "price": "627",
        "url": "https://videnov.bg/kuhnya-tereza-butiliera"
    }, {
        "title": "Кухня Дарина",
        "image": "https://videnov.bg/sites/default/files/styles/product_image_main_slider_teaser/public/uc_product_images/kuhnq-darina-antik-i-antracit-glanc-celiq-korpus-antracit-wm.jpg?itok=Yg3WhI-G",
        "price": "632",
        "url": "https://videnov.bg/kuhnya-darina-6"
    }
];
router.get('/', function (req, res, next) {
    for (let i = 0; i < products.length; i++) {
        let product = new Product({
            name: products[i].title,
            price: products[i].price,
            category: 'Кухня',
            price: products[i].price,
            vendor: 'Виденов',
            url: products[i].url
        });

        product.save();
    }
    // for (let i = 0; i < categories.length; i++) {
    //     let cat = new Category({
    //         title: categories[i]
    //     });
    //     cat.save();
    // }
    res.redirect('/')
});


module.exports = router;