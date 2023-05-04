var data=[
    {
        avatar:"https://images.meesho.com/images/products/17401521/rkfks_400.webp",
        name:"Modern Table Lamps",
        price:164,
        info:"Free Delivery",
        Rating:4.3 
    },
    {
        avatar:"https://images.meesho.com/images/products/39440292/emywu_400.webp",
        name:"Classic Irons",
        price:356,
        info:"Free Delivery",
        Rating:3.8 
    },
    {
        avatar:"https://images.meesho.com/images/products/12401612/32a6a_400.webp",
        name:"Kaltron Extension Chords",
        price:165,
        info:"Free Delivery",
        Rating:3.6
    },
    {
        avatar:"https://images.meesho.com/images/products/8179430/13431_400.webp",
        name:"Metal Lamp",
        price:342,
        info:"Free Delivery",
        Rating:3.8
    },
    {
        avatar:"https://images.meesho.com/images/products/45352230/blfov_400.webp",
        name:"Jivika Attractive Kurtis",
        price:300,
        info:"Free Delivery",
        Rating:4.1
    },
    {
        avatar:"https://images.meesho.com/images/products/263660304/ofvpv_400.webp",
        name:"Banita Fabulous Kurtis",
        price:175,
        info:"Free Delivery",
        Rating:3.1
    },
    {
        avatar:"https://images.meesho.com/images/products/269252461/sg7o8_400.webp",
        name:"Banita sensational Kurtis",
        price:283,
        info:"Free Delivery",
        Rating:3.9
    },
    {
        avatar:"https://images.meesho.com/images/products/196889899/x5wh9_400.webp",
        name:"Trendy Voguish Kurtis",
        price:324,
        info:"Free Delivery",
        Rating:4.1
    },
    {
        avatar:"https://images.meesho.com/images/products/246773031/zzciv_400.webp",
        name:"Stylish Fashionista Women",
        price:272,
        info:"Free Delivery",
        Rating:3.5
    },
    {
        avatar:"https://images.meesho.com/images/products/161383925/4nhno_400.webp",
        name:"Stylish Feminine Women",
        price:184,
        info:"Free Delivery",
        Rating:3.8
    },
    {
        avatar:"https://images.meesho.com/images/products/270339653/ffbbu_400.webp",
        name:"Trendy Men Bracelets",
        price:353,
        info:"Free Delivery",
        Rating:4.9
    },
    {
        avatar:"https://images.meesho.com/images/products/141613109/wvuev_400.webp",
        name:"Unisex Red Open face Helmet",
        price:451,
        info:"Free Delivery",
        Rating:3.8
    },
    {
        avatar:"https://images.meesho.com/images/products/48381406/szreq_400.webp",
        name:"Fashionate Men Caps",
        price:336,
        info:"Free Delivery",
        Rating:3.8
    },
    {
        avatar:"https://images.meesho.com/images/products/117525185/t8xwx_400.webp",
        name:"Modern Fashionable Men shoes",
        price:334,
        info:"Free Delivery",
        Rating:3.8
    },
    {
        avatar:"https://images.meesho.com/images/products/250020825/4ghia_400.webp",
        name:"Unique Graceful Men shoe",
        price:505,
        info:"Free Delivery",
        Rating:4.1
    },
    {
        avatar:"https://images.meesho.com/images/products/223956013/p8fjr_400.webp",
        name:"Styles Latest Men Wallets",
        price:428,
        info:"Free Delivery",
        Rating:4.1
    },
    {
        avatar:"https://images.meesho.com/images/products/127038918/urkdz_400.webp",
        name:"Fashionable Modern Men glasses",
        price:141,
        info:"Free Delivery",
        Rating:3.8
    },
    {
        avatar:"https://images.meesho.com/images/products/12228396/51cf7_400.webp",
        name:"Arzonal Trendy sunglasses",
        price:293,
        info:"Free Delivery",
        Rating:4.0
    },
    {
        avatar:"https://images.meesho.com/images/products/31112037/76257_400.webp",
        name:"Trendy Unisex Soft Toys",
        price:310,
        info:"Free Delivery",
        Rating:3.9
    },
    {
        avatar:"https://images.meesho.com/images/products/7566757/649d9_400.webp",
        name:"Graceful Unisex SOft toy",
        price:333,
        info:"Free Delivery",
        Rating:4.1
    },
    {
        avatar:"https://images.meesho.com/images/products/157843686/euthu_400.webp",
        name:"Unique Baby Mosquito Net",
        price:225,
        info:"Free Delivery",
        Rating:4.1
    },
    {
        avatar:"https://images.meesho.com/images/products/276704056/8wxqi_400.webp",
        name:"Elegant Baby Blanket",
        price:222,
        info:"Free Delivery",
        Rating:4.0
    },
    {
        avatar:"https://images.meesho.com/images/products/79788497/u7lzr_400.webp",
        name:"Designer Bedsheet",
        price:250,
        info:"Free Delivery",
        Rating:3.7
    },
    {
        avatar:"https://images.meesho.com/images/products/5482117/hjcau_400.webp",
        name:"Elite Bedsheet",
        price:416,
        info:"Free Delivery",
        Rating:4.1
     },
     {
        avatar:"https://images.meesho.com/images/products/274877153/aeqhs_400.webp",
        name:"Gorgeous Doormats",
        price:192,
        info:"Free Delivery",
        Rating:4.0
     },
    {
        avatar:"https://images.meesho.com/images/products/16014321/cd9ea_400.webp",
        name:"Colorful Fridge Mats",
        price:195,
        info:"Free Delivery",
        Rating:3.7
    },
    {
        avatar:"https://images.meesho.com/images/products/275907352/yzvbg_400.webp",
        name:"GraceFul Curtains",
        price:889,
        info:"Free Delivery",
        Rating:4.0
    },
    {
        avatar:"https://images.meesho.com/images/products/215069498/tqdux_400.webp",
        name:"Elegant Curtains",
        price:639,
        info:"Free Delivery",
        Rating:4.3
    }
]

console.log(data);
    let right=document.querySelector("#right");
    data.map(function(elem){
        
        let div=document.createElement("div");
        div.setAttribute("id","innerRight");

        let img=document.createElement("img");
        img.src=elem.avatar;

        let p1=document.createElement("p");
        p1.innerText=elem.name;

        let price=document.createElement("p");
        price.innerText=elem.price;

        let info=document.createElement("p");
        info.innerText=elem.info;

        let rating=document.createElement("button");
        rating.innerText=elem.Rating

        div.append(img,p1,price,info,rating);
        
        right.append(div);

    })