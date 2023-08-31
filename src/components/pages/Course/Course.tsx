import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseInfoTable from './CourseInfoTable';
import './Course.scss';
import {
  CertificateItem,
  DEFAULT_TITLE,
  FIREBASE_RTDB_URL,
} from '../../../utilities/models';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../utilities/LoadingSpinner/LoadingSpinner';

const Course = () => {
  const { id } = useParams();

  const getCourse = async () =>
    await fetch(FIREBASE_RTDB_URL + `courses/${Number(id) - 1}.json`)
      .then((response) => response.json())
      .then((data) => data);

  const { data: courseToDisplay } = useQuery<CertificateItem>(
    ['Course', 'project_list'],
    getCourse
  );

  useEffect(() => {
    document.title = courseToDisplay?.name || DEFAULT_TITLE;
  }, [courseToDisplay]);

  if (!courseToDisplay) {
    return <LoadingSpinner />;
  }

  if (!courseToDisplay.show) {
    return <p>Not found</p>;
  }

  return (
    <>
      <div className="course_cover">
        <h1 className="course_title">{courseToDisplay?.name}</h1>
        <div className="course_linkContainer">
          <a
            className="certificate_link"
            href={`${courseToDisplay?.certificate_link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${courseToDisplay?.icon}`} alt="Course badge" />
          </a>
          <p className="course_clickPicture">
            Click on the picture to see the certificate
          </p>
        </div>
      </div>
      <CourseInfoTable course={courseToDisplay} />
      <div
        style={{
          marginBottom: '40px',
        }}
      >
        <a
          href={`${courseToDisplay?.course_link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="global__button global__smallButton"
        >
          Check this course!
        </a>
      </div>
    </>
  );
};

export default Course;