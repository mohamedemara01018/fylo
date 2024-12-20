import { useState } from "react"
import Getaccess from "./getAccess"
import img1 from '../assets/bg-quotes.png'
import img2 from '../assets/profile-1.jpg'
import img3 from '../assets/profile-2.jpg'
import img4 from '../assets/profile-3.jpg'
function Testmon() {
    const [data, setData] = useState([
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae sed ex sequi voluptate nam, sit incidunt reprehenderit necessitatibus mollitia eius magni quas tempore cupiditate impedit perferendis esse fugit tenetur!',
            img: img2,
            name: 'Ahmed',
            about: 'Founder & CEO, Huddle'
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae sed ex sequi voluptate nam, sit incidunt reprehenderit necessitatibus mollitia eius magni quas tempore cupiditate impedit perferendis esse fugit tenetur!',
            img: img3,
            name: 'Mohamed',
            about: 'Founder & CEO, Huddle'
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae sed ex sequi voluptate nam, sit incidunt reprehenderit necessitatibus mollitia eius magni quas tempore cupiditate impedit perferendis esse fugit tenetur!',
            img: img4,
            name: 'Eman',
            about: 'Founder & CEO, Huddle'
        },
    ])
    return (
        <section className="mt-[120px]" >
            <div className="container relative">
                <img src={img1} className="absolute top-[-35px] left-6 -z-20 " alt="" />
                <div className="box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative -z-10 ">
                    {
                        data.map((d) => {
                            return <Test key={d.img} desc={d.desc} img={d.img} name={d.name} about={d.about} />
                        })
                    }
                </div>
                <div className="relative -z-10 mt-32">
                    <Getaccess />
                </div>
            </div>
        </section>
    )
}
export default Testmon






function Test({ desc, img, name, about }) {
    return (
        <div className=" text-white bg-slate-800 rounded-md p-5 shadow-[4px_4px_8px_4px_#181727]">
            <p>{desc}</p>
            <div className="element-center justify-start mt-7 gap-3">
                <img src={img} className="rounded-full w-[80px] h-[80px]" alt="" />
                <div>
                    <strong className="text-lg ">{name}</strong>
                    <p >{about}</p>
                </div>
            </div>
        </div>
    )
}