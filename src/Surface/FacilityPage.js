import React, { useState } from 'react';
import Loginlayout from "../components/layout/Loginlayout";
import ClearFix from "../components/common/ClearFix";
import { Button, Flex, Input, Card, Cascader, DatePicker, Form, InputNumber, Radio, Select, Switch, TreeSelect, Space } from 'antd';



const FacilityPage = () => {
    const [size] = useState('large'); // default is 'middle'

    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };
    const onChangeDatePicker = (date, dateString) => {
        console.log(date, dateString);
    };

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };


    return (
        <Loginlayout fixedHeader>           
            <ClearFix height="100px"/>             
            <div>
            <h1>
        表9.有害生物防治或環境消毒資材施用紀錄
            </h1>
            </div>           

            <ClearFix height="500px"/>
        </Loginlayout>
    );
};

export default FacilityPage
