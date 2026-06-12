import React from 'react';
import './CareerJobs.css';
import { MdArrowForward } from 'react-icons/md';

const CareerJobs = () => {
  return (
    <section className="car_jobs">
      <div className="container">
        

        <div className="car_jobs_header">
          <span className="car_jobs_subtitle">OPEN POSITIONS</span>
          <h2 className="car_jobs_title">Come help us build the future of finsweet</h2>
        </div>

        <div className="car_jobs_grid">
          
          <div className="car_jobs_card">
            <h4 className="car_job_title">Full Stack Developer</h4>
            <div className="car_job_meta">
              <span>Development</span>
              <span className="car_job_dot"></span>
              <span>Remote</span>
            </div>
            <span className="car_job_link">
              Apply Now <MdArrowForward className="car_job_arrow" />
            </span>
          </div>

          <div className="car_jobs_card">
            <h4 className="car_job_title">Testing Management</h4>
            <div className="car_job_meta">
              <span>Development</span>
              <span className="car_job_dot"></span>
              <span>Remote</span>
            </div>
            <span className="car_job_link">
              Apply Now <MdArrowForward className="car_job_arrow" />
            </span>
          </div>

          <div className="car_jobs_card">
            <h4 className="car_job_title">UI/UX Designer</h4>
            <div className="car_job_meta">
              <span>Design</span>
              <span className="car_job_dot"></span>
              <span>Remote</span>
            </div>
            <span className="car_job_link">
              Apply Now <MdArrowForward className="car_job_arrow" />
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CareerJobs;