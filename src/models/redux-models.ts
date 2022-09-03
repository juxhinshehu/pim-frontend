export interface ProductModel{
    "id": number,
    "image": string,
    "label": string,
    "status": boolean,
    "complete": number,
}

export interface ProductArrayModel{
    products:ProductModel[],
}

export interface MetadataModel{
    "id": number,
    "product_id": number,
    "url": string
}

export interface MetadataArrayModel{
    metadata: MetadataModel[]
}