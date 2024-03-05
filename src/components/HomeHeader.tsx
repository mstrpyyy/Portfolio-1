import { TypeAnimation } from 'react-type-animation'
import FotoProfil from '../assets/20200604_213548.jpg'

export const HomeHeader = () => {
    return (
        <div className="flex justify-evenly items-center bg-gradient-to-b from-blue1 to-xblack h-[90vh]">
            <img src={FotoProfil} className=" rounded-[50%] w-[450px]"/>
            <div className="flex flex-col w-[600px]">
                <h1 className=" text-xwhite text-[3rem]">Hello! I'm <span className="text-blue2">Arya Hanif  </span><span><img src="https://media.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif" width={600} className="w-[70px] inline"></img></span></h1>
                <div className=" text-xwhite text-[2rem]">
                <TypeAnimation
                        sequence={[
                            
                            'a Web Developer',
                            1000,
                            'a UI/UX Designer',
                            1000,
                            'a Digital Marketing',
                            1000,
                            'a Data Scientist',
                            1000,
                        ]}
                        speed={20}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                        />
                </div>
                <a href="#about" className="bg-gradient-to-tr from-blue2 to-blue1 p-2 rounded-md mt-6 w-[12rem] text-center text-xwhite transition-all duration-500 hover:shadow-[0px_0px_30px_-10px_rgba(0,0,0,1)] hover:scale-105 text-[1.2rem]">Get to know me ↓</a>
            </div>
        </div>
    )
}