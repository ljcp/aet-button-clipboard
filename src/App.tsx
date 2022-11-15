import React from 'react';
import './App.css';

import 'antd/dist/antd.min.css';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import ButtonClipboard from './components/ButtonClipboard';
import { Layout } from 'antd';
function App() {
  return (
    <Layout style={{height:"100vh"}}>
      <Header style={{color:"white"}}>AET Welcome task for FE engineer</Header>
      <Content className='content'>
        <ButtonClipboard  clipboardText="I will be in the clipboard as you click the button">
          I'm a very useful link!
        </ButtonClipboard>
      </Content>
      <Footer>Luis Castillo</Footer>
  </Layout>
  );
}

export default App;
