import type { Route } from "../+types/root";
// import { useNavigate } from "react-router";
import Block from "~/components/Block";
import HParagraph from "~/components/HParagraph";
import TextBox from "~/components/TextBox";
import { Link } from "react-router";
import ClientSlider from "~/components/ClientSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GridContainer from "~/components/GridContainer";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Home - CMS" },
    { name: "description", content: "A Content Management System that's made with React Router v7 and Django from scratch" },
  ];
}

export default function Home() {
    // const navigate = useNavigate();
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 3000,
        cssEase: "ease",
        adaptiveHeight: false
    };

    return (
        <div className="page">
            <section id="hero-section" className="section section--nopx">
                <ClientSlider width="w-full" height="h-220" settings={settings}>
                    <div className="w-full h-screen overflow-hidden">
                        <img
                            src="/content.jpg"
                            className="w-full h-full object-cover object-center"
                        alt="Slide 1"
                        />
                    </div>
                    <div className="w-full h-screen overflow-hidden">
                        <img
                            src="/content2.jpg"
                            className="w-full h-full object-cover object-center"
                            alt="Slide 2"
                        />
                    </div>
                    <div className="w-full h-screen overflow-hidden">
                        <img
                            src="/content3.jpg"
                        className="w-full h-full object-cover object-center"
                            alt="Slide 3"
                        />
                    </div>
                </ClientSlider>
                <div className="absolute flex flex-col items-center">
                    <h1 className="font-heading mb-4 bg-linear-to-br 
                    from-primary via-white text-transparent to-primary
                    hover:from-white hover:via-primary hover:to-white]
                    text-6xl bg-clip-text">
                        A CMS That Actually Works<br/> — No Buzzwords.</h1>
                    <p className="max-w-2xl text-lg font-main">
                        Built from scratch with React Router v7 and Django. Fully open-source. 
                        Simple. Clean. Powerful.
                    </p>
                    <div>
                        <div className="mt-6 grid grid-cols-2 gap-4 w-full justify-center">
                            <Link to="/signup" className="button-primary">Get started</Link>
                            <a href="https://github.com/Bernardusz/CMS-Django-React" className="button-primary">
                                View on GitHub
                            </a> 
                        </div>
                        <a href="#how-it-works" className="button-primary mt-5 w-full">
                            Tech used    
                        </a>
                    </div>
                </div>


            </section>
            <hr className="w-full mt-40" />

            <section id="features" className="section">
                <div className="flex flex-col lg:grid grid-cols-2">
                    <HParagraph title="⚡ Modular Architecture" text="Made with 2 separate apps with separation of concerns in mind. Scalable and Maintainable"/>
                    <HParagraph title="💾 Built with Django + React Router v7" text="Made with 2 of the biggest frameworks in web industry."/>
                    <HParagraph title="🔐 JWT-ready Authentication" text="Secured with JSON Web Token, making sure users are safe."/>
                    <HParagraph title="🚀 API-first, SPA and SSR ready" text="Made with decoupled frontend that supports SPA and even SSR"/>
                </div>
            </section>

            <section id="how-it-works" className="section gap-10 lg:max-w-3xl scroll-mt-30">
                <div className="w-full">
                    <h1 className="font-heading text-3xl text-left">📚 How it works</h1>
                </div>
                <p className="max-w-2xl text-lg font-main">“No magic. Just Django, React, and clean architecture.”</p>
                <div className="w-full grid grid-cols-3 gap-5 justify-center items-stretch">
                    <Block text="User"/>
                    <Block text="React Router Page"/>

                    <Block text="React Router Fetch / Axios"/>
                    <Block text="Zustand Stored Access Token"/>
                    <Block text="Django REST"/>
                    <Block text="PostgreSQL"/>  
                </div>     
            </section>

            <section id="demos" className="section lg:max-w-3xl">
                <div className="w-full">
                    <h1 className="font-heading text-3xl text-left">📷 Demos</h1>
                </div>
                <div className="w-[80vw] mt-20">
                    Soon to be added demos!
                </div>
            </section>
            <section id="contribute" className="section lg:max-w-3xl">
                <div className="w-full">
                    <h1 className="font-heading text-3xl text-left">✨ Contribute</h1>
                </div>
                <p className="font-main text-xl mt-10">“This is open source. Fork it, break it, fix it.”</p>

                <div className="flex flex-row gap-5 p-2 mt-5">
                    <a 
                    href="https://github.com/Bernardusz/CMS-Django-React"
                    className="button-primary"
                    >⭐ Star on GitHub</a>
                    <a 
                    href="https://github.com/Bernardusz/CMS-Django-React"
                    className="button-primary"
                    >🐛 Report Bug</a>
                    <a 
                    href="https://github.com/Bernardusz/CMS-Django-React"
                    className="button-primary"
                    >💡 Suggest Feature</a>

                </div>
            </section>

            <section id="roadmap" className="section lg:max-w-3xl">
                <div className="w-full mb-10">
                    <h1 className="font-heading text-3xl text-left">🛣 Roadmap</h1>
                </div>
                <div className="section-nested mb-20">
                    <GridContainer>
                        <TextBox id="roadmap-mvp-0.5" heading="MVP - v0.5" listOfText={[
                        {id: 1, bullet: "🔒", text:"Authentication"},
                        {id: 2, bullet: "✏", text: "Simple CRUD Admin"},
                        {id: 3, bullet: "⛔", text: "Private & Public Content"},
                        {id: 4, bullet: "📖", text: "Dasboard UI"},
                        ]}/>
                        <TextBox id="roadmap-mvp-1" heading="v1.0" listOfText={[
                            {id: 1, bullet: "📚", text:"3 Roles editing"},
                            {id: 2, bullet: "📑", text: "Rich Text Editor"},
                            {id: 3, bullet: "👀", text: "Improved UI"},
                        ]}/>
                        <TextBox id="roadmap-mvp-2" heading="v2.0" listOfText={[
                            {id: 1, bullet: "🔒", text:"Better and Improved user roles and permissions"},
                            {id: 2, bullet: "📂", text: "Media manager (Upload, Preview)"},
                            {id: 3, bullet: "⏰", text: "Content scheduling"},
                            {id: 4, bullet: "🔍", text: "Search, Filter and Pagination"},
                            {id: 5, bullet: "📖", text: "Dashboard Analytics"},

                        ]}/>
                    </GridContainer>
                </div>
            </section>
        </div>
    );
}
