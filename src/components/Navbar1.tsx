import { Navbar } from 'flowbite-react';

export const Navbar1 = () => {
    return (
    <Navbar fluid className='bg-blue1 md:px-20 sticky top-0'>
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-xwhite">ARYA HANIF</span>
        </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" className='text-xwhite text-[1.1rem] md:hover:underline md:hover:text-xwhite'>Home</Navbar.Link>
          <Navbar.Link href="#" className='text-xwhite text-[1.1rem] md:hover:underline md:hover:text-xwhite'>Project</Navbar.Link>
          <Navbar.Link href="#" className='text-xwhite text-[1.1rem] md:hover:underline md:hover:text-xwhite'>Contact</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

