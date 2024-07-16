import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./viewcourse/Sidebar";
import DocumentationPage from "./viewcourse/DocumentationPage";
import htmlPages from "./doc/html";
import cssPages from "./doc/css";
import reactPages from "./doc/react";
import Header from "./viewcourse/Header";
import AppContext from "./viewcourse/AppContext";

const Courses = () => {
  const { selectedDocType } = useContext(AppContext);

  const getPages = () => {
    switch (selectedDocType) {
      case "html":
        return htmlPages;
      case "css":
        return cssPages;
      case "react":
        return reactPages;
      default:
        return htmlPages;
    }
  };

  const pages = getPages();

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Router>
        <div className="app-container">
          <Sidebar pages={pages} />

          <div className="main-content">
            <Routes>
              {pages.map((page) => (
                <Route
                  key={page.id}
                  path={page.path}
                  element={
                    <DocumentationPage
                      pageTitle={page.title}
                      pageContent={page.content}
                      pageDetails={page}
                    />
                  }
                />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Courses;
