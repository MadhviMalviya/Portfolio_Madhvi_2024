import React from 'react';
import Navbar from '../nav/Navbar';
import Footer from '../footer/Footer';
import { Carousel } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../projects/Project.css';

const projects = [
  {
    id: 1,
    image: 'https://mdbootstrap.com/img/new/standard/nature/111.webp',
    title: 'Project 1',
    description: 'This is a description for project 1.'
  },
  {
    id: 2,
    image: 'https://mdbootstrap.com/img/new/standard/nature/112.webp',
    title: 'Project 2',
    description: 'This is a description for project 2.'
  },
  {
    id: 3,
    image: 'https://mdbootstrap.com/img/new/standard/nature/113.webp',
    title: 'Project 3',
    description: 'This is a description for project 3.'
  },
  {
    id: 4,
    image: 'https://mdbootstrap.com/img/new/standard/nature/114.webp',
    title: 'Project 4',
    description: 'This is a description for project 4.'
  },
  {
    id: 5,
    image: 'https://mdbootstrap.com/img/new/standard/nature/115.webp',
    title: 'Project 5',
    description: 'This is a description for project 5.'
  },
  {
    id: 6,
    image: 'https://mdbootstrap.com/img/new/standard/nature/116.webp',
    title: 'Project 6',
    description: 'This is a description for project 6.'
  },
  {
    id: 7,
    image: 'https://mdbootstrap.com/img/new/standard/nature/117.webp',
    title: 'Project 7',
    description: 'This is a description for project 7.'
  },
  {
    id: 8,
    image: 'https://mdbootstrap.com/img/new/standard/nature/118.webp',
    title: 'Project 8',
    description: 'This is a description for project 8.'
  },
  {
    id: 9,
    image: 'https://mdbootstrap.com/img/new/standard/nature/119.webp',
    title: 'Project 9',
    description: 'This is a description for project 9.'
  }
];

const ProjectCard = ({ image, title, description }) => (
  <MDBCard className="m-2">
    <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
      <MDBCardImage src={image} fluid alt={title} />
      <a href="#">
        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a>
    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle>{title}</MDBCardTitle>
      <MDBCardText>{description}</MDBCardText>
      <MDBBtn href="#">See</MDBBtn>
    </MDBCardBody>
  </MDBCard>
);

const Projects = () => {
  const getChunks = (projects, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < projects.length; i += chunkSize) {
      chunks.push(projects.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const [chunkSize, setChunkSize] = React.useState(3);

  React.useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 768) {
        setChunkSize(1);
      } else if (window.innerWidth < 1024) {
        setChunkSize(2);
      } else {
        setChunkSize(3);
      }
    };
    window.addEventListener('resize', updateChunkSize);
    updateChunkSize();
    return () => window.removeEventListener('resize', updateChunkSize);
  }, []);

  const chunkedProjects = getChunks(projects, chunkSize);

  return (
    
    <div className="carousel-container">
       <h2 className="heading">Projects</h2>
      <Carousel indicators={false} prevLabel="" nextLabel="">
        {chunkedProjects.map((projectChunk, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-center">
              {projectChunk.map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
