import React, { useState, useEffect } from 'react';
import { Card, Tab, Icon } from 'semantic-ui-react';
import AppDetailTable from './AppDetailTable';
import api from '../api';
import AppListPlaceholder from './AppListPlaceholder';

const AppDetail = (props) => {
    const [tabs, setTabs] = useState(null);
    const [header, setHeader] = useState(null);

    useEffect(() => {
        setTabs(null);
        getAppDetail();
    }, [props.appID])

    async function getAppDetail() {
        const data = {
            app_id: props.appID
        }
        const res = await api.post('/appInfo/getDetail', data).catch((err) => {
            console.log(err);
        });

        if (Object.keys(res.data).length > 0) {
            const detailData = res.data.detail.map((item, index) => {
                return {
                    key: item.id,
                    menuItem: item.version_name,
                    render: () => {
                        const rowData = item;
                        return (
                            <Tab.Pane><AppDetailTable rowData={rowData} /></Tab.Pane>
                        )
                    }
                }
            });

            setHeader({
                id: res.data.id,
                name: res.data.name,
            });

            setTabs(detailData);
        }
    }

    function closeDetail(event) {
        props.setGlossaryOrDetail("g");
    }

    return (
        <Card fluid color='green'>
            <Card.Content>
                {
                    header && (
                        <Card.Header>
                        {header.name}
                        <Icon onClick={closeDetail} className="windowCloseIcon" name="window close" size="large" />
                        </Card.Header>
                    )
                }
            </Card.Content>
            <Card.Content>
                <Card.Description>
                    {
                        tabs === null ?
                        <AppListPlaceholder />:
                        <Tab panes={tabs}
                            renderActiveOnly={true}
                            defaultActiveIndex={0} />
                    }
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default AppDetail;