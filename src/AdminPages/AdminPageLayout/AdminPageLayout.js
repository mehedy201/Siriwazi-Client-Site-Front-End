import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { GrUserAdmin } from 'react-icons/gr';
import { AppstoreOutlined, HomeOutlined, SnippetsOutlined, PlusOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


const AdminPageLayout = () => {
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
        getItem('Dashboard', 'dashboard', <HomeOutlined />),
        getItem('Hero Section', '2', <AppstoreOutlined />, [
          getItem('Hero Content', 'hero-content'),
          getItem('Edit Hero Content', 'edit-hero-content'),
        ]),
       
        getItem('Manage Post', '3',  <SnippetsOutlined />, [
          getItem('Person Post', 'manage-person-post'),
          getItem('Organization Post', 'manage-organization-post'),
          getItem('Product/Service Post', 'manage-product-sercive-post'),
        ]),
        getItem('Create Post', '4', <PlusOutlined />, [
            getItem('Person Post', 'create-person-post'),
            getItem('Organization Post', 'create-organization-post'),
            getItem('Product/Service Post', 'create-product-service-post'),
        ]),
      ];

      const navigate = useNavigate()
        const onClick = (e) => {
          navigate(e.key);
        };
    return (
        <>
        <div className='bg-[#f2f2f2] py-3'>
            <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
                <p className='font-bold text-2xl for_font_family flex items-center'><GrUserAdmin className='mr-2'/> Siriwazi Admin Dashboard</p>
            </div>
        </div>
        <div className='mb-12 '>
            <div className='flex'>
                <div className='basis-1/5'>
                <Menu
                    onClick={onClick}
                    style={{
                      width: 256,
                    }}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
                </div>
                <div className='bg-[#fffaf7] basis-4/5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        </>
    );
};

export default AdminPageLayout;