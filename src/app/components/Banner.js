'use client'
import { Carousel } from 'react-responsive-carousel'
import SlideImg1 from '../../../public/Images/slider/sliderImg_1.jpg'
import SlideImg2 from '../../../public/Images/slider/sliderImg_2.jpg'
import SlideImg3 from '../../../public/Images/slider/sliderImg_3.jpg'
import SlideImg4 from '../../../public/Images/slider/sliderImg_4.jpg'
import Image from 'next/image'

const Banner = () => {
    return (
        <>
            <div className='relative'>
                <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false} showStatus={false} interval={3000}>
                    <div>
                        <Image src={SlideImg1} alt='slider1' />
                    </div>
                    <div>
                        <Image src={SlideImg2} alt='slider2' />
                    </div>
                    <div>
                        <Image src={SlideImg3} alt='slider3' />
                    </div>
                    <div>
                        <Image src={SlideImg4} alt='slider4' /> 
                    </div>
                </Carousel>
                <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'>
                </div>
            </div>
        </>
    )
}

export default Banner