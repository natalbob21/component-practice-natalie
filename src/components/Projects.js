import React, { Component } from 'react';
import Project from './Project'
import Navbar from './Navbar'


class Projects extends Component {
  state = {
    "allProjects": [
      {
        "title": "The Armored Knight",
        "imgName": "iron-man",
        "description": "This is a short description of the project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere dolores magni totam sapiente libero reiciendis repellat atque error soluta sit, modi, doloremque, ab iusto nostrum reprehenderit magnam voluptatum quasi!"
      },
      {
        "title": "The Fire that Burns Anew",
        "imgName": "phoenix",
        "description": "This is a short description of the project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere dolores magni totam sapiente libero reiciendis repellat atque error soluta sit, modi, doloremque, ab iusto nostrum reprehenderit magnam voluptatum quasi!"
      },
      {
        "title": "The Goddess",
        "imgName": "storm",
        "description": "This is a short description of the project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere dolores magni totam sapiente libero reiciendis repellat atque error soluta sit, modi, doloremque, ab iusto nostrum reprehenderit magnam voluptatum quasi!"
      },
      {
        "title": "The Thief",
        "imgName": "gambit",
        "description": "This is a short description of the project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere dolores magni totam sapiente libero reiciendis repellat atque error soluta sit, modi, doloremque, ab iusto nostrum reprehenderit magnam voluptatum quasi!"
      }
    ]
  }
  
  
  render() {
    
    return (
      <div>
        <Navbar/>
        <div className="projects">
        <Project 
          title={this.state.allProjects[0].title}
          imgName={this.state.allProjects[0].imgName}
          description={this.state.allProjects[0].description}
        />
        <Project 
          title={this.state.allProjects[1].title}
          imgName={this.state.allProjects[1].imgName}
          description={this.state.allProjects[1].description}
        />
        <Project 
          title={this.state.allProjects[2].title}
          imgName={this.state.allProjects[2].imgName}
          description={this.state.allProjects[2].description}
        />
        <Project 
          title={this.state.allProjects[3].title}
          imgName={this.state.allProjects[3].imgName}
          description={this.state.allProjects[3].description}
        />
        </div>
      </div>
      )
    }
  }
      




export default Projects;