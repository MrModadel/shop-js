import data from './database.js'
const shop_card = document.querySelector('.shop_card')
const show_five = document.querySelector('.five')
const show_all = document.querySelector('.all')
const change = document.querySelector('.change')
let cart = []

show_five.onclick = () => {
   reload(data.slice(0, 5))
}

show_all.onclick = () => {
   reload(data)
}

change.innerHTML = cart.length


function reload(arr) {
   shop_card.innerHTML = ""

   for (let item of arr) {
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



      img.src = item.image
      h2.innerHTML = item.category
      p.innerHTML = item.description.slice(0, 140) + "..."
      img_d.src = 'img/dollar.svg'
      span_d.innerHTML = item.price
      img_s.src = 'img/star.svg'
      span_s.innerHTML = item.rating.rate
      img_o.src = 'img/object.svg'
      span_o.innerHTML = item.rating.count
      buttons.innerHTML = 'В избранное'

      // append

      shop_card.prepend(shop_item)
      shop_item.prepend(item_img, item_text, item_info, item_button)
      item_img.prepend(img)
      item_text.prepend(h2, p)
      item_info.prepend(info_elem_d, info_elem_s, info_elem_o)
      info_elem_d.prepend(img_d, span_d)
      info_elem_s.prepend(img_s, span_s)
      info_elem_o.prepend(img_o, span_o)
      item_button.prepend(buttons)


      // functions
      buttons.onclick = () => {
         buttons.classList.toggle('active_btn')
         if (cart.includes(item.id)) {
            cart = cart.filter(el => el !== item.id);
         } else {
            cart.push(item.id)
         }
         change.innerHTML = cart.length
      }
   }
}

reload(data);
//modal
let btnsopen = document.querySelectorAll('[data-open]');
let btnsclose = document.querySelectorAll('[data-close]');
let Effect = document.querySelector('.burger-effect');
let mabal = document.querySelector('.main__burger-mn');
let nety = document.querySelector('.nety');
let see = document.querySelector('.see-box');

btnsopen.forEach(btn => {
   btn.onclick = () => {
      re(cart)
      document.body.style.overflow = 'hidden'
      Effect.style.display = "flex";
      if (cart.length === 0) {
         nety.style.display = 'flex';
         setTimeout(i => {
            Effect.style.opacity = ".7";
            nety.style.opacity = '.9';
            nety.style.width = '50%';
         }, 300)
      } else {
         mabal.style.display = 'block';
         setTimeout(i => {
            Effect.style.opacity = ".7";
            mabal.style.opacity = '.9';
            mabal.style.width = '50%';
         }, 300)
      }
   }
})

btnsclose.forEach(btn => {
   btn.onclick = () => {
      Effect.style.opacity = "0";
      mabal.style.opacity = '0';
      mabal.style.width = '16%';
      nety.style.width = '16%';
      nety.style.opacity = '0';
      document.body.style.overflow = 'auto'
      see.innerHTML = '';
      setTimeout(i => {
         Effect.style.display = "none";
         mabal.style.display = 'none';
         nety.style.display = 'none';
      }, 300)
   }
})
function re(arr) {
   let arrOne = [];
   for (let item of data) {
      for (let el of arr) {
         if (item.id === el) {
            arrOne.push(item)
         }
      }
   }
   let priceAll = document.querySelectorAll('.price-box__price span , .total__price span');
   let numder = document.querySelector('.price-box__text span');
   let numders = {};
   let count = 0;
   for (let i of arrOne) {
      let n = 1;
      count++;
      let doc = document;
      let itemBuy = doc.createElement('div');
      let itemBuy__img = doc.createElement('img');
      let itemBuy__container = doc.createElement('div');
      let itemBuy__up = doc.createElement('div');
      let itemBuy__down = doc.createElement('div');
      let trash = doc.createElement('div');
      let itemBuy__up_title = doc.createElement('div');
      let blDown__left = doc.createElement('div');
      let textBox = doc.createElement('div');
      let textBox_span = doc.createElement('span');
      let blDown__center = doc.createElement('div');
      let num = doc.createElement('div');
      let num__spanOne = doc.createElement('span');
      let num__look = doc.createElement('div');
      let num__spanTwo = doc.createElement('span');
      let blDown__right = doc.createElement('div');
      let blDown__rightText = doc.createElement('div');
      let blDown__right_span = doc.createElement('span');
      //style
      itemBuy.classList.add('item-buy');
      itemBuy__img.classList.add('item-buy__img');
      itemBuy__container.classList.add('item-buy__container');
      //up
      itemBuy__up.classList.add('item-buy__up');
      trash.classList.add('trash');
      itemBuy__up_title.classList.add('item-buy__up-title');
      //down
      itemBuy__down.className = "item-buy__down bl-down";
      blDown__left.classList.add('bl-down__left');
      blDown__center.classList.add('bl-down__center');
      blDown__right.classList.add('bl-down__right');
      //left
      textBox.classList.add('text-box');
      //center
      num.classList.add('numder');
      num__spanOne.classList.add('material-icons');
      num__spanTwo.classList.add('material-icons');
      num__look.classList.add('numder__look');
      //right
      blDown__rightText.classList.add('bl-down__right-text');
      //inner
      itemBuy.append(itemBuy__img, itemBuy__container);
      itemBuy__img.src = i.image;
      itemBuy__container.append(itemBuy__up, itemBuy__down);
      itemBuy__up.append(itemBuy__up_title, trash);
      itemBuy__up_title.innerText = i.title;
      trash.innerHTML = `<span class="material-icons">delete</span> Удалить`;
      itemBuy__down.append(blDown__left, blDown__center, blDown__right);
      blDown__left.append(textBox);
      textBox_span.innerHTML = 'INFO';
      textBox.innerHTML = `Продавец: ${textBox_span.innerHTML}`;
      numders[i.id] = i.price;
      let total = 0;
      for (let i in numders) {
         total += numders[i];
      }
      priceAll.forEach(item => {
         item.innerText = (Math.round(total * 100) / 100).toFixed(2);
      })
      num__spanOne.onclick = () => {
         if (n > 1) {
            n--;
            count++;
            num__look.innerText = n;
            blDown__rightText.innerHTML = `${(Math.round((+blDown__right_span.innerHTML * n) * 100) / 100).toFixed(2)}cyм`;
            numders[i.id] = +blDown__right_span.innerHTML * n;
            let total = 0;
            for (let i in numders) {
               total += numders[i];
            }
            priceAll.forEach(item => {
               item.innerText = (Math.round(total * 100) / 100).toFixed(2);
            })
            numder.innerHTML = `(${count})`;
         }
      }
      num__spanTwo.onclick = () => {
         n++;
         count++;
         num__look.innerText = n;
         blDown__rightText.innerHTML = `${(Math.round((+blDown__right_span.innerHTML * n) * 100) / 100).toFixed(2)}cyм`;
         numders[i.id] = +blDown__right_span.innerHTML * n;
         let total = 0;
         for (let i in numders) {
            total += numders[i];
         }
         priceAll.forEach(item => {
            item.innerText = (Math.round(total * 100) / 100).toFixed(2);
         })
         numder.innerHTML = `(${count})`;
      }
      blDown__center.append(num);
      num.append(num__spanOne, num__look, num__spanTwo);
      num__spanOne.innerHTML = 'remove';
      num__spanTwo.innerHTML = 'add';
      num__look.innerHTML = n;
      blDown__right.append(blDown__rightText);
      blDown__right_span.innerText = i.price
      blDown__rightText.innerHTML = `${blDown__right_span.innerHTML}cyм`;
      trash.onclick = () => {
         itemBuy.remove();
         if (see.querySelector('.item-buy')===null) {
            mabal.style.opacity = '0';
            mabal.style.width = '16%';
            setTimeout(i => {
               mabal.style.display = 'none';
               nety.style.display = 'flex';
               setTimeout(i => {
                  nety.style.opacity = '.9';
                  nety.style.width = '50%';
               }, 300)
            }, 300)
         } else {
            delete numders[i.id];
            let total = 0;
            for (let i in numders) {
               total += numders[i];
            }
            priceAll.forEach(item => {
               item.innerText = (Math.round(total * 100) / 100).toFixed(2);
            })
            count -= +num__look.innerHTML;
            numder.innerHTML = `(${count})`;
         }
      }
      see.append(itemBuy)
   }
   numder.innerHTML = `(${count})`
}
