import React from "react";
import styles from "./Hotel.module.css";
import hotelImg1 from "../../../assets/images/hotel.jpg";

function Hotel() {
  return (
    <div className={`${styles.hotel} card`}>
      <div className="card-body"></div>
      <div className="row m-1 mw-100">
        <div className="col-4">
          <img
            src={hotelImg1}
            alt=""
            className={`${styles.img} img-fluid img-thumbnail`}
            // img-fluid przy zdjęciu daje max-width: 100% i height: auto
            // img-thumbnail - daje fajną białą ramkę wokół zdjęcia
          />
        </div>
        <div className="col-8">
          <div className="row h-100">
            <div className="col-6">
              <div className="col-12 h-50 d-flex justify-content-center align-items-center">
                <p className={`${styles.pElementsStyling}`}>Pensjonat</p>
              </div>
              <div className="col-12 h-50 d-flex justify-content-center align-items-center h4 p-3">
                <span className="badge bg-light text-dark p-2">Warszawa</span>
              </div>
            </div>
            <div className="col-6">
              <div className="col-12 h-50 d-flex justify-content-center align-items-center">
                <p className={`${styles.pElementsStyling} badge bg-ligh`}>
                  Ocena: 10
                </p>
              </div>
              <div className="col-12 h-50 d-flex justify-content-center align-items-center h4 p-3">
                <span className="badge bg-secondary badge bg-ligh p-2">
                  Opinie: 250
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className={styles.opis}>Opis:</p>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            cupiditate dolorem eos fuga consequuntur unde autem cumque vitae
            laudantium numquam et, dolores exercitationem adipisci illo,
            accusantium laborum qui dolor officiis, harum quia iure? Repudiandae
            modi, laboriosam voluptas id aspernatur fuga, nulla perferendis
            numquam aperiam assumenda architecto officiis. Maiores soluta nulla
            blanditiis placeat aspernatur voluptate, excepturi porro similique
            est officia quas earum odio corrupti error laudantium tempore. Animi
            voluptate nihil consequuntur eum doloribus perspiciatis voluptatem
            iusto voluptatibus neque nulla laborum cumque natus, et voluptates
            consectetur, quaerat distinctio repellendus laboriosam eius sed
            aperiam? Repudiandae veniam aliquid earum debitis saepe incidunt,
            velit exercitationem?
          </div>
          <a
            href="#section"
            className="btn btn-secondary border border-2 rounded float-end mt-3"
          >
            Pokaż
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
