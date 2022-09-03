import Api from './Api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getAllProducts() {
        var response = await Api().get('product');
        return response.data;
    }
}