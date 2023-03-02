import { FC, useState } from "react";
import { Input, Row, Col } from "antd";

const InputPersonal: FC<{
  value?: any;
  onChange?: (value?: string) => void;
}> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState<string[]>(["", "", "", "", ""]);
  const onChangeInput = (index: number, targetValule: string) => {
    const cpInputValue = [...inputValue];
    cpInputValue[index] = targetValule;

    setInputValue(cpInputValue);
    if (onChange) {
      onChange(cpInputValue.join(""));
    }
  };

  return (
    <Row>
      <Col span={2}>
        <Input className="inputcitizen"
          value={inputValue[0]}
          maxLength={1}
          minLength={1}
          onChange={(e) => {
            onChangeInput(0, e.target.value);
          }}
        />
      </Col>
      <Col span={1}>
        <div className="border-idcard">-</div>
      </Col>
      <Col span={4}>
        <Input className="inputcitizen"
          maxLength={4}
          minLength={4}
          value={inputValue[1]}
          onChange={(e) => {
            onChangeInput(1, e.target.value);
          }}
        />
      </Col>
      <Col span={1}>
        <div className="border-idcard">-</div>
      </Col>
      <Col span={4}>
        <Input className="inputcitizen"
          maxLength={5}
          minLength={5}
          value={inputValue[2]}
          onChange={(e) => {
            onChangeInput(2, e.target.value);
          }}
        />
      </Col>

      <Col span={1}>
        <div className="border-idcard">-</div>
      </Col>
      <Col span={3}>
        <Input className="inputcitizen"
          maxLength={2}
          minLength={2}
          value={inputValue[3]}
          onChange={(e) => {
            onChangeInput(3, e.target.value);
          }}
        />
      </Col>

      <Col span={1}>
        <div className="border-idcard">-</div>
      </Col>

      <Col span={2}>
        <Input className="inputcitizen"
          minLength={1}
          maxLength={1}
          value={inputValue[4]}
          onChange={(e) => {
            onChangeInput(4, e.target.value);
          }}
        />
      </Col>
      </Row>
  );
};
export default InputPersonal;
