import{j as e}from"./jsx-runtime-0DLF9kdB.js";import{z as d,u as y,s as S}from"./index-CORT_df8.js";import{r as o,a as k,L as p}from"./components-DN9bEK-g.js";import{w as P,W as C}from"./WhiteLogo-D0_DZqmS.js";import{u as E}from"./AuthContext-Bd05mLB0.js";import{u as R}from"./NotificationContext-DQtpxZot.js";import{t as u}from"./lib-DkU1NRFm.js";const F=d.object({username:d.string({message:"Please enter an email"}).min(7,{message:"Email must be greater than 7 characters"}).email({message:"Please enter a valid email"})}),L=()=>{var m;const[A,h]=o.useState(null),f=E(),[T,l]=o.useState(!1),n=R();k();const[i,g]=o.useState(!1),w="Please check email provided to continue.",b=a=>{let x=a.target.value,r=a.target.name;h(s=>({...s,[r]:x}))},j=async a=>{l(!0),n.notify(),await new Promise(c=>setTimeout(c,1e3));const r={email:a.username},s=await f.resetpw(r);JSON.stringify(s).includes("Error")?(l(!1),n.alertCancel("",u(s))):(n.alertCancel("",u(s)),await new Promise(c=>setTimeout(c,1e3)),l(!1),g(!0))},{register:v,handleSubmit:N,getValues:V,watch:$,setError:z,formState:{errors:t,isSubmitting:B}}=y({defaultValues:{},resolver:S(F)});return e.jsxs("div",{className:`w-[80%] h-fit grid grid-cols-1 lg:grid-cols-2
        mt-[100px] mb-[20px]  `,children:[e.jsx("div",{className:"hidden lg:block "}),e.jsx("div",{className:"place-content-center flex lg:place-content-end col-span-12 md:col-span-1",children:e.jsx("form",{onSubmit:N(j),children:e.jsxs("div",{className:`w-[350px] bg-white h-full rounded-2xl
                    flex flex-col place-items-center pt-[40px] pb-[40px]
                    px-[10px] `,children:[e.jsx("div",{className:P,children:e.jsx(C,{})}),e.jsx("div",{className:`text-[22px] text-center
                        mt-[30px] font-bold text-black`,children:"Forgot Password?"}),e.jsx("div",{className:`text-[15px] text-center
                        mt-[0px] font-light text-black`,children:"enter your email address below"}),e.jsxs("section",{className:`w-full
                            ${i&&"hidden"}`,children:[e.jsxs("div",{className:`w-full flex flex-col 
                        place-items-center mt-[30px]`,children:[e.jsx("input",{...v("username",{onChange:b}),placeholder:"Email address",type:"text",className:`border-b w-[85%]
                                px-[0px] py-1 text-[15px]
                                outline-none`}),(t==null?void 0:t.username)&&e.jsx("div",{className:`text-sm text-red-500 ml-[1px]
                                leading-[1.2em] mt-1`,children:(m=t==null?void 0:t.username)==null?void 0:m.message})]}),e.jsx("div",{className:`w-full flex flex-col 
                        place-items-center mt-[25px]`,children:e.jsx("button",{type:"submit",className:`w-[85%] bg-blue-600
                            py-[12px] text-[15px] rounded-full
                            text-white hover:bg-blue-700`,children:"Send recovery email"})})]}),e.jsx("section",{className:`${i?"block":"hidden"}
                            text-black. w-[90%] text-[17px] text-center
                            mt-[50px] mb-[25px] 
                            bg-yellow-50 text-yellow-900 px-1.5 py-2
                            rounded`,children:w}),e.jsx("div",{className:`w-full flex flex-col 
                                            place-items-center mt-[20px] `,children:e.jsx(p,{className:"w-[85%]",to:"/web/signin",children:e.jsx("div",{className:`border-b w-full
                                                    px-[0px] py-1 text-[14px]
                                                    outline-none hover:underline`,children:"Already have and account? Sign in"})})}),e.jsx("div",{className:`w-full flex flex-col 
                                            place-items-center mt-[20px]`,children:e.jsx(p,{to:"/web/signup",className:"w-[85%]",children:e.jsxs("button",{className:`w-full 
                                                py-[2px] text-[14px] rounded-full text-center
                                                text-blue-700 hover:bg-gray-100`,children:["No account yet? ",e.jsx("span",{className:"text-black",children:"Create an account"})]})})})]})})})]})},W=()=>e.jsx("div",{className:`bg-white w-full 
        md:bg-[url('https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1200')]
        bg-cover bg-center min-h-screen flex place-content-center`,children:e.jsx(L,{})}),I=()=>e.jsx("div",{children:e.jsx(W,{})});export{I as default};
