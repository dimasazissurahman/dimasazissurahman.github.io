(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(a,e,t){},136:function(a,e,t){},139:function(a,e,t){"use strict";t.r(e);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),s=(t(60),t(21)),c=t(22),m=t(26),o=t(23),u=t(27),d=t(1),h=t(24),g=t.n(h);var p=function(){return l.a.createElement("div",null,l.a.createElement(d.Grid,{className:"home-grid"},l.a.createElement(d.Cell,{col:12},l.a.createElement("img",{src:g.a,alt:"avatar",className:"ava-img"}),l.a.createElement("div",{className:"banner-text"},l.a.createElement("h2",null,"\" Don't judge people by it's cover \"",l.a.createElement("br",null),"- Mid Story"),l.a.createElement("h1",null,"Mobile & Web Developer"),l.a.createElement("hr",null),l.a.createElement("p",null,"HTML/CSS/JS | Laravel | PHP | C++ | C | C# | Swift | React | SQL | GIS"),l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"https://www.instagram.com/dimasazissurahman",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{class:"fa fa-instagram","aria-hidden":"true"})),l.a.createElement("a",{href:"http://linkedin.com/in/dimas-azis-surahman-21862b169",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{class:"fa fa-linkedin-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://twitter.com/dimas_azis12",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{class:"fa fa-twitter-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100006977538084",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{class:"fa fa-facebook-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://github.com/dimasazissurahman",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{class:"fa fa-github-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.youtube.com/channel/UCYoDn41ch_TZDTDC1NktRww",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{class:"fa fa-youtube-square","aria-hidden":"true"})))))))},E=t(50),b=t(13),k=t(51),y=t.n(k),N=t(52),C=t.n(N),f=function(a){function e(a){var t;return Object(s.a)(this,e),(t=Object(m.a)(this,Object(o.a)(e).call(this,a))).state={name:"",email:"",feedback:"",redirect:!1,loading:!1,message:""},t.handleChange=t.handleChange.bind(Object(b.a)(Object(b.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(b.a)(Object(b.a)(t))),t}return Object(u.a)(e,a),Object(c.a)(e,[{key:"handleChange",value:function(a){this.setState(Object(E.a)({},a.target.name,a.target.value)),console.log(this.state)}},{key:"loadShowMsg",value:function(){return this.state.loading?l.a.createElement("p",null,"Loading..."):l.a.createElement("p",null,this.state.message)}},{key:"handleSubmit",value:function(a){var e=this;a.preventDefault();var t=this.state.name,n=this.state.email,l=this.state.feedback;this.setState({loading:!0});var r={name:t,email:n,feedback:l};C.a.post("/t/kcbti-1554703031/post",r).then(function(a){console.log(a),e.setState({loading:!1,message:a.data,redirect:!0})}).catch(function(a){console.log(a),e.setState({loading:!1,redirect:!1})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"about-body"},l.a.createElement(d.Grid,{className:"about-grid"},l.a.createElement(d.Cell,{col:6},l.a.createElement("h1",null,"Dimas Azis Surahman"),l.a.createElement("hr",null),l.a.createElement("img",{src:y.a,alt:"ava",className:"fotoGanteng"}),l.a.createElement("p",null,"Saya adalah Mahasiswa Binus. Yang dilahirkan di negeri Indonesia, dijaman dimana semua orang berbondong-bondong, berusaha keras untuk meruntuhkan Soeharto. Yang mana ada sebagian orang, yang berbondong-bondong untuk menjarah barang-barang toko. Dikala itu aku dilahirkan. Bisa dibayangkan betapa sulitnya ibuku mengandungku, mungkin disaat itu ibuku merasa sial telah mengandungku. Yang mana seharusnya ikut menjarah barang-barang di mall, tetapi malah bersusah payah mengandungku. Terima kasih ibuku sudah ikhlas mengandungku di suasana kericuhan tahun 98. Setelah ku lahir baru semua tenang. Mata ku melihat seolah tidak ada yang terjadi. Kupingku mendengar seolah tidak ada yang teriak. Mulutku berteriak bagaikan suara tangisan surga. Disitulah moment saat ku lahir. Yang mana ketika ku berteriak, semua kericuhan 98 pun berakhir. Kalian sudah pasti tahu bulan kapan ku lahir. Disitulah demo 98 berhenti. Semoga peristiwa seperti ini tidak akan terulang kembali. Dan hanya terjadi satu kali saja. Selanjutnya semua hanya tinggal kenangan semata. Saya Dimas Azis Surahman lahir di tahun kericuhan. Bertumbuh berkembang untuk mengakhiri kericuhan tersebut.")),l.a.createElement(d.Cell,{col:6},l.a.createElement("h1",null,"Contact Me"),l.a.createElement("hr",null),l.a.createElement(d.List,null,l.a.createElement(d.ListItem,null,l.a.createElement(d.ListItemContent,{className:"contact-phone"},l.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"+62 8577 4511 678 (WA)")),l.a.createElement(d.ListItem,null,l.a.createElement(d.ListItemContent,{className:"contact-phone"},l.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"})," dimasazissurahman@gmail.com")),l.a.createElement(d.ListItem,null,l.a.createElement(d.ListItemContent,{className:"contact-phone"},l.a.createElement("i",{className:"fa fa-user","aria-hidden":"true"})," dimasazis (Line) "))),l.a.createElement("form",{className:"form-input",onSubmit:this.handleSubmit},l.a.createElement("input",{className:"input-name",id:"name",type:"text",placeholder:"Your Name",name:"name",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-email",id:"email",type:"email",placeholder:"Your Email",name:"email",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{className:"feedback-input",id:"feedback",type:"text",placeholder:"Feedback",name:"feedback",onChange:this.handleChange}),l.a.createElement("button",{className:"submit-button",type:"submit"},"Submit")),this.loadShowMsg())))}}]),e}(n.Component),v=t(25);var w=function(){var a=Object(n.useState)(0),e=Object(v.a)(a,2),t=e[0],r=e[1];return l.a.createElement("div",{className:"gallery-tabs"},l.a.createElement(d.Tabs,{className:"1"===t?"active":"",onChange:function(a){return r(a)},ripple:!0},l.a.createElement(d.Tab,null,"Quotes"),l.a.createElement(d.Tab,null,"Photo")),l.a.createElement(d.Grid,{className:"projects-grid"},l.a.createElement(d.Cell,{col:12},l.a.createElement("div",{className:"main-content"},l.a.createElement(function(){return 0===t?l.a.createElement("div",{className:"gallery-main-display"},l.a.createElement("div",{className:"gallery-display"},l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action"},l.a.createElement("span",{className:"gallery-action-span"},'" Frustated Quotes "'))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title1",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action"},l.a.createElement("span",{className:"gallery-action-span"},'" The Choice "'))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title2",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action"},l.a.createElement("span",{className:"gallery-action-span"},'" Respect each moment "'))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title3",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action"},l.a.createElement("span",{className:"gallery-action-span"},'" Be patience "')))),l.a.createElement("div",{className:"gallery-display1"},l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title4",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action"},l.a.createElement("span",{className:"gallery-action-span"},'" Be happy and you\'re grateful person "'))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title5",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action"},l.a.createElement("span",{className:"gallery-action-span"},'" Respect those who are guests in your heart "'))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title6",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action"},l.a.createElement("span",{className:"gallery-action-span"},'" Said before it changes "'))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title7",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action"},l.a.createElement("span",{className:"gallery-action-span"},'" Be grateful person "'))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title8",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action"},l.a.createElement("span",{className:"gallery-action-span"},'" Learn your experiences to make your life better "'))))):1===t?l.a.createElement("div",{className:"gallery-wallpaper-display"},l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title-wallpaper",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action-wallpaper"},l.a.createElement("span",{className:"gallery-action-span-wallpaper"},"Motivation Quotes"))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title-wallpaper1",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action-wallpaper"},l.a.createElement("span",{className:"gallery-action-span-wallpaper"},"Motivation Quotes"))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title-wallpaper2",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action-wallpaper"},l.a.createElement("span",{className:"gallery-action-span-wallpaper"},"Motivation Quotes"))),l.a.createElement(d.Card,{className:"gallery-main",shadow:4},l.a.createElement(d.CardTitle,{className:"gallery-title-wallpaper3",expand:!0}),l.a.createElement(d.CardActions,{className:"gallery-action-wallpaper"},l.a.createElement("span",{className:"gallery-action-span-wallpaper"},"Motivation Quotes")))):void 0},null)))))},S=t(12);var T=function(a){var e=Object(n.useState)(0),t=Object(v.a)(e,2),r=t[0],i=t[1];return l.a.createElement("div",{className:"category-tabs"},l.a.createElement(d.Tabs,{className:"1"===r?"active":"",onChange:function(a){return i(a)},ripple:!0},l.a.createElement(d.Tab,null,"React"),l.a.createElement(d.Tab,null,"Laravel"),l.a.createElement(d.Tab,null,"SQL"),l.a.createElement(d.Tab,null,"C#"),l.a.createElement(d.Tab,null,"Swift")),l.a.createElement(d.Grid,{className:"projects-grid"},l.a.createElement(d.Cell,{col:12},l.a.createElement("div",{className:"main-content"},l.a.createElement(function(){return 0===r?l.a.createElement("div",{className:"card-display"},l.a.createElement(d.Card,{className:"card-main",shadow:5},l.a.createElement(d.CardTitle,{className:"card-title"},l.a.createElement("h1",null,"MID STORY")),l.a.createElement(d.CardText,{className:"card-text"},"Saya sebut ini adalah Mid Story. Sebuah website (React) yang terinspirasi dari Mid Story. Apa itu Mid Story? Mid Story adalah sebuah ungkapan atau kata-kata inspiratif, puitis yang terinspirasi dari kisah hidup seorang lelaki yang dibesarkan dengan jerih payah orang tuanya. Sebuah kisah menarik dimulai dari ketika ia memulai sebuah hubungan percintaanya. Semua berawal dari situ. Ingin tahu kelanjutannya? Tunggu saja sampai buku Mid Story release di toko buku tercinta anda. Sebelumnya saya akan menjelaskan di web ini saya menggunakan library 'react-mdl' dan 'react-router-dom' apabila ada yang tidak tahu 'react-router-dom' itu apa. Bisa dilihat di project saya yang \"Login Page\"."),l.a.createElement(d.CardActions,{border:!0},l.a.createElement(d.Button,{colored:!0,href:""},"GitHub")),l.a.createElement(d.CardMenu,{className:"card-menu"},l.a.createElement(d.IconButton,{name:"share"}))),l.a.createElement(d.Card,{className:"card-main",shadow:5},l.a.createElement(d.CardTitle,{className:"card-title1"},l.a.createElement("h1",null,"LOGIN PAGE")),l.a.createElement(d.CardText,{className:"card-text"},"Sebuah webpage yang berisikan Login dan Register, dengan cara menarik data dari API untuk POST (REGISTER) dan untuk GET (LOGIN). Di sini page login dan register menggunakan library 'react-router-dom' disini kita akan mempelajari bagaimana cara penggunaan 'react-router-dom' sebelumnya perlu kita ketahui fungsi 'react-router-dom' ini, yaitu berfungsi sebagai memindahkan dari suatu file javascript ke file javascript lainnya. Contoh pada page ini adalah perpindahan dari Sign-in page ke Sign-Up page. Untuk selebihnya bisa dilihat di github saya. Tinggal klik tombol dibawah ini. Apabila ada yang ingin ditanyakan bisa follow instagram saya atau sosial media lainnya."),l.a.createElement(d.CardActions,{border:!0},l.a.createElement(d.Button,{colored:!0,href:""},"GitHub")),l.a.createElement(d.CardMenu,{className:"card-menu"},l.a.createElement(d.IconButton,{name:"share"})))):1===r?l.a.createElement(d.Card,{className:"card-main",shadow:5},l.a.createElement(d.CardTitle,{className:"card-title2"},l.a.createElement("h1",null,"SuperCeLL")),l.a.createElement(d.CardText,{className:"card-text"},"Sebuah website based on Laravel (MVC). Website ini bertujuan untuk memudahkan sebuah Toko HandPhone untuk mengelola barang dagangannya melalui website ini. Jadi admin dapat mengontrol setiap barang yang masuk dan Pembeli pun mudah untuk melihat stock handphone yang ada. Website ini dirancang khusus dengan bantuan phpMyAdmin sebagai databasenya untuk menyimpan data customer dan data items."),l.a.createElement(d.CardActions,{border:!0},l.a.createElement(d.Button,{colored:!0,href:""},"GitHub")),l.a.createElement(d.CardMenu,{className:"card-menu"},l.a.createElement(d.IconButton,{name:"share"}))):2===r?l.a.createElement(d.Card,{className:"card-main",shadow:5},l.a.createElement(d.CardTitle,{className:"card-title3"},l.a.createElement("h1",null,"Create-Insert-SQL")),l.a.createElement(d.CardText,{className:"card-text"},"Project dasar cara create dan insert di sql. Project ini simple, hanya berisikan cara-cara create table dan insert table. Membuat basic SQL."),l.a.createElement(d.CardActions,{border:!0},l.a.createElement(d.Button,{colored:!0,href:""},"GitHub")),l.a.createElement(d.CardMenu,{className:"card-menu"},l.a.createElement(d.IconButton,{name:"share"}))):3===r?l.a.createElement(d.Card,{className:"card-main",shadow:5},l.a.createElement(d.CardTitle,{className:"card-title4"},l.a.createElement("h1",null,"Library App")),l.a.createElement(d.CardText,{className:"card-text"},"Sebuah aplikasi untuk memudahkan peminjaman dan pengelolaan perpustakaan. Rata-rata aplikasi ini sudah banyak digunakan oleh berbagai macam perpustakaan di sekolah maupun di universitas. Karena sistem yang memudahkan para peminjam dan pengelola. Membuat aplikasi ini sudah menjadi standarisasi di setiap perpustakaan."),l.a.createElement(d.CardActions,{border:!0},l.a.createElement(d.Button,{colored:!0,href:""},"GitHub")),l.a.createElement(d.CardMenu,{className:"card-menu"},l.a.createElement(d.IconButton,{name:"share"}))):4===r?l.a.createElement(d.Card,{className:"card-main",shadow:5},l.a.createElement(d.CardTitle,{className:"card-title5"},l.a.createElement("h1",null,"Travel-One")),l.a.createElement(d.CardText,{className:"card-text"},"Sebuah aplikasi based on Apple/IOS (Swift) didevelop di xcode. Dimana aplikasi ini adalah sebuah app yang bertujuan untuk memudahkan para Tourist. Di dalam app ini menggunakan sistem seperti GO-JEK dan GRAB atau UBER. Dimana sang Tourist akan mencari seorang Guider yang sekiranya memumpuni bahasa yang bisa digunakan oleh Tourist tersebut. Jadi App ini menawarkan fitur Chat dan fitur Paketan. Fitur Chat ini lebih banyak digunakan oleh perorangan, seperti Tourist yang backpackeran sendiri. Sistem pembayarannya berdasarkan durasi di chat tersebut. Fitur Paketan ini biasa sering digunakan oleh Agent Travel yang ingin bekerja sama dengan kita."),l.a.createElement(d.CardActions,{border:!0},l.a.createElement(d.Button,{colored:!0,href:""},"GitHub")),l.a.createElement(d.CardMenu,{className:"card-menu"},l.a.createElement(d.IconButton,{name:"share"}))):void 0},null)))))};var j=function(){return l.a.createElement("div",{className:"main-education"},l.a.createElement("div",{className:"main-right-side"},l.a.createElement("div",{className:"main-right"},l.a.createElement("div",{className:"main-flex-right"},l.a.createElement("div",{className:"container-avatar"},l.a.createElement("img",{className:"avatar",src:g.a,alt:"avatar"})),l.a.createElement("div",{className:"container-bio"},l.a.createElement("div",{className:"isi-bio"},"Dimas Azis Surahman",l.a.createElement("br",null),"Jl. Pengayoman Utara 7 D59, Tangerang",l.a.createElement("br",null),"05 Desember 1998",l.a.createElement("br",null),"Basket, Music, Coffee",l.a.createElement("br",null),"IT Database",l.a.createElement("hr",null),l.a.createElement("h1",{id:"isi-quotes"},'" Smile makes you better even when you fall. "')))),l.a.createElement("div",{className:"main-bottom-right"},l.a.createElement("h1",null,"Informal Education"),l.a.createElement("hr",null),l.a.createElement("h1",null,"IOS Foundation (Aug 2017)"),l.a.createElement("h1",null,"Puslatcab Basket Kota Tangerang (Jan 2017 - Aug 2018) "))),l.a.createElement("div",null)),l.a.createElement("div",{className:"main-left-side"},l.a.createElement("div",{className:"main-left"},l.a.createElement("h1",null,"Formal Education"),l.a.createElement("hr",null),l.a.createElement("h1",null,"SDN Tanah Tinggi 4 (2004-2010)"),l.a.createElement("h1",null,"SMPN 2 Tangerang (2010-2013)"),l.a.createElement("h1",null,"SMAN 6 Tangerang (2013-2016)"),l.a.createElement("h1",null,"Bina Nusantara (2016-2020)"))))};t(129);var A=function(){return l.a.createElement(S.c,null,l.a.createElement(S.a,{exact:!0,path:"/",component:p}),l.a.createElement(S.a,{path:"/about",component:f}),l.a.createElement(S.a,{path:"/project",component:T}),l.a.createElement(S.a,{path:"/gallery",component:w}),l.a.createElement(S.a,{path:"/education",component:j}))},x=t(11),M=(t(136),function(a){function e(){return Object(s.a)(this,e),Object(m.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(u.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:"demo-big-content"},l.a.createElement(d.Layout,null,l.a.createElement(d.Header,{className:"header-color",title:"MID STORY",scroll:!0},l.a.createElement(d.Navigation,null,l.a.createElement(x.b,{to:"/",component:p},"Home"),l.a.createElement(x.b,{to:"/about",component:f},"About"),l.a.createElement(x.b,{to:"/project",component:T},"Project"),l.a.createElement(x.b,{to:"/gallery",component:w},"Gallery"))),l.a.createElement(d.Drawer,{title:"MID STORY"},l.a.createElement(d.Navigation,null,l.a.createElement(x.b,{to:"/education"},"My Education"))),l.a.createElement(d.Content,null,l.a.createElement("div",{className:"page-content"}),l.a.createElement(A,null))))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(137),t(138);i.a.render(l.a.createElement(x.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})},24:function(a,e,t){a.exports=t.p+"static/media/avatar.bd76a06b.jpeg"},51:function(a,e,t){a.exports=t.p+"static/media/orangGanteng.9dddf46c.PNG"},55:function(a,e,t){a.exports=t(139)},60:function(a,e,t){}},[[55,1,2]]]);
//# sourceMappingURL=main.b960071e.chunk.js.map