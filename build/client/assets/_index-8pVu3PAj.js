import{j as e}from"./jsx-runtime-0DLF9kdB.js";import{H as v}from"./HomeNav-sGChEP8Q.js";import{L as f,r as t}from"./components-DN9bEK-g.js";import{g as b,F as N}from"./lib-DkU1NRFm.js";import{U as k,H as S,M as R,C as y}from"./MobileNav-D7FcM9wJ.js";import{B,a as T,i as _,c as E,d as H,M as z}from"./index-BuMB8ucW.js";import{S as M,G as C,R as q}from"./Recents-BxZsWE8F.js";import{R as F}from"./index-CjEBJGzG.js";import{F as L}from"./LatestStarRating-s-ndiZUe.js";import"./WhiteLogo-D0_DZqmS.js";import"./AuthContext-Bd05mLB0.js";const D=()=>e.jsx(f,{to:"/",children:e.jsx("div",{className:` text-[24px]
                cursor-pointer tracking-tight relative
                top-[-1px] font-poppins`,children:b()})}),G=()=>{const[a]=t.useState(1),[i,m]=t.useState(""),[n,l]=t.useState(!1),[r,o]=t.useState(!1),[h,j]=t.useState(!1),p=()=>o(!0),x=()=>o(!1);return t.useEffect(()=>{const u=()=>{window.scrollY>=a&&l(!0),window.scrollY<a&&l(!1)};window.onscroll=()=>u()},[a]),e.jsxs("div",{children:[e.jsx("div",{className:`z-[400] fixed w-full  h-[60px] 
      px-[15px] 
     transition-all duration-1000 ease-in-out
     flex flex-col place-content-center
     ${n&&"bg-black/90"}
     `,children:e.jsxs("div",{className:`max-w-[1100px] 
      mx-auto w-full text-white relative gap-x-3
        flex place-content-between h-full`,children:[e.jsx("div",{className:`font-bold font-sans 
          flex place-items-center text-2xl w-fit
           `,children:e.jsx(D,{})}),e.jsx("div",{className:`hidden place-items-center
                     lg:flex  w-full`,children:e.jsx(f,{to:"/web/search",children:"Search"})}),e.jsx("div",{className:"flex place-items-center ",children:e.jsxs("div",{className:"flex place-items-center gap-4",children:[e.jsx(k,{theme:"dark"}),e.jsx(S,{theme:"dark",openNav:p,navBg:h})]})})]})}),e.jsx(R,{showNav:r,closeNav:x})]})},d=[{img:"https://consultix.radiantthemes.com/demo-six/wp-content/uploads/sites/7/2018/02/slider-1.jpg"},{img:"https://smartmag.theme-sphere.com/rtl/wp-content/uploads/sites/34/2022/11/Depositphotos_410258952_XL-1.jpg"},{img:"https://smartmag.theme-sphere.com/news/wp-content/uploads/sites/11/2021/02/daniel-korpai-seLBnDRB6_M-unsplash-1-scaled.jpg"},{img:"https://demo.tagdiv.com/newspaper_free_news_pro/wp-content/uploads/2023/12/3.jpg"},{img:"https://demo.tagdiv.com/newspaper_free_news_pro/wp-content/uploads/2023/12/2.jpg"},{img:"https://smartmag.theme-sphere.com/trendy/wp-content/uploads/sites/5/2017/01/shutterstock_275843885.jpg"},{img:"https://smartmag.theme-sphere.com/trendy/wp-content/uploads/sites/5/2017/01/shutterstock_362198879.jpg"},{img:"https://smartmag.theme-sphere.com/social-life/wp-content/uploads/sites/17/2021/02/deanna-alys-xQwRvghauaU-unsplash-1.jpg"}],X=()=>{const[a,i]=t.useState(0),m=t.useRef(0);t.useRef(0);const[n,l]=t.useState(null);let r=t.useRef(null);const o=s=>{m.current=s.touches[0].clientX},h=s=>{const c=s.changedTouches[0].clientX,w=m.current-c;w>50?i(g=>(g+1)%d.length):w<-50&&i(g=>(g-1+d.length)%d.length)};t.useEffect(()=>{l(d)},[]);const j=()=>{i(s=>s===0?n.length-1:s-1)},p=()=>{i(s=>s===n.length-1?0:s+1)},x=async()=>{r.current&&clearTimeout(r.current),p(),r.current=setTimeout(()=>{},15e3)},u=async()=>{r.current&&clearTimeout(r.current),j(),r.current=setTimeout(()=>{},15e3)};return t.useEffect(()=>{},[n]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:` w-full h-screen flex 
          overflow-hidden  bg-black z-[20]
          `,children:n==null?void 0:n.map((s,c)=>e.jsx("div",{className:`w-full h-full block 
                                        flex-shrink-0 flex-grow-0 
                                        transition-transform
                                        ease-in-out relative z-[20]
                                        duration-1000 cursor-pointer`,onTouchStart:o,onTouchEnd:h,style:{transform:`translateX(-${a*100}%)`},children:e.jsx("img",{src:s.img,alt:"",className:`object-cover w-full h-full 
                      block flex-shrink-0 flex-grow-0 transition-transform
                      ease-in-out duration-1000 z-[10] opacity-[70%] `},c)},c))}),e.jsxs("div",{className:"z-[300]",children:[e.jsx("button",{onMouseDown:u,className:`block absolute top-0 bottom-0 
                                                  z-[300] p-[1rem] cursor-pointer left-0 group h-full 
                                                        transition duration-1000 ease-in-out`,children:e.jsx("div",{className:`w-[50px] h-[50px] bg-white/30 rounded-full 
            place-content-center place-items-center group-hover:bg-white/30
            z-[300] transition duration-500 ease-in-out relative `,children:e.jsx(B,{className:" stroke-white fill-black w-[2rem] h-[2rem]"})})}),e.jsx("button",{onMouseDown:x,className:`block absolute top-0 bottom-0 
                                                        z-[300]    p-[1rem] cursor-pointer right-0 group 
                                                             transition duration-1000 ease-in-out`,children:e.jsx("div",{className:`w-[50px] h-[50px] bg-white/30 rounded-full 
            flex place-content-center place-items-center group-hover:bg-white/30
            z-[300]   transition duration-500 ease-in-out
            relative `,children:e.jsx(T,{className:" stroke-white fill-black w-[2rem] h-[2rem]"})})})]}),e.jsx("div",{className:` absolute top-0 w-full h-full
          flex place-content-center place-items-center px-[15px]`,children:e.jsxs("div",{className:` 
          max-w-[800px] mx-auto w-full z-[100]`,children:[e.jsx("div",{className:`text-center text-5xl text-white
                            font-extralight mb-[0px] tracking-wide font-poppins`,children:"Find The Best Businesses"}),e.jsx("div",{className:`text-center text-lg text-white
                            font-extralight mb-[20px]`,children:"Across Different Industries Around the World"}),e.jsx(M,{})]})})]})})},A=[{title:"Restaurants",link:"/web/search?q=restaurant",icon:e.jsx(F,{})},{title:"Shopping",link:"/web/search?q=shopping",icon:e.jsx(y,{})},{title:"Nightlife",link:"/web/search?q=nightlife",icon:e.jsx(C,{})},{title:"Entertainment",link:"/web/search?q=entertainment",icon:e.jsx(_,{})},{title:"Beauty & Spa",link:"/web/search?q=beauty and spa",icon:e.jsx(E,{})},{title:"Automotive",link:"/web/search?q=automotive",icon:e.jsx(N,{})},{title:"Home Services",link:"/web/search?q=home service",icon:e.jsx(H,{})},{title:"Real Estate",link:"/web/search?q=real estate",icon:e.jsx(z,{})}],I=()=>e.jsx("div",{className:"w-full relative mt-[50px] px-[15px]",children:e.jsxs("div",{className:"max-w-[1100px] mx-auto w-full",children:[e.jsx("div",{className:`relative font-sans text-2xl
        text-center font-black mb-8 border-b pb-5
        tracking-tight`,children:"Categories"}),e.jsx("div",{className:`grid grid-cols-2 gap-5
          sm:grid-cols-3 sm:gap-8
          lg:grid-cols-4 lg:gap-10`,children:A.map((a,i)=>e.jsx("div",{children:e.jsx(f,{to:`${a.link}`,children:e.jsxs("div",{className:`border-[1px] h-[140px] md:h-[200px]
                rounded hover:cursor-pointer border-gray-300
                hover:shadow-none flex flex-col
               place-items-center place-content-center
               gap-y-0 shadow-lg`,children:[e.jsx("div",{className:`text-[30px] w-12 h-12 rounded-full
                  flex place-items-center place-content-center
                  bg-gray-100`,children:a.icon}),e.jsx("div",{className:`text-base font-semibold
                  text-gray-500`,children:a.title})]})})},i))})]})}),ee=()=>[{title:"Grüthe | Business Directory, Travel, Real Estate, Hotels & Restaurants!"},{name:"Gr<i>ü</i>the",content:"Welcome to Grüthe!"}],te=()=>e.jsxs("div",{className:" h-screen ",children:[e.jsx("div",{className:"md:hidden",children:e.jsx(v,{})}),e.jsx("div",{className:"hidden md:block",children:e.jsx(G,{})}),e.jsx("div",{className:"",children:e.jsx(X,{})}),e.jsx(q,{category:"services",limit:8,title:"Recent Listings",subtitle:"Recent businesses or entities added by date."}),e.jsx(I,{}),e.jsx(L,{})]});export{te as default,ee as meta};
