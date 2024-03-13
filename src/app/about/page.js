import Banner from "@/components/banner";
import FetchData from "@/components/restfetchdatafromapi/1/app";

const About = () => {
  return (
    <div className="mainContent">
      <Banner bannerStyle='bg-[red]' title="About" desc="Do id tempor laboris laboris sint cillum ad fugiat excepteur cupidatat do adipisicing mollit."/>
      <div className="container mx-auto">
        <FetchData/>
      </div>
    </div>  
  )
}

export default About
