let body = document.body



let shop = document.createElement('section')
let container = document.createElement('div')
let card_info = document.createElement('div')
let shop_card = document.createElement('div')
let card_text = document.createElement('div')
let h1 = document.createElement('h1')
let span = document.createElement('span')
let card_button = document.createElement('div')
for (let item of ['Показать первые 5', 'Показать все']) {
    let button = document.createElement('button')
    card_button.append(button)
    button.innerHTML = item
}
let a = 0

// styling

shop.classList.add('shop')
container.classList.add('container')
card_info.classList.add('card_info')
card_text.classList.add('card_text')
h1.classList.add('h1')
span.classList.add('span')
card_button.classList.add('card_button')

h1.innerHTML = `В корзине: ${a} товар`


// append

body.prepend(shop)
shop.prepend(container)
container.prepend(card_info,shop_card)
card_info.prepend(card_text, card_button)
card_text.prepend(h1)
h1.prepend(span)

function card() {
    // create

    let shop_item = document.createElement('div')
    let item_img = document.createElement('div')
    let img = document.createElement('img')
    let item_text = document.createElement('div')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let item_info = document.createElement('div')
    let info_elem_d = document.createElement('div')
    let img_d = document.createElement('img')
    let span_d = document.createElement('span')
    let info_elem_s = document.createElement('div')
    let img_s = document.createElement('img')
    let span_s = document.createElement('span')
    let info_elem_o = document.createElement('div')
    let img_o = document.createElement('img')
    let span_o = document.createElement('span')
    let item_button = document.createElement('div')
    let buttons = document.createElement('button')

    // styling

    shop_card.classList.add('shop_card')
    shop_item.classList.add('shop_item')
    item_img.classList.add('item_img')
    item_text.classList.add('item_text')
    item_info.classList.add('item_info')
    info_elem_d.classList.add('info_elem')
    info_elem_s.classList.add('info_elem')
    info_elem_o.classList.add('info_elem')
    item_button.classList.add('item_button')



    img.src = 'img/back.svg'
    h2.innerHTML = 'MEN’S CLOTHING (120)'
    p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15inches) in the padded sleeve, your everyday'
    img_d.src = 'img/dollar.svg'
    span_d.innerHTML = '109'
    img_s.src = 'img/star.svg'
    span_s.innerHTML = '3,9'
    img_o.src = 'img/object.svg'
    span_o.innerHTML = '120'
    buttons.innerHTML = 'В избранное'

    // append

    body.prepend(shop)
    shop.prepend(container)
    container.append(shop_card)
    shop_card.prepend(shop_item)
    shop_item.prepend(item_img, item_text, item_info, item_button)
    item_img.prepend(img)
    item_text.prepend(h2, p)
    item_info.prepend(info_elem_d, info_elem_s, info_elem_o)
    info_elem_d.prepend(img_d, span_d)
    info_elem_s.prepend(img_s, span_s)
    info_elem_o.prepend(img_o, span_o)
    item_button.prepend(buttons)
}

for(let i = 0; i < 7; i++) {
    card()
}

let btns = document.querySelectorAll('.item_button button')

btns.forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('active_btn')
        if (btn.classList.contains('active_btn')) {
            a += 1
            h1.innerHTML = `В корзине: ${a} товар`
            btn.innerHTML = 'Добавлено'
        } else {
            a -= 1
            h1.innerHTML = `В корзине: ${a} товар`
            btn.innerHTML = 'В избранное'
        }
    }
});






