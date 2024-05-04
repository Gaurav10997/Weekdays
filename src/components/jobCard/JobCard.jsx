import React from 'react'
import './JobCard.css'
function JobCard({ companyName, logoUrl, jobRole, location, minExp, maxExp, minJdSalary, maxJdSalary, salaryCurrencyCode, jobDetailsFromCompany }) {
    return (
        <div className='job-card-details'>
            <div className="icon-title">
                <img src={logoUrl} alt="" className='job-company-image' />
                <div className="name-role">
                    <a href='https://weekday.works' className="job-company-name">{companyName}</a>
                    <p className='job-role'>{jobRole.toUpperCase()}</p>
                    <p className="job-location">{`${location.toUpperCase()} | Exp: ${minExp}-${maxExp} `} </p>
                </div>
            </div>
            <p className='job-salary'>
                Estimated Salary: {minJdSalary + salaryCurrencyCode} - {maxJdSalary + salaryCurrencyCode} ✅`
            </p>
            <p className='job-short-description-title'>About Company</p>
            <p className="job-short-description">
                {jobDetailsFromCompany}
            </p>
            <p className='popup-btn'>Show More</p>

            <h3>Minimum Experience</h3>
            <p className='experience-required'>{minExp} Years</p>
            <button className='easy-apply'>
                ⚡ Easy Apply
            </button>

        </div>
    )
}

export default JobCard