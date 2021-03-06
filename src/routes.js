import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./components/Home/index";
import User from "./components/User/index";
import Brand from "./components/Brand/index";
import WishList from "./components/WishList/index";
import './pubComponents/style/tab.css'
import Tab from "./pubComponents/Tab/index";
import Settlement from './components/Settlement/index'
import Harvest from './components/Harvest/index';
import ShoppingCars from './components/ShoppingCars/index'
import Login from './components/Login/index';
import NewAccount from './components/NewAccount/index';
import List from "./components/List/index"
import Detail from './components/Detail/index'
import Shop from "./components/Home/Shop";
import SearchList from "./components/Home/SearchList";
import Item1 from "./components/Home/SearchList/Item1";
import Item2 from "./components/Home/SearchList/Item2";
import Item3 from "./components/Home/SearchList/Item3";
import ListBtn from './components/List/ListBtn/index'
import BrandWomen from "./components/Brand/BrandWomen/index";
import BrandChildren from "./components/Brand/BrandChildren/index";
import Loading from "./components/Home/Loading-db";
import history from './store/history';
import {ConnectedRouter} from 'react-router-redux';
import Loading1 from "./components/Home/Loading-db1";

export default class Routes extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Tab/>
                    <Switch>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/" exact component={Loading1}/>
                        <Route path="/l" exact component={Loading}/>
                        <Route path="/brand" exact component={Brand}/>
                        <Route path="/wishList" exact component={WishList}/>
                        <Route path="/user" component={User}/>
                        <Route path="/list" component={List}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/search" component={SearchList}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/newAccount" component={NewAccount}/>
                        <Route path="/settlement" component={Settlement}/>
                        <Route path="/harvest" component={Harvest}/>
                        <Route path="/shoppingCars" component={ShoppingCars}/>
                        <Route path="/woman" component={BrandWomen}/>
                        <Route path="/children" component={BrandChildren}/>
                        <Route path="/listbtn" component={ListBtn}/>
                    </Switch>
                    <Route path="/search/item1" component={Item1}/>
                    <Route path="/search/item2" component={Item2}/>
                    <Route path="/search/item3" component={Item3}/>
                </div>
            </ConnectedRouter>
        )
    }
}

