import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Todo from '../assets/todo.png'
import Weather from '../assets/weather.png'
import Pizza from '../assets/pizza.png'
import College from '../assets/college.png'
import CRUD from '../assets/crud.png'
import '../styles/Project.css'

function Projects() {
  return (
    <div className='projects'>
        <h1>My Personal Projects</h1>
        <div className='projectList'>
           <a href='https://saurabhrajput15.github.io/react_todo-list/' target='_blank'><ProjectItem name='Todo-list' image={Todo}/></a>
           <a href='https://saurabhrajput15.github.io/react_weather-app/' target='_blank'><ProjectItem name='Weather-app' image={Weather}/></a>
           <a href='https://saurabhrajput15.github.io/react_pizza-website/' target='_blank'><ProjectItem name='Pizza Website' image={Pizza}/></a>
           <a href='https://saurabhrajput15.github.io/college-website/' target='_blank'><ProjectItem name='College Website' image={College}/></a>
           <a href='https://saurabhrajput15.github.io/react-assignment/' target='_blank'><ProjectItem name='CRUD Operation' image={CRUD}/></a>
        </div>
    </div>
  )
}

export default Projects