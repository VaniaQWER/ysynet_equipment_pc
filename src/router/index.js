import { hashHistory } from 'react-router';
export const routes =  {
  childRoutes: [
    {
      path: '/login',// 登录
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/login').default)
        })
      }
    },
    {
      path: '/',//主页
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/home').default)
        })
      },
      childRoutes: [
        {
          path: '/archives',//资产档案
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/archives').default)
            })
          },
          childRoutes: [
            {
              path: '/archives/detail',//资产档案详情
              getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                  cb(null, require('../container/archives/detail').default)
                })
              },
              onEnter: (nextState, replace, next) => {
                if (nextState.location.state) {
                  next();
                } else {
                  hashHistory.push({pathname: '/archives'})
                }
              },
              childRoutes: [
                {
                  path: '/archives/detail/repair',//资产档案详情
                  getComponent: (nextState, cb) => {
                    require.ensure([], (require) => {
                      cb(null, require('../container/archives/detail/repair/repairDetail').default)
                    })
                  }, 
                  onEnter: (nextState, replace, next) => {
                    if (nextState.location.state) {
                      next();
                    } else {
                      hashHistory.push({pathname: '/archives'})
                    }
                  },   
                }
              ]
            }
          ]
        }
      ]
    },
  ]
}