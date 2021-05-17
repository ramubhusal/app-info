import React from 'react'
import { Pagination, Table } from 'semantic-ui-react';

const AppListTable = (props) => {
    const activePage = props.activePage;
    const pageCount = (props.tableData === null) ? 1 : (1 + (props.tableData.length / 10)).toFixed();
    const startCount = (activePage == 1) ? 0 : ((10 * (activePage - 1)));
    const endCount = activePage * 10;

    function renderData(event, pageProp) {
        props.setActivePage(pageProp.activePage);
    }

    function openAppDetail(event) {
        const rowID = event.target.parentNode.id;
        props.setAppID(rowID);
        props.setGlossaryOrDetail("d");
    }

    return (
        <Table celled compact size="small" textAlign="center" striped>
            <Table.Header className="tableHeaderData">
                <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>APPLICATION NAME</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    (props.tableData !== null) && props.tableData.map((item, index) => {
                        if (index >= startCount && index < endCount) {
                            return (
                                <Table.Row key={index} className="tableRowData" id={item.id} >
                                    <Table.Cell collapsing>{item.id}</Table.Cell>
                                    <Table.Cell className="clickableTableCell" onClick={openAppDetail}>
                                            {item.name}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }
                    })
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='2'>
                    <Pagination boundaryRange={0}
                        onPageChange={(event, data) => renderData(event, data)}
                        defaultActivePage={activePage}
                        siblingRange={1}
                        firstItem={true}
                        lastItem={true}
                        totalPages={pageCount} />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default AppListTable