import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './styles/main.scss'
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import Page from "./pages/Page";
import ArchivePage from "./pages/ArchivePage";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

const  app = document.querySelector("#root");

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <div className='content-wrap'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="primary">
                            <Routes>
                                <Route path="/" element={<FrontPage />} />
                                <Route path="/:id" element={<Page />} />
                                <Route path="*" element={<NotFound />} />
                                <Route path="/" element={<ArchivePage />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </BrowserRouter>
    ,app)
