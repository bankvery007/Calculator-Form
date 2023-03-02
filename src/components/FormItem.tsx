import { useTranslation } from "react-i18next";
import { Col, DatePicker, Radio, Row } from "antd";
import { Button, Form, Input, InputNumber, Select } from "antd";
import ReactCountryFlag from "react-country-flag";
import React, { useContext } from "react";
import FormCitizen from "./FormCitizen";

interface props {
  form: any;
}
function FormItem({ form }: props) {
  const { t, i18n } = useTranslation("");
  const style: React.CSSProperties = { padding: "0 0 0 10px" };
  const customFormat = "DD/MM/YY";

  const optionTitle = [
    { label: `${t("mr")}`, value: "Mr." },
    { label: `${t("mrs")}`, value: "Mrs." },
    { label: `${t("ms")}`, value: "Ms." },
  ];

  const optionNation = [
    { label: `${t("th")}`, value: "Thai" },
    { label: `${t("french")}`, value: "French" },
    { label: `${t("american")}`, value: "American" },
  ];

  const optionCountry = [
    { value: "+66", label: [<ReactCountryFlag countryCode="TH" svg />, "+66"] },
    { value: "+1", label: [<ReactCountryFlag countryCode="US" svg />, "+1"] },
    { value: "+33", label: [<ReactCountryFlag countryCode="FR" svg />, "+33"] },
  ];

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Row>
        <Col span={4}>
          <Form.Item
            name="title"
            label={t("title")}
            rules={[{ required: true, message: ` ${t("plstitle")}!` }]}
          >
            <Select options={optionTitle} placeholder={t("title")}></Select>
          </Form.Item>
        </Col>

        <Col span={10} style={style}>
          <Form.Item
            label={t("firstname")}
            name="firstname"
            rules={[{ required: true, message: ` ${t("plsfirstname")}!` }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={10} style={style}>
          <Form.Item
            label={t("lastname")}
            name="lastname"
            rules={[{ required: true, message: `${t("plslastname")}` }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <Form.Item
            name="birthday"
            label={t("birthday")}
            rules={[{ required: true, message: `${t("plsbirthday")}` }]}
          >
            <DatePicker
              placeholder={`${t("formardate")}`}
              format={customFormat}
            />
          </Form.Item>
        </Col>

        <Col span={10} style={style}>
          <Form.Item
            name="nation"
            label={t("nation")}
            rules={[{ required: true, message: `${t("plsnation")}` }]}
          >
            <Select
              options={optionNation}
              placeholder={`${t("plsselect")}`}
            ></Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Form.Item label={t("citizenid")} name="citizenid">
          <FormCitizen />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item
          name="gender"
          label={t("gender")}
          rules={[{ required: true, message: `${t("plsgender")}` }]}
        >
          <Radio.Group>
            <Radio value="Male"> {t("male")}</Radio>
            <Radio value="Female"> {t("female")}</Radio>
            <Radio value="Unsex"> {t("unsex")}</Radio>
          </Radio.Group>
        </Form.Item>
      </Row>

      <Row>
        <Col span={7}>
          <Form.Item
            name="mobilecode"
            label={t("mobilephone")}
            rules={[{ required: true, message: `${t("plsmobilecode")}` }]}
          >
            <Select
              options={optionCountry}
              value={optionCountry[0].value}
            ></Select>
          </Form.Item>
        </Col>

        <Col span={1}>
          <div className="border-idcard">-</div>
        </Col>

        <Col span={7}>
          <Form.Item
            name="mobilephone"
            rules={[
              {
                required: true,
                message: `${t("plsmobilephone")}`,
              },
            ]}
          >
            <Input minLength={10} maxLength={10} />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item name="passport" label={t("passport")}>
            <Input maxLength={9} minLength={9} />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item
            name="salary"
            label={t("salary")}
            rules={[
              {
                required: true,
                message: `${t("plssalary")}`,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}></Col>
        <Col span={4}>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            type="primary"
            onClick={() => {
              onReset();
            }}
          >
            {t("reset")}
          </Button>
        </Col>
        <Col span={4}>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            type="primary"
            htmlType="submit"
          >
            {t("submit")}
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default FormItem;
