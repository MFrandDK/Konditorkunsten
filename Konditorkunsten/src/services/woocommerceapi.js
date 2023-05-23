import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "https://emil-jensen-portfolio.dk",
    consumerKey: "ck_d4c144288a9c1d5df1e9e268ecafda2f877f5b97",
    consumerSecret: "cs_f4d0dabcd30ae9c69e7bf0797b9e645e53933e0b",
    version: "wc/v3"
});
export async function fetchWooCommerceProducts() {
    try {
        const response = await api.get("products");
        
        return response;
        
    } catch (error) {
        throw new Error (error);
    }
}

