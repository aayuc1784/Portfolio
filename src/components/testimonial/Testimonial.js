import React from "react";
import "./Testimonial.css";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
    return (
        <section id="testimonial">
            <h5>A bit About me</h5>
            <h2>Now & Education</h2>

            <Swiper className="container testimonial__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true}} >

            <SwiperSlide className="testimonial">
                <h4 className="client__name">Experiences</h4>
                <small className="client__review">
                    <ul>
                        <b>
                            Upcoming SoftWare Developer Intern at Bank of New York Mellon 2024.
                        </b>
                    </ul>
                    <ul>
                        <b>
                            Secured Global Rank 76th, 175th, 280th and 344th in CodeChef Contests.
                        </b>
                    </ul>
                    <ul>
                        <b>
                            Secured Global Rank 495th,920th and 1123rd in LeetCode Contests out of 23K+ participants.
                        </b>
                    </ul>
                    <ul>
                        <b>
                            Solved more than <b>1250+</b> problems on LeetCode and Rank among top <b>3.2%</b>
                        </b>
                    </ul>
                    <ul>
                        <b>
                            Student Internship Representative of Department of Electrical Engineering, Indian Institute of Technology Dhanbad.
                        </b>
                    </ul>
                </small>
            </SwiperSlide>

            <SwiperSlide className="testimonial">
                <h4 className="client__name">Let me Introduce Myself</h4>
                <small className='client__review'>
                <ul>Full Name : Aayush Chauhan</ul>
                <ul>BirthDate : April 30th, 2005 </ul>
                <ul>WEBSITE : https://aayuc1784.github.io/aayuc1784/</ul>
                <ul>EMAIL : chauhanaayu100@gmail.com</ul>
                <ul>PHONE : +91-7037894142</ul>
              </small>
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
                <h5 className='client__name'>Currently Pursuing</h5>
                <small className='client__review'>
                    <ul>COLLEGE : Indian Institute of Technology, Dhanbad</ul>
                    <ul>CURRENT YEAR : Pre-Final Year</ul>
                    <ul>DEGREE : Bachelor of Technology</ul>
                    <ul>BRANCH : Electrical Engineering</ul>
                    <ul>CGPA (Upto 4th Semester) : 8.23</ul>
                </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
              <h5 className='client__name'>CLASS 12th</h5>
              <small className='client__review'>
                <ul>YEAR : 2021</ul>
                <ul>BOARD : State Board (UP Board)</ul>
                <ul>SCHOOL : Krishak Inter College</ul>
                <ul>FROM : Noorpur, Bijnor, Uttar Pradesh</ul>
                <ul>PERCENTAGE : 79%</ul>
              </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
              <h5 className='client__name'>CLASS 10TH</h5>
              <small className='client__review'>
                <ul>YEAR : 2019</ul>
                <ul>BOARD : State Board (UP Board)</ul>
                <ul>SCHOOL : Saint Stephen HSS</ul>
                <ul>FROM : Chandpur, Bijnor, Uttar Pradesh</ul>
                <ul>PERCENTAGE : 90%</ul>
                <ul>Award: Meritorious Student Award (District Rank 5th out of 50K+)</ul>
              </small>
          </SwiperSlide>
        </Swiper>
        </section>
    )
}

export default Testimonial