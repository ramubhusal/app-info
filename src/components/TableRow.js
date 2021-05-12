import React, { useState } from 'react';
import { Icon, Table } from 'semantic-ui-react';

const TableRow = (props) => {
    const [iconName, setIconName] = useState('copy outline');

    const copyCodeToClipboard = (event) => {
        const elmLink = event.target.parentElement.querySelector('a');
        const elmPara = event.target.parentElement.querySelector('p');
        (elmLink) ?
        navigator.clipboard.writeText(elmLink.href) :
        navigator.clipboard.writeText(elmPara.innerHTML)
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
            <Table.Cell>
                {
                    props.url.indexOf('http') >= 0 ? 
                    <a target="_blank" href={props.url}>
                    {props.url}
                    </a>
                    :
                    <p>{props.url}</p>
                }
            </Table.Cell>
            <Table.Cell collapsing onClick={copyCodeToClipboard} className="tableCopyIcon">
                <Icon name={iconName} size="large" />
            </Table.Cell>
        </Table.Row>
    );
}

export default TableRow;