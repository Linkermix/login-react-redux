import React, {FC} from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/Navbar";
import './App.css';

const App: FC = () => {
    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
            <Layout.Footer>
            </Layout.Footer>
        </Layout>
    );
};

export default App;