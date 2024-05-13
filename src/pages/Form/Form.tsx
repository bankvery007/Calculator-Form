import { useTranslation } from "react-i18next";
import { Col, DatePicker, Radio, Row } from "antd";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { createContext, useContext, useEffect } from "react";
import TablePage from "../../components/Table";
import FormComponent from "../../components/FormItem";
import dayjs from "dayjs";
import React from "react";

interface FormItemProps {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  fullname: string;
  birthday: string;
  nation: string;
  citizenid: string;
  gender: string;
  mobilecode: string;
  mobilephone: string;
  passport: string;
  salary: string;
  mobile: string;

}



export const Context = createContext([]);

function FormItem() {
  const { t, i18n } = useTranslation("");
  const [form] = Form.useForm();
  const [getlocal, setGetLocal] = React.useState(
    JSON.parse(localStorage.getItem("form") || "[]")
  );
  var arr = getlocal ? getlocal : [];

  const onFinish = (values: FormItemProps) => {
    if (getlocal.length === 0) {
      values.id = 1;
    } else {
      values.id = getlocal[getlocal.length - 1].id + 1;
    }
    const result = {
      ...values,
      birthday: values.birthday,
      mobile: values.mobilecode + values.mobilephone,
      fullname: values.firstname + " " + values.lastname,

    };
    alert(t("alert.success"));
    setGetLocal([...getlocal, result]);
    arr.push(result);

    localStorage.setItem("form", JSON.stringify(arr));
  };

  useEffect(() => {
    setGetLocal(JSON.parse(localStorage.getItem("form") || "[]"));
  }, []);

  return (
    <Context.Provider value={getlocal}>
      <div className="containerpage">
        <div className="title">{t("form.title")}</div>

        <div className="container-form">
          <Form onFinish={onFinish} form={form}>
            <FormComponent form={form}></FormComponent>
          </Form>
        </div>
        <div style={{marginTop:"2%"}}>
          
        <TablePage form={form}></TablePage>
        </div>      
        </div>
    </Context.Provider>
  );
}

export default FormItem;
