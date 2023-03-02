import React, {
  createContext,
  Key,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Button, Checkbox, Form, FormInstance, Radio, Space, Table, Tag } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { Context } from "../pages/Form/Form";
import type { PaginationProps } from "antd";
import { useTranslation } from "react-i18next";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import FormItem from "./FormItem";
interface DataType {
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

function TableForm() {
  
  const getData = useContext(Context);
  const { t } = useTranslation("");
  const [check, setCheck] = useState(false);
  const [data, setData] = React.useState<DataType[]>([] || undefined);
  const [form] = Form.useForm();
  const [recordsId, setRecordsId] = useState<React.Key[]>([]);
  const handleDelete = (key: number) => {
    const objWithIdIndex = data.findIndex((item) => item.id === key);
    if (objWithIdIndex > -1) {
      data.splice(objWithIdIndex, 1);
      setData([...data]);
      localStorage.setItem("form", JSON.stringify(data));
    }
  };

  

  const handleDeleteSelect = () => {
    const next = data.filter((item) => {
      return !recordsId.some((recordId) => recordId === item.id);
    });
    setData(next);
    localStorage.setItem("form", JSON.stringify(next));
  };

  
const onChange = (e: CheckboxChangeEvent) => {
    setCheck(e.target.checked);
    
};
  const columns: ColumnsType<DataType> = [
    {
      title: `${t("fullname")}`,
      dataIndex: "fullname",
      sorter: (a, b) => a.fullname.localeCompare(b.fullname),
    },
    {
      title: `${t("gender")}`,
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: `${t("mobilephone")}`,
      dataIndex: "mobile",
      sorter: (a, b) => a.mobile.localeCompare(b.mobile),
    },
    {
      title: `${t("nation")}`,
      dataIndex: "nation",
      sorter: (a, b) => a.nation.localeCompare(b.nation),
    },
    {
      title: `${t("manage")}`,
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => {
            form.setFieldsValue(record);
            form.setFieldsValue({ id: record.id });
          }}>{t("edit")} </a> 
          <a onClick={() => handleDelete(record.id)}>{t("delete")}</a>
        </Space>
      ),
    },
  ];

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>{t("prev")}</a>;
    }
    if (type === "next") {
      return <a>{t("next")}</a>;
    }
    return originalElement;
  };

  useEffect(() => {
    setData(getData);
  }, [getData]);

  useEffect(() => {
    if (check) {
      setRecordsId([...data.map((item) => item.id)]);
    } else {
      setRecordsId([]);
    }
  }, [check]);
  return (

    <div>

      <Checkbox style={{marginBottom: "10px"}} onChange={onChange}>{t("selectall")}</Checkbox>


      <Button
        style={{ backgroundColor: "white", color: "black",marginBottom: "10px"}}
        onClick={() => {
          handleDeleteSelect();
        }}
      >
        {t("delete")}
      </Button>

      <Table
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: recordsId,
          onChange: (selectedRowKeys: Key[]) => {
            setRecordsId(selectedRowKeys);
          },
        }}
        columns={columns}
        pagination={{
          total: data.length,
          position: ["topRight"],
          itemRender: itemRender,
        }}
        dataSource={data}
        rowKey="id"
      />
    </div>
  );
}
export default TableForm;
