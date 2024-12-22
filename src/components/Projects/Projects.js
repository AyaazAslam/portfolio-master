import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/project5.png";
import EcommerceShopifyStore from "../../Assets/Projects/project6.jpg";
import movieshub from "../../Assets/Projects/project1.png";
import textify from "../../Assets/Projects/project4.png";
import Newspulse from "../../Assets/Projects/project1.png";
import inotebook from "../../Assets/Projects/project2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textify}
              isBlog={false}
              title="Islam App"
              description="Developed a comprehensive Islamic app using Flutter and Provider! This app offers a range of features, including prayer times, Quran recitation, Hadith collection, and Islamic calendar. With Provider, we've enabled seamless state management, allowing users to personalize their experience and receive real-time updates. Perfect for Muslims around the world, this app aims to bring people closer to their faith. #IslamicApp #Flutter #Provider #MuslimCommunity #MobileAppDevelopment"
              ghLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
              demoLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inotebook}
              isBlog={false}
              title="Referral Earn App"
              description="Unlock the power of referrals and take your career to new heights! Our Referral Earn app, built with Flutter, rewards you for inviting friends and connections to join. Grow your network, earn rewards, and achieve your goals."
              ghLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
              demoLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieshub}
              isBlog={false}
              title="BMI App"
              description="Built a BMI Calculator app using Flutter and Provider! This app allows users to easily calculate their body mass index and track their progress over time. With a simple and intuitive interface, users can input their height and weight to receive personalized health insights. Provider enables seamless state management, making it easy to update and display user data in real-time. #BMICalculator #Flutter #Provider #HealthAndWellness #MobileAppDevelopmen"
              ghLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
              demoLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Tech Portfolio"
              description="This is my Tech Portfolio site! This repository contains the source code and assets for my portfolio. As a passionate front-end developer and software engineering student, I've created this website to showcase my skills, experience, and the projects I've worked on. Whether you're a potential client, employer, or fellow developer, I invite you to explore my portfolio to learn more about my work and capabilities."
              ghLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
              demoLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Newspulse}
              isBlog={false}
              title="NewsPulse"
              description="NewsPulse is a React-based web application that fetches and displays the latest news articles from various categories using the NewsAPI. Using the NewsAPI, the web application NewsPulse retrieves and presents the most recent news items from a variety of categories. Users can browse news stories in a variety of categories, including technology, business, entertainment, general, health, and sports."
              ghLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcommerceShopifyStore}
              isBlog={false}
              title="EcommerceShopifyStore-reactApp (Firebase Authentication) "
              description="This is a React application that serves as the front end for a Shopify e-commerce store. It utilizes components to structure the user interface and interacts with the Shopify API (to be implemented) to retrieve and display product information, handle user actions like adding items to the cart, and potentially checkout flows."
              ghLink="https://www.linkedin.com/in/ayaz-aslam-49130a27b/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
