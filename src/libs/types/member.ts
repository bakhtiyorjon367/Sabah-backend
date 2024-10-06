import {ObjectId} from 'mongoose';
import { MemberStatus, MemberType } from "../enums/member.enum";
import { Request } from 'express';
import { Session } from 'express-session';

export interface Member{            //Response form from DataBase
    _id: ObjectId;
    memberType:   MemberType;
    memberStatus: MemberStatus;
    memberNick:    string;
    memberPhone:   string;
    memberPassword?:string;
    memberAddress?:string;
    memberDesc?:   string;
    memberImage?:  string;
    memberPoints: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface MemberInput{        // Input form to DataBase
    memberType?:   MemberType;
    memberStatus?: MemberStatus;
    memberNick:    string;
    memberPhone:   string;
    memberPassword:string;
    memberAddress?:string;
    memberDesc?:   string;
    memberImage?:  string;
    memberPoints?: number;
}

export interface LoginInput {
    memberNick:    string;
    memberPassword:string;
}

export interface MemberUpdateInput{        // Input:type to updateUser
    _id: ObjectId;
    memberStatus?: MemberStatus;
    memberNick?:    string;
    memberPhone?:   string;
    memberPassword?:string;
    memberAddress?:string;
    memberDesc?:   string;
    memberImage?:  string;
   
}

export interface AdminRequest extends Request{
    member: Member;
    session: Session & {member:Member};
    file:  Express.Multer.File;
    files: Express.Multer.File[];

}

export interface ExtendedRequest extends Request{
    member: Member;
    file:  Express.Multer.File;
    files: Express.Multer.File[];

}