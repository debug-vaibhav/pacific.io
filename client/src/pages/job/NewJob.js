import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/ui/breadcrumb/Breadcrumb';
import { InputRounded, Chip, Button, ButtonOutlined, InputLabeled, TextareaLabeled, Select } from '../../components/custom/components';
import Steps from '../../components/ui/steps/Steps';
import { SQL_KEYWORDS_REGEX } from '../../constants/constants';
import styles from './newJob.scss';

const options = [
    {
        key: 1,
        text: 'Microsoft SQL Server',
        value: 'microsoftSqlServer',
    },
    {
        key: 2,
        text: 'MySQL',
        value: 'mysql',
    },
    {
        key: 3,
        text: 'MongoDB',
        value: 'mongoDb',
    },
];

const jobSteps = [
    {
        name: 'Details',
        header: 'Enter job details',
        active: true,
    },
    {
        name: 'Description',
        header: 'Describe the job',
        active: false,
    },
    {
        name: 'Configuration',
        header: 'Configure the job',
        active: false,
    },
    {
        name: 'Execution',
        header: 'Setup job execution',
        active: false,
    },
];

const NewJob = (props) => {
    const [query, setQuery] = useState('');
    const [steps, setSteps] = useState(jobSteps);

    const beautifyQuery = (event) => {
        let value = event.target.value;
        let matchedKeywords = new Set(value.match(SQL_KEYWORDS_REGEX));
        if (matchedKeywords.size !== 0) {
            for (let keyword of matchedKeywords) {
                let beautifiedQuery = value.replaceAll(keyword, keyword.toUpperCase());
                setQuery(beautifiedQuery);
            }
        } else {
            setQuery(value);
        }
    };

    const navigateToStep = (stepKey) => {
        const newSteps = [];
        for (let step of steps) {
            if (step.name === stepKey) {
                newSteps.push({ ...step, active: true });
            } else {
                newSteps.push({ ...step, active: false });
            }
        }
        setSteps(newSteps);
    };

    return (
        <div className={styles['container']}>
            <Breadcrumb />
            <div className={styles['data-container']}>
                <Steps steps={steps} onStepChange={navigateToStep} />
                <div className={styles['step-data-container']}>
                    {steps[0].active && (
                        <div className={styles['details-container']}>
                            <InputLabeled label="Enter Job Name" overriddenStyles={styles['job-name-field']} />
                            <TextareaLabeled label="Enter Job Description" overriddenStyles={styles['job-description-field']} rows="5" />
                            <Select name="jobType" id="jobType" label="Select Job Type" overriddenStyles={styles['job-type-selector']} options={options} />
                        </div>
                    )}
                    {steps[1].active && (
                        <div className={styles['editor-container']}>
                            <div className={styles['text-container']}>
                                <textarea value={query} onChange={beautifyQuery} />
                            </div>
                        </div>
                    )}
                    {steps[2].active && (
                        <div className={styles['config-container']}>
                            <Select name="jobSource" id="jobSource" label="Select Source" overriddenStyles={styles['job-source-selector']} options={options} />
                            <div className={styles['job-sources-container']}>
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                            </div>
                            <Select name="jobSink" id="jobSink" label="Select Sink" overriddenStyles={styles['job-sink-selector']} options={options} />
                            <div className={styles['job-sinks-container']}>
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                                <Chip text="Microsoft SQL Server v14.5.0" icon={<FontAwesomeIcon icon={faTimes} />} overriddenStyles={styles['selected-source-chip']} />
                            </div>
                        </div>
                    )}
                    {steps[3].active && (
                        <div className={styles['execution-container']}>
                            <InputLabeled label="Enter Cron Expression" overriddenStyles={styles['cron-field']} />
                        </div>
                    )}
                </div>
                <div className={styles['action-container']}>
                    <Button name="create-btn" title="create" styles={styles['create-btn']} />
                    <ButtonOutlined name="reset-btn" title="reset" styles={styles['reset-btn']} />
                </div>
            </div>
        </div>
    );
};

export default NewJob;
