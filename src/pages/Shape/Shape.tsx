import { useTranslation } from "react-i18next";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
function Shape() {

  const { t, i18n } = useTranslation("");
  const [shape, setShape] = useState([1, 2, 3, 4 ,5 ,6]);
  const [check, setCheck] = useState(false);


  

  const handleChangeRandom = () => {
    const newShape: SetStateAction<number[]> = []
    const shuffledArray = shape.sort((a, b) => 0.5 - Math.random());

    shuffledArray.forEach((item) => {
        newShape.push(item)
    })
    setShape(newShape);
  }

  const handleChangeStyle = () => {
    setCheck(!check);
  }

  const handleChangeSlideLeft = () => {
    const getShape = shape;
    const shiftItem = Number(getShape.shift());
    const newShape: SetStateAction<number[]> = []
    getShape.push(shiftItem);
    getShape.forEach((item) => {
        newShape.push(item)
    })

    setShape(newShape);
  }

  const handleChangeSlideRight = () => {
    const getShape = shape;
    const shiftItem = Number(getShape.pop());
    const newShape: SetStateAction<number[]> = []
    getShape.unshift(shiftItem);
    getShape.forEach((item) => {
        newShape.push(item)
    })

    setShape(newShape);
  }





  
  return (
    <div className="containerpage">

      <div className="title">{t("layout.title")}</div>

      <Row className="shape-first" >

      <Col span={3}>

        <div className="shape-card"
         onClick={() => {
          handleChangeSlideLeft();
      }}>
          <div className="card-beside">{t("moveshape")}</div>
      {/* Move shape */}
          <div className="arrow-left"></div>
           
        </div>
        </Col>

        <Col  span={6}>
        <div className="shape-card-center" onClick={() => {
            handleChangeStyle();
        }}>
           <div className="card-center">{t("moveposition")}</div>
           {/* Move position */}
          <div className="arrow-top"></div>
          <div className="arrow-down"></div>
        </div>
        </Col>

        <Col span={3}>


        <div  className="shape-card"  onClick={() => {
                handleChangeSlideRight();
            }}>
        <div className="card-beside">{t("moveshape")}</div>
        <div className="arrow-right"></div>
           
        </div>
        </Col>

        </Row>
        <div className="line-middle">
        <hr style={{width:"50vw",borderColor:"#555555"}} />
        </div>

        <Row className="shape-second-end">
            
        {check === false ?<Col span={3}>
            </Col> : ""}

        <Col span={3}>
                   
          <div className="shape-card">
            <div className={`box${shape[0]}`} onClick={() => {
                handleChangeRandom();
            }} >
                
            </div>
          </div>
          </Col>
          <Col span={3}>
          <div className="shape-card">
            <div className={`box${shape[1]}`} onClick={() => {
                handleChangeRandom();
            }}></div>
          </div>
            </Col>

            <Col span={3}>
          <div className="shape-card">
            <div>
              <div className={`box${shape[2]}`} onClick={() => {
                handleChangeRandom();
            }}></div>
            </div>
          </div>
            </Col>
     
        </Row>
  
  

        <Row className='shape-second-start'>
        {check === true ?<Col span={3}>
            </Col> : ""}
            
        <Col span={3}>

          <div className="shape-card">
            <div className={`box${shape[3]}`} onClick={() => {
                handleChangeRandom();
            }} >
                
            </div>
          </div>
            </Col>
          <Col span={3}>
          <div className="shape-card">
            <div className={`box${shape[4]}`} onClick={() => {
                handleChangeRandom();
            }}></div>
          </div>
            </Col>
          <Col span={3}>
          <div className="shape-card">
            <div>
              <div className={`box${shape[5]}`} onClick={() => {
                handleChangeRandom();
            }}></div>
            </div>
          </div>
            </Col>
        </Row>

    </div>

  );
}

export default Shape;
