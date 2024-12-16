import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderSwiper from "../../headerSwiper/HeaderSwiper.jsx";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../Component/NavBar/NavBar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import Sections from "../../sectionslider/Sections.jsx";
import LastAdd from "../../lastadd/LastAdd.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contactusc from "../../Component/Contactusc/Contactusc.jsx";
// @ts-ignore
import img1 from "../../../public/image/nodata.png";
// @ts-ignore
import img2 from "../../../public/image/Group46974.svg";
// @ts-ignore
import img3 from "../../../public/image/98877.svg";
// @ts-ignore
import img4 from "../../../public/image/Group20570.svg";
// @ts-ignore
import img5 from "../../../public/image/rotated-right-arrow-svgrepo-com2.svg";
// @ts-ignore
import img6 from "../../../public/image/94539.png";
// @ts-ignore
import img7 from "../../../public/image/Group20570.png";
// @ts-ignore
import img8 from "../../../public/image/rotated-right-arrow-svgrepo-com.svg";
// @ts-ignore
import img9 from "../../../public/image/logo-3.png";
// @ts-ignore
import img10 from "../../../public/image/Group205703.png";
// @ts-ignore
import img11 from "../../../public/image/Group20581.png";
// @ts-ignore
import img12 from "../../../public/image/Group20582.png";
// @ts-ignore
import img13 from "../../../public/image/Group20583.png";
// @ts-ignore
import img14 from "../../../public/image/Group46951.png";

const Home = () => {
  const [howwe, setHowWe] = useState([]);
  const [start, setStart] = useState([]);
  const [upload, setUpload] = useState([]);
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(null);

  const changee = (event) => {
    setSearch(event.target.value);
    setResponse(null);
  };
  const [about, setAbout] = useState([]);

  const sent = () => {
    getdata();
  };
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://api-atmemly.luxurylivinghomes.ae/api/pages/home"
      );
      // console.log(res.data.data.upload_app.locales.en.description);
      setHowWe(res.data.data.how_do_we_work.en.description);
      setStart(res.data.data.start_your_project.en.description);
      setUpload(res.data.data.upload_app.locales.en.description);
    }
    getData();
  }, []);

  useEffect(() => {
    async function about() {
      const res = await axios.get(
        "https://api-atmemly.luxurylivinghomes.ae/api/pages/general"
      );
      setAbout(res.data.data.site_description.en.description);
    }
    about();
  }, []);

  async function getdata() {
    const res = await axios.get(
      `https://api-atmemly.luxurylivinghomes.ae/api/search/${search}`
    );

    setResponse(res.data.data);
    console.log(res.data.data);
  }
  console.log(response);
  return (
    <>
      <NavBar />

      <section id="hero">
        <div className="container mx-auto  space-x-6 flex lg:flex-row max-md:flex-col-reverse max-md:items-center md:flex-col-reverse   justify-between mt-[3rem]  ">
          <div className="flex flex-col justify-center w-1/2 2xl:ml-20 max-md:w-[100%] md:w-[100%] ">
            <h1 className="max-sm:w-[80%] max-sm:ml-5 max-sm:text-3xl max-sm:font-bold max-sm:leading-[60px] max-sm:pt-8 max-md:leading-[60px]  md:text-4xl  md:font-bold max-md:text-3xl max-md:font-bold lg:ml-1 2xl:font-bold  lg:w-[95%] lg:text-5xl lg:font-bold  lg:pt-8   2xl:text-6xl 2xl:leading-[75px] xl:w-[100%] xl:text-5xl xl:font-bold xl:leading-[70px] xl:pt-8  fonts-pops text-neutral-700 md:w-[100%] lg:leading-[80px]  md:leading-normal ">
              We have a selection of the best{" "}
              <span className="text-sky-300">Freelancers</span> in the{" "}
              <span className="text-sky-300">Arab</span>
              World
            </h1>
            <h3 className="max-md:leading-[30px] max-sm:ml-5 md:leading-[35px] lg:ml-1 lg:w-[95%] lg:text-2xl lg:font-semibold  lg:pt-8 2xl:text-[27px] xl:text-[25px] xl:font-semibold  	 text-neutral-400 font-normal	fonts-pops pt-6   md:text-2xl">
              We have a selected group of freelancers from various Arab worlds.
              You can get your service here with high quality and efficiency in
              many fields
            </h3>
            <div className="flex justify-between gap-1 lg:mt-12 lg:ml-1 max-md:mt-10 md:mt-6 ">
              <input
                onChange={changee}
                value={search}
                type="text"
                placeholder="Search"
                className=" 
                max-sm:ml-5
                md:p-4
md:rounded-tl-lg  md:rounded-bl-lg
md:text-sm md:w-[100%] md:rounded-tr-2xl md:rounded-br-[100px]

max-sm:rounded-tl-lg  max-sm:rounded-bl-lg
max-sm:text-sm max-sm:w-[100%] max-sm:rounded-tr-2xl max-sm:rounded-br-[100px]

                lg:text-sm lg:rounded-bl-lg lg:py-1 lg:rounded-tl-lg border border-neutral-400  2xl:rounded-tl-lg  xl:text-sm xl:rounded-bl-lg xl:py-1 xl:rounded-tl-lg   2xl:rounded-bl-lg 2xl:py-1 lg:p-4 max-md:p-2 lg:pl-3  max-md:rounded-tl-lg  max-md:rounded-bl-lg  lg:rounded-tr-2xl lg:rounded-br-[100px]  max-md:text-sm max-md:w-[100%] max-md:rounded-tr-2xl max-md:rounded-br-[100px]"
              />

              <button
                onClick={sent}
                className="  lg:py-4 lg:text-base lg:rounded-br-lg lg:rounded-tr-lg 2xl:py-4 2xl:text-base  xl:py-4 xl:text-base xl:rounded-br-lg xl:rounded-tr-lg  font-pops bg-sky-300   hover:bg-white text-white  hover:text-sky-300   border border-sky-300 hover:border-sky-300      lg:px-11  lg:rounded-tl-[100px] lg:rounded-bl-xl  transition-all ease-in-out duration-300
               max-md:py-4 max-md:text-base max-md:rounded-br-lg max-md:rounded-tr-lg
max-md:px-11  max-md:rounded-tl-[100px] max-md:rounded-bl-xl

max-sm:py-4 max-sm:text-xs max-sm:rounded-br-lg max-sm:rounded-tr-lg
max-sm:px-10  max-sm:rounded-tl-[100px] max-sm:rounded-bl-xl max-sm:mr-3

  md:py-4 md:text-xs md:rounded-br-lg md:rounded-tr-lg
md:px-10  md:rounded-tl-[100px] md:rounded-bl-xl

                "
              >
                Search
              </button>
            </div>
            <div>
              <ul>
                {response?.map((item) => {
                  if (item.slug === "test" && search !== "") {
                    return (
                      <li
                        key={item.id}
                        className="w-[100%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex-g"
                      >
                        {item.title}
                        <Link
                          to="/services"
                          className="bg-sky-300 hover:bg-white text-white hover:text-sky-300 border border-sky-300 hover:border-sky-300 px-4 py-2 rounded-lg transition-all ease-in-out duration-300 ml-[230px]"
                        >
                          Service
                        </Link>
                      </li>
                    );
                  }
                })}
                {response?.length === 0 && search !== "" && (
                  <li className="w-[100%] h-[300px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-col">
                      <img
                        src={img1}
                        alt="No Data"
                        className="mx-auto my-auto mt-16"
                      />
                      <p className="mx-auto my-auto mt-4">No data found</p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2 max-md:w-[75%] md:w-1/2">
            <HeaderSwiper />
          </div>
        </div>
      </section>

      <section id="how we">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center mt-11 xl:w-[66%]  xl:mt-32  lg:w-[75%] lg:mt-32 ">
          <h1 className=" max-sm:ml-32 max-md:container md:text-5xl max-md:text-5xl max-md:mt-10   2xl:text-6xl xl:text-5xl lg:text-5xl font-medium fonts-pops text-neutral-700 text-sky-300">
            How we work ?
          </h1>

          <img src={img2} className="mt-6" alt="" />

          <span className="mt-3 ">
            <h1 className=" md:w-[100%] md:text-[11px] max-md:w-[100%]  max-md:text-[11px]    lg:text-[12px]  lg:w-[100%] xl:text-[12px]  xl:w-[100%] font-medium  fonts-pops text-neutral-700  text-[14px] w-[909px] text-center leading-6 ">
              {howwe}
            </h1>
          </span>
        </div>
      </section>

      <section id="ask for" className="flex items-center justify-center mt-10">
        <div className="lg:container max-md:container md:flex md:flex-nowrap md:w-[90%] border border-neutral-300 flex justify-center items-center lg:p-[30px] lg:w-[88%]  xl:w-[100%] xl:p-[30px] xl:py-0 max-md:flex-col max-md:pt-0  ">
          <div className="flex flex-col items-center justify-center w-1/3 py-12 xl:m-11 xl:py-8 md:w-full">
            <img src={img3} alt="" className="mt-3 xl:w-[90px] lg:w-[75px]" />
            <img src={img4} alt="" className="mt-3  lg:w-[30px]" />
            <h1 className=" mt-3 mb-2 lg:text-xl 2xl:text-3xl font-semibold text-sky-300 font-pops xl:text-2xl  ">
              Browse services
            </h1>
            <h2 className="max-md:text-[10px] md:text-[10px] mt-2 2xl:font-light text-center font-pops lg:text-[10px] lg:font-thin  xl:text-xs">
              Explore and compare services to choose what suite you the most
            </h2>
          </div>

          <img
            src={img5}
            alt=""
            className="xl:inline lg:hidden max-md:hidden md:hidden"
          />

          <div className="flex flex-col items-center justify-center w-1/3 py-12 xl:m-11 xl:py-8 md:w-full  ">
            <h1 className="md:text-xl max-md:text-[20px] mt-3 mb-2 text-3xl font-semibold text-sky-300 font-pops lg:text-xl xl:text-2xl">
              Ask for service
            </h1>
            <h2 className="max-md:text-[10px] md:text-[10px] mt-2 font-light text-center font-pops xl:text-xs lg:text-[10px] lg:font-thin">
              Make an order then follow up implementation with the freelancer
            </h2>
            <img src={img6} alt="" className="mt-3 xl:w-[90px] lg:w-[90px] " />
            <img src={img7} alt="" className="mt-3 lg:w-[30px]" />
          </div>

          <img
            src={img8}
            alt=""
            className="xl:inline lg:hidden max-md:hidden md:hidden"
          />

          <div className="flex flex-col items-center justify-center w-1/3 py-12 xl:m-11 xl:py-8 md:w-full">
            <img
              src={img9}
              alt=""
              className="mt-3 xl:w-[90px] lg:w-[90px] max-md:w-[100px]"
            />
            <img
              src={img10}
              alt=""
              className="mt-3 lg:w-[30px] max-md:[50px]"
            />
            <h1 className="max-md:text-[20px] mt-3 mb-2 text-3xl font-semibold text-sky-300 font-pops lg:text-xl xl:text-2xl">
              Receive
            </h1>
            <h2 className="max-md:text-[10px] md:text-[10px] mt-2 font-light text-center font-pops xl:text-xs lg:text-[10px] lg:font-thin">
              Receive your service with quality and time agreed on
            </h2>
          </div>
        </div>
      </section>

      <section
        id="about us"
        className="flex justify-center items-center  mt-10 bg-zinc-50  py-[62px] max-md:flex-col  "
      >
        <div className="container flex items-center justify-center w-1/2 max-md:w-[100%] ">
          <img
            src={img11}
            alt="about-logo"
            className="mr-36 2xl:w-[60%] lg:w-[75%] max-xl:w-[75%] lg:mr-4 max-md:ml-28    "
          />
        </div>
        <div className="container flex flex-col w-1/2 place-items-start max-md:place-content-start max-md:mt-6 ">
          <span className="lg:text-xs xl:text-[12px] px-8 py-3 text-sm rounded-lg bg-cyan-50 text-sky-300 font-pops text-bold ">
            Who we are
          </span>
          <h1 className="md:text-5xl max-md:text-3xl xl:text-4xl mt-3 lg:text-3xl 2xl:text-5xl font-semibold text-sky-300 font-pops ">
            About Us
          </h1>
          <h3 className="max-md:text-base max-md:w-[100%] lg:text-sm lg:text-wrap lg:w-[90%] max-xl:w-[75%] xl:text-sm mt-8 font-light font-pops mb-48 text-neutral-400 text-left 2xl:w-[75%] 2xl:text-xl">
            {about}
          </h3>
          <button className="    max-md:px-3 max-md:text-xs lg:text-sm lg:px-8 lg:py-4 xl:text-sm xl:px-8 xl:py-4 py-3 text-center text-white transition-all duration-300 ease-in-out border rounded-lg bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:border-sky-300 px-14">
            Show More
            <FontAwesomeIcon icon={faAnglesRight} className="ml-4" />
          </button>
        </div>
      </section>

      <section
        id="sections  "
        className="flex items-center justify-center mt-9 "
      >
        <div className="container flex flex-col items-center justify-center">
          <h1 className="md:text-5xl max-md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-semibold text-sky-300 font-pops">
            Sections
          </h1>
          <img src={img2} className="mt-4 pb-14" alt="" />
          <Sections />
        </div>
      </section>

      <section
        id="start your"
        className="  items-center justify-center mt-16 align-center bg-zinc-50
        max-md:flex max-md:flex-col max-md:items-center
        md:flex  md:items-center
        "
      >
        <div className="  max-md:flex max-md:flex-col max-md:items-center container flex flex-col  mt-16 place-items-start xl:w-2/3  justify-between lg:w-1/2 lg:-ml-28">
          <h1 className=" md:text-5xl max-md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl 2xl:font-semibold text-sky-300 font-pops ">
            Start your own project now
          </h1>
          <h3 className="max-md:flex max-md:flex-col max-md:text-center  max-md:text-xs max-md:leading-6 max-md:w-[75%] mt-8 2xl:font-light xl:text-sm lg:text-sm font-pops mb-10 text-neutral-800 text-left 2xl:w-[720px] ">
            {start}
          </h3>
        </div>
        <button
          className=" 
          2xl:ml-0
          md:mb-7
          max-md:mb-7 max-md:px-6 max-md:text-xs  
        lg:ml-32 lg:text-sm lg:px-1 lg:py-2  lg:w-[20%]
        xl:ml-32 xl:text-sm xl:px-8 xl:py-4 py-3 text-center text-white transition-all duration-300 ease-in-out border rounded-lg bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:border-sky-300 px-14"
        >
          Start Now
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="xl:ml-4 lg:ml-2 max-md:ml-5"
          />
        </button>
      </section>

      <section
        id="last add"
        className="flex items-center justify-center mb-16 mt-9 "
      >
        <div className="container flex flex-col items-center justify-center">
          <h1 className="md:text-5xl max-md:text-5xl  lg:text-5xl  mt-16 xl:text-5xl xl:font-semibold text-sky-300 font-pops">
            Latest Added services
          </h1>
          <img src={img2} className="mt-4 pb-14 " alt="" />
          <LastAdd />
        </div>
      </section>
      <section className="bg-zinc-50">
        <div
          id="upload"
          className="flex justify-center items-center lg:mt-9  bg-zinc-50 gap-40 container mx-auto lg:pt-[72px] max-md:flex max-md:flex-col max-md:pt-7"
        >
          <div className=" container flex flex-col w-1/2 place-items-start max-md:flex max-md:flex-col max-md:items-center max-md:mt-0 ">
            <h1 className=" max-sm:text-3xl  md:text-4xl md:mt-3 max-md:text-4xl lg:text-[50px] lg:font-normal lg:pl-7  xl:text-[50px] xl:font-medium 2xl:text-5xl 2xl:font-semibold text-sky-300 font-pops  ">
              Upload App Now
            </h1>
            <h4 className=" max-sm:text-[11px] max-sm:text-nowrap max-md:flex max-md:flex-col max-md:text-center max-md:text-xs lg:text-[15px] lg:font-normal lg:pl-7  xl:text-base xl:font-light mt-8 mb-16 font-light font-pops ">
              {upload}
            </h4>
            <div className="lg:flex gap-5 lg:w-[50%] max-md:flex  max-md:items-center max-md:justify-center md:flex md:items-center md:justify-center ">
              <img src={img12} alt="ios" className="max-md:w-48 md:ml-52" />
              <img src={img13} alt="ios" className="max-md:w-48" />
            </div>
          </div>
          <div className="container w-1/2 xl:w-1/3 lg:w-1/3 lg:mr-14 max-md:w-72 max-md:mt-0">
            <img src={img14} alt="atmemly-log" className="mx-auto" />
          </div>
        </div>
      </section>
      <Contactusc />
      <Footer />
    </>
  );
};

export default Home;
