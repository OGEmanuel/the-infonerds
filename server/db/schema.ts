import {
  index,
  pgTableCreator,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator(name => `infonerd_${name}`);

export const files = createTable(
  'files',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    key: text('key').notNull(),
    status: text('status').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
  },
  example => ({ nameIndex: index('name_idx').on(example.name) }),
);
