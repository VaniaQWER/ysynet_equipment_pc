/**
 * @file 资产档案
 */
import React, { Component } from 'react';
import { Row, Col, Input, Form, Button, Select, Modal,
  Icon, Breadcrumb, Layout, Divider } from 'antd';
import { Link } from 'react-router';
import TableGrid from '../../component/tableGrid';
import SearchSelect from '../../component/searchSelect';
import api from '../../api';
import { ArchivesStatus, ProductType } from '../../constants';
import { createOptions } from '../../utils/tools';
import Certificates from './detail/certificates';
import { fetchData } from '../../utils/tools';
const FormItem = Form.Item;
const Option = Select.Option;
const { RemoteTable } = TableGrid;
const { RemoteSelect } = SearchSelect;
const { Content } = Layout;
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
      this.props.onSearch(values);
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
              {getFieldDecorator(`assetsRecord`)(
                <Input placeholder="资产编号"/>
              )}
            </FormItem>
          </Col>
          <Col span={8} key={2} >
            <FormItem label={`资产名称`}>
              {getFieldDecorator(`equipmetStandarName`)(
                <Input placeholder="资产名称" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={3} >
            <FormItem label={`状态`}>
              {getFieldDecorator(`useFstate`, {
                initialValue: ''
              })(
                <Select style={{ width: 170 }}>
                  <Option value="">全部</Option>
                  {
                    createOptions(ArchivesStatus)
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} key={4} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`设备分类`}>
              {getFieldDecorator(`productType`, {
                initialValue: ''
              })(
                <Select style={{ width: 170 }}>
                  <Option value="">全部</Option>
                  {
                    createOptions(ProductType)
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} key={5} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`设备型号`}>
              {getFieldDecorator(`spec`)(
                <Input placeholder="设备型号" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={6} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`厂商`}>
              {getFieldDecorator(`product`)(
                <Input placeholder="厂商" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={7} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`使用科室`}>
              {getFieldDecorator(`useDeptCode`)(
                <Input placeholder="使用科室" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={8} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`管理科室`}>
              {getFieldDecorator(`bDept`)(
                <Input placeholder="管理科室" />
              )}
            </FormItem>
          </Col>
          <Col span={8} key={9} style={{ display: !isOpen ? 'none' : 'block' }}>
            <FormItem label={`责任人`}>
              {getFieldDecorator(`custodian`)(
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
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      certificate: {},
      certGuid: ''
    }
  }
  onSearch = (params) => {
    this.refs.remote.fetch(params);
  }
  okHanlder = () => {
    fetchData({
      url: api.CHANGE_ARCHIVES,
      success: data => {
        console.log(data);
        if (data.status) {
          this.setState({
            visible: false
          })
        }
      }
    })
  }
  render () {
    const columns = [
      {
        title: '操作',
        dataIndex: 'RN',
        width: 250,
        render: (text, record) => 
          <span>
            <Link to={{pathname: `/archives/detail`, state: { record }}}><Icon type="form" />详情</Link>
            <Divider type="vertical" />
            <a onClick={() => {
              if (record.certGuid) {
                fetchData({
                  url: api.ARCHIVES_SEARCH,
                  body: {specCertGuid: record.certGuid},
                  success: data => {
                    if (data.status) {
                      this.setState({
                        visible: false,
                        certificate: data.result
                      })
                    }
                  }
                })
              } else {
                this.setState({visible: true, certificate: {}})
              }
            }}><Icon type="idcard" />证件</a>
            <Divider type="vertical" />
            <a onClick={() => alert('大妈')}><Icon type="qrcode" />打码</a>
          </span>  
      },
      {
        title: '资产编号',
        dataIndex: 'assetsRecord',
        width: 200
      },
      {
        title: '资产名称',
        dataIndex: 'equipmetStandarName',
        width: 200
      },
      {
        title: '型号',
        dataIndex: 'spec',
        width: 200
      },
      {
        title: '状态',
        dataIndex: 'useFstate',
        width: 150,
        render: text => ArchivesStatus[text]
      },
      {
        title: '设备分类',
        dataIndex: 'productType',
        width: 150,
        render: text => ProductType[text]
      },
      {
        title: '使用科室',
        dataIndex: 'useDeptCode',
        width: 150
      },
      {
        title: '购置金额',
        dataIndex: 'buyPrice',
        width: 150
      },
      {
        title: '生产商',
        dataIndex: 'product',
        width: 150
      },
      {
        title: '管理科室',
        dataIndex: 'bDept',
        width: 150
      },
      {
        title: '负责人',
        dataIndex: 'custodian',
        width: 150
      }
    ]
    const { certificate } = this.state;
    return this.props.children || (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Item>资产档案</Breadcrumb.Item>
        </Breadcrumb>
        <Modal
          className='ysynet-archives-modal'
          title="变更证件"
          style={{ top: 5 }}
          visible={this.state.visible}
          onCancel={() => this.setState({visible: false})}
          okText='保存'
          cancelText='取消'
          onOk={this.okHanlder}
        > 
          <RemoteSelect 
            allowClear={true} 
            url={api.ARCHIVES_SEARCH} 
            cb={value => {
              console.log(value)
              this.setState({certGuid: ''})
            }} 
            placeholder='请输入查询条件'
            style={{width: '500px', marginBottom: 10}}
          />
          <Certificates certificate={certificate} />
        </Modal>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <SearchWrapper onSearch={this.onSearch}/>
          <RemoteTable
            ref='remote'
            url={api.ARCHIVES}
            scroll={{x: '1800px'}}
            columns={columns}
            rowKey={'assetsRecord'}
            style={{marginTop: 10}}
          /> 
          {/* <Table 
            bordered={true}
            style={{marginTop: 10}}
            scroll={{x: '1800px'}}
            columns={columns} 
            dataSource={ArchivesData} 
            rowKey={'id'}
          /> */}
        </div>
      </Content>
    )
  }
}
export default Archives;