
import { globalAction } from '../action';
const { SET_BREAD } = globalAction;

const global = {
  menu: {
    activeKey: 'archives',//默认active
    list: [
      { link: '/archives', title: '资产档案', icon: 'book' }
    ]
  },
  bread: [
    {
      title: '主页'
    },
    {
      title: '资产档案',
      link: '/archives'
    }
  ]
}

export default (state = global, action) => {
  switch(action.type) {
    case SET_BREAD: {
      return state;
    }
    default: {
      return state;
    }
  }
}