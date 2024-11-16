import { useEffect, useState } from "react"

function Header () {
    const [links,setlink] = useState(['Features','Team','Signin'])
    const [condition,setCondition]=useState('')
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100) {
                setCondition('pt-3 bg-slate-600')
            }else {
                setCondition('pt-10,bg-transparent')
            }
        })
    },[])
    return (
        <header className={`fixed top-0 left-0 w-full pt-10  p-3 transition-all duration-200 ${condition}`}>
            <div className={`container flex justify-between items-center gap-4 sm:gap-none flex-col sm:flex-row `}>
                <a href="/"><img src="./src/assets/logo.svg" alt="" /></a>
                <ul className="flex gap-10 text-white text-[17px]">
                    {
                        links.map((link)=>{
                            return( 
                                <li key={link}>
                                    <a href={`/${link.toLowerCase()}`} className="hover:text-cyan-400 transition-colors duration-200">{link}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header