'use client';

import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { CourseList } from './course/list';
import { CourseEdit } from './course/edit';
import { CourseCreate } from './course/create';

import { UnitList } from './unit/list';
import { UnitEdit } from './unit/edit';
import { UnitCreate } from './unit/create';

import { LessonList } from './lesson/list';
import { LessonEdit } from './lesson/edit';
import { LessonCreate } from './lesson/create';

import { ChallengeList } from './challenge/list';
import { ChallengeEdit } from './challenge/edit';
import { ChallengeCreate } from './challenge/create';

const dataProvider = simpleRestProvider('/api');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation="title"
        list={CourseList}
      />
      <Resource
        name="units"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation="title"
      />
      <Resource
        name="lessons"
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
        recordRepresentation="title"
      />
      <Resource
        name="challenges"
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
        recordRepresentation="title"
      />
    </Admin>
  );
};

export default App;
