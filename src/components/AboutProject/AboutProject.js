import React from "react";
import './AboutProject.css'

function AboutProject(){
  return(
    <section className="project">
      <h2 className="project__title">
        О проекте
      </h2>
      <div className="project__grid">
        <div className="project__element_type_first">
          Дипломный проект включал 5 этапов
        </div>
        <div className="project__element_type_second">
          На выполнение диплома ушло 5 недель
        </div>
        <div className="project__element project__element_type_third">
          Составление плана, работу над бэкендом, вёрстку, добавление 
          функциональности и финальные              доработки.
        </div>
        <div className="project__element project__element_type_four">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, 
          чтобы успешно                            защититься.
        </div>
      </div>
      <div className="project__process">
        <div className="project__process-first">
          1 неделя
        </div>
        <div className="project__process-second">
          4 недели
        </div>
        <div className="project__process-name">
          Back-end
        </div>
        <div className="project__process-name">
          Front-end
        </div>
      </div>
    </section>
  )
}

export default AboutProject