(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),i=n.n(r),o=n(3),s=n(4),l=n(6),u=n(5),d=n(7),p=function(t){var e=t.product,n=e.price,a=e.title,r=e.Qty,i=e.img,o=t.product,s=t.onDecreaseQuantity,l=t.onIncreaseQuantity,u=t.onDeleteProduct;return c.a.createElement("div",{className:"cart-item"},c.a.createElement("div",{className:"left-block"},c.a.createElement("img",{style:m.image,src:i})),c.a.createElement("div",{className:"right-block"},c.a.createElement("div",{style:{fontSize:25}},a),c.a.createElement("div",{style:{color:"#777"}},"Rs ",n),c.a.createElement("div",{style:{color:"#777"}},"Qty ",r),c.a.createElement("div",{className:"cart-item-actions"},c.a.createElement("img",{alt:"increase",className:"action-icons",src:"https://cdn-icons-png.flaticon.com/512/992/992651.png",onClick:function(){l(o)}}),c.a.createElement("img",{alt:"decrease",className:"action-icons",src:"https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg",onClick:function(){s(o)}}),c.a.createElement("img",{alt:"delete",className:"action-icons",src:"https://as1.ftcdn.net/v2/jpg/04/92/30/88/1000_F_492308833_xXc7hxGdBrk3OQtb9NKCKq0s1hZ40PC6.jpg",onClick:function(){u(o.id)}}))))},m={image:{height:110,width:110,borderRadius:4,background:"#ccc"}},f=function(t){var e=t.products;return c.a.createElement("div",{className:"cart"},e.map(function(e){return c.a.createElement(p,{product:e,key:e.id,onIncreaseQuantity:t.onIncreaseQuantity,onDecreaseQuantity:t.onDecreaseQuantity,onDeleteProduct:t.onDeleteProduct})}))},h=function(t){return c.a.createElement("div",{style:y.nav},c.a.createElement("div",{style:y.cartIconContainer},c.a.createElement("img",{style:y.cartIcon,src:"https://cdn-icons-png.flaticon.com/512/833/833314.png",alt:"cart-icon"}),c.a.createElement("span",{style:y.cartCount},t.count)))},y={cartIcon:{height:32,marginRight:20},nav:{height:70,background:"#4267b2",display:"flex",justifyContent:"flex-end",alignItems:"center"},cartIconContainer:{position:"relative"},cartCount:{background:"yellow",borderRadius:"50%",padding:"4px 8px",position:"absolute",right:0,top:-9}},g=(n(16),function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).handleIncreaseQuantity=function(e){console.log("Heyy plz inc the qty of",e);var n=t.state.products,a=n.indexOf(e);n[a].Qty+=1,t.setState({products:n})},t.handleDecreaseQuantity=function(e){var n=t.state.products,a=n.indexOf(e);0!==n[a].Qty&&(n[a].Qty-=1,t.setState({products:n}))},t.handleDeleteProduct=function(e){var n=t.state.products.filter(function(t){return t.id!==e});t.setState({products:n})},t.getCartCount=function(){var e=t.state.products,n=0;return e.forEach(function(t){n+=t.Qty}),n},t.getCartTotal=function(){var e=t.state.products,n=0;return e.forEach(function(t){n+=t.price*t.Qty}),n},t.state={products:[{price:1e3,title:"Mobile Phone",Qty:1,img:"https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",id:1},{price:100,title:"Watch",Qty:1,img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",id:2},{price:1e5,title:"Personal computer",Qty:1,img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",id:3}]},t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state.products;return c.a.createElement("div",{className:"App"},c.a.createElement(h,{count:this.getCartCount()}),c.a.createElement(f,{products:t,onIncreaseQuantity:this.handleIncreaseQuantity,onDecreaseQuantity:this.handleDecreaseQuantity,onDeleteProduct:this.handleDeleteProduct}),c.a.createElement("div",{style:{padding:10,fontSize:15}}," ",c.a.createElement("h1",null,"TOTAL: ",this.getCartTotal())," "))}}]),e}(c.a.Component));n(18);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))},8:function(t,e,n){t.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.713b65d3.chunk.js.map