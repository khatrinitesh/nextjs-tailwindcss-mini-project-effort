import Banner from "@/components/banner";
import CustomApp from "../repository/animation/balloonpopping/1/page";
import TailwindCSSApp from "../tailwindcss/scrollsnaptype/1/page";

const About = () => {
  // const items = [
  //   { title: 'Item 1', desc: 'Content for item 1' },
  //   { title: 'Item 2', desc: 'Content for item 2' },
  //   // Add more items as needed
  // ];
  
  return (
    <div className="mainContent clear-both">
      <Banner bannerStyle='bg-[red]' title="About" desc="Do id tempor laboris laboris sint cillum ad fugiat excepteur cupidatat do adipisicing mollit."/>
      <TailwindCSSApp/>
      <CustomApp/>
    </div>  
  )
}

export default About
