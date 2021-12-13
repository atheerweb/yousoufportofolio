import { useState } from "react";
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
const Portofolio = () => {
  const objects = [
    {
      year: "2021",
      name: "Alroaa Blog",
      link: "https://alroaaacademyblog.web.app/",
    },
    {
      year: "2021",
      name: "Calc Challenge",
      link: "https://atheerweb.github.io/Calcuator/",
    },
    {
      year: "2020",
      name: "Todo List",
      link: "https://atheerweb.github.io/todolistproject/",
    },
    {
      year: "2020",
      name: "Stabraq",
      link: "https://atheerweb.github.io/stabraq/",
    },
    {
      year: "2019",
      name: "Alroaaacademy",
      link: "https://atheerweb.github.io/alroaaacademytest/",
    },
  ];
  for (let i = 0; i < objects.length; i++) {
    objects[i]["key"] = i + 1;
    objects[i]["img"] = `${process.env.PUBLIC_URL}/images/${i}.png`;
  }

  console.log(objects);
  const [objectss, setGallery] = useState(objects);
  return (
    <div className="gallery__wrapper" id="work">
      <h3>Recent Projects</h3>

      <div className="imgs__wrapper">
        <div className="img__wrapper">
          {objectss.map((object) => (
            <a
              href={object.link}
              className="img"
              key={object.key}
              target="_blank"
            >
              <img src={object.img} alt="" />
              <p className="p__wrapper">
                <span>/ 0{object.key}</span>
                {object.name}
              </p>
              <p className="year">{object.year}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
