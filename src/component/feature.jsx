import { useState } from "react"
import img1 from '../assets/icon-access-anywhere.svg'
import img2 from '../assets/icon-collaboration.svg'
import img3 from '../assets/icon-any-file.svg'
import img4 from '../assets/icon-access-anywhere.svg'
function Feature() {
    const [boxs, setBox] = useState([
        { img: img1, title: 'Access your files,anywhere', desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit debitis nih` },
        { img: img2, title: 'Real-time collaboration', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit debitis nih' },
        { img: img3, title: 'Store any type of file', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit debitis nih' },
        { img: img4, title: 'Access your files', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit debitis nih' }
    ])
    return (
        <section className="pt-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">

                    {
                        boxs.map((box) => {

                            return <FeatureBox key={box.title} img={box.img} title={box.title} desc={box.desc} />
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Feature

function FeatureBox({ img, title, desc }) {

    return (
        <div className="element-center flex-col ">
            <img src={img} className="w-[80px] h-[80px] object-contain" alt="" />
            <div className="text-white element-center max-w-full flex-col text-center">
                <h4 className="text-xl font-semibold my-3">{title}</h4>
                <p className="font-normal text-sm w-[360px] max-w-full w-92 ">{desc}</p>
            </div>
        </div>
    )
}