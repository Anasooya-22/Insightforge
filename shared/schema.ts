import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  varchar,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

// ================= USERS =================
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").default("respondent"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ================= STUDIES =================
export const studies = pgTable("studies", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  createdBy: varchar("created_by").references(() => users.id, {
    onDelete: "set null",
  }),
  createdAt: timestamp("created_at").defaultNow(),
});

// ================= QUESTIONS =================
export const questions = pgTable("questions", {
  id: uuid("id").defaultRandom().primaryKey(),
  studyId: uuid("study_id").references(() => studies.id, {
    onDelete: "cascade",
  }),
  questionText: text("question_text").notNull(),
  questionType: text("question_type").default("text"), // text, rating, choice
});

// ================= RESPONSES =================
export const responses = pgTable("responses", {
  id: uuid("id").defaultRandom().primaryKey(),
  questionId: uuid("question_id").references(() => questions.id, {
    onDelete: "cascade",
  }),
  userId: varchar("user_id").references(() => users.id, {
    onDelete: "cascade",
  }),
  answer: text("answer").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// ================= TYPES =================
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type Study = typeof studies.$inferSelect;
export type InsertStudy = typeof studies.$inferInsert;

export type Question = typeof questions.$inferSelect;
export type InsertQuestion = typeof questions.$inferInsert;

export type Response = typeof responses.$inferSelect;
export type InsertResponse = typeof responses.$inferInsert;