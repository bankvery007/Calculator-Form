import { useTranslation } from "react-i18next";
import { Form } from "antd";
import { createContext, useEffect } from "react";
import TablePage from "../../components/Table";
import FormComponent from "../../components/FormItem";
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
  const { t } = useTranslation("");
  const [form] = Form.useForm();
  const [getlocal, setGetLocal] = React.useState(
    JSON.parse(localStorage.getItem("form") || "[]")
  );
  const [mode, setMode] = React.useState<"create" | "edit">("create");
  const [id, setId] = React.useState<number | null>(null);
  var arr: any[] = getlocal ? getlocal : [];
  const onFinish = (values: FormItemProps) => {
    if (mode === "create") {
      if (getlocal.length === 0) {
        values.id = 1;
      } else {
        values.id = getlocal[getlocal.length - 1].id + 1;
      }
    }

    const result = {
      ...values,
      birthday: values.birthday,
      mobile: values.mobilecode + values.mobilephone,
      fullname: values.firstname + " " + values.lastname,
    };

    if (mode === "edit") {
      arr = arr.map((item) => (item.id === id ? result : item));
      setGetLocal((prev: any) => {
        return prev.map((item: any) => {
          if (item.id === id) {
            return result;
          }
          return item;
        });
      });
      localStorage.setItem("form", JSON.stringify(arr));
      setId(null);
    } else {
      setGetLocal([...getlocal, result]);
      arr.push(result);
      localStorage.setItem("form", JSON.stringify(arr));
    }
    setMode("create");
    alert(t("alert.success"));
    form.resetFields();
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
            <FormComponent
              form={form}
              mode={mode}
              setMode={setMode}
            ></FormComponent>
          </Form>
        </div>
        <div style={{ marginTop: "2%" }}>
          <TablePage form={form} setMode={setMode} setId={setId}></TablePage>
        </div>
      </div>
    </Context.Provider>
  );
}

export default FormItem;
