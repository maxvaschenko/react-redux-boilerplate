import React, {Component} from "react";
import {BrowserRouter as  Router, Link, Switch} from 'react-router-dom';
import {Route} from 'react-router';
import {connect} from "react-redux";
import {$showSidebar, $hideSidebar, $initApp, $getData} from "../redux/action/app";
import {__Home__, __Sidebar__, __Content__} from "./styled";
import componentLoader from "../components/componentLoader";


@connect(state => state, {
    $showSidebar,
    $hideSidebar,
    $initApp,
    $getData
})

class Home extends Component {

    render() {
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
                                {this.props.app.data && this.props.app.data.map(i => (
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
                            {this.props.app.data && this.props.app.data.map((i) => {
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
                            {this.props.app.data && shouldRedirect && <Route exact path="/"
                                                                             component={componentLoader(() => import('../components/' + this.props.app.data[0].path)
                                                                                 .then(module => module.default).catch(e => console.log(e)), {})}
                            />}
                            {this.props.app.data && <Route path="*" render={() => (
                                <div><h1>404 Not found!</h1></div>
                            )}/>}
                        </Switch>
                    </__Content__>
                </__Home__>
            </Router>
        )
    }
}

export default Home
