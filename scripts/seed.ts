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

    console.log('Database seeded successfully');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed the database');
  }
};

main();
