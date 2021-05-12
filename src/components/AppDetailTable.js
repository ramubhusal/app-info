import React from 'react';
import { Table } from 'semantic-ui-react';
import TableRow from './TableRow';

const AppDetailTable = (props) => {
    const tableRow = [
        {
            url: "https://dev01.farrms.us/TRMTracker_MMWEC/trmclient/",
            icon: "chrome",
            label: "URL"
        },
        {
            url: "http://dev.farrms.us:18080/pioneer/products/trmtracker/branches/TRMTracker_MMWEC/Ver_4.2.000",
            icon: "git square",
            label: "SVN or GIT"
        },
        {
            url: "SG-D-SQL01.farrms.us,2033",
            icon: "database",
            label: "DB Server\\Instance"
        },
        {
            url: "TRMTracker_MMWEC",
            icon: "file text outline",
            label: "DB Name"
        },
        {
            url: "SVN Commit",
            icon: "code branch",
            label: "Branching Info"
        },
        {
            url: "From /branches/TRMTracker_MMWEC/Ver_4.1.000, revision 67517 on March 29,2017 4:52:32 AM NP",
            icon: "exchange",
            label: "Change Introduction Method"
        },
        {
            url: "Accuweather Bloomberg ExcelSnapshot ICE Forward Price",
            icon: "newspaper",
            label: "SSIS Info"
        },
        {
            url: "PHP(5.6.27), IE(10,11)/Chrome",
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
                    tableRow.map(item => <TableRow {...item}/>)
                }
            </Table.Body>
        </Table>
    )
}

export default AppDetailTable;