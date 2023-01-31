import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';
import { requestRobots, setSearchField } from '../store/actions';

function App() {
    const state = useSelector((state) => state);
    const {
        requestRobotsReducer: { pending, data },
        searchRobotsReducer: { searchField },
    } = state;

    const dispatch = useDispatch();

    useEffect(() => {
        requestRobots(dispatch);
    }, []);

    const onSearchField = (name) => {
        dispatch(setSearchField(name));
    };

    const filteredRobots = data.filter((robot) => {
        return (
            robot &&
            robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
        );
    });

    if (pending) {
        return (
            <div className='tc'>
                <h1 className='f2'>Robots app</h1>
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className='tc'>
            <h1 className='f2'>Robots app</h1>
            <SearchBox
                searchField={searchField}
                onSearchField={onSearchField}
            />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;
