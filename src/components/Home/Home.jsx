import React from 'react'
import { AppstoreOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { BiSolidCategory } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import { Col, Menu, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Users', 'sub1', <UsergroupAddOutlined />, [
        getItem('User', '1'),
        getItem('Merchant', '/login'),
    ]),
    {
        type: 'divider',
    },
    getItem('Product', 'sub2', <AppstoreOutlined />, [
        getItem('Add Product', '3'),
        getItem('All Product', '4'),
    ]),
    {
        type: 'divider',
    },
    getItem('Category', 'sub3', <BiSolidCategory />, [
        getItem('Add Category', '5', <TbCategoryPlus />),
        getItem('All Category', '6'),
    ]),
    {
        type: 'divider',
    },
    getItem('Sub-Category', 'sub4', <AppstoreOutlined />, [
        getItem('Add Sub-Category', '7'),
        getItem('All Sub-Category', '8'),
    ]),
    {
        type: 'divider',
    },
];

const Home = () => {
    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key);
    };
    return (
        <Row>
            <Col span={6}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256,
                    }}
                    mode="inline"
                    items={items}
                />
            </Col>
            <Col span={18}>
                <Outlet>

                </Outlet>
            </Col>
        </Row>
    )
}

export default Home