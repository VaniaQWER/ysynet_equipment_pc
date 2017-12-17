/**
 * @file 资产档案
 */
import React, { Component } from 'react';
import { Row, Col, Input, Form, Table, Button,
  Icon, Breadcrumb, Layout, Divider } from 'antd';
import { ArchivesData } from '../../mock';
import { Link } from 'react-router';
// import TableGrid from '../../component/tableGrid';
// import api from '../../api';
const FormItem = Form.Item;
// const { RemoteTable } = TableGrid;
const { Content } = Layout;
const columns = [
  {
    title: '操作',
    dataIndex: 'id',
    width: 250,
    render: text => 
      <span>
        <Link to={{pathname: `/archives/${text}`}}><Icon type="form" />详情</Link>
        <Divider type="vertical" />
        <a onClick={() => alert('选证件')}><Icon type="idcard" />证件</a>
        <Divider type="vertical" />
        <a onClick={() => alert('大妈')}><Icon type="qrcode" />打码</a>
      </span>  
  },
  {
    title: '资产编号',
    dataIndex: 'id1',
    width: 200
  },
  {
    title: '资产名称',
    dataIndex: 'id2',
    width: 200
  },
  {
    title: '型号',
    dataIndex: 'id3',
    width: 200
  },
  {
    title: '状态',
    dataIndex: 'id4',
    width: 150
  },
  {
    title: '设备分类',
    dataIndex: 'id5',
    width: 150
  },
  {
    title: '使用科室',
    dataIndex: 'id6',
    width: 150
  },
  {
    title: '购置日期',
    dataIndex: 'id7',
    width: 150
  },
  {
    title: '供应商',
    dataIndex: 'id8',
    width: 150
  },
  {
    title: '生产商',
    dataIndex: 'id9',
    width: 150
  },
  {
    title: '管理科室',
    dataIndex: 'id10',
    width: 150
  },
  {
    title: '责任人',
    dataIndex: 'id11',
    width: 150
  }
]

class SearchWrapperForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    })
  }
  handleReset = () => {
    this.props.form.resetFields();
  }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    const { isOpen } = this.state;
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24} style={{padding: 5}}>
          <Col span={8} key={1} >
            <FormItem label={`资产编号`}>
              {getFieldDecorator(`a`)(
                <Input placeholder="资产编号"/>
              )}
            </FormItem>
          </Col>
          <Col span={8} key={2} >
            <FormItem label={`资产名称`}>
              {getFieldDecorator(`Field2`)(
                <Input placeholder="资产名称" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={3} >
            <FormItem label={`状态`}>
              {getFieldDecorator(`Field3`)(
                <Input placeholder="状态" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={4} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`设备分类`}>
              {getFieldDecorator(`Field4`)(
                <Input placeholder="设备分类" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={5} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`设备型号`}>
              {getFieldDecorator(`Field5`)(
                <Input placeholder="设备型号" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={6} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`厂商`}>
              {getFieldDecorator(`Field6`)(
                <Input placeholder="厂商" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={7} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`使用科室`}>
              {getFieldDecorator(`Field7`)(
                <Input placeholder="使用科室" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={8} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`管理科室`}>
              {getFieldDecorator(`Field8`)(
                <Input placeholder="管理科室" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={9} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`责任人`}>
              {getFieldDecorator(`Field9`)(
                <Input placeholder="责任人" />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row style={{marginBottom: 8}}>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              { isOpen ? '收起' : '展开' } <Icon type={isOpen ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    )
  }
}
const SearchWrapper = Form.create()(SearchWrapperForm);

class Archives extends Component {
  render () {
    return this.props.children || (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Item>资产档案</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <SearchWrapper/>
          <Table 
            bordered={true}
            style={{marginTop: 10}}
            scroll={{x: '1800px'}}
            columns={columns} 
            dataSource={ArchivesData} 
            rowKey={'id'}
          />
        </div>
      </Content>
        /* <RemoteTable
          ref='remote'
          url={api.ARCHIVES}
          scroll={{x: '1800px'}}
          columns={columns}
          rowKey={'orgId'}
        /> */
    )
  }
}
export default Archives;