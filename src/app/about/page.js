import Banner from "@/components/banner";
import CustomApp from "../repository/formvalidation/1/page";
import TailwindCSSApp from "../tailwindcss/gridtemplatecolumns/1/page";

const About = () => {
  return (
    <div className="mainContent">
      <Banner bannerStyle='bg-[red]' title="About" desc="Do id tempor laboris laboris sint cillum ad fugiat excepteur cupidatat do adipisicing mollit."/>
      <TailwindCSSApp/>
      <CustomApp/>
    </div>
  )
}

export default About
