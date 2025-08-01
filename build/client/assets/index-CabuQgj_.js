import{j as e}from"./jsx-runtime-0DLF9kdB.js";import{z as i,u as v,s as N}from"./index-CORT_df8.js";import{r as u,a as S,L as g}from"./components-DN9bEK-g.js";import{u as y}from"./AuthContext-Cppis7Ha.js";import{u as P}from"./NotificationContext-CmxqxSem.js";import{w as k,W as E}from"./WhiteLogo-CBJbnFuS.js";import{f as C}from"./lib-Ddo6mlOM.js";const F=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,L=i.object({username:i.string({message:"Please enter an email"}).min(7,{message:"Email must be greater than 7 characters"}).email({message:"Please enter a valid email"}),password:i.string({message:"Please enter a password"}).min(8,"Password must be at least 8 characters").regex(F,"Please enter a valid password")}),W=()=>{const[T,h]=u.useState(null),o=y();if(!o)return null;const{signin:f}=o,[_,c]=u.useState(!1),a=P(),w=S(),x=t=>{let l=t.target.value,n=t.target.name;h(d=>({...d,[n]:l}))},b=async t=>{c(!0),a.notify(),await new Promise(r=>setTimeout(r,1e3));const l=t.username,n=t.password,p=await f({email:l,password:n});p===!0?(a.cancel(),w("/")):a.alertCancel("Complete Your Signup",p.message),await new Promise(r=>setTimeout(r,1e3)),c(!1)},{register:m,handleSubmit:j,getValues:z,watch:D,setError:I,formState:{errors:s,isSubmitting:V}}=v({defaultValues:{},resolver:N(L)});return e.jsxs("div",{className:`w-[80%] h-fit grid grid-cols-1 lg:grid-cols-2
        mt-[100px] mb-[20px] `,children:[e.jsx("div",{className:"hidden lg:block "}),e.jsx("div",{className:"place-content-center flex lg:place-content-end col-span-12 md:col-span-1",children:e.jsx("form",{onSubmit:j(b),children:e.jsxs("div",{className:`w-[350px] bg-white h-full rounded-2xl
                    flex flex-col place-items-center pt-[40px] pb-[40px]
                    px-[10px] `,children:[e.jsx("div",{className:k,children:e.jsx(E,{})}),e.jsx("div",{className:`text-[22px] text-center
                        mt-[30px] font-bold text-black`,children:"Sign in to your account"}),e.jsxs("div",{className:`text-[15px] text-center
                        mt-[0px] font-light text-black`,children:["using your ",e.jsx("b",{className:"font-bold text-black",children:C.SITENAME})," ID."]}),e.jsxs("div",{className:`w-full flex flex-col 
                        place-items-center mt-[30px]`,children:[e.jsx("input",{...m("username",{onChange:x}),placeholder:"Email address",type:"text",className:`border-b w-[85%]
                                px-[0px] py-1 text-[15px]
                                outline-none`}),e.jsx("div",{className:"w-[85%]",children:(s==null?void 0:s.username)&&e.jsx("div",{className:"ml-1 text-red-600 text-[13px]",children:s.username.message})})]}),e.jsxs("div",{className:`w-full flex flex-col 
                        place-items-center mt-[15px] `,children:[e.jsx("input",{...m("password",{onChange:x}),placeholder:"Password",type:"password",className:`border-b w-[85%]
                                px-[0px] py-1 text-[15px]
                                outline-none`}),e.jsx("div",{className:"w-[85%]",children:(s==null?void 0:s.password)&&e.jsx("div",{className:"ml-1 text-red-600 text-[13px]",children:s.password.message})})]}),e.jsx("div",{className:`w-full flex flex-col 
                        place-items-center mt-[25px]`,children:e.jsx("button",{className:`w-[85%] bg-blue-600
                            py-[12px] text-[15px] rounded-full
                            text-white hover:bg-blue-700`,children:"Sign in"})}),e.jsx("div",{className:`w-full flex flex-col 
                                            place-items-center mt-[20px] `,children:e.jsx(g,{className:"w-[85%]",to:"/web/reset_password",children:e.jsx("div",{className:`border-b w-full
                                                    px-[0px] py-1 text-[14px]
                                                    outline-none hover:underline`,children:"Forgot Password?"})})}),e.jsx("div",{className:`w-full flex flex-col 
                                            place-items-center mt-[20px]`,children:e.jsx(g,{to:"/web/signup",className:"w-[85%]",children:e.jsx("button",{className:`w-full 
                                                py-[2px] text-[14px] rounded-full text-center
                                                text-blue-700 hover:bg-gray-100`,children:"Don't have account yet? Sign up!"})})})]})})})]})},A=()=>e.jsx("div",{className:`bg-white w-full 
        md:bg-[url('/images/oiltanker.jpg')]
        bg-cover bg-center min-h-screen flex place-content-center`,children:e.jsx(W,{})}),q=()=>e.jsx("div",{children:e.jsx(A,{})});export{q as default};
