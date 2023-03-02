
import { useTranslation } from "react-i18next";
import data from "../../DataDemo.json"
function Home() {
  const { t,i18n } = useTranslation("");
  const defaultForm =  data
localStorage.setItem("form", JSON.stringify(defaultForm));
  return (
    <div className="container-home">
      <div className="centered">
   
          <a href='/shape'>
            <div className="card">
              <h4>
                <b>{t("test1")}</b>
              </h4>
              <p style={{ paddingTop: "20px" }}>{t("layout.title")}</p>
            </div>
          </a>

          <a href='/calculator'>
            <div className="card">
              <h4>
              <b>{t("test2")}</b>
              </h4>
              <p style={{ paddingTop: "20px" }}>{t("cal.title")}</p>
            </div>
          </a>

          <a href='/form'>
            <div className="card">
              <h4>
              <b>{t("test3")}</b>
              </h4>
              <p style={{ paddingTop: "20px" }}>{t("form.title")}</p>
            </div>
          </a>


      </div>
    </div>
  );
}

export default Home;
