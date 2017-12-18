import React, { Component } from 'react';
import { Form, Row, Col, Input, Icon, Button, Select } from 'antd';
// import { RepairData } from '../../../mock';
import TableGrid from '../../../component/tableGrid';
import { Link } from 'react-router';
import api from '../../../api';
import { UrgentFlag, OrderFstate, RrpairType } from '../../../constants';
import { createOptions } from '../../../utils/tools'
const Option = Select.Option;
const FormItem = Form.Item;
const { RemoteTable } = TableGrid;
/**
 * @file 维修记录
 */

 class RepairRecordForm extends Component {
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.props.onSearch(values);
    });
  }
   render () {
    const { getFieldDecorator } = this.props.form;
     return (
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.onSearch}
        >
        <Row gutter={24} style={{padding: 10}}>
          <Col span={6} key={1} >
            <FormItem label={`维修单号`}>
              {getFieldDecorator(`rrpairOrder`)(
                <Input placeholder="维修单号"/>
              )}
            </FormItem>
          </Col>
          <Col span={6} key={2} >
            <FormItem label={`状态`}>
              {getFieldDecorator(`assersRecord`, {
                initialValue: ''
              })(
                <Select style={{ width: 170 }}>
                  <Option value="">全部</Option>
                  {
                    createOptions(OrderFstate)
                  }
                </Select>  
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <Button type="primary" htmlType="submit" style={{marginRight: 10, marginTop: 5}}>查询</Button>
          </Col>
        </Row>  
      </Form>
     )
   }
 }
const RepairRecordWrapper = Form.create()(RepairRecordForm);
class RepairRecord extends Component {
  onSearch = (params) => {
    this.refs.remote.fetch(params);
  }
  render () {
    const { backurl } = this.props;
    const record = this.props.params.record;
    const columns = [
      {
        title: '操作',
        dataIndex: 'id',
        width: 100,
        render: (text, item) => 
          <Link to={{pathname: `${backurl}/repair`, state: {params: item, record: record}}}>
            <Icon type="form" />
            详情
          </Link>
      }, {
        title: '维修单号',
        dataIndex: 'rrpairOrder',
        width: 200
      },{
        title: '状态',
        dataIndex: 'assersRecord',
        width: 100,
        render: text => OrderFstate[text]
      },{
        title: '紧急度',
        dataIndex: 'urgentFlag',
        width: 100,
        render: text => UrgentFlag[text]
      },{
        title: '申报人',
        dataIndex: 'rrpairUserName',
        width: 100
      },{
        title: '维修人',
        dataIndex: 'maintainUserName',
        width: 100
      },{
        title: '维修性质',
        dataIndex: 'orderType',
        width: 100
      },{
        title: '维修类型',
        dataIndex: 'rrpairType',
        width: 100,
        render: text => RrpairType[text]
      },{
        title: '期望完成时间',
        dataIndex: 'completTime',
        width: 200
      },{
        title: '最后更新时间',
        dataIndex: 'modifyTime',
        width: 200
      },
    ]
    return (
      <div>
        <RepairRecordWrapper onSearch={this.onSearch}/>
        <RemoteTable
          ref='remote'
          url={api.REPAIR}
          scroll={{x: '1800px'}}
          columns={columns}
          rowKey={'rrpairOrder'}
          style={{marginTop: 10}}
        /> 
      </div>
    )
  }
}

export default RepairRecord;
// query={{...this.props.params}}