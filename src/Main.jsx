import React from "react";
import Facebook_ico from "./UI/facebook-icon.png";
import Inst from "./UI/instagramm.png";
import Linkedin from "./UI/linkedin.png";
import Telegram from "./UI/telegramm.png";
import "./styles/main.css";
import MainInfo from "./MainInfo";
import Gallery from "./Gallery";
import FriendPhoto from "./UI/friend1.jpg";
import FriendPhoto2 from "./UI/friend2.jpg";
import FriendPhoto3 from "./UI/oigonuu1.jpg";
import FriendPhoto4 from "./UI/oigonuu2.jpg";
import Adverst from "./UI/adverst-photo.jpg";
import MyPhoto from "./MyPhoto";
const Main = () => {
  return (
    <div className="container">
      <div className="adverst">
        <a href="https://instagram.com/oigonuu?igshid=YmMyMTA2M2Y">
          <img src={Adverst} alt="adverst" />
        </a>
      </div>
      <div className="main">
        <MyPhoto />
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
          <button>
            <a href="https://www.linkedin.com/in/elmirbek-surkeev-b91876256">
              Узнать больше
            </a>
          </button>
          <MainInfo
            title="ментор проекта Ойгонуу"
            desc="Проект Ойгонуу это просто потрясающий проект в котором я начал обучаться сфере IT. С самого начал проекта он был неизвестным проектом, но со временем его популярность выросла. На данный момент у проекта Ойгонуу около 80 выпустников и 100 учащихся в Южной части Кыргызстана"
          />
          <button>
            <a href="https://www.linkedin.com/in/elmirbek-surkeev-b91876256">
              Пригласить на собеседование
            </a>
          </button>
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
          <MainInfo
            title="Фото"
            desc="В целом веду очень активынй образ жизни. Много чем увлекаюсь и учавствую в различным мероприятих"
          />
          <div className="contacts-photo">
            <div className="friends-photo deletedPhotos">
              <img src={FriendPhoto} alt="my friends" />
            </div>
            <div className="friends-photo">
              <img src={FriendPhoto4} alt="my friends" />
            </div>
            <div className="friends-photo">
              <img src={FriendPhoto2} alt="my friends" />
            </div>
            <div className="friends-photo deletedPhotos">
              <img src={FriendPhoto3} alt="my friends" />
            </div>
          </div>
          <MainInfo title="мой соц сети" />
          <div className="contacts">
            <div className="social-app">
              <a href="https://www.facebook.com/elmirbek.surkeev">
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
          <div className="developMan">
            Разработка сайта{" "}
            <a href="https://www.linkedin.com/in/elmirbek-surkeev-b91876256">
              Элмир Суркеев
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
