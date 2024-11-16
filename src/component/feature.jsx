import { useState } from "react"

function Feature() {
    const [boxs, setBox] = useState([
        { icon: 'icon-access-anywhere.svg', title: 'Access your files,anywhere', desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit debitis nih` },
        { icon: 'icon-collaboration.svg', title: 'Real-time collaboration', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit debitis nih' },
        { icon: 'icon-any-file.svg', title: 'Store any type of file', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit debitis nih' },
        { icon: 'icon-access-anywhere.svg', title: 'Access your files', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit debitis nih' }
    ])
    return (
        <section className="pt-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">

                    {
                        boxs.map((box) => {

                            return <FeatureBox key={box.title} icon={box.icon} title={box.title} desc={box.desc} />
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Feature

function FeatureBox({ icon, title, desc }) {
    return (
        <div className="element-center flex-col ">
            <img src={`src/assets/${icon}`} className="w-[80px] h-[80px] object-contain" alt="" />
            <div className="text-white element-center max-w-full flex-col text-center">
                <h4 className="text-xl font-semibold my-3">{title}</h4>
                <p className="font-normal text-sm w-[360px] max-w-full w-92 ">{desc}</p>
            </div>
        </div>
    )
}