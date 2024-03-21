import 'dotenv/config';

import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log('Seeding the database...');

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: 'English',
        imageSrc: '/flag/us.svg',
      },
      {
        id: 2,
        title: 'Spanish',
        imageSrc: '/flag/es.svg',
      },
      {
        id: 3,
        title: 'Hindi',
        imageSrc: '/flag/in.svg',
      },
      {
        id: 4,
        title: 'Japanese',
        imageSrc: '/flag/jp.svg',
      },
      {
        id: 5,
        title: 'German',
        imageSrc: '/flag/gr.svg',
      },
      {
        id: 6,
        title: 'French',
        imageSrc: '/flag/fr.svg',
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        title: 'Unit 1',
        description: 'Learn the basics of Spanish',
        courseId: 2,
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: 'Nouns',
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: 'Verbs',
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: 'Adjectives',
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: 'Adverbs',
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: 'Prepositions',
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: 'SELECT',
        question: 'Which one of these is the "the man"?',
        order: 1,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1, // which one of these is the "the man"
        text: 'el hombre',
        correct: true,
        imageSrc: '/man.svg',
        audioSrc: '/es_man.mp3',
      },
      {
        id: 2,
        challengeId: 1, // which one of these is the "the man"
        text: 'la mujer',
        correct: false,
        imageSrc: '/woman.svg',
        audioSrc: '/es_woman.mp3',
      },
      {
        id: 3,
        challengeId: 1, // which one of these is the "the man"
        text: 'el robota',
        correct: false,
        imageSrc: '/robot.svg',
        audioSrc: '/es_robot.mp3',
      },
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed the database');
  }
};

main();
