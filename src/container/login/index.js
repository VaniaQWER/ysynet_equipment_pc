import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert, message,Tabs,Col ,Row} from 'antd';
import { Link } from 'react-router';

const { TabPane } = Tabs;
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state = {
    loading: false,
    alert: false,
    code: '',
    count: 0,
    type: 'account',
  }
  componentDidMount = () => {
    
  }

  onSwitch = (key) => {
    this.setState({
      type: key,
    });
  }
  codeReset = () => {
    this.props.form.setFieldsValue({
      code: '',
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loading: true
        })
    


      }
    });
  }
  onClose = () => {
    this.setState({
      loading: false,
      alert: false
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { count, type } = this.state;
    return (
      <div className="main">
      <Form onSubmit={this.handleSubmit}>
        <Tabs animated={false} className="ant-tabs" activeKey={type} onChange={this.onSwitch}>
            <TabPane tab="账户密码登录" key="account">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: '请输入用户名!'}],
          })(
            <Input addonBefore={<Icon type='user'/>} placeholder='用户名'/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
          )}
        </FormItem>
        </TabPane>
        <TabPane tab="手机号登录" key="mobile">
              <FormItem>
                {getFieldDecorator('mobile', {
                  rules: [{
                    required: type === 'mobile', message: '请输入手机号！',
                  }, {
                    pattern: /^1\d{10}$/, message: '手机号格式错误！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="mobile" className="prefixIcon" />}
                    placeholder="手机号"
                  />
                )}
              </FormItem>
         
            </TabPane>
          </Tabs>
        {this.state.alert ? <Alert  onClose={this.onClose} message="网络异常" closable type="error" showIcon /> : null}
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我!</Checkbox>
          )}
         <Link className="login-form-forgot" to='/register'>注册</Link>
   
          <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
            登录
          </Button>
        </FormItem>
      </Form>
      </div>
    )
  }
}
const LoginForm = Form.create()(NormalLoginForm);

class Login extends React.Component {
  render() {
    return (
      <div className="container">

         <div className="top">
          <a className="login-logo"></a>
         </div>
        <LoginForm login={this.props.router}/>
      </div>

    );
  }
}

export default Login;