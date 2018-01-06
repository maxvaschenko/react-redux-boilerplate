import React, {Component} from "react";
import { BrowserRouter as  Router, Link, Switch} from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import {connect} from "react-redux";
import {$showSidebar, $hideSidebar, $initApp} from "../redux/action/app";
import {__Home__, __Sidebar__, __Content__} from "./styled";
import componentLoader from "../components/componentLoader";



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

        const comparedArr = data.slice().sort((a, b) => {
            if (a.order > b.order) return 1;
            if (a.order < b.order) return -1;
            if (a.order = b.order) return 0;
        });

        let FirstComponent = null;

        if (comparedArr.length > 0) {
            FirstComponent = componentLoader(() => import('../components/' + comparedArr[0].path)
                .then(module => module.default).catch(e => console.log(e)), {});
        }
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
                            {data.map((i) => {
                                    const component = componentLoader(() => import('../components/' + i.path)
                                        .then(module => module.default).catch(e => console.log(e)), {});
                                    return (
                                        <Route
                                            key={i.id}
                                            path={`/${i.id}`}
                                            component={component}
                                        />
                                    )
                                }
                            )}
                            {FirstComponent && <Route exact path="/" component={FirstComponent}/>}
                            <Route path="*" render={() => (
                                <div><h1>404 Not found!</h1></div>
                            )}/>
                        </Switch>
                    </__Content__>
                </__Home__>
            </Router>
        )
    }
}

export default Home
