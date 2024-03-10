import Banner from "@/components/banner";
// import CustomApp from "../repository/animation/balloonpopping/1/page";
// import TailwindCSSApp from "../tailwindcss/scrollsnaptype/1/page";
// import CustomApp from "../repository/menuicon/1/page";
import CustomApp from "../repository/tabbedHover/1/page";

const About = () => {
  const items = [
    { title: 'Item 1', desc: 'Content for item 1' },
    { title: 'Item 2', desc: 'Content for item 2' },
    // Add more items as needed
  ];
  
  return (
    <div className="mainContent clear-both">
      <Banner bannerStyle='bg-[red]' title="About" desc="Do id tempor laboris laboris sint cillum ad fugiat excepteur cupidatat do adipisicing mollit."/>
      {/* <TailwindCSSApp/> */}
      <CustomApp items={items}/>
    </div>  
  )
}

export default About
