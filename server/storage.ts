import { db } from "./db";
import { users, studies, questions, responses } from "@shared/schema";
import { eq } from "drizzle-orm";

import type {
  User,
  InsertUser,
  Study,
  InsertStudy,
  Question,
  InsertQuestion,
  Response,
  InsertResponse,
} from "@shared/schema";

export interface IStorage {
  // USERS
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // STUDIES
  createStudy(data: InsertStudy): Promise<Study>;
  getStudies(): Promise<Study[]>;
  getStudyById(id: string): Promise<Study | undefined>;
  deleteStudy(id: string): Promise<void>;

  // QUESTIONS
  createQuestion(data: InsertQuestion): Promise<Question>;
  getQuestionsByStudyId(studyId: string): Promise<Question[]>;

  // RESPONSES
  createResponse(data: InsertResponse): Promise<Response>;
}

export class PostgresStorage implements IStorage {
  // USERS
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // STUDIES
  async createStudy(data: InsertStudy): Promise<Study> {
    const result = await db.insert(studies).values(data).returning();
    return result[0];
  }

  async getStudies(): Promise<Study[]> {
    return await db.select().from(studies);
  }

  async getStudyById(id: string): Promise<Study | undefined> {
    const result = await db
      .select()
      .from(studies)
      .where(eq(studies.id, id));

    return result[0];
  }

  async deleteStudy(id: string): Promise<void> {
    await db.delete(studies).where(eq(studies.id, id));
  }

  // QUESTIONS
  async createQuestion(data: InsertQuestion): Promise<Question> {
    const result = await db.insert(questions).values(data).returning();
    return result[0];
  }

  async getQuestionsByStudyId(studyId: string): Promise<Question[]> {
    return await db
      .select()
      .from(questions)
      .where(eq(questions.studyId, studyId));
  }

  // RESPONSES
  async createResponse(data: InsertResponse): Promise<Response> {
    const result = await db.insert(responses).values(data).returning();
    return result[0];
  }
}

export const storage = new PostgresStorage();