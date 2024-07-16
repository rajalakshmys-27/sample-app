import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./viewcourse/Sidebar";
import DocumentationPage from "./viewcourse/DocumentationPage";
import htmlPages from "./doc/html";
import cssPages from "./doc/css";
import reactPages from "./doc/react";
import Header from "./viewcourse/Header";
import AppContext from "./viewcourse/AppContext";

const Courses = () => {
  const [defaultPageItems, setDefaultPageItems] = useState({
    defaultPageTitle: htmlPages[0].title,
    defaultPageContent: htmlPages[0].content,
    defaultPageDetails: htmlPages[0],
  });
  const { selectedDocType } = useContext(AppContext);

  const getPages = () => {
    switch (selectedDocType) {
      case "css":
        return cssPages;
      case "react":
        return reactPages;
      case "html":
      default:
        return htmlPages;
    }
  };

  const pages = getPages();

  useEffect(() => {
    const defaultPage = pages[0];
    setDefaultPageItems({
      defaultPageTitle: defaultPage.title,
      defaultPageContent: defaultPage.content,
      defaultPageDetails: defaultPage,
    });
  }, [selectedDocType, pages]);

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
              <Route
                path="/"
                element={
                  <DocumentationPage
                    pageTitle={defaultPageItems.defaultPageTitle}
                    pageContent={defaultPageItems.defaultPageContent}
                    pageDetails={defaultPageItems.defaultPageDetails}
                  />
                }
              />
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
