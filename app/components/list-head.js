import React from 'react';

export default class TodosListHeader extends React.Component {
    render() {
        return (
            <thead>
            <tr>
                <th>Задача</th>
                <th>Действия</th>
            </tr>
            </thead>
        );
    }
}
