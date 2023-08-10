import Image from "next/image"
import Logo from '../../../public/Images/logo.png'

const Footer = () => {
  return (
    <>
        <div className="w-full h-20 bg-amazone_light flex justify-center items-center gap-4 text-gray-300">
            <Image className="w-24" src={Logo} alt="Footer Logo"/>
            <p className="text-sm -mt-4">
                All Rights Rre Reserved {" "}
            </p>
        </div>
    </>
  )
}

export default Footer