import React from 'react'
import './JobCard.css'
function JobCard() {
    return (
        <div className='job-card-details'>
            <div className="icon-title">
                <img src="https://logo.clearbit.com/dropbox.com" alt="" className='job-company-image' />
                <div className="name-role">
                    <a href='https://weekday.works' className="job-company-name">FlexWash Technologies</a>
                    <p className='job-role'>Senior Engineer</p>
                    <p className="job-location">Bangalore | Exp: 5-5 years</p>
                </div>
            </div>
            <p className='job-salary'> 
            Estimated Salary: ₹30 - 60 LPA ✅
            </p>
            <p className='job-short-description-title'>About Company</p>
            <p className="job-short-description">
            FamPay is building India’s first neo-bank exclusively teens. 
            FamPay helps teens make their own online 
            and offline payments through UPI, FamPay App and FamCard. 
            Our aim is to make banking cool for teens and to help them learn the value of money, 
            savings and spending wisely. We are on a mission to raise a new, 
            financially aware generation, and drive 250 Million+ Indian teenagers to kickstart 
            their financial journey super early in their life.
            </p>
            <p className='popup-btn'>Show More</p>

            <h3>Minimum Experience</h3>
            <p className='experience-required'>1 Years</p>
            <button className='easy-apply'>
            ⚡ Easy Apply
            </button>
           
        </div>
    )
}

export default JobCard