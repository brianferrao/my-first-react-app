import './Seasons.css';
import React from 'react';

const seasonConfigs = {
    summer : {
        text: `Let's go to the beach`,
        iconClass: 'sun'
    },
    winter: {
        text: `Burr, its chilly`,
        iconClass: 'snowflake'
    }
};

const  getSeason = (lat, month) => {
    if(month >2 && month <9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const Seasons = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconClass} = seasonConfigs[season];
    return (
        <div className={`seasons ${season}`}>
            <i className={ `icon-left massive icon ${iconClass}`}></i>
            <h1>{text}</h1>
            <i className={ `icon-right massive icon ${iconClass}`}></i>
        </div>
    );
};

export default Seasons;