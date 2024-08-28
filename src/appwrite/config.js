import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredimage, status, userid}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDtabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost:: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredimage, status, userid}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDtabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost:: error", error);
        }
    }

    async deletePost (slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDtabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost:: error", error);
            return false
        }
    }

    async getPost (slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDtabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false
        }
    }

    async getPosts () {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDtabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal('status', 'active')
                ]
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false
        }
    }

    // file upload service

    async createFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Appwrite service :: createFile :: error', error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                fileId
            ) 
            return true
        } catch (error) {
            console.log('Appwrite service :: deleteFile :: error', error)
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()

export default service