import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchRobots = async () => {
        setLoading(true);
        try {
            const robotsData = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            const response = await robotsData.json();
            setRobots(response);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRobots();
    }, []);

    const onSearchTitle = (name) => {
        setSearchTitle(name);
    };

    const filteredRobots = robots.filter((robot) => {
        return robot.name
            .toLowerCase()
            .includes(searchTitle.toLocaleLowerCase());
    });

    if (loading) {
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
                searchTitle={searchTitle}
                onSearchTitle={onSearchTitle}
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
