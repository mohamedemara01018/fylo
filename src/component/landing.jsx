import img1 from '../assets/illustration-intro.png'
import img2 from '../assets/bg-curvy-desktop.svg'
function Landing() {
    return (
        <section className="mt-40 sm:mt-32    pt-24 bg-[#1d2435] ">
            <div className="container">
                <div className="w-[750px] max-w-full mx-auto">
                    <img src={img1} className="w-full h-fit" alt="laning-img" />
                </div>
                <div className="text-white text-center">
                    <h1 className="text-[30px] md:text-[40px] font-semibold mb-6">All your files in one secure location,<br /> accessible anywhere</h1>
                    <p className="font-normal text-lg px-4 md:w-[600px]  mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloremque quasi iste maiores voluptatibus reiciendis corrupti repellat, assumenda molestiae autem!</p>
                </div>
                <div className="element-center mt-10">
                    <a href="" className="btn w-[280px] h-[60px] text-center text-white element-center font-medium rounded-[33px]  ">Get started</a>
                </div>
            </div>
            <img src={img2} className="h-[250px] w-full" alt="" />
        </section>
    )
}

export default Landing