import './App.css';
import { Container, Grid, Card, Form, Segment } from 'semantic-ui-react';
import AppListTable from './components/AppListTable';
import { useEffect, useState } from 'react';
import AppDetail from './components/AppDetail';
import RightPanel from './components/RightPanel';
import api from './api';

function App() {
    const [appData, setAppData] = useState(null);
    const [appDataConst, setAppDataConst] = useState(null);
    const [activePage, setActivePage] = useState(1);
    const [glossaryOrDetail, setGlossaryOrDetail] = useState("g");
    const [appID, setAppID] = useState(null);

    useEffect(() => {
        collectAppInfo();
    }, []);

    function collectAppInfo() {
        api.get('/appInfo/get').then((response) => {
            let finalAppData = [];
            response.data.forEach((appInfo) => {
                let keywords = appInfo.name;
                appInfo.detail.forEach((appInfoDetail) => {
                    keywords += ', ' + appInfoDetail.db_name;
                });
                finalAppData.push({
                    id: appInfo.id,
                    name: appInfo.name,
                    keywords: keywords
                });
            });
            
            setAppData(finalAppData);
            setAppDataConst(finalAppData);
            console.log("finalAppData", finalAppData);
        }).catch((err) => {
            console.log(err);
        })
    }

    function filterData(event) {
        let searchQuery = document.getElementById('searchApplication').value;
        searchQuery = searchQuery.toLowerCase();
        const filteredData = appDataConst.filter((val) => {
            const keyword = val.keywords.toString().toLowerCase();
            return keyword.includes(searchQuery);
        });
        
        setAppData(filteredData);
        // const minPage = Math.min([...filteredData.map((item) => (item.id))]);
        setActivePage(1);
    }

    return (
        <Container fluid>
            <Grid divided='vertically'>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Card fluid color='green' 
                            header='Pioneer Solutions > Application Info'
                        />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column width={5}>
                        <Segment color='red'>
                            <Form>
                                <Form.Field>
                                <label>Search:</label>
                                <input autoComplete="off" onChangeCapture={filterData} id="searchApplication" placeholder='Application Name' />
                                </Form.Field>
                            </Form>
                            <br/>
                            <AppListTable
                                setActivePage={setActivePage}
                                setAppID={setAppID}
                                activePage={activePage}
                                setGlossaryOrDetail={setGlossaryOrDetail}
                                tableData={appData}
                            />
                        </Segment>
                    </Grid.Column>

                    <Grid.Column width={11}>
                        {
                            (glossaryOrDetail === "g") ? <RightPanel /> : <AppDetail appID={appID} setGlossaryOrDetail={setGlossaryOrDetail} />
                        }
                    </Grid.Column>
                
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default App;