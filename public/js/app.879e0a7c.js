(function(t){function a(a){for(var r,s,o=a[0],i=a[1],u=a[2],d=0,p=[];d<o.length;d++)s=o[d],n[s]&&p.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(a);while(p.length)p.shift()();return c.push.apply(c,u||[]),e()}function e(){for(var t,a=0;a<c.length;a++){for(var e=c[a],r=!0,o=1;o<e.length;o++){var i=e[o];0!==n[i]&&(r=!1)}r&&(c.splice(a--,1),t=s(s.s=e[0]))}return t}var r={},n={app:0},c=[];function s(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)s.d(e,r,function(a){return t[a]}.bind(null,r));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=a,o=o.slice();for(var u=0;u<o.length;u++)a(o[u]);var l=i;c.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("64a9"),n=e.n(r);n.a},"1a1f":function(t,a,e){"use strict";var r=e("9a00"),n=e.n(r);n.a},"2b23":function(t,a,e){"use strict";var r=e("f9a1"),n=e.n(r);n.a},"30d6":function(t,a,e){},"391f":function(t,a,e){},3937:function(t,a,e){},"4e55":function(t,a,e){"use strict";var r=e("c3fe"),n=e.n(r);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),n=e("8c4f"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("router-view")],1)},s=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Cards",{attrs:{products:t.products}}),e("p",{staticClass:"text-center mb-0"},[t._v(t._s(t.currentPage+1)+" / "+t._s(t.pages))]),e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:""===t.prevUrl}},[e("button",{staticClass:"page-link",on:{click:function(a){t.checkPage(t.prevUrl)}}},[t._v("Previous")])]),e("li",{staticClass:"page-item",class:{disabled:""===t.nextUrl}},[e("button",{staticClass:"page-link",on:{click:function(a){t.checkPage(t.nextUrl)}}},[t._v("Next")])])])],1)},i=[],u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.products,function(t){return e("div",{key:t._id,staticClass:"col-md-4 mb-3"},[e("Card",{attrs:{product:t}})],1)}))])},l=[],d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card",staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"card-body"},[e("router-link",{attrs:{tag:"a",to:{name:"product",params:{id:t.product._id}}}},[e("img",{staticClass:"card-img-top",attrs:{src:t.product.image,alt:t.product.name}})]),e("h5",{staticClass:"card-title text-info"},[t._v(t._s(t.product.name))]),e("p",{staticClass:"card-text text-danger"},[t._v("$"+t._s(t.product.price))])],1)])},p=[],f=(e("7514"),e("7f7f"),{methods:{addToCart:function(t){var a=JSON.parse(localStorage.getItem("cart"))||[];if(0===a.length){var e={id:t._id,name:t.name,price:t.price,subtotal:1*t.price,qty:1};a.push(e),this.$store.commit("setCart",e),localStorage.setItem("cart",JSON.stringify(a))}else{var r=a.find(function(a){return a.id===t._id});if(r)r.qty++,r.subtotal=r.price*r.qty,this.$store.commit("setQuantity",r),this.$store.commit("setPrice",r),localStorage.setItem("cart",JSON.stringify(a));else{var n={id:t._id,name:t.name,price:t.price,subtotal:1*t.price,qty:1};a.push(n),this.$store.commit("setCart",n),localStorage.setItem("cart",JSON.stringify(a))}}}}}),v={props:["product"],mixins:[f]},m=v,h=(e("8afa"),e("2877")),g=Object(h["a"])(m,d,p,!1,null,"1a9e3aa0",null);g.options.__file="Card.vue";var _=g.exports,b={props:["products"],components:{Card:_}},C=b,y=(e("613c"),Object(h["a"])(C,u,l,!1,null,"ce1fbae2",null));y.options.__file="Cards.vue";var k=y.exports,x=e("bc3a"),$=e.n(x),O=function(){return $.a.create({baseURL:"https://moidom.herokuapp.com"})},P={components:{Cards:k},data:function(){return{products:[],currentPage:"",pages:"",prevUrl:"",nextUrl:""}},created:function(){var t=this;O().get("/products").then(function(a){t.products=a.data.products,t.currentPage=a.data.currentPage,t.pages=a.data.pages,t.nextUrl=a.data.nextUrl,t.prevUrl=a.data.prevUrl})},methods:{checkPage:function(t){var a=this;O().get(t).then(function(t){a.products=t.data.products,a.currentPage=t.data.currentPage,a.pages=t.data.pages,a.nextUrl=t.data.nextUrl,a.prevUrl=t.data.prevUrl})}}},S=P,w=(e("1a1f"),Object(h["a"])(S,o,i,!1,null,"e1a781de",null));w.options.__file="Products.vue";var j=w.exports,N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light mb-3"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand",attrs:{tag:"a",to:{name:"home"}}},[t._v("Shopping Cart")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav  ml-auto"},[t._l(t.categories,function(a){return e("li",{key:a._id,staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"category",params:{category:a.title}}}},[t._v(t._s(a.title))])],1)}),e("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"checkout"}}},[t._v("Cart("),e("span",{staticClass:"badge badge-light"},[t._v(t._s(t.cart.length))]),t._v(")")])],2)])],1)])},U=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],E={data:function(){return{categories:[]}},created:function(){var t=this;O().get("/categories").then(function(a){t.categories=a.data})},computed:{cart:function(){return this.$store.getters.getCart}}},q=E,J=(e("5dfc"),Object(h["a"])(q,N,U,!1,null,null,null));J.options.__file="Navbar.vue";var T=J.exports,I={name:"app",components:{Products:j,Navbar:T}},Q=I,M=(e("034f"),Object(h["a"])(Q,c,s,!1,null,null,null));M.options.__file="App.vue";var F=M.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-fluid",attrs:{src:t.product.image,alt:t.product.name}})]),e("div",{staticClass:"col-md-8"},[e("h5",[t._v(t._s(t.product.name))]),e("p",[e("span",{staticClass:"font-weight-bold"},[t._v("Category")]),t._v(": "+t._s(t.product.category))]),e("p",{staticClass:"text-danger font-weight-bold"},[t._v("$"+t._s(t.product.price))]),e("p",[t._v("\n        "+t._s(t.product.description)+"\n      ")])])])])},Y=[],B={props:["id"],mixins:[f],data:function(){return{product:{}}},created:function(){var t=this;O().get("/products/".concat(this.id)).then(function(a){t.product=a.data})},methods:{checkout:function(t){t.preventDefault(),this.$router.push({name:"checkout"}),console.log(t)}}},D=B,L=(e("e903"),Object(h["a"])(D,A,Y,!1,null,null,null));L.options.__file="Product.vue";var R=L.exports,W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Cards",{attrs:{products:t.products}})},z=[],G={props:["category"],data:function(){return{products:[]}},components:{Cards:k},created:function(){this.fetch()},watch:{$route:function(t,a){a.params.category!==t.params.category&&this.fetch()}},methods:{fetch:function(){var t=this;O().get("/categories/".concat(this.category)).then(function(a){t.products=a.data})}}},H=G,K=(e("cde6"),Object(h["a"])(H,W,z,!1,null,"5acaa3a6",null));K.options.__file="Category.vue";var V=K.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[0==t.cart.length?e("div",[e("h3",{staticClass:"text-center text-danger"},[t._v("Your Cart is Empty !")])]):e("div",[e("table",{staticClass:"table stripped "},[t._m(0),e("tbody",t._l(t.cart,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.name))]),e("td",[t._v("$"+t._s(a.price))]),e("td",[t._v(t._s(a.qty))]),e("td",[t._v("$"+t._s(a.subtotal))]),e("td",[e("button",{staticClass:"btn btn-sm btn-info mr-1",on:{click:function(e){t.action("min",a)}}},[t._v("-")]),e("button",{staticClass:"btn btn-sm btn-danger mr-1",on:{click:function(e){t.action("clear",a)}}},[t._v("Clear")]),e("button",{staticClass:"btn btn-sm btn-info mr-1",on:{click:function(e){t.action("add",a)}}},[t._v("+")])])])}))]),e("h4",[t._v("Total: $"+t._s(t.total))]),e("button",{staticClass:"btn btn-outline-primary",attrs:{id:"checkout"},on:{click:t.checkout}},[t._v("Checkout")])])])])])},Z=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Product")]),e("th",{attrs:{scope:"col"}},[t._v("Price")]),e("th",{attrs:{scope:"col"}},[t._v("Quantity")]),e("th",{attrs:{scope:"col"}},[t._v("SubTotat")]),e("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],tt={mounted:function(){},computed:{cart:function(){return this.$store.getters.getCart},total:function(){var t=0;return this.cart.map(function(a){t+=a.subtotal}),t}},methods:{checkout:function(){},action:function(t,a){switch(t){case"add":a.qty++,a.subtotal=a.price*a.qty,this.$store.commit("setQuantity",a),this.$store.commit("setPrice",a),localStorage.setItem("cart",JSON.stringify(this.cart));break;case"min":a.qty--,a.subtotal=a.price*a.qty,this.$store.commit("setQuantity",a),this.$store.commit("setPrice",a),localStorage.setItem("cart",JSON.stringify(this.cart)),0===a.qty&&this.clearFromCart(a);break;case"clear":this.clearFromCart(a);break;default:break}},clearFromCart:function(t){var a=this.cart.find(function(a){return a.id===t.id}),e=this.cart.indexOf(a);this.cart.splice(e,1),localStorage.setItem("cart",JSON.stringify(this.cart))}}},at=tt,et=(e("4e55"),Object(h["a"])(at,X,Z,!1,null,null,null));et.options.__file="Checkout.vue";var rt=et.exports,nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center"},[e("p",{staticClass:"text-danger mt-5"},[t._v("You will recieve an Email on "+t._s(t.email)+" soon, Thank you !")]),e("router-link",{staticClass:"btn btn-outline-primary",attrs:{tag:"a",to:{name:"home"}}},[t._v("Back to Web site")])],1)},ct=[],st={computed:{email:function(){return this.$store.getters.getCharge.email}}},ot=st,it=(e("2b23"),Object(h["a"])(ot,nt,ct,!1,null,null,null));it.options.__file="Thakyou.vue";var ut=it.exports,lt=[{path:"/",name:"home",component:j},{path:"/product/:id",name:"product",component:R,props:!0},{path:"/category/:category",name:"category",component:V,props:!0},{path:"/checkout",name:"checkout",component:rt},{path:"/thankyou",name:"thankyou",component:ut}],dt=new n["a"]({routes:lt,mode:"history"}),pt=dt,ft=e("2f62");r["a"].use(ft["a"]);var vt=new ft["a"].Store({state:{cart:JSON.parse(localStorage.getItem("cart"))||[],charge:{}},mutations:{setCart:function(t,a){t.cart.push(a)},setQuantity:function(t,a){var e=t.cart.find(function(t){return t.id===a.id});e.qty=a.qty},setPrice:function(t,a){var e=t.cart.find(function(t){return t.id===a.id});e.subtotal=a.subtotal},setCharge:function(t,a){t.charge=a}},getters:{getCart:function(t){return t.cart},getCharge:function(t){return t.charge}}});r["a"].config.productionTip=!1,r["a"].use(n["a"]),new r["a"]({store:vt,router:pt,render:function(t){return t(F)}}).$mount("#app")},"5dfc":function(t,a,e){"use strict";var r=e("30d6"),n=e.n(r);n.a},"613c":function(t,a,e){"use strict";var r=e("391f"),n=e.n(r);n.a},"64a9":function(t,a,e){},"6f15":function(t,a,e){},"8afa":function(t,a,e){"use strict";var r=e("6f15"),n=e.n(r);n.a},"9a00":function(t,a,e){},b664:function(t,a,e){},c3fe:function(t,a,e){},cde6:function(t,a,e){"use strict";var r=e("3937"),n=e.n(r);n.a},e903:function(t,a,e){"use strict";var r=e("b664"),n=e.n(r);n.a},f9a1:function(t,a,e){}});
//# sourceMappingURL=app.879e0a7c.js.map