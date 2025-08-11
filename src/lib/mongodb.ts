import { MongoClient, Db, Collection } from 'mongodb'

let client: MongoClient | null = null
let db: Db | null = null
let connectionError: Error | null = null

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const DB_NAME = process.env.MONGODB_DB_NAME || 'portfolio'

export async function connectToDatabase(): Promise<Db | null> {
  if (connectionError) {
    console.error('MongoDB connection error:', connectionError)
    return null
  }

  if (db) {
    return db
  }

  try {
    if (!client) {
      client = new MongoClient(MONGODB_URI)
      await client.connect()
      console.log('Connected to MongoDB successfully')
    }

    db = client.db(DB_NAME)
    return db
  } catch (error) {
    connectionError = error as Error
    console.error('Failed to connect to MongoDB:', error)
    return null
  }
}

export async function getFeedbackCollection(): Promise<Collection | null> {
  try {
    const database = await connectToDatabase()
    if (!database) {
      console.error('No database connection available')
      return null
    }
    return database.collection('feedback')
  } catch (error) {
    console.error('Error getting feedback collection:', error)
    return null
  }
}

export interface FeedbackDocument {
  _id?: string
  name?: string
  email?: string
  message: string
  createdAt: Date
  userAgent?: string
  ipAddress?: string
}