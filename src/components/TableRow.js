import React, { useState } from 'react';
import { Icon, Table } from 'semantic-ui-react';
import AppCell from './AppCell';

const TableRow = (props) => {
    const [iconName, setIconName] = useState('copy outline');

    const copyCodeToClipboard = (event) => {
        const test = event.currentTarget.parentElement.querySelectorAll('td')[2].innerText;

        navigator.clipboard.writeText(test);
        setIconName('check circle');

        setTimeout(() => {
            setIconName('copy outline');
        }, 2000);
    }

    return (
        <Table.Row>
            <Table.Cell collapsing>
                <Icon name={props.icon} size="large" />
            </Table.Cell>
            <Table.Cell collapsing>
                {props.label}
            </Table.Cell>
            <Table.Cell className="appCell">
                <AppCell urlData={props.url} />
            </Table.Cell>
            <Table.Cell collapsing onClick={copyCodeToClipboard} className="tableCopyIcon">
                <Icon name={iconName} size="large" />
            </Table.Cell>
        </Table.Row>
    );
}

export default TableRow;