/* eslint-disable max-len */
import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">
        О проекте
      </h2>
      <div className="about-project__grid">
        <h3 className="about-project__stages about-project__stages_type_first">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-project__stages about-project__stages_type_second">
          На выполнение диплома ушло 5 недель
        </h3>
        <div className="about-project__description about-project__description_type_stages">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </div>
        <div className="about-project__description  about-project__description_type_time">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </div>
      </div>
      <div className="about-project__process">
        <div className="about-project__process-backend">
          1 неделя
        </div>
        <div className="about-project__process-frontend">
          4 недели
        </div>
        <div className="about-project__process-name">
          Back-end
        </div>
        <div className="about-project__process-name">
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
