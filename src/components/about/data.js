import React from 'react';

import api from '../../assets/icons/api.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'


const SkillData = [
    {
        id: 1,
        icon: computer,
        title: "Frontend Development",
        about: ["I can build a beautiful and scalable SPA using ",<strong key={1}>HTML, CSS and React.js</strong>]
    },
    {
        id: 2,
        icon: repair,
        title: "Backend  Development",
        about: ["Handle server and database using ", <strong key={2}>PHP and MySQL</strong>],
    },
    {
        id: 3,
        icon: api,
        title: "API Development",
        about: ["I can develop robust REST API using ",<strong key={3}> Laravel-rest-api </strong> ]
    },
    {
        id: 4,
        icon: algo,
        title: "Tools For Development",
        about: ["Knowledge of web development tools like ", <strong key={4}>Git and Jira</strong>]
    },
]

export default SkillData;