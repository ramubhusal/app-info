import React from 'react';
import { Card, Tab, Icon } from 'semantic-ui-react';
import AppDetailTable from './AppDetailTable';
import appData from '../ApplicationData';

const AppDetail = (props) => {
    const panes = [
        {
            menuItem: 'Tab 1', render: () => <Tab.Pane><AppDetailTable /></Tab.Pane>
        },
        {
            menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
        },
        {
            menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
        },
    ];

    function closeDetail(event) {
        props.setGlossaryOrDetail("g");
    }

    return (
        <Card fluid color='green'>
            <Card.Content>
                {
                    appData.filter((item) => {
                        return item.id === parseInt(props.appID)
                    }).map(item => {
                        return (
                            <Card.Header>
                            {item.name}
                            <Icon onClick={closeDetail} className="windowCloseIcon" name="window close" size="large" />
                            </Card.Header>
                        )
                    })
                }
            </Card.Content>
            <Card.Content>
                <Card.Description>
                    <Tab panes={panes} />
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default AppDetail;