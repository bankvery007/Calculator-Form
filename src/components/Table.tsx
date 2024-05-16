/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Key, useContext, useEffect, useState } from "react";
import { Button, Checkbox, FormInstance, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Context } from "../pages/Form/Form";
import type { PaginationProps } from "antd";
import { useTranslation } from "react-i18next";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import moment from "moment";

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

interface Iprops {
  form: FormInstance;
  setMode: React.Dispatch<React.SetStateAction<"create" | "edit">>;
  setId: React.Dispatch<React.SetStateAction<number | null>>;
}

function TableForm(props: Iprops) {
  const getData = useContext(Context);
  const { t } = useTranslation("");
  const [check, setCheck] = useState(false);
  const [data, setData] = React.useState<DataType[]>([] || undefined);
  const [recordsId, setRecordsId] = useState<React.Key[]>([]);

  const handleDelete = (key: number) => {
    const objWithIdIndex = data.findIndex((item) => item.id === key);
    if (objWithIdIndex > -1) {
      data.splice(objWithIdIndex, 1);
      setData([...data]);
      localStorage.setItem("form", JSON.stringify(data));
    }
    alert("Delete Success");
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
      render: (data) => {
        return t(data);
      },
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
      render: (data) => {
        return t(data);
      },
      sorter: (a, b) => a.nation.localeCompare(b.nation),
    },
    {
      title: `${t("manage")}`,
      render: (_, record) => {
        return (
          <Space size="middle">
            <a
              onClick={() => {
                props.form.setFieldsValue({
                  ...record,
                  birthday: moment(record.birthday),
                });
                props.setId(record.id);
                props.setMode("edit");
              }}
            >
              {t("edit")}{" "}
            </a>
            <a onClick={() => handleDelete(record.id)}>{t("delete")}</a>
          </Space>
        );
      },
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
      <Checkbox style={{ marginBottom: "10px" }} onChange={onChange}>
        {t("selectall")}
      </Checkbox>

      <Button
        style={{
          backgroundColor: "white",
          color: "black",
          marginBottom: "10px",
        }}
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
