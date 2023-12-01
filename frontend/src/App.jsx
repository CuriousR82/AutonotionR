import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Arts from "./pages/Arts";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { useLocation } from 'react-router-dom';


function App() {
    // scroll to top on page change
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // light/dark mode management
    const [isLight, setIsLight] = useState(true);
    const toggleMode = () => { setIsLight(!isLight); };

    // fetch data here from the server of this link
    const APILink = "http://localhost:4000";
    // Later, change this to your own vercel server link.
    // const APILink = process.env.REACT_APP_VERCEL_SERVER_LINK;

    // Art Data
    const [artData, setArtData] = useState([]);
    const [artLoading, setArtLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${APILink}/art-data`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const dataFromServer = await response.json();
                setArtData(dataFromServer.results);
                console.log(dataFromServer.results);
                setArtLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setArtLoading(false);
            }
        };

        fetchData();
    }, []);

    // Project Data
    const [projectData, setProjectData] = useState([]);
    const [projectLoading, setProjectLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${APILink}/project-data`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const dataFromServer = await response.json();
                setProjectData(dataFromServer.results);
                console.log(dataFromServer.results);
                setProjectLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setProjectLoading(false);
            }
        };

        fetchData();
    }, []);

    // Experience Data
    const [expData, setExpData] = useState([]);
    const [expLoading, setExpLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${APILink}/experience-data`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const dataFromServer = await response.json();
                setExpData(dataFromServer.results);
                console.log(dataFromServer.results);
                setExpLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setExpLoading(false);
            }
        };

        fetchData();
    }, []);

    // Personal Data
    const [personalData, setPersonalData] = useState([]);
    const [personalLoading, setPersonalLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${APILink}/personal-data`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const dataFromServer = await response.json();
                setPersonalData(dataFromServer.results);
                console.log(dataFromServer.results);
                setPersonalLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setPersonalLoading(false);
            }
        };

        fetchData();
    }, []);


    // checking for loading completion on console
    if (!artLoading && !projectLoading && !expLoading && !personalLoading) console.log("finished loading");

    return (
        <>
            {(!artLoading && !projectLoading && !expLoading && !personalLoading) && (
                <div className={`${isLight ? "lightMode" : "darkMode"} min-h-screen `}>
                    <Header toggleMode={toggleMode} isLight={isLight} personalData={personalData} />
                    <div className="">
                        <Routes>
                            <Route path="/" element={<Home isLight={isLight} personalData={personalData} artData={artData} projectData={projectData} expData={expData} />} />
                            <Route path="/projects" element={<Projects isLight={isLight} numItem={-1} projectData={projectData} />} />
                            <Route path="/art" element={<Arts isLight={isLight} numItem={-1} artData={artData} />} />
                        </Routes>
                    </div>
                    <Footer isLight={isLight} personalData={personalData} />
                </div>
            )}
        </>

    );
}

export default App;
