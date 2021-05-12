import React, { useState } from 'react';
import AppListPlaceholder from './AppListPlaceholder';
import { Segment, Accordion, Icon } from 'semantic-ui-react';
import Glossary from './Glossary';
import DocHelpFiles from './DocHelpFiles';
import PioneerProjects from './PioneerProjects';

const RightPanel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleClick (event, titleProps) {
        const newIndex = activeIndex === titleProps.index ? -1 : titleProps.index;

        setActiveIndex(newIndex);
    }

    return (
        <Segment fluid color='red'>
                <Accordion styled fluid>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={handleClick}
                >
                    <Icon name='dropdown' />
                    Glossary
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 0} className="accordionText">
                    <Glossary />
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={handleClick}
                >
                    <Icon name='dropdown' />
                    Documents and Help Files
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 1} className="accordionText">
                    <DocHelpFiles />
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={handleClick}
                >
                    <Icon name='dropdown' />
                    Pioneer Projects
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2} className="accordionText">
                    <PioneerProjects />
                </Accordion.Content>
                </Accordion>
        </Segment>
    )
}

export default RightPanel;