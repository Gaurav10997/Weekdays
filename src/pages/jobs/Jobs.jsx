import React from 'react'
import './Jobs.css'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import JobCard from '../../components/jobCard/JobCard';
function Jobs() {
    const [jobs, setJobs] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.post(
                    "https://api.weekday.technology/adhoc/getSampleJdJSON",
                    {
                        limit: 10,
                        offset: 0
                    },
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );
                setJobs(response.data.jdList);
                console.log(response.data.jdList)
                // Do something with the response data here
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='job-container'>
            {jobs.map((job, index) => {
                return <JobCard 
                key={index} 
                job={job} 
                companyName={job.companyName} 
                logoUrl={job.logoUrl}
                jobRole={job.jobRole}
                location={job.location}
                minExp={job.minExp}
                maxExp={job.maxExp}
                minJdSalary={job.minJdSalary}
                maxJdSalary={job.maxJdSalary}
                salaryCurrencyCode={job.salaryCurrencyCode}
                jobDetailsFromCompany={job.jobDetailsFromCompany}
                />;
            })}

        </div>
    )
}

export default Jobs