import React from "react";
import Photo from "./UI/myPhoto.jpg";
import Facebook_ico from "./UI/facebook-icon.png";
import Inst from "./UI/instagramm.png";
import Linkedin from "./UI/linkedin.png";
import Telegram from "./UI/telegramm.png";
import "./styles/main.css";
import MainInfo from "./MainInfo";
import Gallery from "./Gallery";
const Main = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="main-picture-change">
          <img className="myPhoto" src={Photo} alt="My photo" />
        </div>
        <div className="main-about">
          <div className="bigTitle">Элмир Суркеев</div>
          <div className="underTitle">
            Выпускник IT школы Ойгонуу <br />
            Фронт-енд разработчик
          </div>
          <MainInfo
            title="Фронт-енд разработчик"
            desc="Фронт-енд разрабочик это тот человек который создает различные веб приложения. Начиная с самых простых одностраничных лендингов до многофунциональных интернет магазинов. Фронтенд разрабочик очень востребованная проффесия и в тоже время ответственная проффесия"
          />
          <button>Узнать больше</button>
          {/* <Btn text="Узнать о соц сетях" /> */}
          <MainInfo
            title="ментор проекта Ойгонуу"
            desc="Проект Ойгонуу это просто потрясающий проект в котором я начал обучаться сфере IT. С самого начал проекта он был неизвестным проектом, но со временем его популярность выросла. На данный момент у проекта Ойгонуу около 80 выпустников и 100 учащихся в Южной части Кыргызстана"
          />
          <button>Пригласить на собеседование</button>
          <MainInfo
            title="о себе"
            desc="Мне 17 лет. Начал изучать программирование с 15 лет поводом стала встреча с крутым программистов имя не помню, но вел себя очень вежливо и своими манерами он показал мне что проффесия тоже влияет на человека как его семья. Он наслаждался работой знал многое, но в тоже время был скромным и умел слушать разговор и грамотно поддерживать "
          />
          <MainInfo
            title="выпускник курса 'Жаштар парламенти'"
            desc="Жаштар Парламенти или же на русском Молодежный парламент. 
            Начну сначала я попал туда совершенно случайно, я бы сопроваждающим лицом моего брата. Но не смотря на это был очень активным учатником. Мне руководитель нашей группы закрыв глаза на возраст разрешил быть частью этого проекта"
          />
          <Gallery />
          <button>
            <a href="https://www.instagram.com/parliament.kg/">
              Узнать больше о проекте
            </a>
          </button>
          <MainInfo title="мой соц сети" />
          <div className="contacts">
            <div className="social-app">
              <a ref="https://www.facebook.com/elmirbek.surkeev">
                <img src={Facebook_ico} alt="Facebook Profile" />
              </a>
            </div>
            <div className="social-app">
              <a href="https://www.instagram.com/invites/contact/?i=j0zxwnufas2&utm_content=hsut6gw">
                <img src={Inst} alt="Instagram Profile" />
              </a>
            </div>
            <div className="social-app">
              <a href="https://www.linkedin.com/in/elmirbek-surkeev-b91876256">
                <img src={Linkedin} alt="Linkedin Profile" />
              </a>
            </div>
            <div className="social-app">
              <a href="#">
                <img src={Telegram} alt="Telegramm Profile" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
