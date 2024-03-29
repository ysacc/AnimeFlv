import React, { Fragment } from "react";
import Sigueno from "../../img/fb-flv.webp";
import miniatura from "../../img/miniatura.jpg";
import cover from "../../img/cover.jpg";

const Container = () => {
  const newObj = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Fragment>
      <section className="container-principal">
        <div className="container-body margin-container">
          <aside className="sidebar MC__fixed">
            <a href="">
              <img src={Sigueno} alt="siguenos" />
            </a>
            <div className="widget-emision">
              <div className="title-emision fa-play">
                <strong>ANIMES EN EMISIÓN</strong>
              </div>
              <div className="animes-emision">
                <ul>
                  {newObj.map((obj) => (
                    <li>
                      <a href="" className="fa-play-circle">
                        Naruto Shippuden
                        <span className="type-anime tv">ANIME</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
          <main>
            <div className="title">
              <h2>Últimos episodios</h2>
              <div className="order">
                <a href="" className="active">
                  HOY
                </a>
              </div>
            </div>
            <ul className="last-episodes">
              {newObj.map((obj, idx) => (
                <li key={idx}>
                  <a href="" className="fa-play">
                    <span className="image-mask">
                      <img src={miniatura} alt="miniatura" />
                    </span>
                    <span className="nCapi">Episodio 1</span>
                    <strong className="title-cap-miniatura">
                      Nomad: Megalo Box 2
                    </strong>
                  </a>
                </li>
              ))}
            </ul>
            <div className="title fa-star">
              <h2>Últimos Animes</h2>
              <div className="order">
                <a href="" className="active">
                  HOY
                </a>
              </div>
            </div>
            <ul className="last-animes">
              {newObj.map((obj, idx) => (
                <li key={idx}>
                <article className="anime">
                  <span className="estreno">
                    <span>ESTRENO</span>
                  </span>
                  <div className="image fa-play-circle-o">
                    <figure>
                      <img src={cover} alt="cover" />
                    </figure>
                    <span className="type-anime tv">ANIME</span>
                  </div>
                  <h3 className="title-anime">Fumetsu no Anata e</h3>
                </article>
              </li>
              ))}
              
              
              
           
            </ul>
          </main>
        </div>
      </section>
    </Fragment>
  );
};

export default Container;