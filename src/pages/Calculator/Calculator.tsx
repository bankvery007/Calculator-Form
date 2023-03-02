import React, { useEffect } from "react";
import { Button, Card, Col, Input, Row } from "antd";
import { useTranslation } from "react-i18next";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CalculatorOutlined } from "@ant-design/icons";
function Calculator() {
  const { t, i18n } = useTranslation("");
  const [result, setResult] = React.useState("");
  const style: React.CSSProperties = { padding: "10px" };

  const handleChangeBackSpace = () => {
    try {
      setResult(result.slice(0, -1))
    } catch (eror) {
      setResult("")
    }
  };

  const handleChangeClear = () => {
    setResult("");
  };

  const handleChangeResult = () => {
    try {
      setResult(eval(result))
    } catch (eror) {
      setResult("Error")
    }
  }
  useEffect(() => {
    if (result === undefined) {
      setResult("")
    }
  }, [result])




  return (
    <div className="container-cal">
           <div className="title">{t("cal.title")}</div>
      <div className="calculator">
        <Row>
          <Col style={style} span={24}>
            <Input value={result} className="output-cal" onChange={(e) => {
              setResult(e.target.value)
            }}></Input>
          </Col>
        </Row>
     

        <Row>
          <Col span={8}><CalculatorOutlined style={{fontSize:"100px",width:'100%'}} />
          </Col>

        <Col style={style} span={8}>
            <Button
              className="button-number"
              onClick={() => {
                handleChangeClear();
              }
              }
            >
              C
            </Button>
          </Col>
          <Col style={style} span={8}>
            <Button
              className="button-number"
              onClick={() => {
                handleChangeBackSpace();
              }}
            >
              <ArrowLeftOutlined  />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="7"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              7
            </Button>
          </Col>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="8"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              8
            </Button>
          </Col>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="9"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              9
            </Button>
          </Col>
          <Col style={style} span={6}>
            <Button className="button-number"
               name="*"
               onClick={(e) => {
                 setResult(result + e.currentTarget.name);
               }}>X</Button>
          </Col>
        </Row>

        <Row>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="4"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              4
            </Button>
          </Col>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="5"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              5
            </Button>
          </Col>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="6"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              6
            </Button>
          </Col>
          <Col style={style} span={6}>
            <Button className="button-number"
               name="-"
               onClick={(e) => {
                 setResult(result + e.currentTarget.name);
               }}>-</Button>
          </Col>
        </Row>

        <Row>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="1"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              1
            </Button>
          </Col>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="2"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              2
            </Button>
          </Col>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="3"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              3
            </Button>
          </Col>


          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="+"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              +
            </Button>
          </Col>

        </Row>


        <Row>
          <Col style={style} span={6}>
            <Button className="button-number"
               name="/"
               onClick={(e) => {
                 setResult(result + e.currentTarget.name);
               }}
               >/</Button>
          </Col>
          <Col style={style} span={6}>
            <Button
              className="button-number"
              name="0"
              onClick={(e) => {
                setResult(result + e.currentTarget.name);
              }}
            >
              0
            </Button>
          </Col>
          <Col style={style} span={6}>
            <Button className="button-number"
            name="."
            onClick={(e) => {
              setResult(result + e.currentTarget.name);
            }}
            >.</Button>
          </Col>
          <Col style={style} span={6}>
            <Button className="button-number" onClick={
              () => {
                handleChangeResult();
              }
            }>=</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Calculator;
