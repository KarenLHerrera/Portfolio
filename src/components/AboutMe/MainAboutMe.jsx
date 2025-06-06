import React from 'react'
import CardDataBase from './CardDataBase'
import CardLibraries from './CardLibraries'
import CardLanguajes from './CardLanguajes'
import '../../css/AboutMe/MainAboutMe.css'


const MainAboutMe = () => {
  return (
    <div class="about">
      <br />
      <h3>Lenguajes</h3>
      <br />
      <CardLanguajes/>
      <br />
      <h3>Librerias y Frameworks</h3>
      <br />
      <CardLibraries/>
      <br />
      <h3>Bases de Datos</h3>
      <br />
      <CardDataBase/>
      <br />
      <br />
    
    </div>
  )
}

export default MainAboutMe
