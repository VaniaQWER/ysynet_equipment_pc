import React, { Component } from 'react';
import { Form, Row, Col, Input, Table, Icon, Button } from 'antd';
import { RepairData } from '../../../mock';
import { Link } from 'react-router';
const FormItem = Form.Item;
/**
 * @file 维修记录
 */

 class RepairRecordForm extends Component {
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }
   render () {
    const { getFieldDecorator } = this.props.form;
     return (
        <Form
          className="ant-advanced-search-form"
        >
        <Row gutter={24} style={{padding: 10}}>
          <Col span={6} key={1} >
            <FormItem label={`维修单号`}>
              {getFieldDecorator(`a`)(
                <Input placeholder="维修单号"/>
              )}
            </FormItem>
          </Col>
          <Col span={6} key={2} >
            <FormItem label={`状态`}>
              {getFieldDecorator(`b`)(
                <Input placeholder="状态"/>
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
  render () {
    const backurl = this.props.backurl;
    const columns = [
      {
        title: '操作',
        dataIndex: 'id',
        width: 100,
        render: text => <Link to={{pathname: `${backurl}/${text}`}}><Icon type="form" />详情</Link>
      }, {
        title: '维修单号',
        dataIndex: 'id1',
        width: 200
      },{
        title: '状态',
        dataIndex: 'id2',
        width: 100
      },{
        title: '维修结果',
        dataIndex: 'id3',
        width: 100
      },{
        title: '紧急度',
        dataIndex: 'id4',
        width: 100
      },{
        title: '申报人',
        dataIndex: 'id5',
        width: 100
      },{
        title: '维修人',
        dataIndex: 'id6',
        width: 100
      },{
        title: '维修性质',
        dataIndex: 'id7',
        width: 100
      },{
        title: '维修类型',
        dataIndex: 'id8',
        width: 100
      },{
        title: '期望完成时间',
        dataIndex: 'id9',
        width: 200
      },{
        title: '最后更新时间',
        dataIndex: 'id10',
        width: 200
      },
    ]
    return (
      <div>
        <RepairRecordWrapper/>
        <Table 
          bordered={true}
          style={{marginTop: 10}}
          scroll={{x: '1800px'}}
          columns={columns} 
          dataSource={RepairData} 
          rowKey={'id'}
        />
      </div>
    )
  }
}

export default RepairRecord;