import Api from './Api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getMetadata(productId: any) {
        var response = await Api().get(`metadata/${productId}`);
        return response.data;
    }
}