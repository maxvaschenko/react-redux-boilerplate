import React, {Component} from "react";
import { BrowserRouter as  Router, Link, Switch} from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import {connect} from "react-redux";
import {$showSidebar, $hideSidebar, $initApp} from "../redux/action/app";
import {__Home__, __Sidebar__, __Content__} from "./styled";
import DummyChart from "../components/tabs/dummyChart";
import DummyList from "../components/tabs/dummyList";
import DummyTable from "../components/tabs/dummyTable";


const data =
    [
        {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js'},
        {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js'},
        {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js'}
    ];


@connect(state => state,{
    $showSidebar,
    $hideSidebar,
    $initApp
})

class Home extends Component {

    componentWillMount(){
        this.props.$initApp()
    }

    render() {
        const routes = [
            {
                path: 'tabs/dummyTable.js',
                exact: true,
                main: <DummyTable/>
            },
            {
                path: 'tabs/dummyChart.js',
                main: <DummyChart/>
            },
            {
                path: 'tabs/dummyList.js',
                main: <DummyList/>
            }
        ];
        const comparedArr = data.slice().sort((a, b) => {
            if (a.order > b.order) return 1;
            if (a.order < b.order) return -1;
            if (a.order = b.order) return 0;
        });
        const shouldRedirect = location.pathname === '/';
        return (
            <Router>
                <__Home__>
                    {this.props.app.showSideBar ?
                        <__Sidebar__>
                            <div
                            className="times"
                            onClick={this.props.$hideSidebar}
                        >
                            <i className="fa fa-times" aria-hidden="true"/>
                        </div>
                            <ul>
                            {comparedArr.map(i => (
                                <li key={i.id}>
                                    <Link
                                        to={`/${i.id}`}
                                    >
                                        <span className="order">{i.order + 1}</span>
                                        <span>{i.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        </__Sidebar__> :
                        <div
                            className="bars"
                            onClick={this.props.$showSidebar}
                        >
                            <i className="fa fa-bars" aria-hidden="true"/>
                        </div>
                    }
                    <__Content__>
                        <Switch>
                            {data.map((i, index) => {
                                    const component = routes.filter((item => item.path === i.path))[0].main;
                                    return (
                                        <Route
                                            key={index}
                                            path={`/${i.id}`}
                                            render={() => component}
                                        />
                                    )
                                }
                            )}
                            {shouldRedirect && <Redirect to={`/${comparedArr[0].id}`}/>}
                        </Switch>
                    </__Content__>
                </__Home__>
            </Router>
        )
    }
}

export default Home
