import { useState } from "react"
import img1 from '../assets/logo.svg'
import img2 from '../assets/icon-location.svg'
import img3 from '../assets/icon-phone.svg'
import img4 from '../assets/icon-email.svg'

function Footer() {
    const [phone, setPhone] = useState(
        [
            { img: img3, data: '+201018759812' },
            { img: img4, data: 'email@example.com' }
        ]
    )
    const [about, setAbout] = useState([
        'About Us',
        'Jobs',
        'priacy',
        'Blog'
    ])

    const [contact, setContact] = useState([
        'Contact Us',
        'Terms',
        'Privacy',
    ])
    const [icons, setIcon] = useState([
        'fa-brands fa-facebook-f',
        'fa-brands fa-twitter',
        'fa-brands fa-instagram',
    ])
    return (
        <footer className="bg-slate-950 pt-52 pb-24 relative -z-20">
            <div className="container">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className="text-white text-sm element-center flex-wrap mt-10 gap-28">
                    <div className="flex items-start gap-2">
                        <img src={img2} alt="" />
                        <p className=" w-[300px] sm:w-[400px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores cum eius tempore harum temporibus cupiditate nulla! Totam, id exercitationem.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {
                            phone.map((p) => {
                                return <div key={p.img} className="flex gap-3">
                                    <img src={p.img} alt="" />
                                    <h3>{p.data}</h3>
                                </div>
                            })
                        }
                    </div>
                    <div className="flex gap-8">
                        <div>
                            {
                                about.map((a) => {
                                    return <About_and_Contact key={a} data={a} />
                                })
                            }
                        </div>
                        <div>
                            {
                                contact.map((c) => {
                                    return <About_and_Contact key={c} data={c} />
                                })
                            }
                        </div>
                    </div>
                    <div className="flex gap-5">
                        {
                            icons.map((i) => {
                                return <div key={i} className="border-[1px] groub cursor-pointer hover:border-teal-400  w-9 h-9 rounded-full element-center">
                                    <i className={`${i} groub-hover:text-teal-400`}></i>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

function About_and_Contact({ data }) {
    return (
        <>
            {
                (data == 'Contact Us' || data == 'About Us') ? (
                    <a href=""><h3>{data}</h3></a>
                ) : (<a href="" className="block cursor-pointer">{data}</a>)
            }
        </>
    )
}