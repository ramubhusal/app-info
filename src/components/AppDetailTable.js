import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import TableRow from './TableRow';

const AppDetailTable = (props) => {
    const tableRow = [
        {
            url: props.rowData.url,
            icon: "chrome",
            label: "URL"
        },
        {
            url: props.rowData.remote_url,
            icon: "git square",
            label: "SVN or GIT"
        },
        {
            url: props.rowData.db_server,
            icon: "database",
            label: "DB Server\\Instance"
        },
        {
            url: props.rowData.db_name,
            icon: "file text outline",
            label: "DB Name"
        },
        {
            url: props.rowData.branching_info,
            icon: "code branch",
            label: "Branching Info"
        },
        {
            url: props.rowData.change_intro_method,
            icon: "exchange",
            label: "Change Introduction Method"
        },
        {
            url: props.rowData.ssis_info,
            icon: "newspaper",
            label: "SSIS Info"
        },
        {
            url: props.rowData.supported_browser,
            icon: "globe",
            label: "Supported Browser"
        },
    ];
    
    return (
        <Table striped celled color="blue" >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>ENTITY/VERSION</Table.HeaderCell>
                    <Table.HeaderCell>App</Table.HeaderCell>
                    <Table.HeaderCell>#</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    tableRow.map((item, index) => <TableRow key={index} {...item}/>)
                }
            </Table.Body>
        </Table>
    )
}

export default AppDetailTable;