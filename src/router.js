import React from 'react';
import { Router, Route, Switch } from 'dva/router';


import IndexPage from './routes/IndexPage';



import Yycl from '././routes/other/yycl';
import Zxkf from '././routes/other/zxkf';
import Dhzx from '././routes/other/dhzx';
import Cpml from '././routes/other/cpml';
import Sy from '././routes/other/sy';



function RouterConfig({ history }) {

  return (
    <div style={{
      height: '100%'
    }}>

      <Router history={history}>
        <Switch>
          {/* 下面这个路由别动 */}
          <Route path="/hfshhehfe" exact component={IndexPage} />
          <Route path="/" exact component={Sy} />
          <Route path="/yycl" exact component={Yycl} />
          <Route path="/zxkf" exact component={Zxkf} />
          <Route path="/dhzx" exact component={Dhzx} />
          <Route path="/cpml" exact component={Cpml} />
        </Switch>
      </Router>
    </div>



  );
}

export default RouterConfig;
