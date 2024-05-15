import { Guid } from "guid-typescript";

export interface product{
    idProduct: Guid,
    name: string,
    aliasName: string,
    description: string,
    image?: string,
    idUserCreatedBy?: Guid,
    createdDate?: Date,
    idUserUpdatedBy?: Guid,
    updatedDate?: Date,
    idRefObjectState: Number
}