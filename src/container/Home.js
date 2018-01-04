import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import {connect} from "react-redux";
import {$url} from "../redux/action/app";
import createBrowserHistory from 'history/createBrowserHistory'
import {__Home__} from "./styled";
import DummyChart from "../components/tabs/dummyChart";
import DummyList from "../components/tabs/dummyList";
import DummyTable from "../components/tabs/dummyTable";

const history = createBrowserHistory()

const data =
    [
        {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js'},
        {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js'},
        {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js'}
    ];


@connect(state => state,{
    $url
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }

    render() {
        const routes = [
            { path: 'tabs/dummyTable.js',
                exact: true,
                main: <DummyTable/>
            },
            { path: 'tabs/dummyChart.js',
                main: <DummyChart/>
            },
            { path: 'tabs/dummyList.js',
                main: <DummyList/>
            }
        ];
        console.log(this.state);
        return (
            <Router history={history}>
                <__Home__>
                    <ul>
                        {data.map(i => (
                            <li key={i.id}>
                                <Link
                                    to={`/${i.id}`}
                                    onClick={e => this.props.$url(i.id)}
                                >
                                    <span>{i.order}</span>{i.title}</Link>
                            </li>
                        ))}
                    </ul>

                    {data.map((i, index) => {
                        const component = routes.filter((item => item.path === i.path))[0].main;
                            return (
                            <Route
                                key={index}
                                path={`/${i.id}`}
                                render={() => (
                                    component ?
                                    component :
                                    <Redirect to={this.props.app.url}/>
                                )}
                                refresh={true}
                            />
                        )
                    }
                    )}

                </__Home__>
            </Router>
        )
    }
}

export default Home
